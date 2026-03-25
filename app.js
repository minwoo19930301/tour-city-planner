const DAY_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ACTIVITY_ICON_OPTIONS = [
    { value: 'plane', label: 'Plane' },
    { value: 'train-front', label: 'Train' },
    { value: 'ship', label: 'Boat' },
    { value: 'tower-control', label: 'Tower' },
    { value: 'lightbulb', label: 'Lights' },
    { value: 'landmark', label: 'Landmark' },
    { value: 'building', label: 'Building' },
    { value: 'building-2', label: 'Museum' },
    { value: 'shopping-bag', label: 'Shopping' },
    { value: 'shopping-cart', label: 'Mall' },
    { value: 'store', label: 'Market' },
    { value: 'gift', label: 'Souvenir' },
    { value: 'coffee', label: 'Cafe' },
    { value: 'utensils-crossed', label: 'Food' },
    { value: 'trees', label: 'Park' },
    { value: 'bridge', label: 'Bridge' },
    { value: 'camera', label: 'Photo' },
    { value: 'music', label: 'Show' },
    { value: 'ticket', label: 'Tickets' },
    { value: 'sparkles', label: 'Highlight' },
    { value: 'map', label: 'Walk' },
    { value: 'binoculars', label: 'View' },
    { value: 'sun', label: 'Beach' },
    { value: 'moon-star', label: 'Night' },
    { value: 'palette', label: 'Art' },
    { value: 'library', label: 'Library' },
    { value: 'luggage', label: 'Hotel' }
];

