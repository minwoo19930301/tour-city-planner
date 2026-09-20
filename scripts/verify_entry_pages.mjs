// Checks the trips/<country>/<id>.html entry pages and the 404.html redirects (legacy <id>_trip.html links, aliases,
// wrong folders) through scripts/serve_with_404.py, which returns 404.html for missing paths like GitHub Pages does.
// usage: node scripts/verify_entry_pages.mjs [--port N]
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pw = require(process.env.PW_MODULE || '/Users/hyemini/Documents/Codex/2026-09-08/seoul-elevation-local/node_modules/playwright-core');
import { spawn } from 'child_process'; import fs from 'fs'; import path from 'path';
const argv = process.argv.slice(2); const port = +(argv[argv.indexOf('--port') + 1] || 0) || 4290;
let fails = 0; const check = (name, ok, detail = '') => { console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ' · ' + detail : ''}`); if (!ok) fails++; };
// 파일 구조
const app = fs.readFileSync('app.js', 'utf8'); const ids = [...app.matchAll(/^\s+id:\s*['"]([a-z0-9-]+)['"],?\s*$/gm)].map(m => m[1]);
const pages = fs.readdirSync('trips').flatMap(c => fs.readdirSync(path.join('trips', c)).map(f => ({ country: c, id: f.replace(/\.html$/, ''), file: path.join('trips', c, f) })));
check('도시마다 진입 페이지가 하나씩', pages.length === ids.length && ids.every(id => pages.some(p => p.id === id)), `${pages.length}/${ids.length}`);
check('모든 페이지가 자기 id로 리다이렉트', pages.every(p => fs.readFileSync(p.file, 'utf8').includes(`params.set('destination', '${p.id}')`) && fs.readFileSync(p.file, 'utf8').includes('../../index.html')));
check('루트에 *_trip.html이 없음', !fs.readdirSync('.').some(f => f.endsWith('_trip.html')));
const srv = spawn('python3', ['scripts/serve_with_404.py', String(port)], { stdio: 'ignore' }); await new Promise(r => setTimeout(r, 900));
const browser = await pw.chromium.launch({ executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
const cases = [
  ['trips/japan/osaka.html', 'osaka', '새 진입 페이지'],
  ['trips/france/paris.html?start=2026-10-10&end=2026-10-12', 'paris', '새 진입 페이지 + 날짜 유지', '2026-10-10'],
  ['tokyo_trip.html', 'tokyo', '옛 루트 주소 → 404 리다이렉트'],
  ['paris_trip.html?start=2026-11-01&end=2026-11-03', 'paris', '옛 주소 + 날짜 유지', '2026-11-01'],
  ['hongkong_trip.html', 'hong-kong', '옛 id 별칭 hongkong'],
  ['newyork_trip.html', 'new-york', '옛 id 별칭 newyork'],
  ['usa_trip.html', 'los-angeles', '옛 id 별칭 usa'],
  ['trips/wrong-folder/seoul.html', 'seoul', '폴더가 틀린 주소'],
  ['no-such-page.html', 'tokyo', '아무 주소 → 기본 도시'],
  ['index.html?destination=losangeles', 'los-angeles', 'index.html의 옛 id도 별칭 처리'],
];
for (const [p, expected, name, start] of cases) {
  await page.goto(`http://localhost:${port}/${p}`, { waitUntil: 'load' }); await page.waitForTimeout(900);
  const got = await page.evaluate(() => ({ path: location.pathname, dest: typeof appState !== 'undefined' ? appState.destinationId : null, start: typeof appState !== 'undefined' ? appState.startDate : null }));
  check(name, got.path.endsWith('/index.html') && got.dest === expected && (!start || got.start === start), `${p} → ${got.path} dest=${got.dest}${start ? ' start=' + got.start : ''}`);
}
await browser.close(); srv.kill();
console.log(`\n실패 ${fails}건`); process.exit(fails ? 1 : 0);
