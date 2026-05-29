// Post-build: sanitize site/_redirects for Cloudflare Workers static-assets deploy.
//
// `lwr build` emits redirect rules ending in `302!`. The trailing `!` is
// Cloudflare *Pages* "forced redirect" syntax and is NOT understood by the
// Workers (`wrangler deploy`) _redirects parser, which then reads the status
// code as 0 and rejects the whole file:
//   "Valid status codes are 200, 301, 302, 303, 307, or 308. Got 0."
//
// Stripping the `!` leaves a plain `302`, which Workers accepts. These rules
// map LWR's canonical module paths to their hashed bundle paths; the forced
// flag is unnecessary because no static file exists at the source paths.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const file = new URL('../site/_redirects', import.meta.url);

if (!existsSync(file)) {
  console.log('[fix-redirects] site/_redirects not found — nothing to do.');
  process.exit(0);
}

const original = readFileSync(file, 'utf8');
// Replace a status code like `302!`, `301!`, `307!` (trailing `!`) with the
// bare code. Anchored to end-of-line so we only touch the status token.
const fixed = original.replace(/(\b30[1-8])!(\s*)$/gm, '$1$2');

if (fixed === original) {
  console.log('[fix-redirects] no forced-redirect (!) syntax found — left unchanged.');
} else {
  writeFileSync(file, fixed);
  const count = (original.match(/\b30[1-8]!\s*$/gm) || []).length;
  console.log(`[fix-redirects] stripped "!" from ${count} redirect rule(s) in site/_redirects.`);
}
