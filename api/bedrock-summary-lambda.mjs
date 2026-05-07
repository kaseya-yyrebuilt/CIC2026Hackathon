import { BedrockRuntimeClient, ConverseCommand } from "@aws-sdk/client-bedrock-runtime";

const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1"
});

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "OPTIONS,POST"
};

export async function handler(event) {
  if (event.requestContext?.http?.method === "OPTIONS" || event.httpMethod === "OPTIONS") {
    return response(204, "");
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const summary = await summarizeWithBedrock(body);
    return response(200, summary);
  } catch (error) {
    console.error(error);
    return response(500, {
      error: "summary_generation_failed",
      message: error.message
    });
  }
}

async function summarizeWithBedrock({ candidate, job, references }) {
  const modelId = process.env.BEDROCK_MODEL_ID || "anthropic.claude-3-5-sonnet-20240620-v1:0";
  const prompt = buildPrompt(candidate, job, references);

  const command = new ConverseCommand({
    modelId,
    system: [
      {
        text: "You summarize professional references for hiring teams. Return only valid JSON with no markdown."
      }
    ],
    messages: [
      {
        role: "user",
        content: [{ text: prompt }]
      }
    ],
    inferenceConfig: {
      maxTokens: 900,
      temperature: 0.2
    }
  });

  const result = await client.send(command);
  const text = result.output?.message?.content?.map((part) => part.text || "").join("").trim();
  if (!text) throw new Error("Bedrock returned an empty summary.");

  return parseJsonSummary(text, candidate, job);
}

function buildPrompt(candidate, job, references) {
  return JSON.stringify({
    task: "Create a concise reference and job-fit summary for an employer.",
    output_schema: {
      overall: "string",
      strengths: ["string"],
      job_fit: "string",
      evidence: ["string"],
      gaps: "string",
      suggested_questions: ["string"]
    },
    rules: [
      "Use only evidence from the supplied candidate, job, reference, and verification data.",
      "Mention verified proof evidence when relevant.",
      "Keep strengths and suggested_questions to 3 bullets each.",
      "If evidence is missing, say what is unclear instead of inventing facts."
    ],
    candidate,
    job,
    references
  });
}

function parseJsonSummary(text, candidate, job) {
  const cleaned = text.replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
  const parsed = JSON.parse(cleaned);
  return {
    summary_id: `bedrock-${Date.now()}`,
    candidate_id: candidate.id,
    job_id: job.id,
    overall: parsed.overall,
    strengths: parsed.strengths || [],
    job_fit: parsed.job_fit,
    evidence: parsed.evidence || [],
    gaps: parsed.gaps,
    suggested_questions: parsed.suggested_questions || []
  };
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: corsHeaders,
    body: typeof body === "string" ? body : JSON.stringify(body)
  };
}
