// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_CHINA = {
    hangzhou: {
        id: 'hangzhou',
        city: 'Hangzhou',
        country: 'China',
        summary: '서호 호반과 차밭, 고찰과 옛 거리를 천천히 묶은 항저우 템플릿입니다.',
        footer: 'Hangzhou opens up when the lake, the tea hills, and the temple bells share one slow day.',
        heroImage: 'assets/heroes/hangzhou.jpg',
        heroPosition: 'center 38%',
        accent: '#14B8A6',
        accentRgb: '20, 184, 166',
        ink: '#042F2E',
        inkRgb: '4, 47, 46',
        overlayTop: 'rgba(4, 47, 46, 0.42)',
        overlayBottom: 'rgba(15, 23, 42, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 30.2741, longitude: 120.1551 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 9,
        phraseLabel: '中文',
        phrases: [
            { text: '请问怎么走？', pron: '[칭원 전머 저우]', meaning: '실례지만 어떻게 가나요?' },
            { text: '太美了', pron: '[타이 메이 러]', meaning: '정말 아름답네요' },
            { text: '一杯龙井茶', pron: '[이 베이 룽징 차]', meaning: '용정차 한 잔 주세요' },
            { text: '多少钱？', pron: '[둬사오 첸]', meaning: '얼마예요?' },
            { text: '可以拍照吗？', pron: '[커이 파이자오 마]', meaning: '사진 찍어도 될까요?' },
            { text: '我要这个', pron: '[워 야오 저거]', meaning: '이걸로 할게요' }
        ],
        itineraryTemplate: [
            {
                title: '서호 동안 산책',
                activities: [
                    { time: '09:30', title: '단교와 백제 산책', type: 'bridge', location: 'Broken Bridge, West Lake' },
                    { time: '12:30', title: '호반 점심', type: 'utensils-crossed', location: 'Lou Wai Lou Restaurant' },
                    { time: '17:30', title: '뇌봉탑 일몰', type: 'tower-control', location: 'Leifeng Pagoda' }
                ]
            },
            {
                title: '영은사 & 비래봉',
                activities: [
                    { time: '09:30', title: '영은사 참배', type: 'landmark', location: 'Lingyin Temple' },
                    { time: '12:00', title: '사찰 앞 소면 점심', type: 'utensils-crossed', location: 'Fayun Alley' },
                    { time: '15:00', title: '비래봉 석굴 탐방', type: 'binoculars', location: 'Feilai Feng' }
                ]
            },
            {
                title: '용정 차밭',
                activities: [
                    { time: '10:00', title: '용정촌 차밭 걷기', type: 'trees', location: 'Longjing Village' },
                    { time: '12:30', title: '농가 차요리 점심', type: 'utensils-crossed', location: 'Meijiawu Tea Village' },
                    { time: '15:30', title: '중국차엽박물관', type: 'library', location: 'China National Tea Museum' }
                ]
            },
            {
                title: '허팡제 옛 거리',
                activities: [
                    { time: '10:30', title: '허팡제 골목 구경', type: 'store', location: 'Hefang Street' },
                    { time: '13:00', title: '항저우 가정식 점심', type: 'utensils-crossed', location: 'Grandma\'s Home Hefang Street' },
                    { time: '18:30', title: '우산 야경 전망', type: 'moon-star', location: 'Wushan Tiancheng' }
                ]
            },
            {
                title: '시시습지 & 이동',
                activities: [
                    { time: '09:30', title: '시시습지 보트', type: 'ship', location: 'Xixi National Wetland Park' },
                    { time: '12:30', title: '습지 앞 브런치', type: 'coffee', location: 'Xixi Tiantang' },
                    { time: '16:00', title: '샤오산 공항 이동', type: 'plane', location: 'Hangzhou Xiaoshan International Airport' }
                ]
            }
        ]
    },
    xian: {
        id: 'xian',
        city: 'Xi\'an',
        country: 'China',
        summary: '병마용과 성벽, 회민가 먹거리로 고도의 시간을 되짚는 시안 템플릿입니다.',
        footer: 'Xi\'an lands when clay soldiers, old ramparts, and night-market smoke stack up in one trip.',
        heroImage: 'assets/heroes/xian.jpg',
        heroPosition: 'center 40%',
        accent: '#B46A09',
        accentRgb: '180, 106, 9',
        ink: '#431407',
        inkRgb: '67, 20, 7',
        overlayTop: 'rgba(67, 20, 7, 0.44)',
        overlayBottom: 'rgba(28, 18, 12, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 34.3416, longitude: 108.9398 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 10,
        phraseLabel: '中文',
        phrases: [
            { text: '不要太辣', pron: '[부야오 타이 라]', meaning: '너무 맵지 않게 해주세요' },
            { text: '来一碗', pron: '[라이 이 완]', meaning: '한 그릇 주세요' },
            { text: '门票在哪买？', pron: '[먼퍄오 짜이 날 마이]', meaning: '입장권은 어디서 사나요?' },
            { text: '几点关门？', pron: '[지 뎬 관먼]', meaning: '몇 시에 닫나요?' },
            { text: '请帮我一下', pron: '[칭 방 워 이샤]', meaning: '좀 도와주세요' },
            { text: '很好吃', pron: '[헌 하오츠]', meaning: '정말 맛있어요' }
        ],
        itineraryTemplate: [
            {
                title: '병마용 하루',
                activities: [
                    { time: '09:00', title: '병마용 1~3호갱', type: 'landmark', location: 'Terracotta Army Museum' },
                    { time: '13:00', title: '진시황릉 근처 점심', type: 'utensils-crossed', location: 'Lintong District' },
                    { time: '15:30', title: '화청지 온천 정원', type: 'sun', location: 'Huaqing Palace' }
                ]
            },
            {
                title: '성벽 & 종고루',
                activities: [
                    { time: '10:00', title: '고성벽 자전거 일주', type: 'map', location: 'Xi\'an City Wall' },
                    { time: '13:30', title: '종루 근처 점심', type: 'utensils-crossed', location: 'Bell Tower of Xi\'an' },
                    { time: '19:00', title: '고루 야경 산책', type: 'moon-star', location: 'Drum Tower of Xi\'an' }
                ]
            },
            {
                title: '회민가 먹거리',
                activities: [
                    { time: '10:30', title: '화각항 골목 탐방', type: 'store', location: 'Huajue Lane' },
                    { time: '12:30', title: '대청진사 관람', type: 'landmark', location: 'Great Mosque of Xi\'an' },
                    { time: '18:00', title: '회민가 야시장', type: 'sparkles', location: 'Muslim Quarter Xi\'an' }
                ]
            },
            {
                title: '대안탑 & 박물관',
                activities: [
                    { time: '09:30', title: '섬서역사박물관', type: 'library', location: 'Shaanxi History Museum' },
                    { time: '13:00', title: '대당불야성 점심', type: 'utensils-crossed', location: 'Great Tang All Day Mall' },
                    { time: '19:30', title: '대안탑 분수쇼', type: 'sparkles', location: 'Giant Wild Goose Pagoda' }
                ]
            },
            {
                title: '마지막 거리 & 이동',
                activities: [
                    { time: '10:00', title: '서원문 문방구 거리', type: 'gift', location: 'Shuyuanmen Ancient Culture Street' },
                    { time: '12:30', title: '비림박물관', type: 'library', location: 'Beilin Museum' },
                    { time: '16:30', title: '셴양 공항 이동', type: 'plane', location: 'Xi\'an Xianyang International Airport' }
                ]
            }
        ]
    },
    chengdu: {
        id: 'chengdu',
        city: 'Chengdu',
        country: 'China',
        summary: '판다와 찻집, 사당과 옛 골목을 느긋하게 이어 붙인 청두 템플릿입니다.',
        footer: 'Chengdu works at teahouse speed: pandas early, hotpot late, everything else in between.',
        heroImage: 'assets/heroes/chengdu.jpg',
        heroPosition: 'center 42%',
        accent: '#4D7C0F',
        accentRgb: '77, 124, 15',
        ink: '#1A2E05',
        inkRgb: '26, 46, 5',
        overlayTop: 'rgba(26, 46, 5, 0.42)',
        overlayBottom: 'rgba(17, 24, 39, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 30.5728, longitude: 104.0668 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 11,
        phraseLabel: '中文',
        phrases: [
            { text: '微辣就好', pron: '[웨이라 지우 하오]', meaning: '약간만 맵게 해주세요' },
            { text: '熊猫在哪里？', pron: '[슝마오 짜이 날리]', meaning: '판다는 어디 있나요?' },
            { text: '再来一杯茶', pron: '[짜이 라이 이 베이 차]', meaning: '차 한 잔 더 주세요' },
            { text: '慢一点', pron: '[만 이뎬]', meaning: '조금 천천히요' },
            { text: '打包带走', pron: '[다바오 다이 저우]', meaning: '포장해 주세요' },
            { text: '这个辣吗？', pron: '[저거 라 마]', meaning: '이거 매운가요?' }
        ],
        itineraryTemplate: [
            {
                title: '판다 기지 아침',
                activities: [
                    { time: '08:00', title: '자이언트 판다 번식기지', type: 'trees', location: 'Chengdu Research Base of Giant Panda Breeding' },
                    { time: '12:30', title: '기지 근처 촨차이 점심', type: 'utensils-crossed', location: 'Xiongmao Avenue' },
                    { time: '15:30', title: '원수원 사찰 찻집', type: 'landmark', location: 'Wenshu Monastery' }
                ]
            },
            {
                title: '우허우사당 & 진리',
                activities: [
                    { time: '10:00', title: '우허우사당 관람', type: 'landmark', location: 'Wuhou Shrine' },
                    { time: '12:30', title: '진리거리 먹거리 점심', type: 'utensils-crossed', location: 'Jinli Ancient Street' },
                    { time: '19:00', title: '진리 홍등 야경', type: 'moon-star', location: 'Jinli Ancient Street' }
                ]
            },
            {
                title: '관자이샹쯔 골목',
                activities: [
                    { time: '10:30', title: '콴자이 골목 산책', type: 'store', location: 'Kuanzhai Alley' },
                    { time: '13:00', title: '골목 안 촨촨 점심', type: 'utensils-crossed', location: 'Kuanzhai Alley' },
                    { time: '16:00', title: '인민공원 찻집', type: 'coffee', location: 'Heming Teahouse, People\'s Park' }
                ]
            },
            {
                title: '두보초당 & 강변',
                activities: [
                    { time: '10:00', title: '두보초당 정원', type: 'library', location: 'Du Fu Thatched Cottage' },
                    { time: '13:00', title: '칭양궁 근처 점심', type: 'utensils-crossed', location: 'Qingyang Palace' },
                    { time: '18:30', title: '주청리 야경 쇼핑', type: 'shopping-bag', location: 'Jiuyanqiao' }
                ]
            },
            {
                title: '마지막 훠궈 & 이동',
                activities: [
                    { time: '10:30', title: '춘시루 쇼핑', type: 'shopping-cart', location: 'Chunxi Road' },
                    { time: '13:00', title: '청두 훠궈 점심', type: 'utensils-crossed', location: 'Shudaxia Hotpot Chunxi Road' },
                    { time: '17:00', title: '톈푸 공항 이동', type: 'plane', location: 'Chengdu Tianfu International Airport' }
                ]
            }
        ]
    },
    guangzhou: {
        id: 'guangzhou',
        city: 'Guangzhou',
        country: 'China',
        summary: '딤섬과 강변 야경, 사면섬 산책을 묶은 광저우 템플릿입니다.',
        footer: 'Guangzhou is a food city first: dim sum by day, river lights by night.',
        heroImage: 'assets/heroes/guangzhou.jpg',
        heroPosition: 'center 35%',
        accent: '#DB2777',
        accentRgb: '219, 39, 119',
        ink: '#500724',
        inkRgb: '80, 7, 36',
        overlayTop: 'rgba(80, 7, 36, 0.44)',
        overlayBottom: 'rgba(24, 14, 26, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 23.1291, longitude: 113.2644 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 12,
        phraseLabel: '中文',
        phrases: [
            { text: '喝早茶', pron: '[허 자오차]', meaning: '아침 딤섬 먹으러 가요' },
            { text: '再点一笼', pron: '[짜이 뎬 이 룽]', meaning: '한 판 더 주문할게요' },
            { text: '有推荐吗？', pron: '[여우 퉈이젠 마]', meaning: '추천 메뉴 있나요?' },
            { text: '不要香菜', pron: '[부야오 샹차이]', meaning: '고수는 빼주세요' },
            { text: '地铁站怎么走？', pron: '[디톄잔 전머 저우]', meaning: '지하철역은 어떻게 가나요?' },
            { text: '买单', pron: '[마이단]', meaning: '계산할게요' }
        ],
        itineraryTemplate: [
            {
                title: '사면섬 & 상하구',
                activities: [
                    { time: '09:30', title: '사면섬 옛 조계지 산책', type: 'map', location: 'Shamian Island' },
                    { time: '12:00', title: '아침 딤섬 점심', type: 'utensils-crossed', location: 'Guangzhou Restaurant Wenchang Road' },
                    { time: '16:00', title: '상하구 보행가 쇼핑', type: 'shopping-bag', location: 'Shangxiajiu Pedestrian Street' }
                ]
            },
            {
                title: '천허 도심 & 타워',
                activities: [
                    { time: '10:30', title: '천허 도심 쇼핑', type: 'shopping-cart', location: 'Tianhe District' },
                    { time: '13:00', title: '태고회 점심', type: 'utensils-crossed', location: 'Taikoo Hui Guangzhou' },
                    { time: '19:00', title: '광저우 타워 전망', type: 'tower-control', location: 'Canton Tower' }
                ]
            },
            {
                title: '주강 & 오래된 성',
                activities: [
                    { time: '10:00', title: '진씨서원 관람', type: 'landmark', location: 'Chen Clan Ancestral Hall' },
                    { time: '13:00', title: '판시주가 딤섬 점심', type: 'utensils-crossed', location: 'Panxi Restaurant' },
                    { time: '19:30', title: '주강 야경 크루즈', type: 'ship', location: 'Pearl River Night Cruise' }
                ]
            },
            {
                title: '백운산 자연',
                activities: [
                    { time: '09:30', title: '백운산 등반', type: 'trees', location: 'Baiyun Mountain' },
                    { time: '13:00', title: '산 아래 광둥식 점심', type: 'utensils-crossed', location: 'Baiyun Mountain Scenic Area' },
                    { time: '16:30', title: '월수공원 오양상', type: 'landmark', location: 'Yuexiu Park' }
                ]
            },
            {
                title: '마지막 차 & 이동',
                activities: [
                    { time: '10:00', title: '천자만당 조차', type: 'coffee', location: 'Tao Tao Ju Restaurant' },
                    { time: '13:00', title: '영남 기념품 쇼핑', type: 'gift', location: 'Beijing Road Pedestrian Street' },
                    { time: '17:00', title: '바이윈 공항 이동', type: 'plane', location: 'Guangzhou Baiyun International Airport' }
                ]
            }
        ]
    },
    qingdao: {
        id: 'qingdao',
        city: 'Qingdao',
        country: 'China',
        summary: '바다와 독일식 거리, 맥주와 해산물을 묶은 칭다오 템플릿입니다.',
        footer: 'Qingdao is red roofs, blue water, and a cold glass of beer at the end of the day.',
        heroImage: 'assets/heroes/qingdao.jpg',
        heroPosition: 'center 45%',
        accent: '#2563EB',
        accentRgb: '37, 99, 235',
        ink: '#172554',
        inkRgb: '23, 37, 84',
        overlayTop: 'rgba(23, 37, 84, 0.42)',
        overlayBottom: 'rgba(15, 23, 42, 0.90)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 36.0671, longitude: 120.3826 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 13,
        phraseLabel: '中文',
        phrases: [
            { text: '一扎啤酒', pron: '[이 자 피주]', meaning: '생맥주 한 잔 주세요' },
            { text: '海鲜怎么卖？', pron: '[하이셴 전머 마이]', meaning: '해산물은 어떻게 파나요?' },
            { text: '去海边', pron: '[취 하이볜]', meaning: '바닷가로 가주세요' },
            { text: '今天天气真好', pron: '[진톈 톈치 전 하오]', meaning: '오늘 날씨 정말 좋네요' },
            { text: '有位子吗？', pron: '[여우 웨이쯔 마]', meaning: '자리 있나요?' },
            { text: '再见', pron: '[짜이젠]', meaning: '안녕히 가세요' }
        ],
        itineraryTemplate: [
            {
                title: '잔교 & 옛 시가',
                activities: [
                    { time: '09:30', title: '잔교 부두 산책', type: 'bridge', location: 'Zhanqiao Pier' },
                    { time: '12:30', title: '피차이위안 먹자골목', type: 'utensils-crossed', location: 'Pichaiyuan Food Street' },
                    { time: '16:00', title: '천주교당 거리', type: 'landmark', location: 'St. Michael\'s Cathedral Qingdao' }
                ]
            },
            {
                title: '8대관 & 해변',
                activities: [
                    { time: '10:00', title: '8대관 별장 거리', type: 'map', location: 'Badaguan Scenic Area' },
                    { time: '13:00', title: '해변 해산물 점심', type: 'utensils-crossed', location: 'Second Bathing Beach' },
                    { time: '17:30', title: '화석루 일몰', type: 'camera', location: 'Huashi Villa' }
                ]
            },
            {
                title: '맥주 박물관 & 시내',
                activities: [
                    { time: '10:30', title: '칭다오 맥주박물관', type: 'library', location: 'Tsingtao Beer Museum' },
                    { time: '13:00', title: '덩저우루 맥주거리 점심', type: 'utensils-crossed', location: 'Dengzhou Road Beer Street' },
                    { time: '19:00', title: '5.4광장 야경', type: 'moon-star', location: 'May Fourth Square' }
                ]
            },
            {
                title: '라오산 하루',
                activities: [
                    { time: '09:00', title: '라오산 남쪽 코스', type: 'trees', location: 'Laoshan Mountain' },
                    { time: '13:00', title: '타이칭궁 근처 점심', type: 'utensils-crossed', location: 'Taiqing Palace Laoshan' },
                    { time: '16:30', title: '해안 드라이브 전망', type: 'binoculars', location: 'Laoshan Scenic Area' }
                ]
            },
            {
                title: '마지막 해변 & 이동',
                activities: [
                    { time: '10:00', title: '올림픽 요트 선착장', type: 'ship', location: 'Qingdao Olympic Sailing Center' },
                    { time: '12:30', title: '해산물 마지막 점심', type: 'utensils-crossed', location: 'Yunxiao Road Food Street' },
                    { time: '16:30', title: '자오둥 공항 이동', type: 'plane', location: 'Qingdao Jiaodong International Airport' }
                ]
            }
        ]
    },
    suzhou: {
        id: 'suzhou',
        city: 'Suzhou',
        country: 'China',
        summary: '고전 정원과 수로 골목, 사찰과 옛 거리를 잇는 쑤저우 템플릿입니다.',
        footer: 'Suzhou reads like ink on paper: gardens, canals, and a temple bell at dusk.',
        heroImage: 'assets/heroes/suzhou.jpg',
        heroPosition: 'center 40%',
        accent: '#475B72',
        accentRgb: '71, 91, 114',
        ink: '#1E293B',
        inkRgb: '30, 41, 59',
        overlayTop: 'rgba(30, 41, 59, 0.40)',
        overlayBottom: 'rgba(15, 23, 42, 0.88)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 31.2989, longitude: 120.5853 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 14,
        phraseLabel: '中文',
        phrases: [
            { text: '园林几点开？', pron: '[위안린 지 뎬 카이]', meaning: '정원은 몇 시에 여나요?' },
            { text: '坐船好吗？', pron: '[쭤 촨 하오 마]', meaning: '배를 타는 게 좋을까요?' },
            { text: '这条路很安静', pron: '[저 톄오 루 헌 안징]', meaning: '이 길은 참 조용하네요' },
            { text: '请慢走', pron: '[칭 만 저우]', meaning: '조심히 가세요' },
            { text: '我想休息一下', pron: '[워 샹 슈시 이샤]', meaning: '잠깐 쉬고 싶어요' },
            { text: '有没有地图？', pron: '[여우 메이여우 디투]', meaning: '지도 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '졸정원 & 박물관',
                activities: [
                    { time: '09:30', title: '졸정원 정원 산책', type: 'trees', location: 'Humble Administrator\'s Garden' },
                    { time: '12:30', title: '정원 앞 쑤저우식 점심', type: 'utensils-crossed', location: 'Dongbei Street Suzhou' },
                    { time: '14:30', title: '쑤저우 박물관', type: 'library', location: 'Suzhou Museum' }
                ]
            },
            {
                title: '평강로 수로 골목',
                activities: [
                    { time: '10:00', title: '평강로 옛 거리 산책', type: 'map', location: 'Pingjiang Road' },
                    { time: '13:00', title: '골목 찻집 점심', type: 'coffee', location: 'Pingjiang Road' },
                    { time: '18:30', title: '수로 야간 유람선', type: 'ship', location: 'Suzhou Grand Canal' }
                ]
            },
            {
                title: '한산사 & 서원',
                activities: [
                    { time: '09:30', title: '한산사 종루', type: 'landmark', location: 'Hanshan Temple' },
                    { time: '12:30', title: '펑차오 근처 점심', type: 'utensils-crossed', location: 'Fengqiao Scenic Area' },
                    { time: '15:30', title: '유원 고전 정원', type: 'trees', location: 'Lingering Garden' }
                ]
            },
            {
                title: '산탕제 & 호구',
                activities: [
                    { time: '10:00', title: '호구탑 언덕', type: 'tower-control', location: 'Tiger Hill Suzhou' },
                    { time: '13:00', title: '산탕제 먹거리 점심', type: 'utensils-crossed', location: 'Shantang Street' },
                    { time: '19:00', title: '산탕제 홍등 야경', type: 'moon-star', location: 'Shantang Street' }
                ]
            },
            {
                title: '자수 & 이동',
                activities: [
                    { time: '10:00', title: '쑤저우 자수연구소', type: 'palette', location: 'Suzhou Embroidery Research Institute' },
                    { time: '12:30', title: '관첸제 기념품 쇼핑', type: 'gift', location: 'Guanqian Street' },
                    { time: '16:00', title: '쑤저우역 이동', type: 'train-front', location: 'Suzhou Railway Station' }
                ]
            }
        ]
    }
};
module.exports = NEW_CITIES_CHINA;
