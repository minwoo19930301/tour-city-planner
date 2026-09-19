// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_JP_KYUSHU = {
    kagoshima: {
        id: 'kagoshima',
        city: 'Kagoshima',
        country: 'Japan',
        summary: '사쿠라지마 화산 연기와 센간엔 정원, 이부스키 모래찜질과 텐몬칸 흑돼지까지 남규슈의 뜨거운 기운을 담은 템플릿입니다.',
        footer: 'Kagoshima lives under a smoking volcano and sleeps in warm sand.',
        heroImage: 'assets/heroes/kagoshima.jpg',
        heroPosition: 'center center',
        accent: '#B91C1C',
        accentRgb: '185, 28, 28',
        ink: '#450A0A',
        inkRgb: '69, 10, 10',
        overlayTop: 'rgba(69, 10, 10, 0.38)',
        overlayBottom: 'rgba(28, 12, 12, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 31.5966, longitude: 130.5571 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 9,
        phraseLabel: '日本語',
        phrases: [
            { text: '桜島は今日見えますか？', pron: '사쿠라지마와 쿄 미에마스카', meaning: '오늘 사쿠라지마가 보이나요?' },
            { text: '砂むし温泉を予約したいです', pron: '스나무시온센오 요야쿠시타이데스', meaning: '모래찜질 온천을 예약하고 싶어요' },
            { text: '黒豚のとんかつをください', pron: '쿠로부타노 톤카츠오 쿠다사이', meaning: '흑돼지 돈카츠 주세요' },
            { text: '芋焼酎をロックで', pron: '이모쇼츄오 롯쿠데', meaning: '고구마 소주를 온더록으로요' },
            { text: 'フェリー乗り場はどこですか？', pron: '페리 노리바와 도코데스카', meaning: '페리 선착장이 어디인가요?' },
            { text: 'しろくまをください', pron: '시로쿠마오 쿠다사이', meaning: '시로쿠마(가고시마 빙수) 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '텐몬칸 & 시로야마',
                activities: [
                    { time: '10:00', title: '시로야마 전망대 사쿠라지마 조망', type: 'binoculars', location: 'Shiroyama Observatory' },
                    { time: '13:00', title: '텐몬칸 흑돼지 돈카츠 점심', type: 'utensils-crossed', location: 'Tenmonkan' },
                    { time: '18:30', title: '아뮤플라자 관람차 야경', type: 'moon-star', location: 'Amu Plaza Kagoshima' }
                ]
            },
            {
                title: '사쿠라지마',
                activities: [
                    { time: '09:30', title: '사쿠라지마 페리 승선', type: 'ship', location: 'Sakurajima Ferry Terminal' },
                    { time: '11:00', title: '유노히라 전망소 분화구 조망', type: 'camera', location: 'Yunohira Observatory' },
                    { time: '15:00', title: '용암 나기사 공원 족욕', type: 'trees', location: 'Sakurajima Yogan Nagisa Park' }
                ]
            },
            {
                title: '이부스키',
                activities: [
                    { time: '09:00', title: '이부스키노 타마테바코 열차', type: 'train-front', location: 'Ibusuki Station' },
                    { time: '12:00', title: '사라쿠 모래찜질 온천', type: 'sparkles', location: 'Sunamushi Kaikan Saraku' },
                    { time: '15:30', title: '이케다 호수 & 가이몬다케 조망', type: 'sun', location: 'Lake Ikeda' }
                ]
            },
            {
                title: '센간엔 & 이동',
                activities: [
                    { time: '09:30', title: '센간엔 정원 산책', type: 'landmark', location: 'Sengan-en' },
                    { time: '12:30', title: '텐몬칸 무자키 시로쿠마 빙수', type: 'coffee', location: 'Tenmonkan Mujaki' },
                    { time: '15:30', title: '가고시마 공항 이동', type: 'plane', location: 'Kagoshima Airport' }
                ]
            }
        ]
    },
    kumamoto: {
        id: 'kumamoto',
        city: 'Kumamoto',
        country: 'Japan',
        summary: '구마모토성 검은 천수각에서 스이젠지 정원, 아소 분화구와 구로카와 노천탕까지 불의 나라를 가로지르는 템플릿입니다.',
        footer: 'Kumamoto is a black castle, a green caldera, and steam in the valley.',
        heroImage: 'assets/heroes/kumamoto.jpg',
        heroPosition: 'center center',
        accent: '#05968F',
        accentRgb: '5, 150, 143',
        ink: '#022C22',
        inkRgb: '2, 44, 34',
        overlayTop: 'rgba(2, 44, 34, 0.38)',
        overlayBottom: 'rgba(6, 22, 18, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 32.8032, longitude: 130.7079 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 10,
        phraseLabel: '日本語',
        phrases: [
            { text: '天守閣まで行けますか？', pron: '텐슈카쿠마데 이케마스카', meaning: '천수각까지 올라갈 수 있나요?' },
            { text: '馬刺しをください', pron: '바사시오 쿠다사이', meaning: '말고기 회 주세요' },
            { text: '入湯手形はどこで買えますか？', pron: '뉴토테가타와 도코데 카에마스카', meaning: '온천 순회권(입탕수형)은 어디서 살 수 있나요?' },
            { text: '阿蘇行きのバスは何番ですか？', pron: '아소유키노 바스와 난반데스카', meaning: '아소행 버스는 몇 번인가요?' },
            { text: 'くまモングッズはありますか？', pron: '쿠마몬 굿즈와 아리마스카', meaning: '구마몬 굿즈 있나요?' },
            { text: '火口は今日見学できますか？', pron: '카코와 쿄 켄가쿠 데키마스카', meaning: '오늘 분화구 견학할 수 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '구마모토성 & 시내',
                activities: [
                    { time: '10:00', title: '구마모토성 천수각', type: 'landmark', location: 'Kumamoto Castle' },
                    { time: '12:30', title: '사쿠라노바바 조사이엔 점심', type: 'utensils-crossed', location: 'Sakuranobaba Josaien' },
                    { time: '15:30', title: '구마모토 현립미술관', type: 'building-2', location: 'Kumamoto Prefectural Museum of Art' }
                ]
            },
            {
                title: '스이젠지 & 상점가',
                activities: [
                    { time: '09:30', title: '스이젠지 조주엔 정원', type: 'trees', location: 'Suizenji Jojuen Garden' },
                    { time: '13:00', title: '구마몬 스퀘어', type: 'gift', location: 'Kumamon Square' },
                    { time: '18:00', title: '시모토리 아케이드 말고기 회 저녁', type: 'shopping-bag', location: 'Shimotori Arcade' }
                ]
            },
            {
                title: '아소 & 구로카와 온천',
                activities: [
                    { time: '08:30', title: '아소역으로 이동', type: 'train-front', location: 'Aso Station' },
                    { time: '10:30', title: '나카다케 분화구', type: 'camera', location: 'Mount Aso Nakadake Crater' },
                    { time: '16:30', title: '구로카와 온천 노천탕 순회', type: 'sparkles', location: 'Kurokawa Onsen' }
                ]
            },
            {
                title: '아소 북부 & 이동',
                activities: [
                    { time: '09:00', title: '다이칸보 전망대 칼데라 조망', type: 'binoculars', location: 'Daikanbo' },
                    { time: '11:30', title: '구사센리 초원 산책', type: 'sun', location: 'Kusasenri' },
                    { time: '16:00', title: '구마모토 공항 이동', type: 'plane', location: 'Kumamoto Airport' }
                ]
            }
        ]
    },
    nagasaki: {
        id: 'nagasaki',
        city: 'Nagasaki',
        country: 'Japan',
        summary: '글로버 가든과 데지마의 이국 정취, 짬뽕 골목과 군함도, 이나사야마 천만 불 야경을 엮은 항구 도시 템플릿입니다.',
        footer: 'Nagasaki layers Dutch, Chinese, and Japanese stories over one harbor.',
        heroImage: 'assets/heroes/nagasaki.jpg',
        heroPosition: 'center center',
        accent: '#AB3AED',
        accentRgb: '171, 58, 237',
        ink: '#2E1065',
        inkRgb: '46, 16, 101',
        overlayTop: 'rgba(46, 16, 101, 0.38)',
        overlayBottom: 'rgba(20, 12, 40, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 32.7503, longitude: 129.8779 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 11,
        phraseLabel: '日本語',
        phrases: [
            { text: 'ちゃんぽんを一つください', pron: '챰폰오 히토츠 쿠다사이', meaning: '짬뽕 하나 주세요' },
            { text: '角煮まんじゅうを一つください', pron: '카쿠니만쥬오 히토츠 쿠다사이', meaning: '카쿠니만쥬(돼지고기 찐빵) 하나 주세요' },
            { text: 'ロープウェイは動いていますか？', pron: '로프웨이와 우고이테 이마스카', meaning: '로프웨이 운행하고 있나요?' },
            { text: '軍艦島ツアーは何時発ですか？', pron: '군칸지마 츠아와 난지 하츠데스카', meaning: '군함도 투어는 몇 시 출발인가요?' },
            { text: 'カステラをお土産にしたいです', pron: '카스테라오 오미야게니 시타이데스', meaning: '카스텔라를 선물용으로 사고 싶어요' },
            { text: '夜景はどこから見えますか？', pron: '야케이와 도코카라 미에마스카', meaning: '야경은 어디서 볼 수 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '미나미야마테 & 이나사야마',
                activities: [
                    { time: '10:00', title: '글로버 가든', type: 'landmark', location: 'Glover Garden' },
                    { time: '13:00', title: '데지마 네덜란드 상관', type: 'building-2', location: 'Dejima' },
                    { time: '18:30', title: '이나사야마 로프웨이 야경', type: 'moon-star', location: 'Mount Inasa' }
                ]
            },
            {
                title: '평화공원 & 신치 차이나타운',
                activities: [
                    { time: '10:00', title: '평화공원 & 원폭자료관', type: 'landmark', location: 'Nagasaki Peace Park' },
                    { time: '13:00', title: '신치 차이나타운 짬뽕', type: 'utensils-crossed', location: 'Nagasaki Shinchi Chinatown' },
                    { time: '16:00', title: '메가네바시 안경다리', type: 'bridge', location: 'Meganebashi Bridge' }
                ]
            },
            {
                title: '군함도 & 시안바시',
                activities: [
                    { time: '09:30', title: '군함도 상륙 크루즈', type: 'ship', location: 'Hashima Island' },
                    { time: '13:30', title: '군함도 디지털 뮤지엄', type: 'building', location: 'Gunkanjima Digital Museum' },
                    { time: '17:00', title: '후쿠사야 본점 카스텔라', type: 'gift', location: 'Fukusaya Main Store' }
                ]
            },
            {
                title: '하우스텐보스 & 이동',
                activities: [
                    { time: '09:30', title: '하우스텐보스 입장', type: 'ticket', location: 'Huis Ten Bosch' },
                    { time: '13:00', title: '돔토른 전망대 & 꽃 정원', type: 'tower-control', location: 'Domtoren' },
                    { time: '17:00', title: '나가사키 공항 이동', type: 'plane', location: 'Nagasaki Airport' }
                ]
            }
        ]
    },
    oita: {
        id: 'oita',
        city: 'Oita (Beppu)',
        country: 'Japan',
        summary: '벳푸 지옥순례의 증기와 유후인 긴린코 아침 안개, 다카사키야마 원숭이까지 온천 향으로 채운 4일 템플릿입니다.',
        footer: 'Oita is steam rising from every street corner in Beppu.',
        heroImage: 'assets/heroes/oita.jpg',
        heroPosition: 'center center',
        accent: '#0E7490',
        accentRgb: '14, 116, 144',
        ink: '#083344',
        inkRgb: '8, 51, 68',
        overlayTop: 'rgba(8, 51, 68, 0.38)',
        overlayBottom: 'rgba(6, 24, 32, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 33.2846, longitude: 131.4914 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 12,
        phraseLabel: '日本語',
        phrases: [
            { text: '日帰り入浴はできますか？', pron: '히가에리 뉴요쿠와 데키마스카', meaning: '당일 입욕이 가능한가요?' },
            { text: '地獄めぐりの共通券をください', pron: '지고쿠메구리노 쿄츠켄오 쿠다사이', meaning: '지옥순례 공통권 주세요' },
            { text: '家族風呂は空いていますか？', pron: '카조쿠부로와 아이테 이마스카', meaning: '가족탕 비어 있나요?' },
            { text: 'とり天をください', pron: '토리텐오 쿠다사이', meaning: '토리텐(오이타식 닭튀김) 주세요' },
            { text: '由布院行きのバス乗り場はどこですか？', pron: '유후인유키노 바스노리바와 도코데스카', meaning: '유후인행 버스 타는 곳이 어디인가요?' },
            { text: '足湯は無料ですか？', pron: '아시유와 무료데스카', meaning: '족욕은 무료인가요?' }
        ],
        itineraryTemplate: [
            {
                title: '벳푸 간나와 지옥순례',
                activities: [
                    { time: '10:00', title: '우미지고쿠 바다 지옥', type: 'sparkles', location: 'Umi Jigoku' },
                    { time: '12:30', title: '간나와 지옥찜 공방 점심', type: 'utensils-crossed', location: 'Jigokumushi Kobo Kannawa' },
                    { time: '15:00', title: '치노이케 지옥 & 다쓰마키 지옥', type: 'camera', location: 'Chinoike Jigoku' }
                ]
            },
            {
                title: '유후인',
                activities: [
                    { time: '10:00', title: '긴린코 호수 아침 산책', type: 'trees', location: 'Kinrin Lake' },
                    { time: '12:30', title: '유노쓰보 거리 먹거리 & 쇼핑', type: 'shopping-bag', location: 'Yunotsubo Street' },
                    { time: '15:00', title: '유후인 플로럴 빌리지 카페', type: 'coffee', location: 'Yufuin Floral Village' }
                ]
            },
            {
                title: '다카사키야마 & 오이타 시내',
                activities: [
                    { time: '10:00', title: '다카사키야마 야생 원숭이', type: 'binoculars', location: 'Takasakiyama Natural Zoological Garden' },
                    { time: '12:30', title: '우미타마고 수족관', type: 'ship', location: 'Oita Marine Palace Aquarium Umitamago' },
                    { time: '18:00', title: '오이타역 토리텐 저녁', type: 'utensils-crossed', location: 'Oita Station' }
                ]
            },
            {
                title: '벳푸 온천 & 이동',
                activities: [
                    { time: '08:30', title: '다케가와라 온천 모래찜질', type: 'sparkles', location: 'Takegawara Onsen' },
                    { time: '11:30', title: '벳푸 타워 & 온천 거리 산책', type: 'tower-control', location: 'Beppu Tower' },
                    { time: '15:00', title: '오이타 공항 이동', type: 'plane', location: 'Oita Airport' }
                ]
            }
        ]
    },
    miyazaki: {
        id: 'miyazaki',
        city: 'Miyazaki',
        country: 'Japan',
        summary: '아오시마 도깨비 빨래판과 니치난 해안 드라이브, 다카치호 협곡 보트와 치킨난반으로 남국 햇살을 담은 템플릿입니다.',
        footer: 'Miyazaki is palm trees, surf, and myths carved into the coast.',
        heroImage: 'assets/heroes/miyazaki.jpg',
        heroPosition: 'center center',
        accent: '#EA3B0C',
        accentRgb: '234, 59, 12',
        ink: '#431407',
        inkRgb: '67, 20, 7',
        overlayTop: 'rgba(67, 20, 7, 0.36)',
        overlayBottom: 'rgba(30, 14, 8, 0.86)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 31.9077, longitude: 131.4202 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 8,
        phraseLabel: '日本語',
        phrases: [
            { text: 'チキン南蛮をください', pron: '치킨난반오 쿠다사이', meaning: '치킨난반 주세요' },
            { text: 'マンゴーはありますか？', pron: '망고와 아리마스카', meaning: '망고 있나요?' },
            { text: '高千穂までどのくらいかかりますか？', pron: '타카치호마데 도노쿠라이 카카리마스카', meaning: '다카치호까지 얼마나 걸리나요?' },
            { text: 'ボートを借りたいです', pron: '보토오 카리타이데스', meaning: '보트를 빌리고 싶어요' },
            { text: '運玉を投げてみたいです', pron: '운타마오 나게테 미타이데스', meaning: '운타마(행운 구슬)를 던져보고 싶어요' },
            { text: '地鶏の炭火焼きをください', pron: '지도리노 스미비야키오 쿠다사이', meaning: '토종닭 숯불구이 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '아오시마 & 니치난 해안',
                activities: [
                    { time: '10:00', title: '아오시마 신사 & 도깨비 빨래판', type: 'sun', location: 'Aoshima Shrine' },
                    { time: '13:00', title: '선멧세 니치난 모아이', type: 'camera', location: 'Sun Messe Nichinan' },
                    { time: '15:30', title: '우도신궁 운타마 던지기', type: 'landmark', location: 'Udo Shrine' }
                ]
            },
            {
                title: '다카치호',
                activities: [
                    { time: '10:30', title: '다카치호 협곡 보트', type: 'ship', location: 'Takachiho Gorge' },
                    { time: '13:30', title: '다카치호 신사', type: 'landmark', location: 'Takachiho Shrine' },
                    { time: '16:00', title: '아마노이와토 신사 & 아마노야스카와라', type: 'sparkles', location: 'Amano Iwato Shrine' }
                ]
            },
            {
                title: '미야자키 시내 & 이동',
                activities: [
                    { time: '09:30', title: '헤이와다이 공원 하니와 정원', type: 'trees', location: 'Heiwadai Park' },
                    { time: '12:30', title: '오구라 본점 치킨난반 점심', type: 'utensils-crossed', location: 'Ogura Honten' },
                    { time: '15:30', title: '미야자키 공항 이동', type: 'plane', location: 'Miyazaki Airport' }
                ]
            }
        ]
    },
    kitakyushu: {
        id: 'kitakyushu',
        city: 'Kitakyushu',
        country: 'Japan',
        summary: '모지코 레트로 항구와 고쿠라성, 탄가시장 다이가쿠동, 가와치후지엔 등나무 터널을 잇는 공업 도시의 반전 매력 템플릿입니다.',
        footer: 'Kitakyushu pairs a brick-red retro port with a castle and a wisteria tunnel.',
        heroImage: 'assets/heroes/kitakyushu.jpg',
        heroPosition: 'center center',
        accent: '#A21CAF',
        accentRgb: '162, 28, 175',
        ink: '#4A044E',
        inkRgb: '74, 4, 78',
        overlayTop: 'rgba(74, 4, 78, 0.38)',
        overlayBottom: 'rgba(28, 10, 30, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 33.8834, longitude: 130.8752 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 7,
        phraseLabel: '日本語',
        phrases: [
            { text: '焼きカレーをください', pron: '야키카레오 쿠다사이', meaning: '야키카레(구운 카레) 주세요' },
            { text: '関門トンネルを歩いて渡れますか？', pron: '칸몬 톤네루오 아루이테 와타레마스카', meaning: '간몬 터널을 걸어서 건널 수 있나요?' },
            { text: '大学丼はどこで食べられますか？', pron: '다이가쿠동와 도코데 타베라레마스카', meaning: '다이가쿠동(탄가시장 덮밥)은 어디서 먹을 수 있나요?' },
            { text: 'ふぐ料理はありますか？', pron: '후구료리와 아리마스카', meaning: '복어 요리 있나요?' },
            { text: '藤は今が見頃ですか？', pron: '후지와 이마가 미고로데스카', meaning: '등나무꽃은 지금이 볼 때인가요?' },
            { text: '小倉城まで歩けますか？', pron: '코쿠라죠마데 아루케마스카', meaning: '고쿠라성까지 걸어갈 수 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '고쿠라',
                activities: [
                    { time: '10:00', title: '고쿠라성 천수각', type: 'landmark', location: 'Kokura Castle' },
                    { time: '12:30', title: '탄가시장 다이가쿠동', type: 'store', location: 'Tanga Market' },
                    { time: '17:30', title: '리버워크 기타큐슈 & 무라사키강 야경', type: 'moon-star', location: 'Riverwalk Kitakyushu' }
                ]
            },
            {
                title: '모지코 레트로',
                activities: [
                    { time: '10:00', title: '모지코역 레트로 거리 산책', type: 'train-front', location: 'Mojiko Station' },
                    { time: '12:30', title: '모지코 야키카레 점심', type: 'utensils-crossed', location: 'Mojiko Retro' },
                    { time: '15:00', title: '간몬 인도 터널로 시모노세키 왕복', type: 'map', location: 'Kanmon Pedestrian Tunnel' }
                ]
            },
            {
                title: '야하타 & 이동',
                activities: [
                    { time: '09:00', title: '가와치 후지엔 등나무 터널', type: 'trees', location: 'Kawachi Wisteria Garden' },
                    { time: '12:30', title: '사라쿠라산 케이블카 전망', type: 'binoculars', location: 'Mount Sarakura' },
                    { time: '16:00', title: '기타큐슈 공항 이동', type: 'plane', location: 'Kitakyushu Airport' }
                ]
            }
        ]
    },
    saga: {
        id: 'saga',
        city: 'Saga',
        country: 'Japan',
        summary: '유토쿠이나리의 주홍 회랑과 가라쓰 바다의 오징어 활어회, 우레시노 온천과 아리타 도자기 마을을 도는 소박한 템플릿입니다.',
        footer: 'Saga is quiet: vermilion shrines, squid boats, and porcelain kilns.',
        heroImage: 'assets/heroes/saga.jpg',
        heroPosition: 'center center',
        accent: '#1E2DAF',
        accentRgb: '30, 45, 175',
        ink: '#172554',
        inkRgb: '23, 37, 84',
        overlayTop: 'rgba(23, 37, 84, 0.38)',
        overlayBottom: 'rgba(10, 16, 36, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 33.2635, longitude: 130.3009 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 13,
        phraseLabel: '日本語',
        phrases: [
            { text: '嬉野茶をください', pron: '우레시노차오 쿠다사이', meaning: '우레시노 차 주세요' },
            { text: 'この器は電子レンジで使えますか？', pron: '코노 우츠와와 덴시렌지데 츠카에마스카', meaning: '이 그릇은 전자레인지에 써도 되나요?' },
            { text: '割れないように包んでください', pron: '와레나이요니 츠츤데 쿠다사이', meaning: '깨지지 않게 포장해 주세요' },
            { text: 'イカの活き造りをください', pron: '이카노 이키즈쿠리오 쿠다사이', meaning: '오징어 활어회 주세요' },
            { text: '佐賀牛はありますか？', pron: '사가규와 아리마스카', meaning: '사가규(사가 소고기) 있나요?' },
            { text: '奥の院まで何分ですか？', pron: '오쿠노인마데 난푼데스카', meaning: '오쿠노인(안쪽 신전)까지 몇 분 걸리나요?' }
        ],
        itineraryTemplate: [
            {
                title: '사가 시내 & 유토쿠이나리',
                activities: [
                    { time: '10:00', title: '사가성 혼마루 역사관', type: 'building-2', location: 'Saga Castle Honmaru History Museum' },
                    { time: '12:30', title: '사가역 사가규 점심', type: 'utensils-crossed', location: 'Saga Station' },
                    { time: '15:30', title: '유토쿠 이나리 신사 주홍 회랑', type: 'landmark', location: 'Yutoku Inari Shrine' }
                ]
            },
            {
                title: '가라쓰 & 요부코',
                activities: [
                    { time: '09:00', title: '요부코 아침시장 오징어 활어회', type: 'store', location: 'Yobuko Morning Market' },
                    { time: '12:30', title: '가라쓰성 천수각', type: 'landmark', location: 'Karatsu Castle' },
                    { time: '15:00', title: '니지노마쓰바라 소나무 숲 드라이브', type: 'trees', location: 'Niji no Matsubara' }
                ]
            },
            {
                title: '우레시노 & 아리타 & 이동',
                activities: [
                    { time: '09:00', title: '우레시노 온천 시볼트노유', type: 'sparkles', location: 'Siebold no Yu' },
                    { time: '12:00', title: '도잔 신사 도자기 도리이 & 아리타 거리', type: 'shopping-bag', location: 'Tozan Shrine' },
                    { time: '16:00', title: '사가 공항 이동', type: 'plane', location: 'Saga Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_JP_KYUSHU;