const DESTINATIONS = {
    paris: {
        id: 'paris',
        city: 'Paris',
        country: 'France',
        summary: '예술, 강변 산책, 디저트, 박물관을 리듬 있게 묶은 파리 템플릿입니다.',
        footer: 'Paris works best when the day moves from stone to light.',
        heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
        accent: '#FFD700',
        accentRgb: '255, 215, 0',
        ink: '#1A237E',
        inkRgb: '26, 35, 126',
        overlayTop: 'rgba(26, 35, 126, 0.62)',
        overlayBottom: 'rgba(9, 14, 48, 0.94)',
        timeZone: 'Europe/Paris',
        weather: { latitude: 48.8566, longitude: 2.3522 },
        currency: { code: 'EUR', symbol: '€', locale: 'fr-FR' },
        startOffsetDays: 5,
        phraseLabel: 'French phrase',
        phrases: [
            { text: 'Bonjour', pron: '[봉쥬르]', meaning: '안녕하세요' },
            { text: 'Merci beaucoup', pron: '[메흑씨 보꾸]', meaning: '정말 감사합니다' },
            { text: 'Excusez-moi', pron: '[엑스큐제 무아]', meaning: '실례합니다' },
            { text: 'Un café, s’il vous plaît', pron: '[앙 카페 실 부 플레]', meaning: '커피 한 잔 주세요' },
            { text: 'Où est le métro ?', pron: '[우 에 르 메트호]', meaning: '지하철역이 어디예요?' },
            { text: 'L’addition, s’il vous plaît', pron: '[라디시옹 실 부 플레]', meaning: '계산서 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '도착 & 강변 적응',
                activities: [
                    { time: '14:00', title: '샹젤리제 산책', type: 'map', location: 'Champs-Élysées' },
                    { time: '16:30', title: '개선문 전망', type: 'camera', location: 'Arc de Triomphe' },
                    { time: '19:00', title: '센강 야경 크루즈', type: 'ship', location: 'Seine River Cruise Paris', memo: '첫날엔 무리하지 않고 강변 중심으로' }
                ]
            },
            {
                title: '랜드마크 데이',
                activities: [
                    { time: '09:30', title: '에펠탑', type: 'tower-control', location: 'Eiffel Tower' },
                    { time: '13:00', title: '오페라 가르니에', type: 'music', location: 'Palais Garnier' },
                    { time: '17:30', title: '노트르담 주변 산책', type: 'landmark', location: 'Cathédrale Notre-Dame de Paris' }
                ]
            },
            {
                title: '뮤지엄 & 마켓',
                activities: [
                    { time: '10:00', title: '루브르 박물관', type: 'building-2', location: 'Louvre Museum' },
                    { time: '14:30', title: '튈르리 가든', type: 'trees', location: 'Jardin des Tuileries' },
                    { time: '18:30', title: '크리스마스 마켓', type: 'sparkles', location: 'Tuileries Christmas Market Paris' }
                ]
            },
            {
                title: '예술과 디저트',
                activities: [
                    { time: '10:30', title: '오르세 미술관', type: 'palette', location: "Musée d'Orsay" },
                    { time: '14:00', title: '몽마르트 카페', type: 'coffee', location: 'Montmartre' },
                    { time: '18:00', title: '사크레쾨르 야경', type: 'moon-star', location: 'Sacré-Cœur' }
                ]
            },
            {
                title: '쇼핑 & 출발',
                activities: [
                    { time: '10:00', title: '몽쥬약국 쇼핑', type: 'shopping-bag', location: 'Pharmacie Monge' },
                    { time: '13:00', title: '기념품 마지막 체크', type: 'gift', location: 'Le Marais' },
                    { time: '16:00', title: '공항 이동', type: 'plane', location: 'Charles de Gaulle Airport' }
                ]
            }
        ]
    },
    london: {
        id: 'london',
        city: 'London',
        country: 'United Kingdom',
        summary: '런던 핵심 랜드마크와 공원, 박물관, 웨스트엔드를 묶은 도심 템플릿입니다.',
        footer: 'London feels sharp when market, park, and theatre share one day.',
        heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop',
        accent: '#FBBF24',
        accentRgb: '251, 191, 36',
        ink: '#0F172A',
        inkRgb: '15, 23, 42',
        overlayTop: 'rgba(15, 23, 42, 0.62)',
        overlayBottom: 'rgba(15, 23, 42, 0.94)',
        timeZone: 'Europe/London',
        weather: { latitude: 51.5072, longitude: -0.1276 },
        currency: { code: 'GBP', symbol: '£', locale: 'en-GB' },
        startOffsetDays: 6,
        phraseLabel: 'British phrase',
        phrases: [
            { text: 'Cheers', pron: '[치얼즈]', meaning: '고마워요 / 좋아요' },
            { text: 'Mind the gap', pron: '[마인드 더 갭]', meaning: '발밑 조심하세요' },
            { text: 'Could I get this to go?', pron: '[쿧 아이 겟 디스 투 고]', meaning: '포장 가능할까요?' },
            { text: 'Lovely', pron: '[러블리]', meaning: '아주 좋네요' },
            { text: 'Queue this side', pron: '[큐 디스 사이드]', meaning: '줄은 이쪽입니다' },
            { text: 'Where is the Tube?', pron: '[웨어 이즈 더 튜브]', meaning: '지하철 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '웨스트민스터 워밍업',
                activities: [
                    { time: '10:00', title: '빅벤 & 국회의사당', type: 'landmark', location: 'Big Ben' },
                    { time: '13:00', title: '웨스트민스터 사원', type: 'landmark', location: 'Westminster Abbey' },
                    { time: '18:30', title: '런던아이 야경', type: 'camera', location: 'London Eye' }
                ]
            },
            {
                title: '왕실 & 공원',
                activities: [
                    { time: '10:30', title: '버킹엄 궁전', type: 'landmark', location: 'Buckingham Palace' },
                    { time: '13:30', title: '세인트 제임스 파크', type: 'trees', location: "St James's Park" },
                    { time: '17:30', title: '피카딜리 서커스', type: 'lightbulb', location: 'Piccadilly Circus' }
                ]
            },
            {
                title: '뮤지엄 데이',
                activities: [
                    { time: '10:00', title: '대영박물관', type: 'building-2', location: 'The British Museum' },
                    { time: '14:30', title: '코벤트 가든', type: 'shopping-bag', location: 'Covent Garden' },
                    { time: '19:00', title: '웨스트엔드 공연', type: 'ticket', location: 'West End Theatre District' }
                ]
            },
            {
                title: '브리지 & 시티뷰',
                activities: [
                    { time: '10:30', title: '타워 브리지', type: 'bridge', location: 'Tower Bridge' },
                    { time: '13:00', title: '타워 오브 런던', type: 'landmark', location: 'Tower of London' },
                    { time: '18:00', title: '스카이가든', type: 'binoculars', location: 'Sky Garden' }
                ]
            },
            {
                title: '노팅힐 & 귀국',
                activities: [
                    { time: '10:00', title: '포토벨로 로드', type: 'store', location: 'Portobello Road Market' },
                    { time: '13:30', title: '노팅힐 산책', type: 'map', location: 'Notting Hill' },
                    { time: '17:00', title: '히드로 이동', type: 'plane', location: 'Heathrow Airport' }
                ]
            }
        ]
    },
    'new-york': {
        id: 'new-york',
        city: 'New York',
        country: 'United States',
        summary: '뉴욕 대표 스폿을 밀도 있게 묶은 도심형 템플릿입니다.',
        footer: 'New York rewards dense days and late walks.',
        heroImage: 'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?q=80&w=2070&auto=format&fit=crop',
        accent: '#60A5FA',
        accentRgb: '96, 165, 250',
        ink: '#0B1120',
        inkRgb: '11, 17, 32',
        overlayTop: 'rgba(11, 17, 32, 0.58)',
        overlayBottom: 'rgba(11, 17, 32, 0.94)',
        timeZone: 'America/New_York',
        weather: { latitude: 40.7128, longitude: -74.0060 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 7,
        phraseLabel: 'NYC phrase',
        phrases: [
            { text: 'How’s it going?', pron: '[하우즈 잇 고잉]', meaning: '어때요?' },
            { text: 'Can I get this to go?', pron: '[캔 아이 겟 디스 투 고]', meaning: '포장 부탁해요' },
            { text: 'Downtown or Uptown?', pron: '[다운타운 오어 업타운]', meaning: '남행인가 북행인가요?' },
            { text: 'Subway entrance?', pron: '[서브웨이 엔트런스]', meaning: '지하철 입구 어디예요?' },
            { text: 'Check, please', pron: '[첵 플리즈]', meaning: '계산서 주세요' },
            { text: 'I’m heading to Midtown', pron: '[아임 헤딩 투 미드타운]', meaning: '미드타운 가는 중이에요' }
        ],
        itineraryTemplate: [
            {
                title: '미드타운 집중',
                activities: [
                    { time: '10:00', title: '타임스퀘어', type: 'sparkles', location: 'Times Square' },
                    { time: '13:00', title: '브라이언트 파크', type: 'library', location: 'Bryant Park' },
                    { time: '18:30', title: '탑 오브 더 록', type: 'building', location: 'Top of the Rock' }
                ]
            },
            {
                title: '센트럴파크 & 뮤지엄',
                activities: [
                    { time: '10:30', title: '센트럴파크 산책', type: 'trees', location: 'Central Park' },
                    { time: '13:30', title: '메트 미술관', type: 'palette', location: 'The Metropolitan Museum of Art' },
                    { time: '19:00', title: '5번가 야경', type: 'shopping-bag', location: 'Fifth Avenue' }
                ]
            },
            {
                title: '다운타운 데이',
                activities: [
                    { time: '09:30', title: '자유의 여신상 페리', type: 'ship', location: 'Battery Park' },
                    { time: '13:30', title: '월스트리트', type: 'landmark', location: 'Wall Street' },
                    { time: '17:30', title: '브루클린 브리지', type: 'bridge', location: 'Brooklyn Bridge' }
                ]
            },
            {
                title: '소호 & 첼시',
                activities: [
                    { time: '10:30', title: '소호 카페', type: 'coffee', location: 'SoHo' },
                    { time: '14:00', title: '하이라인', type: 'map', location: 'The High Line' },
                    { time: '18:30', title: '첼시마켓', type: 'utensils-crossed', location: 'Chelsea Market' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '10:00', title: '그랜드 센트럴', type: 'train-front', location: 'Grand Central Terminal' },
                    { time: '13:00', title: '기념품 쇼핑', type: 'gift', location: 'Macy’s Herald Square' },
                    { time: '16:30', title: 'JFK 이동', type: 'plane', location: 'John F. Kennedy International Airport' }
                ]
            }
        ]
    },
    'los-angeles': {
        id: 'los-angeles',
        city: 'Los Angeles',
        country: 'United States',
        summary: '영화, 해변, 전망 포인트를 묶은 서부 감성 템플릿입니다.',
        footer: 'Los Angeles works when you leave room for light and distance.',
        heroImage: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?q=80&w=2070&auto=format&fit=crop',
        accent: '#F97316',
        accentRgb: '249, 115, 22',
        ink: '#431407',
        inkRgb: '67, 20, 7',
        overlayTop: 'rgba(67, 20, 7, 0.42)',
        overlayBottom: 'rgba(24, 24, 27, 0.9)',
        timeZone: 'America/Los_Angeles',
        weather: { latitude: 34.0522, longitude: -118.2437 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 9,
        phraseLabel: 'LA phrase',
        phrases: [
            { text: 'No worries', pron: '[노 워리즈]', meaning: '괜찮아요' },
            { text: 'Let’s grab tacos', pron: '[렛츠 그랩 타코스]', meaning: '타코 먹으러 가자' },
            { text: 'Traffic is wild today', pron: '[트래픽 이즈 와일드 투데이]', meaning: '오늘 차가 엄청 막히네요' },
            { text: 'Takeout, please', pron: '[테이크아웃 플리즈]', meaning: '포장해주세요' },
            { text: 'See you on the Westside', pron: '[씨 유 온 더 웨스트사이드]', meaning: '웨스트사이드에서 봐요' },
            { text: 'Sunset’s the best time', pron: '[선셋츠 더 베스트 타임]', meaning: '해질 때가 제일 좋아요' }
        ],
        itineraryTemplate: [
            {
                title: '할리우드 워밍업',
                activities: [
                    { time: '10:00', title: '워크 오브 페임', type: 'camera', location: 'Hollywood Walk of Fame' },
                    { time: '13:30', title: '그리피스 천문대', type: 'binoculars', location: 'Griffith Observatory' },
                    { time: '18:30', title: '선셋 스트립', type: 'music', location: 'Sunset Strip' }
                ]
            },
            {
                title: '비버리힐스 & 쇼핑',
                activities: [
                    { time: '10:30', title: '로데오 드라이브', type: 'shopping-bag', location: 'Rodeo Drive' },
                    { time: '13:00', title: '더 그로브', type: 'store', location: 'The Grove' },
                    { time: '18:00', title: '파머스 마켓 저녁', type: 'utensils-crossed', location: 'Original Farmers Market' }
                ]
            },
            {
                title: '산타모니카 데이',
                activities: [
                    { time: '10:00', title: '산타모니카 피어', type: 'camera', location: 'Santa Monica Pier' },
                    { time: '14:00', title: '베니스 비치', type: 'sun', location: 'Venice Beach' },
                    { time: '18:30', title: '오션프론트 선셋', type: 'moon-star', location: 'Santa Monica State Beach' }
                ]
            },
            {
                title: '아트 & 다운타운',
                activities: [
                    { time: '10:30', title: '더 브로드', type: 'building-2', location: 'The Broad' },
                    { time: '13:30', title: '그랜드 센트럴 마켓', type: 'utensils-crossed', location: 'Grand Central Market' },
                    { time: '17:30', title: '콘서트홀', type: 'music', location: 'Walt Disney Concert Hall' }
                ]
            },
            {
                title: '브런치 & 공항',
                activities: [
                    { time: '10:00', title: '멜로즈 브런치', type: 'coffee', location: 'Melrose Avenue' },
                    { time: '13:00', title: '기념품 쇼핑', type: 'gift', location: 'Abbot Kinney Boulevard' },
                    { time: '16:00', title: 'LAX 이동', type: 'plane', location: 'Los Angeles International Airport' }
                ]
            }
        ]
    },
    tokyo: {
        id: 'tokyo',
        city: 'Tokyo',
        country: 'Japan',
        summary: '도쿄 핵심 동선 위에 탑, 사원, 후지산 무드를 얹은 클래식 재팬 톤 템플릿입니다.',
        footer: 'Japan feels strongest in vermilion, paper light, and a clean skyline.',
        heroImage: 'https://images.unsplash.com/photo-1526481280695-3c4692d2f038?q=80&w=2070&auto=format&fit=crop',
        accent: '#C2410C',
        accentRgb: '194, 65, 12',
        ink: '#1F2A44',
        inkRgb: '31, 42, 68',
        overlayTop: 'rgba(31, 42, 68, 0.26)',
        overlayBottom: 'rgba(20, 24, 38, 0.72)',
        timeZone: 'Asia/Tokyo',
        weather: { latitude: 35.6762, longitude: 139.6503 },
        currency: { code: 'JPY', symbol: '¥', locale: 'ja-JP' },
        startOffsetDays: 8,
        phraseLabel: '日本語',
        phrases: [
            { text: 'すみません', pron: '스미마센', meaning: '실례합니다 / 죄송합니다' },
            { text: 'ありがとうございます', pron: '아리가토 고자이마스', meaning: '감사합니다' },
            { text: 'これをお願いします', pron: '코레오 오네가이시마스', meaning: '이걸로 부탁합니다' },
            { text: '駅はどこですか？', pron: '에키와 도코데스카', meaning: '역이 어디인가요?' },
            { text: 'お会計お願いします', pron: '오카이케이 오네가이시마스', meaning: '계산 부탁합니다' },
            { text: '大丈夫です', pron: '다이조부데스', meaning: '괜찮습니다' }
        ],
        itineraryTemplate: [
            {
                title: '시부야 & 하라주쿠',
                activities: [
                    { time: '10:00', title: '시부야 스크램블', type: 'sparkles', location: 'Shibuya Scramble Crossing' },
                    { time: '13:00', title: '메이지 신궁', type: 'landmark', location: 'Meiji Jingu' },
                    { time: '18:30', title: '시부야 스카이', type: 'building', location: 'Shibuya Sky' }
                ]
            },
            {
                title: '아사쿠사 & 스미다',
                activities: [
                    { time: '10:30', title: '센소지', type: 'landmark', location: 'Senso-ji' },
                    { time: '13:30', title: '나카미세 거리', type: 'shopping-bag', location: 'Nakamise-dori Street' },
                    { time: '18:00', title: '도쿄 스카이트리', type: 'tower-control', location: 'Tokyo Skytree' }
                ]
            },
            {
                title: '긴자 & 도쿄역',
                activities: [
                    { time: '10:30', title: '긴자 카페', type: 'coffee', location: 'Ginza' },
                    { time: '14:00', title: '캐릭터 스트리트', type: 'gift', location: 'Tokyo Character Street' },
                    { time: '19:00', title: '마루노우치 야경', type: 'moon-star', location: 'Marunouchi' }
                ]
            },
            {
                title: '우에노 & 아키하바라',
                activities: [
                    { time: '10:00', title: '우에노 공원', type: 'trees', location: 'Ueno Park' },
                    { time: '13:30', title: '도쿄 국립박물관', type: 'building-2', location: 'Tokyo National Museum' },
                    { time: '18:00', title: '아키하바라', type: 'shopping-cart', location: 'Akihabara' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '10:00', title: '돈키호테 쇼핑', type: 'shopping-bag', location: 'Don Quijote Shibuya' },
                    { time: '13:00', title: '공항 이동 준비', type: 'luggage', location: 'Tokyo Station' },
                    { time: '16:30', title: '하네다 이동', type: 'plane', location: 'Haneda Airport' }
                ]
            }
        ]
    },
    rome: {
        id: 'rome',
        city: 'Rome',
        country: 'Italy',
        summary: '로마 유적과 광장, 바티칸, 젤라토를 한 바퀴로 묶은 템플릿입니다.',
        footer: 'Rome feels strongest when history and food stay in the same loop.',
        heroImage: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2070&auto=format&fit=crop',
        accent: '#FACC15',
        accentRgb: '250, 204, 21',
        ink: '#3F1D0A',
        inkRgb: '63, 29, 10',
        overlayTop: 'rgba(63, 29, 10, 0.45)',
        overlayBottom: 'rgba(23, 23, 23, 0.92)',
        timeZone: 'Europe/Rome',
        weather: { latitude: 41.9028, longitude: 12.4964 },
        currency: { code: 'EUR', symbol: '€', locale: 'it-IT' },
        startOffsetDays: 10,
        phraseLabel: 'Italian phrase',
        phrases: [
            { text: 'Ciao', pron: '[차오]', meaning: '안녕하세요 / 안녕' },
            { text: 'Grazie', pron: '[그라치에]', meaning: '감사합니다' },
            { text: 'Un caffè, per favore', pron: '[운 카페 페르 파보레]', meaning: '커피 한 잔 주세요' },
            { text: 'Dov’è la stazione?', pron: '[도베 라 스타치오네]', meaning: '역이 어디인가요?' },
            { text: 'Il conto, per favore', pron: '[일 콘토 페르 파보레]', meaning: '계산서 주세요' },
            { text: 'Molto buono', pron: '[몰토 부오노]', meaning: '정말 맛있어요' }
        ],
        itineraryTemplate: [
            {
                title: '고대 로마 입문',
                activities: [
                    { time: '10:00', title: '콜로세움', type: 'landmark', location: 'Colosseum' },
                    { time: '13:30', title: '포로 로마노', type: 'landmark', location: 'Roman Forum' },
                    { time: '18:30', title: '트레비 분수', type: 'camera', location: 'Trevi Fountain' }
                ]
            },
            {
                title: '광장과 판테온',
                activities: [
                    { time: '10:30', title: '판테온', type: 'landmark', location: 'Pantheon' },
                    { time: '13:00', title: '나보나 광장', type: 'map', location: 'Piazza Navona' },
                    { time: '18:00', title: '젤라토 타임', type: 'coffee', location: 'Giolitti' }
                ]
            },
            {
                title: '바티칸 데이',
                activities: [
                    { time: '09:30', title: '바티칸 박물관', type: 'building-2', location: 'Vatican Museums' },
                    { time: '13:30', title: '성 베드로 대성당', type: 'landmark', location: "St. Peter's Basilica" },
                    { time: '18:30', title: '티베르 강변 산책', type: 'map', location: 'Tiber River' }
                ]
            },
            {
                title: '트라스테베레 & 미식',
                activities: [
                    { time: '10:30', title: '트라스테베레 산책', type: 'map', location: 'Trastevere' },
                    { time: '14:00', title: '로컬 파스타 런치', type: 'utensils-crossed', location: 'Trastevere Rome' },
                    { time: '19:00', title: '캄포 데 피오리', type: 'store', location: "Campo de' Fiori" }
                ]
            },
            {
                title: '마지막 스폿 & 공항',
                activities: [
                    { time: '10:00', title: '스페인 계단', type: 'camera', location: 'Spanish Steps' },
                    { time: '13:00', title: '가죽 소품 쇼핑', type: 'shopping-bag', location: 'Via del Corso' },
                    { time: '16:30', title: '피우미치노 이동', type: 'plane', location: 'Leonardo da Vinci International Airport' }
                ]
            }
        ]
    },
    barcelona: {
        id: 'barcelona',
        city: 'Barcelona',
        country: 'Spain',
        summary: '가우디, 해변, 마켓, 언덕 전망을 묶은 바르셀로나 템플릿입니다.',
        footer: 'Barcelona gets better once architecture and sea sit in the same frame.',
        heroImage: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop',
        accent: '#FB7185',
        accentRgb: '251, 113, 133',
        ink: '#4C0519',
        inkRgb: '76, 5, 25',
        overlayTop: 'rgba(76, 5, 25, 0.45)',
        overlayBottom: 'rgba(23, 23, 23, 0.9)',
        timeZone: 'Europe/Madrid',
        weather: { latitude: 41.3874, longitude: 2.1686 },
        currency: { code: 'EUR', symbol: '€', locale: 'es-ES' },
        startOffsetDays: 7,
        phraseLabel: 'Spanish phrase',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: 'La cuenta, por favor', pron: '[라 꾸엔따 뽀르 파보르]', meaning: '계산서 주세요' },
            { text: '¿Dónde está el metro?', pron: '[돈데 에스타 엘 메트로]', meaning: '지하철 어디예요?' },
            { text: 'Quiero esto', pron: '[끼에로 에스토]', meaning: '이걸로 주세요' },
            { text: 'Muy bonito', pron: '[무이 보니또]', meaning: '정말 예쁘네요' }
        ],
        itineraryTemplate: [
            {
                title: '가우디 첫인상',
                activities: [
                    { time: '10:00', title: '사그라다 파밀리아', type: 'landmark', location: 'Sagrada Família' },
                    { time: '13:30', title: '산 파우', type: 'building-2', location: 'Recinte Modernista de Sant Pau' },
                    { time: '18:30', title: '그라시아 거리', type: 'shopping-bag', location: 'Passeig de Gràcia' }
                ]
            },
            {
                title: '고딕 지구 & 마켓',
                activities: [
                    { time: '10:30', title: '고딕 지구 산책', type: 'map', location: 'Barri Gòtic' },
                    { time: '13:00', title: '라 보케리아', type: 'utensils-crossed', location: 'Mercat de la Boqueria' },
                    { time: '18:00', title: '람블라 거리', type: 'sparkles', location: 'La Rambla' }
                ]
            },
            {
                title: '언덕과 바다',
                activities: [
                    { time: '10:00', title: '구엘 공원', type: 'trees', location: 'Park Güell' },
                    { time: '14:00', title: '바르셀로네타 비치', type: 'sun', location: 'Barceloneta Beach' },
                    { time: '19:00', title: '포트 벨 산책', type: 'ship', location: 'Port Vell' }
                ]
            },
            {
                title: '몬주익 & 출발',
                activities: [
                    { time: '10:30', title: '몬주익 언덕', type: 'binoculars', location: 'Montjuïc' },
                    { time: '13:30', title: 'MNAC', type: 'palette', location: 'Museu Nacional d’Art de Catalunya' },
                    { time: '17:30', title: '엘프라트 이동', type: 'plane', location: 'Barcelona-El Prat Airport' }
                ]
            }
        ]
    },
    singapore: {
        id: 'singapore',
        city: 'Singapore',
        country: 'Singapore',
        summary: '마리나 베이, 가든스, 호커, 센토사를 빠르게 묶은 싱가포르 템플릿입니다.',
        footer: 'Singapore feels best when skyline, gardens, and food stay in one loop.',
        heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2070&auto=format&fit=crop',
        accent: '#34D399',
        accentRgb: '52, 211, 153',
        ink: '#052E2B',
        inkRgb: '5, 46, 43',
        overlayTop: 'rgba(5, 46, 43, 0.5)',
        overlayBottom: 'rgba(17, 24, 39, 0.92)',
        timeZone: 'Asia/Singapore',
        weather: { latitude: 1.3521, longitude: 103.8198 },
        currency: { code: 'SGD', symbol: 'S$', locale: 'en-SG' },
        startOffsetDays: 6,
        phraseLabel: 'Singapore phrase',
        phrases: [
            { text: 'Can, lah', pron: '[캔 라]', meaning: '가능해요 / 좋아요' },
            { text: 'Chope this seat', pron: '[초프 디스 시트]', meaning: '자리 맡아둘게요' },
            { text: 'Takeaway, please', pron: '[테이크어웨이 플리즈]', meaning: '포장해주세요' },
            { text: 'MRT station?', pron: '[엠알티 스테이션]', meaning: 'MRT 역이 어디예요?' },
            { text: 'Shiok', pron: '[시옥]', meaning: '아주 좋다 / 만족스럽다' },
            { text: 'One kopi, please', pron: '[원 코피 플리즈]', meaning: '커피 한 잔 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '마리나 베이 시작',
                activities: [
                    { time: '10:00', title: '머라이언 파크', type: 'camera', location: 'Merlion Park' },
                    { time: '13:00', title: '마리나 베이 샌즈', type: 'building', location: 'Marina Bay Sands' },
                    { time: '19:30', title: '스펙트라 쇼', type: 'sparkles', location: 'Spectra - A Light & Water Show' }
                ]
            },
            {
                title: '가든스 & 로컬푸드',
                activities: [
                    { time: '10:30', title: '가든스 바이 더 베이', type: 'trees', location: 'Gardens by the Bay' },
                    { time: '13:30', title: '라우파삿 호커', type: 'utensils-crossed', location: 'Lau Pa Sat' },
                    { time: '18:00', title: '클락키', type: 'moon-star', location: 'Clarke Quay' }
                ]
            },
            {
                title: '시티 산책',
                activities: [
                    { time: '10:30', title: '하지 레인', type: 'shopping-bag', location: 'Haji Lane' },
                    { time: '13:30', title: '캄퐁 글램', type: 'map', location: 'Kampong Glam' },
                    { time: '18:30', title: '마리나 배경 야경', type: 'binoculars', location: 'Helix Bridge' }
                ]
            },
            {
                title: '센토사 & 공항',
                activities: [
                    { time: '10:00', title: '센토사', type: 'sun', location: 'Sentosa' },
                    { time: '14:00', title: '쥬얼 창이', type: 'shopping-cart', location: 'Jewel Changi Airport' },
                    { time: '18:00', title: '출국 준비', type: 'plane', location: 'Singapore Changi Airport' }
                ]
            }
        ]
    },
    bangkok: {
        id: 'bangkok',
        city: 'Bangkok',
        country: 'Thailand',
        summary: '사원, 강변, 야시장, 루프탑을 묶은 방콕 템플릿입니다.',
        footer: 'Bangkok feels strongest when temple, market, and rooftop share one day.',
        heroImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=2070&auto=format&fit=crop',
        accent: '#F59E0B',
        accentRgb: '245, 158, 11',
        ink: '#451A03',
        inkRgb: '69, 26, 3',
        overlayTop: 'rgba(69, 26, 3, 0.48)',
        overlayBottom: 'rgba(23, 23, 23, 0.92)',
        timeZone: 'Asia/Bangkok',
        weather: { latitude: 13.7563, longitude: 100.5018 },
        currency: { code: 'THB', symbol: '฿', locale: 'th-TH' },
        startOffsetDays: 8,
        phraseLabel: 'Thai phrase',
        phrases: [
            { text: 'Sawasdee krub/ka', pron: '[사왓디 크랍/카]', meaning: '안녕하세요' },
            { text: 'Khob khun krub/ka', pron: '[컵쿤 크랍/카]', meaning: '감사합니다' },
            { text: 'Tao rai?', pron: '[타오라이]', meaning: '얼마예요?' },
            { text: 'Mai phet', pron: '[마이 펫]', meaning: '안 맵게 해주세요' },
            { text: 'Hong nam yoo tee nai?', pron: '[홍남 유 티 나이]', meaning: '화장실 어디예요?' },
            { text: 'Check bin', pron: '[첵 빈]', meaning: '계산 부탁해요' }
        ],
        itineraryTemplate: [
            {
                title: '왕궁 & 강변',
                activities: [
                    { time: '09:30', title: '왕궁', type: 'landmark', location: 'The Grand Palace' },
                    { time: '13:00', title: '왓 포', type: 'landmark', location: 'Wat Pho' },
                    { time: '18:30', title: '차오프라야 강변', type: 'ship', location: 'Chao Phraya River' }
                ]
            },
            {
                title: '로컬 마켓',
                activities: [
                    { time: '10:00', title: '짜뚜짝 마켓', type: 'shopping-bag', location: 'Chatuchak Weekend Market' },
                    { time: '14:00', title: '시암 쇼핑', type: 'shopping-cart', location: 'Siam Paragon' },
                    { time: '19:00', title: '루프탑 바', type: 'moon-star', location: 'Bangkok Rooftop Bar' }
                ]
            },
            {
                title: '올드타운 & 카페',
                activities: [
                    { time: '10:30', title: '올드타운 산책', type: 'map', location: 'Bangkok Old Town' },
                    { time: '13:30', title: '왓 아룬', type: 'camera', location: 'Wat Arun' },
                    { time: '18:00', title: '야시장', type: 'sparkles', location: 'Jodd Fairs Night Market' }
                ]
            },
            {
                title: '마지막 미식 & 출발',
                activities: [
                    { time: '10:30', title: '로컬 브런치', type: 'utensils-crossed', location: 'Bang Rak' },
                    { time: '13:30', title: '아이콘시암', type: 'building', location: 'ICONSIAM' },
                    { time: '17:30', title: '수완나품 이동', type: 'plane', location: 'Suvarnabhumi Airport' }
                ]
            }
        ]
    },
    dubai: {
        id: 'dubai',
        city: 'Dubai',
        country: 'United Arab Emirates',
        summary: '버즈 칼리파, 마리나, 사막, 올드 수크를 묶은 두바이 템플릿입니다.',
        footer: 'Dubai feels best when glass, desert, and old souks are all in frame.',
        heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop',
        accent: '#22D3EE',
        accentRgb: '34, 211, 238',
        ink: '#082F49',
        inkRgb: '8, 47, 73',
        overlayTop: 'rgba(8, 47, 73, 0.52)',
        overlayBottom: 'rgba(15, 23, 42, 0.92)',
        timeZone: 'Asia/Dubai',
        weather: { latitude: 25.2048, longitude: 55.2708 },
        currency: { code: 'AED', symbol: 'AED', locale: 'en-AE' },
        startOffsetDays: 9,
        phraseLabel: 'Arabic phrase',
        phrases: [
            { text: 'Marhaba', pron: '[마르하바]', meaning: '안녕하세요' },
            { text: 'Shukran', pron: '[슈크란]', meaning: '감사합니다' },
            { text: 'Kam hatha?', pron: '[캄 하다]', meaning: '이거 얼마예요?' },
            { text: 'Wayn al-metro?', pron: '[웨인 알 메트로]', meaning: '메트로 어디예요?' },
            { text: 'Al-hisab, min fadlak', pron: '[알 히삽 민 파들락]', meaning: '계산서 부탁합니다' },
            { text: 'Mumtaz', pron: '[뭄타즈]', meaning: '아주 좋아요' }
        ],
        itineraryTemplate: [
            {
                title: '다운타운 두바이',
                activities: [
                    { time: '10:00', title: '버즈 칼리파', type: 'tower-control', location: 'Burj Khalifa' },
                    { time: '13:30', title: '두바이 몰', type: 'shopping-cart', location: 'Dubai Mall' },
                    { time: '19:00', title: '분수 쇼', type: 'sparkles', location: 'Dubai Fountain' }
                ]
            },
            {
                title: '마리나 & 비치',
                activities: [
                    { time: '10:30', title: '마리나 워크', type: 'map', location: 'Dubai Marina Walk' },
                    { time: '14:00', title: '주메이라 비치', type: 'sun', location: 'Jumeirah Beach' },
                    { time: '18:30', title: '아인 두바이 주변', type: 'binoculars', location: 'Bluewaters Island' }
                ]
            },
            {
                title: '사막 데이',
                activities: [
                    { time: '11:00', title: '올드 두바이 수크', type: 'store', location: 'Dubai Gold Souk' },
                    { time: '15:30', title: '사막 사파리 출발', type: 'map', location: 'Dubai Desert Safari' },
                    { time: '20:00', title: '캠프 디너', type: 'utensils-crossed', location: 'Dubai Desert Camp' }
                ]
            },
            {
                title: '마지막 전망 & 이동',
                activities: [
                    { time: '10:30', title: '미래박물관', type: 'building', location: 'Museum of the Future' },
                    { time: '13:30', title: '기념품 쇼핑', type: 'gift', location: 'City Walk Dubai' },
                    { time: '17:30', title: 'DXB 이동', type: 'plane', location: 'Dubai International Airport' }
                ]
            }
        ]
    },
    amsterdam: {
        id: 'amsterdam',
        city: 'Amsterdam',
        country: 'Netherlands',
        summary: '운하, 미술관, 조르단, 시장을 자연스럽게 잇는 암스테르담 템플릿입니다.',
        footer: 'Amsterdam works best when canals, museums, and markets stay in the same rhythm.',
        heroImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2070&auto=format&fit=crop',
        accent: '#38BDF8',
        accentRgb: '56, 189, 248',
        ink: '#082F49',
        inkRgb: '8, 47, 73',
        overlayTop: 'rgba(8, 47, 73, 0.48)',
        overlayBottom: 'rgba(15, 23, 42, 0.92)',
        timeZone: 'Europe/Amsterdam',
        weather: { latitude: 52.3676, longitude: 4.9041 },
        currency: { code: 'EUR', symbol: '€', locale: 'nl-NL' },
        startOffsetDays: 7,
        phraseLabel: 'Dutch phrase',
        phrases: [
            { text: 'Hallo', pron: '[할로]', meaning: '안녕하세요' },
            { text: 'Dank je wel', pron: '[당크 여 벨]', meaning: '감사합니다' },
            { text: 'Waar is het station?', pron: '[바르 이스 헷 스타시온]', meaning: '역이 어디예요?' },
            { text: 'Mag ik de rekening?', pron: '[막 익 더 레케닝]', meaning: '계산서 주세요' },
            { text: 'Een koffie, alstublieft', pron: '[은 코피 알스투블리프트]', meaning: '커피 한 잔 주세요' },
            { text: 'Heel mooi', pron: '[힐 모이]', meaning: '정말 예쁘네요' }
        ],
        itineraryTemplate: [
            {
                title: '운하 첫인상',
                activities: [
                    { time: '10:00', title: '담 광장', type: 'landmark', location: 'Dam Square' },
                    { time: '13:30', title: '운하 크루즈', type: 'ship', location: 'Amsterdam Canal Cruise' },
                    { time: '18:30', title: '조르단 산책', type: 'map', location: 'Jordaan' }
                ]
            },
            {
                title: '뮤지엄 데이',
                activities: [
                    { time: '10:00', title: '반 고흐 미술관', type: 'palette', location: 'Van Gogh Museum' },
                    { time: '13:30', title: '뮤지엄플레인', type: 'trees', location: 'Museumplein' },
                    { time: '18:00', title: '라이체플레인', type: 'lightbulb', location: 'Leidseplein' }
                ]
            },
            {
                title: '로컬 마켓',
                activities: [
                    { time: '10:30', title: '알버트 카위프 마켓', type: 'store', location: 'Albert Cuyp Market' },
                    { time: '13:30', title: '드 파이프 카페', type: 'coffee', location: 'De Pijp' },
                    { time: '18:30', title: '운하 야경', type: 'moon-star', location: 'Magere Brug' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '10:30', title: '나인 스트리트', type: 'shopping-bag', location: 'De 9 Straatjes' },
                    { time: '13:30', title: '치즈 & 기념품', type: 'gift', location: 'Amsterdam City Center' },
                    { time: '17:30', title: '스키폴 이동', type: 'plane', location: 'Amsterdam Airport Schiphol' }
                ]
            }
        ]
    },
    madrid: {
        id: 'madrid',
        city: 'Madrid',
        country: 'Spain',
        summary: '광장, 미술관, 공원, 타파스를 균형 있게 묶은 마드리드 템플릿입니다.',
        footer: 'Madrid feels strongest when plazas, museums, and late dinners share the same pace.',
        heroImage: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop',
        accent: '#F97316',
        accentRgb: '249, 115, 22',
        ink: '#431407',
        inkRgb: '67, 20, 7',
        overlayTop: 'rgba(67, 20, 7, 0.45)',
        overlayBottom: 'rgba(23, 23, 23, 0.92)',
        timeZone: 'Europe/Madrid',
        weather: { latitude: 40.4168, longitude: -3.7038 },
        currency: { code: 'EUR', symbol: '€', locale: 'es-ES' },
        startOffsetDays: 8,
        phraseLabel: 'Spanish phrase',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: '¿Dónde está el metro?', pron: '[돈데 에스타 엘 메트로]', meaning: '지하철 어디예요?' },
            { text: 'La cuenta, por favor', pron: '[라 꾸엔따 뽀르 파보르]', meaning: '계산서 주세요' },
            { text: 'Una mesa para dos', pron: '[우나 메사 파라 도스]', meaning: '두 명 자리 부탁해요' },
            { text: 'Muy bien', pron: '[무이 비엔]', meaning: '아주 좋아요' }
        ],
        itineraryTemplate: [
            {
                title: '광장과 왕궁',
                activities: [
                    { time: '10:00', title: '푸에르타 델 솔', type: 'sparkles', location: 'Puerta del Sol' },
                    { time: '13:00', title: '마요르 광장', type: 'map', location: 'Plaza Mayor' },
                    { time: '18:00', title: '마드리드 왕궁', type: 'landmark', location: 'Royal Palace of Madrid' }
                ]
            },
            {
                title: '아트 트라이앵글',
                activities: [
                    { time: '10:30', title: '프라도 미술관', type: 'palette', location: 'Museo del Prado' },
                    { time: '14:00', title: '레티로 공원', type: 'trees', location: 'El Retiro Park' },
                    { time: '19:00', title: '그란 비아', type: 'lightbulb', location: 'Gran Via' }
                ]
            },
            {
                title: '미식 & 마지막 이동',
                activities: [
                    { time: '10:30', title: '산 미겔 시장', type: 'utensils-crossed', location: 'Mercado de San Miguel' },
                    { time: '13:30', title: '타파스 런치', type: 'coffee', location: 'La Latina' },
                    { time: '17:30', title: '바라하스 이동', type: 'plane', location: 'Adolfo Suárez Madrid-Barajas Airport' }
                ]
            }
        ]
    },
    'hong-kong': {
        id: 'hong-kong',
        city: 'Hong Kong',
        country: 'Hong Kong',
        summary: '스카이라인, 트램, 마켓, 빅토리아 피크를 압축한 홍콩 템플릿입니다.',
        footer: 'Hong Kong feels sharp when skyline, tram lines, and night markets overlap.',
        heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop',
        accent: '#A78BFA',
        accentRgb: '167, 139, 250',
        ink: '#2E1065',
        inkRgb: '46, 16, 101',
        overlayTop: 'rgba(46, 16, 101, 0.48)',
        overlayBottom: 'rgba(17, 24, 39, 0.92)',
        timeZone: 'Asia/Hong_Kong',
        weather: { latitude: 22.3193, longitude: 114.1694 },
        currency: { code: 'HKD', symbol: 'HK$', locale: 'en-HK' },
        startOffsetDays: 7,
        phraseLabel: 'Hong Kong phrase',
        phrases: [
            { text: 'M goi', pron: '[음 고이]', meaning: '고맙습니다 / 부탁합니다' },
            { text: 'Jo san', pron: '[조 산]', meaning: '좋은 아침이에요' },
            { text: 'Yat go, m goi', pron: '[얏 고 음 고이]', meaning: '하나 주세요' },
            { text: 'MTR station?', pron: '[엠티알 스테이션]', meaning: 'MTR 역이 어디예요?' },
            { text: 'Mai dan, m goi', pron: '[마이 단 음 고이]', meaning: '계산 부탁해요' },
            { text: 'Hou leng', pron: '[호 렝]', meaning: '정말 예뻐요' }
        ],
        itineraryTemplate: [
            {
                title: '센트럴 워밍업',
                activities: [
                    { time: '10:00', title: '센트럴 트램', type: 'train-front', location: 'Hong Kong Tramways' },
                    { time: '13:00', title: '소호 에스컬레이터', type: 'map', location: 'Central–Mid-Levels Escalator' },
                    { time: '18:30', title: '빅토리아 하버 야경', type: 'camera', location: 'Victoria Harbour' }
                ]
            },
            {
                title: '피크 & 카오룽',
                activities: [
                    { time: '10:30', title: '빅토리아 피크', type: 'binoculars', location: 'Victoria Peak' },
                    { time: '14:00', title: '침사추이 산책', type: 'shopping-bag', location: 'Tsim Sha Tsui' },
                    { time: '19:00', title: '심포니 오브 라이트', type: 'sparkles', location: 'A Symphony of Lights' }
                ]
            },
            {
                title: '마켓 & 출발',
                activities: [
                    { time: '10:30', title: '레이디스 마켓', type: 'store', location: 'Ladies Market' },
                    { time: '13:30', title: '딤섬 런치', type: 'utensils-crossed', location: 'Mong Kok' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Hong Kong International Airport' }
                ]
            }
        ]
    },
    sydney: {
        id: 'sydney',
        city: 'Sydney',
        country: 'Australia',
        summary: '오페라하우스, 항구, 비치, 로컬 브런치를 묶은 시드니 템플릿입니다.',
        footer: 'Sydney works when harbour icons and beach time stay in balance.',
        heroImage: 'https://images.unsplash.com/photo-1506973035872-a4f23efedd7d?q=80&w=2070&auto=format&fit=crop',
        accent: '#22C55E',
        accentRgb: '34, 197, 94',
        ink: '#052E16',
        inkRgb: '5, 46, 22',
        overlayTop: 'rgba(5, 46, 22, 0.46)',
        overlayBottom: 'rgba(17, 24, 39, 0.92)',
        timeZone: 'Australia/Sydney',
        weather: { latitude: -33.8688, longitude: 151.2093 },
        currency: { code: 'AUD', symbol: 'A$', locale: 'en-AU' },
        startOffsetDays: 9,
        phraseLabel: 'Sydney phrase',
        phrases: [
            { text: 'No worries', pron: '[노 워리즈]', meaning: '괜찮아요' },
            { text: 'Cheers', pron: '[치어즈]', meaning: '고마워요' },
            { text: 'Flat white, please', pron: '[플랫 화이트 플리즈]', meaning: '플랫화이트 주세요' },
            { text: 'Where’s the station?', pron: '[웨어즈 더 스테이션]', meaning: '역이 어디예요?' },
            { text: 'Takeaway, please', pron: '[테이크어웨이 플리즈]', meaning: '포장해주세요' },
            { text: 'Looks brilliant', pron: '[룩스 브릴리언트]', meaning: '정말 멋지네요' }
        ],
        itineraryTemplate: [
            {
                title: '하버 아이콘',
                activities: [
                    { time: '10:00', title: '오페라하우스', type: 'music', location: 'Sydney Opera House' },
                    { time: '13:00', title: '서큘러 키', type: 'ship', location: 'Circular Quay' },
                    { time: '18:00', title: '하버 브리지 야경', type: 'bridge', location: 'Sydney Harbour Bridge' }
                ]
            },
            {
                title: '비치 데이',
                activities: [
                    { time: '10:30', title: '본다이 비치', type: 'sun', location: 'Bondi Beach' },
                    { time: '13:30', title: '본다이 코스탈 워크', type: 'map', location: 'Bondi to Coogee Walk' },
                    { time: '18:30', title: '비치사이드 디너', type: 'utensils-crossed', location: 'Bondi' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:00', title: '서리힐스 브런치', type: 'coffee', location: 'Surry Hills' },
                    { time: '13:00', title: '퀸빅토리아빌딩', type: 'shopping-cart', location: 'Queen Victoria Building' },
                    { time: '17:00', title: '공항 이동', type: 'plane', location: 'Sydney Airport' }
                ]
            }
        ]
    },
    beijing: {
        id: 'beijing',
        city: 'Beijing',
        country: 'China',
        summary: '고궁, 후통, 공원, 야경을 묶은 베이징 템플릿입니다.',
        footer: 'Beijing works when imperial landmarks and hutong streets stay in one loop.',
        heroImage: 'https://unsplash.com/photos/274UL9FkpHs/download?force=true&w=1920',
        accent: '#F87171',
        accentRgb: '248, 113, 113',
        ink: '#450A0A',
        inkRgb: '69, 10, 10',
        overlayTop: 'rgba(69, 10, 10, 0.48)',
        overlayBottom: 'rgba(17, 24, 39, 0.92)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 39.9042, longitude: 116.4074 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 7,
        phraseLabel: 'Chinese phrase',
        phrases: [
            { text: 'Ni hao', pron: '[니 하오]', meaning: '안녕하세요' },
            { text: 'Xie xie', pron: '[셰셰]', meaning: '감사합니다' },
            { text: 'Qing wen', pron: '[칭 원]', meaning: '실례합니다 / 물어볼게요' }
        ],
        itineraryTemplate: [
            {
                title: '황성 워밍업',
                activities: [
                    { time: '09:30', title: '천안문 광장', type: 'landmark', location: 'Tiananmen Square' },
                    { time: '13:00', title: '자금성', type: 'landmark', location: 'Forbidden City' },
                    { time: '18:30', title: '왕푸징 야경', type: 'lightbulb', location: 'Wangfujing' }
                ]
            },
            {
                title: '후통 & 공원',
                activities: [
                    { time: '10:00', title: '후통 산책', type: 'map', location: 'Beijing Hutongs' },
                    { time: '13:30', title: '경산공원', type: 'trees', location: 'Jingshan Park' },
                    { time: '18:00', title: '북해공원 주변', type: 'camera', location: 'Beihai Park' }
                ]
            },
            {
                title: '만리장성 & 귀환',
                activities: [
                    { time: '08:30', title: '만리장성 이동', type: 'train-front', location: 'Mutianyu Great Wall' },
                    { time: '11:00', title: '만리장성', type: 'landmark', location: 'Mutianyu Great Wall' },
                    { time: '18:00', title: '공항 이동', type: 'plane', location: 'Beijing Capital International Airport' }
                ]
            }
        ]
    },
    shanghai: {
        id: 'shanghai',
        city: 'Shanghai',
        country: 'China',
        summary: '번드, 타워, 쇼핑 거리, 강변 야경을 묶은 상하이 템플릿입니다.',
        footer: 'Shanghai feels strongest when the Bund and the skyline stay in the same frame.',
        heroImage: 'https://unsplash.com/photos/mbH-HwbYL-k/download?force=true&w=1920',
        accent: '#38BDF8',
        accentRgb: '56, 189, 248',
        ink: '#082F49',
        inkRgb: '8, 47, 73',
        overlayTop: 'rgba(8, 47, 73, 0.48)',
        overlayBottom: 'rgba(15, 23, 42, 0.92)',
        timeZone: 'Asia/Shanghai',
        weather: { latitude: 31.2304, longitude: 121.4737 },
        currency: { code: 'CNY', symbol: '¥', locale: 'zh-CN' },
        startOffsetDays: 7,
        phraseLabel: 'Chinese phrase',
        phrases: [
            { text: 'Ni hao', pron: '[니 하오]', meaning: '안녕하세요' },
            { text: 'Xie xie', pron: '[셰셰]', meaning: '감사합니다' },
            { text: 'Zai na li?', pron: '[짜이 날리]', meaning: '어디에 있나요?' }
        ],
        itineraryTemplate: [
            {
                title: '번드 첫인상',
                activities: [
                    { time: '10:00', title: '와이탄 산책', type: 'map', location: 'The Bund' },
                    { time: '13:30', title: '난징동루', type: 'shopping-bag', location: 'Nanjing Road' },
                    { time: '19:00', title: '번드 야경', type: 'camera', location: 'The Bund' }
                ]
            },
            {
                title: '푸동 스카이라인',
                activities: [
                    { time: '10:30', title: '동방명주', type: 'tower-control', location: 'Oriental Pearl Tower' },
                    { time: '13:30', title: '루자주이 산책', type: 'building', location: 'Lujiazui' },
                    { time: '18:30', title: '황푸강 크루즈', type: 'ship', location: 'Huangpu River Cruise' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '10:30', title: '신천지 브런치', type: 'coffee', location: 'Xintiandi' },
                    { time: '13:30', title: '예원', type: 'landmark', location: 'Yu Garden' },
                    { time: '17:30', title: '푸동 공항 이동', type: 'plane', location: 'Shanghai Pudong International Airport' }
                ]
            }
        ]
    },
    taipei: {
        id: 'taipei',
        city: 'Taipei',
        country: 'Taiwan',
        summary: '도심 전망, 야시장, 온천, 로컬 먹거리를 묶은 타이베이 템플릿입니다.',
        footer: 'Taipei works when viewpoints, night markets, and food keep the pace light.',
        heroImage: 'https://unsplash.com/photos/S84J99BHI9g/download?force=true&w=1920',
        accent: '#22D3EE',
        accentRgb: '34, 211, 238',
        ink: '#083344',
        inkRgb: '8, 51, 68',
        overlayTop: 'rgba(8, 51, 68, 0.48)',
        overlayBottom: 'rgba(15, 23, 42, 0.92)',
        timeZone: 'Asia/Taipei',
        weather: { latitude: 25.0330, longitude: 121.5654 },
        currency: { code: 'TWD', symbol: 'NT$', locale: 'zh-TW' },
        startOffsetDays: 6,
        phraseLabel: 'Taiwan phrase',
        phrases: [
            { text: 'Ni hao', pron: '[니 하오]', meaning: '안녕하세요' },
            { text: 'Xie xie', pron: '[셰셰]', meaning: '감사합니다' },
            { text: 'Qing wen', pron: '[칭 원]', meaning: '실례합니다 / 물어볼게요' }
        ],
        itineraryTemplate: [
            {
                title: '도심 전망',
                activities: [
                    { time: '10:00', title: '타이베이 101', type: 'tower-control', location: 'Taipei 101' },
                    { time: '13:30', title: '신이 지구', type: 'shopping-cart', location: 'Xinyi District' },
                    { time: '19:00', title: '라오허 야시장', type: 'sparkles', location: 'Raohe Night Market' }
                ]
            },
            {
                title: '로컬 산책',
                activities: [
                    { time: '10:30', title: '중정기념당', type: 'landmark', location: 'Chiang Kai-shek Memorial Hall' },
                    { time: '13:00', title: '용산사', type: 'landmark', location: 'Lungshan Temple' },
                    { time: '18:00', title: '시먼딩', type: 'lightbulb', location: 'Ximending' }
                ]
            },
            {
                title: '온천 & 귀환',
                activities: [
                    { time: '10:00', title: '베이터우 온천', type: 'sun', location: 'Beitou Hot Spring' },
                    { time: '13:30', title: '딘타이펑 런치', type: 'utensils-crossed', location: 'Din Tai Fung Taipei' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Taiwan Taoyuan International Airport' }
                ]
            }
        ]
    },
    hanoi: {
        id: 'hanoi',
        city: 'Hanoi',
        country: 'Vietnam',
        summary: '호수, 올드쿼터, 카페, 야시장을 묶은 하노이 템플릿입니다.',
        footer: 'Hanoi feels best when lakes, old streets, and food stops move at an easy pace.',
        heroImage: 'https://unsplash.com/photos/pllzIJ92XHM/download?force=true&w=1920',
        accent: '#4ADE80',
        accentRgb: '74, 222, 128',
        ink: '#052E16',
        inkRgb: '5, 46, 22',
        overlayTop: 'rgba(5, 46, 22, 0.48)',
        overlayBottom: 'rgba(17, 24, 39, 0.92)',
        timeZone: 'Asia/Ho_Chi_Minh',
        weather: { latitude: 21.0278, longitude: 105.8342 },
        currency: { code: 'VND', symbol: '₫', locale: 'vi-VN' },
        startOffsetDays: 7,
        phraseLabel: 'Vietnamese phrase',
        phrases: [
            { text: 'Xin chao', pron: '[씬 짜오]', meaning: '안녕하세요' },
            { text: 'Cam on', pron: '[깜 언]', meaning: '감사합니다' },
            { text: 'Cho toi cai nay', pron: '[쪼 또이 까이 나이]', meaning: '이거 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '호수와 구시가지',
                activities: [
                    { time: '10:00', title: '호안끼엠 호수', type: 'map', location: 'Hoan Kiem Lake' },
                    { time: '13:30', title: '올드쿼터 산책', type: 'store', location: 'Hanoi Old Quarter' },
                    { time: '18:30', title: '맥주거리', type: 'moon-star', location: 'Ta Hien Street' }
                ]
            },
            {
                title: '로컬 감도',
                activities: [
                    { time: '10:30', title: '문묘', type: 'landmark', location: 'Temple of Literature' },
                    { time: '13:00', title: '에그커피 카페', type: 'coffee', location: 'Giang Cafe' },
                    { time: '18:00', title: '야시장', type: 'sparkles', location: 'Hanoi Night Market' }
                ]
            },
            {
                title: '마지막 한 끼 & 출발',
                activities: [
                    { time: '10:30', title: '분짜 런치', type: 'utensils-crossed', location: 'Bun Cha Huong Lien' },
                    { time: '13:30', title: '기념품 쇼핑', type: 'gift', location: 'Trang Tien Plaza' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Noi Bai International Airport' }
                ]
            }
        ]
    },
    'ho-chi-minh-city': {
        id: 'ho-chi-minh-city',
        city: 'Ho Chi Minh City',
        country: 'Vietnam',
        summary: '도심 랜드마크, 카페, 마켓, 강변 야경을 묶은 호치민 템플릿입니다.',
        footer: 'Ho Chi Minh City works when cafes, markets, and skyline views stay close together.',
        heroImage: 'https://unsplash.com/photos/aVbSvuJTUxA/download?force=true&w=1920',
        accent: '#FACC15',
        accentRgb: '250, 204, 21',
        ink: '#422006',
        inkRgb: '66, 32, 6',
        overlayTop: 'rgba(66, 32, 6, 0.48)',
        overlayBottom: 'rgba(17, 24, 39, 0.92)',
        timeZone: 'Asia/Ho_Chi_Minh',
        weather: { latitude: 10.8231, longitude: 106.6297 },
        currency: { code: 'VND', symbol: '₫', locale: 'vi-VN' },
        startOffsetDays: 7,
        phraseLabel: 'Vietnamese phrase',
        phrases: [
            { text: 'Xin chao', pron: '[씬 짜오]', meaning: '안녕하세요' },
            { text: 'Cam on', pron: '[깜 언]', meaning: '감사합니다' },
            { text: 'Tinh tien', pron: '[띵 띠엔]', meaning: '계산해 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '도심 중심부',
                activities: [
                    { time: '10:00', title: '노트르담 성당', type: 'landmark', location: 'Notre Dame Cathedral of Saigon' },
                    { time: '13:00', title: '중앙우체국', type: 'building', location: 'Saigon Central Post Office' },
                    { time: '18:30', title: '응우옌후에 거리', type: 'lightbulb', location: 'Nguyen Hue Walking Street' }
                ]
            },
            {
                title: '마켓 & 카페',
                activities: [
                    { time: '10:30', title: '벤탄시장', type: 'shopping-bag', location: 'Ben Thanh Market' },
                    { time: '13:30', title: '로컬 카페', type: 'coffee', location: 'District 1 Ho Chi Minh City' },
                    { time: '18:30', title: '사이공 스카이덱', type: 'binoculars', location: 'Bitexco Financial Tower' }
                ]
            },
            {
                title: '강변 & 귀환',
                activities: [
                    { time: '10:30', title: '투득 강변 산책', type: 'map', location: 'Saigon River' },
                    { time: '13:30', title: '반미 런치', type: 'utensils-crossed', location: 'District 1 Ho Chi Minh City' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Tan Son Nhat International Airport' }
                ]
            }
        ]
    }
};

const DEFAULT_DESTINATION_ID = DESTINATIONS['hong-kong'] ? 'hong-kong' : Object.keys(DESTINATIONS)[0];
const ACTIVITY_ICON_VALUES = new Set(ACTIVITY_ICON_OPTIONS.map((option) => option.value));

const appState = {
    destinationId: DEFAULT_DESTINATION_ID,
    startDate: '',
    endDate: '',
    itinerary: [],
    currentWeather: null,
    weatherMode: 'loading',
    phraseIndex: 0,
    hasStarted: false,
    customized: false
};

let activityEditorState = {
    dayIndex: null,
    activityId: null,
    icon: ''
};

let setupSelection = {
    destinationId: DEFAULT_DESTINATION_ID,
    startDate: '',
    endDate: ''
};

let idCounter = 0;
let shareStatusTimer = null;
let currentExchangeRate = null;
let isExchangeLoading = false;
let mapPreviewTimer = null;
let mapPreviewRequestId = 0;
let utilityChromeTimer = null;
let exchangeInputDestinationId = null;
let exchangeInputsTouched = false;

const COUNTRY_FLAGS = {
    France: '🇫🇷',
    'United Kingdom': '🇬🇧',
    'United States': '🇺🇸',
    Japan: '🇯🇵',
    Italy: '🇮🇹',
    Spain: '🇪🇸',
    Singapore: '🇸🇬',
    Thailand: '🇹🇭',
    'United Arab Emirates': '🇦🇪',
    Netherlands: '🇳🇱',
    'Hong Kong': '🇭🇰',
    Australia: '🇦🇺',
    China: '🇨🇳',
    Taiwan: '🇹🇼',
    Vietnam: '🇻🇳'
};

const CURRENCY_DENOMINATIONS = {
    EUR: [5, 10, 20, 50, 100, 200],
    GBP: [5, 10, 20, 50],
    USD: [1, 5, 10, 20, 50, 100],
    JPY: [100, 500, 1000, 5000, 10000],
    HKD: [10, 20, 50, 100, 500, 1000],
    SGD: [2, 5, 10, 50, 100],
    THB: [20, 50, 100, 500, 1000],
    AED: [5, 10, 20, 50, 100, 200],
    AUD: [5, 10, 20, 50, 100],
    CNY: [1, 5, 10, 20, 50, 100],
    TWD: [10, 50, 100, 500, 1000],
    VND: [1000, 2000, 5000, 10000, 20000, 50000, 100000]
};

const CURRENCY_DISPLAY = {
    EUR: '€',
    GBP: '£',
    USD: '$',
    JPY: '円',
    HKD: 'HK$',
    SGD: 'S$',
    THB: '฿',
    AED: 'د.إ',
    AUD: 'A$',
    CNY: '元',
    TWD: 'NT$',
    VND: '₫'
};

const LOCATION_LABELS = {
    France: '프랑스',
    'United Kingdom': '영국',
    'United States': '미국',
    Japan: '일본',
    Italy: '이탈리아',
    Spain: '스페인',
    Singapore: '싱가포르',
    Thailand: '태국',
    'United Arab Emirates': '아랍에미리트',
    Netherlands: '네덜란드',
    'Hong Kong': '홍콩',
    Australia: '호주',
    China: '중국',
    Taiwan: '대만',
    Vietnam: '베트남',
    Paris: '파리',
    London: '런던',
    'New York': '뉴욕',
    'Los Angeles': '로스앤젤레스',
    Tokyo: '도쿄',
    Rome: '로마',
    Barcelona: '바르셀로나',
    Singapore_city: '싱가포르',
    Bangkok: '방콕',
    Dubai: '두바이',
    Amsterdam: '암스테르담',
    Madrid: '마드리드',
    Sydney: '시드니',
    Beijing: '베이징',
    Shanghai: '상하이',
    Taipei: '타이베이',
    Hanoi: '하노이',
    'Ho Chi Minh City': '호치민',
    'Hong Kong_city': '홍콩'
};

const DEFAULT_BASE_AMOUNTS = {
    EUR: 10,
    GBP: 10,
    USD: 10,
    JPY: 1000,
    HKD: 20,
    SGD: 10,
    THB: 100,
    AED: 10,
    AUD: 10,
    CNY: 10,
    TWD: 100,
    VND: 10000
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -48px 0px'
});

const ui = {
    heroImage: document.getElementById('hero-image'),
    tripShell: document.getElementById('trip-shell'),
    setupOverlay: document.getElementById('setup-overlay'),
    destinationSelector: document.getElementById('destination-selector'),
    destinationDropdownTrigger: document.getElementById('destination-dropdown-trigger'),
    destinationDropdownValue: document.getElementById('destination-dropdown-value'),
    destinationDropdownMeta: document.getElementById('destination-dropdown-meta'),
    destinationCount: document.getElementById('destination-count'),
    setupStartDate: document.getElementById('setup-start-date'),
    setupEndDate: document.getElementById('setup-end-date'),
    applyPlanBtn: document.getElementById('apply-plan-btn'),
    destinationClockLabel: document.getElementById('destination-clock-label'),
    timeSeoul: document.getElementById('time-seoul'),
    dateSeoul: document.getElementById('date-seoul'),
    timeDestination: document.getElementById('time-destination'),
    dateDestination: document.getElementById('date-destination'),
    rateBaseInput: document.getElementById('rate-base-input'),
    rateKrwInput: document.getElementById('rate-krw-input'),
    baseCurrencyLabel: document.getElementById('base-currency-label'),
    rateToKrw: document.getElementById('rate-to-krw'),
    rateFromKrw: document.getElementById('rate-from-krw'),
    tripCountryChip: document.getElementById('trip-country-chip'),
    tripTitle: document.getElementById('trip-title'),
    tripSummary: document.getElementById('trip-summary'),
    tripLength: document.getElementById('trip-length'),
    tripWindow: document.getElementById('trip-window'),
    tripWeatherLabel: document.getElementById('trip-weather-label'),
    phraseLabel: document.getElementById('phrase-label'),
    phraseText: document.getElementById('phrase-text'),
    phraseMeta: document.getElementById('phrase-meta'),
    phraseRefreshBtn: document.getElementById('phrase-refresh-btn'),
    sharePlanBtn: document.getElementById('share-plan-btn'),
    resetPlanBtn: document.getElementById('reset-plan-btn'),
    shareStatus: document.getElementById('share-status'),
    prependDayBtn: document.getElementById('prepend-day-btn'),
    removeFirstDayBtn: document.getElementById('remove-first-day-btn'),
    removeLastDayBtn: document.getElementById('remove-last-day-btn'),
    appendDayBtn: document.getElementById('append-day-btn'),
    itineraryContainer: document.getElementById('itinerary-container'),
    footerNote: document.getElementById('footer-note'),
    activityModal: document.getElementById('activity-modal'),
    activityCloseBtn: document.getElementById('activity-close-btn'),
    activityCancelBtn: document.getElementById('activity-cancel-btn'),
    activitySaveBtn: document.getElementById('activity-save-btn'),
    activityDeleteBtn: document.getElementById('activity-delete-btn'),
    activityModalTitle: document.getElementById('activity-modal-title'),
    activityTime: document.getElementById('activity-time'),
    activityLocation: document.getElementById('activity-location'),
    activityIconTrigger: document.getElementById('activity-icon-trigger'),
    activityIconPreview: document.getElementById('activity-icon-preview'),
    activityIconLabel: document.getElementById('activity-icon-label'),
    activityMapFrame: document.getElementById('activity-map-frame'),
    activityMapLink: document.getElementById('activity-map-link'),
    activityMapStatus: document.getElementById('activity-map-status'),
    activityMemo: document.getElementById('activity-memo'),
    iconPickerModal: document.getElementById('icon-picker-modal'),
    iconPickerGrid: document.getElementById('icon-picker-grid'),
    iconPickerCloseBtn: document.getElementById('icon-picker-close-btn'),
    iconPickerCancelBtn: document.getElementById('icon-picker-cancel-btn')
};

function createId(prefix) {
    idCounter += 1;
    return `${prefix}-${Date.now()}-${idCounter}`;
}

function escapeHtml(value = '') {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function getDestination(id) {
    return DESTINATIONS[id] || DESTINATIONS[DEFAULT_DESTINATION_ID] || DESTINATIONS.paris;
}

function getLocalizedLabel(value, fallback = '') {
    return LOCATION_LABELS[value] || fallback || value;
}

function getSelectableDestinations() {
    const grouped = new Map();

    Object.values(DESTINATIONS).forEach((destination) => {
        const key = `${destination.country}::${destination.timeZone}`;
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key).push(destination);
    });

    const countryZoneCounts = new Map();
    grouped.forEach((destinations) => {
        const country = destinations[0].country;
        countryZoneCounts.set(country, (countryZoneCounts.get(country) || 0) + 1);
    });

    return Array.from(grouped.values()).map((destinations) => {
        const representative = destinations[0];
        const hasMultipleZones = (countryZoneCounts.get(representative.country) || 0) > 1;

        return {
            id: representative.id,
            country: representative.country,
            primaryLabel: getLocalizedLabel(representative.country),
            secondaryLabel: hasMultipleZones ? getLocalizedLabel(representative.city, representative.city) : '',
            timeZone: representative.timeZone
        };
    });
}

function getSelectableDestinationId(id) {
    const destination = getDestination(id);
    const match = getSelectableDestinations().find((entry) =>
        entry.country === destination.country && entry.timeZone === destination.timeZone
    );
    return match?.id || destination.id;
}

function getLocalNow(timeZone) {
    return new Date(new Date().toLocaleString('en-US', { timeZone }));
}

function parseYmd(value) {
    const [year, month, day] = (value || '').split('-').map(Number);
    if (!year || !month || !day) return null;
    const date = new Date(year, month - 1, day);
    date.setHours(0, 0, 0, 0);
    return Number.isNaN(date.getTime()) ? null : date;
}

function formatYmd(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function formatMonthDay(date) {
    return `${date.getMonth() + 1}.${String(date.getDate()).padStart(2, '0')}`;
}

function addDays(date, amount) {
    const next = new Date(date);
    next.setDate(next.getDate() + amount);
    return next;
}

function countDaysInclusive(startDate, endDate) {
    return Math.floor((endDate.getTime() - startDate.getTime()) / 86400000) + 1;
}

function sortActivities(day) {
    day.activities.sort((left, right) => left.time.localeCompare(right.time));
}

function cloneTemplateActivity(activity) {
    return {
        id: createId('activity'),
        time: activity.time,
        title: activity.title,
        location: activity.location,
        type: activity.type,
        memo: activity.memo || ''
    };
}

function getSuggestedStartDate(destination) {
    const now = getLocalNow(destination.timeZone);
    now.setHours(0, 0, 0, 0);
    now.setDate(now.getDate() + destination.startOffsetDays);
    return formatYmd(now);
}

function getSuggestedDateRange(destination) {
    const startDate = getSuggestedStartDate(destination);
    const templateLength = Math.max(destination.itineraryTemplate.length, 1);
    const endDate = formatYmd(addDays(parseYmd(startDate), templateLength - 1));
    return { startDate, endDate };
}

function normalizeDateRange(startValue, endValue, destination) {
    const suggested = getSuggestedDateRange(destination);
    const startDate = parseYmd(startValue) ? startValue : suggested.startDate;
    let endDate = parseYmd(endValue) ? endValue : formatYmd(addDays(parseYmd(startDate), destination.itineraryTemplate.length - 1));

    if (parseYmd(endDate) < parseYmd(startDate)) {
        endDate = startDate;
    }

    return { startDate, endDate };
}

function buildTemplateTitle(destination, dayIndex) {
    const templateLength = destination.itineraryTemplate.length;
    const template = destination.itineraryTemplate[dayIndex % templateLength];
    const cycle = Math.floor(dayIndex / templateLength);
    return cycle ? `${template.title} · ${cycle + 1}` : template.title;
}

function buildItineraryFromRange(destinationId, startDate, endDate) {
    const destination = getDestination(destinationId);
    const baseDate = parseYmd(startDate);
    const finalDate = parseYmd(endDate);
    const dayCount = countDaysInclusive(baseDate, finalDate);
    const templateLength = destination.itineraryTemplate.length;

    return Array.from({ length: dayCount }, (_, dayIndex) => {
        const currentDate = addDays(baseDate, dayIndex);
        const template = destination.itineraryTemplate[dayIndex % templateLength];

        return {
            id: createId('day'),
            date: formatYmd(currentDate),
            day: DAY_LABELS[currentDate.getDay()],
            title: buildTemplateTitle(destination, dayIndex),
            activities: template.activities.map((activity) => cloneTemplateActivity(activity))
        };
    });
}

function buildItineraryFromSharedPayload(destinationId, startDate, endDate, serializedDays = []) {
    const templateItinerary = buildItineraryFromRange(destinationId, startDate, endDate);

    return templateItinerary.map((day, dayIndex) => {
        const sourceDay = serializedDays[dayIndex];
        if (!sourceDay) return day;

        const nextActivities = Array.isArray(sourceDay.a) && sourceDay.a.length
            ? sourceDay.a.map((activity) => ({
                id: createId('activity'),
                time: typeof activity.h === 'string' && activity.h ? activity.h : '09:00',
                title: typeof activity.n === 'string' && activity.n
                    ? activity.n
                    : (typeof activity.l === 'string' && activity.l.trim() ? activity.l.trim() : '일정'),
                location: typeof activity.l === 'string' ? activity.l : '',
                type: typeof activity.k === 'string' && (ACTIVITY_ICON_VALUES.has(activity.k) || activity.k === '') ? activity.k : '',
                memo: typeof activity.m === 'string' ? activity.m : ''
            }))
            : day.activities;

        return {
            ...day,
            title: typeof sourceDay.t === 'string' && sourceDay.t.trim() ? sourceDay.t.trim() : day.title,
            activities: nextActivities
        };
    });
}

function buildSharePayload() {
    return {
        v: 2,
        d: getSelectableDestinationId(appState.destinationId),
        s: appState.startDate,
        e: appState.endDate,
        i: appState.itinerary.map((day) => ({
            a: day.activities.map((activity) => ({
                h: activity.time,
                l: activity.location,
                k: activity.type,
                m: activity.memo || ''
            }))
        }))
    };
}

function encodePlan(payload) {
    const json = JSON.stringify(payload);
    const bytes = new TextEncoder().encode(json);
    let binary = '';

    bytes.forEach((byte) => {
        binary += String.fromCharCode(byte);
    });

    return btoa(binary)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/g, '');
}

function decodePlan(value) {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    return JSON.parse(json);
}

function setScrollLock(locked) {
    document.body.style.overflow = locked ? 'hidden' : '';
}

function updateBodyScrollLock() {
    const shouldLock = !ui.setupOverlay.classList.contains('hidden')
        || !ui.activityModal.classList.contains('hidden')
        || !ui.iconPickerModal.classList.contains('hidden');
    setScrollLock(shouldLock);
}

function getCountryFlag(country) {
    return COUNTRY_FLAGS[country] || '🌍';
}

function showUtilityChrome() {
    if (utilityChromeTimer) {
        window.clearTimeout(utilityChromeTimer);
        utilityChromeTimer = null;
    }
    document.body.classList.remove('ui-busy');
}

function hideUtilityChrome() {
    document.body.classList.remove('ui-busy');
}

function scheduleUtilityChrome() {
    showUtilityChrome();
}

function setShareStatus(message = '') {
    if (shareStatusTimer) {
        window.clearTimeout(shareStatusTimer);
        shareStatusTimer = null;
    }

    ui.shareStatus.textContent = message;

    if (message) {
        shareStatusTimer = window.setTimeout(() => {
            ui.shareStatus.textContent = '';
        }, 3200);
    }
}

function applyTheme(destination) {
    document.documentElement.style.setProperty('--accent', destination.accent);
    document.documentElement.style.setProperty('--accent-rgb', destination.accentRgb);
    document.documentElement.style.setProperty('--ink', destination.ink);
    document.documentElement.style.setProperty('--ink-rgb', destination.inkRgb);
    document.documentElement.style.setProperty('--overlay-top', destination.overlayTop);
    document.documentElement.style.setProperty('--overlay-bottom', destination.overlayBottom);

    ui.heroImage.src = destination.heroImage;
    ui.heroImage.alt = `${destination.city}, ${destination.country}`;
    document.title = `${destination.country} Trip Plan`;
}

function getActivityIconOption(value) {
    return ACTIVITY_ICON_OPTIONS.find((option) => option.value === value) || null;
}

function getRenderableActivityIcon(value) {
    return ACTIVITY_ICON_VALUES.has(value) ? value : 'map-pin';
}

function getMapsSearchUrl(location) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
}

function getDirectionsUrl(origin, destination) {
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`;
}

function getDayDirectionsUrl(activities = []) {
    const validLocations = activities.map((activity) => activity.location?.trim()).filter(Boolean);
    if (validLocations.length < 2) return '';

    const origin = validLocations[0];
    const destination = validLocations[validLocations.length - 1];
    const waypoints = validLocations.slice(1, -1);
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    if (waypoints.length) {
        url.searchParams.set('waypoints', waypoints.join('|'));
    }
    return url.toString();
}

function getMapPreviewEmbedUrl(latitude, longitude) {
    const latDelta = 0.01;
    const lonDelta = 0.015;
    const west = longitude - lonDelta;
    const south = latitude - latDelta;
    const east = longitude + lonDelta;
    const north = latitude + latDelta;
    return `https://www.openstreetmap.org/export/embed.html?bbox=${west},${south},${east},${north}&layer=mapnik&marker=${latitude},${longitude}`;
}

function parseAmountInput(value) {
    const normalized = String(value || '').replaceAll(',', '').trim();
    if (!normalized) return null;

    const amount = Number(normalized);
    if (!Number.isFinite(amount) || amount < 0) return null;
    return amount;
}

function formatExchangeValue(value, locale, maximumFractionDigits = 2) {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: value !== 0 && Math.abs(value) < 1 ? Math.min(maximumFractionDigits, 4) : 0,
        maximumFractionDigits: value !== 0 && Math.abs(value) < 1 ? Math.max(maximumFractionDigits, 4) : maximumFractionDigits
    }).format(value);
}

