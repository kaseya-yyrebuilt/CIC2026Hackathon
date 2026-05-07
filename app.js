const todayIso = "2026-05-07T18:30:00Z";

const seed = {
  session: { role: null, page: "landing", selectedJobId: "job-software", selectedCandidateId: "cand-maya" },
  users: [
    { user_id: "u-candidate", role: "candidate", name: "Maya Chen", email: "candidate@test.com" },
    { user_id: "u-referrer", role: "referrer", name: "Dr. Jane Smith", email: "referrer@test.com" },
    { user_id: "u-employer", role: "employer", name: "Jordan Avery", email: "employer@test.com" }
  ],
  candidates: [
    {
      candidate_id: "cand-maya",
      user_id: "u-candidate",
      name: "Maya Chen",
      email: "candidate@test.com",
      target_role: "Software Engineer",
      bio: "Backend-focused engineer with verified delivery experience across APIs, cloud deployment, and collaborative product teams.",
      skills: ["Python", "AWS", "Backend APIs", "Cloud Deployment", "Team Collaboration", "PostgreSQL"],
      profile_visibility: "public"
    },
    {
      candidate_id: "cand-omar",
      user_id: "u-omar",
      name: "Omar Patel",
      email: "omar@example.com",
      target_role: "Product Analyst",
      bio: "Analytical operator with strong stakeholder communication and experimentation experience.",
      skills: ["SQL", "Experiment Design", "Dashboards", "Stakeholder Communication", "Python"],
      profile_visibility: "public"
    },
    {
      candidate_id: "cand-lena",
      user_id: "u-lena",
      name: "Lena Torres",
      email: "lena@example.com",
      target_role: "Project Coordinator",
      bio: "Organized project lead with reference-backed experience coordinating launches and client communication.",
      skills: ["Project Leadership", "Client Communication", "Documentation", "Scheduling", "Risk Tracking"],
      profile_visibility: "public"
    }
  ],
  referrers: [
    { referrer_id: "ref-jane", user_id: "u-referrer", name: "Dr. Jane Smith", email: "referrer@test.com", title: "Engineering Director", organization: "Northstar Labs", verified_email: true },
    { referrer_id: "ref-eli", user_id: "u-eli", name: "Eli Morgan", email: "eli@example.com", title: "VP Engineering", organization: "Northstar Labs", verified_email: true },
    { referrer_id: "ref-priya", user_id: "u-priya", name: "Priya Nair", email: "priya@example.com", title: "Principal Engineer", organization: "Atlas Cloud", verified_email: true },
    { referrer_id: "ref-diego", user_id: "u-diego", name: "Diego Romero", email: "diego@example.com", title: "Senior Product Manager", organization: "BrightLayer", verified_email: true },
    { referrer_id: "ref-amy", user_id: "u-amy", name: "Amy Williams", email: "amy@example.com", title: "Program Lead", organization: "CivicWorks", verified_email: true }
  ],
  experiences: [
    {
      experience_id: "exp-maya-1",
      candidate_id: "cand-maya",
      job_title: "Backend Engineering Intern",
      organization: "Northstar Labs",
      start_date: "2025-05",
      end_date: "2025-12",
      description: "Built production API endpoints, improved deployment reliability, and collaborated with product teams on customer-facing workflow automation.",
      skills: ["Python", "AWS", "Backend APIs", "Cloud Deployment", "Team Collaboration"],
      status: "verified"
    },
    {
      experience_id: "exp-maya-2",
      candidate_id: "cand-maya",
      job_title: "Student Software Lead",
      organization: "Campus Health Tools",
      start_date: "2024-09",
      end_date: "2025-04",
      description: "Led a small student team building a scheduling dashboard for clinic volunteers.",
      skills: ["React", "PostgreSQL", "Project Leadership"],
      status: "pending"
    },
    {
      experience_id: "exp-omar-1",
      candidate_id: "cand-omar",
      job_title: "Product Analytics Associate",
      organization: "BrightLayer",
      start_date: "2024-01",
      end_date: "2025-08",
      description: "Created dashboards, supported pricing experiments, and translated usage data into product recommendations.",
      skills: ["SQL", "Experiment Design", "Dashboards", "Python"],
      status: "verified"
    },
    {
      experience_id: "exp-lena-1",
      candidate_id: "cand-lena",
      job_title: "Project Coordinator",
      organization: "CivicWorks",
      start_date: "2023-07",
      end_date: "2025-03",
      description: "Coordinated cross-functional delivery plans, tracked risks, and managed client updates for public-sector implementation projects.",
      skills: ["Project Leadership", "Client Communication", "Documentation", "Risk Tracking"],
      status: "verified"
    }
  ],
  requests: [
    {
      request_id: "req-maya-1",
      candidate_id: "cand-maya",
      experience_id: "exp-maya-1",
      referrer_name: "Dr. Jane Smith",
      referrer_email: "referrer@test.com",
      referrer_title: "Engineering Director",
      referrer_organization: "Northstar Labs",
      relationship: "Direct manager",
      status: "submitted",
      created_at: "2026-05-01T16:00:00Z",
      updated_at: todayIso
    },
    {
      request_id: "req-maya-2",
      candidate_id: "cand-maya",
      experience_id: "exp-maya-2",
      referrer_name: "Professor Alan Kim",
      referrer_email: "alan@example.edu",
      referrer_title: "Faculty Mentor",
      referrer_organization: "State University",
      relationship: "Project mentor",
      status: "pending",
      created_at: "2026-05-06T10:00:00Z",
      updated_at: "2026-05-06T10:00:00Z"
    },
    {
      request_id: "req-maya-3",
      candidate_id: "cand-maya",
      experience_id: "exp-maya-1",
      referrer_name: "Eli Morgan",
      referrer_email: "eli@example.com",
      referrer_title: "VP Engineering",
      referrer_organization: "Northstar Labs",
      relationship: "Senior department leader",
      status: "submitted",
      created_at: "2026-04-29T11:00:00Z",
      updated_at: "2026-05-02T14:00:00Z"
    },
    {
      request_id: "req-maya-4",
      candidate_id: "cand-maya",
      experience_id: "exp-maya-1",
      referrer_name: "Priya Nair",
      referrer_email: "priya@example.com",
      referrer_title: "Principal Engineer",
      referrer_organization: "Atlas Cloud",
      relationship: "Technical collaborator",
      status: "submitted",
      created_at: "2026-04-27T09:00:00Z",
      updated_at: "2026-05-03T17:15:00Z"
    },
    {
      request_id: "req-omar-1",
      candidate_id: "cand-omar",
      experience_id: "exp-omar-1",
      referrer_name: "Diego Romero",
      referrer_email: "diego@example.com",
      referrer_title: "Senior Product Manager",
      referrer_organization: "BrightLayer",
      relationship: "Project partner",
      status: "submitted",
      created_at: "2026-04-23T12:30:00Z",
      updated_at: "2026-04-25T15:20:00Z"
    },
    {
      request_id: "req-lena-1",
      candidate_id: "cand-lena",
      experience_id: "exp-lena-1",
      referrer_name: "Amy Williams",
      referrer_email: "amy@example.com",
      referrer_title: "Program Lead",
      referrer_organization: "CivicWorks",
      relationship: "Supervisor",
      status: "submitted",
      created_at: "2026-04-16T18:00:00Z",
      updated_at: "2026-04-18T09:10:00Z"
    }
  ],
  letters: [
    {
      letter_id: "let-maya-1",
      request_id: "req-maya-1",
      candidate_id: "cand-maya",
      experience_id: "exp-maya-1",
      referrer_id: "ref-jane",
      pdf_s3_url: "s3://proofhire-demo/reference-letters/maya-chen-northstar.pdf",
      submitted_at: todayIso,
      verification_status: "verified",
      proof_id: "REF-2026-8A92K1",
      blockchain_hash: "0x9f21ac88d1e842f0b72e4c3b7a4d9e5c",
      letter_text: `To whom it may concern,

I am pleased to recommend Maya Chen, who worked with my engineering group at Northstar Labs as a Backend Engineering Intern. Maya contributed to production API services used by customer success teams and quickly became trusted with work that required care, testing, and clear communication.

Maya's strongest contributions were in Python API development, deployment automation, and incident follow-up. She improved one internal workflow by reducing manual handoffs, documented the service clearly, and coordinated calmly with product and design partners when requirements changed.

I would describe Maya as reliable, technically curious, and unusually strong at turning ambiguity into a concrete implementation plan. She asked precise questions, owned her deliverables, and communicated risks early.

I confirm that this reference reflects my professional experience managing Maya at Northstar Labs.

Dr. Jane Smith
Engineering Director, Northstar Labs`
    },
    {
      letter_id: "let-maya-2",
      request_id: "req-maya-3",
      candidate_id: "cand-maya",
      experience_id: "exp-maya-1",
      referrer_id: "ref-eli",
      pdf_s3_url: "s3://proofhire-demo/reference-letters/maya-chen-eli-morgan.pdf",
      submitted_at: "2026-05-02T14:00:00Z",
      verification_status: "verified",
      proof_id: "REF-2026-M4Y2E7",
      blockchain_hash: "0x7b82ae98c2f4710eb4299dd61ea03c15",
      letter_text: `Maya Chen worked with our backend engineering group at Northstar Labs and earned trust quickly. Although I was not her direct manager, I reviewed her project outcomes during engineering planning and saw consistent evidence of strong ownership.

Maya contributed to API reliability improvements, deployment documentation, and cross-team coordination. She communicated clearly in review meetings and showed maturity when balancing delivery speed with operational risk.

I would consider Maya a strong candidate for a backend software engineering role that values accountability, cloud fluency, and collaborative execution.

Eli Morgan
VP Engineering, Northstar Labs`
    },
    {
      letter_id: "let-maya-3",
      request_id: "req-maya-4",
      candidate_id: "cand-maya",
      experience_id: "exp-maya-1",
      referrer_id: "ref-priya",
      pdf_s3_url: "s3://proofhire-demo/reference-letters/maya-chen-priya-nair.pdf",
      submitted_at: "2026-05-03T17:15:00Z",
      verification_status: "verified",
      proof_id: "REF-2026-P9N3R4",
      blockchain_hash: "0x2dd79c42fce8013a773ca0b6198824de",
      letter_text: `I collaborated with Maya Chen during a Northstar Labs cloud deployment review. Maya was prepared, precise, and comfortable discussing tradeoffs around deployment safety, API behavior, and rollback planning.

Her technical communication stood out. She translated implementation details into decisions the broader team could act on, and she followed up with documentation that reduced ambiguity for future deploys.

Based on my experience, Maya demonstrates practical backend judgment and strong team collaboration.

Priya Nair
Principal Engineer, Atlas Cloud`
    },
    {
      letter_id: "let-omar-1",
      request_id: "req-omar-1",
      candidate_id: "cand-omar",
      experience_id: "exp-omar-1",
      referrer_id: "ref-diego",
      pdf_s3_url: "s3://proofhire-demo/reference-letters/omar-patel-brightlayer.pdf",
      submitted_at: "2026-04-25T15:20:00Z",
      verification_status: "verified",
      proof_id: "REF-2026-4P7Q2B",
      blockchain_hash: "0xa5729cd3e10fb24de8905f4ab12cd337",
      letter_text: `Omar Patel partnered with me on product analytics work at BrightLayer. He built SQL dashboards, interpreted experiment results, and presented findings in a way that helped product teams make faster decisions.

Omar is strongest when he can connect raw data to practical product tradeoffs. His communication with stakeholders was clear and measured, and he consistently documented assumptions behind each analysis.`
    },
    {
      letter_id: "let-lena-1",
      request_id: "req-lena-1",
      candidate_id: "cand-lena",
      experience_id: "exp-lena-1",
      referrer_id: "ref-amy",
      pdf_s3_url: "s3://proofhire-demo/reference-letters/lena-torres-civicworks.pdf",
      submitted_at: "2026-04-18T09:10:00Z",
      verification_status: "verified",
      proof_id: "REF-2026-1L8N6T",
      blockchain_hash: "0xbe14ca77200d9e01a82ff1139ce045bc",
      letter_text: `Lena Torres coordinated delivery work for CivicWorks implementation projects. She managed timelines, client communication, status documentation, and risk tracking across several active projects.

Lena was dependable under pressure and made complex schedules understandable for clients and teammates.`
    }
  ],
  referrerEndorsements: [
    { referrer_id: "ref-jane", person_id: "person-eli", name: "Eli Morgan", title: "VP Engineering", organization: "Northstar Labs", relationship: "Former manager", proof_id: "REF-2025-Q7M2LA" },
    { referrer_id: "ref-jane", person_id: "person-priya", name: "Priya Nair", title: "Principal Engineer", organization: "Atlas Cloud", relationship: "Cross-functional partner", proof_id: "REF-2025-K2Z91P" },
    { referrer_id: "ref-jane", person_id: "person-sam", name: "Sam Rivera", title: "Product Director", organization: "Northstar Labs", relationship: "Product stakeholder", proof_id: "REF-2024-H8C4V3" },
    { referrer_id: "ref-eli", person_id: "person-maria", name: "Maria Santos", title: "Chief Technology Officer", organization: "Northstar Labs", relationship: "Executive sponsor", proof_id: "REF-2025-V4H7QA" },
    { referrer_id: "ref-eli", person_id: "person-devon", name: "Devon Clarke", title: "Director of Platform", organization: "Northstar Labs", relationship: "Peer leader", proof_id: "REF-2025-D8K2MS" },
    { referrer_id: "ref-eli", person_id: "person-linh", name: "Linh Tran", title: "Security Lead", organization: "Northstar Labs", relationship: "Risk review partner", proof_id: "REF-2024-S6N8RC" },
    { referrer_id: "ref-priya", person_id: "person-owen", name: "Owen Brooks", title: "Staff Engineer", organization: "Atlas Cloud", relationship: "Architecture peer", proof_id: "REF-2025-A3F9ZT" },
    { referrer_id: "ref-priya", person_id: "person-kara", name: "Kara Chen", title: "Engineering Manager", organization: "Atlas Cloud", relationship: "Former manager", proof_id: "REF-2024-C7Y1NL" },
    { referrer_id: "ref-priya", person_id: "person-nadia", name: "Nadia Flores", title: "Product Lead", organization: "Atlas Cloud", relationship: "Launch partner", proof_id: "REF-2024-R5U6BQ" },
    { referrer_id: "ref-diego", person_id: "person-hannah", name: "Hannah Lee", title: "Head of Product", organization: "BrightLayer", relationship: "Direct manager", proof_id: "REF-2025-B3R8TP" },
    { referrer_id: "ref-diego", person_id: "person-noah", name: "Noah Brooks", title: "Data Science Lead", organization: "BrightLayer", relationship: "Analytics partner", proof_id: "REF-2024-L6W2AZ" },
    { referrer_id: "ref-amy", person_id: "person-marcus", name: "Marcus Green", title: "Executive Director", organization: "CivicWorks", relationship: "Organization leader", proof_id: "REF-2025-P9J6DN" },
    { referrer_id: "ref-amy", person_id: "person-ines", name: "Ines Ortega", title: "Client Services Lead", organization: "MetroGov", relationship: "Client stakeholder", proof_id: "REF-2024-T1X5RQ" }
  ],
  employer: { employer_id: "emp-1", user_id: "u-employer", name: "Jordan Avery", company_name: "NimbusWorks", company_website: "https://nimbusworks.example" },
  jobs: [
    {
      job_id: "job-software",
      employer_id: "emp-1",
      job_title: "Software Engineer",
      company: "NimbusWorks",
      required_skills: ["Python", "AWS", "Backend APIs", "Cloud Deployment", "Team Collaboration"],
      preferred_skills: ["PostgreSQL", "React", "System Design"],
      description: "Build backend services, own production deployment workflows, and collaborate with product teams on reliable customer-facing systems."
    },
    {
      job_id: "job-analyst",
      employer_id: "emp-1",
      job_title: "Product Analyst",
      company: "NimbusWorks",
      required_skills: ["SQL", "Dashboards", "Experiment Design", "Stakeholder Communication"],
      preferred_skills: ["Python", "Pricing", "Product Strategy"],
      description: "Analyze product usage, run experiments, and turn data into crisp recommendations for product managers."
    },
    {
      job_id: "job-coord",
      employer_id: "emp-1",
      job_title: "Implementation Coordinator",
      company: "NimbusWorks",
      required_skills: ["Project Leadership", "Client Communication", "Documentation", "Risk Tracking"],
      preferred_skills: ["Scheduling", "Public Sector"],
      description: "Coordinate client implementation plans, track risks, and keep cross-functional delivery work moving."
    }
  ],
  ui: { modal: null, toast: null, search: "", skillFilter: "All", minScore: "0", selectedRequestId: "req-maya-1", summaryLoading: false, generatedSummary: null }
};

