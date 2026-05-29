/** Shared portfolio content imported by page components */

const SALESFORCE_ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='18' fill='%2300A1E0'/%3E%3Cpath fill='%23fff' d='M43.5 29.2c-.6-4.2-4.2-7.4-8.6-7.4-3.3 0-6.2 1.8-7.7 4.6-.8-.4-1.7-.6-2.7-.6-3.4 0-6.1 2.7-6.1 6.1 0 3.4 2.7 6.1 6.1 6.1h18.1c3.1 0 5.6-2.5 5.6-5.6 0-2.9-2.1-5.2-4.7-5.6Z'/%3E%3C/svg%3E";

export const navLinks = [
  { id: 'n1', href: '/', label: 'Home', key: 'home', cta: false },
  { id: 'n2', href: '/about', label: 'About', key: 'about', cta: false },
  { id: 'n3', href: '/skills', label: 'Skills', key: 'skills', cta: false },
  { id: 'n4', href: '/projects', label: 'Projects', key: 'projects', cta: false },
  { id: 'n5', href: '/contact', label: 'Contact', key: 'contact', cta: true },
];

export const profile = {
  name: 'Tanishk Raikwar',
  title: 'Salesforce QA / Developer',
  tagline:
    'Salesforce QA / Developer — building with Apex, LWC, Flows, and Aura by day; learning AI agents, MCP, and RAG on the side.',
  location: 'Ahmedabad, India',
  phone: '+91 62637 63747',
};

export const heroSnapshot = {
  whoami: 'tanishk raikwar — salesforce qa/dev, india',
  now: {
    shipping: 'apex, lwc, flows, aura, integrations',
    learning: 'data cloud, agentforce',
    exploring: 'ai agents, mcp, rag, system design',
    updated: '2026-05',
  },
  email: 'tr15042001@gmail.com',
};

export const contact = {
  email: 'tr15042001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tanishk-raikwar-a635201a6/',
  github: 'https://github.com/Tanishk04',
  trailhead: 'https://www.salesforce.com/trailblazer/fx47e4cowv06hhtjzh',
  resume: 'https://docs.google.com/document/d/1g_71fNbasq-3qUjl5D4zToyHO5C7yOkv/edit?usp=sharing',
};

export const about = {
  intro: [
    "I'm a Salesforce QA / Developer based in Ahmedabad. I work day-to-day on Apex, Lightning Web Components, Flows, and Aura — designing system features, testing them properly, and keeping the solutions clean as they scale.",
    "Python is where I learned to build — Django apps end-to-end, with steady experience across SQL and NoSQL stores. Salesforce is the day job now, and outside of it I keep moving deeper into AI — agents, MCP, RAG — figuring out where they actually pay off in real engineering work.",
    "On the personal side: 250+ LeetCode solves, a Hacktoberfest 2023 open-source contribution streak, and a steady reading habit across system design and AI tooling — the small habits that keep the engineering mind in shape.",
  ],
  meta: {
    location: 'Ahmedabad, India',
    role: 'Salesforce QA / Developer',
    designation: 'Assistant System Engineer',
    company: 'Tata Consultancy Services (TCS)',
    education: 'B.Tech, Computer Science Engineering · 2020–24',
    coding_since: 2020,
    primary_stack: ['salesforce', 'apex', 'lwc', 'flows'],
    open_to_work: true,
    updated: '2026-05',
  },
};

export const principles = [
  {
    id: 'pr1',
    tag: '01 / user',
    title: 'Think like the user',
    body: 'Before any solution, I ask what would actually be useful for the person at the other end of the workflow. Their context shapes the design — not the cleanest abstraction or the newest pattern.',
  },
  {
    id: 'pr2',
    tag: '02 / analysis',
    title: 'Analyse the challenge',
    body: 'Every issue gets pulled apart — what is real friction, what is just symptom, and what would actually make it better. Surface-level fixes age badly, so I take the time to understand the problem from the user perspective first.',
  },
  {
    id: 'pr3',
    tag: '03 / rca',
    title: 'Detailed RCA, fix at the source',
    body: 'When something breaks, I work the issue back to its source — written down, linked to the fix, and shared with the team. So the same problem does not surface again the next sprint.',
  },
  {
    id: 'pr4',
    tag: '04 / design',
    title: 'Design systems that hold up',
    body: 'After the fix lands, I look at what the system needed all along — a cleaner data flow, a sharper boundary, a small reusable abstraction. The goal: the next change is easier than the last, not harder.',
  },
];

