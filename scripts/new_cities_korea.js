// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_KOREA = {
    seoul: {
        id: 'seoul',
        city: 'Seoul',
        country: 'South Korea',
        summary: '경복궁·북촌부터 성수·한강, 잠실 전망대까지 서울 핵심 구역을 하루 하나씩 도는 템플릿으로, 해외 출국 전후 홈 구간으로도 잘 맞습니다.',
        footer: 'Seoul runs on palaces by day, neon by night, and a river in between.',
        heroImage: 'assets/heroes/seoul.jpg',
        heroPosition: '50% 42%',
        accent: '#D4A24C',
        accentRgb: '212, 162, 76',
        ink: '#14213D',
        inkRgb: '20, 33, 61',
        overlayTop: 'rgba(20, 33, 61, 0.36)',
        overlayBottom: 'rgba(10, 16, 34, 0.86)',
        timeZone: 'Asia/Seoul',
        weather: { latitude: 37.5665, longitude: 126.9780 },
        currency: { code: 'KRW', symbol: '₩', locale: 'ko-KR' },
        startOffsetDays: 7,
        phraseLabel: '한국어',
        phrases: [
            { text: '힙지로', pron: '힙 + 을지로', meaning: '인쇄소 골목 노포 사이에 힙한 바가 숨은 을지로를 부르는 말' },
            { text: '노포', pron: '老鋪 · 오래된 가게', meaning: '몇십 년 된 단골 식당. 을지로·종로 골목에서 찾아보세요' },
            { text: '한강 라면', pron: '한강공원 편의점 즉석 라면', meaning: '편의점 라면 기계에 직접 끓여 먹는 라면. 야경과 세트 메뉴' },
            { text: '치맥', pron: '치킨 + 맥주', meaning: '한강 돗자리 치맥은 서울 여름의 클래식' },
            { text: '내릴 때도 찍으세요', pron: '버스 하차 태그', meaning: '지하철·버스 환승 할인은 내릴 때 카드를 찍어야 적용돼요' },
            { text: '따릉이', pron: '서울시 공공자전거', meaning: '앱으로 빌려 한강·경의선숲길을 달리는 초록 자전거' }
        ],
        itineraryTemplate: [
            {
                title: '경복궁 & 북촌 & 인사동',
                activities: [
                    { time: '10:00', title: '경복궁 수문장 교대식', type: 'landmark', location: 'Gyeongbokgung Palace' },
                    { time: '13:30', title: '북촌 한옥마을 골목 산책', type: 'map', location: 'Bukchon Hanok Village' },
                    { time: '17:00', title: '인사동 쌈지길 & 전통찻집', type: 'gift', location: 'Ssamziegil' }
                ]
            },
            {
                title: '광장시장 & 명동 & 남산',
                activities: [
                    { time: '11:00', title: '광장시장 빈대떡·마약김밥', type: 'store', location: 'Gwangjang Market' },
                    { time: '14:00', title: '명동 쇼핑 거리', type: 'shopping-bag', location: 'Myeongdong Shopping Street' },
                    { time: '17:30', title: '남산 케이블카 & N서울타워 야경', type: 'tower-control', location: 'N Seoul Tower' }
                ]
            },
            {
                title: '성수 & 한강',
                activities: [
                    { time: '10:30', title: '서울숲 산책', type: 'trees', location: 'Seoul Forest' },
                    { time: '13:00', title: '성수동 카페 & 팝업 스토어', type: 'coffee', location: 'Seongsu-dong' },
                    { time: '18:00', title: '뚝섬 한강공원 치맥 & 야경', type: 'moon-star', location: 'Ttukseom Hangang Park' }
                ]
            },
            {
                title: '홍대 & 연남',
                activities: [
                    { time: '11:00', title: '연남동 경의선숲길 브런치', type: 'utensils-crossed', location: 'Gyeongui Line Forest Park' },
                    { time: '14:30', title: '망원시장 먹거리 투어', type: 'store', location: 'Mangwon Market' },
                    { time: '18:00', title: '홍대 거리 버스킹 & 쇼핑', type: 'music', location: 'Hongdae' }
                ]
            },
            {
                title: '잠실 & 이동',
                activities: [
                    { time: '10:00', title: '코엑스 별마당도서관', type: 'library', location: 'Starfield Library' },
                    { time: '13:00', title: '롯데월드타워 서울스카이', type: 'building', location: 'Seoul Sky' },
                    { time: '16:30', title: '인천공항 이동', type: 'plane', location: 'Incheon International Airport' }
                ]
            }
        ]
    },
    busan: {
        id: 'busan',
        city: 'Busan',
        country: 'South Korea',
        summary: '해운대와 광안대교 바다, 감천 골목과 자갈치 회 한 접시, 영도 절벽길까지 부산의 바다를 따라 걷는 템플릿입니다.',
        footer: 'Busan is salt air, bridge lights, and a bowl of milmyeon.',
        heroImage: 'assets/heroes/busan.jpg',
        heroPosition: '38% 55%',
        accent: '#026AC7',
        accentRgb: '2, 106, 199',
        ink: '#0C2E4E',
        inkRgb: '12, 46, 78',
        overlayTop: 'rgba(12, 46, 78, 0.30)',
        overlayBottom: 'rgba(6, 24, 44, 0.86)',
        timeZone: 'Asia/Seoul',
        weather: { latitude: 35.1796, longitude: 129.0756 },
        currency: { code: 'KRW', symbol: '₩', locale: 'ko-KR' },
        startOffsetDays: 6,
        phraseLabel: '한국어',
        phrases: [
            { text: '마!', pron: '마 (야!)', meaning: '"야!" 하고 부르는 말. 친한 사이에서만, 어른께는 금지' },
            { text: '쫌!', pron: '쫌 (좀!)', meaning: '"그만해", "좀!" — 억양 하나로 뜻이 바뀌는 만능 감탄사' },
            { text: '오이소, 보이소, 사이소', pron: '오세요, 보세요, 사세요', meaning: '자갈치시장 아지매들의 3대 인사' },
            { text: '뭐라카노?', pron: '뭐라고 하니?', meaning: '"뭐라고?" 하고 되물을 때 쓰는 말' },
            { text: '억수로 맛있네예', pron: '엄청 맛있네요', meaning: '억수로 = 엄청, ~네예 = ~네요. 돼지국밥집에서 써 보세요' },
            { text: '단디 하이소', pron: '단단히 하세요', meaning: '"제대로 챙기세요". 잔소리 같지만 정이 담긴 말' }
        ],
        itineraryTemplate: [
            {
                title: '해운대 & 동백섬',
                activities: [
                    { time: '10:30', title: '해운대 해수욕장', type: 'sun', location: 'Haeundae Beach' },
                    { time: '13:30', title: '동백섬 누리마루 산책로', type: 'map', location: 'Dongbaekseom Island' },
                    { time: '16:30', title: '블루라인파크 스카이캡슐', type: 'ticket', location: 'Haeundae Blueline Park' }
                ]
            },
            {
                title: '용궁사 & 광안리',
                activities: [
                    { time: '09:30', title: '해동용궁사 바다 절', type: 'landmark', location: 'Haedong Yonggungsa Temple' },
                    { time: '14:30', title: '광안리 해변 카페', type: 'coffee', location: 'Gwangalli Beach' },
                    { time: '19:30', title: '광안대교 야경 (주말 드론쇼)', type: 'bridge', location: 'Gwangan Bridge' }
                ]
            },
            {
                title: '감천 & 자갈치 & 남포동',
                activities: [
                    { time: '10:00', title: '감천문화마을 골목 탐방', type: 'palette', location: 'Gamcheon Culture Village' },
                    { time: '13:00', title: '자갈치시장 회 점심', type: 'store', location: 'Jagalchi Market' },
                    { time: '15:30', title: '국제시장 & BIFF광장 씨앗호떡', type: 'shopping-bag', location: 'Gukje Market' }
                ]
            },
            {
                title: '영도 & 태종대',
                activities: [
                    { time: '10:00', title: '흰여울문화마을 해안길', type: 'map', location: 'Huinnyeoul Culture Village' },
                    { time: '13:30', title: '태종대 다누비열차 & 전망대', type: 'binoculars', location: 'Taejongdae Resort Park' },
                    { time: '17:00', title: '김해공항 이동', type: 'plane', location: 'Gimhae International Airport' }
                ]
            }
        ]
    },
    jeju: {
        id: 'jeju',
        city: 'Jeju',
        country: 'South Korea',
        summary: '성산일출봉과 우도, 서귀포 올레길, 협재·애월 카페까지 렌터카로 섬을 시계 방향으로 도는 3박 4일 템플릿입니다.',
        footer: 'Jeju is basalt, tangerines, and wind that never quite stops.',
        heroImage: 'assets/heroes/jeju.jpg',
        heroPosition: '50% 55%',
        accent: '#FB923C',
        accentRgb: '251, 146, 60',
        ink: '#2F3437',
        inkRgb: '47, 52, 55',
        overlayTop: 'rgba(47, 52, 55, 0.30)',
        overlayBottom: 'rgba(24, 27, 29, 0.86)',
        timeZone: 'Asia/Seoul',
        weather: { latitude: 33.4996, longitude: 126.5312 },
        currency: { code: 'KRW', symbol: '₩', locale: 'ko-KR' },
        startOffsetDays: 6,
        phraseLabel: '한국어',
        phrases: [
            { text: '혼저옵서예', pron: '어서 오세요', meaning: '제주공항 도착부터 보이는 제주 환영 인사' },
            { text: '폭삭 속았수다', pron: '정말 수고하셨습니다', meaning: '"속다"는 제주어로 "수고하다". 드라마 제목으로도 유명' },
            { text: '무사?', pron: '왜?', meaning: '"무사 마씸?" 하면 "왜요?". 짧고 자주 들리는 말' },
            { text: '하영 먹읍서', pron: '많이 드세요', meaning: '하영 = 많이. 식당 이모님이 이렇게 말하면 마음껏 드시면 돼요' },
            { text: '맨도롱 또똣', pron: '먹기 좋게 따뜻한', meaning: '뜨겁지도 식지도 않은 딱 좋은 온기. 몸국 한 그릇이 맨도롱 또똣' },
            { text: '감수광', pron: '가십니까?', meaning: '헤어질 때 "가세요?". 혜은이 노래 제목으로도 유명' }
        ],
        itineraryTemplate: [
            {
                title: '용눈이오름 & 성산 & 섭지코지',
                activities: [
                    { time: '11:00', title: '용눈이오름 능선 산책', type: 'binoculars', location: 'Yongnuni Oreum' },
                    { time: '14:00', title: '성산일출봉 등반', type: 'landmark', location: 'Seongsan Ilchulbong' },
                    { time: '17:00', title: '섭지코지 노을 산책', type: 'map', location: 'Seopjikoji' }
                ]
            },
            {
                title: '우도 일주',
                activities: [
                    { time: '09:00', title: '성산포항 우도행 배', type: 'ship', location: 'Seongsan Port' },
                    { time: '11:00', title: '서빈백사 & 땅콩 아이스크림', type: 'sun', location: 'Seobinbaeksa Beach' },
                    { time: '14:00', title: '우도봉 등대 전망', type: 'binoculars', location: 'Udobong Peak' }
                ]
            },
            {
                title: '서귀포 올레 & 천지연',
                activities: [
                    { time: '09:30', title: '올레 7코스 외돌개', type: 'map', location: 'Oedolgae Rock' },
                    { time: '13:00', title: '서귀포 매일올레시장', type: 'store', location: 'Seogwipo Maeil Olle Market' },
                    { time: '16:30', title: '천지연폭포', type: 'sparkles', location: 'Cheonjiyeon Falls' }
                ]
            },
            {
                title: '협재 & 애월 & 이동',
                activities: [
                    { time: '10:00', title: '협재해수욕장 & 비양도 뷰', type: 'sun', location: 'Hyeopjae Beach' },
                    { time: '13:00', title: '애월 한담해안산책로 카페', type: 'coffee', location: 'Handam Coastal Trail' },
                    { time: '16:30', title: '제주공항 이동', type: 'plane', location: 'Jeju International Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_KOREA;
