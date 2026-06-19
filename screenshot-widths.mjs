import { chromium } from 'playwright';

const pages = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'skills', path: '/skills' },
  { name: 'projects', path: '/projects' },
  { name: 'contact', path: '/contact' },
];
const widths = [320, 360, 414, 540, 768, 1024];
const BASE = 'http://localhost:3000';

const browser = await chromium.launch();
for (const w of widths) {
  const context = await browser.newContext({ viewport: { width: w, height: 900 }, isMobile: w < 768 });
  const page = await context.newPage();
  let line = `w=${w}: `;
  for (const { name, path } of pages) {
    await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    const o = await page.evaluate(() => ({ s: document.documentElement.scrollWidth, c: document.documentElement.clientWidth }));
    const bad = o.s > o.c + 1;
    line += `${name}${bad ? `⚠(${o.s}>${o.c})` : '✓'} `;
  }
  console.log(line);
  await context.close();
}
await browser.close();
