const DAY_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WEEKDAY_LABELS_KO = ['일', '월', '화', '수', '목', '금', '토'];
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

const REGION_ORDER = ['asia', 'north-america', 'europe', 'africa', 'resort', 'south-america'];
const REGION_LABELS = {
    asia: '아시아',
    'north-america': '북미',
    europe: '유럽',
    africa: '아프리카',
    resort: '오세아니아',
    'south-america': '남미'
};
const COUNTRY_SORT_ORDER = [
    'Japan',
    'Hong Kong',
    'Macau',
    'China',
    'Taiwan',
    'Thailand',
    'Vietnam',
    'Philippines',
    'Malaysia',
    'Singapore',
    'India',
    'Indonesia',
    'Saudi Arabia',
    'United States',
    'Canada',
    'Mexico',
    'France',
    'United Kingdom',
    'Germany',
    'Czech Republic',
    'Poland',
    'Austria',
    'Netherlands',
    'Denmark',
    'Sweden',
    'Norway',
    'Finland',
    'Ireland',
    'Iceland',
    'Switzerland',
    'Portugal',
    'Greece',
    'Turkey',
    'Spain',
    'Italy',
    'Russia',
    'Egypt',
    'Morocco',
    'Tanzania',
    'South Africa',
    'Kenya',
    'Ghana',
    'Australia',
    'New Zealand',
    'Maldives',
    'United Arab Emirates',
    'Guam',
    'Saipan',
    'Palau',
    'Peru',
    'Chile',
    'Colombia',
    'Bolivia',
    'Brazil',
    'Argentina'
];
const COUNTRY_REGIONS = {
    Japan: 'asia',
    'Hong Kong': 'asia',
    Macau: 'asia',
    China: 'asia',
    Taiwan: 'asia',
    Thailand: 'asia',
    Vietnam: 'asia',
    Philippines: 'asia',
    Malaysia: 'asia',
    Singapore: 'asia',
    India: 'asia',
    Indonesia: 'asia',
    'Saudi Arabia': 'asia',
    'United States': 'north-america',
    Canada: 'north-america',
    Mexico: 'north-america',
    France: 'europe',
    'United Kingdom': 'europe',
    Germany: 'europe',
    'Czech Republic': 'europe',
    Poland: 'europe',
    Austria: 'europe',
    Netherlands: 'europe',
    Denmark: 'europe',
    Sweden: 'europe',
    Norway: 'europe',
    Finland: 'europe',
    Ireland: 'europe',
    Iceland: 'europe',
    Switzerland: 'europe',
    Portugal: 'europe',
    Greece: 'europe',
    Turkey: 'europe',
    Spain: 'europe',
    Italy: 'europe',
    Russia: 'europe',
    Australia: 'resort',
    'New Zealand': 'resort',
    Maldives: 'resort',
    'United Arab Emirates': 'asia',
    Egypt: 'africa',
    Morocco: 'africa',
    Tanzania: 'africa',
    'South Africa': 'africa',
    Kenya: 'africa',
    Ghana: 'africa',
    Guam: 'resort',
    Saipan: 'resort',
    Palau: 'resort',
    Peru: 'south-america',
    Chile: 'south-america',
    Colombia: 'south-america',
    Bolivia: 'south-america',
    Brazil: 'south-america',
    Argentina: 'south-america'
};

function hexToRgbString(hex) {
    const normalized = hex.replace('#', '');
    const full = normalized.length === 3
        ? normalized.split('').map((char) => `${char}${char}`).join('')
        : normalized;
    const value = Number.parseInt(full, 16);
    const red = (value >> 16) & 255;
    const green = (value >> 8) & 255;
    const blue = value & 255;
    return `${red}, ${green}, ${blue}`;
}

function buildTheme(accent, ink, topAlpha = 0.48, bottomAlpha = 0.92) {
    const accentRgb = hexToRgbString(accent);
    const inkRgb = hexToRgbString(ink);

    return {
        accent,
        accentRgb,
        ink,
        inkRgb,
        overlayTop: `rgba(${inkRgb}, ${topAlpha})`,
        overlayBottom: `rgba(${inkRgb}, ${bottomAlpha})`
    };
}

