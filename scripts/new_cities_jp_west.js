// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_JP_WEST = {
    hiroshima: {
        id: 'hiroshima',
        city: 'Hiroshima',
        country: 'Japan',
        summary: '평화기념공원의 묵직한 아침부터 미야지마 바다 위 도리이, 오코노미야키 철판과 시마나미 해도 라이딩까지 잇는 세토내해 템플릿입니다.',
        footer: 'Hiroshima holds silence and sea light in the same breath.',
        heroImage: 'assets/heroes/hiroshima.jpg',
        heroPosition: 'center center',
        accent: '#9F1226',
        accentRgb: '159, 18, 38',
        ink: '#3B1524',
        inkRgb: '59, 21, 36',
        overlayTop: 'rgba(59, 21, 36, 0.34)',
        overlayBottom: 'rgba(24, 12, 18, 0.86)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 34.3853, longitude: 132.4553 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 9,
        phraseLabel: '日本語',
        phrases: [
            { text: 'そば入りでお願いします', pron: '소바이리데 오네가이시마스', meaning: '(오코노미야키) 소바 넣어 주세요' },
            { text: '宮島行きのフェリーはどこですか？', pron: '미야지마유키노 페리와 도코데스카', meaning: '미야지마행 페리는 어디서 타나요?' },
            { text: '焼き牡蠣をください', pron: '야키가키오 쿠다사이', meaning: '구운 굴 주세요' },
            { text: 'もみじ饅頭を一箱ください', pron: '모미지만쥬오 히토하코 쿠다사이', meaning: '모미지만주 한 상자 주세요' },
            { text: '路面電車はどこで乗れますか？', pron: '로멘덴샤와 도코데 노레마스카', meaning: '노면전차는 어디서 탈 수 있나요?' },
            { text: 'ぶちうまい', pron: '부치 우마이', meaning: '엄청 맛있다 (히로시마 사투리)' }
        ],
        itineraryTemplate: [
            {
                title: '평화기념공원 & 핫초보리',
                activities: [
                    { time: '09:30', title: '원폭 돔', type: 'landmark', location: 'Atomic Bomb Dome' },
                    { time: '12:30', title: '평화기념자료관 & 평화의 등불', type: 'building-2', location: 'Hiroshima Peace Memorial Museum' },
                    { time: '18:30', title: '오코노미무라 철판 저녁', type: 'utensils-crossed', location: 'Okonomimura' }
                ]
            },
            {
                title: '미야지마',
                activities: [
                    { time: '09:30', title: '이쓰쿠시마 신사 & 바다 위 도리이', type: 'landmark', location: 'Itsukushima Shrine' },
                    { time: '12:30', title: '오모테산도 상점가 굴구이 · 모미지만주', type: 'store', location: 'Miyajima Omotesando Shopping Street' },
                    { time: '18:00', title: '미야지마구치 아나고메시 저녁', type: 'utensils-crossed', location: 'Anagomeshi Ueno' }
                ]
            },
            {
                title: '오노미치 & 시마나미 해도',
                activities: [
                    { time: '09:30', title: '센코지 공원 전망 & 고양이 골목', type: 'binoculars', location: 'Senkoji Park' },
                    { time: '12:30', title: '오노미치 U2 렌터사이클 & 점심', type: 'utensils-crossed', location: 'ONOMICHI U2' },
                    { time: '16:30', title: '시마나미 해도 라이딩 (무카이시마~인노시마)', type: 'bridge', location: 'Innoshima Bridge' }
                ]
            },
            {
                title: '히로시마성 & 이동',
                activities: [
                    { time: '10:00', title: '히로시마성 천수각', type: 'landmark', location: 'Hiroshima Castle' },
                    { time: '13:00', title: '슛케이엔 정원 산책', type: 'trees', location: 'Shukkeien Garden' },
                    { time: '16:30', title: '히로시마 공항 이동', type: 'plane', location: 'Hiroshima Airport' }
                ]
            }
        ]
    },
    kobe: {
        id: 'kobe',
        city: 'Kobe',
        country: 'Japan',
        summary: '기타노 이진칸 언덕과 하버랜드 야경, 난킨마치 간식과 아리마 온천, 히메지성 당일치기까지 담은 항구 도시 템플릿입니다.',
        footer: 'Kobe is a port that dresses well and eats better.',
        heroImage: 'assets/heroes/kobe.jpg',
        heroPosition: 'center center',
        accent: '#1F1E8A',
        accentRgb: '31, 30, 138',
        ink: '#0F1F3D',
        inkRgb: '15, 31, 61',
        overlayTop: 'rgba(15, 31, 61, 0.36)',
        overlayBottom: 'rgba(8, 14, 30, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 34.6901, longitude: 135.1955 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 8,
        phraseLabel: '日本語',
        phrases: [
            { text: '神戸牛のステーキをください', pron: '고베규노 스테키오 쿠다사이', meaning: '고베규 스테이크 주세요' },
            { text: '焼き加減はミディアムで', pron: '야키카겐와 미디아무데', meaning: '굽기는 미디엄으로 해 주세요' },
            { text: '有馬温泉行きのバス乗り場はどこですか？', pron: '아리마온센유키노 바스노리바와 도코데스카', meaning: '아리마온천행 버스 정류장은 어디인가요?' },
            { text: '夜景がきれいですね', pron: '야케이가 키레이데스네', meaning: '야경이 예쁘네요' },
            { text: '豚まんを二つください', pron: '부타만오 후타츠 쿠다사이', meaning: '고기만두 두 개 주세요 (난킨마치)' },
            { text: '姫路城まで何分かかりますか？', pron: '히메지죠마데 난푼 카카리마스카', meaning: '히메지성까지 몇 분 걸리나요?' }
        ],
        itineraryTemplate: [
            {
                title: '산노미야 & 기타노',
                activities: [
                    { time: '10:00', title: '기타노 이진칸 풍향계의 집', type: 'landmark', location: 'Weathercock House' },
                    { time: '12:30', title: '고베규 스테이크 점심', type: 'utensils-crossed', location: 'Steakland Kobe' },
                    { time: '18:30', title: '누노비키 허브원 로프웨이 야경', type: 'binoculars', location: 'Kobe Nunobiki Herb Gardens & Ropeway' }
                ]
            },
            {
                title: '하버랜드 & 난킨마치',
                activities: [
                    { time: '10:00', title: '메리켄파크 & 고베 포트타워', type: 'tower-control', location: 'Kobe Port Tower' },
                    { time: '12:30', title: '난킨마치 차이나타운 부타만 점심', type: 'store', location: 'Nankinmachi' },
                    { time: '18:30', title: '하버랜드 umie 모자이크 야경', type: 'moon-star', location: 'Kobe Harborland umie' }
                ]
            },
            {
                title: '아리마 온천 & 롯코산',
                activities: [
                    { time: '10:30', title: '킨노유 금탕 입욕', type: 'sparkles', location: 'Kin no Yu' },
                    { time: '13:00', title: '온천가 산책 & 탄산센베', type: 'store', location: 'Arima Onsen' },
                    { time: '17:30', title: '롯코 가든테라스 천만불 야경', type: 'moon-star', location: 'Rokko Garden Terrace' }
                ]
            },
            {
                title: '히메지 & 이동',
                activities: [
                    { time: '09:30', title: '히메지성 (백로성)', type: 'landmark', location: 'Himeji Castle' },
                    { time: '12:30', title: '고코엔 정원 & 점심', type: 'trees', location: 'Koko-en Garden' },
                    { time: '16:30', title: '고베 공항 이동', type: 'plane', location: 'Kobe Airport' }
                ]
            }
        ]
    },
    okayama: {
        id: 'okayama',
        city: 'Okayama',
        country: 'Japan',
        summary: '고라쿠엔과 까마귀성, 구라시키 미관지구 운하, 나오시마 예술섬 당일치기를 잇는 세토우치 예술 정원 템플릿입니다.',
        footer: 'Okayama pairs raked gardens with island art and white peaches.',
        heroImage: 'assets/heroes/okayama.jpg',
        heroPosition: 'center center',
        accent: '#EC4899',
        accentRgb: '236, 72, 153',
        ink: '#3B2430',
        inkRgb: '59, 36, 48',
        overlayTop: 'rgba(59, 36, 48, 0.30)',
        overlayBottom: 'rgba(26, 16, 22, 0.84)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 34.6551, longitude: 133.9195 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 10,
        phraseLabel: '日本語',
        phrases: [
            { text: '白桃はありますか？', pron: '하쿠토와 아리마스카', meaning: '백도(하얀 복숭아) 있나요?' },
            { text: 'きびだんごをください', pron: '키비단고오 쿠다사이', meaning: '기비단고(수수경단) 주세요' },
            { text: '倉敷行きは何番線ですか？', pron: '쿠라시키유키와 난반센데스카', meaning: '구라시키행은 몇 번 승강장인가요?' },
            { text: '直島まで船でどのくらいですか？', pron: '나오시마마데 후네데 도노쿠라이데스카', meaning: '나오시마까지 배로 얼마나 걸리나요?' },
            { text: '庭園の入口はどこですか？', pron: '테이엔노 이리구치와 도코데스카', meaning: '정원 입구는 어디인가요?' },
            { text: 'ぼっけぇきれいじゃなぁ', pron: '봇케 키레이쟈나', meaning: '엄청 예쁘네 (오카야마 사투리)' }
        ],
        itineraryTemplate: [
            {
                title: '고라쿠엔 & 오카야마성',
                activities: [
                    { time: '10:00', title: '고라쿠엔 산책', type: 'trees', location: 'Okayama Korakuen Garden' },
                    { time: '13:00', title: '오카야마성 (까마귀성) 천수각', type: 'landmark', location: 'Okayama Castle' },
                    { time: '18:00', title: '오모테초 상점가 저녁', type: 'shopping-bag', location: 'Omotecho Shopping Street' }
                ]
            },
            {
                title: '구라시키 미관지구',
                activities: [
                    { time: '10:00', title: '미관지구 운하 & 나룻배', type: 'camera', location: 'Kurashiki Bikan Historical Quarter' },
                    { time: '13:00', title: '오하라 미술관', type: 'palette', location: 'Ohara Museum of Art' },
                    { time: '18:00', title: '아이비 스퀘어 붉은 벽돌 저녁', type: 'building', location: 'Kurashiki Ivy Square' }
                ]
            },
            {
                title: '나오시마 예술섬',
                activities: [
                    { time: '09:30', title: '우노항에서 나오시마 페리', type: 'ship', location: 'Uno Port' },
                    { time: '12:30', title: '지추 미술관', type: 'palette', location: 'Chichu Art Museum' },
                    { time: '17:00', title: '베네세 하우스 & 노란 호박 노을', type: 'camera', location: 'Benesse House Museum' }
                ]
            },
            {
                title: '기비쓰 & 이동',
                activities: [
                    { time: '10:00', title: '기비쓰 신사 회랑', type: 'landmark', location: 'Kibitsu Shrine' },
                    { time: '13:00', title: '오카야마역 기비단고 · 백도 쇼핑', type: 'gift', location: 'Okayama Station' },
                    { time: '16:30', title: '오카야마 모모타로 공항 이동', type: 'plane', location: 'Okayama Momotaro Airport' }
                ]
            }
        ]
    },
    takamatsu: {
        id: 'takamatsu',
        city: 'Takamatsu',
        country: 'Japan',
        summary: '리쓰린공원 아침 산책, 셀프 우동집, 고토히라궁 785계단, 쇼도시마 올리브와 엔젤로드를 엮은 사누키 템플릿입니다.',
        footer: 'Takamatsu runs on udon, pine gardens, and slow ferries.',
        heroImage: 'assets/heroes/takamatsu.jpg',
        heroPosition: 'center center',
        accent: '#115E59',
        accentRgb: '17, 94, 89',
        ink: '#0F2E2B',
        inkRgb: '15, 46, 43',
        overlayTop: 'rgba(15, 46, 43, 0.34)',
        overlayBottom: 'rgba(8, 22, 21, 0.86)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 34.3428, longitude: 134.0466 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 11,
        phraseLabel: '日本語',
        phrases: [
            { text: 'ぶっかけの冷たいのをください', pron: '붓카케노 츠메타이노오 쿠다사이', meaning: '차가운 붓카케 우동 주세요' },
            { text: '天ぷらは自分で取るんですか？', pron: '텐푸라와 지분데 토룬데스카', meaning: '튀김은 직접 가져가는 건가요? (셀프 우동집)' },
            { text: '次の船は何時に出ますか？', pron: '츠기노 후네와 난지니 데마스카', meaning: '다음 배는 몇 시에 출발하나요?' },
            { text: '階段は何段ありますか？', pron: '카이단와 난단 아리마스카', meaning: '계단이 몇 개인가요? (고토히라궁 785계단)' },
            { text: '杖を借りられますか？', pron: '츠에오 카리라레마스카', meaning: '지팡이를 빌릴 수 있나요? (고토히라궁 참배길)' },
            { text: 'オリーブオイルをお土産にしたいです', pron: '오리부오이루오 오미야게니 시타이데스', meaning: '올리브오일을 선물로 사고 싶어요 (쇼도시마)' }
        ],
        itineraryTemplate: [
            {
                title: '리쓰린공원 & 선포트',
                activities: [
                    { time: '09:30', title: '리쓰린 공원 & 기쿠게쓰테이 말차', type: 'trees', location: 'Ritsurin Garden' },
                    { time: '12:30', title: '사누키 우동 점심', type: 'utensils-crossed', location: 'Udon Baka Ichidai' },
                    { time: '18:00', title: '심볼타워 전망 & 항구 저녁', type: 'building', location: 'Takamatsu Symbol Tower' }
                ]
            },
            {
                title: '고토히라 (곤피라상)',
                activities: [
                    { time: '09:30', title: '고토히라궁 785계단 참배', type: 'landmark', location: 'Kotohira-gu' },
                    { time: '12:30', title: '나카노 우동학교 체험 & 점심', type: 'utensils-crossed', location: 'Nakano Udon School' },
                    { time: '16:30', title: '젠쓰지 (구카이 탄생지) 오층탑', type: 'landmark', location: 'Zentsuji Temple' }
                ]
            },
            {
                title: '쇼도시마',
                activities: [
                    { time: '09:00', title: '다카마쓰항 → 쇼도시마 페리', type: 'ship', location: 'Takamatsu Port' },
                    { time: '12:30', title: '올리브 공원 & 마녀 빗자루 사진', type: 'camera', location: 'Shodoshima Olive Park' },
                    { time: '17:00', title: '엔젤로드 물길 산책 (간조 시간 확인)', type: 'sun', location: 'Angel Road' }
                ]
            },
            {
                title: '야시마 & 이동',
                activities: [
                    { time: '09:30', title: '야시마 전망대 (야시마루)', type: 'binoculars', location: 'Yashima' },
                    { time: '12:30', title: '마루가메마치 상점가 점심 & 쇼핑', type: 'shopping-bag', location: 'Marugamemachi Shopping Street' },
                    { time: '16:00', title: '다카마쓰 공항 이동', type: 'plane', location: 'Takamatsu Airport' }
                ]
            }
        ]
    },
    matsuyama: {
        id: 'matsuyama',
        city: 'Matsuyama',
        country: 'Japan',
        summary: '마쓰야마성 천수각과 도고온천 본관, 시마나미 해도 자전거 횡단까지 온천과 바다를 오가는 이요 템플릿입니다.',
        footer: 'Matsuyama is warm water, citrus light, and bridges over the sea.',
        heroImage: 'assets/heroes/matsuyama.jpg',
        heroPosition: 'center center',
        accent: '#FF2700',
        accentRgb: '255, 39, 0',
        ink: '#3A1F0F',
        inkRgb: '58, 31, 15',
        overlayTop: 'rgba(58, 31, 15, 0.32)',
        overlayBottom: 'rgba(24, 14, 8, 0.86)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 33.8392, longitude: 132.7657 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 12,
        phraseLabel: '日本語',
        phrases: [
            { text: '入浴券を一枚ください', pron: '뉴요쿠켄오 이치마이 쿠다사이', meaning: '입욕권 한 장 주세요 (도고온천)' },
            { text: 'タオルは付いていますか？', pron: '타오루와 츠이테이마스카', meaning: '수건이 포함되어 있나요?' },
            { text: 'ロープウェイ乗り場はどこですか？', pron: '로푸웨이 노리바와 도코데스카', meaning: '로프웨이 승강장은 어디인가요? (마쓰야마성)' },
            { text: 'レンタサイクルはありますか？', pron: '렌타사이쿠루와 아리마스카', meaning: '대여 자전거 있나요? (시마나미 해도)' },
            { text: 'みかんジュースをください', pron: '미칸쥬스오 쿠다사이', meaning: '귤(미칸) 주스 주세요' },
            { text: '鯛めしをお願いします', pron: '타이메시오 오네가이시마스', meaning: '타이메시(도미밥) 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '마쓰야마성 & 오카이도',
                activities: [
                    { time: '10:00', title: '마쓰야마성 로프웨이 & 천수각', type: 'landmark', location: 'Matsuyama Castle' },
                    { time: '12:30', title: '니노마루 사적정원 산책', type: 'trees', location: 'Ninomaru Historical Garden' },
                    { time: '18:00', title: '오카이도 상점가 타이메시 저녁', type: 'utensils-crossed', location: 'Okaido Shopping Street' }
                ]
            },
            {
                title: '도고 온천',
                activities: [
                    { time: '09:30', title: '이시테지 (시코쿠 88영장 51번)', type: 'landmark', location: 'Ishiteji Temple' },
                    { time: '12:30', title: '하이카라 거리 점심 & 미칸주스', type: 'store', location: 'Dogo Haikara Street' },
                    { time: '18:00', title: '도고 온천 본관 야간 입욕', type: 'sparkles', location: 'Dogo Onsen Honkan' }
                ]
            },
            {
                title: '시마나미 해도 (이마바리)',
                activities: [
                    { time: '10:00', title: '선라이즈 이토야마 렌터사이클', type: 'map', location: 'Sunrise Itoyama' },
                    { time: '12:30', title: '구루시마 해협대교 횡단', type: 'bridge', location: 'Kurushima-Kaikyo Bridge' },
                    { time: '16:30', title: '기로산 전망공원 노을', type: 'binoculars', location: 'Kirosan Observatory Park' }
                ]
            },
            {
                title: '반스이소 & 이동',
                activities: [
                    { time: '10:00', title: '반스이소 프랑스풍 저택', type: 'building-2', location: 'Bansuiso' },
                    { time: '12:30', title: '긴텐가이 상점가 점심 & 쇼핑', type: 'shopping-bag', location: 'Gintengai Shopping Street' },
                    { time: '16:30', title: '마쓰야마 공항 이동', type: 'plane', location: 'Matsuyama Airport' }
                ]
            }
        ]
    },
    tokushima: {
        id: 'tokushima',
        city: 'Tokushima',
        country: 'Japan',
        summary: '나루토 소용돌이 관조선, 오보케 협곡과 이야 덩굴다리, 아와오도리 회관의 춤까지 담은 아와 자연·축제 템플릿입니다.',
        footer: 'Tokushima dances between whirlpools, gorges, and indigo.',
        heroImage: 'assets/heroes/tokushima.jpg',
        heroPosition: 'center center',
        accent: '#4630A3',
        accentRgb: '70, 48, 163',
        ink: '#171A3A',
        inkRgb: '23, 26, 58',
        overlayTop: 'rgba(23, 26, 58, 0.36)',
        overlayBottom: 'rgba(10, 12, 30, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 34.0703, longitude: 134.5547 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 10,
        phraseLabel: '日本語',
        phrases: [
            { text: '渦潮は何時ごろ見えますか？', pron: '우즈시오와 난지고로 미에마스카', meaning: '소용돌이는 몇 시쯤 볼 수 있나요?' },
            { text: '観潮船に乗りたいです', pron: '칸쵸센니 노리타이데스', meaning: '소용돌이 관조선을 타고 싶어요' },
            { text: 'かずら橋は揺れますか？', pron: '카즈라바시와 유레마스카', meaning: '덩굴다리는 많이 흔들리나요?' },
            { text: '踊りを一緒に体験できますか？', pron: '오도리오 잇쇼니 타이켄 데키마스카', meaning: '춤을 함께 체험할 수 있나요? (아와오도리 회관)' },
            { text: '生卵を一つ追加してください', pron: '나마타마고오 히토츠 츠이카시테 쿠다사이', meaning: '날달걀 하나 추가해 주세요 (도쿠시마 라멘)' },
            { text: '踊る阿呆に見る阿呆', pron: '오도루 아호니 미루 아호', meaning: '춤추는 바보에 구경하는 바보 (아와오도리 노랫말)' }
        ],
        itineraryTemplate: [
            {
                title: '도쿠시마 시내 & 아와오도리',
                activities: [
                    { time: '10:00', title: '비잔 로프웨이 전망', type: 'binoculars', location: 'Bizan Ropeway' },
                    { time: '12:30', title: '도쿠시마 라멘 점심', type: 'utensils-crossed', location: 'Tokushima Ramen Inotani' },
                    { time: '18:00', title: '아와오도리 회관 공연 & 체험', type: 'music', location: 'Awa Odori Kaikan' }
                ]
            },
            {
                title: '나루토',
                activities: [
                    { time: '10:00', title: '오쓰카 국제미술관', type: 'palette', location: 'Otsuka Museum of Art' },
                    { time: '13:00', title: '관조선 소용돌이 크루즈 (조석표 확인)', type: 'ship', location: 'Uzushio Kisen' },
                    { time: '16:30', title: '우즈노미치 유리바닥 전망로', type: 'bridge', location: 'Uzu no Michi' }
                ]
            },
            {
                title: '오보케 & 이야 계곡',
                activities: [
                    { time: '09:30', title: '오보케 협곡 유람선', type: 'ship', location: 'Oboke Gorge' },
                    { time: '12:30', title: '이야 덩굴다리 & 이야소바 점심', type: 'bridge', location: 'Iya Kazurabashi Bridge' },
                    { time: '17:00', title: '이야 온천 케이블카 노천탕', type: 'sparkles', location: 'Hotel Iya Onsen' }
                ]
            },
            {
                title: '도쿠시마성 & 이동',
                activities: [
                    { time: '10:00', title: '도쿠시마성 박물관 & 센슈카쿠 정원', type: 'building-2', location: 'Tokushima Castle Museum' },
                    { time: '13:00', title: '역앞 스다치 · 와산본 기념품', type: 'gift', location: 'Tokushima Station' },
                    { time: '16:00', title: '도쿠시마 아와오도리 공항 이동', type: 'plane', location: 'Tokushima Awaodori Airport' }
                ]
            }
        ]
    },
    yonago: {
        id: 'yonago',
        city: 'Yonago (Tottori)',
        country: 'Japan',
        summary: '사카이미나토 요괴거리와 돗토리 사구 낙타 산책, 다이센 산기슭 목장까지 산인 해안을 달리는 요나고 베이스 템플릿입니다.',
        footer: 'Yonago is the quiet base for dunes, yokai, and a sacred mountain.',
        heroImage: 'assets/heroes/yonago.jpg',
        heroPosition: 'center center',
        accent: '#854D0E',
        accentRgb: '133, 77, 14',
        ink: '#2F2415',
        inkRgb: '47, 36, 21',
        overlayTop: 'rgba(47, 36, 21, 0.30)',
        overlayBottom: 'rgba(22, 17, 10, 0.84)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 35.4281, longitude: 133.3311 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 13,
        phraseLabel: '日本語',
        phrases: [
            { text: '砂丘行きのバスはどこから出ますか？', pron: '사큐유키노 바스와 도코카라 데마스카', meaning: '사구행 버스는 어디서 출발하나요?' },
            { text: 'ラクダに乗れますか？', pron: '라쿠다니 노레마스카', meaning: '낙타를 탈 수 있나요? (돗토리 사구)' },
            { text: '妖怪スタンプ帳をください', pron: '요카이 스탄푸쵸오 쿠다사이', meaning: '요괴 스탬프 수첩 주세요 (미즈키 시게루 로드)' },
            { text: '松葉ガニはありますか？', pron: '마츠바가니와 아리마스카', meaning: '마쓰바가니(대게) 있나요? (겨울 별미)' },
            { text: '二十世紀梨をください', pron: '니줏세이키나시오 쿠다사이', meaning: '20세기 배 주세요 (돗토리 특산)' },
            { text: 'だんだん', pron: '단단', meaning: '고맙습니다 (산인 지방 사투리)' }
        ],
        itineraryTemplate: [
            {
                title: '사카이미나토 요괴거리',
                activities: [
                    { time: '10:00', title: '미즈키 시게루 로드 요괴 동상 산책', type: 'camera', location: 'Mizuki Shigeru Road' },
                    { time: '13:00', title: '미즈키 시게루 기념관 & 항구 해산물 점심', type: 'building-2', location: 'Mizuki Shigeru Museum' },
                    { time: '18:00', title: '카이케 온천 해변 노을', type: 'sun', location: 'Kaike Onsen' }
                ]
            },
            {
                title: '돗토리 사구',
                activities: [
                    { time: '09:30', title: '돗토리 사구 & 낙타 체험', type: 'sun', location: 'Tottori Sand Dunes' },
                    { time: '12:30', title: '모래 미술관', type: 'palette', location: 'Tottori Sand Museum' },
                    { time: '17:30', title: '가로이치 수산시장 해산물 저녁', type: 'utensils-crossed', location: 'Karoichi' }
                ]
            },
            {
                title: '다이센',
                activities: [
                    { time: '09:30', title: '다이센지 & 오가미야마 신사 참배길', type: 'landmark', location: 'Daisenji Temple' },
                    { time: '12:30', title: '마키바 미루쿠노사토 목장 점심', type: 'coffee', location: 'Daisen Makiba Milk no Sato' },
                    { time: '17:00', title: '가기카케 고개 다이센 남벽 노을', type: 'binoculars', location: 'Kagikake Pass' }
                ]
            },
            {
                title: '요나고 시내 & 이동',
                activities: [
                    { time: '10:00', title: '요나고성터 전망', type: 'binoculars', location: 'Yonago Castle Ruins' },
                    { time: '12:30', title: '요나고역 20세기 배 · 기념품', type: 'gift', location: 'Yonago Station' },
                    { time: '15:30', title: '요나고 기타로 공항 이동', type: 'plane', location: 'Yonago Kitaro Airport' }
                ]
            }
        ]
    },
    kanazawa: {
        id: 'kanazawa',
        city: 'Kanazawa',
        country: 'Japan',
        summary: '겐로쿠엔 아침 산책과 오미초시장 해산물, 히가시차야 금박 골목, 시라카와고 당일치기까지 담은 가가 백만석 템플릿입니다.',
        footer: 'Kanazawa keeps gold leaf, rain, and old tea houses in perfect order.',
        heroImage: 'assets/heroes/kanazawa.jpg',
        heroPosition: 'center center',
        accent: '#6B21A8',
        accentRgb: '107, 33, 168',
        ink: '#2A1B3D',
        inkRgb: '42, 27, 61',
        overlayTop: 'rgba(42, 27, 61, 0.34)',
        overlayBottom: 'rgba(16, 11, 26, 0.88)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 36.5613, longitude: 136.6562 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 9,
        phraseLabel: '日本語',
        phrases: [
            { text: '金箔ソフトをください', pron: '킨파쿠소후토오 쿠다사이', meaning: '금박 소프트아이스크림 주세요' },
            { text: '海鮮丼をお願いします', pron: '카이센동오 오네가이시마스', meaning: '해산물 덮밥 주세요 (오미초 시장)' },
            { text: '白川郷行きのバスを予約したいです', pron: '시라카와고유키노 바스오 요야쿠시타이데스', meaning: '시라카와고행 버스를 예약하고 싶어요' },
            { text: 'お茶屋の中は見学できますか？', pron: '오챠야노 나카와 켄가쿠 데키마스카', meaning: '찻집(오차야) 내부를 둘러볼 수 있나요? (히가시차야)' },
            { text: '旬の魚はどれですか？', pron: '슌노 사카나와 도레데스카', meaning: '제철 생선은 어느 것인가요?' },
            { text: '弁当忘れても傘忘れるな', pron: '벤토 와스레테모 카사 와스레루나', meaning: '도시락은 잊어도 우산은 잊지 마라 (비 많은 가나자와 속담)' }
        ],
        itineraryTemplate: [
            {
                title: '겐로쿠엔 & 21세기 미술관',
                activities: [
                    { time: '09:30', title: '겐로쿠엔 & 가나자와성 산책', type: 'trees', location: 'Kenrokuen Garden' },
                    { time: '13:00', title: '21세기 미술관 스위밍 풀', type: 'palette', location: '21st Century Museum of Contemporary Art, Kanazawa' },
                    { time: '18:00', title: '가타마치 가가 요리 저녁', type: 'utensils-crossed', location: 'Katamachi' }
                ]
            },
            {
                title: '히가시차야 & 오미초',
                activities: [
                    { time: '09:00', title: '오미초 시장 해산물 아침', type: 'store', location: 'Omicho Market' },
                    { time: '12:30', title: '히가시차야 거리 금박 소프트', type: 'camera', location: 'Higashi Chaya District' },
                    { time: '18:00', title: '가즈에마치 차야 골목 저녁 산책', type: 'moon-star', location: 'Kazuemachi Chaya District' }
                ]
            },
            {
                title: '시라카와고 당일치기',
                activities: [
                    { time: '10:30', title: '시라카와고 갓쇼즈쿠리 마을', type: 'landmark', location: 'Shirakawa-go' },
                    { time: '13:00', title: '와다 하우스 & 향토 점심', type: 'building-2', location: 'Wada House' },
                    { time: '16:00', title: '시로야마 전망대 전경', type: 'binoculars', location: 'Shiroyama Viewpoint' }
                ]
            },
            {
                title: '나가마치 & 이동',
                activities: [
                    { time: '10:00', title: '나가마치 무사 저택 거리', type: 'landmark', location: 'Nagamachi Samurai District' },
                    { time: '12:30', title: '가나자와역 쓰즈미몬 & 기념품', type: 'gift', location: 'Kanazawa Station' },
                    { time: '15:30', title: '고마쓰 공항 이동', type: 'plane', location: 'Komatsu Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_JP_WEST;
