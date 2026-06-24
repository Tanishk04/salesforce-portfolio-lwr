# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # dev server with HMR at http://localhost:3000
npm run build        # production build → site/ (runs scripts/fix-redirects.mjs after)
npm run start        # serve the built site/
npm run stage        # build + start in one step
npm run clean        # remove node_modules, __lwr_cache__, site/
```

Node >= 22 required. No test suite — Playwright is used for screenshots only:

```bash
# With the dev server running:
node screenshot-pages.mjs       # full-page screenshots of all 5 routes → screenshots/
node screenshot-widths.mjs      # same at multiple viewport widths
node screenshot-mobile.mjs      # mobile viewport screenshots
```

## Architecture

**Stack:** Lightning Web Runtime (LWR) + LWC OSS. A single `portfolio/app` component is the root for every route.

**Routing:** LWR maps all five paths (`/`, `/about`, `/skills`, `/projects`, `/contact`) to the same `portfolio/app` root component (`lwr.config.json`). Inside the component, client-side routing is handled manually via `history.pushState` + a `popstate` listener — no router library. Page transitions are CSS class swaps (`is-leaving` → `is-entering` → `is-visible`) with short `setTimeout` delays.

**Single source of truth:** All portfolio content lives in [`src/modules/portfolio/data/data.js`](src/modules/portfolio/data/data.js). To update copy, certifications, skills, or projects, edit only that file.

**Component structure:** [`src/modules/portfolio/app/`](src/modules/portfolio/app/) contains the entire app (HTML template, CSS, JS). The other modules under `src/modules/portfolio/` (`home`, `about`, `skills`, `projects`, `contact`) are page-section sub-components. [`src/modules/portfolio/utils/utils.js`](src/modules/portfolio/utils/utils.js) provides `applyDocumentShell`, `setDocumentTitle`, and `initRevealElements` (IntersectionObserver scroll-reveal).

**Tech floater animation:** `app.js` contains a custom particle physics engine (`initTechField`, `runTechFieldFrame`) that animates the skill badges on the Home page using `requestAnimationFrame`. It initialises in `renderedCallback` and tears down on navigation away.

**Custom module provider:** [`tools/lwr-framework-js-module-provider.js`](tools/lwr-framework-js-module-provider.js) serves `lwr/*` runtime specifiers as plain JS, bypassing the LWC compiler. This must run before `@lwrjs/lwc-module-provider` (order is set in `lwr.config.json`) because the LWC compiler rejects dynamic imports used by the LWR runtime.

**Deploy target:** Cloudflare Workers (`wrangler deploy` against `site/`). The `postbuild` script strips trailing `!` from LWR-emitted `_redirects` rules — `302!` is Cloudflare Pages syntax; Workers only accepts `302`.

**Build outputs:** `site/` is the production bundle (gitignored). `__lwr_cache__/` is the compile cache (also gitignored).