function getCurrencyDisplay(code, fallbackSymbol = '') {
    return CURRENCY_DISPLAY[code] || fallbackSymbol || code;
}

function getSuggestedBaseAmount(destination, exchangeRate) {
    const curatedAmount = DEFAULT_BASE_AMOUNTS[destination.currency.code];
    if (curatedAmount) return curatedAmount;

    const candidates = CURRENCY_DENOMINATIONS[destination.currency.code] || [1, 2, 5, 10, 20, 50, 100];
    const targetKrw = 1000;

    return candidates.reduce((best, candidate) => {
        const currentDistance = Math.abs((candidate * exchangeRate) - targetKrw);
        const bestDistance = Math.abs((best * exchangeRate) - targetKrw);
        return currentDistance < bestDistance ? candidate : best;
    }, candidates[0]);
}

function syncExchangeInputDefaults(force = false) {
    const destination = getDestination(appState.destinationId);

    if (exchangeInputDestinationId !== destination.id) {
        exchangeInputDestinationId = destination.id;
        exchangeInputsTouched = false;
    }

    if (exchangeInputsTouched && !force) return;

    ui.rateKrwInput.value = '1000';
    ui.rateBaseInput.value = currentExchangeRate
        ? String(getSuggestedBaseAmount(destination, currentExchangeRate))
        : '1';
}