let state = loadState();

function loadState() {
  const saved = localStorage.getItem("proofhire-state");
  if (!saved) return structuredClone(seed);
  try {
    return mergeSavedState(structuredClone(seed), JSON.parse(saved));
  } catch {
    return structuredClone(seed);
  }
}

function mergeSavedState(base, saved) {
  const merged = { ...base, ...saved };
  const keyedCollections = [
    ["users", "user_id"],
    ["candidates", "candidate_id"],
    ["referrers", "referrer_id"],
    ["experiences", "experience_id"],
    ["requests", "request_id"],
    ["letters", "letter_id"],
    ["referrerEndorsements", "person_id"],
    ["jobs", "job_id"]
  ];

  keyedCollections.forEach(([collection, key]) => {
    merged[collection] = mergeByKey(base[collection] || [], saved[collection] || [], key);
  });

  merged.session = { ...base.session, ...(saved.session || {}) };
  merged.ui = { ...base.ui, ...(saved.ui || {}) };
  merged.employer = { ...base.employer, ...(saved.employer || {}) };
  return merged;
}

function mergeByKey(baseItems, savedItems, key) {
  const items = new Map();
  baseItems.forEach((item) => items.set(item[key], item));
  savedItems.forEach((item) => items.set(item[key], { ...(items.get(item[key]) || {}), ...item }));
  return [...items.values()];
}