export const rightNow = {
  updated: 'May 2026',
  groups: [
    {
      id: 'rn1',
      kind: 'shipping',
      label: 'Shipping',
      cellClass: 'status-cell status-cell--shipping',
      dotClass: 'status-dot status-dot--shipping',
      items: [
        'Apex · LWC · Flows · Aura · Integrations',
        'Functional, regression, and UAT testing on live releases',
      ],
    },
    {
      id: 'rn2',
      kind: 'learning',
      label: 'Learning',
      cellClass: 'status-cell status-cell--learning',
      dotClass: 'status-dot status-dot--learning',
      items: [
        'Data Cloud',
        'Agentforce',
        'Salesforce Integrations',
        'Product management',
      ],
    },
    {
      id: 'rn3',
      kind: 'exploring',
      label: 'Exploring',
      cellClass: 'status-cell status-cell--exploring',
      dotClass: 'status-dot status-dot--exploring',
      items: [
        'AI agents · MCP · RAG patterns',
        'Agentic workflows for engineering',
        'System design fundamentals',
      ],
    },
  ],
};

/* Credentials — Salesforce-first, then other certifications.
   Items marked with `pending: true` are visible placeholders in the UI that
   prompt the user to fill the data in. Set `pending: false` once confirmed. */

export const trailheadProfile = {
  handle: 'fx47e4cowv06hhtjzh',
  url: 'https://www.salesforce.com/trailblazer/fx47e4cowv06hhtjzh',
  rank: 'Expeditioner',
  points: '142,675',
  badges: '92',
  superbadges: '3',
  trails: '5',
};

export const salesforceCertifications = [
  {
    id: 'sfc1',
    name: 'Salesforce Certified Platform Developer',
    code: 'PD I',
    issuer: 'Salesforce',
    year: 'Dec 2024',
    url: 'https://www.salesforce.com/trailblazer/fx47e4cowv06hhtjzh',
    pending: false,
  },
  {
    id: 'sfc2',
    name: 'Salesforce Certified Agentforce Specialist',
    code: 'Agentforce',
    issuer: 'Salesforce',
    year: 'Jun 2025',
    url: 'https://www.salesforce.com/trailblazer/fx47e4cowv06hhtjzh',
    pending: false,
  },
  {
    id: 'sfc3',
    name: 'Salesforce Certified Data 360 Consultant',
    code: 'Data 360',
    issuer: 'Salesforce',
    year: 'Mar 2026',
    url: 'https://www.salesforce.com/trailblazer/fx47e4cowv06hhtjzh',
    pending: false,
  },
];

/* Other certifications — add as they come.
   Hacktoberfest 2023 (open-source contributions) and the Infosys Springboard
   completion are recognised milestones rather than formal certificates, so
   they live in `achievements` (rendered in About → recruiter snapshot). */
export const otherCertifications = [];

export const approach = [
  {
    id: 'a1',
    title: 'Build practical automation',
    body: 'I like solutions that reduce manual work, improve reliability, and feel useful on real projects instead of looking impressive only in demos.',
  },
  {
    id: 'a2',
    title: 'Design clean data flow',
    body: 'I enjoy thinking about how records, APIs, and pipelines should move so the system stays simple, measurable, and easy to improve.',
  },
  {
    id: 'a3',
    title: 'Keep learning through tools',
    body: 'I spend time exploring cloud platforms, backend systems, and agentic tools so I can keep expanding how I solve problems.',
  },
];

const LV_CORE = { level: 'core', levelClass: 'skill-level skill-level--core' };
const LV_GROW = { level: 'growing', levelClass: 'skill-level skill-level--grow' };