function updateExchangeOutputs() {
    const destination = getDestination(appState.destinationId);
    const currencyDisplay = getCurrencyDisplay(destination.currency.code, destination.currency.symbol);

    if (!currentExchangeRate) {
        const loadingMessage = isExchangeLoading ? '실시간 환율을 불러오는 중입니다.' : '환율을 불러오지 못했습니다.';
        ui.rateToKrw.textContent = loadingMessage;
        ui.rateFromKrw.textContent = loadingMessage;
        return;
    }

    const baseAmount = parseAmountInput(ui.rateBaseInput.value);
    const krwAmount = parseAmountInput(ui.rateKrwInput.value);

    if (baseAmount === null) {
        ui.rateToKrw.textContent = `${currencyDisplay} 금액을 입력하세요.`;
    } else {
        const convertedKrw = baseAmount * currentExchangeRate;
        ui.rateToKrw.textContent = `${formatExchangeValue(convertedKrw, 'ko-KR', 2)} ₩`;
    }

    if (krwAmount === null) {
        ui.rateFromKrw.textContent = '원화 금액을 입력하세요.';
    } else {
        const convertedCurrency = krwAmount / currentExchangeRate;
        ui.rateFromKrw.textContent = `${formatExchangeValue(convertedCurrency, destination.currency.locale, 2)} ${currencyDisplay}`;
    }
}

