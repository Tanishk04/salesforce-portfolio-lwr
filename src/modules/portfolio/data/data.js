/** Shared portfolio content imported by page components */

const SALESFORCE_ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='18' fill='%2300A1E0'/%3E%3Cpath fill='%23fff' d='M43.5 29.2c-.6-4.2-4.2-7.4-8.6-7.4-3.3 0-6.2 1.8-7.7 4.6-.8-.4-1.7-.6-2.7-.6-3.4 0-6.1 2.7-6.1 6.1 0 3.4 2.7 6.1 6.1 6.1h18.1c3.1 0 5.6-2.5 5.6-5.6 0-2.9-2.1-5.2-4.7-5.6Z'/%3E%3C/svg%3E";

export const navLinks = [
  { id: 'n1', href: '/', label: 'Home', key: 'home' },
  { id: 'n2', href: '/about', label: 'About', key: 'about' },
  { id: 'n3', href: '/skills', label: 'Skills', key: 'skills' },
  { id: 'n4', href: '/projects', label: 'Projects', key: 'projects' },
  { id: 'n5', href: '/contact', label: 'Contact', key: 'contact' },
];

export const profile = {
  name: 'Tanishk Raikwar',
  title: 'Salesforce Developer',
  tagline:
    'Computer Science and Engineering graduate with a strong foundation in software development and a growing focus on Salesforce, Python, and modern data-driven technology.',
  location: 'India',
  phone: '+91 62637 63747',
};

export const contact = {
  email: 'tr15042001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tanishk-raikwar-a635201a6/',
  github: 'https://github.com/Tanishk04/Tanishk04',
  resume: '',
};

export const about = {
  background:
    'I am a Computer Science and Engineering graduate with a strong foundation in software development and a growing expertise in Salesforce, Python, and modern data-driven technologies.',
  focus:
    'Currently, I am working on Salesforce projects where I build and test automations, optimize workflows, and design scalable solutions that improve efficiency and user experience.',
  direction:
    'Alongside Salesforce, I enjoy backend development, data engineering, DevOps, and experimenting with tools and agentic workflows that make real work faster and better.',
};

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

export const skillGroups = [
  {
    id: 'sg1',
    title: 'Salesforce',
    items: [
      { id: 's1', label: 'Salesforce', icon: SALESFORCE_ICON },
      { id: 's2', label: 'Apex', icon: SALESFORCE_ICON },
      { id: 's3', label: 'SOQL', icon: SALESFORCE_ICON },
      { id: 's4', label: 'Lightning Web Components', icon: SALESFORCE_ICON },
      { id: 's5', label: 'Flows', icon: SALESFORCE_ICON },
    ],
  },
  {
    id: 'sg2',
    title: 'Backend and web',
    items: [
      { id: 's10', label: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
      { id: 's11', label: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
      { id: 's12', label: 'REST APIs', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
      { id: 's13', label: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
      { id: 's14', label: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { id: 's15', label: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    ],
  },
  {
    id: 'sg3',
    title: 'Data, cloud, and tools',
    items: [
      { id: 's20', label: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      { id: 's21', label: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { id: 's22', label: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
      { id: 's23', label: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717' },
      { id: 's24', label: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
      { id: 's25', label: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { id: 's26', label: 'ETL thinking', icon: 'https://cdn.simpleicons.org/apacheairflow/017CEE' },
      { id: 's27', label: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
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
    name: 'Placeholder Project 01',
    period: 'Placeholder',
    summary: 'A future Salesforce case study will go here once it is polished enough to present clearly.',
    stack: 'Salesforce placeholder',
    bullets: [
      { id: 'p1b1', text: 'Reserved for a real automation or workflow project.' },
      { id: 'p1b2', text: 'Will focus on the problem, approach, and result rather than filler detail.' },
    ],
    status: 'Placeholder',
  },
  {
    id: 'p2',
    name: 'Placeholder Project 02',
    period: 'Placeholder',
    summary: 'This slot is kept for a backend or data-oriented build that deserves a proper write-up later.',
    stack: 'Python or data placeholder',
    bullets: [
      { id: 'p2b1', text: 'Intended for a simple but honest project summary.' },
      { id: 'p2b2', text: 'Will be updated when there is real work worth showing.' },
    ],
    status: 'Placeholder',
  },
  {
    id: 'p3',
    name: 'Placeholder Project 03',
    period: 'Placeholder',
    summary: 'A future tools or agentic workflow experiment can live here when it turns into something solid.',
    stack: 'Tools placeholder',
    bullets: [
      { id: 'p3b1', text: 'Reserved for experiments that become practical enough to showcase.' },
    ],
    status: 'Placeholder',
  },
];

export const problemExamples = [
  {
    id: 'ps1',
    problem: 'Manual work takes too much time.',
    solution: 'Use automation and better workflow design where it creates clear value.',
    outcome: 'More consistency and less repetitive effort.',
  },
  {
    id: 'ps2',
    problem: 'Data moves in messy ways.',
    solution: 'Think through the structure, handoff points, and API or pipeline design early.',
    outcome: 'Cleaner systems that are easier to extend and debug.',
  },
];

export const currentWork = {
  learning: [
    'Backend development and data engineering concepts.',
    'Cloud platforms, REST APIs, and ETL pipelines.',
    'Agentic workflows and practical AI-assisted tooling.',
  ],
  building: [
    'Salesforce automations and workflow improvements.',
    'Scalable solutions that improve efficiency and user experience.',
  ],
  exploring: [
    'How problem-solving can be improved with better tooling.',
    'Ways to connect software, data, and automation into useful systems.',
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