export const skillGroups = [
  {
    id: 'sg1',
    title: 'Salesforce',
    items: [
      { id: 's1', label: 'Salesforce', note: 'Platform & admin', ...LV_CORE },
      { id: 's2', label: 'Apex', note: 'Triggers, classes, tests', ...LV_CORE },
      { id: 's3', label: 'SOQL', note: 'Querying & relationships', ...LV_CORE },
      { id: 's4', label: 'Lightning Web Components', note: 'Components & wire adapters', ...LV_CORE },
      { id: 's5', label: 'Flows', note: 'Automation & UX', ...LV_CORE },
    ],
  },
  {
    id: 'sg2',
    title: 'Backend & web',
    items: [
      { id: 's10', label: 'Python', note: 'Scripts, services, tools', icon: 'https://cdn.simpleicons.org/python/000000', ...LV_CORE },
      { id: 's11', label: 'Django', note: 'Web framework patterns', icon: 'https://cdn.simpleicons.org/django/000000', ...LV_GROW },
      { id: 's12', label: 'REST APIs', note: 'Design & integration', icon: 'https://cdn.simpleicons.org/openapiinitiative/000000', ...LV_GROW },
      { id: 's13', label: 'HTML', note: 'Semantic markup', icon: 'https://cdn.simpleicons.org/html5/000000', ...LV_CORE },
      { id: 's14', label: 'CSS', note: 'Layout & design tokens', icon: 'https://cdn.simpleicons.org/css3/000000', ...LV_CORE },
      { id: 's15', label: 'JavaScript', note: 'Browser & runtime', icon: 'https://cdn.simpleicons.org/javascript/000000', ...LV_CORE },
    ],
  },
  {
    id: 'sg3',
    title: 'Data, cloud & tools',
    items: [
      { id: 's20', label: 'MySQL', note: 'Schema, joins, indexes', icon: 'https://cdn.simpleicons.org/mysql/000000', ...LV_CORE },
      { id: 's21', label: 'MongoDB', note: 'Document modelling', icon: 'https://cdn.simpleicons.org/mongodb/000000', ...LV_GROW },
      { id: 's22', label: 'Git', note: 'Branching & history', icon: 'https://cdn.simpleicons.org/git/000000', ...LV_CORE },
      { id: 's23', label: 'GitHub', note: 'Reviews & CI', icon: 'https://cdn.simpleicons.org/github/000000', ...LV_CORE },
      { id: 's24', label: 'Postman', note: 'API testing & collections', icon: 'https://cdn.simpleicons.org/postman/000000', ...LV_CORE },
      { id: 's25', label: 'AWS', note: 'Cloud basics & services', icon: 'https://cdn.simpleicons.org/amazonaws/000000', ...LV_GROW },
      { id: 's26', label: 'ETL thinking', note: 'Pipelines & shape', icon: 'https://cdn.simpleicons.org/apacheairflow/000000', ...LV_GROW },
    ],
  },
];

export const stackJson = {
  salesforce: ['apex', 'flows', 'soql', 'lwc'],
  backend: ['python', 'django', 'rest', 'etl'],
  data: ['mysql', 'mongodb', 'aws'],
  tools: ['git', 'github', 'postman', 'mcp'],
};

/* Merged category cards — replaces both pillarCards and skillGroups on Skills */
const SK_CORE = { level: 'core', levelClass: 'cat-skill__level skill-level--core' };
const SK_GROW = { level: 'growing', levelClass: 'cat-skill__level skill-level--grow' };