function renderIconPicker() {
    const currentValue = activityEditorState.icon || '';
    const iconButtons = ACTIVITY_ICON_OPTIONS.map((option) => {
        const isActive = option.value === currentValue;
        const activeStyle = isActive
            ? `style="border-color: rgba(var(--accent-rgb), 0.7); background: rgba(var(--accent-rgb), 0.14);"`
            : '';

        return `
            <button
                type="button"
                class="rounded-[22px] border border-white/10 bg-white/5 p-4 text-left text-white transition-colors hover:bg-white/10"
                data-icon-choice="${option.value}"
                ${activeStyle}>
                <div class="flex items-center gap-3">
                    <span class="p-2 rounded-xl accent-icon shrink-0">
                        <i data-lucide="${option.value}" class="w-4 h-4"></i>
                    </span>
                    <span class="text-sm font-semibold">${escapeHtml(option.label)}</span>
                </div>
            </button>
        `;
    }).join('');

    ui.iconPickerGrid.innerHTML = `
        <button
            type="button"
            class="rounded-[22px] border border-white/10 bg-white/5 p-4 text-left text-white transition-colors hover:bg-white/10"
            data-icon-choice=""
            ${currentValue === '' ? `style="border-color: rgba(var(--accent-rgb), 0.7); background: rgba(var(--accent-rgb), 0.14);"` : ''}>
            <div class="flex items-center gap-3">
                <span class="p-2 rounded-xl border border-dashed border-white/18 bg-white/5 shrink-0">
                    <i data-lucide="map-pin" class="w-4 h-4"></i>
                </span>
                <span class="text-sm font-semibold">아이콘 없이 저장</span>
            </div>
        </button>
        ${iconButtons}
    `;

    lucide.createIcons();
}