function saveState() {
  localStorage.setItem("proofhire-state", JSON.stringify(state));
}

function setState(mutator) {
  mutator(state);
  saveState();
  render();
}

function navigate(page, extras = {}) {
  setState((draft) => {
    draft.session.page = page;
    Object.assign(draft.session, extras);
    draft.ui.modal = null;
  });
}

function login(role) {
  if (!role) {
    setState((draft) => {
      draft.session.role = null;
      draft.session.page = "landing";
    });
    return;
  }
  const page = role === "candidate" ? "candidate-dashboard" : role === "referrer" ? "referrer-dashboard" : "employer-dashboard";
  setState((draft) => {
    draft.session.role = role;
    draft.session.page = page;
  });
}

function toast(message) {
  setState((draft) => {
    draft.ui.toast = message;
  });
  window.setTimeout(() => {
    if (state.ui.toast === message) setState((draft) => { draft.ui.toast = null; });
  }, 2400);
}

function icon(symbol) {
  return `<span aria-hidden="true">${symbol}</span>`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(value));
}

function candidateById(id) {
  return state.candidates.find((candidate) => candidate.candidate_id === id);
}

function jobById(id) {
  return state.jobs.find((job) => job.job_id === id);
}

function experiencesFor(candidateId) {
  return state.experiences.filter((experience) => experience.candidate_id === candidateId);
}

function requestsFor(candidateId) {
  return state.requests.filter((request) => request.candidate_id === candidateId);
}

function lettersFor(candidateId) {
  return state.letters.filter((letter) => letter.candidate_id === candidateId);
}

function referrerFor(letter) {
  return state.referrers.find((referrer) => referrer.referrer_id === letter.referrer_id) || {};
}

function requestFor(letter) {
  return state.requests.find((request) => request.request_id === letter.request_id) || {};
}

function experienceFor(letterOrRequest) {
  return state.experiences.find((experience) => experience.experience_id === letterOrRequest.experience_id) || {};
}

function scoreCandidate(candidate, job) {
  const candidateSkills = new Set(candidate.skills.map((skill) => skill.toLowerCase()));
  experiencesFor(candidate.candidate_id).forEach((experience) => experience.skills.forEach((skill) => candidateSkills.add(skill.toLowerCase())));
  const required = job.required_skills.map((skill) => skill.toLowerCase());
  const preferred = job.preferred_skills.map((skill) => skill.toLowerCase());
  const requiredHits = required.filter((skill) => candidateSkills.has(skill)).length;
  const preferredHits = preferred.filter((skill) => candidateSkills.has(skill)).length;
  const titleHit = candidate.target_role.toLowerCase().includes(job.job_title.split(" ")[0].toLowerCase()) ? 12 : 0;
  const verifiedBonus = Math.min(10, lettersFor(candidate.candidate_id).length * 6);
  return Math.min(98, Math.round((requiredHits / required.length) * 68 + (preferredHits / Math.max(1, preferred.length)) * 10 + titleHit + verifiedBonus));
}

function matchReason(candidate, job) {
  const hits = [...new Set(candidate.skills.filter((skill) => job.required_skills.concat(job.preferred_skills).some((required) => required.toLowerCase() === skill.toLowerCase())))];
  const refCount = lettersFor(candidate.candidate_id).length;
  return `${refCount} verified reference${refCount === 1 ? "" : "s"} support ${hits.slice(0, 3).join(", ") || candidate.target_role.toLowerCase()} experience.`;
}

function allSkills() {
  return ["All", ...new Set(state.candidates.flatMap((candidate) => candidate.skills).sort())];
}

function appChrome(content) {
  const role = state.session.role;
  return `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" href="#" data-nav="landing"><span class="brand-mark">P</span><span>ProofHire</span></a>
        <nav class="nav-actions">
          ${role ? `<span class="badge proof">${role[0].toUpperCase() + role.slice(1)} demo</span>` : ""}
          <button class="btn ghost small" data-nav="login">${icon("->")} Login</button>
          ${role ? `<button class="btn small" data-action="logout">${icon("x")} Log out</button>` : ""}
        </nav>
      </header>
      ${content}
      ${modalTemplate()}
      ${state.ui.toast ? `<div class="toast">${state.ui.toast}</div>` : ""}
    </div>
  `;
}

function landingPage() {
  return appChrome(`
    <main class="screen">
      <section class="hero">
        <div class="hero-copy">
          <h1>Verified references for faster, smarter hiring.</h1>
          <p>Candidates collect trusted reference letters. Employers verify experience and summarize candidate fit in seconds.</p>
          <div class="button-row">
            <button class="btn primary" data-login="candidate">${icon("C")} I am a Candidate</button>
            <button class="btn ghost" data-login="referrer">${icon("R")} I am a Referrer</button>
            <button class="btn accent" data-login="employer">${icon("E")} I am an Employer</button>
          </div>
        </div>
        <div class="hero-panel" aria-label="Verified reference preview">
          <div class="proof-stack">
            <div class="mini-profile">
              <div style="display:flex;align-items:center;gap:12px;min-width:0">
                <div class="avatar">MC</div>
                <div>
                  <strong>Maya Chen</strong>
                  <div class="meta">Software Engineer · 87% match</div>
                </div>
              </div>
              <span class="badge verified">Verified</span>
            </div>
            <div class="card">
              <div class="icon-tile">AI</div>
              <h3>Reference summary</h3>
              <p>Reliable backend engineer with verified Python, AWS, deployment, and collaboration evidence from a direct manager.</p>
            </div>
            <div class="hero-proof">
              <span class="badge verified">Verified on-chain</span>
              <div class="proof-row"><span>Proof ID</span><strong>REF-2026-8A92K1</strong></div>
              <div class="proof-row"><span>Hash</span><strong>0x9f21...9e5c</strong></div>
              <div class="proof-row"><span>Issuer</span><strong>Dr. Jane Smith</strong></div>
              <div class="proof-row"><span>Date</span><strong>May 7, 2026</strong></div>
            </div>
          </div>
        </div>
      </section>
      <section class="grid cols-4" aria-label="Product features">
        ${featureCard("VX", "Verified work experience", "Third-party reference records are tied to specific roles, dates, issuers, and proof IDs.")}
        ${featureCard("PDF", "Reference letter storage", "Referrers can submit a letter or typed reference that stays attached to the profile.")}
        ${featureCard("AI", "AI candidate summary", "Employers get a concise job-fit explanation from verified reference evidence.")}
        ${featureCard("ID", "Blockchain-style proof", "The MVP mocks tamper-resistant proof with hashes, timestamps, and issuer details.")}
      </section>
      <section class="screen" style="padding-left:0;padding-right:0">
        <div class="section-title">
          <div>
            <h2>Built for the reference check moment.</h2>
            <p>Candidate requests a reference, referrer verifies the work, and employer reviews proof-backed evidence without chasing emails.</p>
          </div>
        </div>
        <div class="grid cols-3">
          ${featureCard("1", "Candidate requests", "Create a professional profile and send a reference request for a specific work experience.")}
          ${featureCard("2", "Referrer uploads", "Review the claimed experience, confirm the relationship, and submit a reference letter.")}
          ${featureCard("3", "Employer verifies", "Select a job, rank candidates, inspect letters, and generate a fit summary.")}
        </div>
      </section>
    </main>
  `);
}