export const categories = [
  {
    id: 'cat1',
    num: '01',
    title: 'Salesforce',
    status: 'core',
    statusClass: 'cat-card__status status--core',
    cardClass: 'cat-card cat-card--sf',
    theme:
      'Building and testing automations, improving workflows, and shaping solutions that are practical to use and maintain.',
    skills: [
      { id: 'cs1', label: 'Salesforce', note: 'Platform & admin', icon: null, dotClass: 'cat-skill__dot cat-skill__dot--sf', ...SK_CORE },
      { id: 'cs2', label: 'Apex', note: 'Triggers, classes, tests', icon: null, dotClass: 'cat-skill__dot cat-skill__dot--sf', ...SK_CORE },
      { id: 'cs3', label: 'SOQL', note: 'Querying & relationships', icon: null, dotClass: 'cat-skill__dot cat-skill__dot--sf', ...SK_CORE },
      { id: 'cs4', label: 'Lightning Web Components', note: 'Components & wire adapters', icon: null, dotClass: 'cat-skill__dot cat-skill__dot--sf', ...SK_CORE },
      { id: 'cs5', label: 'Flows', note: 'Automation & UX', icon: null, dotClass: 'cat-skill__dot cat-skill__dot--sf', ...SK_CORE },
      { id: 'cs6', label: 'Process Builder', note: 'Legacy automation maintenance', icon: null, dotClass: 'cat-skill__dot cat-skill__dot--sf', ...SK_CORE },
    ],
  },
  {
    id: 'cat2',
    num: '02',
    title: 'Backend & web',
    status: 'growing',
    statusClass: 'cat-card__status status--grow',
    cardClass: 'cat-card cat-card--backend',
    theme:
      'Exploring APIs, ETL thinking, and data-driven systems that connect cleanly to real product and business needs.',
    skills: [
      { id: 'cs10', label: 'Python',     note: 'Scripts, services, tools', icon: 'https://cdn.simpleicons.org/python/3776AB',  dotClass: null, ...SK_CORE },
      { id: 'cs11', label: 'Django',     note: 'Web framework patterns',   icon: 'https://cdn.simpleicons.org/django/092E20',  dotClass: null, ...SK_GROW },
      { id: 'cs12', label: 'REST APIs',  note: 'Design & integration',     icon: 'https://cdn.simpleicons.org/openapiinitiative/6BA539', dotClass: null, ...SK_GROW },
      { id: 'cs13', label: 'HTML',       note: 'Semantic markup',          icon: 'https://cdn.simpleicons.org/html5/E34F26',   dotClass: null, ...SK_CORE },
      { id: 'cs14', label: 'CSS',        note: 'Layout & design tokens',   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', dotClass: null, ...SK_CORE },
      { id: 'cs15', label: 'JavaScript', note: 'Browser & runtime',        icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', dotClass: null, ...SK_CORE },
    ],
  },
  {
    id: 'cat3',
    num: '03',
    title: 'Data, cloud & tools',
    status: 'exploring',
    statusClass: 'cat-card__status status--explore',
    cardClass: 'cat-card cat-card--tools',
    theme:
      'Using useful tooling, including agentic workflows, to move faster while keeping the work simple and understandable.',
    skills: [
      { id: 'cs20', label: 'MySQL',        note: 'Schema, joins, indexes',   icon: 'https://cdn.simpleicons.org/mysql/4479A1',     dotClass: null, ...SK_CORE },
      { id: 'cs21', label: 'MongoDB',      note: 'Document modelling',       icon: 'https://cdn.simpleicons.org/mongodb/47A248',   dotClass: null, ...SK_GROW },
      { id: 'cs22', label: 'Git',          note: 'Branching & history',      icon: 'https://cdn.simpleicons.org/git/F05032',       dotClass: null, ...SK_CORE },
      { id: 'cs23', label: 'GitHub',       note: 'Reviews & CI',             icon: 'https://cdn.simpleicons.org/github/181717',    dotClass: null, ...SK_CORE },
      { id: 'cs24', label: 'Postman',      note: 'API testing & collections',icon: 'https://cdn.simpleicons.org/postman/FF6C37',   dotClass: null, ...SK_CORE },
      { id: 'cs25', label: 'AWS',          note: 'Cloud basics & services',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', dotClass: null, ...SK_GROW },
      { id: 'cs26', label: 'ETL thinking', note: 'Pipelines & shape',        icon: 'https://cdn.simpleicons.org/apacheairflow/017CEE', dotClass: null, ...SK_GROW },
      { id: 'cs27', label: 'Workbench',    note: 'Salesforce data & metadata', icon: null, dotClass: 'cat-skill__dot cat-skill__dot--sf', ...SK_CORE },
    ],
  },
];

export const experience = [
  {
    id: 'e1',
    company: 'Current work',
    role: 'Salesforce projects',
    period: 'Present',
    highlights: [
      { id: 'e1h1', text: 'Building and testing automations that improve efficiency and reduce repetitive work.' },
      { id: 'e1h2', text: 'Optimizing workflows so teams get cleaner, more reliable day-to-day operations.' },
      { id: 'e1h3', text: 'Designing scalable solutions with a focus on clarity and user experience.' },
    ],
  },
  {
    id: 'e2',
    company: 'Ongoing learning',
    role: 'Backend, data, and DevOps',
    period: 'Growing focus',
    highlights: [
      { id: 'e2h1', text: 'Exploring how cloud platforms, REST APIs, and ETL pipelines fit into practical solutions.' },
      { id: 'e2h2', text: 'Learning how data-driven systems can stay simple, useful, and maintainable over time.' },
      { id: 'e2h3', text: 'Using tools and agentic workflows to work faster and think more clearly.' },
    ],
  },
];

export const projects = [
  {
    id: 'p1',
    name: 'QA Tracker',
    role: 'Personal tool · Salesforce QA · 2026',
    status: 'shipping',
    statusClass: 'proj-status proj-status--shipping',
    cardClass: 'proj-card',
    isSkeleton: false,
    problem:
      'QA work was scattered across spreadsheets, sticky notes, and chat threads — no single view of what was in progress, what was blocked, or how long things actually took.',
    approach:
      'Built a personal kanban tool with Salesforce import, passive time tracking, and an offline-first UI. Layered a full testing pyramid on top — 164 unit/component tests with Vitest plus 30 end-to-end tests with Playwright.',
    result:
      'Single source of truth for daily QA work. Clear time-on-task data. Tests catch regressions before they ship — the tool itself is the proof-of-quality.',
    stack: ['typescript', 'react', 'vitest', 'playwright', 'salesforce'],
    links: [
      { id: 'p1l1', label: 'View on GitHub →', href: 'https://github.com/Tanishk04/qa-tracker', external: true },
    ],
  },
  {
    id: 'p2',
    name: 'Salesforce Portfolio (LWR + LWC)',
    role: 'Personal site · Meta-project · 2026',
    status: 'shipping',
    statusClass: 'proj-status proj-status--shipping',
    cardClass: 'proj-card',
    isSkeleton: false,
    problem:
      "Generic portfolio templates didn't show how I actually work, and a Salesforce developer's site should look like a developer's tool — not a marketing page.",
    approach:
      'Built a single-component LWC app on Lightning Web Runtime. Designed as an engineer-eye view: structured terminals, status badges, mono kickers, scroll-revealed sections. No CMS, no React, no animation libraries.',
    result:
      'A site that reads like a CV in code form — fast, accessible, and easy to update from one data.js file. You are reading it right now.',
    stack: ['lwc', 'lwr', 'css', 'javascript'],
    links: [
      { id: 'p2l1', label: 'View on GitHub →', href: 'https://github.com/Tanishk04/salesforce-portfolio-lwr', external: true },
    ],
  },
  {
    id: 'p3',
    name: 'Service Request & Technician Assignment System',
    role: 'Salesforce application · 2024',
    status: 'shipping',
    statusClass: 'proj-status proj-status--shipping',
    cardClass: 'proj-card',
    isSkeleton: false,
    problem:
      'Service Requests, Service Line Items, Technicians, and Appointments lived across disconnected processes. Assignment was manual, slow, and inconsistent across regions.',
    approach:
      'Designed a single Salesforce data model and used record-triggered Flows to auto-create Service Line Items from a selected service catalogue. Built technician auto-assignment based on specialization and workload balancing, layered approval processes on pricing, and used validation rules to keep the data clean.',
    result:
      'Cut manual assignment time, reduced routing errors, and improved service turnaround. Operations now have a single audit trail from request to closed appointment.',
    stack: ['salesforce', 'apex', 'flows', 'approval-process', 'validation-rules'],
    links: [],
  },
  {
    id: 'p4',
    name: 'More case studies',
    role: 'Salesforce · Reserved',
    status: 'reserved',
    statusClass: 'proj-status proj-status--reserved',
    cardClass: 'proj-card proj-card--skeleton',
    isSkeleton: true,
    reservedLine: '$ drafting: next case study',
    skeletonNote:
      'Reserved for the next polished write-up. The cards above are the most current public view of what I build — drop me an email if you want the inside view in the meantime.',
    stack: ['salesforce', 'apex', 'flows', 'lwc'],
  },
];

export const problemExamples = [
  {
    id: 'ps1',
    problem: 'Manual work taking too much team time.',
    approach: 'Identify the repeated steps, automate where it adds clear value, and leave human judgement where it matters.',
    outcome: 'More consistent operations and fewer hours lost to repetitive work.',
  },
  {
    id: 'ps2',
    problem: 'Data moving through the system in messy, untracked ways.',
    approach: 'Map the handoff points, design the API or pipeline shape early, and write down where state lives.',
    outcome: 'Systems that are easier to extend, easier to debug, and far easier to hand over.',
  },
];

export const currentWork = {
  updated: '2026-05',
  shipping: [
    'Salesforce automations and workflow refactors',
    'Scalable solutions on live customer projects',
  ],
  learning: [
    'Django, REST patterns, ETL pipelines',
    'Cloud basics on AWS',
  ],
  exploring: [
    'Agentic workflows for engineering',
    'Lightweight AI-assisted tooling',
  ],
  // Legacy aliases kept until pages stop using them
  building: [
    'Salesforce automations and workflow refactors',
    'Scalable solutions on live customer projects',
  ],
};

export const achievements = [
  { id: 'ac1', text: 'Growing deeper in Salesforce delivery through hands-on project work.' },
  { id: 'ac2', text: 'Expanding into backend, data engineering, and DevOps concepts.' },
  { id: 'ac3', text: 'Exploring tools and agentic tools because I genuinely enjoy working with them.' },
];

export const careerGoals = {
  shortTerm: 'Grow through diverse industry experience in India while building stronger skills in Salesforce, backend systems, data, and automation.',
  longTerm: 'Contribute on a global scale in places that value innovation, safety, collaboration, and thoughtful engineering.',
};

export const philosophy = [
  { id: 'ph1', text: 'Problem-solving matters more than complexity.' },
  { id: 'ph2', text: 'Automation should save real time and reduce real friction.' },
  { id: 'ph3', text: 'Clean systems and useful tools make better long-term work.' },
];
