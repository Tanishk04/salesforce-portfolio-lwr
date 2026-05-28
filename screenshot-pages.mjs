import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const pages = [
  { name: 'home',     path: '/' },
  { name: 'about',    path: '/about' },
  { name: 'skills',   path: '/skills' },
  { name: 'projects', path: '/projects' },
  { name: 'contact',  path: '/contact' },
];

const BASE = 'http://localhost:3000';
const OUT  = './screenshots';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page    = await context.newPage();

for (const { name, path } of pages) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({
    path: `${OUT}/${name}.png`,
    fullPage: true,
  });
  console.log(`✓ ${name}`);
}

await browser.close();
console.log('\nAll screenshots saved to ./screenshots/');