function featureCard(mark, title, text) {
  return `<article class="card"><div class="icon-tile">${mark}</div><h3>${title}</h3><p>${text}</p></article>`;
}

function loginPage() {
  return appChrome(`
    <main class="screen">
      <div class="section-title">
        <div>
          <h1>Choose a demo role</h1>
          <p>Use the pre-seeded accounts to jump directly into the role-based workflows.</p>
        </div>
      </div>
      <div class="grid cols-3">
        ${loginCard("candidate", "Candidate", "candidate@test.com", "Create profile, request references, and preview the verified credential profile.")}
        ${loginCard("referrer", "Referrer", "referrer@test.com", "Review pending requests, submit a letter, and generate mocked proof records.")}
        ${loginCard("employer", "Employer", "employer@test.com", "Select a job, search ranked candidates, and generate AI summaries.")}
      </div>
      <section class="card" style="margin-top:18px">
        <div class="form-grid">
          <div class="field"><label>Email</label><input value="employer@test.com" aria-label="Email" /></div>
          <div class="field"><label>Password</label><input value="demo-password" type="password" aria-label="Password" /></div>
          <div class="field full"><label>Role</label><select data-role-select><option>Employer</option><option>Candidate</option><option>Referrer</option></select></div>
        </div>
      </section>
    </main>
  `);
}

function loginCard(role, title, email, description) {
  return `
    <article class="card">
      <div class="icon-tile">${title[0]}</div>
      <h3>${title}</h3>
      <p>${description}</p>
      <p style="margin-top:10px"><strong>${email}</strong></p>
      <button class="btn primary" style="margin-top:16px;width:100%" data-login="${role}">${icon("->")} Continue as ${title}</button>
    </article>
  `;
}

function dashboardShell(active, content) {
  const role = state.session.role;
  const links = role === "candidate"
    ? [["candidate-dashboard", "Dashboard"], ["request-reference", "Request Reference"], ["candidate-preview", "Profile Preview"]]
    : role === "referrer"
      ? [["referrer-dashboard", "Dashboard"], ["referrer-request", "Request Detail"], ["upload-reference", "Upload Letter"]]
      : [["employer-dashboard", "Dashboard"], ["job-detail", "Job Detail"], ["candidate-results", "Candidate Results"], ["candidate-profile", "Verification Profile"]];

  return appChrome(`
    <main class="screen page-grid">
      <aside class="sidebar">
        ${links.map(([page, label]) => `<button class="side-link ${active === page ? "active" : ""}" data-nav="${page}">${label}</button>`).join("")}
      </aside>
      <section class="dashboard">${content}</section>
    </main>
  `);
}

function candidateDashboard() {
  const candidate = candidateById("cand-maya");
  const verified = lettersFor(candidate.candidate_id);
  const pending = requestsFor(candidate.candidate_id).filter((request) => request.status === "pending");
  return dashboardShell("candidate-dashboard", `
    <div class="section-title">
      <div>
        <h1>Candidate Dashboard</h1>
        <p>Your verified profile is ready to share with employers, with one pending request still in motion.</p>
      </div>
      <button class="btn primary" data-nav="request-reference">${icon("+")} Request New Reference</button>
    </div>
    <div class="stat-grid">
      ${stat(candidate.name, "Candidate")}
      ${stat(candidate.target_role, "Target role")}
      ${stat(verified.length, "Verified references")}
      ${stat(pending.length, "Pending requests")}
    </div>
    <article class="card">
      <h3>Profile Summary</h3>
      <p>${candidate.bio}</p>
      <div class="tag-row" style="margin-top:14px">${candidate.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
    </article>
    <div class="grid cols-2">
      <article class="card">
        <h3>Verified Experience</h3>
        <div class="timeline" style="margin-top:14px">${experiencesFor(candidate.candidate_id).map(experienceCard).join("")}</div>
      </article>
      <article class="card">
        <h3>Reference Requests</h3>
        <div class="table-list" style="margin-top:14px">
          ${requestsFor(candidate.candidate_id).map(requestCard).join("")}
        </div>
      </article>
    </div>
    <div class="button-row">
      <button class="btn ghost" data-nav="candidate-preview">${icon("[]")} View Verified Profile</button>
      <button class="btn ghost" data-action="share">${icon("link")} Share Profile</button>
      <button class="btn ghost" data-action="edit-profile">${icon("edit")} Edit Profile</button>
    </div>
  `);
}

function stat(value, label) {
  return `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`;
}

function experienceCard(experience) {
  return `
    <div class="timeline-item">
      <h3>${experience.job_title}</h3>
      <div class="meta">${experience.organization} · ${experience.start_date} to ${experience.end_date} · <span class="badge ${experience.status === "verified" ? "verified" : "pending"}">${experience.status}</span></div>
      <p style="margin-top:8px">${experience.description}</p>
      <div class="tag-row" style="margin-top:10px">${experience.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
    </div>
  `;
}

function requestCard(request) {
  const experience = experienceFor(request);
  return `
    <div class="list-card">
      <div>
        <h3>${request.referrer_name}</h3>
        <div class="meta">${request.relationship} · ${experience.job_title || "New experience"} · <span class="badge ${request.status === "submitted" ? "verified" : "pending"}">${request.status}</span></div>
      </div>
      <button class="btn small ghost" data-request="${request.request_id}">View</button>
    </div>
  `;
}

function requestReferencePage() {
  return dashboardShell("request-reference", `
    <div class="section-title">
      <div>
        <h1>Request Reference</h1>
        <p>Create a work experience record and send it to a referrer for verification.</p>
      </div>
    </div>
    <form class="card" data-form="request-reference">
      <div class="form-grid">
        ${field("job_title", "Job title", "Student Software Lead")}
        ${field("organization", "Company / organization", "Campus Health Tools")}
        ${field("start_date", "Start date", "2025-09")}
        ${field("end_date", "End date", "2026-04")}
        ${field("skills", "Skills demonstrated", "React, PostgreSQL, Project Leadership")}
        ${field("achievement", "Project or achievement summary", "Led a volunteer scheduling dashboard from prototype to pilot.", "textarea", true)}
        ${field("referrer_name", "Referrer name", "Professor Alan Kim")}
        ${field("referrer_email", "Referrer email", "alan@example.edu")}
        ${field("referrer_title", "Referrer title", "Faculty Mentor")}
        ${field("referrer_organization", "Referrer organization", "State University")}
        ${field("relationship", "Relationship", "Project mentor", "text", true)}
      </div>
      <div class="button-row" style="margin-top:18px">
        <button class="btn primary" type="submit">${icon("send")} Send Reference Request</button>
        <button class="btn ghost" type="button" data-action="save-draft">Save Draft</button>
        <button class="btn ghost" type="button" data-nav="candidate-dashboard">Cancel</button>
      </div>
    </form>
  `);
}

