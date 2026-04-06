import { LightningElement } from 'lwc';
import {
  about as bio,
  achievements,
  contact,
  experience,
  navLinks,
  problemExamples,
  profile,
  projects,
  skillGroups,
} from 'portfolio/data';
import { applyDocumentShell, setDocumentTitle } from 'portfolio/utils';

const DEFAULT_PAGE = 'home';
const PAGE_TITLES = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  contact: 'Contact',
};

export default class App extends LightningElement {
  profile = profile;
  contact = contact;
  bio = bio;
  experience = experience;
  achievements = achievements;
  problemExamples = problemExamples;
  skillGroups = skillGroups;
  projects = projects;
  currentPage = DEFAULT_PAGE;
  isReady = false;
  pageStageState = 'is-visible';

  heroHighlights = ['Salesforce', 'Python', 'Backend', 'Data', 'Agentic Tools'];

  heroFloaterBase = [
    {
      id: 'tf1',
      label: 'Salesforce',
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='18' fill='%2300A1E0'/%3E%3Cpath fill='%23fff' d='M43.5 29.2c-.6-4.2-4.2-7.4-8.6-7.4-3.3 0-6.2 1.8-7.7 4.6-.8-.4-1.7-.6-2.7-.6-3.4 0-6.1 2.7-6.1 6.1 0 3.4 2.7 6.1 6.1 6.1h18.1c3.1 0 5.6-2.5 5.6-5.6 0-2.9-2.1-5.2-4.7-5.6Z'/%3E%3C/svg%3E",
    },
    { id: 'tf2', label: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
    { id: 'tf3', label: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
    { id: 'tf4', label: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { id: 'tf5', label: 'Postman', icon: 'https://cdn.simpleicons.org/postman/FF6C37' },
    { id: 'tf6', label: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { id: 'tf7', label: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { id: 'tf8', label: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
    { id: 'tf9', label: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { id: 'tf10', label: 'Django', icon: 'https://cdn.simpleicons.org/django/092E20' },
    { id: 'tf11', label: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
    { id: 'tf12', label: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
    { id: 'tf13', label: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ];

  heroStats = [
    {
      id: 'hs1',
      label: 'Current work',
      value: 'Salesforce projects',
      meta: 'Automations, workflows, and scalable solutions',
    },
    {
      id: 'hs2',
      label: 'Growing into',
      value: 'Backend and data',
      meta: 'REST APIs, ETL thinking, and cloud workflows',
    },
    {
      id: 'hs3',
      label: 'What I enjoy',
      value: 'Tools and agentic systems',
      meta: 'Practical experiments that improve how work gets done',
    },
  ];

  serviceCards = [
    {
      id: 'svc1',
      title: 'Salesforce development',
      body: 'Building and testing automations, improving workflows, and shaping solutions that are practical to use and maintain.',
    },
    {
      id: 'svc2',
      title: 'Backend and data interest',
      body: 'Exploring APIs, ETL thinking, and data-driven systems that connect cleanly to real product and business needs.',
    },
    {
      id: 'svc3',
      title: 'Tools and workflows',
      body: 'Using useful tooling, including agentic workflows, to move faster while keeping the work simple and understandable.',
    },
  ];

  projectFilters = ['Placeholder', 'Salesforce', 'Python', 'Data', 'Tools'];

  socialCards = [
    { id: 'sc1', label: 'Email', value: 'tr15042001@gmail.com', href: 'mailto:tr15042001@gmail.com' },
    { id: 'sc2', label: 'LinkedIn', value: 'Tanishk Raikwar', href: 'https://www.linkedin.com/in/tanishk-raikwar-a635201a6/' },
    { id: 'sc3', label: 'GitHub', value: 'Tanishk04', href: 'https://github.com/Tanishk04/Tanishk04' },
  ];

  _launchTimer;
  _routeTimer;
  _techStage;
  _techNodes = [];
  _techState = [];
  _techFrame;
  _techPointer = null;
  _techSeed = Math.random();

  connectedCallback() {
    applyDocumentShell();
    this.currentPage = this.resolvePageKey(typeof window !== 'undefined' ? window.location.pathname : '/');
    this.syncPageMeta();
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', this.handlePopState);
      this._launchTimer = window.setTimeout(() => {
        this.isReady = true;
      }, 950);
    }
  }

  disconnectedCallback() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('popstate', this.handlePopState);
      window.clearTimeout(this._launchTimer);
      window.clearTimeout(this._routeTimer);
    }
    this.teardownTechField();
  }

  renderedCallback() {
    if (this.isHomePage) {
      this.initTechField();
      return;
    }
    this.teardownTechField();
  }

  handlePopState = () => {
    const nextPage = this.resolvePageKey(window.location.pathname);
    this.startRouteTransition(nextPage, null, false);
  };

  handleRouteClick(event) {
    const href = event.currentTarget.dataset.route;
    if (!href) {
      return;
    }

    const nextPage = this.resolvePageKey(href);
    if (typeof window !== 'undefined' && nextPage === this.currentPage && href === window.location.pathname) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    this.startRouteTransition(nextPage, href, true);
  }

  handleTechFieldMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();
    this._techPointer = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
  }

  handleTechFieldLeave() {
    this._techPointer = null;
  }

  initTechField() {
    const stage = this.template.querySelector('.tech-stage');
    if (!stage) {
      return;
    }

    const nodes = [...stage.querySelectorAll('.tech-badge')];
    if (!nodes.length) {
      return;
    }

    if (this._techStage === stage && this._techNodes.length === nodes.length && this._techFrame) {
      return;
    }

    this.teardownTechField();
    this._techStage = stage;
    this._techNodes = nodes;

    const bounds = stage.getBoundingClientRect();
    const iconSize = nodes[0].offsetWidth || 54;
    const padding = 14;
    const maxX = Math.max(padding, bounds.width - iconSize - padding);
    const maxY = Math.max(padding, bounds.height - iconSize - padding);

    this._techState = this.createInitialTechState(maxX, maxY, iconSize, padding);

    this.runTechFieldFrame();
  }

  createInitialTechState(maxX, maxY, iconSize, padding) {
    const placed = [];
    const minDistance = iconSize * 1.08;

    this.heroFloaterBase.forEach((_, index) => {
      let next = null;

      for (let attempt = 0; attempt < 120; attempt += 1) {
        const seed = this._techSeed + index * 17 + attempt * 31;
        const x = padding + ((Math.sin(seed * 1.37) + 1) / 2) * (maxX - padding);
        const y = padding + ((Math.cos(seed * 1.91) + 1) / 2) * (maxY - padding);
        const clear = placed.every((item) => Math.hypot(item.x - x, item.y - y) >= minDistance);
        if (clear) {
          const angle = seed * 2.3;
          const speed = 0.38 + ((Math.sin(seed) + 1) / 2) * 0.34;
          next = {
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
          };
          break;
        }
      }

      if (!next) {
        const angle = (index + 1) * 1.9;
        next = {
          x: padding + (index % 4) * (iconSize * 1.2),
          y: padding + Math.floor(index / 4) * (iconSize * 1.1),
          vx: Math.cos(angle) * 0.42,
          vy: Math.sin(angle) * 0.42,
        };
      }

      placed.push(next);
    });

    return placed;
  }

  teardownTechField() {
    if (typeof window !== 'undefined' && this._techFrame) {
      window.cancelAnimationFrame(this._techFrame);
    }
    this._techFrame = null;
    this._techStage = null;
    this._techNodes = [];
    this._techState = [];
    this._techPointer = null;
  }

  runTechFieldFrame = () => {
    if (!this._techStage || !this._techNodes.length) {
      return;
    }

    const bounds = this._techStage.getBoundingClientRect();
    const iconSize = this._techNodes[0].offsetWidth || 54;
    const radius = iconSize * 1.05;
    const padding = 12;
    const maxX = Math.max(padding, bounds.width - iconSize - padding);
    const maxY = Math.max(padding, bounds.height - iconSize - padding);
    const centerX = maxX / 2 + iconSize / 2;
    const centerY = maxY / 2 + iconSize / 2;

    this._techState.forEach((state, index) => {
      const drift = performance.now() * 0.00012 + index;
      state.vx += Math.cos(drift) * 0.012;
      state.vy += Math.sin(drift * 1.2) * 0.012;

      const nodeCenterX = state.x + iconSize / 2;
      const nodeCenterY = state.y + iconSize / 2;
      state.vx += (centerX - nodeCenterX) * 0.0007;
      state.vy += (centerY - nodeCenterY) * 0.0007;

      if (this._techPointer) {
        const dx = nodeCenterX - this._techPointer.x;
        const dy = nodeCenterY - this._techPointer.y;
        const distance = Math.hypot(dx, dy) || 1;
        const influence = Math.max(0, 110 - distance) / 110;
        const push = influence * 0.8;
        state.vx += (dx / distance) * push;
        state.vy += (dy / distance) * push;
      }

      state.vx = Math.max(-1.3, Math.min(1.3, state.vx * 0.996));
      state.vy = Math.max(-1.3, Math.min(1.3, state.vy * 0.996));
      state.x += state.vx;
      state.y += state.vy;

      if (state.x <= padding || state.x >= maxX) {
        state.vx *= -1;
        state.x = Math.max(padding, Math.min(maxX, state.x));
      }
      if (state.y <= padding || state.y >= maxY) {
        state.vy *= -1;
        state.y = Math.max(padding, Math.min(maxY, state.y));
      }
    });

    for (let i = 0; i < this._techState.length; i += 1) {
      for (let j = i + 1; j < this._techState.length; j += 1) {
        const a = this._techState[i];
        const b = this._techState[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy) || 1;
        const minDistance = radius;
        if (distance >= minDistance) {
          continue;
        }

        const overlap = (minDistance - distance) / 2;
        const offsetX = (dx / distance) * overlap;
        const offsetY = (dy / distance) * overlap;
        a.x += offsetX;
        a.y += offsetY;
        b.x -= offsetX;
        b.y -= offsetY;
        a.vx += offsetX * 0.05;
        a.vy += offsetY * 0.05;
        b.vx -= offsetX * 0.05;
        b.vy -= offsetY * 0.05;
      }
    }

    this._techNodes.forEach((node, index) => {
      const state = this._techState[index];
      node.style.transform = `translate(${state.x}px, ${state.y}px)`;
    });

    this._techFrame = window.requestAnimationFrame(this.runTechFieldFrame);
  };

  startRouteTransition(nextPage, href, shouldPushHistory) {
    if (typeof window === 'undefined' || !nextPage || nextPage === this.currentPage) {
      return;
    }
    window.clearTimeout(this._routeTimer);
    this.pageStageState = 'is-leaving';
    this._routeTimer = window.setTimeout(() => {
      this.currentPage = nextPage;

      if (shouldPushHistory && href) {
        window.history.pushState({}, '', href);
      }

      this.syncPageMeta();
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      this.pageStageState = 'is-entering';
      this._routeTimer = window.setTimeout(() => {
        this.pageStageState = 'is-visible';
      }, 220);
    }, 140);
  }

  syncPageMeta() {
    const pageTitle = PAGE_TITLES[this.currentPage] || PAGE_TITLES[DEFAULT_PAGE];
    setDocumentTitle(`${pageTitle} | ${this.profile.name} | Salesforce Developer`);
  }

  resolvePageKey(pathname) {
    const normalizedPath = pathname && pathname !== '/' && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname || '/';
    const matched = navLinks.find((link) => link.href === normalizedPath);
    return matched?.key || DEFAULT_PAGE;
  }

  get navRendered() {
    return navLinks.map((link) => ({
      ...link,
      itemClass: this.currentPage === link.key ? 'nav-link is-active' : 'nav-link',
      ariaCurrent: this.currentPage === link.key ? 'page' : null,
    }));
  }

  get shellClass() {
    return this.isReady ? 'shell is-ready' : 'shell';
  }

  get pageStageClass() {
    return `page-stage ${this.pageStageState}`.trim();
  }

  get mailtoHref() {
    return `mailto:${this.contact.email}`;
  }

  get telHref() {
    const compact = this.profile.phone.replace(/\s/g, '');
    return compact ? `tel:${compact}` : '';
  }

  get resumeHref() {
    return this.contact.resume || '';
  }

  get hasResumeLink() {
    return Boolean(this.resumeHref);
  }

  get contactMethods() {
    return [
      {
        id: 'cm1',
        label: 'LinkedIn',
        value: 'Connect professionally',
        meta: 'Best for opportunities, introductions, and longer professional conversations.',
        href: this.contact.linkedin,
        target: '_blank',
        rel: 'noopener noreferrer',
        cta: 'Open profile',
        cardClass: 'contact-card contact-card--featured contact-card--linkedin',
        iconClass: 'contact-card__icon contact-card__icon--linkedin',
      },
      {
        id: 'cm2',
        label: 'GitHub',
        value: 'See my profile',
        meta: 'A better place to look at my public work, experiments, and code presence.',
        href: this.contact.github,
        target: '_blank',
        rel: 'noopener noreferrer',
        cta: 'View GitHub',
        cardClass: 'contact-card contact-card--featured contact-card--github',
        iconClass: 'contact-card__icon contact-card__icon--github',
      },
      {
        id: 'cm3',
        label: 'Email',
        value: this.contact.email,
        meta: 'The best option for direct messages, project discussion, and thoughtful follow-ups.',
        href: this.mailtoHref,
        target: null,
        rel: null,
        cta: 'Send email',
        cardClass: 'contact-card contact-card--featured contact-card--email',
        iconClass: 'contact-card__icon contact-card__icon--email',
      },
      {
        id: 'cm4',
        label: 'Phone',
        value: this.profile.phone,
        meta: 'Useful for quick coordination once we are already in touch.',
        href: this.telHref,
        target: null,
        rel: null,
        cta: 'Call',
        cardClass: 'contact-card contact-card--featured contact-card--phone',
        iconClass: 'contact-card__icon contact-card__icon--phone',
      },
    ];
  }

  get contactTopics() {
    return [
      {
        id: 'ct1',
        title: 'Salesforce workflows',
        body: 'Reach out if the conversation is around automation, workflow improvement, or making an existing process cleaner and easier to maintain.',
      },
      {
        id: 'ct2',
        title: 'Backend and data thinking',
        body: 'I am always interested in discussing APIs, cleaner data flow, ETL ideas, and practical ways to make systems easier to understand.',
      },
      {
        id: 'ct3',
        title: 'Tools and experiments',
        body: 'If you like working with useful tooling, AI-assisted workflows, or agentic systems, that is also a great reason to start a conversation.',
      },
    ];
  }

  get homeFocusCards() {
    return [
      {
        id: 'hf1',
        eyebrow: 'Foundation',
        title: 'Software fundamentals first',
        body: 'Computer Science and Engineering graduate with a strong base in software development.',
      },
      {
        id: 'hf2',
        eyebrow: 'Current focus',
        title: 'Salesforce work with real impact',
        body: 'Working on Salesforce projects with automation, workflow improvement, and scalable solutions.',
      },
      {
        id: 'hf3',
        eyebrow: 'What drives me',
        title: 'Tools, systems, and problem-solving',
        body: 'Interested in backend, data, DevOps, and practical tools that make real work easier.',
      },
    ];
  }

  get processCards() {
    return [
      {
        id: 'pc1',
        number: '01',
        title: 'Understand the problem',
        body: 'Start from the workflow, the friction, and what should become simpler for the people using the system.',
      },
      {
        id: 'pc2',
        number: '02',
        title: 'Keep the system clear',
        body: 'Prefer data flow, automation, and implementation choices that stay readable and easy to improve later.',
      },
      {
        id: 'pc3',
        number: '03',
        title: 'Keep learning while building',
        body: 'Use each project to grow deeper in Salesforce while expanding into backend, data, and tools.',
      },
    ];
  }

  get heroFloaters() {
    return this.heroFloaterBase.map((item, index) => ({
      ...item,
      itemClass: `tech-badge tech-badge--${index + 1}`,
    }));
  }

  get isHomePage() {
    return this.currentPage === 'home';
  }

  get isAboutPage() {
    return this.currentPage === 'about';
  }

  get isSkillsPage() {
    return this.currentPage === 'skills';
  }

  get isProjectsPage() {
    return this.currentPage === 'projects';
  }

  get isContactPage() {
    return this.currentPage === 'contact';
  }
}
