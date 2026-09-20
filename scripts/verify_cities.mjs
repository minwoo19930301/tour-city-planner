// Loads every destination (or the given ids) in a headless browser and checks: hero image 200, template days ≥ 3,
// Korean label in the (grouped) dropdown, no page errors. usage: node scripts/verify_cities.mjs [id ...] [--port N]
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pw = require(process.env.PW_MODULE || '/Users/hyemini/Documents/Codex/2026-09-08/seoul-elevation-local/node_modules/playwright-core');
import { spawn } from 'child_process'; import fs from 'fs';
const argv = process.argv.slice(2); const port = +(argv[argv.indexOf('--port') + 1] || 0) || 4210;
let ids = argv.filter(a => !a.startsWith('--') && !/^\d+$/.test(a));
const app = fs.readFileSync('app.js', 'utf8');
if (!ids.length) ids = [...app.matchAll(/^\s+id:\s*['"]([a-z0-9-]+)['"],?\s*$/gm)].map(m => m[1]);
const srv = spawn('python3', ['-m', 'http.server', String(port)], { stdio: 'ignore' }); await new Promise(r => setTimeout(r, 900));
const browser = await pw.chromium.launch({ executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
// dropdown labels once
await page.goto(`http://localhost:${port}/index.html`, { waitUntil: 'load' }); await page.waitForTimeout(600);
await page.locator('#destination-dropdown-trigger').click().catch(() => {}); await page.waitForTimeout(300);
// 목록은 나라+시간대별 한 줄(대표 도시). 묶인 도시는 그 줄의 "같은 시간대" 글에 한글 이름이 있어야 목록에 있는 것으로 본다.
const labels = await page.evaluate(() => { const out = {}; document.querySelectorAll('[data-destination]').forEach(row => { const primary = row.querySelector('.font-semibold')?.textContent.trim() || ''; const siblings = row.querySelector('[data-sibling-cities]')?.textContent.replace(/\s+/g, ' ').trim() || ''; (row.dataset.memberIds || row.dataset.destination).split(' ').forEach(id => { const d = getDestination(id); const cityKo = getLocalizedLabel(d.city, d.city); out[id] = id === row.dataset.destination ? primary : (siblings.includes(cityKo) ? `${primary} › ${cityKo}` : ''); }); }); return out; });
let bad = 0;
for (const id of ids) {
  const errs = []; const onErr = e => errs.push(String(e)); page.on('pageerror', onErr);
  let heroStatus = null; const onResp = r => { if (r.url().includes('/assets/heroes/')) heroStatus = r.status(); }; page.on('response', onResp);
  await page.goto(`http://localhost:${port}/index.html?destination=${id}`, { waitUntil: 'load' }); await page.waitForTimeout(500);
  for (const l of ['이 일정으로 시작', '추천 예시 일정']) { const el = page.locator(`text=${l}`).first(); if (await el.count()) { await el.click().catch(() => {}); await page.waitForTimeout(350); } }
  await page.waitForTimeout(300);
  const info = await page.evaluate(() => ({ days: document.querySelectorAll('[data-day-panel]').length, cards: document.querySelectorAll('[data-activity-card-id]').length,
    hero: (document.getElementById('hero-image')?.src || '').split('/').pop(), dest: appState.destinationId }));
  page.off('pageerror', onErr); page.off('response', onResp);
  const label = labels[id] || '';
  const problems = [];
  if (info.dest !== id) problems.push(`목적지 ${info.dest}`);
  if (info.hero !== `${id}.jpg`) problems.push(`히어로 ${info.hero}`);
  if (heroStatus && heroStatus >= 400) problems.push(`사진 ${heroStatus}`);
  if (info.days < 3) problems.push(`일차 ${info.days}`);
  if (!label) problems.push('목록에 없음'); else if (/[A-Za-z]{3,}/.test(label) && !/D\.C\./.test(label)) problems.push(`라벨 영문 '${label}'`);
  if (errs.length) problems.push('에러 ' + errs[0].slice(0, 60));
  if (problems.length) bad++;
  console.log(`${problems.length ? '✗' : '✓'} ${id.padEnd(16)} ${label.padEnd(24)} ${info.days}일 ${info.cards}카드 ${problems.join(' · ')}`);
}
await browser.close(); srv.kill();
console.log(`\n${ids.length}개 중 문제 ${bad}개`); process.exit(bad ? 1 : 0);
