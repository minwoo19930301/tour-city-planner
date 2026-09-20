// Browser checks for the itinerary UX: route preview (hover/tap → Google Maps directions iframe, close/detail buttons),
// drag from anywhere on a card, grouped destination picker. usage: node scripts/verify_ux.mjs [--port N]
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pw = require(process.env.PW_MODULE || '/Users/hyemini/Documents/Codex/2026-09-08/seoul-elevation-local/node_modules/playwright-core');
import { spawn } from 'child_process';
const argv = process.argv.slice(2); const port = +(argv[argv.indexOf('--port') + 1] || 0) || 4261;
const srv = spawn('python3', ['-m', 'http.server', String(port)], { stdio: 'ignore' }); await new Promise(r => setTimeout(r, 900));
const browser = await pw.chromium.launch({ executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
let fails = 0; const check = (name, ok, detail = '') => { console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ' · ' + detail : ''}`); if (!ok) fails++; };
// 강조 애니메이션이 도는 카드는 Playwright가 '안정'으로 보지 않으므로 scrollIntoView는 직접 호출한다
const scrollTo = async (loc) => { await loc.evaluate(el => el.scrollIntoView({ block: 'center' })); await new Promise(r => setTimeout(r, 200)); };
const startTemplate = async (page) => { for (const l of ['이 일정으로 시작', '추천 예시 일정']) { const el = page.locator(`text=${l}`).first(); if (await el.count()) { await el.click().catch(() => {}); await page.waitForTimeout(400); } } await page.waitForTimeout(400); };
const previewState = (page) => page.evaluate(() => { const el = document.getElementById('route-preview'); const r = document.getElementById('route-preview-card').getBoundingClientRect(); return { hidden: el.hidden, pop: el.classList.contains('route-preview--pop'), sheet: el.classList.contains('route-preview--sheet'), src: document.getElementById('route-preview-frame').getAttribute('src') || '', title: document.getElementById('route-preview-title').textContent, open: document.getElementById('route-preview-open').href, statusHidden: document.getElementById('route-preview-status').hidden, rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height), bottom: Math.round(r.bottom) }, vw: innerWidth, vh: innerHeight }; });

// ---------- PC ----------
const pc = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errs = []; pc.on('pageerror', e => errs.push(String(e)));
await pc.goto(`http://localhost:${port}/index.html?destination=tokyo`, { waitUntil: 'load' }); await pc.waitForTimeout(600);

// 목적지 목록: 나라+시간대별 한 줄
await pc.locator('#destination-dropdown-trigger').click(); await pc.waitForTimeout(300);
const picker = await pc.evaluate(() => { const rows = [...document.querySelectorAll('[data-destination]')]; const jp = rows.find(r => r.dataset.destination === 'tokyo'); return { rows: rows.length, hasOsakaRow: rows.some(r => r.dataset.destination === 'osaka'), jpLabel: jp?.querySelector('.font-semibold')?.textContent.trim(), jpSiblings: jp?.querySelector('[data-sibling-cities]')?.textContent.replace(/\s+/g, ' ').trim(), jpActive: jp?.classList.contains('active'), first4: rows.slice(0, 4).map(r => r.querySelector('.font-semibold')?.textContent.trim()), us: rows.filter(r => r.textContent.includes('미국')).map(r => r.querySelector('.font-semibold')?.textContent.trim()) }; });
check('목록이 나라·시간대별 한 줄로 묶임', picker.rows === 80 && !picker.hasOsakaRow, `${picker.rows}줄`);
check('일본 줄 아래에 같은 시간대 도시가 함께 적힘', /오사카/.test(picker.jpSiblings || '') && /나가사키/.test(picker.jpSiblings || ''), (picker.jpSiblings || '').slice(0, 70) + '…');
check('일본 줄 라벨과 활성 표시', picker.jpLabel === '일본 · 도쿄' && picker.jpActive, picker.jpLabel);
console.log('  목록 앞 4개:', picker.first4.join(' / '), '| 미국 줄:', picker.us.join(' / '));
await pc.locator('[data-destination="los-angeles"]').first().click(); await pc.waitForTimeout(300);
const trig = await pc.evaluate(() => ({ v: document.getElementById('destination-dropdown-value').textContent.trim(), m: document.getElementById('destination-dropdown-meta').textContent.trim(), sel: setupSelection.destinationId }));
check('줄을 고르면 대표 도시가 선택됨', trig.sel === 'los-angeles' && trig.v === '미국 · 로스앤젤레스', `${trig.v} / ${trig.m}`);
await pc.locator('#destination-dropdown-trigger').click(); await pc.waitForTimeout(200); await pc.locator('[data-destination="tokyo"]').first().click(); await pc.waitForTimeout(300);
await pc.screenshot({ path: '/tmp/ux_picker_pc.png' });

await startTemplate(pc);
// 가는 길 미리보기: 연결선에 마우스 올리기
const trigger = pc.locator('[data-route-preview]:not([data-route-title*="이동코스"])').first();
await scrollTo(trigger); await pc.waitForTimeout(200);
const tb = await trigger.boundingBox();
await pc.mouse.move(tb.x + tb.width / 2, tb.y + tb.height / 2); await pc.waitForTimeout(500);
let st = await previewState(pc);
check('PC: 연결선에 마우스를 올리면 미리보기 카드가 뜸', !st.hidden && st.pop, JSON.stringify(st.rect));
check('PC: iframe 주소가 키 없는 길찾기 임베드', /maps\.google\.com\/maps\?saddr=.+&daddr=.+&hl=ko&output=embed/.test(st.src), st.src.slice(0, 90));
check('PC: 제목이 "출발 → 도착"', /→/.test(st.title), st.title);
check('PC: 자세히 버튼이 구글 지도 길찾기로 감', /google\.com\/maps\/dir\//.test(st.open), st.open.slice(0, 70));
check('PC: 카드가 화면 안에 들어옴', st.rect.x >= 0 && st.rect.y >= 0 && st.rect.x + st.rect.w <= st.vw && st.rect.y + st.rect.h <= st.vh);
await pc.waitForTimeout(4500); st = await previewState(pc);
check('PC: 지도가 로드되면 안내문이 사라짐', st.statusHidden);
await pc.screenshot({ path: '/tmp/ux_route_pc.png' });
await pc.keyboard.press('Escape'); await pc.waitForTimeout(200);
check('PC: Esc로 닫힘', (await previewState(pc)).hidden);
const popupPromise = pc.waitForEvent('popup', { timeout: 1500 }).then(() => true).catch(() => false);
await trigger.click(); await pc.waitForTimeout(300);
const clickOpen = !(await previewState(pc)).hidden; const popped = await popupPromise;
check('PC: 클릭하면 새 창 대신 미리보기가 열림', clickOpen && !popped, popped ? '새 창이 열림' : '');
await pc.locator('#route-preview-close').click(); await pc.waitForTimeout(200);
check('PC: 닫기 버튼으로 닫힘', (await previewState(pc)).hidden);
const dayTrigger = pc.locator('[data-route-preview][data-route-title*="이동코스"]').first();
await scrollTo(dayTrigger); await pc.waitForTimeout(150); const db = await dayTrigger.boundingBox();
await pc.mouse.move(db.x + db.width / 2, db.y + db.height / 2); await pc.waitForTimeout(500);
st = await previewState(pc);
check('PC: 하루 이동코스도 경유지 포함 미리보기', !st.hidden && /\+to:/.test(st.src), st.src.slice(0, 110));
await pc.mouse.click(8, 8); await pc.waitForTimeout(200);
check('PC: 바깥을 클릭하면 닫힘', (await previewState(pc)).hidden);

// 손잡이 없이 카드 아무 데나 잡고 끌기 (일반 모드)
const locs = () => pc.evaluate(() => appState.itinerary[0].activities.map(a => a.location));
const before = await locs();
const c1text = pc.locator('[data-day-panel="0"] [data-activity-card-id]').nth(0).locator('.activity-card-location');
const card2 = pc.locator('[data-day-panel="0"] [data-activity-card-id]').nth(1);
await scrollTo(c1text); await pc.waitForTimeout(150);
const b1 = await c1text.boundingBox(); const b2 = await card2.boundingBox();
await pc.mouse.move(b1.x + 10, b1.y + b1.height / 2); await pc.mouse.down();
await pc.mouse.move(b1.x + 12, b1.y + b1.height / 2 + 9, { steps: 3 });
const ghost = await pc.evaluate(() => Boolean(document.querySelector('.activity-card-ghost')));
await pc.mouse.move(b2.x + b2.width / 2, b2.y + b2.height - 4, { steps: 25 }); await pc.waitForTimeout(250); await pc.mouse.up(); await pc.waitForTimeout(700);
const after = await locs();
check('PC: 카드 글자를 잡고 움직이자마자 들림', ghost);
check('PC: 손잡이 없이 끌어서 순서가 바뀜', after[0] === before[1] && after[1] === before[0], `${before.slice(0, 2).join(' , ')} → ${after.slice(0, 2).join(' , ')}`);
check('PC: 끌어놓은 뒤 편집창은 안 열림', await pc.evaluate(() => document.getElementById('activity-modal').classList.contains('hidden')));
const selText = await pc.evaluate(() => String(window.getSelection()).length);
check('PC: 끌어도 글자가 선택되지 않음', selText === 0, `${selText}자 선택`);
const ba = await pc.locator('[data-day-panel="0"] [data-activity-card-id]').nth(0).locator('.activity-card-location').boundingBox();
await pc.mouse.click(ba.x + 10, ba.y + ba.height / 2); await pc.waitForTimeout(400);
check('PC: 그냥 클릭하면 편집창이 열림', await pc.evaluate(() => !document.getElementById('activity-modal').classList.contains('hidden')));
await pc.keyboard.press('Escape'); await pc.waitForTimeout(300);
// 순서 편집 모드에서도 카드 아무 데나
await pc.locator('#reorder-mode-btn').click(); await pc.waitForTimeout(400);
const beforeR = await locs();
const r1 = pc.locator('[data-day-panel="0"] [data-activity-card-id]').nth(0).locator('.activity-card-time'); const r2 = pc.locator('[data-day-panel="0"] [data-activity-card-id]').nth(1);
await scrollTo(r1); await pc.waitForTimeout(150); const rb1 = await r1.boundingBox(); const rb2 = await r2.boundingBox();
await pc.mouse.move(rb1.x + 5, rb1.y + 5); await pc.mouse.down(); await pc.mouse.move(rb1.x + 8, rb1.y + 14, { steps: 3 }); await pc.mouse.move(rb2.x + rb2.width / 2, rb2.y + rb2.height - 4, { steps: 25 }); await pc.waitForTimeout(250); await pc.mouse.up(); await pc.waitForTimeout(700);
const afterR = await locs();
check('PC 순서 편집 모드: 카드 아무 데나 잡고 끌어서 순서 바뀜', afterR[0] === beforeR[1] && afterR[1] === beforeR[0], `${beforeR.slice(0, 2).join(' , ')} → ${afterR.slice(0, 2).join(' , ')}`);
await pc.locator('#reorder-done-fab').click().catch(() => {}); await pc.waitForTimeout(300);
check('PC: 페이지 에러 없음', errs.length === 0, errs[0]?.slice(0, 120) || '');
await pc.close();

// ---------- 모바일 ----------
const m = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
const mp = await m.newPage(); const merrs = []; mp.on('pageerror', e => merrs.push(String(e)));
await mp.goto(`http://localhost:${port}/index.html?destination=osaka`, { waitUntil: 'load' }); await mp.waitForTimeout(700);
const mtrig = await mp.evaluate(() => ({ v: document.getElementById('destination-dropdown-value').textContent.trim(), dest: appState.destinationId, hero: (document.getElementById('hero-image').getAttribute('src') || '').split('/').pop(), active: document.querySelector('[data-destination].active')?.dataset.destination }));
check('모바일: 링크로 연 오사카는 그대로 열리고 목록에서는 일본·도쿄 줄이 켜짐', mtrig.dest === 'osaka' && mtrig.v === '일본 · 오사카' && mtrig.hero === 'osaka-portrait.jpg' && mtrig.active === 'tokyo', JSON.stringify(mtrig));
await mp.locator('#destination-dropdown-trigger').tap(); await mp.waitForTimeout(400); await mp.screenshot({ path: '/tmp/ux_picker_m.png' }); await mp.locator('#destination-dropdown-trigger').tap(); await mp.waitForTimeout(200);
await startTemplate(mp);
const mt = mp.locator('[data-route-preview]:not([data-route-title*="이동코스"])').first(); await scrollTo(mt); await mp.waitForTimeout(200);
await mt.tap(); await mp.waitForTimeout(500);
st = await previewState(mp);
check('모바일: 연결선을 탭하면 아래에서 시트로 뜸', !st.hidden && st.sheet && Math.abs(st.rect.bottom - st.vh) < 2, JSON.stringify(st.rect));
await mp.waitForTimeout(4500); st = await previewState(mp); check('모바일: 지도 로드됨', st.statusHidden);
await mp.screenshot({ path: '/tmp/ux_route_m.png' });
await mp.touchscreen.tap(195, 40); await mp.waitForTimeout(300);
check('모바일: 배경을 탭하면 닫힘', (await previewState(mp)).hidden);
await mt.tap(); await mp.waitForTimeout(300); await mp.locator('#route-preview-close').tap(); await mp.waitForTimeout(300);
check('모바일: 닫기 버튼으로 닫힘', (await previewState(mp)).hidden);
const mDay = mp.locator('[data-route-preview][data-route-title*="이동코스"]').first(); await scrollTo(mDay); await mp.waitForTimeout(150); await mDay.tap(); await mp.waitForTimeout(400);
st = await previewState(mp); check('모바일: 하루 이동코스 탭 → 시트', !st.hidden && st.sheet && /\+to:/.test(st.src));
await mp.locator('#route-preview-close').tap(); await mp.waitForTimeout(200);
check('모바일: 페이지 에러 없음', merrs.length === 0, merrs[0]?.slice(0, 120) || '');
await m.close();
await browser.close(); srv.kill();
console.log(`\n실패 ${fails}건`); process.exit(fails ? 1 : 0);