function field(name, label, value, type = "text", full = false) {
  if (type === "textarea") {
    return `<div class="field ${full ? "full" : ""}"><label>${label}</label><textarea name="${name}">${value}</textarea></div>`;
  }
  return `<div class="field ${full ? "full" : ""}"><label>${label}</label><input name="${name}" value="${value}" /></div>`;
}

function candidatePreviewPage() {
  return dashboardShell("candidate-preview", profileView("cand-maya", false));
}

function referrerDashboard() {
  const pending = state.requests.filter((request) => request.referrer_email === "referrer@test.com" || request.status === "pending");
  const completed = state.requests.filter((request) => request.status === "submitted");
  return dashboardShell("referrer-dashboard", `
    <div class="section-title">
      <div>
        <h1>Referrer Dashboard</h1>
        <p>Review candidate claims and submit reference letters with a confirmation record.</p>
      </div>
    </div>
    <div class="grid cols-2">
      <article class="card">
        <h3>Dr. Jane Smith</h3>
        <p>Engineering Director at Northstar Labs</p>
        <div class="tag-row" style="margin-top:14px"><span class="badge verified">Verified email</span><span class="badge proof">Issuer profile</span></div>
      </article>
      <article class="card">
        <h3>Reference Activity</h3>
        <div class="stat-grid" style="grid-template-columns:repeat(2,minmax(0,1fr));margin-top:12px">${stat(pending.filter((request) => request.status === "pending").length, "Needs action")}${stat(completed.length, "Completed")}</div>
      </article>
    </div>
    <article class="card">
      <h3>Pending Requests</h3>
      <div class="table-list" style="margin-top:14px">
        ${pending.map((request) => referrerRequestCard(request)).join("")}
      </div>
    </article>
  `);
}

function referrerRequestCard(request) {
  const candidate = candidateById(request.candidate_id);
  const experience = experienceFor(request);
  return `
    <div class="list-card">
      <div>
        <h3>${candidate.name}</h3>
        <div class="meta">${experience.job_title} · ${experience.organization} · ${request.relationship} · <span class="badge ${request.status === "submitted" ? "verified" : "pending"}">${request.status}</span></div>
      </div>
      <div class="button-row">
        <button class="btn small ghost" data-select-request="${request.request_id}" data-nav="referrer-request">Review</button>
        <button class="btn small primary" data-select-request="${request.request_id}" data-nav="upload-reference">Upload</button>
      </div>
    </div>
  `;
}

function referrerRequestDetailPage() {
  const request = state.requests.find((item) => item.request_id === state.ui.selectedRequestId) || state.requests[0];
  const candidate = candidateById(request.candidate_id);
  const experience = experienceFor(request);
  return dashboardShell("referrer-request", `
    <div class="section-title">
      <div>
        <h1>Reference Request Detail</h1>
        <p>Confirm the work experience before attaching a letter and proof record.</p>
      </div>
      <button class="btn primary" data-nav="upload-reference">${icon("upload")} Upload Reference Letter</button>
    </div>
    <div class="split">
      <article class="card">
        <h3>${candidate.name}</h3>
        <p>${candidate.bio}</p>
        <div class="tag-row" style="margin-top:14px">${candidate.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
      </article>
      <article class="card">
        <h3>${request.referrer_name}</h3>
        <p>${request.referrer_title}, ${request.referrer_organization}</p>
        <div class="meta" style="margin-top:10px">Relationship: ${request.relationship}</div>
      </article>
    </div>
    <article class="card">
      ${experienceCard(experience)}
    </article>
    <article class="card">
      <label style="display:flex;gap:10px;align-items:start;font-weight:700;color:#314155">
        <input type="checkbox" checked />
        <span>I confirm that I am the listed referrer and that this reference letter reflects my professional experience with this candidate.</span>
      </label>
      <div class="button-row" style="margin-top:16px">
        <button class="btn primary" data-nav="upload-reference">Submit Verification</button>
        <button class="btn ghost" data-action="request-changes">Request Changes</button>
      </div>
    </article>
  `);
}

function uploadReferencePage() {
  const request = state.requests.find((item) => item.request_id === state.ui.selectedRequestId) || state.requests.find((item) => item.status === "pending") || state.requests[0];
  const candidate = candidateById(request.candidate_id);
  return dashboardShell("upload-reference", `
    <div class="section-title">
      <div>
        <h1>Upload Reference Letter</h1>
        <p>Submit a PDF or paste the letter text. The MVP stores the text for AI summaries and mocks S3/PDF storage.</p>
      </div>
    </div>
    <form class="card" data-form="upload-letter">
      <input type="hidden" name="request_id" value="${request.request_id}" />
      <div class="form-grid">
        <div class="field"><label>Candidate</label><input value="${candidate.name}" disabled /></div>
        <div class="field"><label>Mock PDF upload</label><input name="pdf" type="file" accept="application/pdf" /></div>
        <div class="field full"><label>Reference letter text</label><textarea name="letter_text">I am pleased to verify ${candidate.name}'s work. This candidate demonstrated strong ownership, clear communication, and the skills listed in the submitted experience. I confirm this reference reflects my professional experience with the candidate.</textarea></div>
        <div class="field full"><label><input name="confirmation" type="checkbox" checked /> I confirm this reference is accurate and professionally issued.</label></div>
      </div>
      <div class="button-row" style="margin-top:18px">
        <button class="btn primary" type="submit">${icon("check")} Submit Verification</button>
        <button class="btn ghost" type="button" data-action="save-draft">Save Draft</button>
      </div>
    </form>
  `);
}

function employerDashboard() {
  const job = jobById(state.session.selectedJobId);
  return dashboardShell("employer-dashboard", `
    <div class="section-title">
      <div>
        <h1>Employer Dashboard</h1>
        <p>Select a job opening, search verified candidates, and inspect reference evidence.</p>
      </div>
      <button class="btn primary" data-nav="job-detail">${icon("brief")} Select Job</button>
    </div>
    <div class="grid cols-2">
      <article class="card">
        <h3>${state.employer.name}</h3>
        <p>${state.employer.company_name}</p>
        <div class="tag-row" style="margin-top:14px"><span class="badge proof">Employer profile</span><span class="badge verified">Hiring workspace</span></div>
      </article>
      <article class="card">
        <h3>Candidate Search</h3>
        <div class="field" style="margin-top:12px"><input placeholder="Search by name, skill, company, or role" data-search-input value="${state.ui.search}" /></div>
        <button class="btn primary" style="margin-top:12px" data-nav="candidate-results">${icon("search")} Search Candidate</button>
      </article>
    </div>
    <article class="card">
      <h3>Active Job Openings</h3>
      <div class="table-list" style="margin-top:14px">
        ${state.jobs.map((item) => `
          <div class="list-card">
            <div>
              <h3>${item.job_title}</h3>
              <div class="meta">${item.company} · Required: ${item.required_skills.join(", ")}</div>
            </div>
            <button class="btn small ${item.job_id === job.job_id ? "primary" : "ghost"}" data-job="${item.job_id}" data-nav="job-detail">Select</button>
          </div>
        `).join("")}
      </div>
    </article>
    <article class="card">
      <h3>Recent Verified Candidates</h3>
      <div class="grid cols-3" style="margin-top:14px">${rankedCandidates(job).slice(0, 3).map(candidateResultCard).join("")}</div>
    </article>
  `);
}

function rankedCandidates(job) {
  return state.candidates
    .map((candidate) => ({ ...candidate, score: scoreCandidate(candidate, job), reason: matchReason(candidate, job) }))
    .sort((a, b) => b.score - a.score);
}

