import { LightningElement } from 'lwc';
import {
  about as bio,
  categories,
  contact,
  heroSnapshot,
  navLinks,
  otherCertifications,
  principles,
  problemExamples,
  profile,
  projects,
  rightNow,
  salesforceCertifications,
  trailheadProfile,
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
  problemExamples = problemExamples;
  principles = principles;
  rightNow = rightNow;
  projects = projects;
  heroSnapshot = heroSnapshot;
  categories = categories;
  trailheadProfile = trailheadProfile;
  salesforceCertifications = salesforceCertifications;
  otherCertifications = otherCertifications;
  currentPage = DEFAULT_PAGE;
  isReady = false;
  pageStageState = 'is-visible';

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

  projectFilters = ['All', 'Salesforce', 'Backend', 'Data', 'Tools'];

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
    // Tech-stage may live on any page now (currently Skills).
    if (this.template.querySelector('.tech-stage')) {
      this.initTechField();
    } else {
      this.teardownTechField();
    }
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
          const speed = 0.65 + ((Math.sin(seed) + 1) / 2) * 0.55;
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
          vx: Math.cos(angle) * 0.75,
          vy: Math.sin(angle) * 0.75,
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
      const drift = performance.now() * 0.00018 + index;
      state.vx += Math.cos(drift) * 0.022;
      state.vy += Math.sin(drift * 1.2) * 0.022;

      const nodeCenterX = state.x + iconSize / 2;
      const nodeCenterY = state.y + iconSize / 2;
      state.vx += (centerX - nodeCenterX) * 0.0007;
      state.vy += (centerY - nodeCenterY) * 0.0007;

      if (this._techPointer) {
        const dx = nodeCenterX - this._techPointer.x;
        const dy = nodeCenterY - this._techPointer.y;
        const distance = Math.hypot(dx, dy) || 1;
        const influence = Math.max(0, 110 - distance) / 110;
        const push = influence * 1.1;
        state.vx += (dx / distance) * push;
        state.vy += (dy / distance) * push;
      }

      state.vx = Math.max(-2.1, Math.min(2.1, state.vx * 0.997));
      state.vy = Math.max(-2.1, Math.min(2.1, state.vy * 0.997));
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
    return navLinks.map((link) => {
      const isActive = this.currentPage === link.key;
      const classes = ['nav-link'];
      if (link.cta) classes.push('is-cta');
      if (isActive) classes.push('is-active');
      return {
        ...link,
        itemClass: classes.join(' '),
        ariaCurrent: isActive ? 'page' : null,
        ariaLabel: link.cta ? `${link.label} — get in touch` : link.label,
        navText: link.cta ? `${link.label} →` : link.label,
      };
    });
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

  get githubHandle() {
    return (this.contact.github || '').replace(/\/+$/, '').split('/').pop() || 'Tanishk04';
  }

  get hasTrailheadLink() {
    return Boolean(this.trailheadProfile?.url);
  }

  get hasOtherCertifications() {
    return Array.isArray(this.otherCertifications) && this.otherCertifications.length > 0;
  }

  get salesforceCertList() {
    return (this.salesforceCertifications || []).map((c) => ({
      ...c,
      cardClass: c.pending ? 'cert-card cert-card--pending' : 'cert-card',
      hasUrl: Boolean(c.url),
    }));
  }

  get otherCertList() {
    return (this.otherCertifications || []).map((c) => ({
      ...c,
      cardClass: c.pending ? 'cert-card cert-card--pending' : 'cert-card',
      hasUrl: Boolean(c.url),
    }));
  }

  get recruiterSnapshot() {
    return [
      {
        id: 'hr1',
        kicker: 'Role focus',
        items: [
          'Salesforce Developer / QA Engineer',
          'Apex · LWC · Flows · SOQL',
          'Open to Salesforce engineering roles',
        ],
      },
      {
        id: 'hr2',
        kicker: 'Logistics',
        items: [
          'Ready to relocate · open to remote',
          'Time zone: IST (UTC+5:30)',
          'Currently employed · notice negotiable',
          'B.Tech, Computer Science Engineering · 2020–24',
        ],
      },
      {
        id: 'hr3',
        kicker: 'What I bring',
        items: [
          'Shipping Salesforce work in production since Aug 2024',
          '3 Salesforce certs (Platform Dev · Agentforce · Data 360)',
          'Trailhead: 92 badges · 142,675 points · 3 superbadges',
          '250+ LeetCode · Hacktoberfest 2023 · Star of the Month',
        ],
      },
    ];
  }

  get heroFloaters() {
    return this.heroFloaterBase.map((item, index) => ({
      ...item,
      itemClass: `tech-badge tech-badge--${index + 1}`,
    }));
  }

  get bioJsonRows() {
    const m = this.bio.meta;
    const stack = '[' + m.primary_stack.map((s) => `"${s}"`).join(', ') + ']';
    const entries = [
      ['location', `"${m.location}"`],
      ['role', `"${m.role}"`],
      ['designation', `"${m.designation}"`],
      ['company', `"${m.company}"`],
      ['education', `"${m.education}"`],
      ['coding_since', String(m.coding_since)],
      ['primary_stack', stack],
      ['open_to_work', String(m.open_to_work)],
      ['updated', `"${m.updated}"`],
    ];
    return entries.map(([k, v], i) => ({
      id: `br${i}`,
      key: `"${k}"`,
      val: v,
      isLast: i === entries.length - 1,
    }));
  }

  get nowJsonRows() {
    const n = this.heroSnapshot.now;
    const entries = [
      ['shipping', n.shipping],
      ['learning', n.learning],
      ['exploring', n.exploring],
      ['updated', n.updated],
    ];
    return entries.map(([k, v], i) => ({
      id: `jr${i}`,
      key: `"${k}"`,
      val: `"${v}"`,
      isLast: i === entries.length - 1,
    }));
  }

  get heroH1Pre() {
    return 'Salesforce in production.';
  }

  get heroH1Accent() {
    return 'AI in exploration.';
  }

  get heroH1Post() {
    return '';
  }

  get heroLead() {
    return 'Apex, LWC, Flows, Aura, and integrations by day & learning AI engineering and vibe coding my way.';
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