function renderActivityIconSelection() {
    const option = getActivityIconOption(activityEditorState.icon);
    ui.activityIconLabel.textContent = option ? option.label : '아이콘 선택 안 함';
    ui.activityIconPreview.innerHTML = `<i data-lucide="${getRenderableActivityIcon(activityEditorState.icon)}" class="w-4 h-4"></i>`;
    lucide.createIcons();
}

function updateActivityMapPreview() {
    const location = ui.activityLocation.value.trim();
    const requestId = ++mapPreviewRequestId;
    ui.activityMapLink.href = location ? getMapsSearchUrl(location) : 'https://www.google.com/maps';

    if (mapPreviewTimer) {
        window.clearTimeout(mapPreviewTimer);
        mapPreviewTimer = null;
    }

    if (!location) {
        ui.activityMapFrame.src = 'about:blank';
        ui.activityMapStatus.textContent = '장소를 입력하면 여기서 바로 구글 지도를 미리 볼 수 있습니다.';
        return;
    }

    ui.activityMapFrame.src = 'about:blank';
    ui.activityMapStatus.textContent = `지도를 찾는 중입니다. Google Maps 버튼으로도 바로 검색할 수 있습니다.`;

    mapPreviewTimer = window.setTimeout(async () => {
        try {
            const response = await fetch(`https://photon.komoot.io/api/?q=${encodeURIComponent(location)}&limit=1`);
            if (!response.ok) throw new Error('Map search failed');

            const data = await response.json();
            if (requestId !== mapPreviewRequestId) return;

            const feature = Array.isArray(data?.features) ? data.features[0] : null;
            const coordinates = Array.isArray(feature?.geometry?.coordinates) ? feature.geometry.coordinates : null;
            if (!coordinates || coordinates.length < 2) throw new Error('Missing map coordinates');

            const [longitude, latitude] = coordinates;
            ui.activityMapFrame.src = getMapPreviewEmbedUrl(latitude, longitude);
            ui.activityMapStatus.textContent = `미리보기 지도는 OpenStreetMap 기준으로 "${location}" 주변을 보여줍니다.`;
        } catch (error) {
            if (requestId !== mapPreviewRequestId) return;
            console.warn('Map preview lookup failed:', error);
            ui.activityMapFrame.src = 'about:blank';
            ui.activityMapStatus.textContent = '이 위치는 미리보기를 찾지 못했습니다. Google Maps 버튼으로 바로 검색할 수 있습니다.';
        }
    }, 320);
}

function openIconPicker() {
    renderIconPicker();
    ui.iconPickerModal.classList.remove('hidden');
    updateBodyScrollLock();
}

function closeIconPicker() {
    ui.iconPickerModal.classList.add('hidden');
    updateBodyScrollLock();
}

function applyActivityIconSelection(value) {
    activityEditorState.icon = ACTIVITY_ICON_VALUES.has(value) ? value : '';
    renderActivityIconSelection();
    renderIconPicker();
}

