// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_JP_NORTH = {
    sendai: {
        id: 'sendai',
        city: 'Sendai',
        country: 'Japan',
        summary: '마쓰시마 섬 유람과 자오 오카마, 아키우 온천, 규탄 정식까지 도호쿠의 관문을 느긋하게 도는 센다이 템플릿입니다.',
        footer: 'Sendai is a city of trees: pine islands, crater lakes, and grilled beef tongue.',
        heroImage: 'assets/heroes/sendai.jpg',
        heroPosition: 'center center',
        accent: '#059630',
        accentRgb: '5, 150, 48',
        ink: '#064E3B',
        inkRgb: '6, 78, 59',
        overlayTop: 'rgba(6, 78, 59, 0.38)',
        overlayBottom: 'rgba(6, 30, 24, 0.90)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 38.2682, longitude: 140.8694 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 9,
        phraseLabel: '日本語',
        phrases: [
            { text: '牛タン定食をください', pron: '규탄 테이쇼쿠오 쿠다사이', meaning: '규탄 정식 주세요' },
            { text: 'ずんだ餅はありますか？', pron: '즌다모치와 아리마스카', meaning: '즌다모치 있나요?' },
            { text: '遊覧船は何時に出ますか？', pron: '유란센와 난지니 데마스카', meaning: '유람선은 몇 시에 출발하나요?' },
            { text: '温泉に入りたいです', pron: '온센니 하이리타이데스', meaning: '온천에 들어가고 싶어요' },
            { text: '樹氷は見えますか？', pron: '주효와 미에마스카', meaning: '수빙(스노몬스터)이 보이나요?' },
            { text: '荷物を預けられますか？', pron: '니모츠오 아즈케라레마스카', meaning: '짐을 맡길 수 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '센다이 시내 & 아오바',
                activities: [
                    { time: '10:00', title: '즈이호덴 다테 마사무네 영묘', type: 'landmark', location: 'Zuihoden' },
                    { time: '13:00', title: '이치반초 규탄 정식 점심', type: 'utensils-crossed', location: 'Ichibancho, Sendai' },
                    { time: '17:00', title: '아오바성터 마사무네 기마상 전망', type: 'binoculars', location: 'Sendai Castle Ruins' }
                ]
            },
            {
                title: '마쓰시마',
                activities: [
                    { time: '09:30', title: '마쓰시마만 섬 순회 유람선', type: 'ship', location: 'Matsushima Bay' },
                    { time: '12:30', title: '즈이간지 & 고다이도', type: 'landmark', location: 'Zuiganji Temple' },
                    { time: '16:00', title: '후쿠우라지마 붉은 다리 산책', type: 'bridge', location: 'Fukuura Island' }
                ]
            },
            {
                title: '자오 & 아키우 온천',
                activities: [
                    { time: '09:00', title: '자오 오카마 분화구 호수', type: 'camera', location: 'Zao Okama' },
                    { time: '13:30', title: '아키우 대폭포', type: 'trees', location: 'Akiu Great Falls' },
                    { time: '17:00', title: '아키우 온천 당일 입욕', type: 'sun', location: 'Akiu Onsen' }
                ]
            },
            {
                title: '아침시장 & 이동',
                activities: [
                    { time: '09:30', title: '센다이 아사이치 아침시장', type: 'store', location: 'Sendai Asaichi Market' },
                    { time: '12:30', title: '에스팔 센다이 즌다 기념품', type: 'gift', location: 'S-PAL Sendai' },
                    { time: '15:30', title: '센다이 공항 이동', type: 'plane', location: 'Sendai Airport' }
                ]
            }
        ]
    },
    niigata: {
        id: 'niigata',
        city: 'Niigata',
        country: 'Japan',
        summary: '반다이바시 강바람과 후루마치 골목, 사도섬 당일치기와 니가타 사케 시음을 엮은 일본해 쌀·술 템플릿입니다.',
        footer: 'Niigata runs on rice, sake, and the slow gray light of the Sea of Japan.',
        heroImage: 'assets/heroes/niigata.jpg',
        heroPosition: 'center center',
        accent: '#1D4ED8',
        accentRgb: '29, 78, 216',
        ink: '#172554',
        inkRgb: '23, 37, 84',
        overlayTop: 'rgba(23, 37, 84, 0.40)',
        overlayBottom: 'rgba(10, 18, 44, 0.90)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 37.9162, longitude: 139.0364 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 10,
        phraseLabel: '日本語',
        phrases: [
            { text: '日本酒の飲み比べをお願いします', pron: '니혼슈노 노미쿠라베오 오네가이시마스', meaning: '사케 시음 세트 부탁합니다' },
            { text: '辛口はどれですか？', pron: '카라쿠치와 도레데스카', meaning: '드라이한 술은 어느 것인가요?' },
            { text: 'フェリーの切符を買いたいです', pron: '페리노 킷푸오 카이타이데스', meaning: '페리 표를 사고 싶어요' },
            { text: '海は荒れていますか？', pron: '우미와 아레테이마스카', meaning: '바다가 거친가요?' },
            { text: 'たらい舟に乗れますか？', pron: '타라이부네니 노레마스카', meaning: '대야배를 탈 수 있나요?' },
            { text: 'ご飯のおかわりできますか？', pron: '고항노 오카와리 데키마스카', meaning: '밥 리필 되나요?' }
        ],
        itineraryTemplate: [
            {
                title: '반다이 & 니가타역',
                activities: [
                    { time: '10:00', title: '반다이바시 시나노강 산책', type: 'bridge', location: 'Bandai Bridge' },
                    { time: '12:30', title: '피아 반다이 해산물 점심', type: 'utensils-crossed', location: 'Pia Bandai' },
                    { time: '17:30', title: '폰슈칸 사케 시음 코인', type: 'store', location: 'Ponshukan Niigata Station' }
                ]
            },
            {
                title: '사도섬 당일치기',
                activities: [
                    { time: '08:00', title: '제트포일 타고 사도 료쓰항', type: 'map', location: 'Ryotsu Port' },
                    { time: '11:00', title: '사도 금산 광산 갱도', type: 'landmark', location: 'Sado Gold Mine' },
                    { time: '14:00', title: '오기 타라이부네 대야배 체험', type: 'ship', location: 'Ogi Port' }
                ]
            },
            {
                title: '미나토 & 후루마치',
                activities: [
                    { time: '10:00', title: '니가타시 역사박물관 미나토피아', type: 'building-2', location: 'Niigata City History Museum Minatopia' },
                    { time: '13:00', title: '토키 멧세 전망실', type: 'building', location: 'Toki Messe' },
                    { time: '18:00', title: '후루마치 골목 이자카야 저녁', type: 'moon-star', location: 'Furumachi, Niigata' }
                ]
            },
            {
                title: '양조장 & 이동',
                activities: [
                    { time: '10:00', title: '이마요 쓰카사 양조장 견학', type: 'store', location: 'Imayo Tsukasa Sake Brewery' },
                    { time: '12:30', title: '니가타역 코시히카리 기념품', type: 'gift', location: 'Niigata Station' },
                    { time: '15:30', title: '니가타 공항 이동', type: 'plane', location: 'Niigata Airport' }
                ]
            }
        ]
    },
    aomori: {
        id: 'aomori',
        city: 'Aomori',
        country: 'Japan',
        summary: '네부타의 집 와랏세와 히로사키성, 오이라세 계류와 핫코다 로프웨이를 잇는 혼슈 최북단 축제·자연 템플릿입니다.',
        footer: 'Aomori is Nebuta light, apple orchards, and a stream that never stops.',
        heroImage: 'assets/heroes/aomori.jpg',
        heroPosition: 'center center',
        accent: '#E11DC9',
        accentRgb: '225, 29, 201',
        ink: '#4C0519',
        inkRgb: '76, 5, 25',
        overlayTop: 'rgba(76, 5, 25, 0.38)',
        overlayBottom: 'rgba(30, 8, 16, 0.90)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 40.8246, longitude: 140.7406 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 11,
        phraseLabel: '日本語',
        phrases: [
            { text: 'りんごジュースをください', pron: '링고 쥬스오 쿠다사이', meaning: '사과 주스 주세요' },
            { text: 'ねぶたはいつですか？', pron: '네부타와 이츠데스카', meaning: '네부타 축제는 언제인가요?' },
            { text: '桜は咲いていますか？', pron: '사쿠라와 사이테이마스카', meaning: '벚꽃이 피었나요?' },
            { text: '遊歩道はどこから始まりますか？', pron: '유호도와 도코카라 하지마리마스카', meaning: '산책로는 어디서 시작하나요?' },
            { text: 'ロープウェイは動いていますか？', pron: '로프웨이와 우고이테이마스카', meaning: '로프웨이 운행하나요?' },
            { text: 'のっけ丼のチケットをください', pron: '놋케동노 치켓토오 쿠다사이', meaning: '놋케동 티켓 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '아오모리 항구 & 시내',
                activities: [
                    { time: '10:00', title: '네부타의 집 와랏세', type: 'sparkles', location: 'Nebuta Museum WA-RASSE' },
                    { time: '12:30', title: '후루카와 시장 놋케동 점심', type: 'utensils-crossed', location: 'Aomori Gyosai Center' },
                    { time: '17:30', title: '아스팜 전망대와 아오모리만 노을', type: 'building', location: 'ASPAM' }
                ]
            },
            {
                title: '히로사키',
                activities: [
                    { time: '09:30', title: '히로사키성 & 공원', type: 'landmark', location: 'Hirosaki Castle' },
                    { time: '12:30', title: '후지타 기념정원 애플파이', type: 'coffee', location: 'Fujita Memorial Japanese Garden' },
                    { time: '15:30', title: '쓰가루한 네푸타무라 샤미센', type: 'music', location: 'Tsugaru-han Neputa Village' }
                ]
            },
            {
                title: '핫코다 & 오이라세',
                activities: [
                    { time: '09:00', title: '핫코다 로프웨이 산정', type: 'binoculars', location: 'Hakkoda Ropeway' },
                    { time: '12:30', title: '오이라세 계류 트레킹', type: 'trees', location: 'Oirase Gorge' },
                    { time: '15:30', title: '도와다 호수 유람선', type: 'ship', location: 'Lake Towada' }
                ]
            },
            {
                title: '미술관 & 이동',
                activities: [
                    { time: '10:00', title: '아오모리 현립미술관 아오모리견', type: 'palette', location: 'Aomori Museum of Art' },
                    { time: '13:00', title: 'A-팩토리 사과 시드르 기념품', type: 'gift', location: 'A-FACTORY' },
                    { time: '15:30', title: '아오모리 공항 이동', type: 'plane', location: 'Aomori Airport' }
                ]
            }
        ]
    },
    hakodate: {
        id: 'hakodate',
        city: 'Hakodate',
        country: 'Japan',
        summary: '하코다테산 백만 불 야경, 아침시장 카이센동, 별 모양 고료카쿠와 모토마치 언덕, 유노카와 온천까지 담은 항구 도시 템플릿입니다.',
        footer: 'Hakodate is a harbor of slopes, church bells, and a night view worth the ropeway.',
        heroImage: 'assets/heroes/hakodate.jpg',
        heroPosition: 'center center',
        accent: '#4D3AED',
        accentRgb: '77, 58, 237',
        ink: '#2E1065',
        inkRgb: '46, 16, 101',
        overlayTop: 'rgba(46, 16, 101, 0.40)',
        overlayBottom: 'rgba(18, 10, 40, 0.92)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 41.7687, longitude: 140.7291 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 12,
        phraseLabel: '日本語',
        phrases: [
            { text: '夜景は何時からきれいですか？', pron: '야케이와 난지카라 키레이데스카', meaning: '야경은 몇 시부터 예쁜가요?' },
            { text: '往復券をください', pron: '오후쿠켄오 쿠다사이', meaning: '왕복권 주세요' },
            { text: 'イカ釣りを体験できますか？', pron: '이카츠리오 타이켄 데키마스카', meaning: '오징어 낚시 체험할 수 있나요?' },
            { text: '市電の一日券はありますか？', pron: '시덴노 이치니치켄와 아리마스카', meaning: '노면전차 1일권 있나요?' },
            { text: '足湯は無料ですか？', pron: '아시유와 무료데스카', meaning: '족욕탕은 무료인가요?' },
            { text: '風が強いですね', pron: '카제가 츠요이데스네', meaning: '바람이 세네요' }
        ],
        itineraryTemplate: [
            {
                title: '모토마치 & 하코다테산',
                activities: [
                    { time: '10:00', title: '하치만자카 언덕과 항구 전망', type: 'map', location: 'Hachimanzaka Slope' },
                    { time: '13:00', title: '구 하코다테구 공회당', type: 'building-2', location: 'Old Public Hall of Hakodate Ward' },
                    { time: '18:00', title: '하코다테산 로프웨이 야경', type: 'moon-star', location: 'Mount Hakodate' }
                ]
            },
            {
                title: '아침시장 & 고료카쿠',
                activities: [
                    { time: '08:00', title: '하코다테 아침시장 카이센동', type: 'utensils-crossed', location: 'Hakodate Morning Market' },
                    { time: '12:30', title: '고료카쿠 공원 별 모양 성곽', type: 'landmark', location: 'Goryokaku Park' },
                    { time: '17:00', title: '고료카쿠 타워 전망', type: 'tower-control', location: 'Goryokaku Tower' }
                ]
            },
            {
                title: '유노카와 온천',
                activities: [
                    { time: '10:00', title: '트라피스틴 수도원', type: 'landmark', location: 'Trappistine Convent' },
                    { time: '13:00', title: '열대식물원 온천 원숭이', type: 'trees', location: 'Hakodate Tropical Botanical Garden' },
                    { time: '17:00', title: '유노카와 온천 족욕과 료칸', type: 'sun', location: 'Yunokawa Onsen' }
                ]
            },
            {
                title: '베이 에어리어 & 이동',
                activities: [
                    { time: '10:00', title: '가네모리 아카렌가 창고 쇼핑', type: 'shopping-bag', location: 'Kanemori Red Brick Warehouse' },
                    { time: '12:30', title: '하코다테역 기념품', type: 'gift', location: 'Hakodate Station' },
                    { time: '15:30', title: '하코다테 공항 이동', type: 'plane', location: 'Hakodate Airport' }
                ]
            }
        ]
    },
    shizuoka: {
        id: 'shizuoka',
        city: 'Shizuoka',
        country: 'Japan',
        summary: '미호노마쓰바라 너머 후지산, 니혼다이라와 구노잔 동조궁, 아타미 온천 바다까지 차밭 향으로 묶은 시즈오카 템플릿입니다.',
        footer: 'Shizuoka is tea fields, a pine-lined shore, and Fuji on a clear morning.',
        heroImage: 'assets/heroes/shizuoka.jpg',
        heroPosition: 'center center',
        accent: '#3DA30D',
        accentRgb: '61, 163, 13',
        ink: '#1A2E05',
        inkRgb: '26, 46, 5',
        overlayTop: 'rgba(26, 46, 5, 0.36)',
        overlayBottom: 'rgba(14, 24, 6, 0.90)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 34.9756, longitude: 138.3828 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 7,
        phraseLabel: '日本語',
        phrases: [
            { text: '富士山は見えますか？', pron: '후지산와 미에마스카', meaning: '후지산이 보이나요?' },
            { text: 'お茶の試飲はできますか？', pron: '오차노 시인와 데키마스카', meaning: '차 시음할 수 있나요?' },
            { text: '桜えびの丼はありますか？', pron: '사쿠라에비노 동와 아리마스카', meaning: '사쿠라 새우 덮밥 있나요?' },
            { text: '今日は晴れますか？', pron: '쿄와 하레마스카', meaning: '오늘 맑을까요?' },
            { text: '静岡おでんをください', pron: '시즈오카 오뎅오 쿠다사이', meaning: '시즈오카 오뎅 주세요' },
            { text: '新幹線の切符はここで買えますか？', pron: '신칸센노 킷푸와 코코데 카에마스카', meaning: '신칸센 표를 여기서 살 수 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '시즈오카 시내',
                activities: [
                    { time: '10:00', title: '시즈오카 센겐 신사', type: 'landmark', location: 'Shizuoka Sengen Shrine' },
                    { time: '13:00', title: '아오바 오뎅 거리 점심', type: 'utensils-crossed', location: 'Aoba Oden Street' },
                    { time: '17:00', title: '순푸성 공원 산책', type: 'trees', location: 'Sunpu Castle Park' }
                ]
            },
            {
                title: '니혼다이라 & 미호',
                activities: [
                    { time: '09:30', title: '니혼다이라 유메 테라스 후지산 전망', type: 'binoculars', location: 'Nihondaira Yume Terrace' },
                    { time: '12:00', title: '로프웨이로 구노잔 동조궁', type: 'landmark', location: 'Kunozan Toshogu Shrine' },
                    { time: '16:00', title: '미호노마쓰바라 소나무 해변', type: 'camera', location: 'Miho no Matsubara' }
                ]
            },
            {
                title: '아타미 & 이즈',
                activities: [
                    { time: '09:30', title: 'MOA 미술관', type: 'palette', location: 'MOA Museum of Art' },
                    { time: '13:00', title: '아타미 선비치 해변 산책', type: 'sun', location: 'Atami Sun Beach' },
                    { time: '17:00', title: '아타미성 전망과 온천', type: 'building', location: 'Atami Castle' }
                ]
            },
            {
                title: '토로 유적 & 이동',
                activities: [
                    { time: '10:00', title: '토로 유적 야요이 마을', type: 'map', location: 'Toro Ruins' },
                    { time: '12:30', title: '시즈오카역 차 & 우나기파이 기념품', type: 'gift', location: 'Shizuoka Station' },
                    { time: '15:30', title: '후지산 시즈오카 공항 이동', type: 'plane', location: 'Mount Fuji Shizuoka Airport' }
                ]
            }
        ]
    },
    ishigaki: {
        id: 'ishigaki',
        city: 'Ishigaki',
        country: 'Japan',
        summary: '가비라만 글라스보트, 다케토미 물소 수레, 이리오모테 정글 크루즈와 유글레나몰 저녁까지 담은 야에야마 섬 템플릿입니다.',
        footer: 'Ishigaki is coral blue, water buffalo carts, and a sky full of stars.',
        heroImage: 'assets/heroes/ishigaki.jpg',
        heroPosition: 'center center',
        accent: '#0D3594',
        accentRgb: '13, 53, 148',
        ink: '#134E4A',
        inkRgb: '19, 78, 74',
        overlayTop: 'rgba(19, 78, 74, 0.36)',
        overlayBottom: 'rgba(8, 36, 36, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 24.3448, longitude: 124.1572 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 14,
        phraseLabel: '日本語',
        phrases: [
            { text: 'グラスボートに乗りたいです', pron: '구라스보토니 노리타이데스', meaning: '글라스보트를 타고 싶어요' },
            { text: '水牛車は何時ですか？', pron: '스이규샤와 난지데스카', meaning: '물소 수레는 몇 시인가요?' },
            { text: '石垣牛をください', pron: '이시가키규오 쿠다사이', meaning: '이시가키규 주세요' },
            { text: 'シュノーケルを借りられますか？', pron: '슈노케루오 카리라레마스카', meaning: '스노클을 빌릴 수 있나요?' },
            { text: '船は欠航ですか？', pron: '후네와 켓코데스카', meaning: '배가 결항인가요?' },
            { text: '星空ツアーはありますか？', pron: '호시조라 츠아와 아리마스카', meaning: '별 관측 투어 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '이시가키 시내',
                activities: [
                    { time: '10:30', title: '유글레나몰 아케이드 구경', type: 'shopping-bag', location: 'Euglena Mall' },
                    { time: '13:00', title: '이시가키 공설시장 점심', type: 'utensils-crossed', location: 'Ishigaki Public Market' },
                    { time: '17:30', title: '반나 공원 전망대 노을', type: 'camera', location: 'Banna Park' }
                ]
            },
            {
                title: '가비라만 & 북부',
                activities: [
                    { time: '09:30', title: '가비라만 글라스보트', type: 'ship', location: 'Kabira Bay' },
                    { time: '12:30', title: '요네하라 해변 스노클', type: 'sun', location: 'Yonehara Beach' },
                    { time: '16:30', title: '다마토리자키 전망대', type: 'binoculars', location: 'Tamatorizaki Observatory' }
                ]
            },
            {
                title: '이리오모테 & 다케토미',
                activities: [
                    { time: '08:30', title: '이리오모테 우라우치강 정글 크루즈', type: 'trees', location: 'Urauchi River' },
                    { time: '12:30', title: '유부섬 물소 수레', type: 'map', location: 'Yubu Island' },
                    { time: '16:00', title: '다케토미 마을 붉은 기와 골목', type: 'landmark', location: 'Taketomi Island' }
                ]
            },
            {
                title: '후사키 & 이동',
                activities: [
                    { time: '09:30', title: '후사키 비치 아침 산책', type: 'sun', location: 'Fusaki Beach' },
                    { time: '12:30', title: '730 코트 기념품', type: 'gift', location: '730 COURT' },
                    { time: '15:30', title: '신이시가키 공항 이동', type: 'plane', location: 'New Ishigaki Airport' }
                ]
            }
        ]
    },
    miyakojima: {
        id: 'miyakojima',
        city: 'Miyakojima',
        country: 'Japan',
        summary: '요나하마에하마의 미야코 블루, 이라부대교와 시모지시마 17END, 이케마대교 드라이브를 잇는 렌터카 섬 템플릿입니다.',
        footer: 'Miyakojima is one long bridge into blue, best driven with the windows down.',
        heroImage: 'assets/heroes/miyakojima.jpg',
        heroPosition: 'center center',
        accent: '#0891B2',
        accentRgb: '8, 145, 178',
        ink: '#164E63',
        inkRgb: '22, 78, 99',
        overlayTop: 'rgba(22, 78, 99, 0.34)',
        overlayBottom: 'rgba(8, 34, 48, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 24.8055, longitude: 125.2811 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 13,
        phraseLabel: '日本語',
        phrases: [
            { text: '宮古そばをください', pron: '미야코 소바오 쿠다사이', meaning: '미야코 소바 주세요' },
            { text: 'ウミガメはいますか？', pron: '우미가메와 이마스카', meaning: '바다거북이 있나요?' },
            { text: 'マンゴーはありますか？', pron: '망고와 아리마스카', meaning: '망고 있나요?' },
            { text: 'ガソリンスタンドはどこですか？', pron: '가소린스탄도와 도코데스카', meaning: '주유소가 어디인가요?' },
            { text: '夕日は何時ごろですか？', pron: '유히와 난지고로데스카', meaning: '노을은 몇 시쯤인가요?' },
            { text: '波は高いですか？', pron: '나미와 타카이데스카', meaning: '파도가 높나요?' }
        ],
        itineraryTemplate: [
            {
                title: '요나하마에하마 & 남서부',
                activities: [
                    { time: '10:00', title: '요나하마에하마 비치', type: 'sun', location: 'Yonaha Maehama Beach' },
                    { time: '13:00', title: '미야코지마 공설시장 미야코소바', type: 'utensils-crossed', location: 'Miyakojima Public Market' },
                    { time: '16:30', title: '구리마 대교 & 류구성 전망대', type: 'binoculars', location: 'Ryugujo Observatory' }
                ]
            },
            {
                title: '이라부 & 시모지시마',
                activities: [
                    { time: '09:30', title: '이라부 대교 드라이브', type: 'bridge', location: 'Irabu Bridge' },
                    { time: '12:30', title: '도리이케 연못 산책', type: 'map', location: 'Toriike Pond' },
                    { time: '17:00', title: '17END 활주로 끝 노을', type: 'camera', location: '17END' }
                ]
            },
            {
                title: '이케마 & 동부',
                activities: [
                    { time: '09:30', title: '스나야마 비치', type: 'sun', location: 'Sunayama Beach' },
                    { time: '12:00', title: '이케마 대교 드라이브', type: 'bridge', location: 'Ikema Bridge' },
                    { time: '16:00', title: '히가시헨나자키 등대', type: 'camera', location: 'Cape Higashi-Hennazaki' }
                ]
            },
            {
                title: '히라라 & 이동',
                activities: [
                    { time: '09:30', title: '하리미즈 우타키 참배', type: 'landmark', location: 'Harimizu Utaki' },
                    { time: '12:30', title: '시마노에키 미야코 기념품', type: 'gift', location: 'Shima no Eki Miyako' },
                    { time: '15:30', title: '미야코 공항 이동', type: 'plane', location: 'Miyako Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_JP_NORTH;
