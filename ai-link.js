/* Human-readable AI links: no JSON or Base64 generation required. */
(function (root) {
    function parse(hash, { destinationIds, iconIds } = {}) {
        const fail = message => { throw new Error(message); };
        const entries = hash.replace(/^#/, '').split('&').map(part => {
            const separator = part.indexOf('=');
            if (separator < 1) fail('올바르지 않은 링크 항목');
            const key = part.slice(0, separator);
            if (!['trip', 'g', 's', 'e', 'm', 'q'].includes(key)) fail('알 수 없는 링크 항목');
            return [key, part.slice(separator + 1).split('~').map(value => decodeURIComponent(value.replace(/\+/g, ' ')))];
        });
        const all = key => entries.filter(entry => entry[0] === key).map(entry => entry[1]);
        const version = all('trip');
        if (version.length !== 1 || version[0].join('~') !== '1') fail('지원하지 않는 일정 링크');
        const timestamp = value => {
            if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) fail('날짜 형식 오류');
            const time = Date.parse(value + 'T00:00:00Z');
            if (!Number.isFinite(time) || new Date(time).toISOString().slice(0, 10) !== value) fail('유효하지 않은 날짜');
            return time;
        };
        const knownCity = value => !destinationIds || destinationIds.includes(value);
        const dates = new Map();
        const g = all('g').map(fields => {
            if (fields.length !== 3) fail('여행 구간 형식 오류');
            const [d, s, e] = fields, start = timestamp(s), end = timestamp(e);
            if (!knownCity(d) || end < start || end - start > 366 * 86400000) fail('여행 구간 오류');
            for (let time = start; time <= end; time += 86400000) {
                const date = new Date(time).toISOString().slice(0, 10);
                if (!dates.has(date)) dates.set(date, new Set());
                dates.get(date).add(d);
            }
            return { d, s, e };
        });
        if (!g.length || dates.size > 367) fail('여행 구간이 없습니다');
        const days = new Map([...dates.keys()].sort().map(date => [date, { a: [], e: [] }]));
        const stops = new Map();
        for (const fields of all('s')) {
            if (fields.length !== 7) fail('장소 항목 형식 오류');
            const [date, id, r, h, d, k, l] = fields;
            if (!days.has(date) || !dates.get(date).has(d) || !knownCity(d)) fail('여행 구간 밖의 장소');
            if (!/^[a-zA-Z0-9_-]+$/.test(id) || stops.has(id) || !/^[a-zA-Z0-9_-]+$/.test(r)) fail('중복 또는 잘못된 일정 ID');
            if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(h) || !l.trim() || (iconIds && !iconIds.includes(k))) fail('시간·장소·아이콘 오류');
            const stop = { id, r, h, d, k, l, q: l, m: '' };
            days.get(date).a.push(stop);
            stops.set(id, { stop, date });
        }
        for (const key of ['m', 'q']) {
            const seen = new Set();
            for (const fields of all(key)) {
                if (fields.length !== 2 || !stops.has(fields[0]) || seen.has(fields[0])) fail('메모·검색어 항목 오류');
                seen.add(fields[0]);
                stops.get(fields[0]).stop[key] = fields[1];
            }
        }
        const rank = new Map();
        for (const day of days.values()) {
            if (!day.a.length) fail('일정이 빠진 날짜가 있습니다');
            const rows = [];
            for (const stop of day.a) {
                let row = rows.at(-1);
                if (!row || row[0].r !== stop.r) {
                    if (rows.some(items => items[0].r === stop.r)) fail('나란한 일정은 연속해서 적어 주세요');
                    row = []; rows.push(row);
                }
                row.push(stop);
                if (row.length > 3) fail('나란한 일정은 최대 3개입니다');
                rank.set(stop.id, rows.length - 1);
            }
        }
        for (const fields of all('e')) {
            if (fields.length !== 2 || !fields.every(id => stops.has(id))) fail('없는 장소를 연결했습니다');
            const [from, to] = fields;
            if (stops.get(from).date !== stops.get(to).date || rank.get(from) >= rank.get(to)) fail('연결 순서 오류');
            const day = days.get(stops.get(from).date);
            if (!day.e.some(edge => edge[0] === from && edge[1] === to)) day.e.push([from, to]);
        }
        for (const day of days.values()) {
            if (day.e.length) continue;
            // A single path and simple parallel rows can omit explicit connections.
            for (const from of day.a) for (const to of day.a) {
                if (rank.get(to.id) === rank.get(from.id) + 1) day.e.push([from.id, to.id]);
            }
        }
        return { v: 4, g, i: [...days.values()] };
    }
    root.AITripLink = { parse };
})(typeof module === 'object' ? module.exports : globalThis);