function jobDetailPage() {
  const job = jobById(state.session.selectedJobId);
  return dashboardShell("job-detail", `
    <div class="section-title">
      <div>
        <h1>${job.job_title}</h1>
        <p>${job.description}</p>
      </div>
      <button class="btn primary" data-nav="candidate-results">${icon("people")} View Matched Candidates</button>
    </div>
    <div class="grid cols-2">
      <article class="card"><h3>Required Skills</h3><div class="tag-row" style="margin-top:12px">${job.required_skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div></article>
      <article class="card"><h3>Preferred Skills</h3><div class="tag-row" style="margin-top:12px">${job.preferred_skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div></article>
    </div>
    <article class="card">
      <h3>Ranked Matches</h3>
      <div class="table-list" style="margin-top:14px">${rankedCandidates(job).map(candidateListRow).join("")}</div>
    </article>
  `);
}

function candidateResultsPage() {
  const job = jobById(state.session.selectedJobId);
  const query = state.ui.search.toLowerCase().trim();
  const skillFilter = state.ui.skillFilter;
  const minScore = Number(state.ui.minScore);
  const results = rankedCandidates(job).filter((candidate) => {
    const haystack = [candidate.name, candidate.target_role, candidate.bio, ...candidate.skills, ...experiencesFor(candidate.candidate_id).map((exp) => `${exp.job_title} ${exp.organization}`)].join(" ").toLowerCase();
    const skillOk = skillFilter === "All" || candidate.skills.includes(skillFilter);
    return candidate.score >= minScore && skillOk && (!query || haystack.includes(query));
  });
  return dashboardShell("candidate-results", `
    <div class="section-title">
      <div>
        <h1>Candidate Results</h1>
        <p>Ranked by transparent skill overlap, title similarity, and verified reference count.</p>
      </div>
    </div>
    <article class="card">
      <div class="search-tools">
        <div class="field"><label>Search</label><input data-search-input value="${state.ui.search}" placeholder="Name, skill, company, role" /></div>
        <div class="field"><label>Skill</label><select data-filter="skill">${allSkills().map((skill) => `<option ${skill === skillFilter ? "selected" : ""}>${skill}</option>`).join("")}</select></div>
        <div class="field"><label>Min match</label><select data-filter="score">${[0, 60, 75, 85].map((score) => `<option value="${score}" ${String(score) === state.ui.minScore ? "selected" : ""}>${score}%+</option>`).join("")}</select></div>
        <div class="field"><label>Selected job</label><select data-filter="job">${state.jobs.map((item) => `<option value="${item.job_id}" ${item.job_id === job.job_id ? "selected" : ""}>${item.job_title}</option>`).join("")}</select></div>
      </div>
    </article>
    <div class="grid cols-3">
      ${results.length ? results.map(candidateResultCard).join("") : `<div class="empty">No candidates match those filters yet.</div>`}
    </div>
  `);
}

function candidateResultCard(candidate) {
  return `
    <article class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px">
        <div>
          <h3>${candidate.name}</h3>
          <div class="meta">${candidate.target_role} · ${lettersFor(candidate.candidate_id).length} verified refs</div>
        </div>
        <div class="score-ring" style="--score:${candidate.score}%">${candidate.score}%</div>
      </div>
      <p style="margin-top:12px">${candidate.reason}</p>
      <div class="tag-row" style="margin-top:12px">${candidate.skills.slice(0, 4).map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
      <button class="btn primary" style="margin-top:16px;width:100%" data-candidate="${candidate.candidate_id}" data-nav="candidate-profile"> View Verification Profile</button>
    </article>
  `;
}

function candidateListRow(candidate) {
  return `
    <div class="list-card">
      <div>
        <h3>${candidate.name}</h3>
        <div class="meta">${candidate.target_role} · ${candidate.reason}</div>
      </div>
      <div class="button-row">
        <div class="score-ring" style="--score:${candidate.score}%">${candidate.score}%</div>
        <button class="btn small primary" data-candidate="${candidate.candidate_id}" data-nav="candidate-profile">Open</button>
      </div>
    </div>
  `;
}

function candidateProfilePage() {
  const candidateId = state.session.selectedCandidateId || "cand-maya";
  return dashboardShell("candidate-profile", profileView(candidateId, true));
}

function profileView(candidateId, employerMode) {
  const candidate = candidateById(candidateId);
  const job = jobById(state.session.selectedJobId);
  const score = scoreCandidate(candidate, job);
  const letters = lettersFor(candidateId);
  return `
    <div class="section-title">
      <div>
        <h1>${candidate.name}</h1>
        <p>${candidate.bio}</p>
      </div>
      ${employerMode ? `<button class="btn accent" data-action="generate-summary"> AI Summary</button>` : `<button class="btn ghost" data-action="share">${icon("link")} Copy Profile Link</button>`}
    </div>
    <div class="stat-grid">
      ${stat(candidate.target_role, "Target role")}
      ${stat(`${score}%`, "Job match")}
      ${stat(letters.length, "Verified references")}
      ${stat(candidate.profile_visibility, "Visibility")}
    </div>
    <div class="split">
      <section class="grid">
        <article class="card">
          <h3>Match Explanation</h3>
          <p>This candidate matches ${score}% of the ${job.job_title} role based on verified experience, reference-backed strengths, and skill overlap in ${job.required_skills.join(", ")}.</p>
          <div class="tag-row" style="margin-top:14px">${candidate.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
        </article>
        <article class="card">
          <h3>Verified Experience Timeline</h3>
          <div class="timeline" style="margin-top:14px">${experiencesFor(candidateId).map(experienceCard).join("")}</div>
        </article>
      </section>
      <aside class="grid">
        <article class="card">
          <h3>Reference Letters</h3>
          <div class="table-list scroll-list" style="margin-top:14px">${letters.map(referenceCard).join("")}</div>
        </article>
      </aside>
    </div>
  `;
}

function referenceCard(letter) {
  const referrer = referrerFor(letter);
  const request = requestFor(letter);
  return `
    <div class="card" style="box-shadow:none">
      <div style="display:flex;justify-content:space-between;gap:10px;align-items:start">
        <div>
          <h3>${referrer.name || request.referrer_name}</h3>
          <div class="meta">${referrer.title || request.referrer_title} · ${request.relationship || "Professional reference"}</div>
        </div>
        <span class="badge verified">Verified</span>
      </div>
      <div class="meta" style="margin-top:10px">Submitted ${formatDate(letter.submitted_at)}</div>
      <div class="button-row" style="margin-top:12px">
        <button class="btn small ghost" data-letter="${letter.letter_id}" data-modal="letter">View Letter</button>
        <button class="btn small ghost" data-letter="${letter.letter_id}" data-modal="proof">Proof</button>
        <button class="btn small ghost" data-referrer="${referrer.referrer_id}" data-modal="referrer-network">Who is this?</button>
      </div>
    </div>
  `;
}

function proofBlock(letter) {
  const referrer = referrerFor(letter);
  return `
    <div class="hero-proof" style="margin-top:12px">
      <span class="badge verified">Verified on-chain</span>
      <div class="proof-row"><span>Proof ID</span><strong>${letter.proof_id}</strong></div>
      <div class="proof-row"><span>Hash</span><strong>${letter.blockchain_hash.slice(0, 8)}...${letter.blockchain_hash.slice(-6)}</strong></div>
      <div class="proof-row"><span>Timestamp</span><strong>${formatDate(letter.submitted_at)}</strong></div>
      <div class="proof-row"><span>Issuer</span><strong>${referrer.name}</strong></div>
      <button class="btn small ghost" style="margin-top:10px" data-letter="${letter.letter_id}" data-modal="proof">View Proof</button>
    </div>
  `;
}

