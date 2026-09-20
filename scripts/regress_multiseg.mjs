// Multi-segment regression: Seoul 2 days + Japan(Tokyo) 3 days through the setup UI, drag a Seoul card (grabbing the card body)
// into the Tokyo day, then reopen via the share link. usage: node scripts/regress_multiseg.mjs [--port N]
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pw = require(process.env.PW_MODULE || '/Users/hyemini/Documents/Codex/2026-09-08/seoul-elevation-local/node_modules/playwright-core');
import { spawn } from 'child_process';
const argv = process.argv.slice(2); const port = +(argv[argv.indexOf('--port') + 1] || 0) || 4262;
const srv = spawn('python3', ['-m', 'http.server', String(port)], { stdio: 'ignore' }); await new Promise(r => setTimeout(r, 900));
const b = await pw.chromium.launch({ executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await b.newPage({ viewport: { width: 1200, height: 2600 } });
const errs = []; page.on('pageerror', e => errs.push(String(e)));
let fails = 0; const check = (name, ok, detail = '') => { console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ' · ' + detail : ''}`); if (!ok) fails++; };
await page.goto(`http://localhost:${port}/index.html`, { waitUntil: 'load' }); await page.waitForTimeout(800);
const today = new Date(); const D = n => { const x = new Date(today); x.setDate(x.getDate() + n); return x.toISOString().slice(0, 10); };
const pickDest = async id => { await page.locator('#destination-dropdown-trigger').click(); await page.waitForTimeout(250); await page.locator(`[data-destination="${id}"]`).first().click(); await page.waitForTimeout(250); };
const pickDate = async v => { for (let i = 0; i < 3; i++) { const btn = page.locator(`[data-calendar-date="${v}"]`); if (await btn.count()) { await btn.first().click(); await page.waitForTimeout(150); return; } await page.locator('#setup-calendar-next-btn').click(); await page.waitForTimeout(150); } };
await page.locator('#destination-dropdown-trigger').click(); await page.waitForTimeout(250);
const first = await page.evaluate(() => [...document.querySelectorAll('[data-destination]')].slice(0, 4).map(x => x.querySelector('.font-semibold')?.textContent.trim() + '(' + x.dataset.destination + ')'));
check('목록 첫 줄이 대한민국 · 서울', first[0] === '대한민국 · 서울(seoul)', first.join(' / '));
await page.locator('[data-destination="seoul"]').first().click(); await page.waitForTimeout(250);
await pickDate(D(10)); await pickDate(D(11)); await page.locator('#add-segment-btn').click(); await page.waitForTimeout(250);
await pickDest('tokyo'); await pickDate(D(12)); await pickDate(D(14));
await page.locator('#apply-plan-btn').click(); await page.waitForTimeout(400); await page.locator('#opt-template-btn').click(); await page.waitForTimeout(1000);
const days = await page.evaluate(() => appState.itinerary.map(d => ({ date: d.date.slice(5), dest: d.destinationId, n: d.activities.length, first: d.activities[0]?.location })));
console.log('  일정:', days.map(d => `${d.date} ${d.dest}(${d.n}) ${d.first}`).join(' | '));
check('서울 2일 + 도쿄 3일', days.filter(d => d.dest === 'seoul').length === 2 && days.filter(d => d.dest === 'tokyo').length === 3);
const hero = await page.evaluate(() => (document.getElementById('hero-image')?.src || '').split('/').pop());
const chips = await page.evaluate(() => [...new Set([...document.querySelectorAll('#itinerary-container .uppercase.tracking-\\[0\\.24em\\]')].map(e => e.textContent.trim()))]);
const fx = await page.evaluate(() => ({ a: document.getElementById('rate-to-krw')?.textContent, b: document.getElementById('base-currency-label')?.textContent }));
check('첫 구간(서울) 히어로 + 구간 칩', /^seoul(-portrait)?\.jpg$/.test(hero) && chips.includes('대한민국 · 서울') && chips.includes('일본 · 도쿄'), `${hero} | ${chips.join(' , ')} | 환율 ${fx.b} / ${fx.a}`);
// 서울 마지막 카드를 몸통(장소 글자)을 잡고 도쿄 첫날로
const sIdx = days.findIndex(d => d.dest === 'seoul'), tIdx = days.findIndex(d => d.dest === 'tokyo');
const movedId = await page.evaluate(i => appState.itinerary[i].activities.at(-1).id, sIdx);
const src = page.locator(`[data-activity-card-id="${movedId}"] .activity-card-location`).first(), dst = page.locator(`[data-day-panel="${tIdx}"] [data-activity-card-id]`).first();
const sb = await src.boundingBox(), db = await dst.boundingBox();
await page.mouse.move(sb.x + 8, sb.y + sb.height / 2); await page.mouse.down(); await page.mouse.move(sb.x + 10, sb.y + sb.height / 2 + 8, { steps: 3 }); await page.mouse.move(db.x + db.width / 2, db.y + 6, { steps: 30 }); await page.waitForTimeout(200); await page.mouse.up(); await page.waitForTimeout(800);
const after = await page.evaluate(id => { for (const [i, d] of appState.itinerary.entries()) { const a = d.activities.find(x => x.id === id); if (a) return { dayIndex: i, dayDest: d.destinationId, actDest: a.destinationId, time: a.time, loc: a.location }; } }, movedId);
check('구간을 건너 끌어다 놓기(카드 몸통)', after.dayIndex === tIdx && after.actDest === 'tokyo', JSON.stringify(after));
const share = await page.evaluate(() => buildShareUrl());
const p2 = await b.newPage({ viewport: { width: 1200, height: 900 } }); await p2.goto(share, { waitUntil: 'load' }); await p2.waitForTimeout(1200);
const back = await p2.evaluate(() => ({ segs: appState.segments.map(s => s.destinationId), hero: (document.getElementById('hero-image')?.src || '').split('/').pop() }));
check('공유 링크 재접속', back.segs.join('→') === 'seoul→tokyo' && back.hero === 'seoul.jpg', `${back.segs.join('→')} | ${back.hero}`);
// 묶인 도시(오사카) 공유 링크도 그대로 유지되는지
const p3 = await b.newPage({ viewport: { width: 1200, height: 900 } }); await p3.goto(`http://localhost:${port}/index.html?destination=osaka`, { waitUntil: 'load' }); await p3.waitForTimeout(600);
for (const l of ['이 일정으로 시작', '추천 예시 일정']) { const el = p3.locator(`text=${l}`).first(); if (await el.count()) { await el.click().catch(() => {}); await p3.waitForTimeout(350); } }
const share3 = await p3.evaluate(() => buildShareUrl()); const p4 = await b.newPage(); await p4.goto(share3, { waitUntil: 'load' }); await p4.waitForTimeout(900);
const back3 = await p4.evaluate(() => ({ segs: appState.segments.map(s => s.destinationId), hero: (document.getElementById('hero-image')?.src || '').split('/').pop() }));
check('오사카 공유 링크가 도쿄로 바뀌지 않음', back3.segs.join('→') === 'osaka' && back3.hero === 'osaka.jpg', `${back3.segs.join('→')} | ${back3.hero}`);
await page.screenshot({ path: '/tmp/regress_multiseg.png', clip: { x: 0, y: 0, width: 1200, height: 1700 } });
check('페이지 에러 없음', errs.length === 0, errs[0]?.slice(0, 100) || '');
await b.close(); srv.kill();
console.log(`\n실패 ${fails}건`); process.exit(fails ? 1 : 0);