function setRandomPhrase(destinationId) {
    const destination = getDestination(destinationId);
    const phraseCount = Array.isArray(destination.phrases) ? destination.phrases.length : 0;
    appState.phraseIndex = phraseCount ? Math.floor(Math.random() * phraseCount) : 0;
}

function cyclePhrase() {
    const destination = getDestination(appState.destinationId);
    const phraseCount = Array.isArray(destination.phrases) ? destination.phrases.length : 0;
    if (!phraseCount) return;

    appState.phraseIndex = (appState.phraseIndex + 1) % phraseCount;
    renderPhrase();
}

function renderPhrase() {
    const destination = getDestination(appState.destinationId);
    const phrases = Array.isArray(destination.phrases) ? destination.phrases : [];
    const phrase = phrases[appState.phraseIndex] || phrases[0];

    ui.phraseLabel.textContent = destination.phraseLabel || 'Phrase';
    ui.phraseText.textContent = phrase?.text || 'Hello';
    ui.phraseMeta.textContent = phrase ? `${phrase.pron} · ${phrase.meaning}` : `${destination.city} trip`;
}

function renderUtilityInfo() {
    const destination = getDestination(appState.destinationId);
    ui.destinationClockLabel.textContent = getCountryFlag(destination.country);
    ui.baseCurrencyLabel.textContent = getCurrencyDisplay(destination.currency.code, destination.currency.symbol);
    syncExchangeInputDefaults();
    updateExchangeOutputs();
    renderPhrase();
}

function renderDestinationSelector() {
    ui.destinationSelector.innerHTML = '';
    const selectableDestinations = getSelectableDestinations();
    ui.destinationCount.textContent = `${selectableDestinations.length}곳`;

    selectableDestinations.forEach((destination) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `dropdown-option w-full rounded-[18px] border border-white/10 bg-slate-900 px-4 py-3 text-left transition-colors hover:bg-slate-800 ${destination.id === setupSelection.destinationId ? 'active' : ''}`;
        button.dataset.destination = destination.id;
        button.innerHTML = `
            <div class="flex items-center justify-between gap-3">
                <div class="min-w-0">
                    <div class="text-base font-semibold text-white truncate">${escapeHtml(destination.primaryLabel)}</div>
                    <div class="text-sm text-white/62 truncate">${escapeHtml(destination.secondaryLabel || '대표 시간대')}</div>
                </div>
                <div class="text-lg shrink-0">${getCountryFlag(destination.country)}</div>
            </div>
        `;
        ui.destinationSelector.appendChild(button);
    });

    const selectedDestination = selectableDestinations.find((destination) => destination.id === setupSelection.destinationId)
        || selectableDestinations[0];
    if (selectedDestination) {
        ui.destinationDropdownValue.textContent = selectedDestination.primaryLabel;
        ui.destinationDropdownMeta.textContent = selectedDestination.secondaryLabel || '대표 시간대';
    }
}

function renderSetupInputs() {
    ui.setupStartDate.value = setupSelection.startDate;
    ui.setupEndDate.value = setupSelection.endDate;
}

function openDestinationDropdown() {
    ui.destinationSelector.classList.remove('hidden');
}

function closeDestinationDropdown() {
    ui.destinationSelector.classList.add('hidden');
}

function toggleDestinationDropdown() {
    ui.destinationSelector.classList.toggle('hidden');
}

function showSetupOverlay() {
    ui.setupOverlay.classList.remove('hidden');
    ui.tripShell.classList.add('hidden');
    document.body.classList.remove('ui-busy');
    closeDestinationDropdown();
    updateBodyScrollLock();
}

function hideSetupOverlay() {
    ui.setupOverlay.classList.add('hidden');
    ui.tripShell.classList.remove('hidden');
    updateBodyScrollLock();
}

function renderStaticSummary() {
    const destination = getDestination(appState.destinationId);
    const firstDay = appState.itinerary[0];
    const lastDay = appState.itinerary[appState.itinerary.length - 1];

    ui.tripCountryChip.textContent = `${destination.country} · ${destination.city}`;
    ui.tripTitle.textContent = destination.city;
    ui.tripSummary.textContent = destination.summary;
    ui.tripLength.textContent = `${appState.itinerary.length} days`;
    ui.tripWindow.textContent = `${formatMonthDay(parseYmd(firstDay.date))} - ${formatMonthDay(parseYmd(lastDay.date))}`;
    ui.footerNote.textContent = destination.footer;
}

function renderWeatherStatus() {
    if (appState.weatherMode === 'live') {
        ui.tripWeatherLabel.textContent = 'Live Forecast';
        return;
    }

    if (appState.weatherMode === 'range') {
        ui.tripWeatherLabel.textContent = 'Forecast < 16d';
        return;
    }

    if (appState.weatherMode === 'error') {
        ui.tripWeatherLabel.textContent = 'Weather Error';
        return;
    }

    ui.tripWeatherLabel.textContent = 'Forecast';
}

