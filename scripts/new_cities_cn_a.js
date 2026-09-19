// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_CN_A = {
    zhangjiajie: {
        id: 'zhangjiajie',
        city: 'Zhangjiajie',
        country: 'China',
        summary: '아바타 봉우리와 톈먼산 유리잔도, 대협곡 유리다리로 하늘 위를 걷는 장자제 템플릿입니다.',
        footer: 'Zhangjiajie hits hardest when the sandstone pillars float out of the morning mist.',
        heroImage: 'assets/heroes/zhangjiajie.jpg',
        heroPosition: 'center center',
        accent: '#059669',
        accentRgb: '5, 150, 105',
        ink: '#052E16',
        inkRgb: '5, 46, 22',
        overlayTop: 'rgba(5, 46, 22, 0.42)',
        overlayBottom: 'rgba(15, 23, 42, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 29.1170, longitude: 110.4790 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 10,
        phraseLabel: '中文',
        phrases: [
            { text: '缆车在哪里？', pron: '[란처 짜이 날리]', meaning: '케이블카는 어디 있나요?' },
            { text: '观光车几点发？', pron: '[관광처 지 뎬 파]', meaning: '셔틀버스는 몇 시에 출발해요?' },
            { text: '风景太壮观了', pron: '[펑징 타이 좡관 러]', meaning: '경치가 정말 웅장하네요' },
            { text: '我有点怕高', pron: '[워 여우뎬 파 가오]', meaning: '저는 높은 곳이 좀 무서워요' },
            { text: '帮我拍一张', pron: '[방 워 파이 이 장]', meaning: '사진 한 장 찍어 주세요' },
            { text: '有点累了', pron: '[여우뎬 레이 러]', meaning: '조금 피곤해요' }
        ],
        itineraryTemplate: [
            {
                title: '우링위안 · 위안자제 & 톈쯔산',
                activities: [
                    { time: '08:30', title: '바이룽 엘리베이터 탑승', type: 'tower-control', location: 'Bailong Elevator' },
                    { time: '10:00', title: '위안자제 할렐루야산 전망', type: 'binoculars', location: 'Avatar Hallelujah Mountain' },
                    { time: '14:30', title: '톈쯔산 어필봉 & 케이블카 하산', type: 'camera', location: 'Tianzi Mountain' }
                ]
            },
            {
                title: '황스자이 & 진볜시',
                activities: [
                    { time: '09:00', title: '황스자이 케이블카 & 전망대', type: 'binoculars', location: 'Huangshizhai' },
                    { time: '13:00', title: '진볜시 계곡 트레킹', type: 'trees', location: 'Golden Whip Stream' },
                    { time: '19:00', title: '시부제 야시장', type: 'sparkles', location: 'Xibu Street' }
                ]
            },
            {
                title: '톈먼산',
                activities: [
                    { time: '08:30', title: '톈먼산 케이블카 탑승', type: 'tower-control', location: 'Tianmen Mountain Cableway' },
                    { time: '11:00', title: '유리잔도 & 귀곡잔도', type: 'camera', location: 'Tianmen Mountain Glass Skywalk' },
                    { time: '15:00', title: '톈먼동 999계단', type: 'landmark', location: 'Tianmen Cave' }
                ]
            },
            {
                title: '대협곡 유리다리 & 이동',
                activities: [
                    { time: '08:30', title: '장자제 대협곡 유리다리', type: 'bridge', location: 'Zhangjiajie Grand Canyon Glass Bridge' },
                    { time: '11:30', title: '대협곡 트레킹 & 점심', type: 'trees', location: 'Zhangjiajie Grand Canyon' },
                    { time: '16:30', title: '허화 공항 이동', type: 'plane', location: 'Zhangjiajie Hehua International Airport' }
                ]
            }
        ]
    },
    nanjing: {
        id: 'nanjing',
        city: 'Nanjing',
        country: 'China',
        summary: '중산릉과 명효릉, 부자묘 친화이허 야경으로 육조 고도의 시간을 되짚는 난징 템플릿입니다.',
        footer: 'Nanjing is best read slowly, from the mausoleum steps to the lantern-lit Qinhuai.',
        heroImage: 'assets/heroes/nanjing.jpg',
        heroPosition: 'center center',
        accent: '#7C3AED',
        accentRgb: '124, 58, 237',
        ink: '#2E1065',
        inkRgb: '46, 16, 101',
        overlayTop: 'rgba(46, 16, 101, 0.44)',
        overlayBottom: 'rgba(20, 16, 40, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 32.0603, longitude: 118.7969 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 8,
        phraseLabel: '中文',
        phrases: [
            { text: '这是明朝的吗？', pron: '[저 스 밍차오 더 마]', meaning: '이건 명나라 것인가요?' },
            { text: '一碗鸭血粉丝汤', pron: '[이 완 야셰 펀쓰탕]', meaning: '오리 선지 당면탕 한 그릇 주세요' },
            { text: '来一份盐水鸭', pron: '[라이 이 펀 옌수이야]', meaning: '염수압(소금물 오리) 하나 주세요' },
            { text: '坐游船要多久？', pron: '[쭤 여우촨 야오 둬주]', meaning: '유람선은 얼마나 걸려요?' },
            { text: '我想去夫子庙', pron: '[워 샹 취 푸쯔먀오]', meaning: '부자묘에 가고 싶어요' },
            { text: '请慢点说', pron: '[칭 만뎬 숴]', meaning: '천천히 말해 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '중산릉 & 명효릉',
                activities: [
                    { time: '09:00', title: '중산릉 참배', type: 'landmark', location: 'Sun Yat-sen Mausoleum' },
                    { time: '13:00', title: '명효릉 신도 산책', type: 'trees', location: 'Ming Xiaoling Mausoleum' },
                    { time: '17:00', title: '쉬안우호 노을 산책', type: 'sun', location: 'Xuanwu Lake' }
                ]
            },
            {
                title: '부자묘 & 친화이허',
                activities: [
                    { time: '10:00', title: '부자묘 & 강남공원', type: 'landmark', location: 'Nanjing Confucius Temple' },
                    { time: '12:30', title: '라오먼둥 옛 거리 점심', type: 'utensils-crossed', location: 'Laomendong' },
                    { time: '19:00', title: '친화이허 야경 유람선', type: 'ship', location: 'Qinhuai River' }
                ]
            },
            {
                title: '총통부 & 기념관',
                activities: [
                    { time: '09:30', title: '총통부 관람', type: 'building', location: 'Presidential Palace Nanjing' },
                    { time: '12:30', title: '1912 거리 점심', type: 'utensils-crossed', location: 'Nanjing 1912' },
                    { time: '15:00', title: '난징대학살기념관', type: 'library', location: 'Nanjing Massacre Memorial Hall' }
                ]
            },
            {
                title: '중화문 & 이동',
                activities: [
                    { time: '09:30', title: '중화문 옹성 성벽', type: 'landmark', location: 'Zhonghua Gate' },
                    { time: '12:30', title: '신제커우 쇼핑 & 점심', type: 'shopping-bag', location: 'Xinjiekou' },
                    { time: '16:30', title: '루커우 공항 이동', type: 'plane', location: 'Nanjing Lukou International Airport' }
                ]
            }
        ]
    },
    changsha: {
        id: 'changsha',
        city: 'Changsha',
        country: 'China',
        summary: '웨루산과 오렌지섬, 후난성박물관, 타이핑제와 원허유 야시장으로 매운 밤을 채우는 창사 템플릿입니다.',
        footer: 'Changsha runs on chili, milk tea, and a skyline that never quite goes to sleep.',
        heroImage: 'assets/heroes/changsha.jpg',
        heroPosition: 'center center',
        accent: '#EA580C',
        accentRgb: '234, 88, 12',
        ink: '#450A0A',
        inkRgb: '69, 10, 10',
        overlayTop: 'rgba(69, 10, 10, 0.42)',
        overlayBottom: 'rgba(28, 12, 12, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 28.2282, longitude: 112.9388 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 7,
        phraseLabel: '中文',
        phrases: [
            { text: '臭豆腐来一份', pron: '[처우더우푸 라이 이 펀]', meaning: '취두부 하나 주세요' },
            { text: '太辣了', pron: '[타이 라 러]', meaning: '너무 매워요' },
            { text: '奶茶少糖', pron: '[나이차 사오 탕]', meaning: '밀크티는 당 적게 해 주세요' },
            { text: '排队要多久？', pron: '[파이두이 야오 둬주]', meaning: '줄 서면 얼마나 걸려요?' },
            { text: '有小龙虾吗？', pron: '[여우 샤오룽샤 마]', meaning: '민물가재 요리 있나요?' },
            { text: '夜市几点开始？', pron: '[예스 지 뎬 카이스]', meaning: '야시장은 몇 시에 시작해요?' }
        ],
        itineraryTemplate: [
            {
                title: '웨루산 & 오렌지섬',
                activities: [
                    { time: '09:00', title: '웨루서원', type: 'landmark', location: 'Yuelu Academy' },
                    { time: '11:30', title: '웨루산 애만정 산책', type: 'trees', location: 'Yuelu Mountain' },
                    { time: '17:00', title: '오렌지섬 노을 & 청년 마오쩌둥상', type: 'sun', location: 'Orange Isle' }
                ]
            },
            {
                title: '후난성박물관 & 타이핑제',
                activities: [
                    { time: '09:30', title: '후난성박물관 마왕퇴 한묘', type: 'library', location: 'Hunan Museum' },
                    { time: '12:30', title: '타이핑제 취두부 & 점심', type: 'store', location: 'Taiping Old Street' },
                    { time: '19:00', title: '원허유 야시장 저녁', type: 'sparkles', location: 'Changsha Wenheyou' }
                ]
            },
            {
                title: '우이광장 & 이동',
                activities: [
                    { time: '10:00', title: '우이광장 & 차옌웨써 밀크티', type: 'coffee', location: 'Wuyi Square' },
                    { time: '12:30', title: '창사 IFS 전망 & 점심', type: 'building', location: 'Changsha IFS' },
                    { time: '16:30', title: '황화 공항 이동', type: 'plane', location: 'Changsha Huanghua International Airport' }
                ]
            }
        ]
    },
    kunming: {
        id: 'kunming',
        city: 'Kunming',
        country: 'China',
        summary: '석림과 뎬츠, 진마비지팡에 다리 고성 당일까지 얹은 사계절 봄 도시 쿤밍 템플릿입니다.',
        footer: 'Kunming stays spring all year; the stone forest and the lake do the rest.',
        heroImage: 'assets/heroes/kunming.jpg',
        heroPosition: 'center center',
        accent: '#65A30D',
        accentRgb: '101, 163, 13',
        ink: '#1A2E05',
        inkRgb: '26, 46, 5',
        overlayTop: 'rgba(26, 46, 5, 0.40)',
        overlayBottom: 'rgba(15, 23, 42, 0.88)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 25.0389, longitude: 102.7183 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 12,
        phraseLabel: '中文',
        phrases: [
            { text: '一碗过桥米线', pron: '[이 완 궈차오 미셴]', meaning: '과교미셴 한 그릇 주세요' },
            { text: '这花叫什么？', pron: '[저 화 자오 선머]', meaning: '이 꽃 이름이 뭐예요?' },
            { text: '天气真舒服', pron: '[톈치 전 수푸]', meaning: '날씨가 정말 쾌적하네요' },
            { text: '去石林的车在哪？', pron: '[취 스린 더 처 짜이 날]', meaning: '석림 가는 차는 어디예요?' },
            { text: '有菌子火锅吗？', pron: '[여우 쥔쯔 훠궈 마]', meaning: '버섯 훠궈 있나요?' },
            { text: '我先看看', pron: '[워 셴 칸칸]', meaning: '먼저 좀 둘러볼게요' }
        ],
        itineraryTemplate: [
            {
                title: '뎬츠 & 시산',
                activities: [
                    { time: '09:30', title: '윈난민족촌', type: 'landmark', location: 'Yunnan Nationalities Village' },
                    { time: '13:00', title: '하이겅 제방 갈매기 산책', type: 'sun', location: 'Haigeng Dam' },
                    { time: '16:00', title: '시산 용문 전망', type: 'binoculars', location: 'Dragon Gate, Western Hills' }
                ]
            },
            {
                title: '스린 석림 당일',
                activities: [
                    { time: '08:30', title: '스린 대석림 탐방', type: 'landmark', location: 'Stone Forest' },
                    { time: '13:00', title: '이족 마을 점심', type: 'utensils-crossed', location: 'Shilin Yi Autonomous County' },
                    { time: '15:00', title: '나이구 석림', type: 'binoculars', location: 'Naigu Stone Forest' }
                ]
            },
            {
                title: '옛 도심 & 진마비지팡',
                activities: [
                    { time: '09:30', title: '위안퉁사 참배', type: 'landmark', location: 'Yuantong Temple' },
                    { time: '12:30', title: '취안후 공원 & 과교미셴 점심', type: 'utensils-crossed', location: 'Green Lake Park' },
                    { time: '19:00', title: '진마비지팡 야경', type: 'moon-star', location: 'Jinma Biji Archways' }
                ]
            },
            {
                title: '다리 고성 당일',
                activities: [
                    { time: '10:00', title: '다리 고성 산책', type: 'landmark', location: 'Dali Ancient City' },
                    { time: '13:00', title: '얼하이 호숫가 점심', type: 'utensils-crossed', location: 'Erhai Lake' },
                    { time: '15:30', title: '충성사 삼탑', type: 'landmark', location: 'Three Pagodas of Chongsheng Temple' }
                ]
            },
            {
                title: '관두 고진 & 이동',
                activities: [
                    { time: '09:30', title: '윈난성박물관', type: 'library', location: 'Yunnan Provincial Museum' },
                    { time: '12:30', title: '관두 고진 점심', type: 'store', location: 'Guandu Ancient Town' },
                    { time: '16:30', title: '창수이 공항 이동', type: 'plane', location: 'Kunming Changshui International Airport' }
                ]
            }
        ]
    },
    xiamen: {
        id: 'xiamen',
        city: 'Xiamen',
        country: 'China',
        summary: '구랑위 섬, 샤먼대학과 난푸퉈사, 쩡춰안 바닷가 골목을 묶은 샤먼 템플릿입니다.',
        footer: 'Xiamen is a ferry ride, a piano echo, and a slow walk along the sea wall.',
        heroImage: 'assets/heroes/xiamen.jpg',
        heroPosition: 'center center',
        accent: '#E11D48',
        accentRgb: '225, 29, 72',
        ink: '#0C4A6E',
        inkRgb: '12, 74, 110',
        overlayTop: 'rgba(12, 74, 110, 0.42)',
        overlayBottom: 'rgba(15, 23, 42, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 24.4798, longitude: 118.0894 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 9,
        phraseLabel: '中文',
        phrases: [
            { text: '船票怎么买？', pron: '[촨퍄오 전머 마이]', meaning: '배표는 어떻게 사나요?' },
            { text: '一碗沙茶面', pron: '[이 완 사차몐]', meaning: '사차면 한 그릇 주세요' },
            { text: '海边可以游泳吗？', pron: '[하이볜 커이 여우융 마]', meaning: '바닷가에서 수영해도 되나요?' },
            { text: '一杯冰美式', pron: '[이 베이 빙 메이스]', meaning: '아이스 아메리카노 한 잔 주세요' },
            { text: '最后一班船几点？', pron: '[쭈이허우 이 반 촨 지 뎬]', meaning: '마지막 배는 몇 시예요?' },
            { text: '这个是什么？', pron: '[저거 스 선머]', meaning: '이건 뭐예요?' }
        ],
        itineraryTemplate: [
            {
                title: '구랑위',
                activities: [
                    { time: '09:00', title: '르광옌 전망대', type: 'binoculars', location: 'Sunlight Rock' },
                    { time: '12:30', title: '룽터우루 먹거리 점심', type: 'utensils-crossed', location: 'Longtou Road' },
                    { time: '15:30', title: '슈좡화원 & 피아노박물관', type: 'music', location: 'Shuzhuang Garden' }
                ]
            },
            {
                title: '샤먼대학 & 난푸퉈사',
                activities: [
                    { time: '09:00', title: '난푸퉈사 참배', type: 'landmark', location: 'Nanputuo Temple' },
                    { time: '11:30', title: '샤먼대학 캠퍼스 산책', type: 'building', location: 'Xiamen University' },
                    { time: '14:30', title: '사포웨이 카페 골목', type: 'coffee', location: 'Shapowei' }
                ]
            },
            {
                title: '환도로 & 쩡춰안',
                activities: [
                    { time: '09:30', title: '후리산 포대', type: 'landmark', location: 'Hulishan Fortress' },
                    { time: '13:00', title: '환도로 자전거 라이딩', type: 'map', location: 'Huandao Road' },
                    { time: '18:30', title: '쩡춰안 야시장 저녁', type: 'sparkles', location: 'Zengcuoan' }
                ]
            },
            {
                title: '중산루 & 이동',
                activities: [
                    { time: '10:00', title: '중산루 보행자 거리', type: 'shopping-bag', location: 'Zhongshan Road Pedestrian Street' },
                    { time: '12:30', title: '바스 시장 사차면 점심', type: 'utensils-crossed', location: 'Bashi Market' },
                    { time: '16:30', title: '가오치 공항 이동', type: 'plane', location: 'Xiamen Gaoqi International Airport' }
                ]
            }
        ]
    },
    harbin: {
        id: 'harbin',
        city: 'Harbin',
        country: 'China',
        summary: '성소피아 성당과 중앙대가, 빙설대세계와 태양도로 겨울 러시아 무드를 담은 하얼빈 템플릿입니다.',
        footer: 'Harbin glows coldest and brightest when the ice lanterns switch on.',
        heroImage: 'assets/heroes/harbin.jpg',
        heroPosition: 'center center',
        accent: '#7DD3FC',
        accentRgb: '125, 211, 252',
        ink: '#0F172A',
        inkRgb: '15, 23, 42',
        overlayTop: 'rgba(15, 23, 42, 0.46)',
        overlayBottom: 'rgba(2, 6, 23, 0.92)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 45.8038, longitude: 126.5350 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 14,
        phraseLabel: '中文',
        phrases: [
            { text: '太冷了', pron: '[타이 렁 러]', meaning: '너무 추워요' },
            { text: '有暖气吗？', pron: '[여우 놘치 마]', meaning: '난방 되나요?' },
            { text: '一份锅包肉', pron: '[이 펀 궈바오러우]', meaning: '궈바로우 하나 주세요' },
            { text: '冰灯几点亮？', pron: '[빙덩 지 뎬 량]', meaning: '빙등은 몇 시에 켜져요?' },
            { text: '路很滑，小心', pron: '[루 헌 화, 샤오신]', meaning: '길이 미끄러워요, 조심하세요' },
            { text: '有热水吗？', pron: '[여우 러수이 마]', meaning: '뜨거운 물 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '중앙대가 & 성소피아',
                activities: [
                    { time: '10:00', title: '성소피아 성당', type: 'landmark', location: 'Saint Sophia Cathedral' },
                    { time: '12:30', title: '중앙대가 러시아 요리 점심', type: 'utensils-crossed', location: 'Central Street' },
                    { time: '18:30', title: '방홍기념탑 & 쑹화강 야경', type: 'moon-star', location: 'Harbin Flood Control Memorial Tower' }
                ]
            },
            {
                title: '태양도 & 빙설대세계',
                activities: [
                    { time: '10:00', title: '태양도 설조박람회 (겨울)', type: 'camera', location: 'Sun Island Scenic Area' },
                    { time: '13:30', title: '하얼빈 극지관', type: 'binoculars', location: 'Harbin Polarland' },
                    { time: '17:00', title: '빙설대세계 야간 점등 (겨울)', type: 'sparkles', location: 'Harbin Ice and Snow World' }
                ]
            },
            {
                title: '호랑이림원 & 라오다오와이',
                activities: [
                    { time: '09:30', title: '둥베이 호랑이림원', type: 'binoculars', location: 'Siberian Tiger Park' },
                    { time: '13:00', title: '라오다오와이 궈바로우 점심', type: 'utensils-crossed', location: 'Laodaowai' },
                    { time: '18:30', title: '하얼빈 대극장 야경', type: 'building', location: 'Harbin Grand Theatre' }
                ]
            },
            {
                title: '기념관 & 이동',
                activities: [
                    { time: '09:30', title: '731부대 죄증진열관', type: 'library', location: 'Unit 731 Museum' },
                    { time: '12:30', title: '하얼빈역 안중근 의사 기념관', type: 'landmark', location: 'Harbin Railway Station' },
                    { time: '16:30', title: '타이핑 공항 이동', type: 'plane', location: 'Harbin Taiping International Airport' }
                ]
            }
        ]
    },
    yanji: {
        id: 'yanji',
        city: 'Yanji',
        country: 'China',
        summary: '한글 간판 거리와 옌볜 냉면, 백두산 천지 당일과 두만강까지 잇는 옌지 템플릿입니다.',
        footer: 'Yanji feels close to home, with Heaven Lake one long morning away.',
        heroImage: 'assets/heroes/yanji.jpg',
        heroPosition: 'center center',
        accent: '#0F766E',
        accentRgb: '15, 118, 110',
        ink: '#134E4A',
        inkRgb: '19, 78, 74',
        overlayTop: 'rgba(19, 78, 74, 0.42)',
        overlayBottom: 'rgba(15, 23, 42, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 42.9048, longitude: 129.5091 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 11,
        phraseLabel: '中文',
        phrases: [
            { text: '会说韩语吗？', pron: '[후이 숴 한위 마]', meaning: '한국어 할 줄 아세요?' },
            { text: '一碗冷面', pron: '[이 완 렁몐]', meaning: '냉면 한 그릇 주세요' },
            { text: '天池今天能看到吗？', pron: '[톈츠 진톈 넝 칸다오 마]', meaning: '오늘 천지 볼 수 있나요?' },
            { text: '打包一份米肠', pron: '[다바오 이 펀 미창]', meaning: '순대 하나 포장해 주세요' },
            { text: '几点回延吉？', pron: '[지 뎬 후이 옌지]', meaning: '옌지로 몇 시에 돌아가요?' },
            { text: '这里离边境远吗？', pron: '[저리 리 볜징 위안 마]', meaning: '여기서 국경까지 멀어요?' }
        ],
        itineraryTemplate: [
            {
                title: '옌지 한글 간판 거리',
                activities: [
                    { time: '10:00', title: '옌볜대학 한글 간판 벽', type: 'camera', location: 'Yanbian University' },
                    { time: '12:30', title: '서시장 옌볜 냉면 점심', type: 'utensils-crossed', location: 'Yanji Xishi Market' },
                    { time: '19:00', title: '옌지 야시장', type: 'sparkles', location: 'Yanji Night Market' }
                ]
            },
            {
                title: '백두산 천지 당일 (북파)',
                activities: [
                    { time: '06:30', title: '창바이산 북파 산문 이동', type: 'map', location: 'Changbai Mountain North Scenic Area' },
                    { time: '10:30', title: '천지 전망대', type: 'binoculars', location: 'Heaven Lake, Changbai Mountain' },
                    { time: '13:30', title: '창바이 폭포 & 온천 계란', type: 'trees', location: 'Changbai Waterfall' }
                ]
            },
            {
                title: '도문 두만강 & 이동',
                activities: [
                    { time: '09:00', title: '도문 두만강 국경 전망', type: 'map', location: 'Tumen River Scenic Area' },
                    { time: '12:30', title: '부르하퉁하 강변 산책 & 점심', type: 'sun', location: 'Buerhatong River' },
                    { time: '16:00', title: '차오양촨 공항 이동', type: 'plane', location: 'Yanji Chaoyangchuan International Airport' }
                ]
            }
        ]
    }
};
module.exports = NEW_CITIES_CN_A;