function modalTemplate() {
  const modal = state.ui.modal;
  if (!modal) return "";
  if (modal.type === "letter") {
    const letter = state.letters.find((item) => item.letter_id === modal.letterId);
    return modalShell("Reference Letter", `
      <p class="meta">Mock PDF: ${letter.pdf_s3_url}</p>
      <div class="letter" style="margin-top:16px">${escapeHtml(letter.letter_text)}</div>
    `);
  }
  if (modal.type === "proof") {
    const letter = state.letters.find((item) => item.letter_id === modal.letterId);
    const referrer = referrerFor(letter);
    return modalShell("Verification Proof", `
      <div class="hero-proof">
        <span class="badge verified">Verified on-chain</span>
        <div class="proof-row"><span>Proof ID</span><strong>${letter.proof_id}</strong></div>
        <div class="proof-row"><span>Hash</span><strong>${letter.blockchain_hash}</strong></div>
        <div class="proof-row"><span>Verified at</span><strong>${new Date(letter.submitted_at).toISOString()}</strong></div>
        <div class="proof-row"><span>Issuer</span><strong>${referrer.name}, ${referrer.organization}</strong></div>
        <div class="proof-row"><span>Status</span><strong>${letter.verification_status}</strong></div>
      </div>
    `);
  }
  if (modal.type === "referrer-network") {
    const referrer = state.referrers.find((item) => item.referrer_id === modal.referrerId);
    return modalShell("Referrer Trust Graph", referrerNetworkHtml(referrer));
  }
  if (modal.type === "summary") {
    return modalShell("AI Summary", state.ui.summaryLoading ? `<div class="empty">Generating summary from verified reference text...</div>` : summaryHtml(state.ui.generatedSummary));
  }
  return "";
}

function modalShell(title, body) {
  return `
    <div class="modal-backdrop" role="dialog" aria-modal="true">
      <div class="modal">
        <div class="modal-head">
          <strong>${title}</strong>
          <button class="btn small ghost" data-action="close-modal">Close</button>
        </div>
        <div class="modal-body">${body}</div>
      </div>
    </div>
  `;
}

function summaryHtml(summary) {
  if (!summary) return "";
  return `
    <div class="summary-panel">
      <div><h3>AI Summary</h3><p>${summary.overall}</p></div>
      <div><h4>Verified Strengths</h4><ul>${summary.strengths.map((item) => `<li>${item}</li>`).join("")}</ul></div>
      <div><h4>Job Fit</h4><p>${summary.job_fit}</p></div>
      <div><h4>Evidence From References</h4><ul>${summary.evidence.map((item) => `<li>${item}</li>`).join("")}</ul></div>
      <div><h4>Potential Gaps</h4><p>${summary.gaps}</p></div>
      <div><h4>Suggested Interview Questions</h4><ul>${summary.suggested_questions.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    </div>
  `;
}

function referrerNetworkHtml(referrer) {
  if (!referrer) return `<div class="empty">No referrer profile found.</div>`;
  const endorsements = state.referrerEndorsements.filter((item) => item.referrer_id === referrer.referrer_id);
  const nodeCount = endorsements.length;
  const positions = [
    { x: 150, y: 54 },
    { x: 58, y: 190 },
    { x: 242, y: 190 },
    { x: 150, y: 270 }
  ];
  return `
    <div class="grid cols-2">
      <div>
        <div class="mini-profile">
          <div style="display:flex;align-items:center;gap:12px;min-width:0">
            <div class="avatar">${initials(referrer.name)}</div>
            <div>
              <strong>${referrer.name}</strong>
              <div class="meta">${referrer.title} · ${referrer.organization}</div>
            </div>
          </div>
          <span class="badge verified">Verified issuer</span>
        </div>
        <p style="margin-top:14px;color:var(--muted);line-height:1.6">
          This graph shows people who previously provided verified references for ${referrer.name}. Each outer node represents a prior reference provider connected to this issuer profile.
        </p>
        <div class="stat-grid" style="grid-template-columns:repeat(2,minmax(0,1fr));margin-top:14px">
          ${stat(nodeCount, "Prior providers")}
          ${stat(referrer.verified_email ? "Yes" : "No", "Email verified")}
        </div>
      </div>
      <div class="card" style="box-shadow:none">
        <svg viewBox="0 0 300 320" role="img" aria-label="Referrer trust graph" style="width:100%;height:auto;display:block">
          ${endorsements.map((item, index) => `<line x1="150" y1="156" x2="${positions[index].x}" y2="${positions[index].y}" stroke="#b8c7d6" stroke-width="2" />`).join("")}
          ${endorsements.map((item, index) => graphNode(positions[index].x, positions[index].y, initials(item.name), "#f1efff", "#7c6ee6")).join("")}
          ${graphNode(150, 156, initials(referrer.name), "#dff7ee", "#0f766e", 34)}
        </svg>
      </div>
    </div>
    <div class="table-list" style="margin-top:16px">
      ${endorsements.map((item) => `
        <div class="list-card">
          <div>
            <h3>${item.name}</h3>
            <div class="meta">${item.title} · ${item.organization} · ${item.relationship}</div>
          </div>
          <span class="badge proof">${item.proof_id}</span>
        </div>
      `).join("") || `<div class="empty">No prior provider graph data is available for this referrer yet.</div>`}
    </div>
  `;
}

function graphNode(x, y, label, fill, color, radius = 28) {
  return `
    <g>
      <circle cx="${x}" cy="${y}" r="${radius}" fill="${fill}" stroke="${color}" stroke-width="2" />
      <text x="${x}" y="${y + 5}" text-anchor="middle" font-size="13" font-weight="800" fill="${color}">${label}</text>
    </g>
  `;
}