function updateClocks() {
    const destination = getDestination(appState.hasStarted ? appState.destinationId : setupSelection.destinationId);
    const now = new Date();

    ui.timeSeoul.textContent = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Seoul',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    ui.dateSeoul.textContent = now.toLocaleDateString('en-US', {
        timeZone: 'Asia/Seoul',
        month: 'short',
        day: 'numeric',
        weekday: 'short'
    });

    ui.timeDestination.textContent = now.toLocaleTimeString('en-US', {
        timeZone: destination.timeZone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    ui.dateDestination.textContent = now.toLocaleDateString('en-US', {
        timeZone: destination.timeZone,
        month: 'short',
        day: 'numeric',
        weekday: 'short'
    });
}

function getWeatherInfo(code) {
    if (code === 0) return { icon: 'sun', color: 'var(--accent)' };
    if (code >= 1 && code <= 3) return { icon: 'sun', color: '#f8fafc' };
    if (code >= 45 && code <= 48) return { icon: 'cloud-fog', color: '#cbd5e1' };
    if (code >= 51 && code <= 67) return { icon: 'cloud-drizzle', color: '#93c5fd' };
    if (code >= 71 && code <= 77) return { icon: 'cloud-snow', color: '#f8fafc' };
    if (code >= 80 && code <= 82) return { icon: 'cloud-rain', color: '#60a5fa' };
    if (code >= 95 && code <= 99) return { icon: 'cloud-lightning', color: '#c084fc' };
    return { icon: 'cloud', color: '#cbd5e1' };
}

async function fetchExchangeRate() {
    const destination = getDestination(appState.destinationId);
    isExchangeLoading = true;
    currentExchangeRate = null;
    updateExchangeOutputs();

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${destination.currency.code}`);
        if (!response.ok) throw new Error('Exchange fetch failed');

        const data = await response.json();
        const rate = data?.rates?.KRW;
        if (!rate) throw new Error('Missing KRW rate');
        isExchangeLoading = false;
        currentExchangeRate = rate;
        syncExchangeInputDefaults();
        updateExchangeOutputs();
    } catch (error) {
        console.error('Exchange rate fetch failed:', error);
        isExchangeLoading = false;
        currentExchangeRate = null;
        updateExchangeOutputs();
    }
}

function canFetchWeather(destinationId, startDate, endDate) {
    const destination = getDestination(destinationId);
    const today = getLocalNow(destination.timeZone);
    today.setHours(0, 0, 0, 0);

    const tripStart = parseYmd(startDate);
    const tripEnd = parseYmd(endDate);
    const maxForecastDate = addDays(today, 15);

    return tripStart >= today && tripEnd <= maxForecastDate;
}

async function fetchWeather() {
    const destination = getDestination(appState.destinationId);
    const firstDay = appState.itinerary[0];
    const lastDay = appState.itinerary[appState.itinerary.length - 1];

    if (!canFetchWeather(destination.id, appState.startDate, appState.endDate)) {
        appState.currentWeather = null;
        appState.weatherMode = 'range';
        renderWeatherStatus();
        renderItinerary();
        return;
    }

    try {
        const params = new URLSearchParams({
            latitude: destination.weather.latitude,
            longitude: destination.weather.longitude,
            daily: 'weather_code,temperature_2m_max,temperature_2m_min',
            hourly: 'temperature_2m,weather_code',
            timezone: destination.timeZone,
            start_date: firstDay.date,
            end_date: lastDay.date
        });
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
        if (!response.ok) throw new Error('Weather fetch failed');

        appState.currentWeather = await response.json();
        appState.weatherMode = 'live';
    } catch (error) {
        console.error('Weather fetch failed:', error);
        appState.currentWeather = null;
        appState.weatherMode = 'error';
    }

    renderWeatherStatus();
    renderItinerary();
}

function buildDailyWeatherHtml(day) {
    if (!appState.currentWeather?.daily?.time) return '';

    const index = appState.currentWeather.daily.time.findIndex((entry) => entry === day.date);
    if (index === -1) return '';

    const weatherInfo = getWeatherInfo(appState.currentWeather.daily.weather_code[index]);
    const maxTemp = Math.round(appState.currentWeather.daily.temperature_2m_max[index]);
    const minTemp = Math.round(appState.currentWeather.daily.temperature_2m_min[index]);

    return `
        <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            <i data-lucide="${weatherInfo.icon}" class="w-4 h-4" style="color:${weatherInfo.color}"></i>
            <span class="text-xs font-bold text-white">${maxTemp}° <span class="text-white/45">/ ${minTemp}°</span></span>
        </div>
    `;
}

function buildHourlyWeatherHtml(day, activity) {
    if (!appState.currentWeather?.hourly?.time) return '';

    const hourLabel = `${day.date}T${activity.time.split(':')[0]}:00`;
    const index = appState.currentWeather.hourly.time.findIndex((entry) => entry === hourLabel);
    if (index === -1) return '';

    const weatherInfo = getWeatherInfo(appState.currentWeather.hourly.weather_code[index]);
    const temp = Math.round(appState.currentWeather.hourly.temperature_2m[index]);

    return `
        <div class="absolute -left-[40px] top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[32px] z-10">
            <i data-lucide="${weatherInfo.icon}" class="w-4 h-4 mb-0.5" style="color:${weatherInfo.color}"></i>
            <span class="text-[10px] font-bold text-white/90">${temp}°</span>
        </div>
    `;
}

function renderItinerary() {
    const destination = getDestination(appState.destinationId);

    ui.itineraryContainer.innerHTML = '<div class="absolute left-[11px] top-2 bottom-0 w-[2px] bg-white/20"></div>';

    appState.itinerary.forEach((day, dayIndex) => {
        const dayElement = document.createElement('div');
        dayElement.className = 'relative pl-8 reveal';
        const dayDirectionsUrl = getDayDirectionsUrl(day.activities);

        const activitiesHtml = day.activities.map((activity, activityIndex) => {
            const nextActivity = day.activities[activityIndex + 1];
            const betweenStopsHtml = nextActivity ? `
                <div class="relative h-5 -mt-1 -mb-1 z-20">
                    <div class="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/18"></div>
                    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <a
                            href="${getDirectionsUrl(activity.location, nextActivity.location)}"
                            target="_blank"
                            rel="noreferrer"
                            data-skip-edit="true"
                            class="w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg"
                            style="border: 1px solid rgba(var(--accent-rgb), 0.56); background: rgba(var(--accent-rgb), 0.18);">
                            <i data-lucide="route" class="w-4 h-4"></i>
                        </a>
                    </div>
                </div>
            ` : '';

            return `
            <div>
                <div
                    class="relative glass-panel p-4 rounded-3xl flex items-center justify-between gap-3 mb-3 cursor-pointer hover:bg-white/[0.08] transition-colors"
                    data-action="edit-activity"
                    data-day-index="${dayIndex}"
                    data-activity-id="${activity.id}">
                    ${buildHourlyWeatherHtml(day, activity)}
                    <div class="flex items-center gap-3 flex-1 min-w-0">
                        <div class="p-2 rounded-xl accent-icon shrink-0">
                            <i data-lucide="${getRenderableActivityIcon(activity.type)}" class="w-4 h-4"></i>
                        </div>
                        <div class="min-w-0">
                            <div class="text-sm font-bold text-white">${escapeHtml(activity.time)}</div>
                            <div class="text-sm text-white/88 mt-1">${escapeHtml(activity.location)}</div>
                            ${activity.memo ? `<div class="text-xs text-white/62 mt-1 leading-5">${escapeHtml(activity.memo)}</div>` : ''}
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <a href="${getMapsSearchUrl(activity.location)}"
                            target="_blank"
                            rel="noreferrer"
                            data-skip-edit="true"
                            class="map-link p-2 text-white/36 transition-colors"
                            title="구글 맵에서 보기">
                            <i data-lucide="map-pin" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
                ${betweenStopsHtml}
            </div>
        `;
        }).join('');

        dayElement.innerHTML = `
            <div class="flex items-start gap-3 mb-4">
                <div class="w-6 h-6 rounded-full border-4 border-white/20 shadow-sm z-10 absolute left-0 flex items-center justify-center"
                    style="background:rgba(${destination.inkRgb},0.9);">
                    <div class="w-1.5 h-1.5 rounded-full accent-dot"></div>
                </div>

                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <h3 class="text-2xl font-serif font-bold text-white">${escapeHtml(day.day)}</h3>
                        <span class="text-sm text-white/70 font-medium">${formatMonthDay(parseYmd(day.date))}</span>
                    </div>
                </div>

                <div class="flex flex-col items-end gap-2">
                    ${buildDailyWeatherHtml(day)}
                    <div class="flex gap-2">
                        ${dayDirectionsUrl ? `
                            <a
                                href="${dayDirectionsUrl}"
                                target="_blank"
                                rel="noreferrer"
                                data-skip-edit="true"
                                class="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/10 transition-colors inline-flex items-center gap-1.5">
                                <i data-lucide="route" class="w-3.5 h-3.5"></i>
                                <span>하루 이동코스</span>
                            </a>
                        ` : ''}
                        <button
                            type="button"
                            class="rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-950 transition-colors"
                            style="background: var(--accent);"
                            data-action="add-activity"
                            data-day-index="${dayIndex}">
                            + 일정
                        </button>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                ${activitiesHtml}
            </div>
        `;

        ui.itineraryContainer.appendChild(dayElement);
    });

    lucide.createIcons();
    ui.itineraryContainer.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function buildShareUrl() {
    const url = new URL(window.location.href);
    url.search = '';
    url.pathname = url.pathname.replace(/\/index\.html$/, '/');
    url.hash = `plan=${encodePlan(buildSharePayload())}`;
    return url.toString();
}

function syncUrl() {
    if (!appState.hasStarted) return;
    window.history.replaceState({}, '', buildShareUrl());
}

function refreshPlan() {
    if (!appState.hasStarted) {
        applyTheme(getDestination(setupSelection.destinationId));
        renderDestinationSelector();
        renderSetupInputs();
        updateClocks();
        showSetupOverlay();
        showUtilityChrome();
        return;
    }

    hideSetupOverlay();
    applyTheme(getDestination(appState.destinationId));
    renderUtilityInfo();
    updateClocks();
    renderDestinationSelector();
    renderStaticSummary();
    renderWeatherStatus();
    renderItinerary();
    syncUrl();
    fetchExchangeRate();
    fetchWeather();
    showUtilityChrome();
}

function applySetupSelection() {
    const destination = getDestination(setupSelection.destinationId);
    const rawStartDate = ui.setupStartDate.value;
    const rawEndDate = ui.setupEndDate.value;

    if (parseYmd(rawStartDate) && parseYmd(rawEndDate) && parseYmd(rawEndDate) < parseYmd(rawStartDate)) {
        window.alert('종료일은 시작일보다 빠를 수 없습니다.');
        ui.setupEndDate.focus();
        return;
    }

    const { startDate, endDate } = normalizeDateRange(rawStartDate, rawEndDate, destination);
    const isChangingCoreSetup = appState.destinationId !== setupSelection.destinationId
        || appState.startDate !== startDate
        || appState.endDate !== endDate;

    if (appState.customized && isChangingCoreSetup) {
        const shouldContinue = window.confirm('지금까지 커스터마이징한 일정이 새 도시/날짜 범위 템플릿으로 바뀝니다. 계속할까요?');
        if (!shouldContinue) return;
    }

    setupSelection.startDate = startDate;
    setupSelection.endDate = endDate;
    appState.destinationId = setupSelection.destinationId;
    appState.startDate = startDate;
    appState.endDate = endDate;
    appState.itinerary = buildItineraryFromRange(appState.destinationId, appState.startDate, appState.endDate);
    setRandomPhrase(appState.destinationId);
    appState.hasStarted = true;
    appState.customized = false;

    setShareStatus('');
    refreshPlan();
}

function rebuildItineraryWithExisting(newStartDate, newEndDate) {
    const existingDaysByDate = new Map(appState.itinerary.map((day) => [day.date, day]));
    const nextTemplate = buildItineraryFromRange(appState.destinationId, newStartDate, newEndDate);

    appState.startDate = newStartDate;
    appState.endDate = newEndDate;
    appState.itinerary = nextTemplate.map((day) => existingDaysByDate.get(day.date) || day);
    appState.customized = true;

    refreshPlan();
}

function prependDay() {
    const nextStartDate = formatYmd(addDays(parseYmd(appState.startDate), -1));
    rebuildItineraryWithExisting(nextStartDate, appState.endDate);
}

function appendDay() {
    const nextEndDate = formatYmd(addDays(parseYmd(appState.endDate), 1));
    rebuildItineraryWithExisting(appState.startDate, nextEndDate);
}

function removeFirstDay() {
    if (appState.itinerary.length <= 1) {
        window.alert('하루 일정은 남겨둬야 합니다.');
        return;
    }

    const nextStartDate = formatYmd(addDays(parseYmd(appState.startDate), 1));
    rebuildItineraryWithExisting(nextStartDate, appState.endDate);
}

function removeLastDay() {
    if (appState.itinerary.length <= 1) {
        window.alert('하루 일정은 남겨둬야 합니다.');
        return;
    }

    const nextEndDate = formatYmd(addDays(parseYmd(appState.endDate), -1));
    rebuildItineraryWithExisting(appState.startDate, nextEndDate);
}

function resetToSetup() {
    const shouldReset = window.confirm('현재 일정을 닫고 처음 화면으로 돌아갈까요?');
    if (!shouldReset) return;

    const destination = getDestination(DEFAULT_DESTINATION_ID);
    const { startDate, endDate } = getSuggestedDateRange(destination);

    setupSelection.destinationId = destination.id;
    setupSelection.startDate = startDate;
    setupSelection.endDate = endDate;

    appState.destinationId = destination.id;
    appState.startDate = startDate;
    appState.endDate = endDate;
    appState.itinerary = [];
    appState.currentWeather = null;
    appState.weatherMode = 'loading';
    appState.hasStarted = false;
    appState.customized = false;
    setRandomPhrase(destination.id);

    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, '', cleanUrl);
    setShareStatus('');
    refreshPlan();
}

async function sharePlan() {
    const shareUrl = buildShareUrl();
    const destination = getDestination(appState.destinationId);

    if (navigator.share) {
        try {
            await navigator.share({
                title: `${destination.city} Trip Plan`,
                text: `${destination.city} 일정 공유 링크`,
                url: shareUrl
            });
            setShareStatus('공유 창으로 링크를 보냈습니다.');
            return;
        } catch (error) {
            if (error?.name === 'AbortError') return;
        }
    }

    try {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus('저장/공유 링크를 클립보드에 복사했습니다.');
    } catch (error) {
        window.prompt('이 링크를 복사해서 공유하세요.', shareUrl);
        setShareStatus('저장/공유 링크를 만들었습니다.');
    }
}

function openActivityEditor(dayIndex, activityId = null) {
    const day = appState.itinerary[dayIndex];
    const existing = activityId ? day.activities.find((activity) => activity.id === activityId) : null;

    activityEditorState.dayIndex = dayIndex;
    activityEditorState.activityId = activityId;
    activityEditorState.icon = existing?.type || '';
    ui.activityModalTitle.textContent = existing ? '일정 편집' : '새 일정 추가';
    ui.activityTime.value = existing?.time || '09:00';
    ui.activityLocation.value = existing?.location || '';
    ui.activityMemo.value = existing?.memo || '';
    ui.activityDeleteBtn.classList.toggle('hidden', !existing);
    renderActivityIconSelection();
    updateActivityMapPreview();
    closeIconPicker();

    ui.activityModal.classList.remove('hidden');
    updateBodyScrollLock();
    lucide.createIcons();
}

function closeActivityEditor() {
    closeIconPicker();
    ui.activityModal.classList.add('hidden');
    updateBodyScrollLock();
    activityEditorState.dayIndex = null;
    activityEditorState.activityId = null;
    activityEditorState.icon = '';
}

function persistItineraryChanges() {
    appState.customized = true;
    renderItinerary();
    syncUrl();
}

function saveActivityEditor() {
    const day = appState.itinerary[activityEditorState.dayIndex];
    if (!day) return;

    const location = ui.activityLocation.value.trim();
    const time = ui.activityTime.value;
    const existingActivity = activityEditorState.activityId
        ? day.activities.find((activity) => activity.id === activityEditorState.activityId)
        : null;

    if (!location || !time) {
        window.alert('시간과 장소는 비워둘 수 없습니다.');
        return;
    }

    const nextActivity = {
        id: activityEditorState.activityId || createId('activity'),
        time,
        title: existingActivity?.title || location || '일정',
        location,
        type: activityEditorState.icon || '',
        memo: ui.activityMemo.value.trim()
    };

    if (activityEditorState.activityId) {
        const index = day.activities.findIndex((activity) => activity.id === activityEditorState.activityId);
        if (index !== -1) day.activities[index] = nextActivity;
    } else {
        day.activities.push(nextActivity);
    }

    sortActivities(day);
    closeActivityEditor();
    persistItineraryChanges();
}

function deleteCurrentActivity() {
    const day = appState.itinerary[activityEditorState.dayIndex];
    if (!day || !activityEditorState.activityId) return;

    const shouldDelete = window.confirm('이 일정을 삭제할까요?');
    if (!shouldDelete) return;

    day.activities = day.activities.filter((activity) => activity.id !== activityEditorState.activityId);
    closeActivityEditor();
    persistItineraryChanges();
}

function renameDay(dayIndex) {
    const day = appState.itinerary[dayIndex];
    if (!day) return;

    const nextTitle = window.prompt('이 날짜의 제목을 바꿔보세요.', day.title);
    if (!nextTitle) return;

    day.title = nextTitle.trim() || day.title;
    persistItineraryChanges();
}

function handleItineraryClick(event) {
    if (event.target.closest('[data-skip-edit]')) {
        return;
    }

    const editButton = event.target.closest('[data-action="edit-activity"]');
    if (editButton) {
        openActivityEditor(Number(editButton.dataset.dayIndex), editButton.dataset.activityId);
        return;
    }

    const addButton = event.target.closest('[data-action="add-activity"]');
    if (addButton) {
        openActivityEditor(Number(addButton.dataset.dayIndex), null);
        return;
    }

}

function bootstrapFromUrl() {
    const url = new URL(window.location.href);
    const hashPlanParam = new URLSearchParams(url.hash.replace(/^#/, '')).get('plan');
    const planParam = hashPlanParam || url.searchParams.get('plan');

    if (planParam) {
        try {
            const payload = decodePlan(planParam);
            const destination = getDestination(getSelectableDestinationId(payload.d));
            const { startDate, endDate } = normalizeDateRange(payload.s, payload.e, destination);

            appState.destinationId = destination.id;
            appState.startDate = startDate;
            appState.endDate = endDate;
            appState.itinerary = buildItineraryFromSharedPayload(destination.id, startDate, endDate, Array.isArray(payload.i) ? payload.i : []);
            setRandomPhrase(destination.id);
            appState.hasStarted = true;
            appState.customized = true;

            setupSelection.destinationId = destination.id;
            setupSelection.startDate = startDate;
            setupSelection.endDate = endDate;
            return;
        } catch (error) {
            console.warn('Failed to decode shared plan:', error);
        }
    }

    const destination = getDestination(getSelectableDestinationId(url.searchParams.get('destination') || DEFAULT_DESTINATION_ID));
    const { startDate, endDate } = normalizeDateRange(url.searchParams.get('start'), url.searchParams.get('end'), destination);

    appState.destinationId = destination.id;
    appState.startDate = startDate;
    appState.endDate = endDate;
    appState.itinerary = buildItineraryFromRange(destination.id, startDate, endDate);
    setRandomPhrase(destination.id);
    appState.hasStarted = false;
    appState.customized = false;

    setupSelection.destinationId = destination.id;
    setupSelection.startDate = startDate;
    setupSelection.endDate = endDate;
}

ui.destinationDropdownTrigger.addEventListener('click', () => {
    toggleDestinationDropdown();
});

ui.destinationSelector.addEventListener('click', (event) => {
    const button = event.target.closest('[data-destination]');
    if (!button) return;

    setupSelection.destinationId = button.dataset.destination;
    const destination = getDestination(setupSelection.destinationId);
    const { startDate, endDate } = getSuggestedDateRange(destination);
    setupSelection.startDate = startDate;
    setupSelection.endDate = endDate;
    applyTheme(destination);
    renderSetupInputs();
    renderDestinationSelector();
    closeDestinationDropdown();
});

ui.setupStartDate.addEventListener('input', () => {
    setupSelection.startDate = ui.setupStartDate.value;
});

ui.setupEndDate.addEventListener('input', () => {
    setupSelection.endDate = ui.setupEndDate.value;
});

ui.applyPlanBtn.addEventListener('click', applySetupSelection);
ui.sharePlanBtn.addEventListener('click', sharePlan);
ui.resetPlanBtn.addEventListener('click', resetToSetup);
ui.prependDayBtn.addEventListener('click', prependDay);
ui.appendDayBtn.addEventListener('click', appendDay);
ui.removeFirstDayBtn.addEventListener('click', removeFirstDay);
ui.removeLastDayBtn.addEventListener('click', removeLastDay);

ui.activityCloseBtn.addEventListener('click', closeActivityEditor);
ui.activityCancelBtn.addEventListener('click', closeActivityEditor);
ui.activitySaveBtn.addEventListener('click', saveActivityEditor);
ui.activityDeleteBtn.addEventListener('click', deleteCurrentActivity);
ui.activityLocation.addEventListener('input', updateActivityMapPreview);
ui.activityIconTrigger.addEventListener('click', openIconPicker);
ui.iconPickerCloseBtn.addEventListener('click', closeIconPicker);
ui.iconPickerCancelBtn.addEventListener('click', closeIconPicker);
ui.iconPickerGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-icon-choice]');
    if (!button) return;

    applyActivityIconSelection(button.dataset.iconChoice || '');
    closeIconPicker();
});
ui.phraseRefreshBtn.addEventListener('click', cyclePhrase);
ui.rateBaseInput.addEventListener('input', () => {
    exchangeInputsTouched = true;
    updateExchangeOutputs();
});
ui.rateKrwInput.addEventListener('input', () => {
    exchangeInputsTouched = true;
    updateExchangeOutputs();
});
ui.itineraryContainer.addEventListener('click', handleItineraryClick);

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !ui.iconPickerModal.classList.contains('hidden')) {
        closeIconPicker();
        return;
    }

    if (event.key === 'Escape' && !ui.activityModal.classList.contains('hidden')) {
        closeActivityEditor();
    }
});

['mousemove', 'mousedown', 'keydown', 'touchmove', 'wheel'].forEach((eventName) => {
    window.addEventListener(eventName, scheduleUtilityChrome);
});

['touchstart', 'scroll'].forEach((eventName) => {
    window.addEventListener(eventName, scheduleUtilityChrome, { passive: true });
});

['mouseup', 'touchend', 'pointerup'].forEach((eventName) => {
    window.addEventListener(eventName, showUtilityChrome, { passive: true });
});

document.addEventListener('click', (event) => {
    if (ui.setupOverlay.classList.contains('hidden')) return;
    if (event.target.closest('#destination-dropdown-trigger')) return;
    if (event.target.closest('#destination-selector')) return;
    closeDestinationDropdown();
});

window.setInterval(updateClocks, 1000);
renderIconPicker();
bootstrapFromUrl();
refreshPlan();
