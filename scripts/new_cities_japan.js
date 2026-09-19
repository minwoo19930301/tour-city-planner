// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_JAPAN = {
    osaka: {
        id: 'osaka',
        city: 'Osaka',
        country: 'Japan',
        summary: '도톤보리 네온과 길거리 음식, 오사카성과 우메다 전망을 한 줄로 엮은 간사이 먹방 템플릿입니다.',
        footer: 'Osaka runs on neon, broth, and people who talk to strangers.',
        heroImage: 'assets/heroes/osaka.jpg',
        heroPosition: '60% center',
        accent: '#DC269E',
        accentRgb: '220, 38, 158',
        ink: '#3B0A0A',
        inkRgb: '59, 10, 10',
        overlayTop: 'rgba(59, 10, 10, 0.40)',
        overlayBottom: 'rgba(24, 16, 16, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 34.6937, longitude: 135.5023 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 8,
        phraseLabel: '日本語',
        phrases: [
            { text: 'めっちゃ美味しい', pron: '멧챠 오이시이', meaning: '엄청 맛있어요 (간사이 말투)' },
            { text: 'おすすめは何ですか？', pron: '오스스메와 난데스카', meaning: '추천 메뉴가 뭔가요?' },
            { text: '持ち帰りでお願いします', pron: '모치카에리데 오네가이시마스', meaning: '포장해 주세요' },
            { text: '一人です', pron: '히토리데스', meaning: '한 명입니다' },
            { text: '写真を撮ってもいいですか？', pron: '샤신오 톳테모 이이데스카', meaning: '사진 찍어도 될까요?' },
            { text: 'もう一つください', pron: '모 히토츠 쿠다사이', meaning: '하나 더 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '난바 & 도톤보리',
                activities: [
                    { time: '11:00', title: '구로몬 시장 먹거리', type: 'store', location: 'Kuromon Ichiba Market' },
                    { time: '14:00', title: '신사이바시 쇼핑 거리', type: 'shopping-bag', location: 'Shinsaibashi-suji Shopping Street' },
                    { time: '19:00', title: '도톤보리 글리코 네온', type: 'sparkles', location: 'Dotonbori' }
                ]
            },
            {
                title: '오사카성 & 오사카역',
                activities: [
                    { time: '09:30', title: '오사카성 천수각', type: 'landmark', location: 'Osaka Castle' },
                    { time: '12:30', title: '니시노마루 정원 산책', type: 'trees', location: 'Nishinomaru Garden' },
                    { time: '18:00', title: '우메다 공중정원 전망대', type: 'building', location: 'Umeda Sky Building' }
                ]
            },
            {
                title: '신세카이 & 덴노지',
                activities: [
                    { time: '10:30', title: '시텐노지 참배', type: 'landmark', location: 'Shitenno-ji' },
                    { time: '13:00', title: '신세카이 쿠시카츠 점심', type: 'utensils-crossed', location: 'Shinsekai' },
                    { time: '17:30', title: '아베노 하루카스 300 전망대', type: 'tower-control', location: 'Abeno Harukas 300' }
                ]
            },
            {
                title: '유니버설 스튜디오',
                activities: [
                    { time: '08:30', title: 'USJ 개장 입장', type: 'ticket', location: 'Universal Studios Japan' },
                    { time: '13:00', title: '위저딩 월드 구역', type: 'sparkles', location: 'The Wizarding World of Harry Potter Osaka' },
                    { time: '19:30', title: '유니버설 시티워크 저녁', type: 'utensils-crossed', location: 'Universal CityWalk Osaka' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '10:00', title: '덴진바시스지 상점가', type: 'shopping-cart', location: 'Tenjinbashisuji Shopping Street' },
                    { time: '13:30', title: '난바 역 짐 정리', type: 'luggage', location: 'Namba Station' },
                    { time: '16:30', title: '간사이 공항 이동', type: 'plane', location: 'Kansai International Airport' }
                ]
            }
        ]
    },
    kyoto: {
        id: 'kyoto',
        city: 'Kyoto',
        country: 'Japan',
        summary: '청수사 언덕길부터 후시미이나리 천 개의 도리이, 아라시야마 대숲과 기온 밤거리까지 천천히 걷는 고도 템플릿입니다.',
        footer: 'Kyoto rewards early mornings, quiet lanes, and slow tea.',
        heroImage: 'assets/heroes/kyoto.jpg',
        heroPosition: '50% 60%',
        accent: '#166534',
        accentRgb: '22, 101, 52',
        ink: '#1C1917',
        inkRgb: '28, 25, 23',
        overlayTop: 'rgba(28, 25, 23, 0.38)',
        overlayBottom: 'rgba(12, 20, 15, 0.90)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 35.0116, longitude: 135.7681 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 9,
        phraseLabel: '日本語',
        phrases: [
            { text: '拝観料はいくらですか？', pron: '하이칸료와 이쿠라데스카', meaning: '관람료가 얼마인가요?' },
            { text: '写真撮影は大丈夫ですか？', pron: '샤신 사츠에이와 다이조부데스카', meaning: '사진 촬영해도 되나요?' },
            { text: '抹茶をください', pron: '맛차오 쿠다사이', meaning: '말차 주세요' },
            { text: '何時までですか？', pron: '난지마데데스카', meaning: '몇 시까지 하나요?' },
            { text: '着物を借りたいです', pron: '키모노오 카리타이데스', meaning: '기모노를 빌리고 싶어요' },
            { text: 'ゆっくり見てもいいですか？', pron: '윳쿠리 미테모 이이데스카', meaning: '천천히 둘러봐도 될까요?' }
        ],
        itineraryTemplate: [
            {
                title: '히가시야마 & 기온',
                activities: [
                    { time: '08:30', title: '기요미즈데라 아침 참배', type: 'landmark', location: 'Kiyomizu-dera' },
                    { time: '11:30', title: '산넨자카 골목 산책', type: 'map', location: 'Sannenzaka' },
                    { time: '18:00', title: '기온 하나미코지 저녁', type: 'moon-star', location: 'Hanamikoji Street' }
                ]
            },
            {
                title: '후시미 & 남부',
                activities: [
                    { time: '08:00', title: '후시미이나리 천 개 도리이', type: 'landmark', location: 'Fushimi Inari Taisha' },
                    { time: '12:30', title: '후시미 사케 양조장 거리', type: 'store', location: 'Gekkeikan Okura Sake Museum' },
                    { time: '16:00', title: '도후쿠지 정원', type: 'trees', location: 'Tofuku-ji' }
                ]
            },
            {
                title: '아라시야마',
                activities: [
                    { time: '09:00', title: '아라시야마 대나무 숲길', type: 'trees', location: 'Arashiyama Bamboo Grove' },
                    { time: '11:30', title: '덴류지와 정원', type: 'landmark', location: 'Tenryu-ji' },
                    { time: '15:00', title: '도게츠교 강변 산책', type: 'bridge', location: 'Togetsukyo Bridge' }
                ]
            },
            {
                title: '북서부 금각사 라인',
                activities: [
                    { time: '09:30', title: '킨카쿠지 금각사', type: 'landmark', location: 'Kinkaku-ji' },
                    { time: '12:30', title: '료안지 석정', type: 'palette', location: 'Ryoan-ji' },
                    { time: '15:30', title: '니조성 니노마루', type: 'building-2', location: 'Nijo Castle' }
                ]
            },
            {
                title: '니시키 & 이동',
                activities: [
                    { time: '10:00', title: '니시키 시장 먹거리', type: 'utensils-crossed', location: 'Nishiki Market' },
                    { time: '13:00', title: '교토역 이세탄 기념품', type: 'gift', location: 'Kyoto Station' },
                    { time: '16:00', title: '하루카 타고 간사이공항', type: 'train-front', location: 'Kansai International Airport' }
                ]
            }
        ]
    },
    fukuoka: {
        id: 'fukuoka',
        city: 'Fukuoka',
        country: 'Japan',
        summary: '하카타 돈코츠 라멘과 나카스 포장마차, 다자이후 참배와 모모치 바닷바람을 묶은 규슈 관문 템플릿입니다.',
        footer: 'Fukuoka is a port city: sea air by day, yatai stools by night.',
        heroImage: 'assets/heroes/fukuoka.jpg',
        heroPosition: '50% center',
        accent: '#0EA5E9',
        accentRgb: '14, 165, 233',
        ink: '#0C4A6E',
        inkRgb: '12, 74, 110',
        overlayTop: 'rgba(12, 74, 110, 0.40)',
        overlayBottom: 'rgba(8, 25, 45, 0.90)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 33.5902, longitude: 130.4017 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 6,
        phraseLabel: '日本語',
        phrases: [
            { text: '替え玉お願いします', pron: '카에다마 오네가이시마스', meaning: '면 추가 부탁합니다' },
            { text: '麺は硬めで', pron: '멘와 카타메데', meaning: '면은 조금 단단하게요' },
            { text: '相席でも大丈夫です', pron: '아이세키데모 다이조부데스', meaning: '합석해도 괜찮아요' },
            { text: '屋台はどこですか？', pron: '야타이와 도코데스카', meaning: '포장마차가 어디에 있나요?' },
            { text: 'おいしかったです', pron: '오이시캇타데스', meaning: '맛있었습니다' },
            { text: '生ビールください', pron: '나마비루 쿠다사이', meaning: '생맥주 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '하카타 & 나카스',
                activities: [
                    { time: '10:30', title: '구시다 신사 참배', type: 'landmark', location: 'Kushida Shrine' },
                    { time: '13:00', title: '캐널시티 하카타', type: 'shopping-bag', location: 'Canal City Hakata' },
                    { time: '19:00', title: '나카스 야타이 포장마차', type: 'utensils-crossed', location: 'Nakasu Yatai' }
                ]
            },
            {
                title: '다자이후 당일 나들이',
                activities: [
                    { time: '09:00', title: '니시테츠 타고 다자이후', type: 'train-front', location: 'Dazaifu Station' },
                    { time: '10:30', title: '다자이후 텐만구', type: 'landmark', location: 'Dazaifu Tenmangu' },
                    { time: '14:00', title: '규슈국립박물관', type: 'building-2', location: 'Kyushu National Museum' }
                ]
            },
            {
                title: '모모치 & 바다',
                activities: [
                    { time: '10:30', title: '오호리 공원 산책', type: 'trees', location: 'Ohori Park' },
                    { time: '14:00', title: '후쿠오카 타워 전망', type: 'tower-control', location: 'Fukuoka Tower' },
                    { time: '17:30', title: '모모치 해변 노을', type: 'camera', location: 'Momochi Seaside Park' }
                ]
            },
            {
                title: '텐진 & 이동',
                activities: [
                    { time: '10:00', title: '텐진 지하상가 쇼핑', type: 'shopping-cart', location: 'Tenjin Chikagai' },
                    { time: '13:00', title: '하카타역 명란 기념품', type: 'gift', location: 'Hakata Station' },
                    { time: '16:00', title: '후쿠오카 공항 이동', type: 'plane', location: 'Fukuoka Airport' }
                ]
            }
        ]
    },
    sapporo: {
        id: 'sapporo',
        city: 'Sapporo',
        country: 'Japan',
        summary: '오도리 공원의 찬 공기, 미소 라멘과 징기스칸, 오타루 운하 당일치기까지 담은 홋카이도 겨울 템플릿입니다.',
        footer: 'Sapporo is cold air, hot broth, and a grid you can walk.',
        heroImage: 'assets/heroes/sapporo.jpg',
        heroPosition: '50% 45%',
        accent: '#64748B',
        accentRgb: '100, 116, 139',
        ink: '#1E293B',
        inkRgb: '30, 41, 59',
        overlayTop: 'rgba(30, 41, 59, 0.38)',
        overlayBottom: 'rgba(15, 23, 42, 0.92)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 43.0618, longitude: 141.3545 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 12,
        phraseLabel: '日本語',
        phrases: [
            { text: '寒いですね', pron: '사무이데스네', meaning: '춥네요' },
            { text: '味噌ラーメンをください', pron: '미소 라멘오 쿠다사이', meaning: '미소 라멘 주세요' },
            { text: '暖かい席はありますか？', pron: '아타타카이 세키와 아리마스카', meaning: '따뜻한 자리 있나요?' },
            { text: '雪道は滑りますか？', pron: '유키미치와 스베리마스카', meaning: '눈길이 미끄러운가요?' },
            { text: 'バスは何時ですか？', pron: '바스와 난지데스카', meaning: '버스가 몇 시인가요?' },
            { text: 'お土産を探しています', pron: '오미야게오 사가시테이마스', meaning: '기념품을 찾고 있어요' }
        ],
        itineraryTemplate: [
            {
                title: '도심 오도리 라인',
                activities: [
                    { time: '10:00', title: '오도리 공원 산책', type: 'trees', location: 'Odori Park' },
                    { time: '12:30', title: '삿포로 TV 타워 전망', type: 'tower-control', location: 'Sapporo TV Tower' },
                    { time: '18:30', title: '스스키노 징기스칸 저녁', type: 'utensils-crossed', location: 'Susukino' }
                ]
            },
            {
                title: '북부 & 맥주박물관',
                activities: [
                    { time: '10:00', title: '홋카이도청 구본청사', type: 'building-2', location: 'Former Hokkaido Government Office' },
                    { time: '13:30', title: '삿포로 맥주 박물관 시음', type: 'store', location: 'Sapporo Beer Museum' },
                    { time: '17:00', title: '삿포로 팩토리 쇼핑', type: 'shopping-bag', location: 'Sapporo Factory' }
                ]
            },
            {
                title: '오타루 당일치기',
                activities: [
                    { time: '09:00', title: 'JR 타고 오타루', type: 'train-front', location: 'Otaru Station' },
                    { time: '11:00', title: '오타루 운하 산책', type: 'ship', location: 'Otaru Canal' },
                    { time: '15:00', title: '사카이마치 유리공방 거리', type: 'gift', location: 'Sakaimachi Street' }
                ]
            },
            {
                title: '교외 전망 & 시장',
                activities: [
                    { time: '09:30', title: '니조 시장 해산물 아침', type: 'utensils-crossed', location: 'Nijo Market' },
                    { time: '13:00', title: '모이와산 로프웨이', type: 'sun', location: 'Mount Moiwa Ropeway' },
                    { time: '18:00', title: '모이와산 야경', type: 'moon-star', location: 'Mount Moiwa Observation Deck' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '10:00', title: '삿포로역 다이마루 쇼핑', type: 'shopping-cart', location: 'Daimaru Sapporo' },
                    { time: '13:00', title: '짐 정리 후 출발', type: 'luggage', location: 'Sapporo Station' },
                    { time: '16:00', title: '신치토세 공항 이동', type: 'plane', location: 'New Chitose Airport' }
                ]
            }
        ]
    },
    nagoya: {
        id: 'nagoya',
        city: 'Nagoya',
        country: 'Japan',
        summary: '금 샤치호코가 올라앉은 나고야성, 아쓰타 신궁의 고요함, 오스 상점가와 나고야항까지 도는 주부권 템플릿입니다.',
        footer: 'Nagoya is golden roofs, miso-dark food, and easy trains.',
        heroImage: 'assets/heroes/nagoya.jpg',
        heroPosition: '55% center',
        accent: '#CAA404',
        accentRgb: '202, 164, 4',
        ink: '#3F2D0B',
        inkRgb: '63, 45, 11',
        overlayTop: 'rgba(63, 45, 11, 0.40)',
        overlayBottom: 'rgba(26, 20, 10, 0.90)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 35.1815, longitude: 136.9066 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 7,
        phraseLabel: '日本語',
        phrases: [
            { text: '味噌カツをください', pron: '미소카츠오 쿠다사이', meaning: '미소카츠 주세요' },
            { text: 'モーニングはありますか？', pron: '모닝구와 아리마스카', meaning: '모닝 세트 있나요?' },
            { text: '何番出口ですか？', pron: '난반 데구치데스카', meaning: '몇 번 출구인가요?' },
            { text: '待ち時間はどれくらいですか？', pron: '마치지칸와 도레쿠라이데스카', meaning: '대기 시간이 얼마나 되나요?' },
            { text: '一日乗車券をください', pron: '이치니치 조샤켄오 쿠다사이', meaning: '1일 승차권 주세요' },
            { text: '少し辛いですか？', pron: '스코시 카라이데스카', meaning: '좀 매운가요?' }
        ],
        itineraryTemplate: [
            {
                title: '나고야성 & 사카에',
                activities: [
                    { time: '09:30', title: '나고야성과 혼마루고텐', type: 'landmark', location: 'Nagoya Castle' },
                    { time: '13:00', title: '사카에 미소카츠 점심', type: 'utensils-crossed', location: 'Sakae, Nagoya' },
                    { time: '18:00', title: '오아시스21 전망 데크', type: 'building', location: 'Oasis 21' }
                ]
            },
            {
                title: '오스 & 후시미',
                activities: [
                    { time: '10:30', title: '오스칸논 참배', type: 'landmark', location: 'Osu Kannon' },
                    { time: '12:30', title: '오스 상점가 구경', type: 'shopping-cart', location: 'Osu Shopping Street' },
                    { time: '16:00', title: '도쿠가와 미술관', type: 'building-2', location: 'Tokugawa Art Museum' }
                ]
            },
            {
                title: '아쓰타 & 나고야항',
                activities: [
                    { time: '09:30', title: '아쓰타 신궁 숲길', type: 'trees', location: 'Atsuta Shrine' },
                    { time: '13:00', title: '나고야항 수족관', type: 'ship', location: 'Port of Nagoya Public Aquarium' },
                    { time: '17:30', title: '가든 부두 노을', type: 'camera', location: 'Nagoya Port Garden Pier' }
                ]
            },
            {
                title: '나고야역 & 이동',
                activities: [
                    { time: '10:00', title: '나고야역 카페 모닝', type: 'coffee', location: 'Nagoya Station' },
                    { time: '13:00', title: 'JR 게이트타워 쇼핑', type: 'shopping-bag', location: 'JR Gate Tower' },
                    { time: '16:30', title: '주부 센트레아 공항 이동', type: 'plane', location: 'Chubu Centrair International Airport' }
                ]
            }
        ]
    },
    okinawa: {
        id: 'okinawa',
        city: 'Okinawa',
        country: 'Japan',
        summary: '고쿠사이도리의 느린 오후, 슈리성의 류큐 색, 추라우미 수족관과 에메랄드 해변까지 이어지는 오키나와 본섬 템플릿입니다.',
        footer: 'Okinawa moves at island speed: turquoise water, Ryukyu red, no rush.',
        heroImage: 'assets/heroes/okinawa.jpg',
        heroPosition: '50% 55%',
        accent: '#06B6D4',
        accentRgb: '6, 182, 212',
        ink: '#0F3B3A',
        inkRgb: '15, 59, 58',
        overlayTop: 'rgba(15, 59, 58, 0.36)',
        overlayBottom: 'rgba(8, 35, 40, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 26.2124, longitude: 127.6809 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 14,
        phraseLabel: '日本語',
        phrases: [
            { text: 'めんそーれ', pron: '멘소레', meaning: '어서 오세요 (오키나와 말)' },
            { text: 'にふぇーでーびる', pron: '니페데비루', meaning: '감사합니다 (오키나와 말)' },
            { text: 'レンタカーを借りたいです', pron: '렌타카오 카리타이데스', meaning: '렌터카를 빌리고 싶어요' },
            { text: '海はきれいですね', pron: '우미와 키레이데스네', meaning: '바다가 정말 예쁘네요' },
            { text: '泳いでもいいですか？', pron: '오요이데모 이이데스카', meaning: '수영해도 되나요?' },
            { text: '日焼け止めはありますか？', pron: '히야케도메와 아리마스카', meaning: '선크림 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '나하 시내',
                activities: [
                    { time: '10:30', title: '고쿠사이도리 거리 구경', type: 'shopping-bag', location: 'Kokusai Street' },
                    { time: '13:00', title: '마키시 공설시장 점심', type: 'utensils-crossed', location: 'Makishi Public Market' },
                    { time: '17:00', title: '쓰보야 도자기 거리', type: 'palette', location: 'Tsuboya Yachimun Street' }
                ]
            },
            {
                title: '슈리 & 류큐 유적',
                activities: [
                    { time: '09:30', title: '슈리성 공원', type: 'landmark', location: 'Shuri Castle' },
                    { time: '12:30', title: '다마우둔 왕릉', type: 'map', location: 'Tamaudun Mausoleum' },
                    { time: '16:00', title: '후쿠슈엔 정원', type: 'trees', location: 'Fukushuen Garden' }
                ]
            },
            {
                title: '북부 추라우미 드라이브',
                activities: [
                    { time: '08:30', title: '렌터카로 북부 출발', type: 'map', location: 'Naha' },
                    { time: '11:00', title: '추라우미 수족관', type: 'ship', location: 'Okinawa Churaumi Aquarium' },
                    { time: '15:00', title: '고우리 대교와 섬', type: 'bridge', location: 'Kouri Bridge' }
                ]
            },
            {
                title: '중부 해안 & 아메리칸 빌리지',
                activities: [
                    { time: '10:00', title: '만좌모 절벽 전망', type: 'camera', location: 'Cape Manzamo' },
                    { time: '13:30', title: '잔파곶 등대', type: 'sun', location: 'Cape Zanpa' },
                    { time: '18:00', title: '아메리칸 빌리지 관람차 야경', type: 'moon-star', location: 'American Village Chatan' }
                ]
            },
            {
                title: '남부 & 이동',
                activities: [
                    { time: '09:30', title: '세화우타키 성지', type: 'landmark', location: 'Sefa-utaki' },
                    { time: '13:00', title: '우미카지 테라스 브런치', type: 'coffee', location: 'Umikaji Terrace' },
                    { time: '16:30', title: '나하 공항 이동', type: 'plane', location: 'Naha Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_JAPAN;