const DESTINATIONS = {
    paris: {
        id: 'paris',
        city: 'Paris',
        country: 'France',
        summary: '예술, 강변 산책, 디저트, 박물관을 리듬 있게 묶은 파리 템플릿입니다.',
        footer: 'Paris works best when the day moves from stone to light.',
        heroImage: 'assets/heroes/paris.jpg',
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
        phraseLabel: 'Français',
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
        heroImage: 'assets/heroes/london.jpg',
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
        phraseLabel: 'English',
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
        heroImage: 'assets/heroes/new-york.jpg',
        heroPosition: 'center 22%',
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
        phraseLabel: 'English',
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
        heroImage: 'assets/heroes/los-angeles.jpg',
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
        phraseLabel: 'English',
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
        heroImage: 'assets/heroes/tokyo.jpg',
        heroPosition: '68% center',
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
        heroImage: 'assets/heroes/rome.jpg',
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
        phraseLabel: 'Italiano',
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
        heroImage: 'assets/heroes/barcelona.jpg',
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
        phraseLabel: 'Español',
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
        heroImage: 'assets/heroes/singapore.jpg',
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
        phraseLabel: 'Singlish',
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
    malaysia: {
        id: 'malaysia',
        city: 'Kuala Lumpur',
        country: 'Malaysia',
        summary: '페트로나스, 전망대, 동굴 사원, 야시장을 묶은 말레이시아 템플릿입니다.',
        footer: 'Malaysia feels best when skyline, market, and temple sit in one route.',
        heroImage: 'assets/heroes/malaysia.jpg',
        timeZone: 'Asia/Kuala_Lumpur',
        weather: { latitude: 3.1390, longitude: 101.6869 },
        currency: { code: 'MYR', symbol: 'RM', locale: 'ms-MY' },
        startOffsetDays: 7,
        phraseLabel: 'Bahasa Melayu',
        phrases: [
            { text: 'Apa khabar?', pron: '[아파 카바르?]', meaning: '안녕하세요 / 잘 지내세요?' },
            { text: 'Terima kasih', pron: '[뜨리마 까시]', meaning: '감사합니다' },
            { text: 'Berapa harga ini?', pron: '[브라파 하르가 이니?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '도심 워밍업',
                activities: [
                    { time: '10:00', title: '페트로나스 타워', type: 'tower-control', location: 'Petronas Twin Towers' },
                    { time: '13:30', title: 'KLCC 공원', type: 'trees', location: 'KLCC Park' },
                    { time: '18:30', title: '부킷 빈탕', type: 'lightbulb', location: 'Bukit Bintang' }
                ]
            },
            {
                title: '랜드마크 & 마켓',
                activities: [
                    { time: '10:00', title: '바투 동굴', type: 'landmark', location: 'Batu Caves' },
                    { time: '14:00', title: '센트럴 마켓', type: 'shopping-bag', location: 'Central Market Kuala Lumpur' },
                    { time: '19:00', title: '잘란 알로 야시장', type: 'utensils-crossed', location: 'Jalan Alor' }
                ]
            },
            {
                title: '전망 & 출발',
                activities: [
                    { time: '10:30', title: 'KL 타워', type: 'binoculars', location: 'Kuala Lumpur Tower' },
                    { time: '13:30', title: '메르데카 광장', type: 'map', location: 'Merdeka Square' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Kuala Lumpur International Airport' }
                ]
            }
        ]
    },
    jakarta: {
        id: 'jakarta',
        city: 'Jakarta',
        country: 'Indonesia',
        summary: '따만 미니, 전통관, 전망 타워, 녹지 산책을 묶은 자카르타 템플릿입니다.',
        footer: 'Jakarta feels better when Taman Mini scale and green walkways stay balanced.',
        heroImage: 'assets/heroes/jakarta.jpg',
        timeZone: 'Asia/Jakarta',
        weather: { latitude: -6.2088, longitude: 106.8456 },
        currency: { code: 'IDR', symbol: 'Rp', locale: 'id-ID' },
        startOffsetDays: 7,
        phraseLabel: 'Bahasa Indonesia',
        phrases: [
            { text: 'Selamat pagi', pron: '[슬라맛 빠기]', meaning: '좋은 아침입니다 / 안녕하세요' },
            { text: 'Terima kasih', pron: '[뜨리마 까시]', meaning: '감사합니다' },
            { text: 'Permisi', pron: '[쁘르미시]', meaning: '실례합니다' },
            { text: 'Berapa harganya?', pron: '[브라파 하르가냐?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '따만 미니 워밍업',
                activities: [
                    { time: '10:00', title: '따만 미니 입장', type: 'landmark', location: 'Taman Mini Indonesia Indah' },
                    { time: '13:30', title: '전통 가옥 존', type: 'map', location: 'Anjungan Daerah Taman Mini' },
                    { time: '18:00', title: '사우자나 타워', type: 'binoculars', location: 'Saudjana Viewing Tower' }
                ]
            },
            {
                title: '박물관 & 산책',
                activities: [
                    { time: '10:00', title: '인도네시아 박물관', type: 'building-2', location: 'Museum Indonesia' },
                    { time: '13:30', title: '새 공원', type: 'camera', location: 'Taman Burung TMII' },
                    { time: '18:00', title: '호수 산책', type: 'sun', location: 'Danau Archipelago TMII' }
                ]
            },
            {
                title: '카페 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Caping Gunung Restaurant' },
                    { time: '13:30', title: '기념품 마지막 체크', type: 'gift', location: 'TMII Souvenir Center' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Soekarno-Hatta International Airport' }
                ]
            }
        ]
    },
    bali: {
        id: 'bali',
        city: 'Bali',
        country: 'Indonesia',
        summary: '발리 사원, 우붓, 라이스 테라스, 선셋 스폿을 묶은 발리 템플릿입니다.',
        footer: 'Bali feels strongest when temple, rice terrace, and sunset stay in one flow.',
        heroImage: 'assets/heroes/bali.jpg',
        timeZone: 'Asia/Makassar',
        weather: { latitude: -8.6500, longitude: 115.2167 },
        currency: { code: 'IDR', symbol: 'Rp', locale: 'id-ID' },
        startOffsetDays: 8,
        phraseLabel: 'Bahasa Indonesia',
        phrases: [
            { text: 'Selamat pagi', pron: '[슬라맛 빠기]', meaning: '좋은 아침입니다 / 안녕하세요' },
            { text: 'Terima kasih', pron: '[뜨리마 까시]', meaning: '감사합니다' },
            { text: 'Tolong', pron: '[똘롱]', meaning: '도와주세요 / 부탁합니다' },
            { text: 'Di mana pantainya?', pron: '[디 마나 빤따이냐?]', meaning: '해변이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '사원 & 선셋',
                activities: [
                    { time: '10:00', title: '따나롯 사원', type: 'landmark', location: 'Tanah Lot Temple' },
                    { time: '13:30', title: '스미냑 브런치', type: 'coffee', location: 'Seminyak' },
                    { time: '18:00', title: '선셋 포인트', type: 'sun', location: 'Canggu Beach' }
                ]
            },
            {
                title: '우붓 데이',
                activities: [
                    { time: '09:30', title: '우붓 왕궁', type: 'landmark', location: 'Ubud Palace' },
                    { time: '13:00', title: '뜨갈랄랑 라이스 테라스', type: 'trees', location: 'Tegallalang Rice Terrace' },
                    { time: '17:30', title: '몽키 포레스트 주변', type: 'map', location: 'Ubud Monkey Forest' }
                ]
            },
            {
                title: '클리프 & 출발',
                activities: [
                    { time: '10:00', title: '울루와뚜 절벽', type: 'binoculars', location: 'Uluwatu Temple' },
                    { time: '13:30', title: '짐바란 씨푸드', type: 'utensils-crossed', location: 'Jimbaran Beach' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Ngurah Rai International Airport' }
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
        heroImage: 'assets/heroes/bangkok.jpg',
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
        phraseLabel: 'ไทย',
        phrases: [
            { text: 'สวัสดีครับ/ค่ะ', pron: '[사왓디 크랍/카]', meaning: '안녕하세요' },
            { text: 'ขอบคุณครับ/ค่ะ', pron: '[컵쿤 크랍/카]', meaning: '감사합니다' },
            { text: 'เท่าไร', pron: '[타오라이]', meaning: '얼마예요?' },
            { text: 'ไม่เผ็ด', pron: '[마이 펫]', meaning: '안 맵게 해주세요' },
            { text: 'ห้องน้ำอยู่ที่ไหน', pron: '[홍남 유 티 나이]', meaning: '화장실 어디예요?' },
            { text: 'เช็คบิล', pron: '[첵 빈]', meaning: '계산 부탁해요' }
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
        heroImage: 'assets/heroes/dubai.jpg',
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
        phraseLabel: 'العربية',
        phrases: [
            { text: 'مرحبا', pron: '[마르하바]', meaning: '안녕하세요' },
            { text: 'شكرا', pron: '[슈크란]', meaning: '감사합니다' },
            { text: 'كم هذا؟', pron: '[캄 하다]', meaning: '이거 얼마예요?' },
            { text: 'وين المترو؟', pron: '[웨인 알 메트로]', meaning: '메트로 어디예요?' },
            { text: 'الحساب من فضلك', pron: '[알 히삽 민 파들락]', meaning: '계산서 부탁합니다' },
            { text: 'ممتاز', pron: '[뭄타즈]', meaning: '아주 좋아요' }
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
    saudi: {
        id: 'saudi',
        city: 'Mecca',
        country: 'Saudi Arabia',
        summary: '성지 풍경, 대모스크 실루엣, 탑 전망을 중심으로 짠 사우디아라비아 템플릿입니다.',
        footer: 'Saudi Arabia feels strongest when marble scale and night lights stay calm together.',
        heroImage: 'assets/heroes/saudi.jpg',
        timeZone: 'Asia/Riyadh',
        weather: { latitude: 21.3891, longitude: 39.8579 },
        currency: { code: 'SAR', symbol: 'SAR', locale: 'ar-SA' },
        startOffsetDays: 10,
        phraseLabel: 'العربية',
        phrases: [
            { text: 'السلام عليكم', pron: '[앗살라무 알라이쿰]', meaning: '안녕하세요' },
            { text: 'شكرا', pron: '[슈크란]', meaning: '감사합니다' },
            { text: 'أين هذا المكان؟', pron: '[아이나 하다 알 마칸?]', meaning: '이 장소가 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '메카 첫인상',
                activities: [
                    { time: '09:30', title: '마스지드 알하람 주변', type: 'landmark', location: 'Masjid al-Haram' },
                    { time: '13:30', title: '아브라즈 알베이트 전망', type: 'tower-control', location: 'Abraj Al Bait Towers' },
                    { time: '19:00', title: '야간 풍경', type: 'moon-star', location: 'Makkah Clock Royal Tower' }
                ]
            },
            {
                title: '언덕 & 박물관',
                activities: [
                    { time: '10:00', title: '자발 알누르', type: 'binoculars', location: 'Jabal al-Nour' },
                    { time: '14:00', title: '메카 박물관', type: 'building-2', location: 'Makkah Museum' },
                    { time: '18:30', title: '도심 산책', type: 'map', location: 'Ajyad Mecca' }
                ]
            },
            {
                title: '브런치 & 이동',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Al Aziziyah Mecca' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Makkah City Center' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'King Abdulaziz International Airport' }
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
        heroImage: 'assets/heroes/amsterdam.jpg',
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
        phraseLabel: 'Nederlands',
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
        heroImage: 'assets/heroes/madrid.jpg',
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
        phraseLabel: 'Español',
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
        heroImage: 'assets/heroes/hong-kong.jpg',
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
        phraseLabel: '廣東話',
        phrases: [
            { text: '唔該', pron: '[음고이]', meaning: '고맙습니다 / 부탁합니다' },
            { text: '早晨', pron: '[조산]', meaning: '좋은 아침이에요' },
            { text: '一個，唔該', pron: '[얏고, 음고이]', meaning: '하나 주세요' },
            { text: '港鐵站喺邊？', pron: '[공팃잠 하이빈]', meaning: 'MTR 역이 어디예요?' },
            { text: '埋單，唔該', pron: '[마이단, 음고이]', meaning: '계산 부탁해요' },
            { text: '好靚', pron: '[호렝]', meaning: '정말 예뻐요' }
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
    macau: {
        id: 'macau',
        city: 'Macau',
        country: 'Macau',
        summary: '성바울 유적, 세나도 광장, 타이파, 코타이를 묶은 마카오 템플릿입니다.',
        footer: 'Macau works best when old stone and casino light stay in the same frame.',
        heroImage: 'assets/heroes/macau.jpg',
        timeZone: 'Asia/Macau',
        weather: { latitude: 22.1987, longitude: 113.5439 },
        currency: { code: 'MOP', symbol: 'MOP$', locale: 'zh-MO' },
        startOffsetDays: 7,
        phraseLabel: '廣東話',
        phrases: [
            { text: '唔該', pron: '[음고이]', meaning: '고맙습니다 / 부탁합니다' },
            { text: '多謝', pron: '[또제]', meaning: '정말 감사합니다' },
            { text: '呢個幾多錢？', pron: '[니고 게이도 친?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '역사 중심부',
                activities: [
                    { time: '10:00', title: '성 바울 성당 유적', type: 'landmark', location: 'Ruins of Saint Paul' },
                    { time: '13:00', title: '세나도 광장', type: 'map', location: 'Senado Square' },
                    { time: '18:30', title: '몬테 요새 야경', type: 'camera', location: 'Monte Fort' }
                ]
            },
            {
                title: '타이파 & 코타이',
                activities: [
                    { time: '10:30', title: '타이파 빌리지', type: 'shopping-bag', location: 'Taipa Village' },
                    { time: '14:00', title: '코타이 스트립', type: 'sparkles', location: 'Cotai Strip' },
                    { time: '19:00', title: '런더너 야경', type: 'moon-star', location: 'The Londoner Macao' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '마카오 타워', type: 'tower-control', location: 'Macau Tower' },
                    { time: '13:30', title: '에그타르트 브런치', type: 'coffee', location: 'Rua do Cunha' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Macau International Airport' }
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
        heroImage: 'assets/heroes/sydney.jpg',
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
        phraseLabel: 'English',
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
    perth: {
        id: 'perth',
        city: 'Perth',
        country: 'Australia',
        summary: '킹스파크, 강변, 해변, 도심 전망을 묶은 퍼스 템플릿입니다.',
        footer: 'Perth works when park light and ocean space stay in balance.',
        heroImage: 'assets/heroes/perth.jpg',
        timeZone: 'Australia/Perth',
        weather: { latitude: -31.9523, longitude: 115.8613 },
        currency: { code: 'AUD', symbol: 'A$', locale: 'en-AU' },
        startOffsetDays: 9,
        phraseLabel: 'English',
        phrases: [
            { text: 'No worries', pron: '[노 워리즈]', meaning: '괜찮아요' },
            { text: 'Cheers', pron: '[치어즈]', meaning: '고마워요' },
            { text: 'Takeaway, please', pron: '[테이크어웨이 플리즈]', meaning: '포장해주세요' }
        ],
        itineraryTemplate: [
            {
                title: '도심 & 강변',
                activities: [
                    { time: '10:00', title: '킹스파크 전망', type: 'binoculars', location: 'Kings Park and Botanic Garden' },
                    { time: '13:30', title: '엘리자베스 키', type: 'ship', location: 'Elizabeth Quay' },
                    { time: '18:30', title: '스완 강변 야경', type: 'moon-star', location: 'Swan River Perth' }
                ]
            },
            {
                title: '해변 데이',
                activities: [
                    { time: '10:30', title: '코츠슬로 비치', type: 'sun', location: 'Cottesloe Beach' },
                    { time: '13:30', title: '프리맨틀 마켓', type: 'shopping-bag', location: 'Fremantle Markets' },
                    { time: '18:00', title: '프리맨틀 항구', type: 'camera', location: 'Fremantle Harbour' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:00', title: '노스브리지 브런치', type: 'coffee', location: 'Northbridge Perth' },
                    { time: '13:00', title: '런던코트 산책', type: 'map', location: 'London Court' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Perth Airport' }
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
        heroImage: 'assets/heroes/beijing.jpg',
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
        phraseLabel: '中文',
        phrases: [
            { text: '你好', pron: '[니하오]', meaning: '안녕하세요' },
            { text: '谢谢', pron: '[셰셰]', meaning: '감사합니다' },
            { text: '请问', pron: '[칭원]', meaning: '실례합니다 / 물어볼게요' }
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
        heroImage: 'assets/heroes/shanghai.jpg',
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
        phraseLabel: '中文',
        phrases: [
            { text: '你好', pron: '[니하오]', meaning: '안녕하세요' },
            { text: '谢谢', pron: '[셰셰]', meaning: '감사합니다' },
            { text: '在哪里？', pron: '[짜이날리]', meaning: '어디에 있나요?' }
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
        heroImage: 'assets/heroes/taipei.jpg',
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
        phraseLabel: '繁體中文',
        phrases: [
            { text: '你好', pron: '[니하오]', meaning: '안녕하세요' },
            { text: '謝謝', pron: '[셰셰]', meaning: '감사합니다' },
            { text: '請問', pron: '[칭원]', meaning: '실례합니다 / 물어볼게요' }
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
        heroImage: 'assets/heroes/hanoi.jpg',
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
        phraseLabel: 'Tiếng Việt',
        phrases: [
            { text: 'Xin chào', pron: '[씬 짜오]', meaning: '안녕하세요' },
            { text: 'Cảm ơn', pron: '[깜 언]', meaning: '감사합니다' },
            { text: 'Cho tôi cái này', pron: '[쪼 또이 까이 나이]', meaning: '이거 주세요' }
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
        heroImage: 'assets/heroes/ho-chi-minh-city.jpg',
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
        phraseLabel: 'Tiếng Việt',
        phrases: [
            { text: 'Xin chào', pron: '[씬 짜오]', meaning: '안녕하세요' },
            { text: 'Cảm ơn', pron: '[깜 언]', meaning: '감사합니다' },
            { text: 'Tính tiền', pron: '[띵 띠엔]', meaning: '계산해 주세요' }
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
    },
    india: {
        id: 'india',
        city: 'Delhi',
        country: 'India',
        summary: '타지마할 무드와 델리 핵심 랜드마크, 시장, 야경을 묶은 인도 템플릿입니다.',
        footer: 'India feels richest when stone, spice, and late light share one route.',
        heroImage: 'assets/heroes/india.jpg',
        timeZone: 'Asia/Kolkata',
        weather: { latitude: 28.6139, longitude: 77.2090 },
        currency: { code: 'INR', symbol: '₹', locale: 'hi-IN' },
        startOffsetDays: 9,
        phraseLabel: 'हिन्दी',
        phrases: [
            { text: 'नमस्ते', pron: '[나마스떼]', meaning: '안녕하세요' },
            { text: 'धन्यवाद', pron: '[단냐바드]', meaning: '감사합니다' },
            { text: 'यह कितना है?', pron: '[예 키트나 헤?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '델리 워밍업',
                activities: [
                    { time: '10:00', title: '인디아 게이트', type: 'landmark', location: 'India Gate' },
                    { time: '13:30', title: '후마윤 묘', type: 'building-2', location: "Humayun's Tomb" },
                    { time: '18:30', title: '코노트 플레이스', type: 'lightbulb', location: 'Connaught Place' }
                ]
            },
            {
                title: '아그라 데이',
                activities: [
                    { time: '08:30', title: '타지마할', type: 'camera', location: 'Taj Mahal' },
                    { time: '13:30', title: '아그라 포트', type: 'landmark', location: 'Agra Fort' },
                    { time: '19:30', title: '야무나 강변 야경', type: 'moon-star', location: 'Mehtab Bagh' }
                ]
            },
            {
                title: '올드델리 & 출발',
                activities: [
                    { time: '10:00', title: '자마 마스지드', type: 'landmark', location: 'Jama Masjid' },
                    { time: '13:00', title: '찬드니 초크', type: 'store', location: 'Chandni Chowk' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Indira Gandhi International Airport' }
                ]
            }
        ]
    },
    philippines: {
        id: 'philippines',
        city: 'Manila',
        country: 'Philippines',
        summary: '인트라무로스, 도심 스카이라인, 강변, 야시장을 묶은 필리핀 템플릿입니다.',
        footer: 'The Philippines feels best when old walls and tropical evening light stay together.',
        heroImage: 'assets/heroes/philippines.jpg',
        timeZone: 'Asia/Manila',
        weather: { latitude: 14.5995, longitude: 120.9842 },
        currency: { code: 'PHP', symbol: '₱', locale: 'en-PH' },
        startOffsetDays: 8,
        phraseLabel: 'Filipino',
        phrases: [
            { text: 'Kumusta', pron: '[쿠무스타]', meaning: '안녕하세요' },
            { text: 'Salamat', pron: '[살라맛]', meaning: '감사합니다' },
            { text: 'Magkano ito?', pron: '[막까노 이토?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '마닐라 첫인상',
                activities: [
                    { time: '10:00', title: '인트라무로스', type: 'landmark', location: 'Intramuros' },
                    { time: '13:00', title: '산아구스틴 성당', type: 'landmark', location: 'San Agustin Church' },
                    { time: '18:30', title: '리잘 파크 선셋', type: 'sun', location: 'Rizal Park' }
                ]
            },
            {
                title: '도심 & 강변',
                activities: [
                    { time: '10:30', title: '마닐라 대성당', type: 'building', location: 'Manila Cathedral' },
                    { time: '13:30', title: '보니파시오 글로벌 시티', type: 'shopping-cart', location: 'Bonifacio Global City' },
                    { time: '18:30', title: '파시그 강변 야경', type: 'moon-star', location: 'Pasig River Esplanade' }
                ]
            },
            {
                title: '로컬 마켓 & 출발',
                activities: [
                    { time: '10:00', title: '디비소리아', type: 'shopping-bag', location: 'Divisoria Market' },
                    { time: '13:30', title: '현지 점심', type: 'utensils-crossed', location: 'Binondo' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Ninoy Aquino International Airport' }
                ]
            }
        ]
    },
    russia: {
        id: 'russia',
        city: 'Moscow',
        country: 'Russia',
        summary: '붉은광장, 크렘린, 강변, 대로 풍경을 묶은 러시아 템플릿입니다.',
        footer: 'Russia feels strongest when red walls and evening avenues stay in one arc.',
        heroImage: 'assets/heroes/russia.jpg',
        timeZone: 'Europe/Moscow',
        weather: { latitude: 55.7558, longitude: 37.6173 },
        currency: { code: 'RUB', symbol: '₽', locale: 'ru-RU' },
        startOffsetDays: 9,
        phraseLabel: 'Русский',
        phrases: [
            { text: 'Здравствуйте', pron: '[즈드라스트부이쩨]', meaning: '안녕하세요' },
            { text: 'Спасибо', pron: '[스빠시바]', meaning: '감사합니다' },
            { text: 'Сколько это стоит?', pron: '[스꼴까 에따 스또잇?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '붉은광장 데이',
                activities: [
                    { time: '10:00', title: '붉은광장', type: 'landmark', location: 'Red Square' },
                    { time: '13:00', title: '성 바실리 대성당', type: 'landmark', location: "Saint Basil's Cathedral" },
                    { time: '18:30', title: '굼 백화점 야경', type: 'lightbulb', location: 'GUM' }
                ]
            },
            {
                title: '크렘린 & 거리',
                activities: [
                    { time: '10:30', title: '크렘린', type: 'building', location: 'Moscow Kremlin' },
                    { time: '13:30', title: '알바트 거리', type: 'map', location: 'Arbat Street' },
                    { time: '18:30', title: '모스크바 강변', type: 'moon-star', location: 'Moskva River' }
                ]
            },
            {
                title: '전망 & 출발',
                activities: [
                    { time: '10:00', title: 'VDNKh 산책', type: 'sparkles', location: 'VDNKh' },
                    { time: '13:30', title: '자랴디예 파크', type: 'trees', location: 'Zaryadye Park' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Sheremetyevo International Airport' }
                ]
            }
        ]
    },
    vladivostok: {
        id: 'vladivostok',
        city: 'Vladivostok',
        country: 'Russia',
        summary: '해안 전망, 브리지, 항구 산책을 묶은 블라디보스토크 템플릿입니다.',
        footer: 'Vladivostok feels best when bridge lines and harbor light stay in one sweep.',
        heroImage: 'assets/heroes/vladivostok.jpg',
        timeZone: 'Asia/Vladivostok',
        weather: { latitude: 43.1155, longitude: 131.8855 },
        currency: { code: 'RUB', symbol: '₽', locale: 'ru-RU' },
        startOffsetDays: 9,
        phraseLabel: 'Русский',
        phrases: [
            { text: 'Здравствуйте', pron: '[즈드라스트부이쩨]', meaning: '안녕하세요' },
            { text: 'Спасибо', pron: '[스빠시바]', meaning: '감사합니다' },
            { text: 'Где вокзал?', pron: '[그제 박잘?]', meaning: '역이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '항구 첫인상',
                activities: [
                    { time: '10:00', title: '금각만 전망', type: 'binoculars', location: 'Golden Horn Bay' },
                    { time: '13:00', title: '중앙 광장', type: 'map', location: 'Vladivostok Central Square' },
                    { time: '18:30', title: '해안 산책로 야경', type: 'moon-star', location: 'Sportivnaya Naberezhnaya' }
                ]
            },
            {
                title: '브리지 & 언덕',
                activities: [
                    { time: '10:30', title: '독수리 전망대', type: 'camera', location: 'Eagle’s Nest Hill' },
                    { time: '13:30', title: '금각교', type: 'bridge', location: 'Zolotoy Bridge' },
                    { time: '18:00', title: '루스키섬', type: 'ship', location: 'Russky Island' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:00', title: '혁명광장 산책', type: 'sparkles', location: 'Railway Square Vladivostok' },
                    { time: '13:30', title: '카페 브런치', type: 'coffee', location: 'Arbat Vladivostok' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Vladivostok International Airport' }
                ]
            }
        ]
    },
    canada: {
        id: 'canada',
        city: 'Toronto',
        country: 'Canada',
        summary: '스카이라인, 수변 산책, 마켓, 타워 전망을 묶은 캐나다 템플릿입니다.',
        footer: 'Canada feels calmest when skyline, water, and markets stay in one sweep.',
        heroImage: 'assets/heroes/canada.jpg',
        timeZone: 'America/Toronto',
        weather: { latitude: 43.6532, longitude: -79.3832 },
        currency: { code: 'CAD', symbol: 'C$', locale: 'en-CA' },
        startOffsetDays: 8,
        phraseLabel: 'English',
        phrases: [
            { text: 'Hello', pron: '[헬로]', meaning: '안녕하세요' },
            { text: 'Thank you', pron: '[땡큐]', meaning: '감사합니다' },
            { text: 'Where is the station?', pron: '[웨어 이즈 더 스테이션?]', meaning: '역이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '다운타운 워밍업',
                activities: [
                    { time: '10:00', title: 'CN 타워', type: 'tower-control', location: 'CN Tower' },
                    { time: '13:00', title: '리플리 수족관', type: 'camera', location: "Ripley's Aquarium of Canada" },
                    { time: '18:30', title: '하버프런트 야경', type: 'moon-star', location: 'Harbourfront Centre' }
                ]
            },
            {
                title: '로컬 마켓',
                activities: [
                    { time: '10:30', title: '세인트로렌스 마켓', type: 'store', location: 'St. Lawrence Market' },
                    { time: '13:30', title: '디스틸러리 디스트릭트', type: 'map', location: 'Distillery District' },
                    { time: '18:30', title: '영-던다스 스퀘어', type: 'lightbulb', location: 'Yonge-Dundas Square' }
                ]
            },
            {
                title: '파크 & 출발',
                activities: [
                    { time: '10:00', title: '토론토 아일랜드', type: 'ship', location: 'Toronto Islands' },
                    { time: '13:30', title: '기념품 쇼핑', type: 'gift', location: 'Eaton Centre' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Toronto Pearson International Airport' }
                ]
            }
        ]
    },
    vancouver: {
        id: 'vancouver',
        city: 'Vancouver',
        country: 'Canada',
        summary: '사이언스 월드, 수변 산책, 공원, 전망 포인트를 묶은 밴쿠버 템플릿입니다.',
        footer: 'Vancouver works best when Science World and the waterfront stay in one skyline.',
        heroImage: 'assets/heroes/vancouver.jpg',
        timeZone: 'America/Vancouver',
        weather: { latitude: 49.2827, longitude: -123.1207 },
        currency: { code: 'CAD', symbol: 'C$', locale: 'en-CA' },
        startOffsetDays: 8,
        phraseLabel: 'English',
        phrases: [
            { text: 'Hello', pron: '[헬로]', meaning: '안녕하세요' },
            { text: 'Thank you', pron: '[땡큐]', meaning: '감사합니다' },
            { text: 'How do I get there?', pron: '[하우 두 아이 겟 데어?]', meaning: '거기 어떻게 가요?' }
        ],
        itineraryTemplate: [
            {
                title: '워터프런트 데이',
                activities: [
                    { time: '10:00', title: '사이언스 월드', type: 'landmark', location: 'Science World Vancouver' },
                    { time: '13:30', title: '가스타운', type: 'map', location: 'Gastown' },
                    { time: '18:30', title: '폴스 크릭 야경', type: 'moon-star', location: 'False Creek Vancouver' }
                ]
            },
            {
                title: '공원 & 전망',
                activities: [
                    { time: '10:00', title: '스탠리 파크', type: 'trees', location: 'Stanley Park' },
                    { time: '13:30', title: '그랜빌 아일랜드', type: 'shopping-bag', location: 'Granville Island' },
                    { time: '18:00', title: '잉글리시 베이 선셋', type: 'sun', location: 'English Bay' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카필라노 전망', type: 'binoculars', location: 'Capilano Suspension Bridge Park' },
                    { time: '13:30', title: '카페 브런치', type: 'coffee', location: 'Yaletown' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Vancouver International Airport' }
                ]
            }
        ]
    },
    mexico: {
        id: 'mexico',
        city: 'Mexico City',
        country: 'Mexico',
        summary: '대광장, 벨라스 아르테스, 공원, 시장을 묶은 멕시코 템플릿입니다.',
        footer: 'Mexico feels richest when plaza, colour, and food stay in one route.',
        heroImage: 'assets/heroes/mexico.jpg',
        timeZone: 'America/Mexico_City',
        weather: { latitude: 19.4326, longitude: -99.1332 },
        currency: { code: 'MXN', symbol: 'MX$', locale: 'es-MX' },
        startOffsetDays: 9,
        phraseLabel: 'Español',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: '¿Cuánto cuesta?', pron: '[꾸안또 꾸에스타?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '센트로 히스토리코',
                activities: [
                    { time: '10:00', title: '소칼로', type: 'landmark', location: 'Zócalo' },
                    { time: '13:00', title: '벨라스 아르테스 궁전', type: 'building-2', location: 'Palacio de Bellas Artes' },
                    { time: '18:30', title: '알라메다 센트럴', type: 'trees', location: 'Alameda Central' }
                ]
            },
            {
                title: '공원 & 박물관',
                activities: [
                    { time: '10:30', title: '차풀테펙 공원', type: 'map', location: 'Chapultepec Park' },
                    { time: '13:30', title: '국립인류학박물관', type: 'building', location: 'National Museum of Anthropology' },
                    { time: '18:30', title: '로마 노르테', type: 'coffee', location: 'Roma Norte' }
                ]
            },
            {
                title: '마켓 & 출발',
                activities: [
                    { time: '10:00', title: '코요아칸', type: 'sparkles', location: 'Coyoacán' },
                    { time: '13:30', title: '산후안 마켓', type: 'store', location: 'Mercado de San Juan' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Mexico City International Airport' }
                ]
            }
        ]
    },
    cancun: {
        id: 'cancun',
        city: 'Cancun',
        country: 'Mexico',
        summary: '해변, 전망 포인트, 페리, 야경을 묶은 칸쿤 템플릿입니다.',
        footer: 'Cancun feels best when beach blue and night light stay easy and bright.',
        heroImage: 'assets/heroes/cancun.jpg',
        timeZone: 'America/Cancun',
        weather: { latitude: 21.1619, longitude: -86.8515 },
        currency: { code: 'MXN', symbol: 'MX$', locale: 'es-MX' },
        startOffsetDays: 9,
        phraseLabel: 'Español',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: '¿Dónde está la playa?', pron: '[돈데 에스타 라 쁠라야?]', meaning: '해변이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '비치 워밍업',
                activities: [
                    { time: '10:00', title: '플라야 델피네스', type: 'sun', location: 'Playa Delfines' },
                    { time: '13:30', title: '호텔존 산책', type: 'map', location: 'Zona Hotelera' },
                    { time: '18:30', title: '해변 선셋', type: 'moon-star', location: 'Cancun Beach' }
                ]
            },
            {
                title: '바다 & 시티뷰',
                activities: [
                    { time: '10:30', title: '이슬라 무헤레스 페리', type: 'ship', location: 'Ultramar Ferry Puerto Juárez' },
                    { time: '14:00', title: '라 이슬라 쇼핑빌리지', type: 'shopping-cart', location: 'La Isla Cancún' },
                    { time: '19:00', title: '코코봉고 주변 야경', type: 'sparkles', location: 'Coco Bongo Cancun' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '로컬 브런치', type: 'coffee', location: 'Downtown Cancun' },
                    { time: '13:30', title: '기념품 쇼핑', type: 'gift', location: 'Mercado 28' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Cancún International Airport' }
                ]
            }
        ]
    },
    brazil: {
        id: 'brazil',
        city: 'Rio de Janeiro',
        country: 'Brazil',
        summary: '구세주상, 해변, 케이블카, 밤거리를 묶은 브라질 템플릿입니다.',
        footer: 'Brazil feels brightest when sea, mountain, and night stay in the same rhythm.',
        heroImage: 'assets/heroes/brazil.jpg',
        timeZone: 'America/Sao_Paulo',
        weather: { latitude: -22.9068, longitude: -43.1729 },
        currency: { code: 'BRL', symbol: 'R$', locale: 'pt-BR' },
        startOffsetDays: 10,
        phraseLabel: 'Português',
        phrases: [
            { text: 'Olá', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Obrigado', pron: '[오브리가두]', meaning: '감사합니다' },
            { text: 'Quanto custa?', pron: '[꾸안뚜 꾸스타?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '리우 첫인상',
                activities: [
                    { time: '10:00', title: '구세주상', type: 'landmark', location: 'Christ the Redeemer' },
                    { time: '13:30', title: '셀라론 계단', type: 'camera', location: 'Escadaria Selarón' },
                    { time: '18:30', title: '라파 야경', type: 'moon-star', location: 'Lapa' }
                ]
            },
            {
                title: '바다와 전망',
                activities: [
                    { time: '10:30', title: '슈가로프 마운틴', type: 'binoculars', location: 'Sugarloaf Mountain' },
                    { time: '14:00', title: '코파카바나 비치', type: 'sun', location: 'Copacabana Beach' },
                    { time: '18:30', title: '이파네마 선셋', type: 'sparkles', location: 'Ipanema Beach' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:00', title: '산타 테레사 산책', type: 'map', location: 'Santa Teresa' },
                    { time: '13:30', title: '로컬 점심', type: 'utensils-crossed', location: 'Leblon' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Rio de Janeiro/Galeão International Airport' }
                ]
            }
        ]
    },
    argentina: {
        id: 'argentina',
        city: 'Buenos Aires',
        country: 'Argentina',
        summary: '오벨리스크, 광장, 카페, 탱고 무드를 묶은 아르헨티나 템플릿입니다.',
        footer: 'Argentina feels best when wide avenues, cafes, and late music share one day.',
        heroImage: 'assets/heroes/argentina.jpg',
        timeZone: 'America/Argentina/Buenos_Aires',
        weather: { latitude: -34.6037, longitude: -58.3816 },
        currency: { code: 'ARS', symbol: 'AR$', locale: 'es-AR' },
        startOffsetDays: 10,
        phraseLabel: 'Español',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: 'La cuenta, por favor', pron: '[라 꾸엔따 뽀르 파보르]', meaning: '계산서 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '센트로 데이',
                activities: [
                    { time: '10:00', title: '오벨리스크', type: 'landmark', location: 'Obelisco de Buenos Aires' },
                    { time: '13:00', title: '카사 로사다', type: 'building', location: 'Casa Rosada' },
                    { time: '18:30', title: '플로리다 거리', type: 'shopping-bag', location: 'Calle Florida' }
                ]
            },
            {
                title: '로컬 산책',
                activities: [
                    { time: '10:30', title: '산 텔모', type: 'map', location: 'San Telmo' },
                    { time: '13:30', title: '레콜레타 공동묘지', type: 'landmark', location: 'Recoleta Cemetery' },
                    { time: '19:00', title: '탱고 나이트', type: 'music', location: 'La Boca' }
                ]
            },
            {
                title: '공원 & 출발',
                activities: [
                    { time: '10:30', title: '팔레르모 공원', type: 'trees', location: 'Parque Tres de Febrero' },
                    { time: '13:30', title: '카페 타임', type: 'coffee', location: 'Palermo Soho' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Ministro Pistarini International Airport' }
                ]
            }
        ]
    },
    germany: {
        id: 'germany',
        city: 'Berlin',
        country: 'Germany',
        summary: '브란덴부르크문, 박물관섬, 장벽 흔적, 강변을 묶은 독일 템플릿입니다.',
        footer: 'Germany feels sharp when gates, museums, and broad avenues stay in one frame.',
        heroImage: 'assets/heroes/germany.jpg',
        timeZone: 'Europe/Berlin',
        weather: { latitude: 52.5200, longitude: 13.4050 },
        currency: { code: 'EUR', symbol: '€', locale: 'de-DE' },
        startOffsetDays: 8,
        phraseLabel: 'Deutsch',
        phrases: [
            { text: 'Hallo', pron: '[할로]', meaning: '안녕하세요' },
            { text: 'Danke', pron: '[당케]', meaning: '감사합니다' },
            { text: 'Wo ist der Bahnhof?', pron: '[보 이스트 데어 반호프?]', meaning: '역이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '베를린 첫인상',
                activities: [
                    { time: '10:00', title: '브란덴부르크문', type: 'landmark', location: 'Brandenburg Gate' },
                    { time: '13:00', title: '독일 국회의사당', type: 'building', location: 'Reichstag Building' },
                    { time: '18:30', title: '운터 덴 린덴', type: 'map', location: 'Unter den Linden' }
                ]
            },
            {
                title: '역사 & 아트',
                activities: [
                    { time: '10:30', title: '박물관섬', type: 'building-2', location: 'Museum Island' },
                    { time: '13:30', title: '이스트 사이드 갤러리', type: 'palette', location: 'East Side Gallery' },
                    { time: '18:30', title: '알렉산더플라츠', type: 'lightbulb', location: 'Alexanderplatz' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:00', title: '티어가르텐 산책', type: 'trees', location: 'Tiergarten' },
                    { time: '13:00', title: '카페 타임', type: 'coffee', location: 'Mitte Berlin' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Berlin Brandenburg Airport' }
                ]
            }
        ]
    },
    egypt: {
        id: 'egypt',
        city: 'Cairo',
        country: 'Egypt',
        summary: '피라미드, 강변, 시장, 모스크를 묶은 이집트 템플릿입니다.',
        footer: 'Egypt feels timeless when stone, river, and market sound stay in one loop.',
        heroImage: 'assets/heroes/egypt.jpg',
        timeZone: 'Africa/Cairo',
        weather: { latitude: 30.0444, longitude: 31.2357 },
        currency: { code: 'EGP', symbol: 'E£', locale: 'ar-EG' },
        startOffsetDays: 9,
        phraseLabel: 'العربية',
        phrases: [
            { text: 'مرحبا', pron: '[마르하바]', meaning: '안녕하세요' },
            { text: 'شكرا', pron: '[슈크란]', meaning: '감사합니다' },
            { text: 'بكم هذا؟', pron: '[비캄 하다?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '기자 데이',
                activities: [
                    { time: '09:30', title: '기자 피라미드', type: 'landmark', location: 'Giza Pyramid Complex' },
                    { time: '13:30', title: '스핑크스', type: 'camera', location: 'Great Sphinx of Giza' },
                    { time: '18:30', title: '나일강 디너 크루즈', type: 'ship', location: 'Nile River Dinner Cruise Cairo' }
                ]
            },
            {
                title: '카이로 중심부',
                activities: [
                    { time: '10:30', title: '이집트 박물관', type: 'building-2', location: 'Egyptian Museum' },
                    { time: '13:30', title: '칸 엘 칼릴리', type: 'store', location: 'Khan el-Khalili' },
                    { time: '18:30', title: '알모에즈 거리', type: 'lightbulb', location: 'Al-Muizz Street' }
                ]
            },
            {
                title: '모스크 & 출발',
                activities: [
                    { time: '10:00', title: '무함마드 알리 모스크', type: 'landmark', location: 'Mosque of Muhammad Ali' },
                    { time: '13:30', title: '자말렉 브런치', type: 'coffee', location: 'Zamalek' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Cairo International Airport' }
                ]
            }
        ]
    },
    guam: {
        id: 'guam',
        city: 'Guam',
        country: 'Guam',
        summary: '투몬 베이, 전망대, 쇼핑, 선셋 비치를 묶은 괌 템플릿입니다.',
        footer: 'Guam feels best when reef colour and sunset pace stay slow.',
        heroImage: 'assets/heroes/guam.jpg',
        timeZone: 'Pacific/Guam',
        weather: { latitude: 13.4443, longitude: 144.7937 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 7,
        phraseLabel: 'Chamoru',
        phrases: [
            { text: 'Håfa adai', pron: '[하파 아다이]', meaning: '안녕하세요' },
            { text: 'Si Yu’os ma’åse’', pron: '[시 유오스 마아세]', meaning: '감사합니다' },
            { text: 'Adios', pron: '[아디오스]', meaning: '안녕히 가세요' }
        ],
        itineraryTemplate: [
            {
                title: '투몬 워밍업',
                activities: [
                    { time: '10:00', title: '투몬 베이', type: 'sun', location: 'Tumon Bay' },
                    { time: '13:00', title: '언더워터 월드', type: 'camera', location: 'UnderWater World Guam' },
                    { time: '18:30', title: '비치 선셋', type: 'moon-star', location: 'Gun Beach' }
                ]
            },
            {
                title: '전망 & 쇼핑',
                activities: [
                    { time: '10:30', title: '사랑의 절벽', type: 'binoculars', location: 'Two Lovers Point' },
                    { time: '13:30', title: '마이크로네시아몰', type: 'shopping-cart', location: 'Micronesia Mall' },
                    { time: '18:30', title: '로컬 디너', type: 'utensils-crossed', location: 'Tumon Guam' }
                ]
            },
            {
                title: '마지막 비치 & 출발',
                activities: [
                    { time: '10:00', title: '이파오 비치', type: 'sun', location: 'Ypao Beach' },
                    { time: '13:30', title: '기념품 쇼핑', type: 'gift', location: 'The Plaza Shopping Center' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Antonio B. Won Pat International Airport' }
                ]
            }
        ]
    },
    hawaii: {
        id: 'hawaii',
        city: 'Hawaii',
        country: 'United States',
        summary: '와이키키, 다이아몬드 헤드, 수변 산책, 선셋을 묶은 하와이 템플릿입니다.',
        footer: 'Hawaii feels best when waves, ridge lines, and sunset stay in one day.',
        heroImage: 'assets/heroes/hawaii.jpg',
        timeZone: 'Pacific/Honolulu',
        weather: { latitude: 21.3099, longitude: -157.8581 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 8,
        phraseLabel: 'ʻŌlelo Hawaiʻi',
        phrases: [
            { text: 'Aloha', pron: '[알로하]', meaning: '안녕하세요 / 사랑 / 환영' },
            { text: 'Mahalo', pron: '[마할로]', meaning: '감사합니다' },
            { text: 'E kala mai', pron: '[에 칼라 마이]', meaning: '실례합니다 / 미안해요' }
        ],
        itineraryTemplate: [
            {
                title: '와이키키 데이',
                activities: [
                    { time: '10:00', title: '와이키키 비치', type: 'sun', location: 'Waikiki Beach' },
                    { time: '13:30', title: '로열 하와이안 센터', type: 'shopping-bag', location: 'Royal Hawaiian Center' },
                    { time: '18:30', title: '쿠히오 비치 선셋', type: 'moon-star', location: 'Kuhio Beach' }
                ]
            },
            {
                title: '전망 & 산책',
                activities: [
                    { time: '09:30', title: '다이아몬드 헤드', type: 'binoculars', location: 'Diamond Head State Monument' },
                    { time: '13:30', title: '카카아코 벽화 거리', type: 'palette', location: 'Kakaʻako' },
                    { time: '18:00', title: '알라모아나 비치', type: 'sun', location: 'Ala Moana Beach Park' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:00', title: '하버 산책', type: 'ship', location: 'Aloha Tower' },
                    { time: '13:00', title: '로컬 브런치', type: 'coffee', location: 'Honolulu' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Daniel K. Inouye International Airport' }
                ]
            }
        ]
    },
    alaska: {
        id: 'alaska',
        city: 'Alaska',
        country: 'United States',
        summary: '빙하 전망, 야생 풍경, 수변 산책을 묶은 알래스카 템플릿입니다.',
        footer: 'Alaska feels best when mountain scale and cold light stay wide open.',
        heroImage: 'assets/heroes/alaska.jpg',
        timeZone: 'America/Anchorage',
        weather: { latitude: 61.2181, longitude: -149.9003 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 9,
        phraseLabel: 'English',
        phrases: [
            { text: 'Thanks', pron: '[땡스]', meaning: '고마워요' },
            { text: 'Is the trail open?', pron: '[이즈 더 트레일 오픈?]', meaning: '트레일 열려 있나요?' },
            { text: 'The view is unreal', pron: '[더 뷰 이즈 언리얼]', meaning: '풍경이 정말 대단하네요' }
        ],
        itineraryTemplate: [
            {
                title: '앵커리지 워밍업',
                activities: [
                    { time: '10:00', title: '토니 놀스 코스탈 트레일', type: 'map', location: 'Tony Knowles Coastal Trail' },
                    { time: '13:30', title: '뮤지엄 산책', type: 'building-2', location: 'Anchorage Museum' },
                    { time: '18:00', title: '쿡 인렛 야경', type: 'moon-star', location: 'Point Woronzof' }
                ]
            },
            {
                title: '빙하 데이',
                activities: [
                    { time: '09:00', title: '포티지 빙하', type: 'camera', location: 'Portage Glacier' },
                    { time: '13:00', title: '야생 풍경 드라이브', type: 'binoculars', location: 'Turnagain Arm' },
                    { time: '18:00', title: '수변 디너', type: 'utensils-crossed', location: 'Seward Highway Lookout' }
                ]
            },
            {
                title: '마지막 전망 & 출발',
                activities: [
                    { time: '10:00', title: '플랫탑 전망', type: 'trees', location: 'Flattop Mountain Trail' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Downtown Anchorage' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Ted Stevens Anchorage International Airport' }
                ]
            }
        ]
    },
    texas: {
        id: 'texas',
        city: 'Texas',
        country: 'United States',
        summary: '스카이라인, 브런치, 라이브 음악, 강변 산책을 묶은 텍사스 템플릿입니다.',
        footer: 'Texas works when skyline, food, and music stay warm and loose.',
        heroImage: 'assets/heroes/texas.jpg',
        timeZone: 'America/Chicago',
        weather: { latitude: 30.2672, longitude: -97.7431 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 8,
        phraseLabel: 'English',
        phrases: [
            { text: 'Howdy', pron: '[하우디]', meaning: '안녕하세요' },
            { text: 'I’ll take barbecue', pron: '[아일 테이크 바비큐]', meaning: '바비큐로 할게요' },
            { text: 'Where’s the live music?', pron: '[웨어즈 더 라이브 뮤직?]', meaning: '라이브 공연 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '오스틴 첫인상',
                activities: [
                    { time: '10:00', title: '사우스 콩그레스', type: 'map', location: 'South Congress Avenue' },
                    { time: '13:30', title: '텍사스 주의사당', type: 'landmark', location: 'Texas State Capitol' },
                    { time: '18:30', title: '레이디 버드 호수', type: 'moon-star', location: 'Lady Bird Lake' }
                ]
            },
            {
                title: '브런치 & 음악',
                activities: [
                    { time: '10:00', title: '브런치 카페', type: 'coffee', location: 'South Lamar Austin' },
                    { time: '13:30', title: '질커 공원', type: 'trees', location: 'Zilker Metropolitan Park' },
                    { time: '19:00', title: '라이브 음악 거리', type: 'music', location: '6th Street Austin' }
                ]
            },
            {
                title: '바비큐 & 출발',
                activities: [
                    { time: '10:30', title: '텍사스 바비큐', type: 'utensils-crossed', location: 'Franklin Barbecue' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'The Domain Austin' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Austin-Bergstrom International Airport' }
                ]
            }
        ]
    },
    czech: {
        id: 'czech',
        city: 'Prague',
        country: 'Czech Republic',
        summary: '프라하성, 카를교, 광장, 야경을 묶은 체코 템플릿입니다.',
        footer: 'Prague works when bridges, stone lanes, and night light stay close together.',
        heroImage: 'assets/heroes/czech.jpg',
        timeZone: 'Europe/Prague',
        weather: { latitude: 50.0755, longitude: 14.4378 },
        currency: { code: 'CZK', symbol: 'Kč', locale: 'cs-CZ' },
        startOffsetDays: 7,
        phraseLabel: 'Čeština',
        phrases: [
            { text: 'Dobrý den', pron: '[도브리 덴]', meaning: '안녕하세요' },
            { text: 'Děkuji', pron: '[제쿠이]', meaning: '감사합니다' },
            { text: 'Kolik to stojí?', pron: '[콜릭 또 스토이?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '올드타운 워밍업',
                activities: [
                    { time: '10:00', title: '구시가 광장', type: 'landmark', location: 'Old Town Square Prague' },
                    { time: '13:30', title: '천문시계', type: 'camera', location: 'Prague Astronomical Clock' },
                    { time: '18:30', title: '카를교 야경', type: 'bridge', location: 'Charles Bridge' }
                ]
            },
            {
                title: '성 & 전망',
                activities: [
                    { time: '10:00', title: '프라하성', type: 'landmark', location: 'Prague Castle' },
                    { time: '13:30', title: '성비투스 대성당', type: 'building', location: 'St. Vitus Cathedral' },
                    { time: '18:00', title: '레트나 전망', type: 'binoculars', location: 'Letna Park' }
                ]
            },
            {
                title: '카페 & 출발',
                activities: [
                    { time: '10:30', title: '블타바 강변 산책', type: 'map', location: 'Vltava Riverside' },
                    { time: '13:30', title: '카페 브런치', type: 'coffee', location: 'Malá Strana' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Václav Havel Airport Prague' }
                ]
            }
        ]
    },
    poland: {
        id: 'poland',
        city: 'Warsaw',
        country: 'Poland',
        summary: '구시가지, 궁전, 공원, 강변 야경을 묶은 폴란드 템플릿입니다.',
        footer: 'Poland works when old squares and modern skyline stay in one rhythm.',
        heroImage: 'assets/heroes/poland.jpg',
        timeZone: 'Europe/Warsaw',
        weather: { latitude: 52.2297, longitude: 21.0122 },
        currency: { code: 'PLN', symbol: 'zł', locale: 'pl-PL' },
        startOffsetDays: 7,
        phraseLabel: 'Polski',
        phrases: [
            { text: 'Dzień dobry', pron: '[젠 도브리]', meaning: '안녕하세요' },
            { text: 'Dziękuję', pron: '[젠쿠예]', meaning: '감사합니다' },
            { text: 'Gdzie jest metro?', pron: '[그제 예스트 메트로?]', meaning: '지하철 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '광장 & 산책',
                activities: [
                    { time: '10:00', title: '구시가지 광장', type: 'landmark', location: 'Old Town Market Place Warsaw' },
                    { time: '13:30', title: '왕궁', type: 'building', location: 'Royal Castle Warsaw' },
                    { time: '18:30', title: '비스와 강변', type: 'moon-star', location: 'Vistula Boulevards' }
                ]
            },
            {
                title: '공원 & 전망',
                activities: [
                    { time: '10:00', title: '와지엔키 공원', type: 'trees', location: 'Łazienki Park' },
                    { time: '13:30', title: '문화과학궁전', type: 'building', location: 'Palace of Culture and Science' },
                    { time: '18:00', title: '도심 야경', type: 'binoculars', location: 'Warsaw Viewpoint' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Śródmieście Warsaw' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Nowy Świat' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Warsaw Chopin Airport' }
                ]
            }
        ]
    },
    denmark: {
        id: 'denmark',
        city: 'Copenhagen',
        country: 'Denmark',
        summary: '니하운, 궁전, 운하, 북유럽 산책을 묶은 덴마크 템플릿입니다.',
        footer: 'Denmark works when canals, colour, and a clean walkable pace stay light.',
        heroImage: 'assets/heroes/denmark.jpg',
        timeZone: 'Europe/Copenhagen',
        weather: { latitude: 55.6761, longitude: 12.5683 },
        currency: { code: 'DKK', symbol: 'kr', locale: 'da-DK' },
        startOffsetDays: 7,
        phraseLabel: 'Dansk',
        phrases: [
            { text: 'Hej', pron: '[하이]', meaning: '안녕하세요' },
            { text: 'Tak', pron: '[탁]', meaning: '감사합니다' },
            { text: 'Hvor er stationen?', pron: '[보어 에어 스테이쇼넨?]', meaning: '역이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '니하운 워밍업',
                activities: [
                    { time: '10:00', title: '니하운', type: 'camera', location: 'Nyhavn' },
                    { time: '13:30', title: '아말리엔보르 궁전', type: 'landmark', location: 'Amalienborg Palace' },
                    { time: '18:30', title: '운하 야경', type: 'ship', location: 'Copenhagen Canal' }
                ]
            },
            {
                title: '도심 산책',
                activities: [
                    { time: '10:00', title: '스트뢰에 거리', type: 'shopping-bag', location: 'Strøget' },
                    { time: '13:30', title: '로젠보르성', type: 'building', location: 'Rosenborg Castle' },
                    { time: '18:00', title: '티볼리 가든', type: 'sparkles', location: 'Tivoli Gardens' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Christianshavn' },
                    { time: '13:30', title: '인어공주 동상', type: 'map', location: 'The Little Mermaid' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Copenhagen Airport' }
                ]
            }
        ]
    },
    sweden: {
        id: 'sweden',
        city: 'Stockholm',
        country: 'Sweden',
        summary: '감라스탄, 수변, 전망, 박물관을 묶은 스웨덴 템플릿입니다.',
        footer: 'Sweden feels best when water, stone alleys, and clean design stay together.',
        heroImage: 'assets/heroes/sweden.jpg',
        timeZone: 'Europe/Stockholm',
        weather: { latitude: 59.3293, longitude: 18.0686 },
        currency: { code: 'SEK', symbol: 'kr', locale: 'sv-SE' },
        startOffsetDays: 7,
        phraseLabel: 'Svenska',
        phrases: [
            { text: 'Hej', pron: '[헤이]', meaning: '안녕하세요' },
            { text: 'Tack', pron: '[탁]', meaning: '감사합니다' },
            { text: 'Var ligger stationen?', pron: '[바 리게르 스타쇼넨?]', meaning: '역이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '감라스탄 데이',
                activities: [
                    { time: '10:00', title: '감라스탄', type: 'map', location: 'Gamla Stan' },
                    { time: '13:30', title: '왕궁', type: 'landmark', location: 'Stockholm Palace' },
                    { time: '18:30', title: '수변 야경', type: 'moon-star', location: 'Skeppsbron' }
                ]
            },
            {
                title: '전망 & 박물관',
                activities: [
                    { time: '10:00', title: '피엘가탄 전망', type: 'binoculars', location: 'Fjällgatan' },
                    { time: '13:30', title: '바사 박물관', type: 'building-2', location: 'Vasa Museum' },
                    { time: '18:00', title: '쇠데르말름 산책', type: 'shopping-bag', location: 'Södermalm' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Östermalm' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'NK Stockholm' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Stockholm Arlanda Airport' }
                ]
            }
        ]
    },
    norway: {
        id: 'norway',
        city: 'Oslo',
        country: 'Norway',
        summary: '오슬로 오페라하우스, 항구, 공원, 전망을 묶은 노르웨이 템플릿입니다.',
        footer: 'Norway works when harbour light and clean northern air stay crisp.',
        heroImage: 'assets/heroes/norway.jpg',
        timeZone: 'Europe/Oslo',
        weather: { latitude: 59.9139, longitude: 10.7522 },
        currency: { code: 'NOK', symbol: 'kr', locale: 'nb-NO' },
        startOffsetDays: 7,
        phraseLabel: 'Norsk',
        phrases: [
            { text: 'Hei', pron: '[헤이]', meaning: '안녕하세요' },
            { text: 'Takk', pron: '[탁]', meaning: '감사합니다' },
            { text: 'Hvor er sentrum?', pron: '[보어 에어 센트룸?]', meaning: '중심가는 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '항구 워밍업',
                activities: [
                    { time: '10:00', title: '오페라하우스', type: 'building', location: 'Oslo Opera House' },
                    { time: '13:30', title: '비그되이 산책', type: 'map', location: 'Bygdøy' },
                    { time: '18:30', title: '비외르비카 야경', type: 'moon-star', location: 'Bjørvika' }
                ]
            },
            {
                title: '도심 & 공원',
                activities: [
                    { time: '10:00', title: '아케르브리게', type: 'shopping-bag', location: 'Aker Brygge' },
                    { time: '13:30', title: '비겔란 공원', type: 'trees', location: 'Vigeland Park' },
                    { time: '18:00', title: '홀멘콜렌 전망', type: 'binoculars', location: 'Holmenkollen' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Grünerløkka' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Karl Johans gate' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Oslo Airport' }
                ]
            }
        ]
    },
    finland: {
        id: 'finland',
        city: 'Helsinki',
        country: 'Finland',
        summary: '헬싱키 대성당, 항구, 디자인 지구를 묶은 핀란드 템플릿입니다.',
        footer: 'Finland works when harbour calm and clean city lines stay minimal.',
        heroImage: 'assets/heroes/finland.jpg',
        timeZone: 'Europe/Helsinki',
        weather: { latitude: 60.1699, longitude: 24.9384 },
        currency: { code: 'EUR', symbol: '€', locale: 'fi-FI' },
        startOffsetDays: 7,
        phraseLabel: 'Suomi',
        phrases: [
            { text: 'Hei', pron: '[헤이]', meaning: '안녕하세요' },
            { text: 'Kiitos', pron: '[키이토스]', meaning: '감사합니다' },
            { text: 'Missä asema on?', pron: '[미싸 아세마 온?]', meaning: '역이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '광장 & 항구',
                activities: [
                    { time: '10:00', title: '헬싱키 대성당', type: 'landmark', location: 'Helsinki Cathedral' },
                    { time: '13:30', title: '마켓 스퀘어', type: 'shopping-bag', location: 'Market Square Helsinki' },
                    { time: '18:30', title: '사우스 하버', type: 'ship', location: 'South Harbour Helsinki' }
                ]
            },
            {
                title: '디자인 산책',
                activities: [
                    { time: '10:00', title: '템펠리아우키오 교회', type: 'building', location: 'Temppeliaukio Church' },
                    { time: '13:30', title: '디자인 지구', type: 'map', location: 'Design District Helsinki' },
                    { time: '18:00', title: '에스플러네이드', type: 'trees', location: 'Esplanadi' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Kallio Helsinki' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Kamppi Helsinki' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Helsinki Airport' }
                ]
            }
        ]
    },
    austria: {
        id: 'austria',
        city: 'Vienna',
        country: 'Austria',
        summary: '쇤브룬, 구시가지, 카페, 클래식 무드를 묶은 오스트리아 템플릿입니다.',
        footer: 'Austria works when palace scale and cafe rhythm stay elegant.',
        heroImage: 'assets/heroes/austria.jpg',
        timeZone: 'Europe/Vienna',
        weather: { latitude: 48.2082, longitude: 16.3738 },
        currency: { code: 'EUR', symbol: '€', locale: 'de-AT' },
        startOffsetDays: 7,
        phraseLabel: 'Deutsch',
        phrases: [
            { text: 'Guten Tag', pron: '[구튼 탁]', meaning: '안녕하세요' },
            { text: 'Danke', pron: '[당케]', meaning: '감사합니다' },
            { text: 'Wo ist die U-Bahn?', pron: '[보 이스트 디 우반?]', meaning: '지하철 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '궁전 워밍업',
                activities: [
                    { time: '10:00', title: '쇤브룬 궁전', type: 'landmark', location: 'Schönbrunn Palace' },
                    { time: '13:30', title: '궁전 정원', type: 'trees', location: 'Schönbrunn Palace Gardens' },
                    { time: '18:30', title: '글로리에테 전망', type: 'binoculars', location: 'Gloriette Vienna' }
                ]
            },
            {
                title: '구시가지 데이',
                activities: [
                    { time: '10:00', title: '슈테판 대성당', type: 'building', location: "St. Stephen's Cathedral, Vienna" },
                    { time: '13:30', title: '그라벤 산책', type: 'shopping-bag', location: 'Graben Vienna' },
                    { time: '18:00', title: '오페라하우스 야경', type: 'music', location: 'Vienna State Opera' }
                ]
            },
            {
                title: '카페 & 출발',
                activities: [
                    { time: '10:30', title: '비엔나 카페', type: 'coffee', location: 'Café Central Vienna' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Naschmarkt' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Vienna International Airport' }
                ]
            }
        ]
    },
    ireland: {
        id: 'ireland',
        city: 'Dublin',
        country: 'Ireland',
        summary: '템플바, 강변, 공원, 로컬 펍 무드를 묶은 아일랜드 템플릿입니다.',
        footer: 'Ireland works when river walks and pub light stay easygoing.',
        heroImage: 'assets/heroes/ireland.jpg',
        timeZone: 'Europe/Dublin',
        weather: { latitude: 53.3498, longitude: -6.2603 },
        currency: { code: 'EUR', symbol: '€', locale: 'en-IE' },
        startOffsetDays: 7,
        phraseLabel: 'English',
        phrases: [
            { text: 'Cheers', pron: '[치얼즈]', meaning: '고마워요 / 건배' },
            { text: 'Where’s the pub?', pron: '[웨어즈 더 펍?]', meaning: '펍이 어디예요?' },
            { text: 'Thanks a million', pron: '[땡스 어 밀리언]', meaning: '정말 고마워요' }
        ],
        itineraryTemplate: [
            {
                title: '템플바 워밍업',
                activities: [
                    { time: '10:00', title: '템플바 산책', type: 'map', location: 'Temple Bar Dublin' },
                    { time: '13:30', title: '트리니티 칼리지', type: 'building-2', location: 'Trinity College Dublin' },
                    { time: '18:30', title: '리피강 야경', type: 'moon-star', location: 'River Liffey' }
                ]
            },
            {
                title: '공원 & 펍',
                activities: [
                    { time: '10:00', title: '세인트스티븐스 그린', type: 'trees', location: "St Stephen's Green" },
                    { time: '13:30', title: '기네스 스토어하우스', type: 'building', location: 'Guinness Storehouse' },
                    { time: '19:00', title: '펍 무드', type: 'music', location: 'Dublin Pub District' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '브런치 카페', type: 'coffee', location: 'Grafton Street' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'George’s Street Arcade' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Dublin Airport' }
                ]
            }
        ]
    },
    iceland: {
        id: 'iceland',
        city: 'Reykjavik',
        country: 'Iceland',
        summary: '레이캬비크 교회, 해안 산책, 블루라군 무드를 묶은 아이슬란드 템플릿입니다.',
        footer: 'Iceland works when cold air, church lines, and open sky stay uncluttered.',
        heroImage: 'assets/heroes/iceland.jpg',
        timeZone: 'Atlantic/Reykjavik',
        weather: { latitude: 64.1466, longitude: -21.9426 },
        currency: { code: 'ISK', symbol: 'kr', locale: 'is-IS' },
        startOffsetDays: 8,
        phraseLabel: 'Íslenska',
        phrases: [
            { text: 'Halló', pron: '[할로]', meaning: '안녕하세요' },
            { text: 'Takk', pron: '[탁]', meaning: '감사합니다' },
            { text: 'Hvar er miðbærinn?', pron: '[크바르 에어 미드바이린?]', meaning: '중심가는 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '레이캬비크 첫인상',
                activities: [
                    { time: '10:00', title: '할그림스키르캬', type: 'landmark', location: 'Hallgrímskirkja' },
                    { time: '13:30', title: '하르파', type: 'building', location: 'Harpa Concert Hall' },
                    { time: '18:30', title: '선보이저 산책', type: 'moon-star', location: 'Sun Voyager' }
                ]
            },
            {
                title: '블루라군 무드',
                activities: [
                    { time: '10:00', title: '블루라군', type: 'sun', location: 'Blue Lagoon Iceland' },
                    { time: '14:00', title: '해안 드라이브', type: 'map', location: 'Reykjanes Peninsula' },
                    { time: '18:00', title: '수변 카페', type: 'coffee', location: 'Old Harbour Reykjavik' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '로컬 브런치', type: 'utensils-crossed', location: 'Laugavegur' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Skólavörðustígur' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Keflavík International Airport' }
                ]
            }
        ]
    },
    'south-africa': {
        id: 'south-africa',
        city: 'Cape Town',
        country: 'South Africa',
        summary: '테이블마운틴, 해안, 와이너리 무드를 묶은 남아공 템플릿입니다.',
        footer: 'South Africa works when mountain silhouette and ocean light stay bold.',
        heroImage: 'assets/heroes/south-africa.jpg',
        timeZone: 'Africa/Johannesburg',
        weather: { latitude: -33.9249, longitude: 18.4241 },
        currency: { code: 'ZAR', symbol: 'R', locale: 'en-ZA' },
        startOffsetDays: 8,
        phraseLabel: 'English',
        phrases: [
            { text: 'Hello', pron: '[헬로]', meaning: '안녕하세요' },
            { text: 'Thank you', pron: '[땡큐]', meaning: '감사합니다' },
            { text: 'How do I get there?', pron: '[하우 두 아이 겟 데어?]', meaning: '거기 어떻게 가요?' }
        ],
        itineraryTemplate: [
            {
                title: '케이프타운 워밍업',
                activities: [
                    { time: '10:00', title: '테이블마운틴', type: 'binoculars', location: 'Table Mountain' },
                    { time: '13:30', title: 'V&A 워터프런트', type: 'shopping-bag', location: 'V&A Waterfront' },
                    { time: '18:30', title: '해안 선셋', type: 'sun', location: 'Camp\'s Bay' }
                ]
            },
            {
                title: '해변 & 거리',
                activities: [
                    { time: '10:00', title: '보캅', type: 'camera', location: 'Bo-Kaap' },
                    { time: '13:30', title: '시포인트 산책', type: 'map', location: 'Sea Point Promenade' },
                    { time: '18:00', title: '와이너리 디너', type: 'utensils-crossed', location: 'Constantia' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Kloof Street' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Greenmarket Square' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Cape Town International Airport' }
                ]
            }
        ]
    },
    ghana: {
        id: 'ghana',
        city: 'Accra',
        country: 'Ghana',
        summary: '독립광장, 해변, 로컬 마켓을 묶은 가나 템플릿입니다.',
        footer: 'Ghana works when warm colour, coast, and city pace stay direct.',
        heroImage: 'assets/heroes/ghana.jpg',
        timeZone: 'Africa/Accra',
        weather: { latitude: 5.6037, longitude: -0.1870 },
        currency: { code: 'GHS', symbol: '₵', locale: 'en-GH' },
        startOffsetDays: 8,
        phraseLabel: 'English',
        phrases: [
            { text: 'Hello', pron: '[헬로]', meaning: '안녕하세요' },
            { text: 'Thank you', pron: '[땡큐]', meaning: '감사합니다' },
            { text: 'How much is this?', pron: '[하우 머치 이즈 디스?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '도심 워밍업',
                activities: [
                    { time: '10:00', title: '독립광장', type: 'landmark', location: 'Independence Square Accra' },
                    { time: '13:30', title: '독립문', type: 'camera', location: 'Independence Arch' },
                    { time: '18:30', title: '라바디 해변', type: 'sun', location: 'Labadi Beach' }
                ]
            },
            {
                title: '마켓 & 거리',
                activities: [
                    { time: '10:00', title: '마콜라 마켓', type: 'store', location: 'Makola Market' },
                    { time: '13:30', title: '오스 거리 산책', type: 'map', location: 'Osu Oxford Street' },
                    { time: '18:00', title: '저녁 무드', type: 'music', location: 'Accra Nightlife' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '브런치 카페', type: 'coffee', location: 'Airport Residential Area Accra' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Accra Mall' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Kotoka International Airport' }
                ]
            }
        ]
    },
    kenya: {
        id: 'kenya',
        city: 'Nairobi',
        country: 'Kenya',
        summary: '사파리 무드, 기린 실루엣, 도심 전망을 함께 담은 케냐 템플릿입니다.',
        footer: 'Kenya feels strongest when savannah air and city skyline meet in one frame.',
        heroImage: 'assets/heroes/kenya.jpg',
        timeZone: 'Africa/Nairobi',
        weather: { latitude: -1.2921, longitude: 36.8219 },
        currency: { code: 'KES', symbol: 'KSh', locale: 'en-KE' },
        startOffsetDays: 8,
        phraseLabel: 'Kiswahili',
        phrases: [
            { text: 'Jambo', pron: '[잠보]', meaning: '안녕하세요' },
            { text: 'Asante', pron: '[아산테]', meaning: '감사합니다' },
            { text: 'Bei gani?', pron: '[베이 가니]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '나이로비 첫인상',
                activities: [
                    { time: '09:30', title: '나이로비 국립공원', type: 'binoculars', location: 'Nairobi National Park' },
                    { time: '13:30', title: '기린 센터', type: 'camera', location: 'Giraffe Centre Nairobi' },
                    { time: '18:30', title: '웨스트랜즈 선셋', type: 'moon-star', location: 'Westlands Nairobi' }
                ]
            },
            {
                title: '도심 & 마켓',
                activities: [
                    { time: '10:00', title: '케냐타 국제컨벤션센터 전망', type: 'binoculars', location: 'Kenyatta International Convention Centre' },
                    { time: '13:30', title: '마사이 마켓', type: 'shopping-bag', location: 'Maasai Market Nairobi' },
                    { time: '18:00', title: '카렌 블릭센 무드', type: 'coffee', location: 'Karen Blixen Museum' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:00', title: '시티 마켓 산책', type: 'map', location: 'City Market Nairobi' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Village Market Nairobi' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Jomo Kenyatta International Airport' }
                ]
            }
        ]
    },
    greece: {
        id: 'greece',
        city: 'Santorini',
        country: 'Greece',
        summary: '오이아, 피라, 칼데라 전망, 하얀 돔 무드를 묶은 그리스 템플릿입니다.',
        footer: 'Greece works best when white walls, blue domes, and caldera light stay clear.',
        heroImage: 'assets/heroes/greece.jpg',
        timeZone: 'Europe/Athens',
        weather: { latitude: 36.3932, longitude: 25.4615 },
        currency: { code: 'EUR', symbol: '€', locale: 'el-GR' },
        startOffsetDays: 8,
        phraseLabel: 'Ελληνικά',
        phrases: [
            { text: 'Καλημέρα', pron: '[칼리메라]', meaning: '안녕하세요' },
            { text: 'Ευχαριστώ', pron: '[에프하리스토]', meaning: '감사합니다' },
            { text: 'Πόσο κάνει;', pron: '[포소 카니?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '오이아 첫인상',
                activities: [
                    { time: '10:00', title: '오이아 블루돔', type: 'landmark', location: 'Oia Santorini' },
                    { time: '13:30', title: '피라 산책', type: 'map', location: 'Fira Santorini' },
                    { time: '18:30', title: '칼데라 선셋', type: 'binoculars', location: 'Santorini Caldera Viewpoint' }
                ]
            },
            {
                title: '비치 & 전망',
                activities: [
                    { time: '10:30', title: '이아 언덕 전망', type: 'sparkles', location: 'Oia Castle' },
                    { time: '13:30', title: '레드 비치', type: 'sun', location: 'Red Beach Santorini' },
                    { time: '18:30', title: '피르고스', type: 'shopping-bag', location: 'Pyrgos Santorini' }
                ]
            },
            {
                title: '카페 & 출발',
                activities: [
                    { time: '10:00', title: '메갈로호리', type: 'camera', location: 'Megalochori Santorini' },
                    { time: '13:30', title: '카페 브런치', type: 'coffee', location: 'Imerovigli' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Santorini International Airport' }
                ]
            }
        ]
    },
    turkey: {
        id: 'turkey',
        city: 'Istanbul',
        country: 'Turkey',
        summary: '아야 소피아, 블루 모스크, 바자르, 해협 전망을 묶은 튀르키예 템플릿입니다.',
        footer: 'Turkey feels richest when Hagia Sophia, domes, and bazaars stay in one rhythm.',
        heroImage: 'assets/heroes/turkey.jpg',
        timeZone: 'Europe/Istanbul',
        weather: { latitude: 41.0082, longitude: 28.9784 },
        currency: { code: 'TRY', symbol: '₺', locale: 'tr-TR' },
        startOffsetDays: 8,
        phraseLabel: 'Türkçe',
        phrases: [
            { text: 'Merhaba', pron: '[메르하바]', meaning: '안녕하세요' },
            { text: 'Teşekkür ederim', pron: '[테셰퀴르 에데림]', meaning: '감사합니다' },
            { text: 'Bu ne kadar?', pron: '[부 네 카다르?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '술탄아흐메트 데이',
                activities: [
                    { time: '10:00', title: '아야 소피아', type: 'landmark', location: 'Hagia Sophia' },
                    { time: '13:30', title: '블루 모스크', type: 'camera', location: 'Blue Mosque' },
                    { time: '18:30', title: '갈라타 브리지 선셋', type: 'moon-star', location: 'Galata Bridge' }
                ]
            },
            {
                title: '바자르 & 전망',
                activities: [
                    { time: '10:30', title: '그랜드 바자르', type: 'store', location: 'Grand Bazaar' },
                    { time: '13:30', title: '갈라타 타워', type: 'tower-control', location: 'Galata Tower' },
                    { time: '18:30', title: '보스포루스 크루즈', type: 'ship', location: 'Bosphorus Cruise Istanbul' }
                ]
            },
            {
                title: '카페 & 출발',
                activities: [
                    { time: '10:00', title: '이스티클랄 거리', type: 'shopping-bag', location: 'Istiklal Avenue' },
                    { time: '13:30', title: '카라쿄이 카페', type: 'coffee', location: 'Karaköy' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Istanbul Airport' }
                ]
            }
        ]
    },
    switzerland: {
        id: 'switzerland',
        city: 'Zermatt',
        country: 'Switzerland',
        summary: '마테호른, 호수 반영, 산악열차 무드를 묶은 스위스 템플릿입니다.',
        footer: 'Switzerland feels sharpest when clean air, snow line, and lake reflection stay clear.',
        heroImage: 'assets/heroes/switzerland.jpg',
        timeZone: 'Europe/Zurich',
        weather: { latitude: 46.0207, longitude: 7.7491 },
        currency: { code: 'CHF', symbol: 'CHF', locale: 'de-CH' },
        startOffsetDays: 9,
        phraseLabel: 'Deutsch',
        phrases: [
            { text: 'Grüezi', pron: '[그뤼에치]', meaning: '안녕하세요' },
            { text: 'Danke', pron: '[당케]', meaning: '감사합니다' },
            { text: 'Wo ist der Bahnhof?', pron: '[보 이스트 데어 반호프?]', meaning: '역이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '체르마트 워밍업',
                activities: [
                    { time: '10:00', title: '체르마트 마을 산책', type: 'map', location: 'Zermatt' },
                    { time: '13:30', title: '고르너그라트', type: 'binoculars', location: 'Gornergrat' },
                    { time: '18:00', title: '마테호른 선셋', type: 'camera', location: 'Matterhorn Viewpoint Zermatt' }
                ]
            },
            {
                title: '호수 & 전망',
                activities: [
                    { time: '09:30', title: '슈텔리제', type: 'camera', location: 'Stellisee' },
                    { time: '13:30', title: '마터호른 글레이셔 파라다이스', type: 'binoculars', location: 'Matterhorn Glacier Paradise' },
                    { time: '18:00', title: '알프스 디너', type: 'utensils-crossed', location: 'Zermatt Old Town' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '바호프 거리', type: 'shopping-bag', location: 'Bahnhofstrasse Zermatt' },
                    { time: '13:00', title: '산장 카페', type: 'coffee', location: 'Sunnegga' },
                    { time: '17:30', title: '역 이동', type: 'train-front', location: 'Zermatt Railway Station' }
                ]
            }
        ]
    },
    portugal: {
        id: 'portugal',
        city: 'Lisbon',
        country: 'Portugal',
        summary: '코메르시우 광장, 알파마, 벨렝, 강변 전망을 묶은 포르투갈 템플릿입니다.',
        footer: 'Portugal feels best when plaza light and river wind stay warm together.',
        heroImage: 'assets/heroes/portugal.jpg',
        timeZone: 'Europe/Lisbon',
        weather: { latitude: 38.7223, longitude: -9.1393 },
        currency: { code: 'EUR', symbol: '€', locale: 'pt-PT' },
        startOffsetDays: 8,
        phraseLabel: 'Português',
        phrases: [
            { text: 'Olá', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Obrigado', pron: '[오브리가두]', meaning: '감사합니다' },
            { text: 'Quanto custa?', pron: '[꾸안투 꾸스타?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '리스본 첫인상',
                activities: [
                    { time: '10:00', title: '트램 28', type: 'train-front', location: 'Tram 28 Lisbon' },
                    { time: '13:30', title: '알파마 산책', type: 'map', location: 'Alfama' },
                    { time: '18:30', title: '상 조르제 성 전망', type: 'binoculars', location: 'São Jorge Castle' }
                ]
            },
            {
                title: '벨렝 데이',
                activities: [
                    { time: '10:00', title: '벨렝 타워', type: 'landmark', location: 'Belém Tower' },
                    { time: '13:00', title: '제로니무스 수도원', type: 'building', location: 'Jerónimos Monastery' },
                    { time: '18:00', title: '코메르시우 광장', type: 'sparkles', location: 'Praça do Comércio' }
                ]
            },
            {
                title: '카페 & 출발',
                activities: [
                    { time: '10:30', title: '미라도우루 산책', type: 'camera', location: 'Miradouro de Santa Luzia' },
                    { time: '13:30', title: '파스텔 드 나타', type: 'coffee', location: 'Pastéis de Belém' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Lisbon Airport' }
                ]
            }
        ]
    },
    quebec: {
        id: 'quebec',
        city: 'Quebec City',
        country: 'Canada',
        summary: '샤토 프롱트낙, 성벽, 구시가지 풍경을 묶은 퀘벡 템플릿입니다.',
        footer: 'Quebec works when stone streets and winter-blue light stay intimate.',
        heroImage: 'assets/heroes/quebec.jpg',
        timeZone: 'America/Toronto',
        weather: { latitude: 46.8139, longitude: -71.2080 },
        currency: { code: 'CAD', symbol: 'C$', locale: 'fr-CA' },
        startOffsetDays: 8,
        phraseLabel: 'Français',
        phrases: [
            { text: 'Bonjour', pron: '[봉쥬르]', meaning: '안녕하세요' },
            { text: 'Merci', pron: '[메흐시]', meaning: '감사합니다' },
            { text: 'Où est le vieux Québec ?', pron: '[우 에 르 뷰 케벡?]', meaning: '구시가지는 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '구시가지 워밍업',
                activities: [
                    { time: '10:00', title: '샤토 프롱트낙', type: 'landmark', location: 'Fairmont Le Château Frontenac' },
                    { time: '13:30', title: '뒤프랭 테라스', type: 'binoculars', location: 'Terrasse Dufferin' },
                    { time: '18:30', title: '쁘띠 샹플랭', type: 'sparkles', location: 'Quartier Petit Champlain' }
                ]
            },
            {
                title: '성벽 & 강변',
                activities: [
                    { time: '10:00', title: '퀘벡 요새', type: 'building', location: 'Citadelle de Québec' },
                    { time: '13:30', title: '올드 포트 산책', type: 'map', location: 'Old Port Quebec City' },
                    { time: '18:00', title: '강변 야경', type: 'moon-star', location: 'Saint Lawrence River Quebec City' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Rue Saint-Jean' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Place Royale Quebec City' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Québec City Jean Lesage International Airport' }
                ]
            }
        ]
    },
    'las-vegas': {
        id: 'las-vegas',
        city: 'Las Vegas',
        country: 'United States',
        summary: '스트립, 분수쇼, 스피어, 야경 드라이브를 묶은 라스베이거스 템플릿입니다.',
        footer: 'Las Vegas works when neon scale and desert night stay unapologetically bright.',
        heroImage: 'assets/heroes/las-vegas.jpg',
        timeZone: 'America/Los_Angeles',
        weather: { latitude: 36.1699, longitude: -115.1398 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 9,
        phraseLabel: 'English',
        phrases: [
            { text: 'Hey there', pron: '[헤이 데어]', meaning: '안녕하세요' },
            { text: 'Where’s the Strip?', pron: '[웨어즈 더 스트립?]', meaning: '스트립 어디예요?' },
            { text: 'Check, please', pron: '[첵 플리즈]', meaning: '계산서 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '스트립 워밍업',
                activities: [
                    { time: '10:00', title: '벨라지오 분수', type: 'sparkles', location: 'Bellagio Fountains' },
                    { time: '13:30', title: '스트립 산책', type: 'map', location: 'Las Vegas Strip' },
                    { time: '18:30', title: '스피어 야경', type: 'lightbulb', location: 'Sphere Las Vegas' }
                ]
            },
            {
                title: '뷰 & 다운타운',
                activities: [
                    { time: '10:30', title: '하이롤러 전망', type: 'binoculars', location: 'High Roller Las Vegas' },
                    { time: '14:00', title: '프리몬트 스트리트', type: 'music', location: 'Fremont Street Experience' },
                    { time: '19:00', title: '스트립 드라이브', type: 'camera', location: 'Welcome to Fabulous Las Vegas Sign' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'The Cosmopolitan Las Vegas' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Forum Shops at Caesars' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Harry Reid International Airport' }
                ]
            }
        ]
    },
    peru: {
        id: 'peru',
        city: 'Cusco',
        country: 'Peru',
        summary: '마추픽추 무드, 광장, 계단 골목, 안데스 풍경을 묶은 페루 템플릿입니다.',
        footer: 'Peru feels most memorable when stone terraces and cloud lines stay dramatic.',
        heroImage: 'assets/heroes/peru.jpg',
        timeZone: 'America/Lima',
        weather: { latitude: -13.5319, longitude: -71.9675 },
        currency: { code: 'PEN', symbol: 'S/', locale: 'es-PE' },
        startOffsetDays: 10,
        phraseLabel: 'Español',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: '¿Cuánto cuesta?', pron: '[꾸안또 꾸에스타?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '쿠스코 워밍업',
                activities: [
                    { time: '10:00', title: '아르마스 광장', type: 'sparkles', location: 'Plaza de Armas Cusco' },
                    { time: '13:30', title: '산블라스 골목', type: 'map', location: 'San Blas Cusco' },
                    { time: '18:30', title: '사크사이와만 전망', type: 'binoculars', location: 'Sacsayhuamán' }
                ]
            },
            {
                title: '마추픽추 데이',
                activities: [
                    { time: '06:30', title: '마추픽추', type: 'landmark', location: 'Machu Picchu' },
                    { time: '13:30', title: '아구아스 칼리엔테스', type: 'coffee', location: 'Aguas Calientes' },
                    { time: '18:30', title: '기차 복귀', type: 'train-front', location: 'Poroy Station' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '산 페드로 마켓', type: 'store', location: 'San Pedro Market' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Calle Hatun Rumiyoc' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Alejandro Velasco Astete International Airport' }
                ]
            }
        ]
    },
    chile: {
        id: 'chile',
        city: 'Santiago',
        country: 'Chile',
        summary: '안데스 전망, 언덕, 와이너리 무드를 묶은 칠레 템플릿입니다.',
        footer: 'Chile works when mountain scale and dry evening light stay wide and crisp.',
        heroImage: 'assets/heroes/chile.jpg',
        timeZone: 'America/Santiago',
        weather: { latitude: -33.4489, longitude: -70.6693 },
        currency: { code: 'CLP', symbol: '$', locale: 'es-CL' },
        startOffsetDays: 10,
        phraseLabel: 'Español',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: '¿Dónde está el mirador?', pron: '[돈데 에스타 엘 미라도르?]', meaning: '전망대가 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '산티아고 첫인상',
                activities: [
                    { time: '10:00', title: '산 크리스토발 언덕', type: 'binoculars', location: 'Cerro San Cristóbal' },
                    { time: '13:30', title: '플라사 데 아르마스', type: 'sparkles', location: 'Plaza de Armas Santiago' },
                    { time: '18:30', title: '스카이 코스타네라', type: 'tower-control', location: 'Sky Costanera' }
                ]
            },
            {
                title: '시장 & 와인',
                activities: [
                    { time: '10:30', title: '센트럴 마켓', type: 'store', location: 'Mercado Central de Santiago' },
                    { time: '13:30', title: '벨라비스타 산책', type: 'map', location: 'Bellavista Santiago' },
                    { time: '18:30', title: '와인 디너', type: 'utensils-crossed', location: 'Concha y Toro Pirque' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Lastarria' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Patio Bellavista' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Santiago International Airport' }
                ]
            }
        ]
    },
    colombia: {
        id: 'colombia',
        city: 'Cartagena',
        country: 'Colombia',
        summary: '성벽 도시, 요새, 카리브해 색감을 묶은 콜롬비아 템플릿입니다.',
        footer: 'Colombia feels best when walls, balconies, and sea breeze stay warm.',
        heroImage: 'assets/heroes/colombia.jpg',
        timeZone: 'America/Bogota',
        weather: { latitude: 10.3910, longitude: -75.4794 },
        currency: { code: 'COP', symbol: '$', locale: 'es-CO' },
        startOffsetDays: 10,
        phraseLabel: 'Español',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: '¿Dónde está la muralla?', pron: '[돈데 에스타 라 무라야?]', meaning: '성벽은 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '카르타헤나 워밍업',
                activities: [
                    { time: '10:00', title: '시계탑 광장', type: 'sparkles', location: 'Torre del Reloj Cartagena' },
                    { time: '13:30', title: '성벽 산책', type: 'map', location: 'Walled City of Cartagena' },
                    { time: '18:30', title: '카페 델 마르 선셋', type: 'moon-star', location: 'Café del Mar Cartagena' }
                ]
            },
            {
                title: '요새 & 거리',
                activities: [
                    { time: '10:30', title: '산 펠리페 요새', type: 'landmark', location: 'Castillo San Felipe de Barajas' },
                    { time: '13:30', title: '헤체마니', type: 'palette', location: 'Getsemaní' },
                    { time: '18:30', title: '발코니 거리', type: 'camera', location: 'Centro Histórico Cartagena' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카리브 브런치', type: 'coffee', location: 'Plaza Santo Domingo' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Las Bóvedas Cartagena' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Rafael Núñez International Airport' }
                ]
            }
        ]
    },
    bolivia: {
        id: 'bolivia',
        city: 'Uyuni',
        country: 'Bolivia',
        summary: '우유니 소금사막, 반영샷, 기차무덤 무드를 묶은 볼리비아 템플릿입니다.',
        footer: 'Bolivia feels surreal when horizon, reflection, and salt textures stay endless.',
        heroImage: 'assets/heroes/bolivia.jpg',
        timeZone: 'America/La_Paz',
        weather: { latitude: -20.4607, longitude: -66.8267 },
        currency: { code: 'BOB', symbol: 'Bs', locale: 'es-BO' },
        startOffsetDays: 10,
        phraseLabel: 'Español',
        phrases: [
            { text: 'Hola', pron: '[올라]', meaning: '안녕하세요' },
            { text: 'Gracias', pron: '[그라시아스]', meaning: '감사합니다' },
            { text: '¿Dónde está el salar?', pron: '[돈데 에스타 엘 살라르?]', meaning: '소금사막은 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '우유니 워밍업',
                activities: [
                    { time: '10:00', title: '기차 무덤', type: 'camera', location: 'Uyuni Train Cemetery' },
                    { time: '13:30', title: '콜차니 마을', type: 'map', location: 'Colchani' },
                    { time: '18:30', title: '소금사막 선셋', type: 'moon-star', location: 'Salar de Uyuni' }
                ]
            },
            {
                title: '반영샷 데이',
                activities: [
                    { time: '09:30', title: '이슬라 인카와시', type: 'landmark', location: 'Incahuasi Island' },
                    { time: '13:30', title: '반영 포인트', type: 'camera', location: 'Uyuni Mirror Effect Spot' },
                    { time: '18:30', title: '별빛 투어', type: 'sparkles', location: 'Salar de Uyuni Night Tour' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '로컬 카페', type: 'coffee', location: 'Uyuni Town' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Uyuni Market' },
                    { time: '17:30', title: '버스터미널 이동', type: 'plane', location: 'Uyuni Airport' }
                ]
            }
        ]
    },
    morocco: {
        id: 'morocco',
        city: 'Chefchaouen',
        country: 'Morocco',
        summary: '푸른 골목, 메디나, 옥상 뷰를 묶은 모로코 템플릿입니다.',
        footer: 'Morocco feels strongest when blue walls and late rooftop light stay soft.',
        heroImage: 'assets/heroes/morocco.jpg',
        timeZone: 'Africa/Casablanca',
        weather: { latitude: 35.1688, longitude: -5.2636 },
        currency: { code: 'MAD', symbol: 'د.م.', locale: 'ar-MA' },
        startOffsetDays: 9,
        phraseLabel: 'العربية',
        phrases: [
            { text: 'مرحبا', pron: '[마르하바]', meaning: '안녕하세요' },
            { text: 'شكرا', pron: '[슈크란]', meaning: '감사합니다' },
            { text: 'بكم هذا؟', pron: '[비캄 하다?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '블루 메디나 데이',
                activities: [
                    { time: '10:00', title: '메디나 산책', type: 'map', location: 'Chefchaouen Medina' },
                    { time: '13:30', title: '우타 엘 함맘 광장', type: 'sparkles', location: 'Plaza Uta el Hammam' },
                    { time: '18:30', title: '옥상 선셋', type: 'moon-star', location: 'Chefchaouen Rooftop View' }
                ]
            },
            {
                title: '골목 & 전망',
                activities: [
                    { time: '10:30', title: '카스바 박물관', type: 'building-2', location: 'Kasbah Museum Chefchaouen' },
                    { time: '13:30', title: '라스 엘 마', type: 'camera', location: 'Ras El Maa Waterfall' },
                    { time: '18:00', title: '스페인 모스크 전망', type: 'binoculars', location: 'Spanish Mosque Chefchaouen' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '민트티 카페', type: 'coffee', location: 'Old Town Chefchaouen' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Chefchaouen Souk' },
                    { time: '17:30', title: '이동 준비', type: 'plane', location: 'Tangier' }
                ]
            }
        ]
    },
    tanzania: {
        id: 'tanzania',
        city: 'Arusha',
        country: 'Tanzania',
        summary: '킬리만자로 무드, 사파리 관문, 로컬 마켓을 묶은 탄자니아 템플릿입니다.',
        footer: 'Tanzania feels unforgettable when mountain silhouettes and savannah air stay open.',
        heroImage: 'assets/heroes/tanzania.jpg',
        timeZone: 'Africa/Dar_es_Salaam',
        weather: { latitude: -3.3869, longitude: 36.6830 },
        currency: { code: 'TZS', symbol: 'TSh', locale: 'sw-TZ' },
        startOffsetDays: 9,
        phraseLabel: 'Kiswahili',
        phrases: [
            { text: 'Jambo', pron: '[잠보]', meaning: '안녕하세요' },
            { text: 'Asante', pron: '[아산테]', meaning: '감사합니다' },
            { text: 'Bei gani?', pron: '[베이 가니?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '아루샤 워밍업',
                activities: [
                    { time: '10:00', title: '아루샤 커피 하우스', type: 'coffee', location: 'Arusha Coffee Lodge' },
                    { time: '13:30', title: '마사이 마켓', type: 'shopping-bag', location: 'Maasai Market Arusha' },
                    { time: '18:30', title: '킬리만자로 뷰', type: 'binoculars', location: 'Kilimanjaro Viewpoint Tanzania' }
                ]
            },
            {
                title: '사파리 무드',
                activities: [
                    { time: '09:30', title: '아루샤 국립공원', type: 'trees', location: 'Arusha National Park' },
                    { time: '13:30', title: '기린 센터', type: 'camera', location: 'Meserani Snake Park & Maasai Cultural Museum' },
                    { time: '18:00', title: '선셋 디너', type: 'utensils-crossed', location: 'Arusha City' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '시계탑 산책', type: 'map', location: 'Arusha Clock Tower' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Cultural Heritage Centre Arusha' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Kilimanjaro International Airport' }
                ]
            }
        ]
    },
    'new-zealand': {
        id: 'new-zealand',
        city: 'Queenstown',
        country: 'New Zealand',
        summary: '피오르드, 호수, 산악 전망을 묶은 뉴질랜드 템플릿입니다.',
        footer: 'New Zealand feels vast when lake stillness and cliff scale stay clean.',
        heroImage: 'assets/heroes/new-zealand.jpg',
        timeZone: 'Pacific/Auckland',
        weather: { latitude: -45.0312, longitude: 168.6626 },
        currency: { code: 'NZD', symbol: 'NZ$', locale: 'en-NZ' },
        startOffsetDays: 10,
        phraseLabel: 'Te Reo Māori',
        phrases: [
            { text: 'Kia ora', pron: '[키아 오라]', meaning: '안녕하세요' },
            { text: 'Ngā mihi', pron: '[응아 미히]', meaning: '감사합니다' },
            { text: 'Kei hea te wharepaku?', pron: '[케이 헤아 테 화레파쿠?]', meaning: '화장실이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '퀸스타운 워밍업',
                activities: [
                    { time: '10:00', title: '와카티푸 호수', type: 'camera', location: 'Lake Wakatipu' },
                    { time: '13:30', title: '스카이라인 곤돌라', type: 'binoculars', location: 'Skyline Queenstown' },
                    { time: '18:30', title: '퀸스타운 선셋', type: 'moon-star', location: 'Queenstown Gardens' }
                ]
            },
            {
                title: '피오르드 데이',
                activities: [
                    { time: '08:00', title: '밀포드 사운드', type: 'ship', location: 'Milford Sound' },
                    { time: '14:30', title: '피오르드 크루즈', type: 'camera', location: 'Milford Sound Cruise' },
                    { time: '19:00', title: '귀환 디너', type: 'utensils-crossed', location: 'Queenstown Wharf' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '애로우타운 산책', type: 'map', location: 'Arrowtown' },
                    { time: '13:30', title: '카페 브런치', type: 'coffee', location: 'Shotover Street' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Queenstown Airport' }
                ]
            }
        ]
    },
    maldives: {
        id: 'maldives',
        city: 'Malé',
        country: 'Maldives',
        summary: '라군, 수상 방갈로, 스노클링 무드를 묶은 몰디브 템플릿입니다.',
        footer: 'Maldives works when water colour and slow air stay almost unreal.',
        heroImage: 'assets/heroes/maldives.jpg',
        timeZone: 'Indian/Maldives',
        weather: { latitude: 4.1755, longitude: 73.5093 },
        currency: { code: 'MVR', symbol: 'Rf', locale: 'en-MV' },
        startOffsetDays: 10,
        phraseLabel: 'ދިވެހި',
        phrases: [
            { text: 'އައްސަލާމު ޢަލައިކުމް', pron: '[앗살라무 알라이쿰]', meaning: '안녕하세요' },
            { text: 'ޝުކުރިއްޔާ', pron: '[슈쿠리야]', meaning: '감사합니다' },
            { text: 'މި އަގު ކިހިނެއް؟', pron: '[미 아구 키히네?]', meaning: '이거 얼마예요?' }
        ],
        itineraryTemplate: [
            {
                title: '라군 워밍업',
                activities: [
                    { time: '10:00', title: '워터빌라 체크인', type: 'luggage', location: 'Maldives Water Villa Resort' },
                    { time: '13:30', title: '라군 산책', type: 'sun', location: 'Maldives Lagoon' },
                    { time: '18:30', title: '선셋 덱', type: 'moon-star', location: 'Sunset Deck Maldives' }
                ]
            },
            {
                title: '바다 데이',
                activities: [
                    { time: '09:30', title: '스노클링', type: 'ship', location: 'Coral Reef Maldives' },
                    { time: '13:30', title: '샌드뱅크 투어', type: 'camera', location: 'Maldives Sandbank' },
                    { time: '18:00', title: '오버워터 디너', type: 'utensils-crossed', location: 'Maldives Overwater Restaurant' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '스파 타임', type: 'sparkles', location: 'Maldives Spa' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'Malé Local Market' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Velana International Airport' }
                ]
            }
        ]
    },
    saipan: {
        id: 'saipan',
        city: 'Saipan',
        country: 'Saipan',
        summary: '마나가하 섬, 비치, 절벽 전망을 묶은 사이판 템플릿입니다.',
        footer: 'Saipan feels easiest when reef blue and island pace stay simple.',
        heroImage: 'assets/heroes/saipan.jpg',
        timeZone: 'Pacific/Saipan',
        weather: { latitude: 15.1778, longitude: 145.7500 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 8,
        phraseLabel: 'Chamoru',
        phrases: [
            { text: 'Håfa adai', pron: '[하파 아다이]', meaning: '안녕하세요' },
            { text: 'Si Yu’os ma’åse’', pron: '[시 유오스 마아세]', meaning: '감사합니다' },
            { text: 'Adios', pron: '[아디오스]', meaning: '안녕히 가세요' }
        ],
        itineraryTemplate: [
            {
                title: '비치 워밍업',
                activities: [
                    { time: '10:00', title: '마이크로 비치', type: 'sun', location: 'Micro Beach Saipan' },
                    { time: '13:30', title: '가라판 산책', type: 'shopping-bag', location: 'Garapan' },
                    { time: '18:30', title: '선셋 포인트', type: 'moon-star', location: 'Saipan Sunset Cruise' }
                ]
            },
            {
                title: '섬 & 전망',
                activities: [
                    { time: '09:30', title: '마나가하 섬', type: 'ship', location: 'Managaha Island' },
                    { time: '14:00', title: '반자이 클리프', type: 'binoculars', location: 'Banzai Cliff' },
                    { time: '18:00', title: '버드 아일랜드 전망', type: 'camera', location: 'Bird Island Lookout' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '로컬 브런치', type: 'coffee', location: 'Garapan Saipan' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'T Galleria Saipan' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Saipan International Airport' }
                ]
            }
        ]
    },
    palau: {
        id: 'palau',
        city: 'Koror',
        country: 'Palau',
        summary: '락 아일랜드, 에메랄드 바다, 섬 호핑을 묶은 팔라우 템플릿입니다.',
        footer: 'Palau feels surreal when green islands float over clear water.',
        heroImage: 'assets/heroes/palau.jpg',
        timeZone: 'Pacific/Palau',
        weather: { latitude: 7.3426, longitude: 134.4789 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 8,
        phraseLabel: 'Palauan',
        phrases: [
            { text: 'Alii', pron: '[알리이]', meaning: '안녕하세요' },
            { text: 'Sulang', pron: '[술랑]', meaning: '감사합니다' },
            { text: 'A kmal mesaul', pron: '[아 크말 메사울]', meaning: '정말 감사합니다' }
        ],
        itineraryTemplate: [
            {
                title: '코로르 워밍업',
                activities: [
                    { time: '10:00', title: '팔라우 국립박물관', type: 'building-2', location: 'Belau National Museum' },
                    { time: '13:30', title: '시내 산책', type: 'map', location: 'Koror' },
                    { time: '18:30', title: '워터프런트 선셋', type: 'moon-star', location: 'Koror Waterfront' }
                ]
            },
            {
                title: '락 아일랜드 데이',
                activities: [
                    { time: '09:00', title: '락 아일랜드 투어', type: 'ship', location: 'Rock Islands Palau' },
                    { time: '13:30', title: '젤리피시 레이크', type: 'camera', location: 'Jellyfish Lake' },
                    { time: '18:00', title: '섬 디너', type: 'utensils-crossed', location: 'Palau Pacific Resort' }
                ]
            },
            {
                title: '브런치 & 출발',
                activities: [
                    { time: '10:30', title: '카페 브런치', type: 'coffee', location: 'Koror Town' },
                    { time: '13:30', title: '기념품 체크', type: 'gift', location: 'WCTC Shopping Center' },
                    { time: '17:30', title: '공항 이동', type: 'plane', location: 'Roman Tmetuchl International Airport' }
                ]
            }
        ]
    }
};

const DEFAULT_DESTINATION_ID = DESTINATIONS.tokyo ? 'tokyo' : Object.keys(DESTINATIONS)[0];
const ACTIVITY_ICON_VALUES = new Set(ACTIVITY_ICON_OPTIONS.map((option) => option.value));

const appState = {
    destinationId: DEFAULT_DESTINATION_ID,
    segments: [],
    startDate: '',
    endDate: '',
    itinerary: [],
    currentWeather: null,
    weatherMode: 'loading',
    phraseIndex: 0,
    hasStarted: false,
    customized: false,
    activeDayId: null,
    activeActivityId: null
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
let setupSegments = [];
let setupCalendarMonth = '';
let setupRangeSelectingEnd = false;

let idCounter = 0;
let shareStatusTimer = null;
let currentExchangeRate = null;
let isExchangeLoading = false;
let mapPreviewTimer = null;
let mapPreviewRequestId = 0;
let utilityChromeTimer = null;
let exchangeInputDestinationId = null;
let exchangeInputsTouched = false;
let currentFocusDismissedActivityId = null;
let isAutoScrollingToCurrentFocus = false;
const heroImagePreloadCache = new Map();

const COUNTRY_FLAGS = {
    France: '🇫🇷',
    'United Kingdom': '🇬🇧',
    'United States': '🇺🇸',
    Japan: '🇯🇵',
    Italy: '🇮🇹',
    Spain: '🇪🇸',
    Singapore: '🇸🇬',
    Malaysia: '🇲🇾',
    Indonesia: '🇮🇩',
    Thailand: '🇹🇭',
    'United Arab Emirates': '🇦🇪',
    Netherlands: '🇳🇱',
    'Hong Kong': '🇭🇰',
    Macau: '🇲🇴',
    Australia: '🇦🇺',
    China: '🇨🇳',
    Taiwan: '🇹🇼',
    Vietnam: '🇻🇳',
    India: '🇮🇳',
    'Saudi Arabia': '🇸🇦',
    Philippines: '🇵🇭',
    Russia: '🇷🇺',
    Canada: '🇨🇦',
    Mexico: '🇲🇽',
    Brazil: '🇧🇷',
    Argentina: '🇦🇷',
    Germany: '🇩🇪',
    'Czech Republic': '🇨🇿',
    Poland: '🇵🇱',
    Denmark: '🇩🇰',
    Sweden: '🇸🇪',
    Norway: '🇳🇴',
    Finland: '🇫🇮',
    Austria: '🇦🇹',
    Ireland: '🇮🇪',
    Iceland: '🇮🇸',
    Switzerland: '🇨🇭',
    Portugal: '🇵🇹',
    Greece: '🇬🇷',
    Turkey: '🇹🇷',
    Egypt: '🇪🇬',
    Morocco: '🇲🇦',
    Tanzania: '🇹🇿',
    'South Africa': '🇿🇦',
    Kenya: '🇰🇪',
    Ghana: '🇬🇭',
    Guam: '🇬🇺',
    'New Zealand': '🇳🇿',
    Maldives: '🇲🇻',
    Saipan: '🇲🇵',
    Palau: '🇵🇼',
    Peru: '🇵🇪',
    Chile: '🇨🇱',
    Colombia: '🇨🇴',
    Bolivia: '🇧🇴'
};

const CURRENCY_DENOMINATIONS = {
    EUR: [5, 10, 20, 50, 100, 200],
    GBP: [5, 10, 20, 50],
    USD: [1, 5, 10, 20, 50, 100],
    INR: [10, 20, 50, 100, 200, 500, 2000],
    JPY: [100, 500, 1000, 5000, 10000],
    HKD: [10, 20, 50, 100, 500, 1000],
    MYR: [1, 5, 10, 20, 50, 100],
    MOP: [10, 20, 50, 100, 500, 1000],
    PHP: [20, 50, 100, 200, 500, 1000],
    RUB: [50, 100, 200, 500, 1000, 5000],
    CAD: [5, 10, 20, 50, 100],
    MXN: [20, 50, 100, 200, 500, 1000],
    BRL: [2, 5, 10, 20, 50, 100],
    ARS: [100, 200, 500, 1000, 2000, 10000],
    SGD: [2, 5, 10, 50, 100],
    THB: [20, 50, 100, 500, 1000],
    IDR: [1000, 2000, 5000, 10000, 20000, 50000, 100000],
    AED: [5, 10, 20, 50, 100, 200],
    SAR: [1, 5, 10, 50, 100, 500],
    AUD: [5, 10, 20, 50, 100],
    CNY: [1, 5, 10, 20, 50, 100],
    TWD: [10, 50, 100, 500, 1000],
    VND: [1000, 2000, 5000, 10000, 20000, 50000, 100000],
    EGP: [10, 20, 50, 100, 200],
    CZK: [100, 200, 500, 1000, 2000],
    PLN: [10, 20, 50, 100, 200],
    DKK: [50, 100, 200, 500, 1000],
    SEK: [20, 50, 100, 200, 500, 1000],
    NOK: [50, 100, 200, 500, 1000],
    ISK: [500, 1000, 2000, 5000, 10000],
    CHF: [10, 20, 50, 100, 200],
    TRY: [20, 50, 100, 200, 500],
    ZAR: [10, 20, 50, 100, 200],
    KES: [50, 100, 200, 500, 1000],
    GHS: [10, 20, 50, 100, 200],
    PEN: [10, 20, 50, 100, 200],
    CLP: [1000, 2000, 5000, 10000, 20000],
    COP: [2000, 5000, 10000, 20000, 50000, 100000],
    BOB: [10, 20, 50, 100, 200],
    MAD: [20, 50, 100, 200],
    TZS: [1000, 2000, 5000, 10000],
    NZD: [5, 10, 20, 50, 100],
    MVR: [10, 20, 50, 100, 500]
};
const GENERAL_SMALL_AMOUNT_CANDIDATES = [1, 2, 5, 10, 20, 50, 100];

const CURRENCY_DISPLAY = {
    EUR: '€',
    GBP: '£',
    USD: '$',
    INR: '₹',
    JPY: '円',
    HKD: 'HK$',
    MYR: 'RM',
    MOP: 'MOP$',
    PHP: '₱',
    RUB: '₽',
    CAD: 'C$',
    MXN: 'MX$',
    BRL: 'R$',
    ARS: 'AR$',
    SGD: 'S$',
    THB: '฿',
    IDR: 'Rp',
    AED: 'د.إ',
    SAR: 'ر.س',
    AUD: 'A$',
    CNY: '元',
    TWD: 'NT$',
    VND: '₫',
    EGP: 'E£',
    CZK: 'Kč',
    PLN: 'zł',
    DKK: 'kr',
    SEK: 'kr',
    NOK: 'kr',
    ISK: 'kr',
    CHF: 'Fr',
    TRY: '₺',
    ZAR: 'R',
    KES: 'KSh',
    GHS: '₵',
    PEN: 'S/',
    CLP: 'CLP$',
    COP: 'COL$',
    BOB: 'Bs',
    MAD: 'د.م.',
    TZS: 'TSh',
    NZD: 'NZ$',
    MVR: 'Rf'
};

const LOCATION_LABELS = {
    France: '프랑스',
    'United Kingdom': '영국',
    'United States': '미국',
    Japan: '일본',
    Italy: '이탈리아',
    Spain: '스페인',
    Singapore: '싱가포르',
    Malaysia: '말레이시아',
    Indonesia: '인도네시아',
    Thailand: '태국',
    'United Arab Emirates': '아랍에미리트',
    Netherlands: '네덜란드',
    'Hong Kong': '홍콩',
    Macau: '마카오',
    Australia: '호주',
    China: '중국',
    Taiwan: '대만',
    Vietnam: '베트남',
    India: '인도',
    'Saudi Arabia': '사우디아라비아',
    Philippines: '필리핀',
    Russia: '러시아',
    Canada: '캐나다',
    Mexico: '멕시코',
    Brazil: '브라질',
    Argentina: '아르헨티나',
    Germany: '독일',
    'Czech Republic': '체코',
    Poland: '폴란드',
    Denmark: '덴마크',
    Sweden: '스웨덴',
    Norway: '노르웨이',
    Finland: '핀란드',
    Austria: '오스트리아',
    Ireland: '아일랜드',
    Iceland: '아이슬란드',
    Switzerland: '스위스',
    Portugal: '포르투갈',
    Greece: '그리스',
    Turkey: '튀르키예',
    Egypt: '이집트',
    Morocco: '모로코',
    Tanzania: '탄자니아',
    'South Africa': '남아공',
    Kenya: '케냐',
    Ghana: '가나',
    Guam: '괌',
    'New Zealand': '뉴질랜드',
    Maldives: '몰디브',
    Saipan: '사이판',
    Palau: '팔라우',
    Peru: '페루',
    Chile: '칠레',
    Colombia: '콜롬비아',
    Bolivia: '볼리비아',
    Paris: '파리',
    London: '런던',
    'New York': '뉴욕',
    'Los Angeles': '로스앤젤레스',
    Tokyo: '도쿄',
    Rome: '로마',
    Barcelona: '바르셀로나',
    Singapore_city: '싱가포르',
    'Kuala Lumpur': '쿠알라룸푸르',
    Jakarta: '자카르타',
    Bali: '발리',
    Mecca: '메카',
    Bangkok: '방콕',
    Dubai: '두바이',
    Amsterdam: '암스테르담',
    Madrid: '마드리드',
    Sydney: '시드니',
    Perth: '퍼스',
    Beijing: '베이징',
    Shanghai: '상하이',
    Taipei: '타이베이',
    Hanoi: '하노이',
    'Ho Chi Minh City': '호치민',
    'Hong Kong_city': '홍콩',
    Delhi: '델리',
    Manila: '마닐라',
    Macau_city: '마카오',
    Moscow: '모스크바',
    Vladivostok: '블라디보스토크',
    Toronto: '토론토',
    Vancouver: '밴쿠버',
    'Mexico City': '멕시코시티',
    Cancun: '칸쿤',
    'Rio de Janeiro': '리우데자네이루',
    'Buenos Aires': '부에노스아이레스',
    Berlin: '베를린',
    Prague: '프라하',
    Warsaw: '바르샤바',
    Copenhagen: '코펜하겐',
    Stockholm: '스톡홀름',
    Oslo: '오슬로',
    Helsinki: '헬싱키',
    Vienna: '빈',
    Dublin: '더블린',
    Reykjavik: '레이캬비크',
    Athens: '아테네',
    Santorini: '산토리니',
    Istanbul: '이스탄불',
    Zermatt: '체르마트',
    Lisbon: '리스본',
    'Quebec City': '퀘벡시티',
    'Las Vegas': '라스베이거스',
    Cusco: '쿠스코',
    Santiago: '산티아고',
    Cartagena: '카르타헤나',
    Uyuni: '우유니',
    Chefchaouen: '셰프샤우엔',
    Arusha: '아루샤',
    Queenstown: '퀸스타운',
    'Malé': '말레',
    Koror: '코로르',
    Cairo: '카이로',
    'Cape Town': '케이프타운',
    Nairobi: '나이로비',
    Accra: '아크라',
    Guam_city: '괌',
    Hawaii: '하와이',
    Alaska: '알래스카',
    Texas: '텍사스'
};

const DEFAULT_BASE_AMOUNTS = {
    EUR: 10,
    GBP: 10,
    USD: 10,
    INR: 100,
    JPY: 1000,
    HKD: 20,
    MYR: 10,
    MOP: 100,
    PHP: 100,
    RUB: 100,
    CAD: 10,
    MXN: 50,
    BRL: 20,
    ARS: 1000,
    SGD: 10,
    THB: 100,
    IDR: 100000,
    AED: 10,
    SAR: 50,
    AUD: 10,
    CNY: 10,
    TWD: 100,
    VND: 10000,
    EGP: 100,
    CZK: 100,
    PLN: 20,
    DKK: 100,
    SEK: 100,
    NOK: 100,
    ISK: 1000,
    CHF: 10,
    TRY: 100,
    ZAR: 100,
    KES: 500,
    GHS: 100,
    PEN: 20,
    CLP: 1000,
    COP: 10000,
    BOB: 50,
    MAD: 100,
    TZS: 5000,
    NZD: 10,
    MVR: 100
};

const COUNTRY_THEMES = {
    France: buildTheme('#F6C445', '#182B63', 0.58, 0.94),
    'United Kingdom': buildTheme('#5B8DEF', '#0F172A', 0.52, 0.94),
    'United States': buildTheme('#FF6B6B', '#111827', 0.48, 0.92),
    Japan: buildTheme('#E85D04', '#1F2A44', 0.30, 0.74),
    Italy: buildTheme('#22C55E', '#052E16', 0.48, 0.92),
    Spain: buildTheme('#EC4899', '#3B0764', 0.46, 0.90),
    Singapore: buildTheme('#14B8A6', '#0F172A', 0.50, 0.92),
    Malaysia: buildTheme('#E11D48', '#3F0A1F', 0.42, 0.88),
    Indonesia: buildTheme('#FF7A59', '#123B3A', 0.34, 0.78),
    Thailand: buildTheme('#F59E0B', '#451A03', 0.48, 0.92),
    'United Arab Emirates': buildTheme('#22D3EE', '#082F49', 0.52, 0.92),
    Netherlands: buildTheme('#FB923C', '#431407', 0.45, 0.92),
    'Hong Kong': buildTheme('#A78BFA', '#2E1065', 0.48, 0.92),
    Macau: buildTheme('#60A5FA', '#172554', 0.42, 0.88),
    Australia: buildTheme('#10B981', '#062E2A', 0.34, 0.72),
    China: buildTheme('#EF4444', '#450A0A', 0.42, 0.88),
    Taiwan: buildTheme('#38BDF8', '#083344', 0.42, 0.88),
    Vietnam: buildTheme('#84CC16', '#1A2E05', 0.40, 0.88),
    India: buildTheme('#FB8C00', '#4B1D06', 0.44, 0.90),
    'Saudi Arabia': buildTheme('#22C55E', '#0F2F1F', 0.36, 0.82),
    Philippines: buildTheme('#2563EB', '#0B132B', 0.46, 0.90),
    Russia: buildTheme('#93C5FD', '#1E3A8A', 0.38, 0.88),
    Canada: buildTheme('#DC2626', '#4C0519', 0.40, 0.90),
    Mexico: buildTheme('#16A34A', '#052E16', 0.42, 0.88),
    Brazil: buildTheme('#FACC15', '#14532D', 0.42, 0.88),
    Argentina: buildTheme('#7DD3FC', '#083344', 0.38, 0.84),
    Germany: buildTheme('#EAB308', '#111827', 0.40, 0.90),
    'Czech Republic': buildTheme('#2563EB', '#1E1B4B', 0.40, 0.88),
    Poland: buildTheme('#FB7185', '#241B2F', 0.36, 0.82),
    Denmark: buildTheme('#DC2626', '#1F2937', 0.38, 0.86),
    Sweden: buildTheme('#F59E0B', '#1E3A8A', 0.40, 0.88),
    Norway: buildTheme('#38BDF8', '#172554', 0.34, 0.82),
    Finland: buildTheme('#93C5FD', '#0F172A', 0.34, 0.80),
    Austria: buildTheme('#F87171', '#3F1D1D', 0.38, 0.84),
    Ireland: buildTheme('#22C55E', '#123524', 0.36, 0.82),
    Iceland: buildTheme('#60A5FA', '#1E3A8A', 0.32, 0.78),
    Switzerland: buildTheme('#F43F5E', '#2B1B24', 0.36, 0.82),
    Portugal: buildTheme('#16A34A', '#16301F', 0.36, 0.82),
    Greece: buildTheme('#2563EB', '#14213D', 0.36, 0.82),
    Turkey: buildTheme('#E11D48', '#3A101D', 0.38, 0.84),
    Egypt: buildTheme('#D97706', '#3F1D0A', 0.42, 0.90),
    Morocco: buildTheme('#0EA5E9', '#1E293B', 0.36, 0.82),
    Tanzania: buildTheme('#84CC16', '#223018', 0.34, 0.80),
    'South Africa': buildTheme('#10B981', '#153D2E', 0.38, 0.84),
    Kenya: buildTheme('#65A30D', '#1F2937', 0.36, 0.82),
    Ghana: buildTheme('#FACC15', '#3A2E00', 0.36, 0.82),
    Guam: buildTheme('#06B6D4', '#083344', 0.40, 0.88),
    'New Zealand': buildTheme('#38BDF8', '#112240', 0.34, 0.80),
    Maldives: buildTheme('#22D3EE', '#0B2942', 0.34, 0.78),
    Saipan: buildTheme('#F59E0B', '#10324A', 0.34, 0.80),
    Palau: buildTheme('#60A5FA', '#0F172A', 0.32, 0.78),
    Peru: buildTheme('#DC2626', '#2E1A22', 0.36, 0.82),
    Chile: buildTheme('#3B82F6', '#0F172A', 0.34, 0.80),
    Colombia: buildTheme('#FACC15', '#1E3A2A', 0.34, 0.80),
    Bolivia: buildTheme('#EF4444', '#1E293B', 0.36, 0.82)
};

const PREFERRED_GROUP_DESTINATIONS = {
    China: 'beijing',
    Indonesia: 'bali',
    Canada: 'quebec',
    'United States': 'los-angeles'
};

const ui = {
    heroImage: document.getElementById('hero-image'),
    tripShell: document.getElementById('trip-shell'),
    setupOverlay: document.getElementById('setup-overlay'),
    destinationSelector: document.getElementById('destination-selector'),
    destinationDropdownTrigger: document.getElementById('destination-dropdown-trigger'),
    destinationDropdownValue: document.getElementById('destination-dropdown-value'),
    destinationDropdownMeta: document.getElementById('destination-dropdown-meta'),
    setupStartDate: document.getElementById('setup-start-date'),
    setupEndDate: document.getElementById('setup-end-date'),
    setupStartDisplay: document.getElementById('setup-start-display'),
    setupEndDisplay: document.getElementById('setup-end-display'),
    setupCalendarMonthLabel: document.getElementById('setup-calendar-month-label'),
    setupCalendarGrid: document.getElementById('setup-calendar-grid'),
    setupCalendarPrevBtn: document.getElementById('setup-calendar-prev-btn'),
    setupCalendarNextBtn: document.getElementById('setup-calendar-next-btn'),
    setupSegmentPanel: document.getElementById('setup-segment-panel'),
    setupSegmentList: document.getElementById('setup-segment-list'),
    setupSegmentCount: document.getElementById('setup-segment-count'),
    addSegmentBtn: document.getElementById('add-segment-btn'),
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
    currentFocusBtn: document.getElementById('current-focus-btn'),
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
    iconPickerCancelBtn: document.getElementById('icon-picker-cancel-btn'),
    
    // 신규 모달 요소 등록
    startOptionsModal: document.getElementById('start-options-modal'),
    optTemplateBtn: document.getElementById('opt-template-btn'),
    optBlankBtn: document.getElementById('opt-blank-btn'),
    optAiBtn: document.getElementById('opt-ai-btn'),
    optCancelBtn: document.getElementById('opt-cancel-btn'),
    aiPromptModal: document.getElementById('ai-prompt-modal'),
    aiPromptText: document.getElementById('ai-prompt-text'),
    aiPromptCopyBtn: document.getElementById('ai-prompt-copy-btn'),
    aiPromptCloseBtn: document.getElementById('ai-prompt-close-btn'),
    aiPromptOkBtn: document.getElementById('ai-prompt-ok-btn')
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
    const destination = DESTINATIONS[id] || DESTINATIONS[DEFAULT_DESTINATION_ID] || DESTINATIONS.paris;
    return {
        ...destination,
        ...(COUNTRY_THEMES[destination.country] || {})
    };
}

function getLocalizedLabel(value, fallback = '') {
    return LOCATION_LABELS[value] || fallback || value;
}

function getRegionKey(country) {
    return COUNTRY_REGIONS[country] || 'asia';
}

function getCountrySortIndex(country) {
    const index = COUNTRY_SORT_ORDER.indexOf(country);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
}

function startOfMonth(date) {
    const next = new Date(date);
    next.setDate(1);
    next.setHours(0, 0, 0, 0);
    return next;
}

function shiftMonth(date, amount) {
    const next = startOfMonth(date);
    next.setMonth(next.getMonth() + amount);
    return next;
}

function formatSetupDate(value) {
    const date = parseYmd(value);
    if (!date) return '선택 안 됨';

    return date.toLocaleDateString('ko-KR', {
        month: 'long',
        day: 'numeric',
        weekday: 'short'
    });
}

function formatSetupMonthLabel(date) {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
}

function syncSetupCalendarMonth(anchorValue = setupSelection.startDate || setupSelection.endDate) {
    const anchorDate = parseYmd(anchorValue) || new Date();
    setupCalendarMonth = formatYmd(startOfMonth(anchorDate));
}

function compareSegments(left, right) {
    const startCompare = left.startDate.localeCompare(right.startDate);
    if (startCompare !== 0) return startCompare;

    const endCompare = left.endDate.localeCompare(right.endDate);
    if (endCompare !== 0) return endCompare;

    return left.destinationId.localeCompare(right.destinationId);
}

function sortSegments(segments = []) {
    return [...segments].sort(compareSegments);
}

function cloneSegment(segment) {
    return {
        destinationId: segment.destinationId,
        startDate: segment.startDate,
        endDate: segment.endDate
    };
}

function isSameSegment(left, right) {
    return left.destinationId === right.destinationId
        && left.startDate === right.startDate
        && left.endDate === right.endDate;
}

function rangesOverlap(left, right) {
    return !(left.endDate < right.startDate || right.endDate < left.startDate);
}

function findOverlappingSegment(segment, segments = []) {
    return segments.find((entry) => !isSameSegment(entry, segment) && rangesOverlap(entry, segment)) || null;
}

function getOverallRange(segments = []) {
    const sortedSegments = sortSegments(segments);
    if (!sortedSegments.length) return { startDate: '', endDate: '' };

    return {
        startDate: sortedSegments[0].startDate,
        endDate: sortedSegments[sortedSegments.length - 1].endDate
    };
}

function syncAppDateBounds() {
    const { startDate, endDate } = getOverallRange(appState.segments);
    appState.startDate = startDate;
    appState.endDate = endDate;
}

function getDayKey(day) {
    return day.date;
}

function getDraftSetupSegment() {
    const destination = getDestination(setupSelection.destinationId);
    if (!parseYmd(setupSelection.startDate) || !parseYmd(setupSelection.endDate) || setupRangeSelectingEnd) {
        return null;
    }

    const { startDate, endDate } = normalizeDateRange(setupSelection.startDate, setupSelection.endDate, destination);
    return {
        destinationId: setupSelection.destinationId,
        startDate,
        endDate
    };
}

function getPendingSetupSegments(includeDraft = false) {
    const segments = setupSegments.map((segment) => cloneSegment(segment));
    if (!includeDraft) return sortSegments(segments);

    const draftSegment = getDraftSetupSegment();
    if (draftSegment && !segments.some((segment) => isSameSegment(segment, draftSegment))) {
        segments.push(draftSegment);
    }

    return sortSegments(segments);
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
        const preferredId = PREFERRED_GROUP_DESTINATIONS[destinations[0].country];
        const representative = destinations.find((destination) => destination.id === preferredId) || destinations[0];
        const hasMultipleZones = (countryZoneCounts.get(representative.country) || 0) > 1;

        return {
            id: representative.id,
            country: representative.country,
            region: getRegionKey(representative.country),
            primaryLabel: getLocalizedLabel(representative.country),
            secondaryLabel: hasMultipleZones ? getLocalizedLabel(representative.city, representative.city) : '',
            timeZone: representative.timeZone
        };
    }).sort((left, right) => {
        const regionCompare = REGION_ORDER.indexOf(left.region) - REGION_ORDER.indexOf(right.region);
        if (regionCompare !== 0) return regionCompare;

        const countryCompare = getCountrySortIndex(left.country) - getCountrySortIndex(right.country);
        if (countryCompare !== 0) return countryCompare;

        return (left.secondaryLabel || '').localeCompare(right.secondaryLabel || '', 'ko');
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

function formatMonthDayWithWeekday(date) {
    return `(${WEEKDAY_LABELS_KO[date.getDay()]})`;
}

function addDays(date, amount) {
    const next = new Date(date);
    next.setDate(next.getDate() + amount);
    return next;
}

function countDaysInclusive(startDate, endDate) {
    return Math.floor((endDate.getTime() - startDate.getTime()) / 86400000) + 1;
}

function timeToMinutes(value = '00:00') {
    const [hours, minutes] = value.split(':').map(Number);
    return (hours * 60) + minutes;
}

function minutesToTime(totalMinutes) {
    const normalized = Math.max(0, Math.min(1439, Math.round(totalMinutes)));
    const hours = String(Math.floor(normalized / 60)).padStart(2, '0');
    const minutes = String(normalized % 60).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function roundMinutes(value, step = 5) {
    return Math.round(value / step) * step;
}

function sortActivities(day) {
    day.activities.sort((left, right) => left.time.localeCompare(right.time));
}

function syncDayDestinations(day) {
    const destinationIds = [...new Set(day.activities.map((activity) => activity.destinationId).filter(Boolean))];
    day.destinationIds = destinationIds.length ? destinationIds : (day.destinationIds?.length ? day.destinationIds : [day.destinationId].filter(Boolean));
    day.destinationId = day.destinationIds[0] || appState.destinationId;
}

function cloneTemplateActivity(activity) {
    return {
        id: createId('activity'),
        destinationId: activity.destinationId || '',
        time: activity.time,
        title: activity.title,
        location: activity.location,
        type: activity.type,
        memo: activity.memo || ''
    };
}

function getLocalizedLocationText(value, fallback = '') {
    return getLocalizedLabel(value, fallback || value);
}

function getAirportQuery(destination) {
    for (const template of [...destination.itineraryTemplate].reverse()) {
        const airportActivity = [...template.activities].reverse().find((activity) => activity.type === 'plane');
        if (airportActivity?.location) {
            return airportActivity.location;
        }
    }

    return `${destination.city} Airport`;
}

function getAirportDisplayLocation(destination) {
    const localizedHub = getLocalizedLabel(destination.city, getLocalizedLabel(destination.country, destination.country));
    return `${localizedHub} 공항`;
}

function getTemplateFocusActivities(destination, dayIndex) {
    const templateLength = Math.max(destination.itineraryTemplate.length, 1);
    const template = destination.itineraryTemplate[dayIndex % templateLength];
    const focusActivities = template.activities.filter((activity) => activity.type !== 'plane');

    if (!focusActivities.length) {
        return [
            {
                title: `${getLocalizedLabel(destination.country, destination.country)} 핵심 동선`,
                location: destination.city,
                type: 'map'
            },
            {
                title: `${getLocalizedLabel(destination.country, destination.country)} 핵심 동선`,
                location: destination.city,
                type: 'map'
            }
        ];
    }

    return focusActivities.length === 1
        ? [focusActivities[0], focusActivities[0]]
        : [focusActivities[0], focusActivities[focusActivities.length - 1]];
}

function getTemplateActivityLocationDisplay(destination, activity) {
    return getLocalizedLocationText(
        activity?.location,
        activity?.locationKo || activity?.title || getLocalizedLabel(destination.city, destination.city)
    );
}

function buildGeneratedActivitiesForDestination(context, slotIndex = 0, slotCount = 1) {
    const normalizedContext = typeof context === 'string'
        ? {
            destinationId: context,
            dayIndex: 0,
            date: '',
            startDate: '',
            endDate: ''
        }
        : context;
    const {
        destinationId,
        dayIndex = 0,
        date = '',
        startDate = '',
        endDate = ''
    } = normalizedContext;
    const destination = getDestination(destinationId);
    const airportQuery = getAirportQuery(destination);
    const airportLocation = getAirportDisplayLocation(destination);
    const [primaryFocus, secondaryFocus] = getTemplateFocusActivities(destination, dayIndex);
    const localizedCountry = getLocalizedLabel(destination.country, destination.country);
    const isSegmentStart = Boolean(startDate) && date === startDate;
    const isSegmentEnd = Boolean(endDate) && date === endDate;

    const windowStart = 360;
    const windowEnd = 1320;
    const slotSpan = (windowEnd - windowStart) / Math.max(slotCount, 1);
    const slotStart = windowStart + (slotSpan * slotIndex);
    const slotEnd = windowStart + (slotSpan * (slotIndex + 1));
    const padding = Math.max(35, Math.min(80, slotSpan * 0.18));
    const safeTime = (rawMinutes) => minutesToTime(roundMinutes(Math.max(slotStart + 20, Math.min(slotEnd - 20, rawMinutes))));
    const arrivalTime = safeTime(slotStart + padding);
    const earlyFocusTime = safeTime(slotStart + (slotSpan * 0.28));
    const middleFocusTime = safeTime(slotStart + (slotSpan * 0.54));
    const lateFocusTime = safeTime(slotStart + (slotSpan * 0.74));
    const departureTime = safeTime(slotEnd - padding);
    const activities = [];
    const pushFocusActivity = (activity, time) => {
        activities.push({
            id: createId('activity'),
            destinationId,
            time,
            title: activity?.title || `${localizedCountry} 핵심 동선`,
            location: getTemplateActivityLocationDisplay(destination, activity),
            mapQuery: activity?.location || activity?.title || destination.city,
            type: activity?.type || 'map',
            memo: ''
        });
    };

    if (isSegmentStart) {
        activities.push({
            id: createId('activity'),
            destinationId,
            time: arrivalTime,
            title: `${localizedCountry} 공항 도착`,
            location: airportLocation,
            type: 'plane',
            memo: '',
            mapQuery: airportQuery
        });
    }

    if (isSegmentStart && isSegmentEnd) {
        pushFocusActivity(primaryFocus, middleFocusTime);
    } else if (isSegmentStart) {
        pushFocusActivity(primaryFocus, middleFocusTime);
    } else if (isSegmentEnd) {
        pushFocusActivity(secondaryFocus, middleFocusTime);
    } else if (slotSpan >= 260) {
        pushFocusActivity(primaryFocus, earlyFocusTime);
        pushFocusActivity(secondaryFocus, lateFocusTime);
    } else {
        pushFocusActivity(primaryFocus, middleFocusTime);
    }

    if (isSegmentEnd) {
        activities.push({
            id: createId('activity'),
            destinationId,
            time: departureTime,
            title: `${localizedCountry} 공항 출발`,
            location: airportLocation,
            type: 'plane',
            memo: '',
            mapQuery: airportQuery
        });
    }

    return activities.sort((left, right) => left.time.localeCompare(right.time));
}

function buildStayMapQuery(destinationId) {
    const destination = getDestination(destinationId);
    return `${destination.city} hotel`;
}

function createStayActivity({ destinationId, time, title }) {
    return {
        id: createId('activity'),
        destinationId,
        time,
        title,
        location: '숙소',
        mapQuery: buildStayMapQuery(destinationId),
        type: 'luggage',
        memo: ''
    };
}

function applyDailyStayAnchors(day) {
    const activities = Array.isArray(day.activities) ? [...day.activities] : [];
    const destinationIds = day.destinationIds?.length ? day.destinationIds : [day.destinationId].filter(Boolean);
    const firstDestinationId = activities.find((activity) => activity.destinationId)?.destinationId || destinationIds[0];
    const lastDestinationId = [...activities].reverse().find((activity) => activity.destinationId)?.destinationId || destinationIds[destinationIds.length - 1] || firstDestinationId;

    if (!firstDestinationId || !lastDestinationId) {
        return {
            ...day,
            activities
        };
    }

    const hasAirportArrival = activities.some((activity) => activity.type === 'plane' && String(activity.title || '').includes('공항 도착'));
    const hasAirportDeparture = activities.some((activity) => activity.type === 'plane' && String(activity.title || '').includes('공항 출발'));
    const hasStayDeparture = activities.some((activity) => String(activity.title || '').trim() === '숙소 출발');
    const hasStayReturn = activities.some((activity) => String(activity.title || '').trim() === '숙소');

    if (!hasAirportArrival && !hasStayDeparture) {
        activities.push(createStayActivity({
            destinationId: firstDestinationId,
            time: '09:00',
            title: '숙소 출발'
        }));
    }

    if (!hasAirportDeparture && !hasStayReturn) {
        activities.push(createStayActivity({
            destinationId: lastDestinationId,
            time: '21:00',
            title: '숙소'
        }));
    }

    const nextDay = {
        ...day,
        activities
    };
    sortActivities(nextDay);
    syncDayDestinations(nextDay);
    return nextDay;
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

    return Array.from({ length: dayCount }, (_, dayIndex) => {
        const currentDate = addDays(baseDate, dayIndex);
        const currentDateValue = formatYmd(currentDate);
        const activities = buildGeneratedActivitiesForDestination({
            destinationId,
            dayIndex,
            date: currentDateValue,
            startDate,
            endDate
        }, 0, 1);

        return applyDailyStayAnchors({
            id: createId('day'),
            destinationId,
            destinationIds: [destinationId],
            date: currentDateValue,
            day: DAY_LABELS[currentDate.getDay()],
            title: buildTemplateTitle(destination, dayIndex),
            activities
        });
    });
}

function buildItineraryFromSegments(segments = []) {
    const dayContextMap = new Map();

    sortSegments(segments).forEach((segment) => {
        const baseDate = parseYmd(segment.startDate);
        const finalDate = parseYmd(segment.endDate);
        const dayCount = countDaysInclusive(baseDate, finalDate);

        Array.from({ length: dayCount }, (_, dayIndex) => {
            const date = formatYmd(addDays(baseDate, dayIndex));
            if (!dayContextMap.has(date)) {
                dayContextMap.set(date, []);
            }
            dayContextMap.get(date).push({
                destinationId: segment.destinationId,
                dayIndex,
                date,
                startDate: segment.startDate,
                endDate: segment.endDate
            });
        });
    });

    return Array.from(dayContextMap.entries())
        .sort(([leftDate], [rightDate]) => leftDate.localeCompare(rightDate))
        .map(([date, contexts]) => {
            const sortedContexts = [...contexts].sort((left, right) => {
                const startCompare = left.startDate.localeCompare(right.startDate);
                if (startCompare !== 0) return startCompare;
                return left.destinationId.localeCompare(right.destinationId);
            });
            const destinationIds = [...new Set(sortedContexts.map((context) => context.destinationId))];
            const activities = sortedContexts.flatMap((context, slotIndex) =>
                buildGeneratedActivitiesForDestination(context, slotIndex, sortedContexts.length)
            );
            const primaryDestination = getDestination(destinationIds[0]);

            return applyDailyStayAnchors({
                id: createId('day'),
                destinationId: destinationIds[0],
                destinationIds,
                date,
                day: DAY_LABELS[parseYmd(date).getDay()],
                title: destinationIds.length > 1
                    ? `${destinationIds.length}개 국가 일정`
                    : buildTemplateTitle(primaryDestination, sortedContexts[0].dayIndex),
                activities
            });
        });
}

function buildItineraryFromSharedPayload(segments = [], serializedDays = []) {
    const templateItinerary = buildItineraryFromSegments(segments);

    return templateItinerary.map((day, dayIndex) => {
        const sourceDay = serializedDays[dayIndex];
        if (!sourceDay) return day;

        const nextActivities = Array.isArray(sourceDay.a) && sourceDay.a.length
            ? sourceDay.a.map((activity) => ({
                id: createId('activity'),
                destinationId: getSelectableDestinationId(
                    typeof activity.d === 'string' && activity.d
                        ? activity.d
                        : (day.activities[0]?.destinationId || day.destinationId)
                ),
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
            destinationId: nextActivities[0]?.destinationId || day.destinationId,
            destinationIds: [...new Set(nextActivities.map((activity) => activity.destinationId).filter(Boolean))],
            title: typeof sourceDay.t === 'string' && sourceDay.t.trim() ? sourceDay.t.trim() : day.title,
            activities: nextActivities
        };
    });
}

function buildSharePayload() {
    return {
        v: 3,
        g: appState.segments.map((segment) => ({
            d: getSelectableDestinationId(segment.destinationId),
            s: segment.startDate,
            e: segment.endDate
        })),
        i: appState.itinerary.map((day) => ({
            a: day.activities.map((activity) => ({
                d: getSelectableDestinationId(activity.destinationId || day.destinationId),
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
    ui.heroImage.style.objectPosition = destination.heroPosition || 'center center';
    document.title = `${destination.country} Trip Plan`;
}

function preloadHeroImage(src) {
    if (!src) return Promise.resolve(false);
    if (heroImagePreloadCache.has(src)) return heroImagePreloadCache.get(src);

    const promise = new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);
        image.src = src;
    });

    heroImagePreloadCache.set(src, promise);
    return promise;
}

function getActivityIconOption(value) {
    return ACTIVITY_ICON_OPTIONS.find((option) => option.value === value) || null;
}

function getRenderableActivityIcon(value) {
    return ACTIVITY_ICON_VALUES.has(value) ? value : 'map-pin';
}

function getLocationSearchQueries(location, destinationId = '') {
    const rawLocation = String(location || '').trim();
    if (!rawLocation) return [];

    if (!destinationId) {
        return [rawLocation];
    }

    const destination = getDestination(destinationId);
    const localizedCity = getLocalizedLabel(destination.city, '');
    const localizedCountry = getLocalizedLabel(destination.country, destination.country);
    const queries = [
        rawLocation,
        [rawLocation, localizedCity, destination.city, localizedCountry, destination.country].filter(Boolean).join(', '),
        [rawLocation, destination.city, destination.country].filter(Boolean).join(', '),
        [rawLocation, localizedCountry, destination.country].filter(Boolean).join(', '),
        [rawLocation, destination.country].filter(Boolean).join(', ')
    ];

    return [...new Set(queries.filter(Boolean))];
}

function getLocationSearchQuery(location, destinationId = '') {
    return getLocationSearchQueries(location, destinationId)[0] || String(location || '').trim();
}

function getMapsSearchUrl(location, destinationId = '') {
    const url = new URL('https://www.google.com/maps/search/');
    url.searchParams.set('api', '1');
    url.searchParams.set('hl', 'ko');
    url.searchParams.set('gl', 'kr');
    url.searchParams.set('query', String(location || '').trim() || getLocationSearchQuery(location, destinationId));
    return url.toString();
}

function getDirectionsUrl(origin, destination) {
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('hl', 'ko');
    url.searchParams.set('gl', 'kr');
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    return url.toString();
}

function getDayDirectionsUrl(activities = [], fallbackDestinationId = '') {
    const validLocations = activities
        .map((activity) => String(activity.mapQuery || activity.location || '').trim())
        .filter(Boolean);
    if (validLocations.length < 2) return '';

    const origin = validLocations[0];
    const destination = validLocations[validLocations.length - 1];
    const waypoints = validLocations.slice(1, -1);
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('hl', 'ko');
    url.searchParams.set('gl', 'kr');
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    if (waypoints.length) {
        url.searchParams.set('waypoints', waypoints.join('|'));
    }
    return url.toString();
}

function getGoogleMapsEmbedUrl(query) {
    return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

function parseAmountInput(value) {
    const normalized = String(value || '').replaceAll(',', '').trim();
    if (!normalized) return null;

    const amount = Number(normalized);
    if (!Number.isFinite(amount) || amount < 0) return null;
    return amount;
}

function getEditingActivityDestinationId() {
    const day = appState.itinerary[activityEditorState.dayIndex];
    const existing = activityEditorState.activityId
        ? day?.activities.find((activity) => activity.id === activityEditorState.activityId)
        : null;
    return existing?.destinationId
        || day?.destinationIds?.[0]
        || day?.destinationId
        || appState.destinationId
        || setupSelection.destinationId;
}

function getEditingActivityLookupValue(location) {
    const day = appState.itinerary[activityEditorState.dayIndex];
    const existing = activityEditorState.activityId
        ? day?.activities.find((activity) => activity.id === activityEditorState.activityId)
        : null;
    return existing?.location === location
        ? (existing?.mapQuery || location)
        : location;
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

function getAmountCandidates(code) {
    const currencyCandidates = CURRENCY_DENOMINATIONS[code] || [];
    return [...new Set([...GENERAL_SMALL_AMOUNT_CANDIDATES, ...currencyCandidates])]
        .filter((value) => Number.isFinite(value) && value > 0)
        .sort((left, right) => left - right);
}

function getSuggestedBaseAmount(destination, exchangeRate) {
    const curatedAmount = DEFAULT_BASE_AMOUNTS[destination.currency.code];
    if (curatedAmount) {
        const curatedKrw = curatedAmount * exchangeRate;
        if (curatedKrw >= 500 && curatedKrw <= 2500) {
            return curatedAmount;
        }
    }

    const candidates = getAmountCandidates(destination.currency.code);
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
    const destinationId = getEditingActivityDestinationId();
    const lookupValue = getEditingActivityLookupValue(location);
    const requestId = ++mapPreviewRequestId;
    ui.activityMapLink.href = location ? getMapsSearchUrl(lookupValue, destinationId) : 'https://www.google.com/maps?hl=ko&gl=kr';

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
    ui.activityMapStatus.textContent = '구글 지도 미리보기를 불러오는 중입니다.';

    mapPreviewTimer = window.setTimeout(() => {
        if (requestId !== mapPreviewRequestId) return;
        const query = String(location || lookupValue || getLocationSearchQuery(location, destinationId)).trim();
        ui.activityMapFrame.src = getGoogleMapsEmbedUrl(query);
        ui.activityMapStatus.textContent = `"${location}" 주변을 구글 지도 기준으로 보여줍니다.`;
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

function openActivityTimePicker() {
    if (typeof ui.activityTime?.showPicker !== 'function') return;

    try {
        ui.activityTime.showPicker();
    } catch (error) {
        // Some browsers throw when the picker is already open.
    }
}

function applyActivityIconSelection(value) {
    activityEditorState.icon = ACTIVITY_ICON_VALUES.has(value) ? value : '';
    renderActivityIconSelection();
    renderIconPicker();
}

function getActiveActivityCard() {
    if (!appState.activeActivityId) return null;
    return ui.itineraryContainer.querySelector(`[data-activity-card-id="${appState.activeActivityId}"]`);
}

function setCurrentFocusButtonVisible(visible) {
    ui.currentFocusBtn.classList.toggle('hidden', !visible);
}

function updateCurrentFocusButton() {
    if (!appState.hasStarted || !appState.activeActivityId || ui.tripShell.classList.contains('hidden')) {
        setCurrentFocusButtonVisible(false);
        return;
    }

    if (!ui.activityModal.classList.contains('hidden') || !ui.setupOverlay.classList.contains('hidden')) {
        setCurrentFocusButtonVisible(false);
        return;
    }

    const activeCard = getActiveActivityCard();
    if (!activeCard) {
        setCurrentFocusButtonVisible(false);
        return;
    }

    const rect = activeCard.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    const isVisible = rect.bottom > 72 && rect.top < viewportHeight - 72;
    const isBelowViewport = rect.top >= viewportHeight - 72;

    if (isVisible || !isBelowViewport || currentFocusDismissedActivityId === appState.activeActivityId) {
        setCurrentFocusButtonVisible(false);
        return;
    }

    setCurrentFocusButtonVisible(true);
}

function scrollToCurrentFocus() {
    const activeCard = getActiveActivityCard();
    if (!activeCard) return;

    isAutoScrollingToCurrentFocus = true;
    setCurrentFocusButtonVisible(false);
    activeCard.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    window.setTimeout(() => {
        isAutoScrollingToCurrentFocus = false;
        updateCurrentFocusButton();
    }, 900);
}

function handleCurrentFocusScrollDismiss() {
    if (isAutoScrollingToCurrentFocus) {
        updateCurrentFocusButton();
        return;
    }

    if (!ui.currentFocusBtn.classList.contains('hidden') && appState.activeActivityId) {
        currentFocusDismissedActivityId = appState.activeActivityId;
    }

    updateCurrentFocusButton();
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
    const selectableDestinations = getSelectableDestinations();
    ui.destinationSelector.innerHTML = REGION_ORDER.map((regionKey) => {
        const entries = selectableDestinations.filter((destination) => destination.region === regionKey);
        if (!entries.length) return '';

        const buttons = entries.map((destination) => `
            <button
                type="button"
                class="dropdown-option w-full rounded-[18px] border border-white/10 bg-slate-900 px-4 py-3 text-left transition-colors hover:bg-slate-800 ${destination.id === setupSelection.destinationId ? 'active' : ''}"
                data-destination="${destination.id}">
                <div class="flex items-center justify-between gap-3">
                    <div class="min-w-0">
                        <div class="text-base font-semibold text-white truncate">${escapeHtml(destination.primaryLabel)}</div>
                        <div class="text-sm text-white/62 truncate">${escapeHtml(destination.secondaryLabel || '대표 시간대')}</div>
                    </div>
                    <div class="text-lg shrink-0">${getCountryFlag(destination.country)}</div>
                </div>
            </button>
        `).join('');

        return `
            <section class="pb-1 ${regionKey === REGION_ORDER[0] ? '' : 'pt-2'}">
                <div class="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/34">${REGION_LABELS[regionKey]}</div>
                <div class="space-y-2">${buttons}</div>
            </section>
        `;
    }).join('');

    const selectedDestination = selectableDestinations.find((destination) => destination.id === setupSelection.destinationId)
        || selectableDestinations[0];
    if (selectedDestination) {
        ui.destinationDropdownValue.textContent = selectedDestination.primaryLabel;
        ui.destinationDropdownMeta.textContent = selectedDestination.secondaryLabel || '대표 시간대';
    }
}

function renderSetupSegmentList() {
    const segments = getPendingSetupSegments(false);
    ui.setupSegmentCount.textContent = `${segments.length}개`;
    ui.setupSegmentPanel.classList.toggle('hidden', !segments.length);

    if (!segments.length) {
        ui.setupSegmentList.innerHTML = `
            <div class="rounded-[18px] border border-dashed border-white/12 bg-white/[0.03] px-4 py-3 text-sm text-white/54">
                아직 추가된 일정이 없습니다.
            </div>
        `;
        return;
    }

    ui.setupSegmentList.innerHTML = segments.map((segment, index) => {
        const destination = getDestination(segment.destinationId);
        const localizedCountry = getLocalizedLabel(destination.country, destination.country);
        const localizedCity = getLocalizedLabel(destination.city, destination.city);
        const secondary = getSelectableDestinations().find((entry) => entry.id === getSelectableDestinationId(destination.id))?.secondaryLabel
            ? ` · ${localizedCity}`
            : '';

        return `
            <div class="rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3 flex items-center justify-between gap-3">
                <div class="min-w-0">
                    <div class="text-sm font-semibold text-white truncate">${index + 1}. ${escapeHtml(localizedCountry)}${escapeHtml(secondary)}</div>
                    <div class="text-xs text-white/58 mt-1">${escapeHtml(formatSetupDate(segment.startDate))} - ${escapeHtml(formatSetupDate(segment.endDate))}</div>
                </div>
                <button
                    type="button"
                    class="shrink-0 rounded-full border border-white/10 bg-white/6 p-2 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
                    data-remove-setup-segment="${index}"
                    aria-label="추가한 일정 제거">
                    <i data-lucide="x" class="w-4 h-4"></i>
                </button>
            </div>
        `;
    }).join('');

    lucide.createIcons();
}

function renderSetupCalendar() {
    const monthDate = parseYmd(setupCalendarMonth) || startOfMonth(parseYmd(setupSelection.startDate) || new Date());
    const monthStart = startOfMonth(monthDate);
    const gridStart = addDays(monthStart, -monthStart.getDay());
    const startDate = parseYmd(setupSelection.startDate);
    const endDate = !setupRangeSelectingEnd ? parseYmd(setupSelection.endDate) : null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    ui.setupCalendarMonthLabel.textContent = formatSetupMonthLabel(monthStart);
    ui.setupCalendarGrid.innerHTML = Array.from({ length: 42 }, (_, index) => {
        const cellDate = addDays(gridStart, index);
        const cellValue = formatYmd(cellDate);
        const isOutside = cellDate.getMonth() !== monthStart.getMonth();
        const isStart = setupSelection.startDate === cellValue;
        const isEnd = !!setupSelection.endDate && !setupRangeSelectingEnd && setupSelection.endDate === cellValue;
        const isInRange = startDate && endDate && cellDate >= startDate && cellDate <= endDate;
        const isToday = cellDate.getTime() === today.getTime();

        const classes = [
            'calendar-day',
            isOutside ? 'is-outside' : '',
            isInRange ? 'is-in-range' : '',
            (isStart || isEnd) ? 'is-boundary' : '',
            isToday ? 'is-today' : ''
        ].filter(Boolean).join(' ');

        return `
            <button type="button" class="${classes}" data-calendar-date="${cellValue}">
                <span>${cellDate.getDate()}</span>
            </button>
        `;
    }).join('');

    lucide.createIcons();
}

function renderSetupInputs() {
    setupRangeSelectingEnd = Boolean(setupSelection.startDate) && !setupSelection.endDate;
    ui.setupStartDate.value = setupSelection.startDate || '';
    ui.setupEndDate.value = setupSelection.endDate || '';
    ui.setupStartDisplay.textContent = formatSetupDate(setupSelection.startDate);
    ui.setupEndDisplay.textContent = setupRangeSelectingEnd
        ? '종료일 선택 중'
        : formatSetupDate(setupSelection.endDate);

    const hasValidDraft = Boolean(getDraftSetupSegment());
    const pendingSegments = getPendingSetupSegments(hasValidDraft);
    const canApply = pendingSegments.length > 0;
    ui.addSegmentBtn.disabled = !hasValidDraft;
    ui.addSegmentBtn.classList.toggle('opacity-50', !hasValidDraft);
    ui.addSegmentBtn.classList.toggle('pointer-events-none', !hasValidDraft);
    ui.applyPlanBtn.disabled = !canApply;
    ui.applyPlanBtn.classList.toggle('opacity-50', !canApply);
    ui.applyPlanBtn.classList.toggle('pointer-events-none', !canApply);

    renderSetupCalendar();
    renderSetupSegmentList();
}

function syncDestinationDropdownPosition() {
    if (ui.destinationSelector.classList.contains('hidden')) return;

    const rect = ui.destinationDropdownTrigger.getBoundingClientRect();
    const viewportPadding = 16;
    const width = Math.min(rect.width, window.innerWidth - (viewportPadding * 2));
    const left = Math.min(Math.max(viewportPadding, rect.left), window.innerWidth - width - viewportPadding);
    const availableBelow = Math.max(220, window.innerHeight - rect.bottom - viewportPadding);

    ui.destinationSelector.style.left = `${left}px`;
    ui.destinationSelector.style.top = `${rect.bottom + 8}px`;
    ui.destinationSelector.style.bottom = 'auto';
    ui.destinationSelector.style.width = `${width}px`;
    ui.destinationSelector.style.maxHeight = `${availableBelow}px`;
}

function openDestinationDropdown() {
    ui.destinationSelector.classList.remove('hidden');
    syncDestinationDropdownPosition();
}

function closeDestinationDropdown() {
    ui.destinationSelector.classList.add('hidden');
}

function toggleDestinationDropdown() {
    if (ui.destinationSelector.classList.contains('hidden')) {
        openDestinationDropdown();
        return;
    }
    closeDestinationDropdown();
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

function getDayDestination(day) {
    const primaryDestinationId = day?.destinationIds?.[0] || day?.destinationId || appState.destinationId;
    return getDestination(primaryDestinationId);
}

function getDayChipLabel(day) {
    const destinationIds = day.destinationIds?.length ? day.destinationIds : [day.destinationId];

    if (destinationIds.length > 1) {
        const labels = destinationIds.map((destinationId) => {
            const destination = getDestination(destinationId);
            return getLocalizedLabel(destination.country, destination.country);
        });
        return labels.length <= 2
            ? labels.join(' · ')
            : `${labels.slice(0, 2).join(' · ')} +${labels.length - 2}`;
    }

    const destination = getDestination(destinationIds[0]);
    const selectableEntry = getSelectableDestinations().find((entry) => entry.id === getSelectableDestinationId(destination.id));
    if (selectableEntry?.secondaryLabel) {
        return `${getLocalizedLabel(destination.country, destination.country)} · ${getLocalizedLabel(destination.city, destination.city)}`;
    }

    return getLocalizedLabel(destination.country, destination.country);
}

function getClockTimeValue(timeZone) {
    const now = getLocalNow(timeZone);
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function findActiveContext() {
    if (!appState.itinerary.length) {
        return {
            destinationId: setupSelection.destinationId,
            dayId: null,
            activityId: null
        };
    }

    let fallbackUpcomingDay = null;
    let fallbackPastDay = null;

    for (const day of appState.itinerary) {
        const destination = getDayDestination(day);
        const localNow = getLocalNow(destination.timeZone);
        localNow.setHours(0, 0, 0, 0);
        const localDateValue = formatYmd(localNow);

        if (day.date === localDateValue) {
            const nowTime = getClockTimeValue(destination.timeZone);
            const activities = [...day.activities].sort((left, right) => left.time.localeCompare(right.time));
            const activeActivity = activities.find((activity) => activity.time >= nowTime) || activities[activities.length - 1] || null;

            return {
                destinationId: activeActivity?.destinationId || day.destinationId,
                dayId: day.id,
                activityId: activeActivity?.id || null
            };
        }

        if (!fallbackUpcomingDay && day.date > localDateValue) {
            fallbackUpcomingDay = day;
        }

        fallbackPastDay = day;
    }

    const fallbackDay = fallbackUpcomingDay || fallbackPastDay || appState.itinerary[0];
    return {
        destinationId: fallbackDay.activities[0]?.destinationId || fallbackDay.destinationId,
        dayId: fallbackDay.id,
        activityId: fallbackDay.activities[0]?.id || null
    };
}

function applyActiveContext(context, { refreshPhrase = false } = {}) {
    const nextDestinationId = context.destinationId || appState.destinationId;
    const destinationChanged = nextDestinationId !== appState.destinationId;
    const dayChanged = context.dayId !== appState.activeDayId;
    const activityChanged = context.activityId !== appState.activeActivityId;

    appState.destinationId = nextDestinationId;
    appState.activeDayId = context.dayId;
    appState.activeActivityId = context.activityId;

    if (activityChanged) {
        currentFocusDismissedActivityId = null;
    }

    if (destinationChanged && refreshPhrase) {
        setRandomPhrase(appState.destinationId);
    }

    return {
        destinationChanged,
        dayChanged,
        activityChanged
    };
}

function renderStaticSummary() {
    const destination = getDestination(appState.destinationId);
    const firstDay = appState.itinerary[0];
    const lastDay = appState.itinerary[appState.itinerary.length - 1];
    if (!firstDay || !lastDay) return;

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
    const context = appState.hasStarted ? findActiveContext() : {
        destinationId: setupSelection.destinationId,
        dayId: null,
        activityId: null
    };
    const { destinationChanged, dayChanged, activityChanged } = applyActiveContext(context, { refreshPhrase: true });
    const destination = getDestination(appState.destinationId);

    if (appState.hasStarted && (destinationChanged || dayChanged || activityChanged)) {
        applyTheme(destination);
        renderUtilityInfo();
        renderStaticSummary();
        renderItinerary();
        if (destinationChanged) {
            fetchExchangeRate();
        }
    }

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
    const dailyByKey = {};
    const hourlyByKey = {};
    let hasLive = false;
    let hasRange = false;
    let hasError = false;

    for (const segment of appState.segments) {
        const destination = getDestination(segment.destinationId);
        if (!canFetchWeather(destination.id, segment.startDate, segment.endDate)) {
            hasRange = true;
            continue;
        }

        try {
            const params = new URLSearchParams({
                latitude: destination.weather.latitude,
                longitude: destination.weather.longitude,
                daily: 'weather_code,temperature_2m_max,temperature_2m_min',
                hourly: 'temperature_2m,weather_code',
                timezone: destination.timeZone,
                start_date: segment.startDate,
                end_date: segment.endDate
            });
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
            if (!response.ok) throw new Error('Weather fetch failed');

            const data = await response.json();
            hasLive = true;

            (data?.daily?.time || []).forEach((date, index) => {
                dailyByKey[`${destination.id}|${date}`] = {
                    weatherCode: data.daily.weather_code[index],
                    maxTemp: data.daily.temperature_2m_max[index],
                    minTemp: data.daily.temperature_2m_min[index]
                };
            });

            (data?.hourly?.time || []).forEach((entry, index) => {
                hourlyByKey[`${destination.id}|${entry}`] = {
                    weatherCode: data.hourly.weather_code[index],
                    temp: data.hourly.temperature_2m[index]
                };
            });
        } catch (error) {
            console.error('Weather fetch failed:', error);
            hasError = true;
        }
    }

    appState.currentWeather = { dailyByKey, hourlyByKey };
    appState.weatherMode = hasError ? 'error' : (hasLive ? 'live' : 'range');
    if (!hasLive && hasRange && !hasError) {
        appState.weatherMode = 'range';
    }

    renderWeatherStatus();
    refreshRenderedWeather();
}

function buildDailyWeatherContent(day) {
    const destinationIds = [...new Set((day.destinationIds?.length ? day.destinationIds : [day.destinationId]).filter(Boolean))];
    const chips = destinationIds.map((destinationId) => {
        const weather = appState.currentWeather?.dailyByKey?.[`${destinationId}|${day.date}`];
        if (!weather) return '';

        const weatherInfo = getWeatherInfo(weather.weatherCode);
        const maxTemp = Math.round(weather.maxTemp);
        const minTemp = Math.round(weather.minTemp);
        const destination = getDestination(destinationId);
        const prefix = destinationIds.length > 1 ? `${getCountryFlag(destination.country)} ` : '';

        return `
            <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                <i data-lucide="${weatherInfo.icon}" class="w-4 h-4" style="color:${weatherInfo.color}"></i>
                <span class="text-xs font-bold text-white">${prefix}${maxTemp}° <span class="text-white/45">/ ${minTemp}°</span></span>
            </div>
        `;
    }).filter(Boolean);

    return chips.join('');
}

function buildDailyWeatherHtml(day) {
    return `
        <div data-daily-weather="${day.id}" class="flex flex-wrap justify-end gap-2">
            ${buildDailyWeatherContent(day)}
        </div>
    `;
}

function buildHourlyWeatherContent(day, activity) {
    const hourLabel = `${day.date}T${activity.time.split(':')[0]}:00`;
    const weather = appState.currentWeather?.hourlyByKey?.[`${activity.destinationId || day.destinationId}|${hourLabel}`];
    if (!weather) return '';

    const weatherInfo = getWeatherInfo(weather.weatherCode);
    const temp = Math.round(weather.temp);

    return `
        <i data-lucide="${weatherInfo.icon}" class="w-4 h-4 mb-0.5" style="color:${weatherInfo.color}"></i>
        <span class="text-[10px] font-bold text-white/90">${temp}°</span>
    `;
}

function buildHourlyWeatherHtml(day, activity) {
    return `
        <div data-hourly-weather="${activity.id}" class="absolute -left-[40px] top-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[32px] z-10">
            ${buildHourlyWeatherContent(day, activity)}
        </div>
    `;
}

function refreshRenderedWeather() {
    if (!appState.hasStarted) return;

    appState.itinerary.forEach((day) => {
        const dailyContainer = ui.itineraryContainer.querySelector(`[data-daily-weather="${day.id}"]`);
        if (dailyContainer) {
            dailyContainer.innerHTML = buildDailyWeatherContent(day);
        }

        day.activities.forEach((activity) => {
            const hourlyContainer = ui.itineraryContainer.querySelector(`[data-hourly-weather="${activity.id}"]`);
            if (hourlyContainer) {
                hourlyContainer.innerHTML = buildHourlyWeatherContent(day, activity);
            }
        });
    });

    lucide.createIcons();
}

function renderItinerary() {
    ui.itineraryContainer.innerHTML = '<div class="absolute left-[11px] top-2 bottom-0 w-[2px] bg-white/20"></div>';

    appState.itinerary.forEach((day, dayIndex) => {
        const dayDestination = getDayDestination(day);
        const headerDate = parseYmd(day.date);
        const previousDay = appState.itinerary[dayIndex - 1];
        const isSegmentBoundary = !previousDay
            || previousDay.destinationId !== day.destinationId
            || countDaysInclusive(parseYmd(previousDay.date), parseYmd(day.date)) > 1;
        const dayElement = document.createElement('div');
        dayElement.className = 'relative pl-8';
        const dayDirectionsUrl = getDayDirectionsUrl(day.activities, day.destinationId);
        const segmentChipHtml = isSegmentBoundary ? `
            <div class="mb-2">
                <div class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold tracking-[0.24em] uppercase text-white/84"
                    style="border-color: rgba(${dayDestination.accentRgb}, 0.42); background: rgba(${dayDestination.accentRgb}, 0.16);">
                    <span>${escapeHtml(getDayChipLabel(day))}</span>
                </div>
            </div>
        ` : '';

        const activitiesHtml = day.activities.map((activity, activityIndex) => {
            const nextActivity = day.activities[activityIndex + 1];
            const isActiveActivity = activity.id === appState.activeActivityId;
            const activityDestination = getDestination(activity.destinationId || day.destinationId);
            const showActivityCountry = (day.destinationIds?.length || 0) > 1;
            const betweenStopsHtml = nextActivity ? `
                <div class="relative h-5 -mt-1 -mb-1 z-20">
                    <div class="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/18"></div>
                    <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <a
                            href="${getDirectionsUrl(
                                String(activity.mapQuery || activity.location || '').trim(),
                                String(nextActivity.mapQuery || nextActivity.location || '').trim()
                            )}"
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
                    class="relative glass-panel p-4 rounded-3xl flex items-center justify-between gap-3 mb-3 cursor-pointer hover:bg-white/[0.08] transition-colors ${isActiveActivity ? 'next-item' : ''}"
                    data-action="edit-activity"
                    data-day-index="${dayIndex}"
                    data-activity-card-id="${activity.id}"
                    data-activity-id="${activity.id}">
                    ${buildHourlyWeatherHtml(day, activity)}
                    <div class="flex items-center gap-3 flex-1 min-w-0">
                        <div class="p-2 rounded-xl accent-icon shrink-0">
                            <i data-lucide="${getRenderableActivityIcon(activity.type)}" class="w-4 h-4"></i>
                        </div>
                        <div class="min-w-0">
                            ${showActivityCountry ? `<div class="text-[10px] uppercase tracking-[0.22em] text-white/46 mb-1">${escapeHtml(getLocalizedLabel(activityDestination.country, activityDestination.country))}</div>` : ''}
                            <div class="text-sm font-bold text-white">${escapeHtml(activity.time)}</div>
                            <div class="text-sm text-white/88 mt-1">${escapeHtml(activity.location)}</div>
                            ${activity.memo ? `<div class="text-xs text-white/62 mt-1 leading-5">${escapeHtml(activity.memo)}</div>` : ''}
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <a href="${getMapsSearchUrl(activity.mapQuery || activity.location, activity.destinationId || day.destinationId)}"
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
                    style="background:rgba(${dayDestination.inkRgb},0.9);">
                    <div class="w-1.5 h-1.5 rounded-full accent-dot"></div>
                </div>

                <div class="flex-1">
                    ${segmentChipHtml}
                    <div class="flex items-end gap-2.5">
                        <h3 class="text-3xl font-serif font-bold text-white leading-none">${escapeHtml(formatMonthDay(headerDate))}</h3>
                        <span class="text-sm text-white/70 font-medium pb-0.5">${escapeHtml(formatMonthDayWithWeekday(headerDate))}</span>
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
    updateCurrentFocusButton();
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

function addSetupSegmentFromSelection({ silent = false } = {}) {
    const draftSegment = getDraftSetupSegment();
    if (!draftSegment) {
        if (!silent) {
            window.alert('달력에서 시작일과 종료일을 먼저 고르세요.');
        }
        return false;
    }

    if (!setupSegments.some((segment) => isSameSegment(segment, draftSegment))) {
        setupSegments = sortSegments([...setupSegments, draftSegment]);
    }

    const destination = getDestination(setupSelection.destinationId);
    const nextStartDate = formatYmd(addDays(parseYmd(draftSegment.endDate), 1));
    const nextEndDate = formatYmd(addDays(parseYmd(nextStartDate), Math.max(destination.itineraryTemplate.length - 1, 0)));
    setupSelection.startDate = nextStartDate;
    setupSelection.endDate = nextEndDate;
    setupRangeSelectingEnd = false;
    syncSetupCalendarMonth(nextStartDate);
    renderSetupInputs();
    return true;
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
    applyActiveContext(findActiveContext(), { refreshPhrase: true });
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

let pendingSetupSegmentsData = null;

function generateAIPromptText(destinationId, startDate, endDate) {
    const destination = getDestination(destinationId);
    const cityKo = destination.cityKo || destination.city || destinationId;
    const countryKo = destination.countryKo || destination.country || '';
    const baseDomain = 'https://minwoo19930301.github.io/tour-city-planner/';

    return `{여기에 본인이 원하는 여행 일정 요구사항을 자유롭게 설명해주세요! (예: 시부야 맛집 위주로 다녀오고 싶어, 혹은 유적지 탐방 중심의 코스 추천 등)}

---
[AI 플래너 가이드 수칙 - 반드시 엄수할 것]
1. AI야, 만약 바로 위 첫 줄 중괄호 내의 "{여기에 본인이 원하는 여행 일정 요구사항을...}" 영역을 사용자가 수정하지 않고 그대로 전송했거나 아무 내용도 적지 않았다면, 절대 바로 일정을 짜지 마라. 대신 사용자에게 "구체적으로 어떤 일정(예: 맛집 투어, 힐링 휴양, 문화 탐방 등)이나 원하는 컨셉을 말씀해주시면 일정을 구성해 드릴게요!"라고 친절하게 되물어보고 사용자의 추가 대답을 유도해라.
2. 사용자가 세부 일정을 확정하여 답변해주면, 아래 제공하는 엄격한 JSON 스펙 규격에 맞춰서 여행 일정을 최종 구성하고, 다른 부가 설명(인사말, 팁, 서론, 결론 등)은 전부 생략한 채 오직 최종 결과물인 URL 해시 링크 하나만 딱 한 줄로 텍스트로 출력해라.

여행지: [${cityKo} (${countryKo})]
날짜 범위: ${startDate} ~ ${endDate}

[최종 답변 출력 포맷 예시]
${baseDomain}#plan=<BASE64_ENCODED_JSON>

[JSON 설계 스펙 가이드]
{
  "v": 3,
  "g": [{"d": "${destinationId}", "s": "${startDate}", "e": "${endDate}"}],
  "i": [
    {
      "a": [
        {"d": "${destinationId}", "h": "09:00", "l": "가볼만한 장소 또는 활동명 1", "k": "lucide-icon-name", "m": "선택사항 메모"},
        {"d": "${destinationId}", "h": "13:30", "l": "가볼만한 장소 또는 활동명 2", "k": "lucide-icon-name", "m": ""}
      ]
    }
  ]
}

* JSON 요구 규격:
- "i" 배열의 원소 개수는 여행 총 일수(날짜 차이)와 정확히 일치해야 함.
- "k" 값에는 Lucide 아이콘 명칭 사용: "plane", "sparkles", "luggage", "landmark", "compass", "utensils", "coffee", "hotel", "camera", "shopping-bag", "train", "car", "map-pin", "moon-star", "sun", "ticket", "beer".
- 완성된 JSON 문자열을 UTF-8 기준으로 완벽히 Base64 인코딩하여 #plan= 뒤에 붙여 한 줄짜리 링크로만 답변할 것.`;
}

async function executeItineraryStart(creationMode) {
    if (!pendingSetupSegmentsData) return;

    setupSegments = pendingSetupSegmentsData.map(cloneSegment);
    appState.segments = pendingSetupSegmentsData.map(cloneSegment);
    syncAppDateBounds();

    if (creationMode === 'blank') {
        const template = buildItineraryFromSegments(appState.segments);
        appState.itinerary = template.map(day => ({
            ...day,
            activities: []
        }));
    } else {
        appState.itinerary = buildItineraryFromSegments(appState.segments);
    }

    appState.hasStarted = true;
    appState.customized = (creationMode === 'blank');
    appState.currentWeather = null;
    appState.weatherMode = 'loading';

    ui.startOptionsModal.classList.add('hidden');
    hideSetupOverlay();

    ui.applyPlanBtn.disabled = true;
    await Promise.all(appState.segments.map((segment) => preloadHeroImage(getDestination(segment.destinationId).heroImage)));
    applyActiveContext(findActiveContext(), { refreshPhrase: true });
    applyTheme(getDestination(appState.destinationId));
    setShareStatus('');
    refreshPlan();
}

async function applySetupSelection() {
    const pendingSegments = getPendingSetupSegments(true);
    if (!pendingSegments.length) {
        window.alert('먼저 국가와 날짜를 고르세요.');
        return;
    }

    const nextSegments = sortSegments(pendingSegments);
    const isChangingCoreSetup = JSON.stringify(appState.segments.map(cloneSegment)) !== JSON.stringify(nextSegments.map(cloneSegment));

    if (appState.customized && isChangingCoreSetup) {
        const shouldContinue = window.confirm('지금까지 커스터마이징한 일정이 새 도시/날짜 범위 템플릿으로 바뀝니다. 계속할까요?');
        if (!shouldContinue) return;
    }

    pendingSetupSegmentsData = nextSegments.map(cloneSegment);
    ui.startOptionsModal.classList.remove('hidden');
}

function rebuildItineraryWithSegments(nextSegments) {
    const existingDaysByKey = new Map(appState.itinerary.map((day) => [getDayKey(day), day]));
    const sortedSegments = sortSegments(nextSegments);
    const nextTemplate = buildItineraryFromSegments(sortedSegments);

    appState.segments = sortedSegments.map(cloneSegment);
    syncAppDateBounds();
    appState.itinerary = nextTemplate.map((day) => {
        const existingDay = existingDaysByKey.get(getDayKey(day));
        if (!existingDay) return day;

        const existingDestinations = JSON.stringify(existingDay.destinationIds || [existingDay.destinationId].filter(Boolean));
        const nextDestinations = JSON.stringify(day.destinationIds || [day.destinationId].filter(Boolean));
        return existingDestinations === nextDestinations ? existingDay : day;
    });
    appState.customized = true;

    refreshPlan();
}

function prependDay() {
    if (!appState.segments.length) return;
    const segments = sortSegments(appState.segments);
    segments[0] = {
        ...segments[0],
        startDate: formatYmd(addDays(parseYmd(segments[0].startDate), -1))
    };
    rebuildItineraryWithSegments(segments);
}

function appendDay() {
    if (!appState.segments.length) return;
    const segments = sortSegments(appState.segments);
    const lastIndex = segments.length - 1;
    segments[lastIndex] = {
        ...segments[lastIndex],
        endDate: formatYmd(addDays(parseYmd(segments[lastIndex].endDate), 1))
    };
    rebuildItineraryWithSegments(segments);
}

function removeFirstDay() {
    if (appState.itinerary.length <= 1) {
        window.alert('하루 일정은 남겨둬야 합니다.');
        return;
    }

    const segments = sortSegments(appState.segments);
    const first = segments[0];
    if (first.startDate === first.endDate) {
        segments.shift();
    } else {
        segments[0] = {
            ...first,
            startDate: formatYmd(addDays(parseYmd(first.startDate), 1))
        };
    }
    rebuildItineraryWithSegments(segments);
}

function removeLastDay() {
    if (appState.itinerary.length <= 1) {
        window.alert('하루 일정은 남겨둬야 합니다.');
        return;
    }

    const segments = sortSegments(appState.segments);
    const lastIndex = segments.length - 1;
    const last = segments[lastIndex];
    if (last.startDate === last.endDate) {
        segments.pop();
    } else {
        segments[lastIndex] = {
            ...last,
            endDate: formatYmd(addDays(parseYmd(last.endDate), -1))
        };
    }
    rebuildItineraryWithSegments(segments);
}

function resetToSetup() {
    const shouldReset = window.confirm('현재 일정을 닫고 처음 화면으로 돌아갈까요?');
    if (!shouldReset) return;

    const destination = getDestination(DEFAULT_DESTINATION_ID);
    const { startDate, endDate } = getSuggestedDateRange(destination);

    setupSelection.destinationId = destination.id;
    setupSelection.startDate = startDate;
    setupSelection.endDate = endDate;
    setupSegments = [];
    setupRangeSelectingEnd = false;
    syncSetupCalendarMonth(startDate);

    appState.destinationId = destination.id;
    appState.segments = [];
    appState.startDate = startDate;
    appState.endDate = endDate;
    appState.itinerary = [];
    appState.currentWeather = null;
    appState.weatherMode = 'loading';
    appState.hasStarted = false;
    appState.customized = false;
    appState.activeDayId = null;
    appState.activeActivityId = null;
    setRandomPhrase(destination.id);

    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, '', cleanUrl);
    setShareStatus('');
    refreshPlan();
}

async function sharePlan() {
    const shareUrl = buildShareUrl();
    const destination = getDestination(appState.destinationId);
    const isMultiCountryPlan = new Set(appState.segments.map((segment) => getDestination(segment.destinationId).country)).size > 1;
    const shareTitle = isMultiCountryPlan ? 'Multi-country Trip Plan' : `${destination.city} Trip Plan`;
    const shareText = isMultiCountryPlan ? '여러 나라 일정 공유 링크' : `${destination.city} 일정 공유 링크`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: shareTitle,
                text: shareText,
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
    applyActiveContext(findActiveContext());
    renderItinerary();
    renderStaticSummary();
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
        destinationId: existingActivity?.destinationId || day.destinationIds?.[0] || day.destinationId || appState.destinationId,
        time,
        title: existingActivity?.title || location || '일정',
        location,
        mapQuery: existingActivity?.location === location
            ? (existingActivity?.mapQuery || location)
            : location,
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
    syncDayDestinations(day);
    closeActivityEditor();
    persistItineraryChanges();
}

function deleteCurrentActivity() {
    const day = appState.itinerary[activityEditorState.dayIndex];
    if (!day || !activityEditorState.activityId) return;

    const shouldDelete = window.confirm('이 일정을 삭제할까요?');
    if (!shouldDelete) return;

    day.activities = day.activities.filter((activity) => activity.id !== activityEditorState.activityId);
    syncDayDestinations(day);
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
            const segments = Array.isArray(payload.g) && payload.g.length
                ? payload.g.map((segment) => {
                    const destination = getDestination(getSelectableDestinationId(segment.d));
                    const { startDate, endDate } = normalizeDateRange(segment.s, segment.e, destination);
                    return {
                        destinationId: destination.id,
                        startDate,
                        endDate
                    };
                })
                : (() => {
                    const destination = getDestination(getSelectableDestinationId(payload.d));
                    const { startDate, endDate } = normalizeDateRange(payload.s, payload.e, destination);
                    return [{
                        destinationId: destination.id,
                        startDate,
                        endDate
                    }];
                })();

            appState.segments = sortSegments(segments);
            syncAppDateBounds();
            appState.destinationId = appState.segments[0]?.destinationId || DEFAULT_DESTINATION_ID;
            appState.itinerary = buildItineraryFromSharedPayload(appState.segments, Array.isArray(payload.i) ? payload.i : []);
            setRandomPhrase(appState.destinationId);
            appState.hasStarted = true;
            appState.customized = true;

            setupSegments = appState.segments.map(cloneSegment);
            const draftSegment = setupSegments[setupSegments.length - 1] || {
                destinationId: DEFAULT_DESTINATION_ID,
                startDate: '',
                endDate: ''
            };
            setupSelection.destinationId = draftSegment.destinationId;
            setupSelection.startDate = draftSegment.startDate;
            setupSelection.endDate = draftSegment.endDate;
            setupRangeSelectingEnd = false;
            syncSetupCalendarMonth(draftSegment.startDate);
            return;
        } catch (error) {
            console.warn('Failed to decode shared plan:', error);
        }
    }

    const destination = getDestination(getSelectableDestinationId(url.searchParams.get('destination') || DEFAULT_DESTINATION_ID));
    const { startDate, endDate } = normalizeDateRange(url.searchParams.get('start'), url.searchParams.get('end'), destination);

    appState.destinationId = destination.id;
    appState.segments = [];
    appState.startDate = startDate;
    appState.endDate = endDate;
    appState.itinerary = [];
    setRandomPhrase(destination.id);
    appState.hasStarted = false;
    appState.customized = false;
    appState.activeDayId = null;
    appState.activeActivityId = null;

    setupSelection.destinationId = destination.id;
    setupSelection.startDate = startDate;
    setupSelection.endDate = endDate;
    setupSegments = [];
    setupRangeSelectingEnd = false;
    syncSetupCalendarMonth(startDate);
}

ui.destinationDropdownTrigger.addEventListener('click', () => {
    toggleDestinationDropdown();
});

ui.destinationSelector.addEventListener('click', (event) => {
    const button = event.target.closest('[data-destination]');
    if (!button) return;

    setupSelection.destinationId = button.dataset.destination;
    const destination = getDestination(setupSelection.destinationId);
    const nextAfterLastSegment = getOverallRange(setupSegments).endDate
        ? formatYmd(addDays(parseYmd(getOverallRange(setupSegments).endDate), 1))
        : '';
    const { startDate: suggestedStartDate, endDate: suggestedEndDate } = getSuggestedDateRange(destination);
    const startDate = nextAfterLastSegment || suggestedStartDate;
    const endDate = nextAfterLastSegment
        ? formatYmd(addDays(parseYmd(startDate), Math.max(destination.itineraryTemplate.length - 1, 0)))
        : suggestedEndDate;
    setupSelection.startDate = startDate;
    setupSelection.endDate = endDate;
    setupRangeSelectingEnd = false;
    syncSetupCalendarMonth(startDate);
    preloadHeroImage(destination.heroImage);
    applyTheme(destination);
    renderSetupInputs();
    renderDestinationSelector();
    closeDestinationDropdown();
});
ui.setupSegmentList.addEventListener('click', (event) => {
    const button = event.target.closest('[data-remove-setup-segment]');
    if (!button) return;

    const index = Number(button.dataset.removeSetupSegment);
    setupSegments = setupSegments.filter((_, segmentIndex) => segmentIndex !== index);
    renderSetupInputs();
});
ui.setupCalendarGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-calendar-date]');
    if (!button) return;

    const value = button.dataset.calendarDate;
    const clickedDate = parseYmd(value);
    if (!clickedDate) return;

    const startDate = parseYmd(setupSelection.startDate);
    const hasCompleteRange = Boolean(setupSelection.startDate && setupSelection.endDate);
    const isWaitingForEndDate = Boolean(setupSelection.startDate && !setupSelection.endDate);

    if (!startDate || hasCompleteRange) {
        setupSelection.startDate = value;
        setupSelection.endDate = '';
        setupRangeSelectingEnd = true;
    } else if (isWaitingForEndDate) {
        if (clickedDate < startDate) {
            setupSelection.startDate = value;
            setupSelection.endDate = '';
            setupRangeSelectingEnd = true;
        } else {
            setupSelection.endDate = value;
            setupRangeSelectingEnd = false;
        }
    }

    syncSetupCalendarMonth(value);
    renderSetupInputs();
});
ui.setupCalendarPrevBtn.addEventListener('click', () => {
    const currentMonth = parseYmd(setupCalendarMonth) || startOfMonth(parseYmd(setupSelection.startDate) || new Date());
    setupCalendarMonth = formatYmd(shiftMonth(currentMonth, -1));
    renderSetupCalendar();
});
ui.setupCalendarNextBtn.addEventListener('click', () => {
    const currentMonth = parseYmd(setupCalendarMonth) || startOfMonth(parseYmd(setupSelection.startDate) || new Date());
    setupCalendarMonth = formatYmd(shiftMonth(currentMonth, 1));
    renderSetupCalendar();
});

ui.addSegmentBtn.addEventListener('click', () => {
    addSetupSegmentFromSelection();
});
ui.applyPlanBtn.addEventListener('click', applySetupSelection);

// 시작 옵션 모달 리스너들
ui.optTemplateBtn.addEventListener('click', () => {
    executeItineraryStart('template');
});
ui.optBlankBtn.addEventListener('click', () => {
    executeItineraryStart('blank');
});
ui.optCancelBtn.addEventListener('click', () => {
    ui.startOptionsModal.classList.add('hidden');
});
ui.optAiBtn.addEventListener('click', () => {
    if (!pendingSetupSegmentsData || !pendingSetupSegmentsData.length) return;
    const seg = pendingSetupSegmentsData[0];
    const promptText = generateAIPromptText(seg.destinationId, seg.startDate, seg.endDate);
    
    ui.aiPromptText.value = promptText;
    ui.startOptionsModal.classList.add('hidden');
    ui.aiPromptModal.classList.remove('hidden');
    
    navigator.clipboard.writeText(promptText).then(() => {
        window.alert('프롬프트가 클립보드에 자동으로 복사되었습니다! 원하시는 AI 서비스에 붙여넣어주세요.');
    }).catch((err) => {
        console.warn('Clipboard write failed: ', err);
    });
});

// AI 프롬프트 안내 모달 리스너들
ui.aiPromptCloseBtn.addEventListener('click', () => {
    ui.aiPromptModal.classList.add('hidden');
});
ui.aiPromptOkBtn.addEventListener('click', () => {
    ui.aiPromptModal.classList.add('hidden');
});
ui.aiPromptCopyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(ui.aiPromptText.value).then(() => {
        window.alert('프롬프트가 복사되었습니다!');
    });
});

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
ui.activityTime.addEventListener('click', openActivityTimePicker);
ui.activityTime.addEventListener('focus', openActivityTimePicker);
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
ui.currentFocusBtn.addEventListener('click', scrollToCurrentFocus);

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

window.addEventListener('resize', syncDestinationDropdownPosition);
window.addEventListener('resize', updateCurrentFocusButton);
window.addEventListener('scroll', syncDestinationDropdownPosition, { passive: true });
window.addEventListener('scroll', handleCurrentFocusScrollDismiss, { passive: true });
ui.setupOverlay.addEventListener('scroll', syncDestinationDropdownPosition, { passive: true });

window.setInterval(updateClocks, 1000);
renderIconPicker();
bootstrapFromUrl();
refreshPlan();
