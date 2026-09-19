// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_CN_B = {
    chongqing: {
        id: 'chongqing',
        city: 'Chongqing',
        country: 'China',
        summary: '훙야둥 야경과 경전철 관통 건물, 고진 골목과 훠궈를 한 줄로 엮은 산성 충칭 템플릿입니다.',
        footer: 'Chongqing stacks itself: trains through towers, lights on the cliff, hotpot at the end.',
        heroImage: 'assets/heroes/chongqing.jpg',
        heroPosition: 'center center',
        accent: '#D72626',
        accentRgb: '215, 38, 38',
        ink: '#4C0519',
        inkRgb: '76, 5, 25',
        overlayTop: 'rgba(76, 5, 25, 0.44)',
        overlayBottom: 'rgba(24, 12, 18, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 29.5630, longitude: 106.5516 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 7,
        phraseLabel: '中文',
        phrases: [
            { text: '要鸳鸯锅', pron: '[야오 위안양 궈]', meaning: '반반 훠궈로 할게요' },
            { text: '微麻微辣', pron: '[웨이 마 웨이 라]', meaning: '조금만 얼얼하고 조금만 맵게요' },
            { text: '索道在哪坐？', pron: '[쒀다오 짜이 나 쭤]', meaning: '케이블카는 어디서 타나요?' },
            { text: '轻轨怎么坐？', pron: '[칭구이 전머 쭤]', meaning: '경전철은 어떻게 타나요?' },
            { text: '一碗小面', pron: '[이 완 샤오몐]', meaning: '충칭 샤오몐 한 그릇 주세요' },
            { text: '几点亮灯？', pron: '[지 뎬 량 덩]', meaning: '몇 시에 조명이 켜지나요?' }
        ],
        itineraryTemplate: [
            {
                title: '해방비 & 훙야둥',
                activities: [
                    { time: '10:00', title: '해방비 보행가 쇼핑', type: 'shopping-bag', location: 'Jiefangbei Pedestrian Street' },
                    { time: '12:30', title: '바이루 먹자골목 점심', type: 'utensils-crossed', location: 'Bayi Road Food Street' },
                    { time: '19:00', title: '훙야둥 야경', type: 'sparkles', location: 'Hongya Cave' }
                ]
            },
            {
                title: '리쯔바 & 창장 케이블카',
                activities: [
                    { time: '10:00', title: '리쯔바 경전철 관통 건물', type: 'train-front', location: 'Liziba Station' },
                    { time: '12:30', title: '어링얼창 카페 점심', type: 'coffee', location: 'Eling Erchang Creative Park' },
                    { time: '18:00', title: '창장 케이블카 야경', type: 'moon-star', location: 'Yangtze River Cableway' }
                ]
            },
            {
                title: '츠치커우 고진',
                activities: [
                    { time: '10:00', title: '츠치커우 골목 산책', type: 'store', location: 'Ciqikou Ancient Town' },
                    { time: '12:30', title: '마오쉐왕 고진 점심', type: 'utensils-crossed', location: 'Ciqikou Ancient Town' },
                    { time: '15:30', title: '보륜사 & 자링강 전망', type: 'landmark', location: 'Baolun Temple' }
                ]
            },
            {
                title: '난산 & 이동',
                activities: [
                    { time: '09:30', title: '난산 이커수 전망대', type: 'binoculars', location: 'Nanshan Yikeshu Viewing Platform' },
                    { time: '12:30', title: '난빈루 강변 훠궈 점심', type: 'utensils-crossed', location: 'Nanbin Road' },
                    { time: '16:30', title: '장베이 공항 이동', type: 'plane', location: 'Chongqing Jiangbei International Airport' }
                ]
            }
        ]
    },
    guilin: {
        id: 'guilin',
        city: 'Guilin',
        country: 'China',
        summary: '상비산과 리장 유람, 룽지 다랑논과 양숴 시골길까지 카르스트 풍경을 나흘로 묶은 구이린 템플릿입니다.',
        footer: 'Guilin is an ink painting you can float through.',
        heroImage: 'assets/heroes/guilin.jpg',
        heroPosition: 'center center',
        accent: '#2F855A',
        accentRgb: '47, 133, 90',
        ink: '#022C22',
        inkRgb: '2, 44, 34',
        overlayTop: 'rgba(2, 44, 34, 0.42)',
        overlayBottom: 'rgba(12, 24, 20, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 25.2742, longitude: 110.2900 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 8,
        phraseLabel: '中文',
        phrases: [
            { text: '我要坐竹筏', pron: '[워 야오 쭤 주파]', meaning: '대나무 뗏목 타고 싶어요' },
            { text: '船几点开？', pron: '[촨 지 뎬 카이]', meaning: '배는 몇 시에 출발하나요?' },
            { text: '风景真美', pron: '[펑징 전 메이]', meaning: '풍경이 정말 아름답네요' },
            { text: '一碗米粉', pron: '[이 완 미펀]', meaning: '구이린 쌀국수 한 그릇 주세요' },
            { text: '去阳朔的车在哪？', pron: '[취 양숴 더 처 짜이 나]', meaning: '양숴 가는 차는 어디 있나요?' },
            { text: '梯田怎么去？', pron: '[티톈 전머 취]', meaning: '다랑논은 어떻게 가나요?' }
        ],
        itineraryTemplate: [
            {
                title: '구이린 시내',
                activities: [
                    { time: '10:00', title: '상비산 코끼리바위', type: 'landmark', location: 'Elephant Trunk Hill' },
                    { time: '12:30', title: '정양 보행가 구이린 미펀 점심', type: 'utensils-crossed', location: 'Zhengyang Pedestrian Street' },
                    { time: '19:00', title: '일월쌍탑 야경', type: 'moon-star', location: 'Sun and Moon Twin Pagodas' }
                ]
            },
            {
                title: '룽지 다랑논',
                activities: [
                    { time: '08:30', title: '룽지 다랑논 트레킹', type: 'trees', location: 'Longji Rice Terraces' },
                    { time: '12:30', title: '핑안 마을 대나무통밥 점심', type: 'utensils-crossed', location: 'Ping\'an Village' },
                    { time: '15:30', title: '황뤄 야오족 긴머리 마을', type: 'landmark', location: 'Huangluo Yao Village' }
                ]
            },
            {
                title: '리장 유람 & 양숴',
                activities: [
                    { time: '08:30', title: '리장 유람선 (구이린→양숴)', type: 'ship', location: 'Li River' },
                    { time: '13:30', title: '양숴 서가 비어피시 점심', type: 'utensils-crossed', location: 'Yangshuo West Street' },
                    { time: '19:30', title: '인상유삼저 야간 공연', type: 'music', location: 'Impression Liu Sanjie' }
                ]
            },
            {
                title: '양숴 시골 & 이동',
                activities: [
                    { time: '09:00', title: '위룽강 대나무 뗏목', type: 'ship', location: 'Yulong River' },
                    { time: '12:00', title: '월량산 농가 점심', type: 'utensils-crossed', location: 'Moon Hill' },
                    { time: '16:30', title: '량장 공항 이동', type: 'plane', location: 'Guilin Liangjiang International Airport' }
                ]
            }
        ]
    },
    dalian: {
        id: 'dalian',
        city: 'Dalian',
        country: 'China',
        summary: '싱하이광장과 빈하이로 해안, 라오후탄과 러시아풍정가를 잇는 바닷바람 다롄 템플릿입니다.',
        footer: 'Dalian is sea wind, wide squares, and seafood by the pier.',
        heroImage: 'assets/heroes/dalian.jpg',
        heroPosition: 'center center',
        accent: '#1F6FB2',
        accentRgb: '31, 111, 178',
        ink: '#1E3A8A',
        inkRgb: '30, 58, 138',
        overlayTop: 'rgba(30, 58, 138, 0.42)',
        overlayBottom: 'rgba(15, 23, 42, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 38.9140, longitude: 121.6147 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 9,
        phraseLabel: '中文',
        phrases: [
            { text: '海鲜新鲜吗？', pron: '[하이셴 신셴 마]', meaning: '해산물 신선한가요?' },
            { text: '我想坐电车', pron: '[워 샹 쭤 뎬처]', meaning: '트램을 타보고 싶어요' },
            { text: '广场怎么走？', pron: '[광창 전머 저우]', meaning: '광장은 어떻게 가나요?' },
            { text: '风好大', pron: '[펑 하오 다]', meaning: '바람이 정말 세네요' },
            { text: '来一份烤鱿鱼', pron: '[라이 이 펀 카오 여우위]', meaning: '오징어구이 하나 주세요' },
            { text: '哪里看日落好？', pron: '[날리 칸 르뤄 하오]', meaning: '일몰 보기 좋은 곳이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '싱하이광장 & 빈하이로',
                activities: [
                    { time: '10:00', title: '싱하이광장 산책', type: 'map', location: 'Xinghai Square' },
                    { time: '12:30', title: '다롄 해산물 점심', type: 'utensils-crossed', location: 'Wanbao Seafood Restaurant' },
                    { time: '17:00', title: '빈하이로 해안 일몰', type: 'camera', location: 'Binhai Road Dalian' }
                ]
            },
            {
                title: '라오후탄 & 남쪽 해안',
                activities: [
                    { time: '09:30', title: '라오후탄 해양공원', type: 'sun', location: 'Laohutan Ocean Park' },
                    { time: '13:00', title: '푸자좡 해변 점심', type: 'utensils-crossed', location: 'Fujiazhuang Beach' },
                    { time: '16:30', title: '방추이다오 해안 산책', type: 'trees', location: 'Bangchui Island Scenic Area' }
                ]
            },
            {
                title: '러시아풍정가 & 이동',
                activities: [
                    { time: '10:00', title: '러시아 풍정가 산책', type: 'store', location: 'Russian Style Street' },
                    { time: '12:30', title: '중산광장 근처 점심', type: 'utensils-crossed', location: 'Zhongshan Square Dalian' },
                    { time: '16:30', title: '저우수이쯔 공항 이동', type: 'plane', location: 'Dalian Zhoushuizi International Airport' }
                ]
            }
        ]
    },
    shenyang: {
        id: 'shenyang',
        city: 'Shenyang',
        country: 'China',
        summary: '선양고궁과 장씨수부, 북릉공원과 중가 야경으로 청나라 첫 수도를 걷는 선양 템플릿입니다.',
        footer: 'Shenyang is the first Qing capital, still warm with dumplings and skewers.',
        heroImage: 'assets/heroes/shenyang.jpg',
        heroPosition: 'center center',
        accent: '#B8860B',
        accentRgb: '184, 134, 11',
        ink: '#422006',
        inkRgb: '66, 32, 6',
        overlayTop: 'rgba(66, 32, 6, 0.44)',
        overlayBottom: 'rgba(28, 20, 12, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 41.8057, longitude: 123.4315 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 10,
        phraseLabel: '中文',
        phrases: [
            { text: '故宫怎么走？', pron: '[구궁 전머 저우]', meaning: '고궁은 어떻게 가나요?' },
            { text: '来一个鸡架', pron: '[라이 이 거 지자]', meaning: '지자(닭뼈 구이) 하나 주세요' },
            { text: '天真冷', pron: '[톈 전 렁]', meaning: '날씨가 정말 춥네요' },
            { text: '有讲解吗？', pron: '[여우 장제 마]', meaning: '해설 가이드 있나요?' },
            { text: '来十串', pron: '[라이 스 촨]', meaning: '꼬치 열 개 주세요' },
            { text: '老好了', pron: '[라오 하오 러]', meaning: '엄청 좋아요 (동북 사투리)' }
        ],
        itineraryTemplate: [
            {
                title: '선양고궁 & 중가',
                activities: [
                    { time: '09:30', title: '선양고궁 (무크덴 궁)', type: 'landmark', location: 'Shenyang Imperial Palace' },
                    { time: '12:30', title: '라오볜 만두 점심', type: 'utensils-crossed', location: 'Laobian Dumpling Restaurant' },
                    { time: '18:30', title: '중가 보행가 야경 쇼핑', type: 'shopping-bag', location: 'Zhongjie Pedestrian Street' }
                ]
            },
            {
                title: '시타 & 태원가',
                activities: [
                    { time: '10:00', title: '중산광장 옛 만철 건물', type: 'building', location: 'Zhongshan Square Shenyang' },
                    { time: '12:30', title: '시타 조선족 거리 점심', type: 'utensils-crossed', location: 'Xita Street' },
                    { time: '18:00', title: '태원가 쇼핑 & 저녁', type: 'shopping-cart', location: 'Taiyuan Street' }
                ]
            },
            {
                title: '북릉 & 이동',
                activities: [
                    { time: '09:30', title: '북릉공원 소릉 산책', type: 'trees', location: 'Beiling Park' },
                    { time: '12:30', title: '장씨수부 관람 & 점심', type: 'building-2', location: 'Marshal Zhang\'s Mansion Museum' },
                    { time: '16:30', title: '타오셴 공항 이동', type: 'plane', location: 'Shenyang Taoxian International Airport' }
                ]
            }
        ]
    },
    yantai: {
        id: 'yantai',
        city: 'Yantai',
        country: 'China',
        summary: '옌타이산 등대와 펑라이각 전설, 창위 와인과 양마도 해안을 담은 옌타이 템플릿입니다.',
        footer: 'Yantai pours wine by the sea and tells legends of the eight immortals.',
        heroImage: 'assets/heroes/yantai.jpg',
        heroPosition: 'center center',
        accent: '#7B2D8E',
        accentRgb: '123, 45, 142',
        ink: '#2E1065',
        inkRgb: '46, 16, 101',
        overlayTop: 'rgba(46, 16, 101, 0.42)',
        overlayBottom: 'rgba(20, 14, 34, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 37.4638, longitude: 121.4479 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 11,
        phraseLabel: '中文',
        phrases: [
            { text: '一杯红酒', pron: '[이 베이 훙주]', meaning: '와인 한 잔 주세요' },
            { text: '可以试喝吗？', pron: '[커이 스 허 마]', meaning: '시음할 수 있나요?' },
            { text: '苹果甜吗？', pron: '[핑궈 톈 마]', meaning: '사과 달아요?' },
            { text: '去蓬莱怎么走？', pron: '[취 펑라이 전머 저우]', meaning: '펑라이는 어떻게 가나요?' },
            { text: '有海景房吗？', pron: '[여우 하이징팡 마]', meaning: '바다 전망 방 있나요?' },
            { text: '轮渡几点？', pron: '[룬두 지 뎬]', meaning: '페리는 몇 시예요?' }
        ],
        itineraryTemplate: [
            {
                title: '옌타이산 & 조계지',
                activities: [
                    { time: '10:00', title: '옌타이산 등대 공원', type: 'landmark', location: 'Yantaishan Park' },
                    { time: '12:30', title: '차오양제 옛 거리 점심', type: 'utensils-crossed', location: 'Chaoyang Street Yantai' },
                    { time: '17:30', title: '제1해수욕장 일몰', type: 'camera', location: 'Yantai First Bathing Beach' }
                ]
            },
            {
                title: '양마도 & 와인',
                activities: [
                    { time: '09:30', title: '양마도 해안도로 드라이브', type: 'map', location: 'Yangma Island' },
                    { time: '12:30', title: '양마도 어가 해산물 점심', type: 'utensils-crossed', location: 'Yangma Island' },
                    { time: '16:00', title: '창위 와인문화박물관 시음', type: 'library', location: 'Changyu Wine Culture Museum' }
                ]
            },
            {
                title: '펑라이 & 이동',
                activities: [
                    { time: '09:30', title: '창위 카스텔 와인성 투어', type: 'ticket', location: 'Chateau Changyu Castel' },
                    { time: '12:30', title: '펑라이각 & 해변 점심', type: 'landmark', location: 'Penglai Pavilion' },
                    { time: '16:30', title: '펑라이 공항 이동', type: 'plane', location: 'Yantai Penglai International Airport' }
                ]
            }
        ]
    },
    weihai: {
        id: 'weihai',
        city: 'Weihai',
        country: 'China',
        summary: '류궁다오 페리와 한국인거리, 성산두 일출과 환추이러우 전망을 묶은 웨이하이 템플릿입니다.',
        footer: 'Weihai is clean air, a quiet bay, and the first sunrise on the coast.',
        heroImage: 'assets/heroes/weihai.jpg',
        heroPosition: 'center center',
        accent: '#1B4EAA',
        accentRgb: '27, 78, 170',
        ink: '#083344',
        inkRgb: '8, 51, 68',
        overlayTop: 'rgba(8, 51, 68, 0.42)',
        overlayBottom: 'rgba(12, 24, 32, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 37.5130, longitude: 122.1204 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 12,
        phraseLabel: '中文',
        phrases: [
            { text: '去刘公岛的船票', pron: '[취 류궁다오 더 촨퍄오]', meaning: '류궁다오 가는 배표 주세요' },
            { text: '韩国街在哪？', pron: '[한궈제 짜이 나]', meaning: '한국인 거리는 어디예요?' },
            { text: '我是韩国人', pron: '[워 스 한궈런]', meaning: '저는 한국인이에요' },
            { text: '空气真好', pron: '[쿵치 전 하오]', meaning: '공기가 정말 좋네요' },
            { text: '几点日出？', pron: '[지 뎬 르추]', meaning: '일출은 몇 시예요?' },
            { text: '帮我叫车', pron: '[방 워 자오 처]', meaning: '차 좀 불러주세요' }
        ],
        itineraryTemplate: [
            {
                title: '류궁다오 & 환추이러우',
                activities: [
                    { time: '09:00', title: '류궁다오 페리 & 섬 산책', type: 'ship', location: 'Liugong Island' },
                    { time: '12:30', title: '섬 안 해산물 점심', type: 'utensils-crossed', location: 'Liugong Island' },
                    { time: '17:30', title: '환추이러우 전망 & 야경', type: 'tower-control', location: 'Huancuilou Park' }
                ]
            },
            {
                title: '해변 산책로 & 한국인거리',
                activities: [
                    { time: '10:00', title: '웨이하이 공원 해변 산책', type: 'map', location: 'Weihai Park' },
                    { time: '12:30', title: '한러팡 한국인거리 점심', type: 'utensils-crossed', location: 'Hanlefang Weihai' },
                    { time: '18:00', title: '행복문 야경', type: 'moon-star', location: 'Happiness Gate Weihai' }
                ]
            },
            {
                title: '성산두 & 이동',
                activities: [
                    { time: '08:30', title: '성산두 천애 해각', type: 'sun', location: 'Chengshantou Scenic Area' },
                    { time: '12:30', title: '시샤커우 어촌 해산물 점심', type: 'utensils-crossed', location: 'Xixiakou Scenic Area' },
                    { time: '16:30', title: '다수이보 공항 이동', type: 'plane', location: 'Weihai Dashuibo Airport' }
                ]
            }
        ]
    },
    wuhan: {
        id: 'wuhan',
        city: 'Wuhan',
        country: 'China',
        summary: '황학루와 창장대교, 둥후 녹도와 후베이성박물관, 호부항 먹거리를 잇는 우한 템플릿입니다.',
        footer: 'Wuhan starts with hot dry noodles and ends with the river lights.',
        heroImage: 'assets/heroes/wuhan.jpg',
        heroPosition: 'center center',
        accent: '#E08A1E',
        accentRgb: '224, 138, 30',
        ink: '#451A03',
        inkRgb: '69, 26, 3',
        overlayTop: 'rgba(69, 26, 3, 0.44)',
        overlayBottom: 'rgba(26, 18, 12, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 30.5928, longitude: 114.3055 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 13,
        phraseLabel: '中文',
        phrases: [
            { text: '一碗热干面', pron: '[이 완 러간몐]', meaning: '러간몐 한 그릇 주세요' },
            { text: '过早了吗？', pron: '[궈자오 러 마]', meaning: '아침 드셨어요? (우한식 인사)' },
            { text: '黄鹤楼几点开门？', pron: '[황허러우 지 뎬 카이먼]', meaning: '황학루는 몇 시에 여나요?' },
            { text: '我想租自行车', pron: '[워 샹 쭈 쯔싱처]', meaning: '자전거 빌리고 싶어요' },
            { text: '鸭脖辣不辣？', pron: '[야보 라 부 라]', meaning: '오리목 매운가요?' },
            { text: '樱花开了吗？', pron: '[잉화 카이 러 마]', meaning: '벚꽃 폈나요?' }
        ],
        itineraryTemplate: [
            {
                title: '황학루 & 창장대교',
                activities: [
                    { time: '09:30', title: '황학루 전망', type: 'landmark', location: 'Yellow Crane Tower' },
                    { time: '12:30', title: '호부항 러간몐 점심', type: 'utensils-crossed', location: 'Hubu Alley' },
                    { time: '18:30', title: '창장대교 강변 야경', type: 'bridge', location: 'Wuhan Yangtze River Bridge' }
                ]
            },
            {
                title: '둥후 & 박물관',
                activities: [
                    { time: '09:30', title: '후베이성박물관 증후을 편종', type: 'library', location: 'Hubei Provincial Museum' },
                    { time: '12:30', title: '추허한제 점심 & 쇼핑', type: 'utensils-crossed', location: 'Chu River Han Street' },
                    { time: '16:00', title: '둥후 녹도 자전거 & 일몰', type: 'trees', location: 'East Lake Greenway' }
                ]
            },
            {
                title: '한커우 조계지',
                activities: [
                    { time: '10:00', title: '장한루 보행가 옛 조계지', type: 'map', location: 'Jianghan Road Pedestrian Street' },
                    { time: '12:30', title: '리황피루 카페 거리 브런치', type: 'coffee', location: 'Lihuangpi Road' },
                    { time: '19:00', title: '한커우 장탄 강변 야경', type: 'moon-star', location: 'Hankou Jiangtan Park' }
                ]
            },
            {
                title: '한양 & 이동',
                activities: [
                    { time: '09:30', title: '귀원선사 참배', type: 'landmark', location: 'Guiyuan Temple' },
                    { time: '12:30', title: '칭촨거 산책 & 점심', type: 'camera', location: 'Qingchuan Pavilion' },
                    { time: '16:30', title: '톈허 공항 이동', type: 'plane', location: 'Wuhan Tianhe International Airport' }
                ]
            }
        ]
    }
};
module.exports = NEW_CITIES_CN_B;
