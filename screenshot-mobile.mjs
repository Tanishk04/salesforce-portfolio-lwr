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
const OUT  = './screenshots/mobile';
mkdirSync(OUT, { recursive: true });

// iPhone 12/13/14-class viewport
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
});
const page = await context.newPage();

for (const { name, path } of pages) {
  await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
  // Detect horizontal overflow (most common mobile bug)
  const overflow = await page.evaluate(() => {
    const de = document.documentElement;
    return { scrollW: de.scrollWidth, clientW: de.clientWidth };
  });
  const flag = overflow.scrollW > overflow.clientW + 1 ? '  ⚠ H-OVERFLOW' : '';
  console.log(`✓ ${name}  (scrollW=${overflow.scrollW} clientW=${overflow.clientW})${flag}`);
}

await browser.close();
console.log('\nMobile screenshots saved to ./screenshots/mobile/');
