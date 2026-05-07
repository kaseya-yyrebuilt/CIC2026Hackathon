# AWS Bedrock Summary API

This folder contains a Lambda handler that replaces the local demo AI summary with Amazon Bedrock.

## Lambda Runtime

Use Node.js 20 or newer.

## Environment Variables

- `AWS_REGION`: AWS region where Bedrock is enabled, for example `us-east-1`
- `BEDROCK_MODEL_ID`: Bedrock model ID, default `anthropic.claude-3-5-sonnet-20240620-v1:0`
- `ALLOWED_ORIGIN`: optional CORS origin for the frontend

## IAM Permission

The Lambda role needs permission to invoke the selected Bedrock model:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "bedrock:InvokeModel",
      "Resource": "*"
    }
  ]
}
```

## Frontend Configuration

After deploying the Lambda behind API Gateway, set the endpoint in the browser console:

```js
localStorage.setItem("proofhire-ai-endpoint", "https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/summary")
```

Then refresh the app and click **Generate AI Summary**. If the API call fails, the app falls back to the local MVP summary.