function initials(name = "") {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

async function generateSummary(letterId) {
  const candidateId = state.session.selectedCandidateId || "cand-maya";
  const candidate = candidateById(candidateId);
  const job = jobById(state.session.selectedJobId);
  const letters = letterId ? state.letters.filter((letter) => letter.letter_id === letterId) : lettersFor(candidateId);
  setState((draft) => {
    draft.ui.modal = { type: "summary" };
    draft.ui.summaryLoading = true;
  });

  const payload = {
    candidate: {
      id: candidate.candidate_id,
      name: candidate.name,
      target_role: candidate.target_role,
      bio: candidate.bio,
      skills: candidate.skills
    },
    job: {
      id: job.job_id,
      title: job.job_title,
      description: job.description,
      required_skills: job.required_skills,
      preferred_skills: job.preferred_skills
    },
    references: letters.map((letter) => {
      const referrer = referrerFor(letter);
      const experience = experienceFor(letter);
      return {
        letter_id: letter.letter_id,
        referrer_name: referrer.name,
        referrer_title: referrer.title,
        referrer_organization: referrer.organization,
        proof_id: letter.proof_id,
        blockchain_hash: letter.blockchain_hash,
        submitted_at: letter.submitted_at,
        experience: {
          job_title: experience.job_title,
          organization: experience.organization,
          date_range: `${experience.start_date} to ${experience.end_date}`,
          skills: experience.skills,
          description: experience.description
        },
        letter_text: letter.letter_text
      };
    })
  };

  const endpoint = getAiEndpoint();
  if (endpoint) {
    try {
      const summary = await requestAwsSummary(endpoint, payload);
      setState((draft) => {
        draft.ui.summaryLoading = false;
        draft.ui.generatedSummary = normalizeSummary(summary, candidate, job);
      });
      return;
    } catch (error) {
      console.warn("Bedrock summary failed, using local fallback:", error);
      toast("AWS Bedrock summary failed, using local demo summary.");
    }
  }

  window.setTimeout(() => {
    setState((draft) => {
      draft.ui.summaryLoading = false;
      draft.ui.generatedSummary = buildLocalSummary(candidate, job, letters);
    });
  }, 650);
}

function getAiEndpoint() {
  return window.PROOFHIRE_AI_ENDPOINT || localStorage.getItem("proofhire-ai-endpoint") || "";
}

async function requestAwsSummary(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Summary API returned ${response.status}: ${message}`);
  }

  return response.json();
}

function normalizeSummary(summary, candidate, job) {
  return {
    summary_id: summary.summary_id || `sum-${Date.now()}`,
    candidate_id: summary.candidate_id || candidate.candidate_id,
    job_id: summary.job_id || job.job_id,
    overall: summary.overall || "No overall summary returned.",
    strengths: Array.isArray(summary.strengths) ? summary.strengths : [],
    job_fit: summary.job_fit || "No job-fit explanation returned.",
    evidence: Array.isArray(summary.evidence) ? summary.evidence : [],
    gaps: summary.gaps || "No gaps returned.",
    suggested_questions: Array.isArray(summary.suggested_questions) ? summary.suggested_questions : []
  };
}

function buildLocalSummary(candidate, job, letters) {
  const text = letters.map((letter) => letter.letter_text).join("\n\n").toLowerCase();
  const matchedSkills = candidate.skills.filter((skill) => text.includes(skill.toLowerCase()) || job.required_skills.includes(skill));
  return {
    summary_id: `sum-${Date.now()}`,
    candidate_id: candidate.candidate_id,
    job_id: job.job_id,
    overall: `${candidate.name} is described as reliable, technically strong, and collaborative, with verified experience that maps directly to ${job.job_title} responsibilities.`,
    strengths: [
      "Strong ownership of technical tasks and follow-through",
      "Clear communication with teammates and stakeholders",
      `Verified experience with ${matchedSkills.slice(0, 4).join(", ") || candidate.skills.slice(0, 3).join(", ")}`
    ],
    job_fit: `${candidate.name} appears well aligned with the ${job.job_title} role because the references mention practical delivery, collaboration, and skills that overlap with ${job.required_skills.slice(0, 3).join(", ")}.`,
    evidence: [
      "A direct referrer confirmed the candidate's relationship and submitted a signed professional reference.",
      "The work experience includes verified role, organization, date range, issuer, timestamp, proof ID, and hash.",
      matchReason(candidate, job)
    ],
    gaps: "The reference evidence is strong for prior delivery, but the employer may still want to probe depth of system design ownership and recent production scale.",
    suggested_questions: [
      "Can you describe the backend system mentioned in the reference?",
      "How did you handle deployment challenges in that project?",
      "Which part of the verified work would your referrer say best represents your judgment?"
    ]
  };
}

function submitReferenceRequest(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const experienceId = `exp-${Date.now()}`;
  const requestId = `req-${Date.now()}`;
  setState((draft) => {
    draft.experiences.push({
      experience_id: experienceId,
      candidate_id: "cand-maya",
      job_title: data.job_title,
      organization: data.organization,
      start_date: data.start_date,
      end_date: data.end_date,
      description: data.achievement,
      skills: data.skills.split(",").map((skill) => skill.trim()).filter(Boolean),
      status: "pending",
      created_at: new Date().toISOString()
    });
    draft.requests.push({
      request_id: requestId,
      candidate_id: "cand-maya",
      experience_id: experienceId,
      referrer_name: data.referrer_name,
      referrer_email: data.referrer_email,
      referrer_title: data.referrer_title,
      referrer_organization: data.referrer_organization,
      relationship: data.relationship,
      status: "pending",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
    draft.ui.selectedRequestId = requestId;
    draft.session.page = "candidate-dashboard";
  });
  toast(`Invitation link created for ${data.referrer_email}`);
}

function submitLetter(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const request = state.requests.find((item) => item.request_id === data.request_id);
  const referrer = state.referrers.find((item) => item.email === request.referrer_email) || {
    referrer_id: `ref-${Date.now()}`,
    user_id: `u-${Date.now()}`,
    name: request.referrer_name,
    email: request.referrer_email,
    title: request.referrer_title,
    organization: request.referrer_organization,
    verified_email: true
  };
  const timestamp = new Date().toISOString();
  const proofId = `REF-2026-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const hash = fakeHash(`${data.letter_text}${request.candidate_id}${timestamp}`);
  setState((draft) => {
    if (!draft.referrers.some((item) => item.referrer_id === referrer.referrer_id)) draft.referrers.push(referrer);
    const existingLetter = draft.letters.find((item) => item.request_id === request.request_id);
    if (!existingLetter) {
      draft.letters.push({
        letter_id: `let-${Date.now()}`,
        request_id: request.request_id,
        candidate_id: request.candidate_id,
        experience_id: request.experience_id,
        referrer_id: referrer.referrer_id,
        pdf_s3_url: `s3://proofhire-demo/reference-letters/${request.candidate_id}-${request.request_id}.pdf`,
        letter_text: data.letter_text,
        submitted_at: timestamp,
        verification_status: "verified",
        proof_id: proofId,
        blockchain_hash: hash
      });
    }
    const requestRecord = draft.requests.find((item) => item.request_id === request.request_id);
    requestRecord.status = "submitted";
    requestRecord.updated_at = timestamp;
    const experience = draft.experiences.find((item) => item.experience_id === request.experience_id);
    experience.status = "verified";
    draft.session.page = "referrer-dashboard";
  });
  toast(`Verified reference created with proof ${proofId}`);
}

function fakeHash(input) {
  let hash = 0x811c9dc5;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return `0x${Math.abs(hash).toString(16).padStart(8, "0")}${Math.random().toString(16).slice(2, 26).padEnd(24, "0")}`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#039;" }[char]));
}

function render() {
  const routes = {
    landing: landingPage,
    login: loginPage,
    "candidate-dashboard": candidateDashboard,
    "request-reference": requestReferencePage,
    "candidate-preview": candidatePreviewPage,
    "referrer-dashboard": referrerDashboard,
    "referrer-request": referrerRequestDetailPage,
    "upload-reference": uploadReferencePage,
    "employer-dashboard": employerDashboard,
    "job-detail": jobDetailPage,
    "candidate-results": candidateResultsPage,
    "candidate-profile": candidateProfilePage
  };
  document.getElementById("app").innerHTML = (routes[state.session.page] || landingPage)();
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  const loginButton = event.target.closest("[data-login]");
  const action = event.target.closest("[data-action]");
  const modalButton = event.target.closest("[data-modal]");
  const jobButton = event.target.closest("[data-job]");
  const candidateButton = event.target.closest("[data-candidate]");
  const requestButton = event.target.closest("[data-select-request]");
  const requestView = event.target.closest("[data-request]");

  if (loginButton) login(loginButton.dataset.login);
  if (jobButton) state.session.selectedJobId = jobButton.dataset.job;
  if (candidateButton) state.session.selectedCandidateId = candidateButton.dataset.candidate;
  if (requestButton) state.ui.selectedRequestId = requestButton.dataset.selectRequest;
  if (requestView) {
    const request = state.requests.find((item) => item.request_id === requestView.dataset.request);
    toast(`${request.referrer_name}: ${request.status} reference request`);
  }
  if (nav) {
    event.preventDefault();
    navigate(nav.dataset.nav);
  }
  if (modalButton) {
    setState((draft) => {
      draft.ui.modal = { type: modalButton.dataset.modal, letterId: modalButton.dataset.letter, referrerId: modalButton.dataset.referrer };
    });
  }
  if (action) {
    const name = action.dataset.action;
    if (name === "logout") login(null);
    if (name === "close-modal") setState((draft) => { draft.ui.modal = null; });
    if (name === "share") toast("Shareable profile link copied: proofhire.demo/profile/maya-chen");
    if (name === "edit-profile") toast("Profile editing is mocked for the MVP demo.");
    if (name === "save-draft") toast("Draft saved locally.");
    if (name === "request-changes") toast("Change request sent inside the app.");
    if (name === "generate-summary") generateSummary(action.dataset.letter);
  }
});

document.addEventListener("input", (event) => {
  if (event.target.matches("[data-search-input]")) {
    state.ui.search = event.target.value;
    saveState();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-search-input]")) render();
  if (event.target.matches("[data-filter='skill']")) setState((draft) => { draft.ui.skillFilter = event.target.value; });
  if (event.target.matches("[data-filter='score']")) setState((draft) => { draft.ui.minScore = event.target.value; });
  if (event.target.matches("[data-filter='job']")) setState((draft) => { draft.session.selectedJobId = event.target.value; });
});

document.addEventListener("keydown", (event) => {
  if (event.target.matches("[data-search-input]") && event.key === "Enter") {
    event.preventDefault();
    render();
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form");
  if (!form) return;
  event.preventDefault();
  if (form.dataset.form === "request-reference") submitReferenceRequest(form);
  if (form.dataset.form === "upload-letter") submitLetter(form);
});

render();
