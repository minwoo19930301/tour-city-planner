const DAY_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WEEKDAY_LABELS_KO = ['일', '월', '화', '수', '목', '금', '토'];
const ACTIVITY_ICON_OPTIONS = [
    { value: 'waves', label: '강 · River · 川 · 河' },
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
    'Vietnam',
    'China',
    'Thailand',
    'Philippines',
    'United States',
    'Taiwan',
    'Hong Kong',
    'Macau',
    'South Korea',
    'Malaysia',
    'Singapore',
    'India',
    'Indonesia',
    'Qatar',
    'Nepal',
    'Kyrgyzstan',
    'Uzbekistan',
    'Kazakhstan',
    'Mongolia',
    'Brunei',
    'Cambodia',
    'Laos',
    'Saudi Arabia',
    'United States',
    'Canada',
    'Mexico',
    'France',
    'United Kingdom',
    'Germany',
    'Czech Republic',
    'Hungary',
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
    Hungary: 'europe',
    Qatar: 'asia',
    'Sri Lanka': 'asia',
    Nepal: 'asia',
    Kyrgyzstan: 'asia',
    Uzbekistan: 'asia',
    Kazakhstan: 'asia',
    Mongolia: 'asia',
    Brunei: 'asia',
    Cambodia: 'asia',
    Laos: 'asia',
    'South Korea': 'asia',
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
        heroImagePortrait: 'assets/heroes/paris-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/london-portrait.jpg',
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
    seoul: {
        id: "seoul",
        city: "Seoul",
        country: "South Korea",
        summary: "경복궁·북촌부터 성수·한강, 잠실 전망대까지 서울 핵심 구역을 하루 하나씩 도는 템플릿으로, 해외 출국 전후 홈 구간으로도 잘 맞습니다.",
        footer: "Seoul runs on palaces by day, neon by night, and a river in between.",
        heroImage: "assets/heroes/seoul.jpg",
        heroImagePortrait: 'assets/heroes/seoul-portrait.jpg',
        heroPosition: "50% 42%",
        accent: "#D4A24C",
        accentRgb: "212, 162, 76",
        ink: "#14213D",
        inkRgb: "20, 33, 61",
        overlayTop: "rgba(20, 33, 61, 0.36)",
        overlayBottom: "rgba(10, 16, 34, 0.86)",
        timeZone: "Asia/Seoul",
        weather: {
            latitude: 37.5665,
            longitude: 126.978
        },
        currency: {
            code: "KRW",
            symbol: "₩",
            locale: "ko-KR"
        },
        startOffsetDays: 7,
        phraseLabel: "한국어",
        phrases: [
            {
                text: "힙지로",
                pron: "힙 + 을지로",
                meaning: "인쇄소 골목 노포 사이에 힙한 바가 숨은 을지로를 부르는 말"
            },
            {
                text: "노포",
                pron: "老鋪 · 오래된 가게",
                meaning: "몇십 년 된 단골 식당. 을지로·종로 골목에서 찾아보세요"
            },
            {
                text: "한강 라면",
                pron: "한강공원 편의점 즉석 라면",
                meaning: "편의점 라면 기계에 직접 끓여 먹는 라면. 야경과 세트 메뉴"
            },
            {
                text: "치맥",
                pron: "치킨 + 맥주",
                meaning: "한강 돗자리 치맥은 서울 여름의 클래식"
            },
            {
                text: "내릴 때도 찍으세요",
                pron: "버스 하차 태그",
                meaning: "지하철·버스 환승 할인은 내릴 때 카드를 찍어야 적용돼요"
            },
            {
                text: "따릉이",
                pron: "서울시 공공자전거",
                meaning: "앱으로 빌려 한강·경의선숲길을 달리는 초록 자전거"
            }
        ],
        itineraryTemplate: [
            {
                title: "경복궁 & 북촌 & 인사동",
                activities: [
                    {
                        time: "10:00",
                        title: "경복궁 수문장 교대식",
                        type: "landmark",
                        location: "Gyeongbokgung Palace"
                    },
                    {
                        time: "13:30",
                        title: "북촌 한옥마을 골목 산책",
                        type: "map",
                        location: "Bukchon Hanok Village"
                    },
                    {
                        time: "17:00",
                        title: "인사동 쌈지길 & 전통찻집",
                        type: "gift",
                        location: "Ssamziegil"
                    }
                ]
            },
            {
                title: "광장시장 & 명동 & 남산",
                activities: [
                    {
                        time: "11:00",
                        title: "광장시장 빈대떡·마약김밥",
                        type: "store",
                        location: "Gwangjang Market"
                    },
                    {
                        time: "14:00",
                        title: "명동 쇼핑 거리",
                        type: "shopping-bag",
                        location: "Myeongdong Shopping Street"
                    },
                    {
                        time: "17:30",
                        title: "남산 케이블카 & N서울타워 야경",
                        type: "tower-control",
                        location: "N Seoul Tower"
                    }
                ]
            },
            {
                title: "성수 & 한강",
                activities: [
                    {
                        time: "10:30",
                        title: "서울숲 산책",
                        type: "trees",
                        location: "Seoul Forest"
                    },
                    {
                        time: "13:00",
                        title: "성수동 카페 & 팝업 스토어",
                        type: "coffee",
                        location: "Seongsu-dong"
                    },
                    {
                        time: "18:00",
                        title: "뚝섬 한강공원 치맥 & 야경",
                        type: "moon-star",
                        location: "Ttukseom Hangang Park"
                    }
                ]
            },
            {
                title: "홍대 & 연남",
                activities: [
                    {
                        time: "11:00",
                        title: "연남동 경의선숲길 브런치",
                        type: "utensils-crossed",
                        location: "Gyeongui Line Forest Park"
                    },
                    {
                        time: "14:30",
                        title: "망원시장 먹거리 투어",
                        type: "store",
                        location: "Mangwon Market"
                    },
                    {
                        time: "18:00",
                        title: "홍대 거리 버스킹 & 쇼핑",
                        type: "music",
                        location: "Hongdae"
                    }
                ]
            },
            {
                title: "잠실 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "코엑스 별마당도서관",
                        type: "library",
                        location: "Starfield Library"
                    },
                    {
                        time: "13:00",
                        title: "롯데월드타워 서울스카이",
                        type: "building",
                        location: "Seoul Sky"
                    },
                    {
                        time: "16:30",
                        title: "인천공항 이동",
                        type: "plane",
                        location: "Incheon International Airport"
                    }
                ]
            }
        ]
    },
    busan: {
        id: "busan",
        city: "Busan",
        country: "South Korea",
        summary: "해운대와 광안대교 바다, 감천 골목과 자갈치 회 한 접시, 영도 절벽길까지 부산의 바다를 따라 걷는 템플릿입니다.",
        footer: "Busan is salt air, bridge lights, and a bowl of milmyeon.",
        heroImage: "assets/heroes/busan.jpg",
        heroImagePortrait: 'assets/heroes/busan-portrait.jpg',
        heroPosition: "38% 55%",
        accent: "#026AC7",
        accentRgb: "2, 106, 199",
        ink: "#0C2E4E",
        inkRgb: "12, 46, 78",
        overlayTop: "rgba(12, 46, 78, 0.30)",
        overlayBottom: "rgba(6, 24, 44, 0.86)",
        timeZone: "Asia/Seoul",
        weather: {
            latitude: 35.1796,
            longitude: 129.0756
        },
        currency: {
            code: "KRW",
            symbol: "₩",
            locale: "ko-KR"
        },
        startOffsetDays: 6,
        phraseLabel: "한국어",
        phrases: [
            {
                text: "마!",
                pron: "마 (야!)",
                meaning: "\"야!\" 하고 부르는 말. 친한 사이에서만, 어른께는 금지"
            },
            {
                text: "쫌!",
                pron: "쫌 (좀!)",
                meaning: "\"그만해\", \"좀!\" — 억양 하나로 뜻이 바뀌는 만능 감탄사"
            },
            {
                text: "오이소, 보이소, 사이소",
                pron: "오세요, 보세요, 사세요",
                meaning: "자갈치시장 아지매들의 3대 인사"
            },
            {
                text: "뭐라카노?",
                pron: "뭐라고 하니?",
                meaning: "\"뭐라고?\" 하고 되물을 때 쓰는 말"
            },
            {
                text: "억수로 맛있네예",
                pron: "엄청 맛있네요",
                meaning: "억수로 = 엄청, ~네예 = ~네요. 돼지국밥집에서 써 보세요"
            },
            {
                text: "단디 하이소",
                pron: "단단히 하세요",
                meaning: "\"제대로 챙기세요\". 잔소리 같지만 정이 담긴 말"
            }
        ],
        itineraryTemplate: [
            {
                title: "해운대 & 동백섬",
                activities: [
                    {
                        time: "10:30",
                        title: "해운대 해수욕장",
                        type: "sun",
                        location: "Haeundae Beach"
                    },
                    {
                        time: "13:30",
                        title: "동백섬 누리마루 산책로",
                        type: "map",
                        location: "Dongbaekseom Island"
                    },
                    {
                        time: "16:30",
                        title: "블루라인파크 스카이캡슐",
                        type: "ticket",
                        location: "Haeundae Blueline Park"
                    }
                ]
            },
            {
                title: "용궁사 & 광안리",
                activities: [
                    {
                        time: "09:30",
                        title: "해동용궁사 바다 절",
                        type: "landmark",
                        location: "Haedong Yonggungsa Temple"
                    },
                    {
                        time: "14:30",
                        title: "광안리 해변 카페",
                        type: "coffee",
                        location: "Gwangalli Beach"
                    },
                    {
                        time: "19:30",
                        title: "광안대교 야경 (주말 드론쇼)",
                        type: "bridge",
                        location: "Gwangan Bridge"
                    }
                ]
            },
            {
                title: "감천 & 자갈치 & 남포동",
                activities: [
                    {
                        time: "10:00",
                        title: "감천문화마을 골목 탐방",
                        type: "palette",
                        location: "Gamcheon Culture Village"
                    },
                    {
                        time: "13:00",
                        title: "자갈치시장 회 점심",
                        type: "store",
                        location: "Jagalchi Market"
                    },
                    {
                        time: "15:30",
                        title: "국제시장 & BIFF광장 씨앗호떡",
                        type: "shopping-bag",
                        location: "Gukje Market"
                    }
                ]
            },
            {
                title: "영도 & 태종대",
                activities: [
                    {
                        time: "10:00",
                        title: "흰여울문화마을 해안길",
                        type: "map",
                        location: "Huinnyeoul Culture Village"
                    },
                    {
                        time: "13:30",
                        title: "태종대 다누비열차 & 전망대",
                        type: "binoculars",
                        location: "Taejongdae Resort Park"
                    },
                    {
                        time: "17:00",
                        title: "김해공항 이동",
                        type: "plane",
                        location: "Gimhae International Airport"
                    }
                ]
            }
        ]
    },
    jeju: {
        id: "jeju",
        city: "Jeju",
        country: "South Korea",
        summary: "성산일출봉과 우도, 서귀포 올레길, 협재·애월 카페까지 렌터카로 섬을 시계 방향으로 도는 3박 4일 템플릿입니다.",
        footer: "Jeju is basalt, tangerines, and wind that never quite stops.",
        heroImage: "assets/heroes/jeju.jpg",
        heroImagePortrait: 'assets/heroes/jeju-portrait.jpg',
        heroPosition: "50% 55%",
        accent: "#FB923C",
        accentRgb: "251, 146, 60",
        ink: "#2F3437",
        inkRgb: "47, 52, 55",
        overlayTop: "rgba(47, 52, 55, 0.30)",
        overlayBottom: "rgba(24, 27, 29, 0.86)",
        timeZone: "Asia/Seoul",
        weather: {
            latitude: 33.4996,
            longitude: 126.5312
        },
        currency: {
            code: "KRW",
            symbol: "₩",
            locale: "ko-KR"
        },
        startOffsetDays: 6,
        phraseLabel: "한국어",
        phrases: [
            {
                text: "혼저옵서예",
                pron: "어서 오세요",
                meaning: "제주공항 도착부터 보이는 제주 환영 인사"
            },
            {
                text: "폭삭 속았수다",
                pron: "정말 수고하셨습니다",
                meaning: "\"속다\"는 제주어로 \"수고하다\". 드라마 제목으로도 유명"
            },
            {
                text: "무사?",
                pron: "왜?",
                meaning: "\"무사 마씸?\" 하면 \"왜요?\". 짧고 자주 들리는 말"
            },
            {
                text: "하영 먹읍서",
                pron: "많이 드세요",
                meaning: "하영 = 많이. 식당 이모님이 이렇게 말하면 마음껏 드시면 돼요"
            },
            {
                text: "맨도롱 또똣",
                pron: "먹기 좋게 따뜻한",
                meaning: "뜨겁지도 식지도 않은 딱 좋은 온기. 몸국 한 그릇이 맨도롱 또똣"
            },
            {
                text: "감수광",
                pron: "가십니까?",
                meaning: "헤어질 때 \"가세요?\". 혜은이 노래 제목으로도 유명"
            }
        ],
        itineraryTemplate: [
            {
                title: "용눈이오름 & 성산 & 섭지코지",
                activities: [
                    {
                        time: "11:00",
                        title: "용눈이오름 능선 산책",
                        type: "binoculars",
                        location: "Yongnuni Oreum"
                    },
                    {
                        time: "14:00",
                        title: "성산일출봉 등반",
                        type: "landmark",
                        location: "Seongsan Ilchulbong"
                    },
                    {
                        time: "17:00",
                        title: "섭지코지 노을 산책",
                        type: "map",
                        location: "Seopjikoji"
                    }
                ]
            },
            {
                title: "우도 일주",
                activities: [
                    {
                        time: "09:00",
                        title: "성산포항 우도행 배",
                        type: "ship",
                        location: "Seongsan Port"
                    },
                    {
                        time: "11:00",
                        title: "서빈백사 & 땅콩 아이스크림",
                        type: "sun",
                        location: "Seobinbaeksa Beach"
                    },
                    {
                        time: "14:00",
                        title: "우도봉 등대 전망",
                        type: "binoculars",
                        location: "Udobong Peak"
                    }
                ]
            },
            {
                title: "서귀포 올레 & 천지연",
                activities: [
                    {
                        time: "09:30",
                        title: "올레 7코스 외돌개",
                        type: "map",
                        location: "Oedolgae Rock"
                    },
                    {
                        time: "13:00",
                        title: "서귀포 매일올레시장",
                        type: "store",
                        location: "Seogwipo Maeil Olle Market"
                    },
                    {
                        time: "16:30",
                        title: "천지연폭포",
                        type: "sparkles",
                        location: "Cheonjiyeon Falls"
                    }
                ]
            },
            {
                title: "협재 & 애월 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "협재해수욕장 & 비양도 뷰",
                        type: "sun",
                        location: "Hyeopjae Beach"
                    },
                    {
                        time: "13:00",
                        title: "애월 한담해안산책로 카페",
                        type: "coffee",
                        location: "Handam Coastal Trail"
                    },
                    {
                        time: "16:30",
                        title: "제주공항 이동",
                        type: "plane",
                        location: "Jeju International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/new-york-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/los-angeles-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/tokyo-portrait.jpg',
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
    osaka: {
        id: "osaka",
        city: "Osaka",
        country: "Japan",
        summary: "도톤보리 네온과 길거리 음식, 오사카성과 우메다 전망을 한 줄로 엮은 간사이 먹방 템플릿입니다.",
        footer: "Osaka runs on neon, broth, and people who talk to strangers.",
        heroImage: "assets/heroes/osaka.jpg",
        heroImagePortrait: 'assets/heroes/osaka-portrait.jpg',
        heroPosition: "60% center",
        accent: "#DC269E",
        accentRgb: "220, 38, 158",
        ink: "#3B0A0A",
        inkRgb: "59, 10, 10",
        overlayTop: "rgba(59, 10, 10, 0.40)",
        overlayBottom: "rgba(24, 16, 16, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 34.6937,
            longitude: 135.5023
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 8,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "めっちゃ美味しい",
                pron: "멧챠 오이시이",
                meaning: "엄청 맛있어요 (간사이 말투)"
            },
            {
                text: "おすすめは何ですか？",
                pron: "오스스메와 난데스카",
                meaning: "추천 메뉴가 뭔가요?"
            },
            {
                text: "持ち帰りでお願いします",
                pron: "모치카에리데 오네가이시마스",
                meaning: "포장해 주세요"
            },
            {
                text: "一人です",
                pron: "히토리데스",
                meaning: "한 명입니다"
            },
            {
                text: "写真を撮ってもいいですか？",
                pron: "샤신오 톳테모 이이데스카",
                meaning: "사진 찍어도 될까요?"
            },
            {
                text: "もう一つください",
                pron: "모 히토츠 쿠다사이",
                meaning: "하나 더 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "난바 & 도톤보리",
                activities: [
                    {
                        time: "11:00",
                        title: "구로몬 시장 먹거리",
                        type: "store",
                        location: "Kuromon Ichiba Market"
                    },
                    {
                        time: "14:00",
                        title: "신사이바시 쇼핑 거리",
                        type: "shopping-bag",
                        location: "Shinsaibashi-suji Shopping Street"
                    },
                    {
                        time: "19:00",
                        title: "도톤보리 글리코 네온",
                        type: "sparkles",
                        location: "Dotonbori"
                    }
                ]
            },
            {
                title: "오사카성 & 오사카역",
                activities: [
                    {
                        time: "09:30",
                        title: "오사카성 천수각",
                        type: "landmark",
                        location: "Osaka Castle"
                    },
                    {
                        time: "12:30",
                        title: "니시노마루 정원 산책",
                        type: "trees",
                        location: "Nishinomaru Garden"
                    },
                    {
                        time: "18:00",
                        title: "우메다 공중정원 전망대",
                        type: "building",
                        location: "Umeda Sky Building"
                    }
                ]
            },
            {
                title: "신세카이 & 덴노지",
                activities: [
                    {
                        time: "10:30",
                        title: "시텐노지 참배",
                        type: "landmark",
                        location: "Shitenno-ji"
                    },
                    {
                        time: "13:00",
                        title: "신세카이 쿠시카츠 점심",
                        type: "utensils-crossed",
                        location: "Shinsekai"
                    },
                    {
                        time: "17:30",
                        title: "아베노 하루카스 300 전망대",
                        type: "tower-control",
                        location: "Abeno Harukas 300"
                    }
                ]
            },
            {
                title: "유니버설 스튜디오",
                activities: [
                    {
                        time: "08:30",
                        title: "USJ 개장 입장",
                        type: "ticket",
                        location: "Universal Studios Japan"
                    },
                    {
                        time: "13:00",
                        title: "위저딩 월드 구역",
                        type: "sparkles",
                        location: "The Wizarding World of Harry Potter Osaka"
                    },
                    {
                        time: "19:30",
                        title: "유니버설 시티워크 저녁",
                        type: "utensils-crossed",
                        location: "Universal CityWalk Osaka"
                    }
                ]
            },
            {
                title: "마지막 쇼핑 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "덴진바시스지 상점가",
                        type: "shopping-cart",
                        location: "Tenjinbashisuji Shopping Street"
                    },
                    {
                        time: "13:30",
                        title: "난바 역 짐 정리",
                        type: "luggage",
                        location: "Namba Station"
                    },
                    {
                        time: "16:30",
                        title: "간사이 공항 이동",
                        type: "plane",
                        location: "Kansai International Airport"
                    }
                ]
            }
        ]
    },
    kyoto: {
        id: "kyoto",
        city: "Kyoto",
        country: "Japan",
        summary: "청수사 언덕길부터 후시미이나리 천 개의 도리이, 아라시야마 대숲과 기온 밤거리까지 천천히 걷는 고도 템플릿입니다.",
        footer: "Kyoto rewards early mornings, quiet lanes, and slow tea.",
        heroImage: "assets/heroes/kyoto.jpg",
        heroImagePortrait: 'assets/heroes/kyoto-portrait.jpg',
        heroPosition: "50% 60%",
        accent: "#166534",
        accentRgb: "22, 101, 52",
        ink: "#1C1917",
        inkRgb: "28, 25, 23",
        overlayTop: "rgba(28, 25, 23, 0.38)",
        overlayBottom: "rgba(12, 20, 15, 0.90)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 35.0116,
            longitude: 135.7681
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 9,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "拝観料はいくらですか？",
                pron: "하이칸료와 이쿠라데스카",
                meaning: "관람료가 얼마인가요?"
            },
            {
                text: "写真撮影は大丈夫ですか？",
                pron: "샤신 사츠에이와 다이조부데스카",
                meaning: "사진 촬영해도 되나요?"
            },
            {
                text: "抹茶をください",
                pron: "맛차오 쿠다사이",
                meaning: "말차 주세요"
            },
            {
                text: "何時までですか？",
                pron: "난지마데데스카",
                meaning: "몇 시까지 하나요?"
            },
            {
                text: "着物を借りたいです",
                pron: "키모노오 카리타이데스",
                meaning: "기모노를 빌리고 싶어요"
            },
            {
                text: "ゆっくり見てもいいですか？",
                pron: "윳쿠리 미테모 이이데스카",
                meaning: "천천히 둘러봐도 될까요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "히가시야마 & 기온",
                activities: [
                    {
                        time: "08:30",
                        title: "기요미즈데라 아침 참배",
                        type: "landmark",
                        location: "Kiyomizu-dera"
                    },
                    {
                        time: "11:30",
                        title: "산넨자카 골목 산책",
                        type: "map",
                        location: "Sannenzaka"
                    },
                    {
                        time: "18:00",
                        title: "기온 하나미코지 저녁",
                        type: "moon-star",
                        location: "Hanamikoji Street"
                    }
                ]
            },
            {
                title: "후시미 & 남부",
                activities: [
                    {
                        time: "08:00",
                        title: "후시미이나리 천 개 도리이",
                        type: "landmark",
                        location: "Fushimi Inari Taisha"
                    },
                    {
                        time: "12:30",
                        title: "후시미 사케 양조장 거리",
                        type: "store",
                        location: "Gekkeikan Okura Sake Museum"
                    },
                    {
                        time: "16:00",
                        title: "도후쿠지 정원",
                        type: "trees",
                        location: "Tofuku-ji"
                    }
                ]
            },
            {
                title: "아라시야마",
                activities: [
                    {
                        time: "09:00",
                        title: "아라시야마 대나무 숲길",
                        type: "trees",
                        location: "Arashiyama Bamboo Grove"
                    },
                    {
                        time: "11:30",
                        title: "덴류지와 정원",
                        type: "landmark",
                        location: "Tenryu-ji"
                    },
                    {
                        time: "15:00",
                        title: "도게츠교 강변 산책",
                        type: "bridge",
                        location: "Togetsukyo Bridge"
                    }
                ]
            },
            {
                title: "북서부 금각사 라인",
                activities: [
                    {
                        time: "09:30",
                        title: "킨카쿠지 금각사",
                        type: "landmark",
                        location: "Kinkaku-ji"
                    },
                    {
                        time: "12:30",
                        title: "료안지 석정",
                        type: "palette",
                        location: "Ryoan-ji"
                    },
                    {
                        time: "15:30",
                        title: "니조성 니노마루",
                        type: "building-2",
                        location: "Nijo Castle"
                    }
                ]
            },
            {
                title: "니시키 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "니시키 시장 먹거리",
                        type: "utensils-crossed",
                        location: "Nishiki Market"
                    },
                    {
                        time: "13:00",
                        title: "교토역 이세탄 기념품",
                        type: "gift",
                        location: "Kyoto Station"
                    },
                    {
                        time: "16:00",
                        title: "하루카 타고 간사이공항",
                        type: "train-front",
                        location: "Kansai International Airport"
                    }
                ]
            }
        ]
    },
    fukuoka: {
        id: "fukuoka",
        city: "Fukuoka",
        country: "Japan",
        summary: "하카타 돈코츠 라멘과 나카스 포장마차, 다자이후 참배와 모모치 바닷바람을 묶은 규슈 관문 템플릿입니다.",
        footer: "Fukuoka is a port city: sea air by day, yatai stools by night.",
        heroImage: "assets/heroes/fukuoka.jpg",
        heroImagePortrait: 'assets/heroes/fukuoka-portrait.jpg',
        heroPosition: "50% center",
        accent: "#0EA5E9",
        accentRgb: "14, 165, 233",
        ink: "#0C4A6E",
        inkRgb: "12, 74, 110",
        overlayTop: "rgba(12, 74, 110, 0.40)",
        overlayBottom: "rgba(8, 25, 45, 0.90)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 33.5902,
            longitude: 130.4017
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 6,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "替え玉お願いします",
                pron: "카에다마 오네가이시마스",
                meaning: "면 추가 부탁합니다"
            },
            {
                text: "麺は硬めで",
                pron: "멘와 카타메데",
                meaning: "면은 조금 단단하게요"
            },
            {
                text: "相席でも大丈夫です",
                pron: "아이세키데모 다이조부데스",
                meaning: "합석해도 괜찮아요"
            },
            {
                text: "屋台はどこですか？",
                pron: "야타이와 도코데스카",
                meaning: "포장마차가 어디에 있나요?"
            },
            {
                text: "おいしかったです",
                pron: "오이시캇타데스",
                meaning: "맛있었습니다"
            },
            {
                text: "生ビールください",
                pron: "나마비루 쿠다사이",
                meaning: "생맥주 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "하카타 & 나카스",
                activities: [
                    {
                        time: "10:30",
                        title: "구시다 신사 참배",
                        type: "landmark",
                        location: "Kushida Shrine"
                    },
                    {
                        time: "13:00",
                        title: "캐널시티 하카타",
                        type: "shopping-bag",
                        location: "Canal City Hakata"
                    },
                    {
                        time: "19:00",
                        title: "나카스 야타이 포장마차",
                        type: "utensils-crossed",
                        location: "Nakasu Yatai"
                    }
                ]
            },
            {
                title: "다자이후 당일 나들이",
                activities: [
                    {
                        time: "09:00",
                        title: "니시테츠 타고 다자이후",
                        type: "train-front",
                        location: "Dazaifu Station"
                    },
                    {
                        time: "10:30",
                        title: "다자이후 텐만구",
                        type: "landmark",
                        location: "Dazaifu Tenmangu"
                    },
                    {
                        time: "14:00",
                        title: "규슈국립박물관",
                        type: "building-2",
                        location: "Kyushu National Museum"
                    }
                ]
            },
            {
                title: "모모치 & 바다",
                activities: [
                    {
                        time: "10:30",
                        title: "오호리 공원 산책",
                        type: "trees",
                        location: "Ohori Park"
                    },
                    {
                        time: "14:00",
                        title: "후쿠오카 타워 전망",
                        type: "tower-control",
                        location: "Fukuoka Tower"
                    },
                    {
                        time: "17:30",
                        title: "모모치 해변 노을",
                        type: "camera",
                        location: "Momochi Seaside Park"
                    }
                ]
            },
            {
                title: "텐진 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "텐진 지하상가 쇼핑",
                        type: "shopping-cart",
                        location: "Tenjin Chikagai"
                    },
                    {
                        time: "13:00",
                        title: "하카타역 명란 기념품",
                        type: "gift",
                        location: "Hakata Station"
                    },
                    {
                        time: "16:00",
                        title: "후쿠오카 공항 이동",
                        type: "plane",
                        location: "Fukuoka Airport"
                    }
                ]
            }
        ]
    },
    sapporo: {
        id: "sapporo",
        city: "Sapporo",
        country: "Japan",
        summary: "오도리 공원의 찬 공기, 미소 라멘과 징기스칸, 오타루 운하 당일치기까지 담은 홋카이도 겨울 템플릿입니다.",
        footer: "Sapporo is cold air, hot broth, and a grid you can walk.",
        heroImage: "assets/heroes/sapporo.jpg",
        heroImagePortrait: 'assets/heroes/sapporo-portrait.jpg',
        heroPosition: "50% 45%",
        accent: "#64748B",
        accentRgb: "100, 116, 139",
        ink: "#1E293B",
        inkRgb: "30, 41, 59",
        overlayTop: "rgba(30, 41, 59, 0.38)",
        overlayBottom: "rgba(15, 23, 42, 0.92)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 43.0618,
            longitude: 141.3545
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 12,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "寒いですね",
                pron: "사무이데스네",
                meaning: "춥네요"
            },
            {
                text: "味噌ラーメンをください",
                pron: "미소 라멘오 쿠다사이",
                meaning: "미소 라멘 주세요"
            },
            {
                text: "暖かい席はありますか？",
                pron: "아타타카이 세키와 아리마스카",
                meaning: "따뜻한 자리 있나요?"
            },
            {
                text: "雪道は滑りますか？",
                pron: "유키미치와 스베리마스카",
                meaning: "눈길이 미끄러운가요?"
            },
            {
                text: "バスは何時ですか？",
                pron: "바스와 난지데스카",
                meaning: "버스가 몇 시인가요?"
            },
            {
                text: "お土産を探しています",
                pron: "오미야게오 사가시테이마스",
                meaning: "기념품을 찾고 있어요"
            }
        ],
        itineraryTemplate: [
            {
                title: "도심 오도리 라인",
                activities: [
                    {
                        time: "10:00",
                        title: "오도리 공원 산책",
                        type: "trees",
                        location: "Odori Park"
                    },
                    {
                        time: "12:30",
                        title: "삿포로 TV 타워 전망",
                        type: "tower-control",
                        location: "Sapporo TV Tower"
                    },
                    {
                        time: "18:30",
                        title: "스스키노 징기스칸 저녁",
                        type: "utensils-crossed",
                        location: "Susukino"
                    }
                ]
            },
            {
                title: "북부 & 맥주박물관",
                activities: [
                    {
                        time: "10:00",
                        title: "홋카이도청 구본청사",
                        type: "building-2",
                        location: "Former Hokkaido Government Office"
                    },
                    {
                        time: "13:30",
                        title: "삿포로 맥주 박물관 시음",
                        type: "store",
                        location: "Sapporo Beer Museum"
                    },
                    {
                        time: "17:00",
                        title: "삿포로 팩토리 쇼핑",
                        type: "shopping-bag",
                        location: "Sapporo Factory"
                    }
                ]
            },
            {
                title: "오타루 당일치기",
                activities: [
                    {
                        time: "09:00",
                        title: "JR 타고 오타루",
                        type: "train-front",
                        location: "Otaru Station"
                    },
                    {
                        time: "11:00",
                        title: "오타루 운하 산책",
                        type: "ship",
                        location: "Otaru Canal"
                    },
                    {
                        time: "15:00",
                        title: "사카이마치 유리공방 거리",
                        type: "gift",
                        location: "Sakaimachi Street"
                    }
                ]
            },
            {
                title: "교외 전망 & 시장",
                activities: [
                    {
                        time: "09:30",
                        title: "니조 시장 해산물 아침",
                        type: "utensils-crossed",
                        location: "Nijo Market"
                    },
                    {
                        time: "13:00",
                        title: "모이와산 로프웨이",
                        type: "sun",
                        location: "Mount Moiwa Ropeway"
                    },
                    {
                        time: "18:00",
                        title: "모이와산 야경",
                        type: "moon-star",
                        location: "Mount Moiwa Observation Deck"
                    }
                ]
            },
            {
                title: "마지막 쇼핑 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "삿포로역 다이마루 쇼핑",
                        type: "shopping-cart",
                        location: "Daimaru Sapporo"
                    },
                    {
                        time: "13:00",
                        title: "짐 정리 후 출발",
                        type: "luggage",
                        location: "Sapporo Station"
                    },
                    {
                        time: "16:00",
                        title: "신치토세 공항 이동",
                        type: "plane",
                        location: "New Chitose Airport"
                    }
                ]
            }
        ]
    },
    nagoya: {
        id: "nagoya",
        city: "Nagoya",
        country: "Japan",
        summary: "금 샤치호코가 올라앉은 나고야성, 아쓰타 신궁의 고요함, 오스 상점가와 나고야항까지 도는 주부권 템플릿입니다.",
        footer: "Nagoya is golden roofs, miso-dark food, and easy trains.",
        heroImage: "assets/heroes/nagoya.jpg",
        heroImagePortrait: 'assets/heroes/nagoya-portrait.jpg',
        heroPosition: "55% center",
        accent: "#CAA404",
        accentRgb: "202, 164, 4",
        ink: "#3F2D0B",
        inkRgb: "63, 45, 11",
        overlayTop: "rgba(63, 45, 11, 0.40)",
        overlayBottom: "rgba(26, 20, 10, 0.90)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 35.1815,
            longitude: 136.9066
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 7,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "味噌カツをください",
                pron: "미소카츠오 쿠다사이",
                meaning: "미소카츠 주세요"
            },
            {
                text: "モーニングはありますか？",
                pron: "모닝구와 아리마스카",
                meaning: "모닝 세트 있나요?"
            },
            {
                text: "何番出口ですか？",
                pron: "난반 데구치데스카",
                meaning: "몇 번 출구인가요?"
            },
            {
                text: "待ち時間はどれくらいですか？",
                pron: "마치지칸와 도레쿠라이데스카",
                meaning: "대기 시간이 얼마나 되나요?"
            },
            {
                text: "一日乗車券をください",
                pron: "이치니치 조샤켄오 쿠다사이",
                meaning: "1일 승차권 주세요"
            },
            {
                text: "少し辛いですか？",
                pron: "스코시 카라이데스카",
                meaning: "좀 매운가요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "나고야성 & 사카에",
                activities: [
                    {
                        time: "09:30",
                        title: "나고야성과 혼마루고텐",
                        type: "landmark",
                        location: "Nagoya Castle"
                    },
                    {
                        time: "13:00",
                        title: "사카에 미소카츠 점심",
                        type: "utensils-crossed",
                        location: "Sakae, Nagoya"
                    },
                    {
                        time: "18:00",
                        title: "오아시스21 전망 데크",
                        type: "building",
                        location: "Oasis 21"
                    }
                ]
            },
            {
                title: "오스 & 후시미",
                activities: [
                    {
                        time: "10:30",
                        title: "오스칸논 참배",
                        type: "landmark",
                        location: "Osu Kannon"
                    },
                    {
                        time: "12:30",
                        title: "오스 상점가 구경",
                        type: "shopping-cart",
                        location: "Osu Shopping Street"
                    },
                    {
                        time: "16:00",
                        title: "도쿠가와 미술관",
                        type: "building-2",
                        location: "Tokugawa Art Museum"
                    }
                ]
            },
            {
                title: "아쓰타 & 나고야항",
                activities: [
                    {
                        time: "09:30",
                        title: "아쓰타 신궁 숲길",
                        type: "trees",
                        location: "Atsuta Shrine"
                    },
                    {
                        time: "13:00",
                        title: "나고야항 수족관",
                        type: "ship",
                        location: "Port of Nagoya Public Aquarium"
                    },
                    {
                        time: "17:30",
                        title: "가든 부두 노을",
                        type: "camera",
                        location: "Nagoya Port Garden Pier"
                    }
                ]
            },
            {
                title: "나고야역 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "나고야역 카페 모닝",
                        type: "coffee",
                        location: "Nagoya Station"
                    },
                    {
                        time: "13:00",
                        title: "JR 게이트타워 쇼핑",
                        type: "shopping-bag",
                        location: "JR Gate Tower"
                    },
                    {
                        time: "16:30",
                        title: "주부 센트레아 공항 이동",
                        type: "plane",
                        location: "Chubu Centrair International Airport"
                    }
                ]
            }
        ]
    },
    okinawa: {
        id: "okinawa",
        city: "Okinawa",
        country: "Japan",
        summary: "고쿠사이도리의 느린 오후, 슈리성의 류큐 색, 추라우미 수족관과 에메랄드 해변까지 이어지는 오키나와 본섬 템플릿입니다.",
        footer: "Okinawa moves at island speed: turquoise water, Ryukyu red, no rush.",
        heroImage: "assets/heroes/okinawa.jpg",
        heroImagePortrait: 'assets/heroes/okinawa-portrait.jpg',
        heroPosition: "50% 55%",
        accent: "#06B6D4",
        accentRgb: "6, 182, 212",
        ink: "#0F3B3A",
        inkRgb: "15, 59, 58",
        overlayTop: "rgba(15, 59, 58, 0.36)",
        overlayBottom: "rgba(8, 35, 40, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 26.2124,
            longitude: 127.6809
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 14,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "めんそーれ",
                pron: "멘소레",
                meaning: "어서 오세요 (오키나와 말)"
            },
            {
                text: "にふぇーでーびる",
                pron: "니페데비루",
                meaning: "감사합니다 (오키나와 말)"
            },
            {
                text: "レンタカーを借りたいです",
                pron: "렌타카오 카리타이데스",
                meaning: "렌터카를 빌리고 싶어요"
            },
            {
                text: "海はきれいですね",
                pron: "우미와 키레이데스네",
                meaning: "바다가 정말 예쁘네요"
            },
            {
                text: "泳いでもいいですか？",
                pron: "오요이데모 이이데스카",
                meaning: "수영해도 되나요?"
            },
            {
                text: "日焼け止めはありますか？",
                pron: "히야케도메와 아리마스카",
                meaning: "선크림 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "나하 시내",
                activities: [
                    {
                        time: "10:30",
                        title: "고쿠사이도리 거리 구경",
                        type: "shopping-bag",
                        location: "Kokusai Street"
                    },
                    {
                        time: "13:00",
                        title: "마키시 공설시장 점심",
                        type: "utensils-crossed",
                        location: "Makishi Public Market"
                    },
                    {
                        time: "17:00",
                        title: "쓰보야 도자기 거리",
                        type: "palette",
                        location: "Tsuboya Yachimun Street"
                    }
                ]
            },
            {
                title: "슈리 & 류큐 유적",
                activities: [
                    {
                        time: "09:30",
                        title: "슈리성 공원",
                        type: "landmark",
                        location: "Shuri Castle"
                    },
                    {
                        time: "12:30",
                        title: "다마우둔 왕릉",
                        type: "map",
                        location: "Tamaudun Mausoleum"
                    },
                    {
                        time: "16:00",
                        title: "후쿠슈엔 정원",
                        type: "trees",
                        location: "Fukushuen Garden"
                    }
                ]
            },
            {
                title: "북부 추라우미 드라이브",
                activities: [
                    {
                        time: "08:30",
                        title: "렌터카로 북부 출발",
                        type: "map",
                        location: "Naha"
                    },
                    {
                        time: "11:00",
                        title: "추라우미 수족관",
                        type: "ship",
                        location: "Okinawa Churaumi Aquarium"
                    },
                    {
                        time: "15:00",
                        title: "고우리 대교와 섬",
                        type: "bridge",
                        location: "Kouri Bridge"
                    }
                ]
            },
            {
                title: "중부 해안 & 아메리칸 빌리지",
                activities: [
                    {
                        time: "10:00",
                        title: "만좌모 절벽 전망",
                        type: "camera",
                        location: "Cape Manzamo"
                    },
                    {
                        time: "13:30",
                        title: "잔파곶 등대",
                        type: "sun",
                        location: "Cape Zanpa"
                    },
                    {
                        time: "18:00",
                        title: "아메리칸 빌리지 관람차 야경",
                        type: "moon-star",
                        location: "American Village Chatan"
                    }
                ]
            },
            {
                title: "남부 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "세화우타키 성지",
                        type: "landmark",
                        location: "Sefa-utaki"
                    },
                    {
                        time: "13:00",
                        title: "우미카지 테라스 브런치",
                        type: "coffee",
                        location: "Umikaji Terrace"
                    },
                    {
                        time: "16:30",
                        title: "나하 공항 이동",
                        type: "plane",
                        location: "Naha Airport"
                    }
                ]
            }
        ]
    },
    kagoshima: {
        id: "kagoshima",
        city: "Kagoshima",
        country: "Japan",
        summary: "사쿠라지마 화산 연기와 센간엔 정원, 이부스키 모래찜질과 텐몬칸 흑돼지까지 남규슈의 뜨거운 기운을 담은 템플릿입니다.",
        footer: "Kagoshima lives under a smoking volcano and sleeps in warm sand.",
        heroImage: "assets/heroes/kagoshima.jpg",
        heroImagePortrait: 'assets/heroes/kagoshima-portrait.jpg',
        heroPosition: "center center",
        accent: "#B91C1C",
        accentRgb: "185, 28, 28",
        ink: "#450A0A",
        inkRgb: "69, 10, 10",
        overlayTop: "rgba(69, 10, 10, 0.38)",
        overlayBottom: "rgba(28, 12, 12, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 31.5966,
            longitude: 130.5571
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 9,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "桜島は今日見えますか？",
                pron: "사쿠라지마와 쿄 미에마스카",
                meaning: "오늘 사쿠라지마가 보이나요?"
            },
            {
                text: "砂むし温泉を予約したいです",
                pron: "스나무시온센오 요야쿠시타이데스",
                meaning: "모래찜질 온천을 예약하고 싶어요"
            },
            {
                text: "黒豚のとんかつをください",
                pron: "쿠로부타노 톤카츠오 쿠다사이",
                meaning: "흑돼지 돈카츠 주세요"
            },
            {
                text: "芋焼酎をロックで",
                pron: "이모쇼츄오 롯쿠데",
                meaning: "고구마 소주를 온더록으로요"
            },
            {
                text: "フェリー乗り場はどこですか？",
                pron: "페리 노리바와 도코데스카",
                meaning: "페리 선착장이 어디인가요?"
            },
            {
                text: "しろくまをください",
                pron: "시로쿠마오 쿠다사이",
                meaning: "시로쿠마(가고시마 빙수) 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "텐몬칸 & 시로야마",
                activities: [
                    {
                        time: "10:00",
                        title: "시로야마 전망대 사쿠라지마 조망",
                        type: "binoculars",
                        location: "Shiroyama Observatory"
                    },
                    {
                        time: "13:00",
                        title: "텐몬칸 흑돼지 돈카츠 점심",
                        type: "utensils-crossed",
                        location: "Tenmonkan"
                    },
                    {
                        time: "18:30",
                        title: "아뮤플라자 관람차 야경",
                        type: "moon-star",
                        location: "Amu Plaza Kagoshima"
                    }
                ]
            },
            {
                title: "사쿠라지마",
                activities: [
                    {
                        time: "09:30",
                        title: "사쿠라지마 페리 승선",
                        type: "ship",
                        location: "Sakurajima Ferry Terminal"
                    },
                    {
                        time: "11:00",
                        title: "유노히라 전망소 분화구 조망",
                        type: "camera",
                        location: "Yunohira Observatory"
                    },
                    {
                        time: "15:00",
                        title: "용암 나기사 공원 족욕",
                        type: "trees",
                        location: "Sakurajima Yogan Nagisa Park"
                    }
                ]
            },
            {
                title: "이부스키",
                activities: [
                    {
                        time: "09:00",
                        title: "이부스키노 타마테바코 열차",
                        type: "train-front",
                        location: "Ibusuki Station"
                    },
                    {
                        time: "12:00",
                        title: "사라쿠 모래찜질 온천",
                        type: "sparkles",
                        location: "Sunamushi Kaikan Saraku"
                    },
                    {
                        time: "15:30",
                        title: "이케다 호수 & 가이몬다케 조망",
                        type: "sun",
                        location: "Lake Ikeda"
                    }
                ]
            },
            {
                title: "센간엔 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "센간엔 정원 산책",
                        type: "landmark",
                        location: "Sengan-en"
                    },
                    {
                        time: "12:30",
                        title: "텐몬칸 무자키 시로쿠마 빙수",
                        type: "coffee",
                        location: "Tenmonkan Mujaki"
                    },
                    {
                        time: "15:30",
                        title: "가고시마 공항 이동",
                        type: "plane",
                        location: "Kagoshima Airport"
                    }
                ]
            }
        ]
    },
    kumamoto: {
        id: "kumamoto",
        city: "Kumamoto",
        country: "Japan",
        summary: "구마모토성 검은 천수각에서 스이젠지 정원, 아소 분화구와 구로카와 노천탕까지 불의 나라를 가로지르는 템플릿입니다.",
        footer: "Kumamoto is a black castle, a green caldera, and steam in the valley.",
        heroImage: "assets/heroes/kumamoto.jpg",
        heroImagePortrait: 'assets/heroes/kumamoto-portrait.jpg',
        heroPosition: "center center",
        accent: "#05968F",
        accentRgb: "5, 150, 143",
        ink: "#022C22",
        inkRgb: "2, 44, 34",
        overlayTop: "rgba(2, 44, 34, 0.38)",
        overlayBottom: "rgba(6, 22, 18, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 32.8032,
            longitude: 130.7079
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 10,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "天守閣まで行けますか？",
                pron: "텐슈카쿠마데 이케마스카",
                meaning: "천수각까지 올라갈 수 있나요?"
            },
            {
                text: "馬刺しをください",
                pron: "바사시오 쿠다사이",
                meaning: "말고기 회 주세요"
            },
            {
                text: "入湯手形はどこで買えますか？",
                pron: "뉴토테가타와 도코데 카에마스카",
                meaning: "온천 순회권(입탕수형)은 어디서 살 수 있나요?"
            },
            {
                text: "阿蘇行きのバスは何番ですか？",
                pron: "아소유키노 바스와 난반데스카",
                meaning: "아소행 버스는 몇 번인가요?"
            },
            {
                text: "くまモングッズはありますか？",
                pron: "쿠마몬 굿즈와 아리마스카",
                meaning: "구마몬 굿즈 있나요?"
            },
            {
                text: "火口は今日見学できますか？",
                pron: "카코와 쿄 켄가쿠 데키마스카",
                meaning: "오늘 분화구 견학할 수 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "구마모토성 & 시내",
                activities: [
                    {
                        time: "10:00",
                        title: "구마모토성 천수각",
                        type: "landmark",
                        location: "Kumamoto Castle"
                    },
                    {
                        time: "12:30",
                        title: "사쿠라노바바 조사이엔 점심",
                        type: "utensils-crossed",
                        location: "Sakuranobaba Josaien"
                    },
                    {
                        time: "15:30",
                        title: "구마모토 현립미술관",
                        type: "building-2",
                        location: "Kumamoto Prefectural Museum of Art"
                    }
                ]
            },
            {
                title: "스이젠지 & 상점가",
                activities: [
                    {
                        time: "09:30",
                        title: "스이젠지 조주엔 정원",
                        type: "trees",
                        location: "Suizenji Jojuen Garden"
                    },
                    {
                        time: "13:00",
                        title: "구마몬 스퀘어",
                        type: "gift",
                        location: "Kumamon Square"
                    },
                    {
                        time: "18:00",
                        title: "시모토리 아케이드 말고기 회 저녁",
                        type: "shopping-bag",
                        location: "Shimotori Arcade"
                    }
                ]
            },
            {
                title: "아소 & 구로카와 온천",
                activities: [
                    {
                        time: "08:30",
                        title: "아소역으로 이동",
                        type: "train-front",
                        location: "Aso Station"
                    },
                    {
                        time: "10:30",
                        title: "나카다케 분화구",
                        type: "camera",
                        location: "Mount Aso Nakadake Crater"
                    },
                    {
                        time: "16:30",
                        title: "구로카와 온천 노천탕 순회",
                        type: "sparkles",
                        location: "Kurokawa Onsen"
                    }
                ]
            },
            {
                title: "아소 북부 & 이동",
                activities: [
                    {
                        time: "09:00",
                        title: "다이칸보 전망대 칼데라 조망",
                        type: "binoculars",
                        location: "Daikanbo"
                    },
                    {
                        time: "11:30",
                        title: "구사센리 초원 산책",
                        type: "sun",
                        location: "Kusasenri"
                    },
                    {
                        time: "16:00",
                        title: "구마모토 공항 이동",
                        type: "plane",
                        location: "Kumamoto Airport"
                    }
                ]
            }
        ]
    },
    nagasaki: {
        id: "nagasaki",
        city: "Nagasaki",
        country: "Japan",
        summary: "글로버 가든과 데지마의 이국 정취, 짬뽕 골목과 군함도, 이나사야마 천만 불 야경을 엮은 항구 도시 템플릿입니다.",
        footer: "Nagasaki layers Dutch, Chinese, and Japanese stories over one harbor.",
        heroImage: "assets/heroes/nagasaki.jpg",
        heroImagePortrait: 'assets/heroes/nagasaki-portrait.jpg',
        heroPosition: "center center",
        accent: "#AB3AED",
        accentRgb: "171, 58, 237",
        ink: "#2E1065",
        inkRgb: "46, 16, 101",
        overlayTop: "rgba(46, 16, 101, 0.38)",
        overlayBottom: "rgba(20, 12, 40, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 32.7503,
            longitude: 129.8779
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 11,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "ちゃんぽんを一つください",
                pron: "챰폰오 히토츠 쿠다사이",
                meaning: "짬뽕 하나 주세요"
            },
            {
                text: "角煮まんじゅうを一つください",
                pron: "카쿠니만쥬오 히토츠 쿠다사이",
                meaning: "카쿠니만쥬(돼지고기 찐빵) 하나 주세요"
            },
            {
                text: "ロープウェイは動いていますか？",
                pron: "로프웨이와 우고이테 이마스카",
                meaning: "로프웨이 운행하고 있나요?"
            },
            {
                text: "軍艦島ツアーは何時発ですか？",
                pron: "군칸지마 츠아와 난지 하츠데스카",
                meaning: "군함도 투어는 몇 시 출발인가요?"
            },
            {
                text: "カステラをお土産にしたいです",
                pron: "카스테라오 오미야게니 시타이데스",
                meaning: "카스텔라를 선물용으로 사고 싶어요"
            },
            {
                text: "夜景はどこから見えますか？",
                pron: "야케이와 도코카라 미에마스카",
                meaning: "야경은 어디서 볼 수 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "미나미야마테 & 이나사야마",
                activities: [
                    {
                        time: "10:00",
                        title: "글로버 가든",
                        type: "landmark",
                        location: "Glover Garden"
                    },
                    {
                        time: "13:00",
                        title: "데지마 네덜란드 상관",
                        type: "building-2",
                        location: "Dejima"
                    },
                    {
                        time: "18:30",
                        title: "이나사야마 로프웨이 야경",
                        type: "moon-star",
                        location: "Mount Inasa"
                    }
                ]
            },
            {
                title: "평화공원 & 신치 차이나타운",
                activities: [
                    {
                        time: "10:00",
                        title: "평화공원 & 원폭자료관",
                        type: "landmark",
                        location: "Nagasaki Peace Park"
                    },
                    {
                        time: "13:00",
                        title: "신치 차이나타운 짬뽕",
                        type: "utensils-crossed",
                        location: "Nagasaki Shinchi Chinatown"
                    },
                    {
                        time: "16:00",
                        title: "메가네바시 안경다리",
                        type: "bridge",
                        location: "Meganebashi Bridge"
                    }
                ]
            },
            {
                title: "군함도 & 시안바시",
                activities: [
                    {
                        time: "09:30",
                        title: "군함도 상륙 크루즈",
                        type: "ship",
                        location: "Hashima Island"
                    },
                    {
                        time: "13:30",
                        title: "군함도 디지털 뮤지엄",
                        type: "building",
                        location: "Gunkanjima Digital Museum"
                    },
                    {
                        time: "17:00",
                        title: "후쿠사야 본점 카스텔라",
                        type: "gift",
                        location: "Fukusaya Main Store"
                    }
                ]
            },
            {
                title: "하우스텐보스 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "하우스텐보스 입장",
                        type: "ticket",
                        location: "Huis Ten Bosch"
                    },
                    {
                        time: "13:00",
                        title: "돔토른 전망대 & 꽃 정원",
                        type: "tower-control",
                        location: "Domtoren"
                    },
                    {
                        time: "17:00",
                        title: "나가사키 공항 이동",
                        type: "plane",
                        location: "Nagasaki Airport"
                    }
                ]
            }
        ]
    },
    oita: {
        id: "oita",
        city: "Oita (Beppu)",
        country: "Japan",
        summary: "벳푸 지옥순례의 증기와 유후인 긴린코 아침 안개, 다카사키야마 원숭이까지 온천 향으로 채운 4일 템플릿입니다.",
        footer: "Oita is steam rising from every street corner in Beppu.",
        heroImage: "assets/heroes/oita.jpg",
        heroImagePortrait: 'assets/heroes/oita-portrait.jpg',
        heroPosition: "center center",
        accent: "#0E7490",
        accentRgb: "14, 116, 144",
        ink: "#083344",
        inkRgb: "8, 51, 68",
        overlayTop: "rgba(8, 51, 68, 0.38)",
        overlayBottom: "rgba(6, 24, 32, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 33.2846,
            longitude: 131.4914
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 12,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "日帰り入浴はできますか？",
                pron: "히가에리 뉴요쿠와 데키마스카",
                meaning: "당일 입욕이 가능한가요?"
            },
            {
                text: "地獄めぐりの共通券をください",
                pron: "지고쿠메구리노 쿄츠켄오 쿠다사이",
                meaning: "지옥순례 공통권 주세요"
            },
            {
                text: "家族風呂は空いていますか？",
                pron: "카조쿠부로와 아이테 이마스카",
                meaning: "가족탕 비어 있나요?"
            },
            {
                text: "とり天をください",
                pron: "토리텐오 쿠다사이",
                meaning: "토리텐(오이타식 닭튀김) 주세요"
            },
            {
                text: "由布院行きのバス乗り場はどこですか？",
                pron: "유후인유키노 바스노리바와 도코데스카",
                meaning: "유후인행 버스 타는 곳이 어디인가요?"
            },
            {
                text: "足湯は無料ですか？",
                pron: "아시유와 무료데스카",
                meaning: "족욕은 무료인가요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "벳푸 간나와 지옥순례",
                activities: [
                    {
                        time: "10:00",
                        title: "우미지고쿠 바다 지옥",
                        type: "sparkles",
                        location: "Umi Jigoku"
                    },
                    {
                        time: "12:30",
                        title: "간나와 지옥찜 공방 점심",
                        type: "utensils-crossed",
                        location: "Jigokumushi Kobo Kannawa"
                    },
                    {
                        time: "15:00",
                        title: "치노이케 지옥 & 다쓰마키 지옥",
                        type: "camera",
                        location: "Chinoike Jigoku"
                    }
                ]
            },
            {
                title: "유후인",
                activities: [
                    {
                        time: "10:00",
                        title: "긴린코 호수 아침 산책",
                        type: "trees",
                        location: "Kinrin Lake"
                    },
                    {
                        time: "12:30",
                        title: "유노쓰보 거리 먹거리 & 쇼핑",
                        type: "shopping-bag",
                        location: "Yunotsubo Street"
                    },
                    {
                        time: "15:00",
                        title: "유후인 플로럴 빌리지 카페",
                        type: "coffee",
                        location: "Yufuin Floral Village"
                    }
                ]
            },
            {
                title: "다카사키야마 & 오이타 시내",
                activities: [
                    {
                        time: "10:00",
                        title: "다카사키야마 야생 원숭이",
                        type: "binoculars",
                        location: "Takasakiyama Natural Zoological Garden"
                    },
                    {
                        time: "12:30",
                        title: "우미타마고 수족관",
                        type: "ship",
                        location: "Oita Marine Palace Aquarium Umitamago"
                    },
                    {
                        time: "18:00",
                        title: "오이타역 토리텐 저녁",
                        type: "utensils-crossed",
                        location: "Oita Station"
                    }
                ]
            },
            {
                title: "벳푸 온천 & 이동",
                activities: [
                    {
                        time: "08:30",
                        title: "다케가와라 온천 모래찜질",
                        type: "sparkles",
                        location: "Takegawara Onsen"
                    },
                    {
                        time: "11:30",
                        title: "벳푸 타워 & 온천 거리 산책",
                        type: "tower-control",
                        location: "Beppu Tower"
                    },
                    {
                        time: "15:00",
                        title: "오이타 공항 이동",
                        type: "plane",
                        location: "Oita Airport"
                    }
                ]
            }
        ]
    },
    miyazaki: {
        id: "miyazaki",
        city: "Miyazaki",
        country: "Japan",
        summary: "아오시마 도깨비 빨래판과 니치난 해안 드라이브, 다카치호 협곡 보트와 치킨난반으로 남국 햇살을 담은 템플릿입니다.",
        footer: "Miyazaki is palm trees, surf, and myths carved into the coast.",
        heroImage: "assets/heroes/miyazaki.jpg",
        heroImagePortrait: 'assets/heroes/miyazaki-portrait.jpg',
        heroPosition: "center center",
        accent: "#EA3B0C",
        accentRgb: "234, 59, 12",
        ink: "#431407",
        inkRgb: "67, 20, 7",
        overlayTop: "rgba(67, 20, 7, 0.36)",
        overlayBottom: "rgba(30, 14, 8, 0.86)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 31.9077,
            longitude: 131.4202
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 8,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "チキン南蛮をください",
                pron: "치킨난반오 쿠다사이",
                meaning: "치킨난반 주세요"
            },
            {
                text: "マンゴーはありますか？",
                pron: "망고와 아리마스카",
                meaning: "망고 있나요?"
            },
            {
                text: "高千穂までどのくらいかかりますか？",
                pron: "타카치호마데 도노쿠라이 카카리마스카",
                meaning: "다카치호까지 얼마나 걸리나요?"
            },
            {
                text: "ボートを借りたいです",
                pron: "보토오 카리타이데스",
                meaning: "보트를 빌리고 싶어요"
            },
            {
                text: "運玉を投げてみたいです",
                pron: "운타마오 나게테 미타이데스",
                meaning: "운타마(행운 구슬)를 던져보고 싶어요"
            },
            {
                text: "地鶏の炭火焼きをください",
                pron: "지도리노 스미비야키오 쿠다사이",
                meaning: "토종닭 숯불구이 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "아오시마 & 니치난 해안",
                activities: [
                    {
                        time: "10:00",
                        title: "아오시마 신사 & 도깨비 빨래판",
                        type: "sun",
                        location: "Aoshima Shrine"
                    },
                    {
                        time: "13:00",
                        title: "선멧세 니치난 모아이",
                        type: "camera",
                        location: "Sun Messe Nichinan"
                    },
                    {
                        time: "15:30",
                        title: "우도신궁 운타마 던지기",
                        type: "landmark",
                        location: "Udo Shrine"
                    }
                ]
            },
            {
                title: "다카치호",
                activities: [
                    {
                        time: "10:30",
                        title: "다카치호 협곡 보트",
                        type: "ship",
                        location: "Takachiho Gorge"
                    },
                    {
                        time: "13:30",
                        title: "다카치호 신사",
                        type: "landmark",
                        location: "Takachiho Shrine"
                    },
                    {
                        time: "16:00",
                        title: "아마노이와토 신사 & 아마노야스카와라",
                        type: "sparkles",
                        location: "Amano Iwato Shrine"
                    }
                ]
            },
            {
                title: "미야자키 시내 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "헤이와다이 공원 하니와 정원",
                        type: "trees",
                        location: "Heiwadai Park"
                    },
                    {
                        time: "12:30",
                        title: "오구라 본점 치킨난반 점심",
                        type: "utensils-crossed",
                        location: "Ogura Honten"
                    },
                    {
                        time: "15:30",
                        title: "미야자키 공항 이동",
                        type: "plane",
                        location: "Miyazaki Airport"
                    }
                ]
            }
        ]
    },
    kitakyushu: {
        id: "kitakyushu",
        city: "Kitakyushu",
        country: "Japan",
        summary: "모지코 레트로 항구와 고쿠라성, 탄가시장 다이가쿠동, 가와치후지엔 등나무 터널을 잇는 공업 도시의 반전 매력 템플릿입니다.",
        footer: "Kitakyushu pairs a brick-red retro port with a castle and a wisteria tunnel.",
        heroImage: "assets/heroes/kitakyushu.jpg",
        heroImagePortrait: 'assets/heroes/kitakyushu-portrait.jpg',
        heroPosition: "center center",
        accent: "#A21CAF",
        accentRgb: "162, 28, 175",
        ink: "#4A044E",
        inkRgb: "74, 4, 78",
        overlayTop: "rgba(74, 4, 78, 0.38)",
        overlayBottom: "rgba(28, 10, 30, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 33.8834,
            longitude: 130.8752
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 7,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "焼きカレーをください",
                pron: "야키카레오 쿠다사이",
                meaning: "야키카레(구운 카레) 주세요"
            },
            {
                text: "関門トンネルを歩いて渡れますか？",
                pron: "칸몬 톤네루오 아루이테 와타레마스카",
                meaning: "간몬 터널을 걸어서 건널 수 있나요?"
            },
            {
                text: "大学丼はどこで食べられますか？",
                pron: "다이가쿠동와 도코데 타베라레마스카",
                meaning: "다이가쿠동(탄가시장 덮밥)은 어디서 먹을 수 있나요?"
            },
            {
                text: "ふぐ料理はありますか？",
                pron: "후구료리와 아리마스카",
                meaning: "복어 요리 있나요?"
            },
            {
                text: "藤は今が見頃ですか？",
                pron: "후지와 이마가 미고로데스카",
                meaning: "등나무꽃은 지금이 볼 때인가요?"
            },
            {
                text: "小倉城まで歩けますか？",
                pron: "코쿠라죠마데 아루케마스카",
                meaning: "고쿠라성까지 걸어갈 수 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "고쿠라",
                activities: [
                    {
                        time: "10:00",
                        title: "고쿠라성 천수각",
                        type: "landmark",
                        location: "Kokura Castle"
                    },
                    {
                        time: "12:30",
                        title: "탄가시장 다이가쿠동",
                        type: "store",
                        location: "Tanga Market"
                    },
                    {
                        time: "17:30",
                        title: "리버워크 기타큐슈 & 무라사키강 야경",
                        type: "moon-star",
                        location: "Riverwalk Kitakyushu"
                    }
                ]
            },
            {
                title: "모지코 레트로",
                activities: [
                    {
                        time: "10:00",
                        title: "모지코역 레트로 거리 산책",
                        type: "train-front",
                        location: "Mojiko Station"
                    },
                    {
                        time: "12:30",
                        title: "모지코 야키카레 점심",
                        type: "utensils-crossed",
                        location: "Mojiko Retro"
                    },
                    {
                        time: "15:00",
                        title: "간몬 인도 터널로 시모노세키 왕복",
                        type: "map",
                        location: "Kanmon Pedestrian Tunnel"
                    }
                ]
            },
            {
                title: "야하타 & 이동",
                activities: [
                    {
                        time: "09:00",
                        title: "가와치 후지엔 등나무 터널",
                        type: "trees",
                        location: "Kawachi Wisteria Garden"
                    },
                    {
                        time: "12:30",
                        title: "사라쿠라산 케이블카 전망",
                        type: "binoculars",
                        location: "Mount Sarakura"
                    },
                    {
                        time: "16:00",
                        title: "기타큐슈 공항 이동",
                        type: "plane",
                        location: "Kitakyushu Airport"
                    }
                ]
            }
        ]
    },
    saga: {
        id: "saga",
        city: "Saga",
        country: "Japan",
        summary: "유토쿠이나리의 주홍 회랑과 가라쓰 바다의 오징어 활어회, 우레시노 온천과 아리타 도자기 마을을 도는 소박한 템플릿입니다.",
        footer: "Saga is quiet: vermilion shrines, squid boats, and porcelain kilns.",
        heroImage: "assets/heroes/saga.jpg",
        heroImagePortrait: 'assets/heroes/saga-portrait.jpg',
        heroPosition: "center center",
        accent: "#1E2DAF",
        accentRgb: "30, 45, 175",
        ink: "#172554",
        inkRgb: "23, 37, 84",
        overlayTop: "rgba(23, 37, 84, 0.38)",
        overlayBottom: "rgba(10, 16, 36, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 33.2635,
            longitude: 130.3009
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 13,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "嬉野茶をください",
                pron: "우레시노차오 쿠다사이",
                meaning: "우레시노 차 주세요"
            },
            {
                text: "この器は電子レンジで使えますか？",
                pron: "코노 우츠와와 덴시렌지데 츠카에마스카",
                meaning: "이 그릇은 전자레인지에 써도 되나요?"
            },
            {
                text: "割れないように包んでください",
                pron: "와레나이요니 츠츤데 쿠다사이",
                meaning: "깨지지 않게 포장해 주세요"
            },
            {
                text: "イカの活き造りをください",
                pron: "이카노 이키즈쿠리오 쿠다사이",
                meaning: "오징어 활어회 주세요"
            },
            {
                text: "佐賀牛はありますか？",
                pron: "사가규와 아리마스카",
                meaning: "사가규(사가 소고기) 있나요?"
            },
            {
                text: "奥の院まで何分ですか？",
                pron: "오쿠노인마데 난푼데스카",
                meaning: "오쿠노인(안쪽 신전)까지 몇 분 걸리나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "사가 시내 & 유토쿠이나리",
                activities: [
                    {
                        time: "10:00",
                        title: "사가성 혼마루 역사관",
                        type: "building-2",
                        location: "Saga Castle Honmaru History Museum"
                    },
                    {
                        time: "12:30",
                        title: "사가역 사가규 점심",
                        type: "utensils-crossed",
                        location: "Saga Station"
                    },
                    {
                        time: "15:30",
                        title: "유토쿠 이나리 신사 주홍 회랑",
                        type: "landmark",
                        location: "Yutoku Inari Shrine"
                    }
                ]
            },
            {
                title: "가라쓰 & 요부코",
                activities: [
                    {
                        time: "09:00",
                        title: "요부코 아침시장 오징어 활어회",
                        type: "store",
                        location: "Yobuko Morning Market"
                    },
                    {
                        time: "12:30",
                        title: "가라쓰성 천수각",
                        type: "landmark",
                        location: "Karatsu Castle"
                    },
                    {
                        time: "15:00",
                        title: "니지노마쓰바라 소나무 숲 드라이브",
                        type: "trees",
                        location: "Niji no Matsubara"
                    }
                ]
            },
            {
                title: "우레시노 & 아리타 & 이동",
                activities: [
                    {
                        time: "09:00",
                        title: "우레시노 온천 시볼트노유",
                        type: "sparkles",
                        location: "Siebold no Yu"
                    },
                    {
                        time: "12:00",
                        title: "도잔 신사 도자기 도리이 & 아리타 거리",
                        type: "shopping-bag",
                        location: "Tozan Shrine"
                    },
                    {
                        time: "16:00",
                        title: "사가 공항 이동",
                        type: "plane",
                        location: "Saga Airport"
                    }
                ]
            }
        ]
    },
    hiroshima: {
        id: "hiroshima",
        city: "Hiroshima",
        country: "Japan",
        summary: "평화기념공원의 묵직한 아침부터 미야지마 바다 위 도리이, 오코노미야키 철판과 시마나미 해도 라이딩까지 잇는 세토내해 템플릿입니다.",
        footer: "Hiroshima holds silence and sea light in the same breath.",
        heroImage: "assets/heroes/hiroshima.jpg",
        heroImagePortrait: 'assets/heroes/hiroshima-portrait.jpg',
        heroPosition: "center center",
        accent: "#9F1226",
        accentRgb: "159, 18, 38",
        ink: "#3B1524",
        inkRgb: "59, 21, 36",
        overlayTop: "rgba(59, 21, 36, 0.34)",
        overlayBottom: "rgba(24, 12, 18, 0.86)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 34.3853,
            longitude: 132.4553
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 9,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "そば入りでお願いします",
                pron: "소바이리데 오네가이시마스",
                meaning: "(오코노미야키) 소바 넣어 주세요"
            },
            {
                text: "宮島行きのフェリーはどこですか？",
                pron: "미야지마유키노 페리와 도코데스카",
                meaning: "미야지마행 페리는 어디서 타나요?"
            },
            {
                text: "焼き牡蠣をください",
                pron: "야키가키오 쿠다사이",
                meaning: "구운 굴 주세요"
            },
            {
                text: "もみじ饅頭を一箱ください",
                pron: "모미지만쥬오 히토하코 쿠다사이",
                meaning: "모미지만주 한 상자 주세요"
            },
            {
                text: "路面電車はどこで乗れますか？",
                pron: "로멘덴샤와 도코데 노레마스카",
                meaning: "노면전차는 어디서 탈 수 있나요?"
            },
            {
                text: "ぶちうまい",
                pron: "부치 우마이",
                meaning: "엄청 맛있다 (히로시마 사투리)"
            }
        ],
        itineraryTemplate: [
            {
                title: "평화기념공원 & 핫초보리",
                activities: [
                    {
                        time: "09:30",
                        title: "원폭 돔",
                        type: "landmark",
                        location: "Atomic Bomb Dome"
                    },
                    {
                        time: "12:30",
                        title: "평화기념자료관 & 평화의 등불",
                        type: "building-2",
                        location: "Hiroshima Peace Memorial Museum"
                    },
                    {
                        time: "18:30",
                        title: "오코노미무라 철판 저녁",
                        type: "utensils-crossed",
                        location: "Okonomimura"
                    }
                ]
            },
            {
                title: "미야지마",
                activities: [
                    {
                        time: "09:30",
                        title: "이쓰쿠시마 신사 & 바다 위 도리이",
                        type: "landmark",
                        location: "Itsukushima Shrine"
                    },
                    {
                        time: "12:30",
                        title: "오모테산도 상점가 굴구이 · 모미지만주",
                        type: "store",
                        location: "Miyajima Omotesando Shopping Street"
                    },
                    {
                        time: "18:00",
                        title: "미야지마구치 아나고메시 저녁",
                        type: "utensils-crossed",
                        location: "Anagomeshi Ueno"
                    }
                ]
            },
            {
                title: "오노미치 & 시마나미 해도",
                activities: [
                    {
                        time: "09:30",
                        title: "센코지 공원 전망 & 고양이 골목",
                        type: "binoculars",
                        location: "Senkoji Park"
                    },
                    {
                        time: "12:30",
                        title: "오노미치 U2 렌터사이클 & 점심",
                        type: "utensils-crossed",
                        location: "ONOMICHI U2"
                    },
                    {
                        time: "16:30",
                        title: "시마나미 해도 라이딩 (무카이시마~인노시마)",
                        type: "bridge",
                        location: "Innoshima Bridge"
                    }
                ]
            },
            {
                title: "히로시마성 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "히로시마성 천수각",
                        type: "landmark",
                        location: "Hiroshima Castle"
                    },
                    {
                        time: "13:00",
                        title: "슛케이엔 정원 산책",
                        type: "trees",
                        location: "Shukkeien Garden"
                    },
                    {
                        time: "16:30",
                        title: "히로시마 공항 이동",
                        type: "plane",
                        location: "Hiroshima Airport"
                    }
                ]
            }
        ]
    },
    kobe: {
        id: "kobe",
        city: "Kobe",
        country: "Japan",
        summary: "기타노 이진칸 언덕과 하버랜드 야경, 난킨마치 간식과 아리마 온천, 히메지성 당일치기까지 담은 항구 도시 템플릿입니다.",
        footer: "Kobe is a port that dresses well and eats better.",
        heroImage: "assets/heroes/kobe.jpg",
        heroImagePortrait: 'assets/heroes/kobe-portrait.jpg',
        heroPosition: "center center",
        accent: "#1F1E8A",
        accentRgb: "31, 30, 138",
        ink: "#0F1F3D",
        inkRgb: "15, 31, 61",
        overlayTop: "rgba(15, 31, 61, 0.36)",
        overlayBottom: "rgba(8, 14, 30, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 34.6901,
            longitude: 135.1955
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 8,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "神戸牛のステーキをください",
                pron: "고베규노 스테키오 쿠다사이",
                meaning: "고베규 스테이크 주세요"
            },
            {
                text: "焼き加減はミディアムで",
                pron: "야키카겐와 미디아무데",
                meaning: "굽기는 미디엄으로 해 주세요"
            },
            {
                text: "有馬温泉行きのバス乗り場はどこですか？",
                pron: "아리마온센유키노 바스노리바와 도코데스카",
                meaning: "아리마온천행 버스 정류장은 어디인가요?"
            },
            {
                text: "夜景がきれいですね",
                pron: "야케이가 키레이데스네",
                meaning: "야경이 예쁘네요"
            },
            {
                text: "豚まんを二つください",
                pron: "부타만오 후타츠 쿠다사이",
                meaning: "고기만두 두 개 주세요 (난킨마치)"
            },
            {
                text: "姫路城まで何分かかりますか？",
                pron: "히메지죠마데 난푼 카카리마스카",
                meaning: "히메지성까지 몇 분 걸리나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "산노미야 & 기타노",
                activities: [
                    {
                        time: "10:00",
                        title: "기타노 이진칸 풍향계의 집",
                        type: "landmark",
                        location: "Weathercock House"
                    },
                    {
                        time: "12:30",
                        title: "고베규 스테이크 점심",
                        type: "utensils-crossed",
                        location: "Steakland Kobe"
                    },
                    {
                        time: "18:30",
                        title: "누노비키 허브원 로프웨이 야경",
                        type: "binoculars",
                        location: "Kobe Nunobiki Herb Gardens & Ropeway"
                    }
                ]
            },
            {
                title: "하버랜드 & 난킨마치",
                activities: [
                    {
                        time: "10:00",
                        title: "메리켄파크 & 고베 포트타워",
                        type: "tower-control",
                        location: "Kobe Port Tower"
                    },
                    {
                        time: "12:30",
                        title: "난킨마치 차이나타운 부타만 점심",
                        type: "store",
                        location: "Nankinmachi"
                    },
                    {
                        time: "18:30",
                        title: "하버랜드 umie 모자이크 야경",
                        type: "moon-star",
                        location: "Kobe Harborland umie"
                    }
                ]
            },
            {
                title: "아리마 온천 & 롯코산",
                activities: [
                    {
                        time: "10:30",
                        title: "킨노유 금탕 입욕",
                        type: "sparkles",
                        location: "Kin no Yu"
                    },
                    {
                        time: "13:00",
                        title: "온천가 산책 & 탄산센베",
                        type: "store",
                        location: "Arima Onsen"
                    },
                    {
                        time: "17:30",
                        title: "롯코 가든테라스 천만불 야경",
                        type: "moon-star",
                        location: "Rokko Garden Terrace"
                    }
                ]
            },
            {
                title: "히메지 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "히메지성 (백로성)",
                        type: "landmark",
                        location: "Himeji Castle"
                    },
                    {
                        time: "12:30",
                        title: "고코엔 정원 & 점심",
                        type: "trees",
                        location: "Koko-en Garden"
                    },
                    {
                        time: "16:30",
                        title: "고베 공항 이동",
                        type: "plane",
                        location: "Kobe Airport"
                    }
                ]
            }
        ]
    },
    okayama: {
        id: "okayama",
        city: "Okayama",
        country: "Japan",
        summary: "고라쿠엔과 까마귀성, 구라시키 미관지구 운하, 나오시마 예술섬 당일치기를 잇는 세토우치 예술 정원 템플릿입니다.",
        footer: "Okayama pairs raked gardens with island art and white peaches.",
        heroImage: "assets/heroes/okayama.jpg",
        heroImagePortrait: 'assets/heroes/okayama-portrait.jpg',
        heroPosition: "center center",
        accent: "#EC4899",
        accentRgb: "236, 72, 153",
        ink: "#3B2430",
        inkRgb: "59, 36, 48",
        overlayTop: "rgba(59, 36, 48, 0.30)",
        overlayBottom: "rgba(26, 16, 22, 0.84)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 34.6551,
            longitude: 133.9195
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 10,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "白桃はありますか？",
                pron: "하쿠토와 아리마스카",
                meaning: "백도(하얀 복숭아) 있나요?"
            },
            {
                text: "きびだんごをください",
                pron: "키비단고오 쿠다사이",
                meaning: "기비단고(수수경단) 주세요"
            },
            {
                text: "倉敷行きは何番線ですか？",
                pron: "쿠라시키유키와 난반센데스카",
                meaning: "구라시키행은 몇 번 승강장인가요?"
            },
            {
                text: "直島まで船でどのくらいですか？",
                pron: "나오시마마데 후네데 도노쿠라이데스카",
                meaning: "나오시마까지 배로 얼마나 걸리나요?"
            },
            {
                text: "庭園の入口はどこですか？",
                pron: "테이엔노 이리구치와 도코데스카",
                meaning: "정원 입구는 어디인가요?"
            },
            {
                text: "ぼっけぇきれいじゃなぁ",
                pron: "봇케 키레이쟈나",
                meaning: "엄청 예쁘네 (오카야마 사투리)"
            }
        ],
        itineraryTemplate: [
            {
                title: "고라쿠엔 & 오카야마성",
                activities: [
                    {
                        time: "10:00",
                        title: "고라쿠엔 산책",
                        type: "trees",
                        location: "Okayama Korakuen Garden"
                    },
                    {
                        time: "13:00",
                        title: "오카야마성 (까마귀성) 천수각",
                        type: "landmark",
                        location: "Okayama Castle"
                    },
                    {
                        time: "18:00",
                        title: "오모테초 상점가 저녁",
                        type: "shopping-bag",
                        location: "Omotecho Shopping Street"
                    }
                ]
            },
            {
                title: "구라시키 미관지구",
                activities: [
                    {
                        time: "10:00",
                        title: "미관지구 운하 & 나룻배",
                        type: "camera",
                        location: "Kurashiki Bikan Historical Quarter"
                    },
                    {
                        time: "13:00",
                        title: "오하라 미술관",
                        type: "palette",
                        location: "Ohara Museum of Art"
                    },
                    {
                        time: "18:00",
                        title: "아이비 스퀘어 붉은 벽돌 저녁",
                        type: "building",
                        location: "Kurashiki Ivy Square"
                    }
                ]
            },
            {
                title: "나오시마 예술섬",
                activities: [
                    {
                        time: "09:30",
                        title: "우노항에서 나오시마 페리",
                        type: "ship",
                        location: "Uno Port"
                    },
                    {
                        time: "12:30",
                        title: "지추 미술관",
                        type: "palette",
                        location: "Chichu Art Museum"
                    },
                    {
                        time: "17:00",
                        title: "베네세 하우스 & 노란 호박 노을",
                        type: "camera",
                        location: "Benesse House Museum"
                    }
                ]
            },
            {
                title: "기비쓰 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "기비쓰 신사 회랑",
                        type: "landmark",
                        location: "Kibitsu Shrine"
                    },
                    {
                        time: "13:00",
                        title: "오카야마역 기비단고 · 백도 쇼핑",
                        type: "gift",
                        location: "Okayama Station"
                    },
                    {
                        time: "16:30",
                        title: "오카야마 모모타로 공항 이동",
                        type: "plane",
                        location: "Okayama Momotaro Airport"
                    }
                ]
            }
        ]
    },
    takamatsu: {
        id: "takamatsu",
        city: "Takamatsu",
        country: "Japan",
        summary: "리쓰린공원 아침 산책, 셀프 우동집, 고토히라궁 785계단, 쇼도시마 올리브와 엔젤로드를 엮은 사누키 템플릿입니다.",
        footer: "Takamatsu runs on udon, pine gardens, and slow ferries.",
        heroImage: "assets/heroes/takamatsu.jpg",
        heroImagePortrait: 'assets/heroes/takamatsu-portrait.jpg',
        heroPosition: "center center",
        accent: "#115E59",
        accentRgb: "17, 94, 89",
        ink: "#0F2E2B",
        inkRgb: "15, 46, 43",
        overlayTop: "rgba(15, 46, 43, 0.34)",
        overlayBottom: "rgba(8, 22, 21, 0.86)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 34.3428,
            longitude: 134.0466
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 11,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "ぶっかけの冷たいのをください",
                pron: "붓카케노 츠메타이노오 쿠다사이",
                meaning: "차가운 붓카케 우동 주세요"
            },
            {
                text: "天ぷらは自分で取るんですか？",
                pron: "텐푸라와 지분데 토룬데스카",
                meaning: "튀김은 직접 가져가는 건가요? (셀프 우동집)"
            },
            {
                text: "次の船は何時に出ますか？",
                pron: "츠기노 후네와 난지니 데마스카",
                meaning: "다음 배는 몇 시에 출발하나요?"
            },
            {
                text: "階段は何段ありますか？",
                pron: "카이단와 난단 아리마스카",
                meaning: "계단이 몇 개인가요? (고토히라궁 785계단)"
            },
            {
                text: "杖を借りられますか？",
                pron: "츠에오 카리라레마스카",
                meaning: "지팡이를 빌릴 수 있나요? (고토히라궁 참배길)"
            },
            {
                text: "オリーブオイルをお土産にしたいです",
                pron: "오리부오이루오 오미야게니 시타이데스",
                meaning: "올리브오일을 선물로 사고 싶어요 (쇼도시마)"
            }
        ],
        itineraryTemplate: [
            {
                title: "리쓰린공원 & 선포트",
                activities: [
                    {
                        time: "09:30",
                        title: "리쓰린 공원 & 기쿠게쓰테이 말차",
                        type: "trees",
                        location: "Ritsurin Garden"
                    },
                    {
                        time: "12:30",
                        title: "사누키 우동 점심",
                        type: "utensils-crossed",
                        location: "Udon Baka Ichidai"
                    },
                    {
                        time: "18:00",
                        title: "심볼타워 전망 & 항구 저녁",
                        type: "building",
                        location: "Takamatsu Symbol Tower"
                    }
                ]
            },
            {
                title: "고토히라 (곤피라상)",
                activities: [
                    {
                        time: "09:30",
                        title: "고토히라궁 785계단 참배",
                        type: "landmark",
                        location: "Kotohira-gu"
                    },
                    {
                        time: "12:30",
                        title: "나카노 우동학교 체험 & 점심",
                        type: "utensils-crossed",
                        location: "Nakano Udon School"
                    },
                    {
                        time: "16:30",
                        title: "젠쓰지 (구카이 탄생지) 오층탑",
                        type: "landmark",
                        location: "Zentsuji Temple"
                    }
                ]
            },
            {
                title: "쇼도시마",
                activities: [
                    {
                        time: "09:00",
                        title: "다카마쓰항 → 쇼도시마 페리",
                        type: "ship",
                        location: "Takamatsu Port"
                    },
                    {
                        time: "12:30",
                        title: "올리브 공원 & 마녀 빗자루 사진",
                        type: "camera",
                        location: "Shodoshima Olive Park"
                    },
                    {
                        time: "17:00",
                        title: "엔젤로드 물길 산책 (간조 시간 확인)",
                        type: "sun",
                        location: "Angel Road"
                    }
                ]
            },
            {
                title: "야시마 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "야시마 전망대 (야시마루)",
                        type: "binoculars",
                        location: "Yashima"
                    },
                    {
                        time: "12:30",
                        title: "마루가메마치 상점가 점심 & 쇼핑",
                        type: "shopping-bag",
                        location: "Marugamemachi Shopping Street"
                    },
                    {
                        time: "16:00",
                        title: "다카마쓰 공항 이동",
                        type: "plane",
                        location: "Takamatsu Airport"
                    }
                ]
            }
        ]
    },
    matsuyama: {
        id: "matsuyama",
        city: "Matsuyama",
        country: "Japan",
        summary: "마쓰야마성 천수각과 도고온천 본관, 시마나미 해도 자전거 횡단까지 온천과 바다를 오가는 이요 템플릿입니다.",
        footer: "Matsuyama is warm water, citrus light, and bridges over the sea.",
        heroImage: "assets/heroes/matsuyama.jpg",
        heroImagePortrait: 'assets/heroes/matsuyama-portrait.jpg',
        heroPosition: "center center",
        accent: "#FF2700",
        accentRgb: "255, 39, 0",
        ink: "#3A1F0F",
        inkRgb: "58, 31, 15",
        overlayTop: "rgba(58, 31, 15, 0.32)",
        overlayBottom: "rgba(24, 14, 8, 0.86)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 33.8392,
            longitude: 132.7657
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 12,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "入浴券を一枚ください",
                pron: "뉴요쿠켄오 이치마이 쿠다사이",
                meaning: "입욕권 한 장 주세요 (도고온천)"
            },
            {
                text: "タオルは付いていますか？",
                pron: "타오루와 츠이테이마스카",
                meaning: "수건이 포함되어 있나요?"
            },
            {
                text: "ロープウェイ乗り場はどこですか？",
                pron: "로푸웨이 노리바와 도코데스카",
                meaning: "로프웨이 승강장은 어디인가요? (마쓰야마성)"
            },
            {
                text: "レンタサイクルはありますか？",
                pron: "렌타사이쿠루와 아리마스카",
                meaning: "대여 자전거 있나요? (시마나미 해도)"
            },
            {
                text: "みかんジュースをください",
                pron: "미칸쥬스오 쿠다사이",
                meaning: "귤(미칸) 주스 주세요"
            },
            {
                text: "鯛めしをお願いします",
                pron: "타이메시오 오네가이시마스",
                meaning: "타이메시(도미밥) 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "마쓰야마성 & 오카이도",
                activities: [
                    {
                        time: "10:00",
                        title: "마쓰야마성 로프웨이 & 천수각",
                        type: "landmark",
                        location: "Matsuyama Castle"
                    },
                    {
                        time: "12:30",
                        title: "니노마루 사적정원 산책",
                        type: "trees",
                        location: "Ninomaru Historical Garden"
                    },
                    {
                        time: "18:00",
                        title: "오카이도 상점가 타이메시 저녁",
                        type: "utensils-crossed",
                        location: "Okaido Shopping Street"
                    }
                ]
            },
            {
                title: "도고 온천",
                activities: [
                    {
                        time: "09:30",
                        title: "이시테지 (시코쿠 88영장 51번)",
                        type: "landmark",
                        location: "Ishiteji Temple"
                    },
                    {
                        time: "12:30",
                        title: "하이카라 거리 점심 & 미칸주스",
                        type: "store",
                        location: "Dogo Haikara Street"
                    },
                    {
                        time: "18:00",
                        title: "도고 온천 본관 야간 입욕",
                        type: "sparkles",
                        location: "Dogo Onsen Honkan"
                    }
                ]
            },
            {
                title: "시마나미 해도 (이마바리)",
                activities: [
                    {
                        time: "10:00",
                        title: "선라이즈 이토야마 렌터사이클",
                        type: "map",
                        location: "Sunrise Itoyama"
                    },
                    {
                        time: "12:30",
                        title: "구루시마 해협대교 횡단",
                        type: "bridge",
                        location: "Kurushima-Kaikyo Bridge"
                    },
                    {
                        time: "16:30",
                        title: "기로산 전망공원 노을",
                        type: "binoculars",
                        location: "Kirosan Observatory Park"
                    }
                ]
            },
            {
                title: "반스이소 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "반스이소 프랑스풍 저택",
                        type: "building-2",
                        location: "Bansuiso"
                    },
                    {
                        time: "12:30",
                        title: "긴텐가이 상점가 점심 & 쇼핑",
                        type: "shopping-bag",
                        location: "Gintengai Shopping Street"
                    },
                    {
                        time: "16:30",
                        title: "마쓰야마 공항 이동",
                        type: "plane",
                        location: "Matsuyama Airport"
                    }
                ]
            }
        ]
    },
    tokushima: {
        id: "tokushima",
        city: "Tokushima",
        country: "Japan",
        summary: "나루토 소용돌이 관조선, 오보케 협곡과 이야 덩굴다리, 아와오도리 회관의 춤까지 담은 아와 자연·축제 템플릿입니다.",
        footer: "Tokushima dances between whirlpools, gorges, and indigo.",
        heroImage: "assets/heroes/tokushima.jpg",
        heroImagePortrait: 'assets/heroes/tokushima-portrait.jpg',
        heroPosition: "center center",
        accent: "#4630A3",
        accentRgb: "70, 48, 163",
        ink: "#171A3A",
        inkRgb: "23, 26, 58",
        overlayTop: "rgba(23, 26, 58, 0.36)",
        overlayBottom: "rgba(10, 12, 30, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 34.0703,
            longitude: 134.5547
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 10,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "渦潮は何時ごろ見えますか？",
                pron: "우즈시오와 난지고로 미에마스카",
                meaning: "소용돌이는 몇 시쯤 볼 수 있나요?"
            },
            {
                text: "観潮船に乗りたいです",
                pron: "칸쵸센니 노리타이데스",
                meaning: "소용돌이 관조선을 타고 싶어요"
            },
            {
                text: "かずら橋は揺れますか？",
                pron: "카즈라바시와 유레마스카",
                meaning: "덩굴다리는 많이 흔들리나요?"
            },
            {
                text: "踊りを一緒に体験できますか？",
                pron: "오도리오 잇쇼니 타이켄 데키마스카",
                meaning: "춤을 함께 체험할 수 있나요? (아와오도리 회관)"
            },
            {
                text: "生卵を一つ追加してください",
                pron: "나마타마고오 히토츠 츠이카시테 쿠다사이",
                meaning: "날달걀 하나 추가해 주세요 (도쿠시마 라멘)"
            },
            {
                text: "踊る阿呆に見る阿呆",
                pron: "오도루 아호니 미루 아호",
                meaning: "춤추는 바보에 구경하는 바보 (아와오도리 노랫말)"
            }
        ],
        itineraryTemplate: [
            {
                title: "도쿠시마 시내 & 아와오도리",
                activities: [
                    {
                        time: "10:00",
                        title: "비잔 로프웨이 전망",
                        type: "binoculars",
                        location: "Bizan Ropeway"
                    },
                    {
                        time: "12:30",
                        title: "도쿠시마 라멘 점심",
                        type: "utensils-crossed",
                        location: "Tokushima Ramen Inotani"
                    },
                    {
                        time: "18:00",
                        title: "아와오도리 회관 공연 & 체험",
                        type: "music",
                        location: "Awa Odori Kaikan"
                    }
                ]
            },
            {
                title: "나루토",
                activities: [
                    {
                        time: "10:00",
                        title: "오쓰카 국제미술관",
                        type: "palette",
                        location: "Otsuka Museum of Art"
                    },
                    {
                        time: "13:00",
                        title: "관조선 소용돌이 크루즈 (조석표 확인)",
                        type: "ship",
                        location: "Uzushio Kisen"
                    },
                    {
                        time: "16:30",
                        title: "우즈노미치 유리바닥 전망로",
                        type: "bridge",
                        location: "Uzu no Michi"
                    }
                ]
            },
            {
                title: "오보케 & 이야 계곡",
                activities: [
                    {
                        time: "09:30",
                        title: "오보케 협곡 유람선",
                        type: "ship",
                        location: "Oboke Gorge"
                    },
                    {
                        time: "12:30",
                        title: "이야 덩굴다리 & 이야소바 점심",
                        type: "bridge",
                        location: "Iya Kazurabashi Bridge"
                    },
                    {
                        time: "17:00",
                        title: "이야 온천 케이블카 노천탕",
                        type: "sparkles",
                        location: "Hotel Iya Onsen"
                    }
                ]
            },
            {
                title: "도쿠시마성 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "도쿠시마성 박물관 & 센슈카쿠 정원",
                        type: "building-2",
                        location: "Tokushima Castle Museum"
                    },
                    {
                        time: "13:00",
                        title: "역앞 스다치 · 와산본 기념품",
                        type: "gift",
                        location: "Tokushima Station"
                    },
                    {
                        time: "16:00",
                        title: "도쿠시마 아와오도리 공항 이동",
                        type: "plane",
                        location: "Tokushima Awaodori Airport"
                    }
                ]
            }
        ]
    },
    yonago: {
        id: "yonago",
        city: "Yonago (Tottori)",
        country: "Japan",
        summary: "사카이미나토 요괴거리와 돗토리 사구 낙타 산책, 다이센 산기슭 목장까지 산인 해안을 달리는 요나고 베이스 템플릿입니다.",
        footer: "Yonago is the quiet base for dunes, yokai, and a sacred mountain.",
        heroImage: "assets/heroes/yonago.jpg",
        heroPosition: "center center",
        accent: "#854D0E",
        accentRgb: "133, 77, 14",
        ink: "#2F2415",
        inkRgb: "47, 36, 21",
        overlayTop: "rgba(47, 36, 21, 0.30)",
        overlayBottom: "rgba(22, 17, 10, 0.84)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 35.4281,
            longitude: 133.3311
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 13,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "砂丘行きのバスはどこから出ますか？",
                pron: "사큐유키노 바스와 도코카라 데마스카",
                meaning: "사구행 버스는 어디서 출발하나요?"
            },
            {
                text: "ラクダに乗れますか？",
                pron: "라쿠다니 노레마스카",
                meaning: "낙타를 탈 수 있나요? (돗토리 사구)"
            },
            {
                text: "妖怪スタンプ帳をください",
                pron: "요카이 스탄푸쵸오 쿠다사이",
                meaning: "요괴 스탬프 수첩 주세요 (미즈키 시게루 로드)"
            },
            {
                text: "松葉ガニはありますか？",
                pron: "마츠바가니와 아리마스카",
                meaning: "마쓰바가니(대게) 있나요? (겨울 별미)"
            },
            {
                text: "二十世紀梨をください",
                pron: "니줏세이키나시오 쿠다사이",
                meaning: "20세기 배 주세요 (돗토리 특산)"
            },
            {
                text: "だんだん",
                pron: "단단",
                meaning: "고맙습니다 (산인 지방 사투리)"
            }
        ],
        itineraryTemplate: [
            {
                title: "사카이미나토 요괴거리",
                activities: [
                    {
                        time: "10:00",
                        title: "미즈키 시게루 로드 요괴 동상 산책",
                        type: "camera",
                        location: "Mizuki Shigeru Road"
                    },
                    {
                        time: "13:00",
                        title: "미즈키 시게루 기념관 & 항구 해산물 점심",
                        type: "building-2",
                        location: "Mizuki Shigeru Museum"
                    },
                    {
                        time: "18:00",
                        title: "카이케 온천 해변 노을",
                        type: "sun",
                        location: "Kaike Onsen"
                    }
                ]
            },
            {
                title: "돗토리 사구",
                activities: [
                    {
                        time: "09:30",
                        title: "돗토리 사구 & 낙타 체험",
                        type: "sun",
                        location: "Tottori Sand Dunes"
                    },
                    {
                        time: "12:30",
                        title: "모래 미술관",
                        type: "palette",
                        location: "Tottori Sand Museum"
                    },
                    {
                        time: "17:30",
                        title: "가로이치 수산시장 해산물 저녁",
                        type: "utensils-crossed",
                        location: "Karoichi"
                    }
                ]
            },
            {
                title: "다이센",
                activities: [
                    {
                        time: "09:30",
                        title: "다이센지 & 오가미야마 신사 참배길",
                        type: "landmark",
                        location: "Daisenji Temple"
                    },
                    {
                        time: "12:30",
                        title: "마키바 미루쿠노사토 목장 점심",
                        type: "coffee",
                        location: "Daisen Makiba Milk no Sato"
                    },
                    {
                        time: "17:00",
                        title: "가기카케 고개 다이센 남벽 노을",
                        type: "binoculars",
                        location: "Kagikake Pass"
                    }
                ]
            },
            {
                title: "요나고 시내 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "요나고성터 전망",
                        type: "binoculars",
                        location: "Yonago Castle Ruins"
                    },
                    {
                        time: "12:30",
                        title: "요나고역 20세기 배 · 기념품",
                        type: "gift",
                        location: "Yonago Station"
                    },
                    {
                        time: "15:30",
                        title: "요나고 기타로 공항 이동",
                        type: "plane",
                        location: "Yonago Kitaro Airport"
                    }
                ]
            }
        ]
    },
    kanazawa: {
        id: "kanazawa",
        city: "Kanazawa",
        country: "Japan",
        summary: "겐로쿠엔 아침 산책과 오미초시장 해산물, 히가시차야 금박 골목, 시라카와고 당일치기까지 담은 가가 백만석 템플릿입니다.",
        footer: "Kanazawa keeps gold leaf, rain, and old tea houses in perfect order.",
        heroImage: "assets/heroes/kanazawa.jpg",
        heroImagePortrait: 'assets/heroes/kanazawa-portrait.jpg',
        heroPosition: "center center",
        accent: "#6B21A8",
        accentRgb: "107, 33, 168",
        ink: "#2A1B3D",
        inkRgb: "42, 27, 61",
        overlayTop: "rgba(42, 27, 61, 0.34)",
        overlayBottom: "rgba(16, 11, 26, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 36.5613,
            longitude: 136.6562
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 9,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "金箔ソフトをください",
                pron: "킨파쿠소후토오 쿠다사이",
                meaning: "금박 소프트아이스크림 주세요"
            },
            {
                text: "海鮮丼をお願いします",
                pron: "카이센동오 오네가이시마스",
                meaning: "해산물 덮밥 주세요 (오미초 시장)"
            },
            {
                text: "白川郷行きのバスを予約したいです",
                pron: "시라카와고유키노 바스오 요야쿠시타이데스",
                meaning: "시라카와고행 버스를 예약하고 싶어요"
            },
            {
                text: "お茶屋の中は見学できますか？",
                pron: "오챠야노 나카와 켄가쿠 데키마스카",
                meaning: "찻집(오차야) 내부를 둘러볼 수 있나요? (히가시차야)"
            },
            {
                text: "旬の魚はどれですか？",
                pron: "슌노 사카나와 도레데스카",
                meaning: "제철 생선은 어느 것인가요?"
            },
            {
                text: "弁当忘れても傘忘れるな",
                pron: "벤토 와스레테모 카사 와스레루나",
                meaning: "도시락은 잊어도 우산은 잊지 마라 (비 많은 가나자와 속담)"
            }
        ],
        itineraryTemplate: [
            {
                title: "겐로쿠엔 & 21세기 미술관",
                activities: [
                    {
                        time: "09:30",
                        title: "겐로쿠엔 & 가나자와성 산책",
                        type: "trees",
                        location: "Kenrokuen Garden"
                    },
                    {
                        time: "13:00",
                        title: "21세기 미술관 스위밍 풀",
                        type: "palette",
                        location: "21st Century Museum of Contemporary Art, Kanazawa"
                    },
                    {
                        time: "18:00",
                        title: "가타마치 가가 요리 저녁",
                        type: "utensils-crossed",
                        location: "Katamachi"
                    }
                ]
            },
            {
                title: "히가시차야 & 오미초",
                activities: [
                    {
                        time: "09:00",
                        title: "오미초 시장 해산물 아침",
                        type: "store",
                        location: "Omicho Market"
                    },
                    {
                        time: "12:30",
                        title: "히가시차야 거리 금박 소프트",
                        type: "camera",
                        location: "Higashi Chaya District"
                    },
                    {
                        time: "18:00",
                        title: "가즈에마치 차야 골목 저녁 산책",
                        type: "moon-star",
                        location: "Kazuemachi Chaya District"
                    }
                ]
            },
            {
                title: "시라카와고 당일치기",
                activities: [
                    {
                        time: "10:30",
                        title: "시라카와고 갓쇼즈쿠리 마을",
                        type: "landmark",
                        location: "Shirakawa-go"
                    },
                    {
                        time: "13:00",
                        title: "와다 하우스 & 향토 점심",
                        type: "building-2",
                        location: "Wada House"
                    },
                    {
                        time: "16:00",
                        title: "시로야마 전망대 전경",
                        type: "binoculars",
                        location: "Shiroyama Viewpoint"
                    }
                ]
            },
            {
                title: "나가마치 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "나가마치 무사 저택 거리",
                        type: "landmark",
                        location: "Nagamachi Samurai District"
                    },
                    {
                        time: "12:30",
                        title: "가나자와역 쓰즈미몬 & 기념품",
                        type: "gift",
                        location: "Kanazawa Station"
                    },
                    {
                        time: "15:30",
                        title: "고마쓰 공항 이동",
                        type: "plane",
                        location: "Komatsu Airport"
                    }
                ]
            }
        ]
    },
    sendai: {
        id: "sendai",
        city: "Sendai",
        country: "Japan",
        summary: "마쓰시마 섬 유람과 자오 오카마, 아키우 온천, 규탄 정식까지 도호쿠의 관문을 느긋하게 도는 센다이 템플릿입니다.",
        footer: "Sendai is a city of trees: pine islands, crater lakes, and grilled beef tongue.",
        heroImage: "assets/heroes/sendai.jpg",
        heroImagePortrait: 'assets/heroes/sendai-portrait.jpg',
        heroPosition: "center center",
        accent: "#059630",
        accentRgb: "5, 150, 48",
        ink: "#064E3B",
        inkRgb: "6, 78, 59",
        overlayTop: "rgba(6, 78, 59, 0.38)",
        overlayBottom: "rgba(6, 30, 24, 0.90)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 38.2682,
            longitude: 140.8694
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 9,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "牛タン定食をください",
                pron: "규탄 테이쇼쿠오 쿠다사이",
                meaning: "규탄 정식 주세요"
            },
            {
                text: "ずんだ餅はありますか？",
                pron: "즌다모치와 아리마스카",
                meaning: "즌다모치 있나요?"
            },
            {
                text: "遊覧船は何時に出ますか？",
                pron: "유란센와 난지니 데마스카",
                meaning: "유람선은 몇 시에 출발하나요?"
            },
            {
                text: "温泉に入りたいです",
                pron: "온센니 하이리타이데스",
                meaning: "온천에 들어가고 싶어요"
            },
            {
                text: "樹氷は見えますか？",
                pron: "주효와 미에마스카",
                meaning: "수빙(스노몬스터)이 보이나요?"
            },
            {
                text: "荷物を預けられますか？",
                pron: "니모츠오 아즈케라레마스카",
                meaning: "짐을 맡길 수 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "센다이 시내 & 아오바",
                activities: [
                    {
                        time: "10:00",
                        title: "즈이호덴 다테 마사무네 영묘",
                        type: "landmark",
                        location: "Zuihoden"
                    },
                    {
                        time: "13:00",
                        title: "이치반초 규탄 정식 점심",
                        type: "utensils-crossed",
                        location: "Ichibancho, Sendai"
                    },
                    {
                        time: "17:00",
                        title: "아오바성터 마사무네 기마상 전망",
                        type: "binoculars",
                        location: "Sendai Castle Ruins"
                    }
                ]
            },
            {
                title: "마쓰시마",
                activities: [
                    {
                        time: "09:30",
                        title: "마쓰시마만 섬 순회 유람선",
                        type: "ship",
                        location: "Matsushima Bay"
                    },
                    {
                        time: "12:30",
                        title: "즈이간지 & 고다이도",
                        type: "landmark",
                        location: "Zuiganji Temple"
                    },
                    {
                        time: "16:00",
                        title: "후쿠우라지마 붉은 다리 산책",
                        type: "bridge",
                        location: "Fukuura Island"
                    }
                ]
            },
            {
                title: "자오 & 아키우 온천",
                activities: [
                    {
                        time: "09:00",
                        title: "자오 오카마 분화구 호수",
                        type: "camera",
                        location: "Zao Okama"
                    },
                    {
                        time: "13:30",
                        title: "아키우 대폭포",
                        type: "trees",
                        location: "Akiu Great Falls"
                    },
                    {
                        time: "17:00",
                        title: "아키우 온천 당일 입욕",
                        type: "sun",
                        location: "Akiu Onsen"
                    }
                ]
            },
            {
                title: "아침시장 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "센다이 아사이치 아침시장",
                        type: "store",
                        location: "Sendai Asaichi Market"
                    },
                    {
                        time: "12:30",
                        title: "에스팔 센다이 즌다 기념품",
                        type: "gift",
                        location: "S-PAL Sendai"
                    },
                    {
                        time: "15:30",
                        title: "센다이 공항 이동",
                        type: "plane",
                        location: "Sendai Airport"
                    }
                ]
            }
        ]
    },
    niigata: {
        id: "niigata",
        city: "Niigata",
        country: "Japan",
        summary: "반다이바시 강바람과 후루마치 골목, 사도섬 당일치기와 니가타 사케 시음을 엮은 일본해 쌀·술 템플릿입니다.",
        footer: "Niigata runs on rice, sake, and the slow gray light of the Sea of Japan.",
        heroImage: "assets/heroes/niigata.jpg",
        heroImagePortrait: 'assets/heroes/niigata-portrait.jpg',
        heroPosition: "center center",
        accent: "#1D4ED8",
        accentRgb: "29, 78, 216",
        ink: "#172554",
        inkRgb: "23, 37, 84",
        overlayTop: "rgba(23, 37, 84, 0.40)",
        overlayBottom: "rgba(10, 18, 44, 0.90)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 37.9162,
            longitude: 139.0364
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 10,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "日本酒の飲み比べをお願いします",
                pron: "니혼슈노 노미쿠라베오 오네가이시마스",
                meaning: "사케 시음 세트 부탁합니다"
            },
            {
                text: "辛口はどれですか？",
                pron: "카라쿠치와 도레데스카",
                meaning: "드라이한 술은 어느 것인가요?"
            },
            {
                text: "フェリーの切符を買いたいです",
                pron: "페리노 킷푸오 카이타이데스",
                meaning: "페리 표를 사고 싶어요"
            },
            {
                text: "海は荒れていますか？",
                pron: "우미와 아레테이마스카",
                meaning: "바다가 거친가요?"
            },
            {
                text: "たらい舟に乗れますか？",
                pron: "타라이부네니 노레마스카",
                meaning: "대야배를 탈 수 있나요?"
            },
            {
                text: "ご飯のおかわりできますか？",
                pron: "고항노 오카와리 데키마스카",
                meaning: "밥 리필 되나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "반다이 & 니가타역",
                activities: [
                    {
                        time: "10:00",
                        title: "반다이바시 시나노강 산책",
                        type: "bridge",
                        location: "Bandai Bridge"
                    },
                    {
                        time: "12:30",
                        title: "피아 반다이 해산물 점심",
                        type: "utensils-crossed",
                        location: "Pia Bandai"
                    },
                    {
                        time: "17:30",
                        title: "폰슈칸 사케 시음 코인",
                        type: "store",
                        location: "Ponshukan Niigata Station"
                    }
                ]
            },
            {
                title: "사도섬 당일치기",
                activities: [
                    {
                        time: "08:00",
                        title: "제트포일 타고 사도 료쓰항",
                        type: "map",
                        location: "Ryotsu Port"
                    },
                    {
                        time: "11:00",
                        title: "사도 금산 광산 갱도",
                        type: "landmark",
                        location: "Sado Gold Mine"
                    },
                    {
                        time: "14:00",
                        title: "오기 타라이부네 대야배 체험",
                        type: "ship",
                        location: "Ogi Port"
                    }
                ]
            },
            {
                title: "미나토 & 후루마치",
                activities: [
                    {
                        time: "10:00",
                        title: "니가타시 역사박물관 미나토피아",
                        type: "building-2",
                        location: "Niigata City History Museum Minatopia"
                    },
                    {
                        time: "13:00",
                        title: "토키 멧세 전망실",
                        type: "building",
                        location: "Toki Messe"
                    },
                    {
                        time: "18:00",
                        title: "후루마치 골목 이자카야 저녁",
                        type: "moon-star",
                        location: "Furumachi, Niigata"
                    }
                ]
            },
            {
                title: "양조장 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "이마요 쓰카사 양조장 견학",
                        type: "store",
                        location: "Imayo Tsukasa Sake Brewery"
                    },
                    {
                        time: "12:30",
                        title: "니가타역 코시히카리 기념품",
                        type: "gift",
                        location: "Niigata Station"
                    },
                    {
                        time: "15:30",
                        title: "니가타 공항 이동",
                        type: "plane",
                        location: "Niigata Airport"
                    }
                ]
            }
        ]
    },
    aomori: {
        id: "aomori",
        city: "Aomori",
        country: "Japan",
        summary: "네부타의 집 와랏세와 히로사키성, 오이라세 계류와 핫코다 로프웨이를 잇는 혼슈 최북단 축제·자연 템플릿입니다.",
        footer: "Aomori is Nebuta light, apple orchards, and a stream that never stops.",
        heroImage: "assets/heroes/aomori.jpg",
        heroImagePortrait: 'assets/heroes/aomori-portrait.jpg',
        heroPosition: "center center",
        accent: "#E11DC9",
        accentRgb: "225, 29, 201",
        ink: "#4C0519",
        inkRgb: "76, 5, 25",
        overlayTop: "rgba(76, 5, 25, 0.38)",
        overlayBottom: "rgba(30, 8, 16, 0.90)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 40.8246,
            longitude: 140.7406
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 11,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "りんごジュースをください",
                pron: "링고 쥬스오 쿠다사이",
                meaning: "사과 주스 주세요"
            },
            {
                text: "ねぶたはいつですか？",
                pron: "네부타와 이츠데스카",
                meaning: "네부타 축제는 언제인가요?"
            },
            {
                text: "桜は咲いていますか？",
                pron: "사쿠라와 사이테이마스카",
                meaning: "벚꽃이 피었나요?"
            },
            {
                text: "遊歩道はどこから始まりますか？",
                pron: "유호도와 도코카라 하지마리마스카",
                meaning: "산책로는 어디서 시작하나요?"
            },
            {
                text: "ロープウェイは動いていますか？",
                pron: "로프웨이와 우고이테이마스카",
                meaning: "로프웨이 운행하나요?"
            },
            {
                text: "のっけ丼のチケットをください",
                pron: "놋케동노 치켓토오 쿠다사이",
                meaning: "놋케동 티켓 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "아오모리 항구 & 시내",
                activities: [
                    {
                        time: "10:00",
                        title: "네부타의 집 와랏세",
                        type: "sparkles",
                        location: "Nebuta Museum WA-RASSE"
                    },
                    {
                        time: "12:30",
                        title: "후루카와 시장 놋케동 점심",
                        type: "utensils-crossed",
                        location: "Aomori Gyosai Center"
                    },
                    {
                        time: "17:30",
                        title: "아스팜 전망대와 아오모리만 노을",
                        type: "building",
                        location: "ASPAM"
                    }
                ]
            },
            {
                title: "히로사키",
                activities: [
                    {
                        time: "09:30",
                        title: "히로사키성 & 공원",
                        type: "landmark",
                        location: "Hirosaki Castle"
                    },
                    {
                        time: "12:30",
                        title: "후지타 기념정원 애플파이",
                        type: "coffee",
                        location: "Fujita Memorial Japanese Garden"
                    },
                    {
                        time: "15:30",
                        title: "쓰가루한 네푸타무라 샤미센",
                        type: "music",
                        location: "Tsugaru-han Neputa Village"
                    }
                ]
            },
            {
                title: "핫코다 & 오이라세",
                activities: [
                    {
                        time: "09:00",
                        title: "핫코다 로프웨이 산정",
                        type: "binoculars",
                        location: "Hakkoda Ropeway"
                    },
                    {
                        time: "12:30",
                        title: "오이라세 계류 트레킹",
                        type: "trees",
                        location: "Oirase Gorge"
                    },
                    {
                        time: "15:30",
                        title: "도와다 호수 유람선",
                        type: "ship",
                        location: "Lake Towada"
                    }
                ]
            },
            {
                title: "미술관 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "아오모리 현립미술관 아오모리견",
                        type: "palette",
                        location: "Aomori Museum of Art"
                    },
                    {
                        time: "13:00",
                        title: "A-팩토리 사과 시드르 기념품",
                        type: "gift",
                        location: "A-FACTORY"
                    },
                    {
                        time: "15:30",
                        title: "아오모리 공항 이동",
                        type: "plane",
                        location: "Aomori Airport"
                    }
                ]
            }
        ]
    },
    hakodate: {
        id: "hakodate",
        city: "Hakodate",
        country: "Japan",
        summary: "하코다테산 백만 불 야경, 아침시장 카이센동, 별 모양 고료카쿠와 모토마치 언덕, 유노카와 온천까지 담은 항구 도시 템플릿입니다.",
        footer: "Hakodate is a harbor of slopes, church bells, and a night view worth the ropeway.",
        heroImage: "assets/heroes/hakodate.jpg",
        heroImagePortrait: 'assets/heroes/hakodate-portrait.jpg',
        heroPosition: "center center",
        accent: "#4D3AED",
        accentRgb: "77, 58, 237",
        ink: "#2E1065",
        inkRgb: "46, 16, 101",
        overlayTop: "rgba(46, 16, 101, 0.40)",
        overlayBottom: "rgba(18, 10, 40, 0.92)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 41.7687,
            longitude: 140.7291
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 12,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "夜景は何時からきれいですか？",
                pron: "야케이와 난지카라 키레이데스카",
                meaning: "야경은 몇 시부터 예쁜가요?"
            },
            {
                text: "往復券をください",
                pron: "오후쿠켄오 쿠다사이",
                meaning: "왕복권 주세요"
            },
            {
                text: "イカ釣りを体験できますか？",
                pron: "이카츠리오 타이켄 데키마스카",
                meaning: "오징어 낚시 체험할 수 있나요?"
            },
            {
                text: "市電の一日券はありますか？",
                pron: "시덴노 이치니치켄와 아리마스카",
                meaning: "노면전차 1일권 있나요?"
            },
            {
                text: "足湯は無料ですか？",
                pron: "아시유와 무료데스카",
                meaning: "족욕탕은 무료인가요?"
            },
            {
                text: "風が強いですね",
                pron: "카제가 츠요이데스네",
                meaning: "바람이 세네요"
            }
        ],
        itineraryTemplate: [
            {
                title: "모토마치 & 하코다테산",
                activities: [
                    {
                        time: "10:00",
                        title: "하치만자카 언덕과 항구 전망",
                        type: "map",
                        location: "Hachimanzaka Slope"
                    },
                    {
                        time: "13:00",
                        title: "구 하코다테구 공회당",
                        type: "building-2",
                        location: "Old Public Hall of Hakodate Ward"
                    },
                    {
                        time: "18:00",
                        title: "하코다테산 로프웨이 야경",
                        type: "moon-star",
                        location: "Mount Hakodate"
                    }
                ]
            },
            {
                title: "아침시장 & 고료카쿠",
                activities: [
                    {
                        time: "08:00",
                        title: "하코다테 아침시장 카이센동",
                        type: "utensils-crossed",
                        location: "Hakodate Morning Market"
                    },
                    {
                        time: "12:30",
                        title: "고료카쿠 공원 별 모양 성곽",
                        type: "landmark",
                        location: "Goryokaku Park"
                    },
                    {
                        time: "17:00",
                        title: "고료카쿠 타워 전망",
                        type: "tower-control",
                        location: "Goryokaku Tower"
                    }
                ]
            },
            {
                title: "유노카와 온천",
                activities: [
                    {
                        time: "10:00",
                        title: "트라피스틴 수도원",
                        type: "landmark",
                        location: "Trappistine Convent"
                    },
                    {
                        time: "13:00",
                        title: "열대식물원 온천 원숭이",
                        type: "trees",
                        location: "Hakodate Tropical Botanical Garden"
                    },
                    {
                        time: "17:00",
                        title: "유노카와 온천 족욕과 료칸",
                        type: "sun",
                        location: "Yunokawa Onsen"
                    }
                ]
            },
            {
                title: "베이 에어리어 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "가네모리 아카렌가 창고 쇼핑",
                        type: "shopping-bag",
                        location: "Kanemori Red Brick Warehouse"
                    },
                    {
                        time: "12:30",
                        title: "하코다테역 기념품",
                        type: "gift",
                        location: "Hakodate Station"
                    },
                    {
                        time: "15:30",
                        title: "하코다테 공항 이동",
                        type: "plane",
                        location: "Hakodate Airport"
                    }
                ]
            }
        ]
    },
    shizuoka: {
        id: "shizuoka",
        city: "Shizuoka",
        country: "Japan",
        summary: "미호노마쓰바라 너머 후지산, 니혼다이라와 구노잔 동조궁, 아타미 온천 바다까지 차밭 향으로 묶은 시즈오카 템플릿입니다.",
        footer: "Shizuoka is tea fields, a pine-lined shore, and Fuji on a clear morning.",
        heroImage: "assets/heroes/shizuoka.jpg",
        heroImagePortrait: 'assets/heroes/shizuoka-portrait.jpg',
        heroPosition: "center center",
        accent: "#3DA30D",
        accentRgb: "61, 163, 13",
        ink: "#1A2E05",
        inkRgb: "26, 46, 5",
        overlayTop: "rgba(26, 46, 5, 0.36)",
        overlayBottom: "rgba(14, 24, 6, 0.90)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 34.9756,
            longitude: 138.3828
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 7,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "富士山は見えますか？",
                pron: "후지산와 미에마스카",
                meaning: "후지산이 보이나요?"
            },
            {
                text: "お茶の試飲はできますか？",
                pron: "오차노 시인와 데키마스카",
                meaning: "차 시음할 수 있나요?"
            },
            {
                text: "桜えびの丼はありますか？",
                pron: "사쿠라에비노 동와 아리마스카",
                meaning: "사쿠라 새우 덮밥 있나요?"
            },
            {
                text: "今日は晴れますか？",
                pron: "쿄와 하레마스카",
                meaning: "오늘 맑을까요?"
            },
            {
                text: "静岡おでんをください",
                pron: "시즈오카 오뎅오 쿠다사이",
                meaning: "시즈오카 오뎅 주세요"
            },
            {
                text: "新幹線の切符はここで買えますか？",
                pron: "신칸센노 킷푸와 코코데 카에마스카",
                meaning: "신칸센 표를 여기서 살 수 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "시즈오카 시내",
                activities: [
                    {
                        time: "10:00",
                        title: "시즈오카 센겐 신사",
                        type: "landmark",
                        location: "Shizuoka Sengen Shrine"
                    },
                    {
                        time: "13:00",
                        title: "아오바 오뎅 거리 점심",
                        type: "utensils-crossed",
                        location: "Aoba Oden Street"
                    },
                    {
                        time: "17:00",
                        title: "순푸성 공원 산책",
                        type: "trees",
                        location: "Sunpu Castle Park"
                    }
                ]
            },
            {
                title: "니혼다이라 & 미호",
                activities: [
                    {
                        time: "09:30",
                        title: "니혼다이라 유메 테라스 후지산 전망",
                        type: "binoculars",
                        location: "Nihondaira Yume Terrace"
                    },
                    {
                        time: "12:00",
                        title: "로프웨이로 구노잔 동조궁",
                        type: "landmark",
                        location: "Kunozan Toshogu Shrine"
                    },
                    {
                        time: "16:00",
                        title: "미호노마쓰바라 소나무 해변",
                        type: "camera",
                        location: "Miho no Matsubara"
                    }
                ]
            },
            {
                title: "아타미 & 이즈",
                activities: [
                    {
                        time: "09:30",
                        title: "MOA 미술관",
                        type: "palette",
                        location: "MOA Museum of Art"
                    },
                    {
                        time: "13:00",
                        title: "아타미 선비치 해변 산책",
                        type: "sun",
                        location: "Atami Sun Beach"
                    },
                    {
                        time: "17:00",
                        title: "아타미성 전망과 온천",
                        type: "building",
                        location: "Atami Castle"
                    }
                ]
            },
            {
                title: "토로 유적 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "토로 유적 야요이 마을",
                        type: "map",
                        location: "Toro Ruins"
                    },
                    {
                        time: "12:30",
                        title: "시즈오카역 차 & 우나기파이 기념품",
                        type: "gift",
                        location: "Shizuoka Station"
                    },
                    {
                        time: "15:30",
                        title: "후지산 시즈오카 공항 이동",
                        type: "plane",
                        location: "Mount Fuji Shizuoka Airport"
                    }
                ]
            }
        ]
    },
    ishigaki: {
        id: "ishigaki",
        city: "Ishigaki",
        country: "Japan",
        summary: "가비라만 글라스보트, 다케토미 물소 수레, 이리오모테 정글 크루즈와 유글레나몰 저녁까지 담은 야에야마 섬 템플릿입니다.",
        footer: "Ishigaki is coral blue, water buffalo carts, and a sky full of stars.",
        heroImage: "assets/heroes/ishigaki.jpg",
        heroPosition: "center center",
        accent: "#0D3594",
        accentRgb: "13, 53, 148",
        ink: "#134E4A",
        inkRgb: "19, 78, 74",
        overlayTop: "rgba(19, 78, 74, 0.36)",
        overlayBottom: "rgba(8, 36, 36, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 24.3448,
            longitude: 124.1572
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 14,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "グラスボートに乗りたいです",
                pron: "구라스보토니 노리타이데스",
                meaning: "글라스보트를 타고 싶어요"
            },
            {
                text: "水牛車は何時ですか？",
                pron: "스이규샤와 난지데스카",
                meaning: "물소 수레는 몇 시인가요?"
            },
            {
                text: "石垣牛をください",
                pron: "이시가키규오 쿠다사이",
                meaning: "이시가키규 주세요"
            },
            {
                text: "シュノーケルを借りられますか？",
                pron: "슈노케루오 카리라레마스카",
                meaning: "스노클을 빌릴 수 있나요?"
            },
            {
                text: "船は欠航ですか？",
                pron: "후네와 켓코데스카",
                meaning: "배가 결항인가요?"
            },
            {
                text: "星空ツアーはありますか？",
                pron: "호시조라 츠아와 아리마스카",
                meaning: "별 관측 투어 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "이시가키 시내",
                activities: [
                    {
                        time: "10:30",
                        title: "유글레나몰 아케이드 구경",
                        type: "shopping-bag",
                        location: "Euglena Mall"
                    },
                    {
                        time: "13:00",
                        title: "이시가키 공설시장 점심",
                        type: "utensils-crossed",
                        location: "Ishigaki Public Market"
                    },
                    {
                        time: "17:30",
                        title: "반나 공원 전망대 노을",
                        type: "camera",
                        location: "Banna Park"
                    }
                ]
            },
            {
                title: "가비라만 & 북부",
                activities: [
                    {
                        time: "09:30",
                        title: "가비라만 글라스보트",
                        type: "ship",
                        location: "Kabira Bay"
                    },
                    {
                        time: "12:30",
                        title: "요네하라 해변 스노클",
                        type: "sun",
                        location: "Yonehara Beach"
                    },
                    {
                        time: "16:30",
                        title: "다마토리자키 전망대",
                        type: "binoculars",
                        location: "Tamatorizaki Observatory"
                    }
                ]
            },
            {
                title: "이리오모테 & 다케토미",
                activities: [
                    {
                        time: "08:30",
                        title: "이리오모테 우라우치강 정글 크루즈",
                        type: "trees",
                        location: "Urauchi River"
                    },
                    {
                        time: "12:30",
                        title: "유부섬 물소 수레",
                        type: "map",
                        location: "Yubu Island"
                    },
                    {
                        time: "16:00",
                        title: "다케토미 마을 붉은 기와 골목",
                        type: "landmark",
                        location: "Taketomi Island"
                    }
                ]
            },
            {
                title: "후사키 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "후사키 비치 아침 산책",
                        type: "sun",
                        location: "Fusaki Beach"
                    },
                    {
                        time: "12:30",
                        title: "730 코트 기념품",
                        type: "gift",
                        location: "730 COURT"
                    },
                    {
                        time: "15:30",
                        title: "신이시가키 공항 이동",
                        type: "plane",
                        location: "New Ishigaki Airport"
                    }
                ]
            }
        ]
    },
    miyakojima: {
        id: "miyakojima",
        city: "Miyakojima",
        country: "Japan",
        summary: "요나하마에하마의 미야코 블루, 이라부대교와 시모지시마 17END, 이케마대교 드라이브를 잇는 렌터카 섬 템플릿입니다.",
        footer: "Miyakojima is one long bridge into blue, best driven with the windows down.",
        heroImage: "assets/heroes/miyakojima.jpg",
        heroImagePortrait: 'assets/heroes/miyakojima-portrait.jpg',
        heroPosition: "center center",
        accent: "#0891B2",
        accentRgb: "8, 145, 178",
        ink: "#164E63",
        inkRgb: "22, 78, 99",
        overlayTop: "rgba(22, 78, 99, 0.34)",
        overlayBottom: "rgba(8, 34, 48, 0.88)",
        timeZone: "Asia/Tokyo",
        weather: {
            latitude: 24.8055,
            longitude: 125.2811
        },
        currency: {
            code: "JPY",
            symbol: "¥",
            locale: "ja-JP"
        },
        startOffsetDays: 13,
        phraseLabel: "日本語",
        phrases: [
            {
                text: "宮古そばをください",
                pron: "미야코 소바오 쿠다사이",
                meaning: "미야코 소바 주세요"
            },
            {
                text: "ウミガメはいますか？",
                pron: "우미가메와 이마스카",
                meaning: "바다거북이 있나요?"
            },
            {
                text: "マンゴーはありますか？",
                pron: "망고와 아리마스카",
                meaning: "망고 있나요?"
            },
            {
                text: "ガソリンスタンドはどこですか？",
                pron: "가소린스탄도와 도코데스카",
                meaning: "주유소가 어디인가요?"
            },
            {
                text: "夕日は何時ごろですか？",
                pron: "유히와 난지고로데스카",
                meaning: "노을은 몇 시쯤인가요?"
            },
            {
                text: "波は高いですか？",
                pron: "나미와 타카이데스카",
                meaning: "파도가 높나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "요나하마에하마 & 남서부",
                activities: [
                    {
                        time: "10:00",
                        title: "요나하마에하마 비치",
                        type: "sun",
                        location: "Yonaha Maehama Beach"
                    },
                    {
                        time: "13:00",
                        title: "미야코지마 공설시장 미야코소바",
                        type: "utensils-crossed",
                        location: "Miyakojima Public Market"
                    },
                    {
                        time: "16:30",
                        title: "구리마 대교 & 류구성 전망대",
                        type: "binoculars",
                        location: "Ryugujo Observatory"
                    }
                ]
            },
            {
                title: "이라부 & 시모지시마",
                activities: [
                    {
                        time: "09:30",
                        title: "이라부 대교 드라이브",
                        type: "bridge",
                        location: "Irabu Bridge"
                    },
                    {
                        time: "12:30",
                        title: "도리이케 연못 산책",
                        type: "map",
                        location: "Toriike Pond"
                    },
                    {
                        time: "17:00",
                        title: "17END 활주로 끝 노을",
                        type: "camera",
                        location: "17END"
                    }
                ]
            },
            {
                title: "이케마 & 동부",
                activities: [
                    {
                        time: "09:30",
                        title: "스나야마 비치",
                        type: "sun",
                        location: "Sunayama Beach"
                    },
                    {
                        time: "12:00",
                        title: "이케마 대교 드라이브",
                        type: "bridge",
                        location: "Ikema Bridge"
                    },
                    {
                        time: "16:00",
                        title: "히가시헨나자키 등대",
                        type: "camera",
                        location: "Cape Higashi-Hennazaki"
                    }
                ]
            },
            {
                title: "히라라 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "하리미즈 우타키 참배",
                        type: "landmark",
                        location: "Harimizu Utaki"
                    },
                    {
                        time: "12:30",
                        title: "시마노에키 미야코 기념품",
                        type: "gift",
                        location: "Shima no Eki Miyako"
                    },
                    {
                        time: "15:30",
                        title: "미야코 공항 이동",
                        type: "plane",
                        location: "Miyako Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/rome-portrait.jpg',
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
    milan: {
        id: "milan",
        city: "Milan",
        country: "Italy",
        summary: "두오모와 갤러리아, 최후의 만찬, 브레라, 나빌리 아페리티보에 코모 호수 당일치기를 더한 밀라노 템플릿입니다.",
        footer: "Milan works when marble spires, fashion, and aperitivo hour share one evening.",
        heroImage: "assets/heroes/milan.jpg",
        heroImagePortrait: 'assets/heroes/milan-portrait.jpg',
        heroPosition: "center center",
        accent: "#E045B8",
        accentRgb: "224, 69, 184",
        ink: "#3B0716",
        inkRgb: "59, 7, 22",
        overlayTop: "rgba(59, 7, 22, 0.40)",
        overlayBottom: "rgba(24, 12, 16, 0.90)",
        timeZone: "Europe/Rome",
        weather: {
            latitude: 45.4642,
            longitude: 9.19
        },
        currency: {
            code: "EUR",
            symbol: "€",
            locale: "it-IT"
        },
        startOffsetDays: 12,
        phraseLabel: "Italiano",
        phrases: [
            {
                text: "Buongiorno",
                pron: "[부온조르노]",
                meaning: "좋은 아침입니다 / 안녕하세요"
            },
            {
                text: "Un cappuccino al banco",
                pron: "[운 카푸치노 알 반코]",
                meaning: "바에서 카푸치노 한 잔이요 (서서 마시면 더 저렴)"
            },
            {
                text: "Quanto costa?",
                pron: "[콴토 코스타]",
                meaning: "얼마예요?"
            },
            {
                text: "Ho una prenotazione",
                pron: "[오 우나 프레노타치오네]",
                meaning: "예약했어요"
            },
            {
                text: "Facciamo l’aperitivo?",
                pron: "[파치아모 라페리티보]",
                meaning: "아페리티보 할까요?"
            },
            {
                text: "Posso pagare con la carta?",
                pron: "[포쏘 파가레 콘 라 카르타]",
                meaning: "카드로 결제할 수 있어요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "두오모 & 갤러리아",
                activities: [
                    {
                        time: "09:30",
                        title: "두오모 대성당 & 옥상 테라스",
                        type: "landmark",
                        location: "Duomo di Milano"
                    },
                    {
                        time: "13:00",
                        title: "갤러리아 비토리오 에마누엘레 2세",
                        type: "shopping-bag",
                        location: "Galleria Vittorio Emanuele II"
                    },
                    {
                        time: "18:30",
                        title: "라 스칼라 극장",
                        type: "music",
                        location: "Teatro alla Scala"
                    }
                ]
            },
            {
                title: "최후의 만찬 & 스포르체스코",
                activities: [
                    {
                        time: "09:00",
                        title: "최후의 만찬 관람 (예약 필수)",
                        type: "palette",
                        location: "Santa Maria delle Grazie"
                    },
                    {
                        time: "12:30",
                        title: "스포르체스코 성",
                        type: "landmark",
                        location: "Castello Sforzesco"
                    },
                    {
                        time: "17:30",
                        title: "셈피오네 공원 & 평화의 문",
                        type: "trees",
                        location: "Parco Sempione"
                    }
                ]
            },
            {
                title: "브레라 & 콰드릴라테로",
                activities: [
                    {
                        time: "10:00",
                        title: "브레라 미술관",
                        type: "building-2",
                        location: "Pinacoteca di Brera"
                    },
                    {
                        time: "13:00",
                        title: "브레라 골목 런치",
                        type: "coffee",
                        location: "Via Brera"
                    },
                    {
                        time: "17:00",
                        title: "몬테 나폴레오네 쇼핑 거리",
                        type: "shopping-bag",
                        location: "Via Monte Napoleone"
                    }
                ]
            },
            {
                title: "코모 호수 당일치기",
                activities: [
                    {
                        time: "09:00",
                        title: "코모 호숫가 산책",
                        type: "map",
                        location: "Lake Como"
                    },
                    {
                        time: "12:30",
                        title: "벨라지오 페리 & 런치",
                        type: "ship",
                        location: "Bellagio"
                    },
                    {
                        time: "17:00",
                        title: "브루나테 푸니콜라레 전망",
                        type: "binoculars",
                        location: "Funicolare Como-Brunate"
                    }
                ]
            },
            {
                title: "나빌리 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "나빌리 운하 산책",
                        type: "map",
                        location: "Navigli"
                    },
                    {
                        time: "12:30",
                        title: "나빌리오 그란데 런치",
                        type: "utensils-crossed",
                        location: "Naviglio Grande"
                    },
                    {
                        time: "16:00",
                        title: "말펜사 공항 이동",
                        type: "plane",
                        location: "Milan Malpensa Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/barcelona-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/singapore-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/malaysia-portrait.jpg',
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
    brunei: {
        id: "brunei",
        city: "Bandar Seri Begawan",
        country: "Brunei",
        summary: "술탄 오마르 알리 사이푸딘 모스크와 캄퐁아예르 수상마을, 제임 아스르 모스크, 울루템부롱 정글까지 3박 4일 브루나이 템플릿입니다.",
        footer: "Brunei is gold domes, quiet water villages, and rainforest an hour away.",
        heroImage: "assets/heroes/brunei.jpg",
        heroImagePortrait: 'assets/heroes/brunei-portrait.jpg',
        heroPosition: "center center",
        accent: "#C8EA08",
        accentRgb: "200, 234, 8",
        ink: "#14322A",
        inkRgb: "20, 50, 42",
        overlayTop: "rgba(20, 50, 42, 0.36)",
        overlayBottom: "rgba(10, 28, 24, 0.86)",
        timeZone: "Asia/Brunei",
        weather: {
            latitude: 4.9031,
            longitude: 114.9398
        },
        currency: {
            code: "BND",
            symbol: "B$",
            locale: "ms-BN"
        },
        startOffsetDays: 13,
        phraseLabel: "Bahasa Melayu",
        phrases: [
            {
                text: "Assalamualaikum",
                pron: "앗살라무알라이쿰",
                meaning: "안녕하세요 (평안을 빕니다)"
            },
            {
                text: "Maaf, saya tak faham",
                pron: "마아프 사야 탁 파함",
                meaning: "죄송해요, 이해 못 했어요"
            },
            {
                text: "Boleh saya ambil gambar?",
                pron: "볼레 사야 암빌 감바르",
                meaning: "사진 찍어도 될까요?"
            },
            {
                text: "Bila masjid dibuka?",
                pron: "빌라 마스짓 디부카",
                meaning: "모스크는 언제 열어요?"
            },
            {
                text: "Satu teh tarik",
                pron: "사투 테 타릭",
                meaning: "테 타릭(밀크티) 한 잔 주세요"
            },
            {
                text: "Sama-sama",
                pron: "사마사마",
                meaning: "천만에요"
            }
        ],
        itineraryTemplate: [
            {
                title: "시내 모스크 & 박물관",
                activities: [
                    {
                        time: "10:00",
                        title: "술탄 오마르 알리 사이푸딘 모스크",
                        type: "landmark",
                        location: "Sultan Omar Ali Saifuddien Mosque"
                    },
                    {
                        time: "13:00",
                        title: "로열 레갈리아 박물관",
                        type: "building",
                        location: "Royal Regalia Museum"
                    },
                    {
                        time: "18:30",
                        title: "가동 야시장 저녁",
                        type: "utensils-crossed",
                        location: "Gadong Night Market"
                    }
                ]
            },
            {
                title: "캄퐁아예르 & 브루나이강",
                activities: [
                    {
                        time: "09:30",
                        title: "캄퐁아예르 수상마을 보트",
                        type: "ship",
                        location: "Kampong Ayer"
                    },
                    {
                        time: "13:30",
                        title: "제임 아스르 하사날 볼키아 모스크",
                        type: "landmark",
                        location: "Jame' Asr Hassanil Bolkiah Mosque"
                    },
                    {
                        time: "17:00",
                        title: "브루나이강 코주부원숭이 크루즈",
                        type: "binoculars",
                        location: "Brunei River"
                    }
                ]
            },
            {
                title: "울루 템부롱",
                activities: [
                    {
                        time: "07:00",
                        title: "울루 템부롱 캐노피 워크",
                        type: "trees",
                        location: "Ulu Temburong National Park"
                    },
                    {
                        time: "13:00",
                        title: "템부롱 대교 경유 귀환",
                        type: "bridge",
                        location: "Temburong Bridge"
                    },
                    {
                        time: "17:30",
                        title: "무아라 비치 선셋",
                        type: "sun",
                        location: "Muara Beach"
                    }
                ]
            },
            {
                title: "제루동 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "제루동 파크",
                        type: "sparkles",
                        location: "Jerudong Park Playground"
                    },
                    {
                        time: "12:30",
                        title: "엠파이어 브루나이 애프터눈 티",
                        type: "coffee",
                        location: "The Empire Brunei"
                    },
                    {
                        time: "16:30",
                        title: "브루나이 공항 이동",
                        type: "plane",
                        location: "Brunei International Airport"
                    }
                ]
            }
        ]
    },
    'kota-kinabalu': {
        id: "kota-kinabalu",
        city: "Kota Kinabalu",
        country: "Malaysia",
        summary: "탄중아루 선셋과 사피·마누칸 섬 호핑, 마리마리 문화마을, 키나발루 공원과 필리피노 야시장까지 4박 5일 코타키나발루 템플릿입니다.",
        footer: "Kota Kinabalu ends every day the same way, with the sun sinking into the South China Sea.",
        heroImage: "assets/heroes/kota-kinabalu.jpg",
        heroImagePortrait: 'assets/heroes/kota-kinabalu-portrait.jpg',
        heroPosition: "center center",
        accent: "#FF7043",
        accentRgb: "255, 112, 67",
        ink: "#2A1C33",
        inkRgb: "42, 28, 51",
        overlayTop: "rgba(42, 28, 51, 0.32)",
        overlayBottom: "rgba(22, 14, 30, 0.84)",
        timeZone: "Asia/Kuala_Lumpur",
        weather: {
            latitude: 5.9804,
            longitude: 116.0735
        },
        currency: {
            code: "MYR",
            symbol: "RM",
            locale: "ms-MY"
        },
        startOffsetDays: 11,
        phraseLabel: "Bahasa Melayu",
        phrases: [
            {
                text: "Selamat petang",
                pron: "슬라맛 프탕",
                meaning: "좋은 오후예요 / 좋은 저녁이에요"
            },
            {
                text: "Boleh kurang sikit?",
                pron: "볼레 쿠랑 시킷",
                meaning: "조금만 깎아 주실래요?"
            },
            {
                text: "Sedap!",
                pron: "스답",
                meaning: "맛있어요!"
            },
            {
                text: "Di mana jeti?",
                pron: "디 마나 제티",
                meaning: "선착장이 어디예요?"
            },
            {
                text: "Saya nak ini",
                pron: "사야 낙 이니",
                meaning: "이걸로 할게요"
            },
            {
                text: "Jumpa lagi",
                pron: "줌파 라기",
                meaning: "또 만나요"
            }
        ],
        itineraryTemplate: [
            {
                title: "시내 & 탄중아루",
                activities: [
                    {
                        time: "10:00",
                        title: "시그널힐 전망대",
                        type: "binoculars",
                        location: "Signal Hill Observatory Tower"
                    },
                    {
                        time: "13:00",
                        title: "가야 스트리트 점심",
                        type: "utensils-crossed",
                        location: "Gaya Street"
                    },
                    {
                        time: "18:00",
                        title: "탄중아루 선셋",
                        type: "sun",
                        location: "Tanjung Aru Beach"
                    }
                ]
            },
            {
                title: "툰쿠 압둘 라만 해양공원",
                activities: [
                    {
                        time: "09:30",
                        title: "사피섬 스노클링",
                        type: "binoculars",
                        location: "Sapi Island"
                    },
                    {
                        time: "13:30",
                        title: "마누칸섬 점심 & 해변",
                        type: "sun",
                        location: "Manukan Island"
                    },
                    {
                        time: "19:00",
                        title: "필리피노 야시장 씨푸드",
                        type: "utensils-crossed",
                        location: "Filipino Market"
                    }
                ]
            },
            {
                title: "마리마리 & 반딧불",
                activities: [
                    {
                        time: "09:30",
                        title: "마리마리 문화마을",
                        type: "palette",
                        location: "Mari Mari Cultural Village"
                    },
                    {
                        time: "14:00",
                        title: "수리아 사바 쇼핑",
                        type: "shopping-bag",
                        location: "Suria Sabah Shopping Mall"
                    },
                    {
                        time: "17:30",
                        title: "클리아스강 코주부원숭이 · 반딧불 크루즈",
                        type: "ship",
                        location: "Klias River"
                    }
                ]
            },
            {
                title: "키나발루 공원",
                activities: [
                    {
                        time: "08:30",
                        title: "키나발루 공원 트레일",
                        type: "trees",
                        location: "Kinabalu Park"
                    },
                    {
                        time: "12:30",
                        title: "데사 목장 우유 · 아이스크림",
                        type: "coffee",
                        location: "Desa Dairy Farm"
                    },
                    {
                        time: "16:00",
                        title: "포링 온천",
                        type: "sparkles",
                        location: "Poring Hot Spring"
                    }
                ]
            },
            {
                title: "마지막 쇼핑 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "수상 모스크 (시티 모스크)",
                        type: "landmark",
                        location: "Kota Kinabalu City Mosque"
                    },
                    {
                        time: "12:30",
                        title: "이마고 몰 점심 & 쇼핑",
                        type: "shopping-cart",
                        location: "Imago Shopping Mall"
                    },
                    {
                        time: "16:00",
                        title: "코타키나발루 공항 이동",
                        type: "plane",
                        location: "Kota Kinabalu International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/jakarta-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/bali-portrait.jpg',
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
    manado: {
        id: "manado",
        city: "Manado",
        country: "Indonesia",
        summary: "부나켄 스노클링·다이빙과 톰모혼 시장, 린노우 호수, 마하우 화산, 미나하사 고원을 4박 5일로 엮은 마나도 템플릿입니다.",
        footer: "Manado is reef walls, highland lakes, and food that does not hold back on chili.",
        heroImage: "assets/heroes/manado.jpg",
        heroPosition: "center center",
        accent: "#005596",
        accentRgb: "0, 85, 150",
        ink: "#0F2F3A",
        inkRgb: "15, 47, 58",
        overlayTop: "rgba(15, 47, 58, 0.34)",
        overlayBottom: "rgba(8, 26, 34, 0.84)",
        timeZone: "Asia/Makassar",
        weather: {
            latitude: 1.4748,
            longitude: 124.8421
        },
        currency: {
            code: "IDR",
            symbol: "Rp",
            locale: "id-ID"
        },
        startOffsetDays: 14,
        phraseLabel: "Bahasa Indonesia",
        phrases: [
            {
                text: "Selamat siang",
                pron: "슬라맛 시앙",
                meaning: "안녕하세요 (낮 인사)"
            },
            {
                text: "Jangan terlalu pedas",
                pron: "장안 뜨를랄루 쁘다스",
                meaning: "너무 맵지 않게 해주세요"
            },
            {
                text: "Mau snorkeling ke Bunaken",
                pron: "마우 스노클링 끄 부나켄",
                meaning: "부나켄으로 스노클링 가고 싶어요"
            },
            {
                text: "Enak sekali!",
                pron: "에낙 스깔리",
                meaning: "정말 맛있어요!"
            },
            {
                text: "Bisa pakai kartu?",
                pron: "비사 빠까이 까르뚜",
                meaning: "카드 결제 되나요?"
            },
            {
                text: "Sampai jumpa",
                pron: "삼빠이 줌빠",
                meaning: "또 만나요"
            }
        ],
        itineraryTemplate: [
            {
                title: "마나도 시내",
                activities: [
                    {
                        time: "10:00",
                        title: "예수 축복상",
                        type: "landmark",
                        location: "Christ Blessing Monument"
                    },
                    {
                        time: "13:00",
                        title: "마나도 타운 스퀘어 점심",
                        type: "shopping-cart",
                        location: "Manado Town Square"
                    },
                    {
                        time: "18:00",
                        title: "불러바드 선셋 (마나도 투아 조망)",
                        type: "sun",
                        location: "Boulevard Manado"
                    }
                ]
            },
            {
                title: "부나켄 해양공원",
                activities: [
                    {
                        time: "08:00",
                        title: "부나켄 스노클링 · 다이빙",
                        type: "binoculars",
                        location: "Bunaken Island"
                    },
                    {
                        time: "12:30",
                        title: "시라덴 섬 점심 & 해변",
                        type: "sun",
                        location: "Siladen Island"
                    },
                    {
                        time: "16:00",
                        title: "마나도 투아 화산섬 조망",
                        type: "camera",
                        location: "Manado Tua Island"
                    }
                ]
            },
            {
                title: "톰모혼 고원",
                activities: [
                    {
                        time: "08:30",
                        title: "마하우 화산 분화구 트레킹",
                        type: "trees",
                        location: "Mount Mahawu"
                    },
                    {
                        time: "11:30",
                        title: "톰모혼 전통시장",
                        type: "store",
                        location: "Tomohon Traditional Market"
                    },
                    {
                        time: "14:30",
                        title: "린노우 호수 카페",
                        type: "coffee",
                        location: "Lake Linow"
                    }
                ]
            },
            {
                title: "미나하사 고원",
                activities: [
                    {
                        time: "09:00",
                        title: "워루가 석관 유적",
                        type: "landmark",
                        location: "Waruga Sawangan"
                    },
                    {
                        time: "12:30",
                        title: "톤다노 호수 점심",
                        type: "utensils-crossed",
                        location: "Lake Tondano"
                    },
                    {
                        time: "15:30",
                        title: "부킷 카시 전망",
                        type: "camera",
                        location: "Bukit Kasih"
                    }
                ]
            },
            {
                title: "마지막 산책 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "반 힌 키옹 사원",
                        type: "landmark",
                        location: "Ban Hin Kiong Temple"
                    },
                    {
                        time: "12:30",
                        title: "클라퍼타르트 선물",
                        type: "gift",
                        location: "Christine Klappertaart"
                    },
                    {
                        time: "15:30",
                        title: "삼 라툴랑이 공항 이동",
                        type: "plane",
                        location: "Sam Ratulangi International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/bangkok-portrait.jpg',
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
    'phnom-penh': {
        id: "phnom-penh",
        city: "Phnom Penh",
        country: "Cambodia",
        summary: "왕궁과 실버파고다, 왓프놈, 센트럴마켓, 뚜올슬렝과 킬링필드, 리버사이드를 차분히 잇는 프놈펜 템플릿입니다.",
        footer: "Phnom Penh asks for a quiet morning, an honest afternoon, and a riverside evening.",
        heroImage: "assets/heroes/phnom-penh.jpg",
        heroImagePortrait: 'assets/heroes/phnom-penh-portrait.jpg',
        heroPosition: "center center",
        accent: "#BE123C",
        accentRgb: "190, 18, 60",
        ink: "#2E0A14",
        inkRgb: "46, 10, 20",
        overlayTop: "rgba(46, 10, 20, 0.44)",
        overlayBottom: "rgba(24, 8, 14, 0.90)",
        timeZone: "Asia/Phnom_Penh",
        weather: {
            latitude: 11.5564,
            longitude: 104.9282
        },
        currency: {
            code: "USD",
            symbol: "$",
            locale: "en-US"
        },
        startOffsetDays: 7,
        phraseLabel: "ខ្មែរ",
        phrases: [
            {
                text: "សួស្តី",
                pron: "[수어스데이]",
                meaning: "안녕하세요"
            },
            {
                text: "អរគុណ",
                pron: "[어꾼]",
                meaning: "감사합니다"
            },
            {
                text: "ថ្លៃប៉ុន្មាន?",
                pron: "[틀라이 뽄만]",
                meaning: "얼마예요?"
            },
            {
                text: "ឆ្ងាញ់ណាស់",
                pron: "[츠응안 나]",
                meaning: "아주 맛있어요"
            },
            {
                text: "សុំទោស",
                pron: "[솜 또]",
                meaning: "죄송합니다 / 실례합니다"
            },
            {
                text: "បង្គន់នៅឯណា?",
                pron: "[벙꼰 너우 아에 나]",
                meaning: "화장실이 어디예요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "왕궁 & 리버사이드",
                activities: [
                    {
                        time: "09:00",
                        title: "왕궁 & 실버파고다",
                        type: "landmark",
                        location: "Royal Palace Phnom Penh"
                    },
                    {
                        time: "13:00",
                        title: "캄보디아 국립박물관",
                        type: "palette",
                        location: "National Museum of Cambodia"
                    },
                    {
                        time: "18:30",
                        title: "시소왓 키 강변 산책 & 저녁",
                        type: "moon-star",
                        location: "Sisowath Quay"
                    }
                ]
            },
            {
                title: "왓프놈 & 센트럴마켓",
                activities: [
                    {
                        time: "09:30",
                        title: "왓프놈",
                        type: "landmark",
                        location: "Wat Phnom"
                    },
                    {
                        time: "12:30",
                        title: "센트럴마켓 (프사 트마이)",
                        type: "store",
                        location: "Central Market Phnom Penh"
                    },
                    {
                        time: "18:30",
                        title: "바삭 레인 골목 저녁",
                        type: "utensils-crossed",
                        location: "Bassac Lane"
                    }
                ]
            },
            {
                title: "역사의 하루 — 뚜올슬렝 & 킬링필드",
                activities: [
                    {
                        time: "09:00",
                        title: "뚜올슬렝 학살 박물관",
                        type: "landmark",
                        location: "Tuol Sleng Genocide Museum"
                    },
                    {
                        time: "13:30",
                        title: "쯔응아익 킬링필드",
                        type: "landmark",
                        location: "Choeung Ek Genocidal Center"
                    },
                    {
                        time: "18:00",
                        title: "러시안 마켓 저녁",
                        type: "shopping-bag",
                        location: "Russian Market Phnom Penh"
                    }
                ]
            },
            {
                title: "마지막 사원 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "왓 우날롬",
                        type: "landmark",
                        location: "Wat Ounalom"
                    },
                    {
                        time: "12:30",
                        title: "이온몰 점심 & 마지막 쇼핑",
                        type: "shopping-cart",
                        location: "AEON Mall Phnom Penh"
                    },
                    {
                        time: "16:30",
                        title: "테초 공항 이동",
                        type: "plane",
                        location: "Techo International Airport"
                    }
                ]
            }
        ]
    },
    vientiane: {
        id: "vientiane",
        city: "Vientiane",
        country: "Laos",
        summary: "탓루앙과 빠뚜사이, 왓시사켓, 메콩 야시장에 고속철 방비엥 당일 여행을 더한 비엔티안 템플릿입니다.",
        footer: "Vientiane keeps a slow riverside pace, with a fast train to the mountains.",
        heroImage: "assets/heroes/vientiane.jpg",
        heroImagePortrait: 'assets/heroes/vientiane-portrait.jpg',
        heroPosition: "center center",
        accent: "#F4DE30",
        accentRgb: "244, 222, 48",
        ink: "#3B2A05",
        inkRgb: "59, 42, 5",
        overlayTop: "rgba(59, 42, 5, 0.44)",
        overlayBottom: "rgba(28, 20, 6, 0.90)",
        timeZone: "Asia/Vientiane",
        weather: {
            latitude: 17.9757,
            longitude: 102.6331
        },
        currency: {
            code: "LAK",
            symbol: "₭",
            locale: "lo-LA"
        },
        startOffsetDays: 8,
        phraseLabel: "ລາວ",
        phrases: [
            {
                text: "ສະບາຍດີ",
                pron: "[사바이디]",
                meaning: "안녕하세요"
            },
            {
                text: "ຂອບໃຈ",
                pron: "[컵 짜이]",
                meaning: "감사합니다"
            },
            {
                text: "ເທົ່າໃດ",
                pron: "[타오 다이]",
                meaning: "얼마예요?"
            },
            {
                text: "ແຊບຫຼາຍ",
                pron: "[쌥 라이]",
                meaning: "아주 맛있어요"
            },
            {
                text: "ບໍ່ເປັນຫຍັງ",
                pron: "[버 뻰 냥]",
                meaning: "괜찮아요"
            },
            {
                text: "ຫ້ອງນ້ຳຢູ່ໃສ",
                pron: "[홍 남 유 사이]",
                meaning: "화장실이 어디예요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "탓루앙 & 빠뚜사이",
                activities: [
                    {
                        time: "09:30",
                        title: "탓루앙 황금 탑",
                        type: "landmark",
                        location: "Pha That Luang"
                    },
                    {
                        time: "13:00",
                        title: "빠뚜사이 개선문",
                        type: "landmark",
                        location: "Patuxai"
                    },
                    {
                        time: "18:30",
                        title: "메콩 강변 야시장",
                        type: "sparkles",
                        location: "Vientiane Night Market"
                    }
                ]
            },
            {
                title: "올드타운 사원 & 남푸",
                activities: [
                    {
                        time: "09:30",
                        title: "왓시사켓",
                        type: "landmark",
                        location: "Wat Si Saket"
                    },
                    {
                        time: "13:00",
                        title: "조마 베이커리 카페 점심",
                        type: "coffee",
                        location: "Joma Bakery Cafe"
                    },
                    {
                        time: "18:30",
                        title: "남푸 분수 광장 저녁",
                        type: "moon-star",
                        location: "Nam Phou Fountain"
                    }
                ]
            },
            {
                title: "방비엥 당일 (고속철)",
                activities: [
                    {
                        time: "07:30",
                        title: "라오-중국 고속철 출발",
                        type: "train-front",
                        location: "Vientiane Railway Station"
                    },
                    {
                        time: "11:00",
                        title: "블루라군 물놀이",
                        type: "trees",
                        location: "Blue Lagoon Vang Vieng"
                    },
                    {
                        time: "15:00",
                        title: "남송강 카약 & 카르스트 풍경",
                        type: "ship",
                        location: "Nam Song River"
                    }
                ]
            },
            {
                title: "붓다파크 & 이동",
                activities: [
                    {
                        time: "09:00",
                        title: "붓다파크 (씨엥쿠안)",
                        type: "landmark",
                        location: "Buddha Park"
                    },
                    {
                        time: "12:30",
                        title: "딸랏싸오 시장 점심 & 기념품",
                        type: "store",
                        location: "Talat Sao Morning Market"
                    },
                    {
                        time: "16:30",
                        title: "왓따이 공항 이동",
                        type: "plane",
                        location: "Wattay International Airport"
                    }
                ]
            }
        ]
    },
    'chiang-mai': {
        id: "chiang-mai",
        city: "Chiang Mai",
        country: "Thailand",
        summary: "올드시티 사원, 도이수텝, 님만해민 카페, 코끼리 보호구역과 도이인타논까지 란나의 산과 절을 느리게 걷는 치앙마이 템플릿입니다.",
        footer: "Chiang Mai slows down for temples, mountains, and one more coffee.",
        heroImage: "assets/heroes/chiang-mai.jpg",
        heroImagePortrait: 'assets/heroes/chiang-mai-portrait.jpg',
        heroPosition: "center center",
        accent: "#A14E07",
        accentRgb: "161, 78, 7",
        ink: "#2A1A0E",
        inkRgb: "42, 26, 14",
        overlayTop: "rgba(42, 26, 14, 0.42)",
        overlayBottom: "rgba(24, 16, 10, 0.90)",
        timeZone: "Asia/Bangkok",
        weather: {
            latitude: 18.7883,
            longitude: 98.9853
        },
        currency: {
            code: "THB",
            symbol: "฿",
            locale: "th-TH"
        },
        startOffsetDays: 11,
        phraseLabel: "ไทย",
        phrases: [
            {
                text: "ไปที่นี่",
                pron: "[빠이 티 니]",
                meaning: "여기로 가 주세요"
            },
            {
                text: "อร่อยมาก",
                pron: "[아로이 막]",
                meaning: "아주 맛있어요"
            },
            {
                text: "ลดหน่อยได้ไหม",
                pron: "[롯 너이 다이 마이]",
                meaning: "조금 깎아 주실 수 있나요?"
            },
            {
                text: "ไม่เป็นไร",
                pron: "[마이 뻰 라이]",
                meaning: "괜찮아요"
            },
            {
                text: "ขอน้ำเปล่า",
                pron: "[커 남 쁠라오]",
                meaning: "생수 주세요"
            },
            {
                text: "ถ่ายรูปได้ไหม",
                pron: "[타이 룹 다이 마이]",
                meaning: "사진 찍어도 되나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "올드시티 사원",
                activities: [
                    {
                        time: "09:30",
                        title: "왓 체디루앙",
                        type: "landmark",
                        location: "Wat Chedi Luang"
                    },
                    {
                        time: "12:30",
                        title: "카오소이 점심",
                        type: "utensils-crossed",
                        location: "Khao Soi Khun Yai"
                    },
                    {
                        time: "18:00",
                        title: "타페 게이트 & 선데이 워킹 스트리트",
                        type: "sparkles",
                        location: "Tha Phae Gate"
                    }
                ]
            },
            {
                title: "도이수텝 & 님만해민",
                activities: [
                    {
                        time: "08:00",
                        title: "왓 프라탓 도이수텝",
                        type: "landmark",
                        location: "Wat Phra That Doi Suthep"
                    },
                    {
                        time: "13:00",
                        title: "님만해민 카페 거리",
                        type: "coffee",
                        location: "Nimmanhaemin Road"
                    },
                    {
                        time: "18:30",
                        title: "원 님만 저녁",
                        type: "shopping-bag",
                        location: "One Nimman"
                    }
                ]
            },
            {
                title: "매림 & 코끼리 보호구역",
                activities: [
                    {
                        time: "07:30",
                        title: "코끼리 보호구역 방문",
                        type: "trees",
                        location: "Elephant Nature Park"
                    },
                    {
                        time: "14:30",
                        title: "매사 폭포",
                        type: "trees",
                        location: "Mae Sa Waterfall"
                    },
                    {
                        time: "19:00",
                        title: "나이트 바자",
                        type: "sparkles",
                        location: "Chiang Mai Night Bazaar"
                    }
                ]
            },
            {
                title: "도이인타논",
                activities: [
                    {
                        time: "08:00",
                        title: "도이인타논 정상 & 운해",
                        type: "trees",
                        location: "Doi Inthanon National Park"
                    },
                    {
                        time: "12:30",
                        title: "와치라탄 폭포",
                        type: "camera",
                        location: "Wachirathan Waterfall"
                    },
                    {
                        time: "18:30",
                        title: "우아라이 새터데이 워킹 스트리트",
                        type: "shopping-bag",
                        location: "Wualai Walking Street"
                    }
                ]
            },
            {
                title: "마지막 시장 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "와로롯 시장 아침",
                        type: "store",
                        location: "Warorot Market"
                    },
                    {
                        time: "12:30",
                        title: "왓 시수판 은사원",
                        type: "landmark",
                        location: "Wat Sri Suphan"
                    },
                    {
                        time: "16:30",
                        title: "치앙마이 공항 이동",
                        type: "plane",
                        location: "Chiang Mai International Airport"
                    }
                ]
            }
        ]
    },
    phuket: {
        id: "phuket",
        city: "Phuket",
        country: "Thailand",
        summary: "빠통과 올드타운, 빅부다와 프롬텝곶 노을, 팡아만 투어까지 안다만 해의 결을 따라 도는 푸켓 템플릿입니다.",
        footer: "Phuket is loudest in Patong and quietest at Promthep Cape.",
        heroImage: "assets/heroes/phuket.jpg",
        heroImagePortrait: 'assets/heroes/phuket-portrait.jpg',
        heroPosition: "center center",
        accent: "#0316A1",
        accentRgb: "3, 22, 161",
        ink: "#0B1E3A",
        inkRgb: "11, 30, 58",
        overlayTop: "rgba(11, 30, 58, 0.44)",
        overlayBottom: "rgba(8, 18, 36, 0.90)",
        timeZone: "Asia/Bangkok",
        weather: {
            latitude: 7.8804,
            longitude: 98.3923
        },
        currency: {
            code: "THB",
            symbol: "฿",
            locale: "th-TH"
        },
        startOffsetDays: 13,
        phraseLabel: "ไทย",
        phrases: [
            {
                text: "ทะเลอยู่ทางไหน",
                pron: "[탈레 유 탕 나이]",
                meaning: "바다는 어느 쪽인가요?"
            },
            {
                text: "เผ็ดนิดหน่อย",
                pron: "[펫 닛 너이]",
                meaning: "조금만 맵게 해주세요"
            },
            {
                text: "ขอเมนู",
                pron: "[커 메누]",
                meaning: "메뉴판 주세요"
            },
            {
                text: "แพงไป",
                pron: "[팽 빠이]",
                meaning: "너무 비싸요"
            },
            {
                text: "ช่วยด้วย",
                pron: "[추어이 두어이]",
                meaning: "도와주세요"
            },
            {
                text: "ไปสนามบิน",
                pron: "[빠이 사남빈]",
                meaning: "공항으로 가 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "빠통",
                activities: [
                    {
                        time: "10:00",
                        title: "빠통 비치",
                        type: "sun",
                        location: "Patong Beach"
                    },
                    {
                        time: "13:00",
                        title: "정실론 쇼핑 & 점심",
                        type: "shopping-bag",
                        location: "Jungceylon Shopping Center"
                    },
                    {
                        time: "19:00",
                        title: "방라 로드 밤거리",
                        type: "lightbulb",
                        location: "Bangla Road"
                    }
                ]
            },
            {
                title: "푸켓 올드타운",
                activities: [
                    {
                        time: "09:30",
                        title: "탈랑 로드 시노-포르투갈 거리",
                        type: "camera",
                        location: "Thalang Road"
                    },
                    {
                        time: "12:30",
                        title: "올드타운 로컬 점심",
                        type: "utensils-crossed",
                        location: "One Chun Cafe & Restaurant"
                    },
                    {
                        time: "18:00",
                        title: "카오랑 힐 전망 노을",
                        type: "binoculars",
                        location: "Khao Rang Hill Viewpoint"
                    }
                ]
            },
            {
                title: "남부 — 빅부다 & 프롬텝곶",
                activities: [
                    {
                        time: "09:30",
                        title: "빅부다",
                        type: "landmark",
                        location: "Big Buddha Phuket"
                    },
                    {
                        time: "13:00",
                        title: "라와이 해산물 시장 점심",
                        type: "utensils-crossed",
                        location: "Rawai Seafood Market"
                    },
                    {
                        time: "17:30",
                        title: "프롬텝곶 선셋",
                        type: "camera",
                        location: "Promthep Cape"
                    }
                ]
            },
            {
                title: "팡아만 투어",
                activities: [
                    {
                        time: "08:00",
                        title: "제임스본드 섬 보트 투어",
                        type: "ship",
                        location: "James Bond Island"
                    },
                    {
                        time: "12:30",
                        title: "꼬 빠니 수상마을 점심",
                        type: "utensils-crossed",
                        location: "Koh Panyee"
                    },
                    {
                        time: "18:30",
                        title: "카론 비치 노을 저녁",
                        type: "moon-star",
                        location: "Karon Beach"
                    }
                ]
            },
            {
                title: "카타 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "카타 비치 마지막 수영",
                        type: "sun",
                        location: "Kata Beach"
                    },
                    {
                        time: "12:30",
                        title: "센트럴 푸켓 마지막 쇼핑",
                        type: "shopping-cart",
                        location: "Central Phuket"
                    },
                    {
                        time: "17:00",
                        title: "푸켓 공항 이동",
                        type: "plane",
                        location: "Phuket International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/dubai-portrait.jpg',
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
    'abu-dhabi': {
        id: "abu-dhabi",
        city: "Abu Dhabi",
        country: "United Arab Emirates",
        summary: "셰이크 자이드 모스크와 카스르 알 와탄, 루브르 아부다비, 야스 섬 페라리 월드와 코르니슈를 묶은 아부다비 템플릿입니다.",
        footer: "Abu Dhabi is white marble, gold light, and calm turquoise water.",
        heroImage: "assets/heroes/abu-dhabi.jpg",
        heroImagePortrait: 'assets/heroes/abu-dhabi-portrait.jpg',
        heroPosition: "center center",
        accent: "#C9A227",
        accentRgb: "201, 162, 39",
        ink: "#422006",
        inkRgb: "66, 32, 6",
        overlayTop: "rgba(66, 32, 6, 0.36)",
        overlayBottom: "rgba(28, 16, 6, 0.88)",
        timeZone: "Asia/Dubai",
        weather: {
            latitude: 24.4539,
            longitude: 54.3773
        },
        currency: {
            code: "AED",
            symbol: "د.إ",
            locale: "ar-AE"
        },
        startOffsetDays: 8,
        phraseLabel: "العربية",
        phrases: [
            {
                text: "هلا",
                pron: "할라",
                meaning: "안녕하세요 (걸프식 인사)"
            },
            {
                text: "مع السلامة",
                pron: "마아 살라마",
                meaning: "안녕히 가세요"
            },
            {
                text: "كم السعر؟",
                pron: "캄 앗시으르",
                meaning: "가격이 얼마예요?"
            },
            {
                text: "من فضلك",
                pron: "민 파들락",
                meaning: "부탁합니다"
            },
            {
                text: "وين التاكسي؟",
                pron: "웨인 앗탁시",
                meaning: "택시 어디예요?"
            },
            {
                text: "ما شاء الله",
                pron: "마샤알라",
                meaning: "멋지네요 (감탄)"
            }
        ],
        itineraryTemplate: [
            {
                title: "그랜드 모스크 & 카스르 알 와탄",
                activities: [
                    {
                        time: "09:30",
                        title: "셰이크 자이드 그랜드 모스크",
                        type: "landmark",
                        location: "Sheikh Zayed Grand Mosque"
                    },
                    {
                        time: "13:30",
                        title: "카스르 알 와탄",
                        type: "building",
                        location: "Qasr Al Watan"
                    },
                    {
                        time: "18:00",
                        title: "에미리트 팰리스 골드 카푸치노",
                        type: "coffee",
                        location: "Emirates Palace"
                    }
                ]
            },
            {
                title: "사디야트 섬",
                activities: [
                    {
                        time: "10:00",
                        title: "루브르 아부다비",
                        type: "palette",
                        location: "Louvre Abu Dhabi"
                    },
                    {
                        time: "13:30",
                        title: "마나라트 알 사디야트 점심",
                        type: "building-2",
                        location: "Manarat Al Saadiyat"
                    },
                    {
                        time: "17:30",
                        title: "사디야트 비치 선셋",
                        type: "sun",
                        location: "Saadiyat Beach"
                    }
                ]
            },
            {
                title: "야스 섬",
                activities: [
                    {
                        time: "10:00",
                        title: "페라리 월드",
                        type: "ticket",
                        location: "Ferrari World Abu Dhabi"
                    },
                    {
                        time: "14:00",
                        title: "야스 몰 점심 & 쇼핑",
                        type: "shopping-cart",
                        location: "Yas Mall"
                    },
                    {
                        time: "18:30",
                        title: "야스 베이 워터프런트 야경",
                        type: "moon-star",
                        location: "Yas Bay Waterfront"
                    }
                ]
            },
            {
                title: "코르니슈 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "코르니슈 비치 산책",
                        type: "map",
                        location: "Corniche Beach"
                    },
                    {
                        time: "13:00",
                        title: "카스르 알 호슨 & 기념품",
                        type: "gift",
                        location: "Qasr Al Hosn"
                    },
                    {
                        time: "16:30",
                        title: "자이드 공항 이동",
                        type: "plane",
                        location: "Zayed International Airport"
                    }
                ]
            }
        ]
    },
    doha: {
        id: "doha",
        city: "Doha",
        country: "Qatar",
        summary: "수크 와키프와 이슬람 예술 박물관, 코르니슈, 카타라와 펄, 사막 사파리까지 묶은 도하 템플릿입니다.",
        footer: "Doha feels strongest when old souq lanterns and new skyline glass share one bay.",
        heroImage: "assets/heroes/doha.jpg",
        heroImagePortrait: 'assets/heroes/doha-portrait.jpg',
        heroPosition: "center center",
        accent: "#8D1B3D",
        accentRgb: "141, 27, 61",
        ink: "#4C0519",
        inkRgb: "76, 5, 25",
        overlayTop: "rgba(76, 5, 25, 0.40)",
        overlayBottom: "rgba(30, 6, 14, 0.90)",
        timeZone: "Asia/Qatar",
        weather: {
            latitude: 25.2854,
            longitude: 51.531
        },
        currency: {
            code: "QAR",
            symbol: "QR",
            locale: "ar-QA"
        },
        startOffsetDays: 7,
        phraseLabel: "العربية",
        phrases: [
            {
                text: "السلام عليكم",
                pron: "앗살라무 알라이쿰",
                meaning: "안녕하세요"
            },
            {
                text: "شكراً جزيلاً",
                pron: "슈크란 자질란",
                meaning: "정말 감사합니다"
            },
            {
                text: "بكم هذا؟",
                pron: "비캄 하다",
                meaning: "이거 얼마예요?"
            },
            {
                text: "لو سمحت",
                pron: "라우 사마흐트",
                meaning: "실례합니다 / 저기요"
            },
            {
                text: "وين سوق واقف؟",
                pron: "웨인 수크 와키프",
                meaning: "수크 와키프가 어디예요?"
            },
            {
                text: "لذيذ",
                pron: "라디드",
                meaning: "맛있어요"
            }
        ],
        itineraryTemplate: [
            {
                title: "코르니슈 & 수크 와키프",
                activities: [
                    {
                        time: "10:00",
                        title: "이슬람 예술 박물관",
                        type: "building-2",
                        location: "Museum of Islamic Art"
                    },
                    {
                        time: "13:30",
                        title: "코르니슈 산책 & MIA 파크",
                        type: "map",
                        location: "Doha Corniche"
                    },
                    {
                        time: "18:30",
                        title: "수크 와키프 저녁",
                        type: "store",
                        location: "Souq Waqif"
                    }
                ]
            },
            {
                title: "카타라 & 펄",
                activities: [
                    {
                        time: "10:00",
                        title: "카타라 문화마을",
                        type: "palette",
                        location: "Katara Cultural Village"
                    },
                    {
                        time: "13:30",
                        title: "펄 카타르 포르토 아라비아 점심",
                        type: "coffee",
                        location: "The Pearl-Qatar"
                    },
                    {
                        time: "18:30",
                        title: "루사일 대로 야경",
                        type: "moon-star",
                        location: "Lusail Boulevard"
                    }
                ]
            },
            {
                title: "국립박물관 & 사막 사파리",
                activities: [
                    {
                        time: "10:00",
                        title: "카타르 국립박물관 (사막 장미)",
                        type: "building",
                        location: "National Museum of Qatar"
                    },
                    {
                        time: "14:30",
                        title: "사막 사파리 & 내해 (코르 알 아다이드)",
                        type: "sun",
                        location: "Khor Al Adaid"
                    },
                    {
                        time: "19:30",
                        title: "사막 캠프 바비큐",
                        type: "utensils-crossed",
                        location: "Sealine Beach"
                    }
                ]
            },
            {
                title: "교육도시 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "카타르 국립도서관",
                        type: "library",
                        location: "Qatar National Library"
                    },
                    {
                        time: "13:00",
                        title: "므셰이레브 다운타운 점심 & 기념품",
                        type: "gift",
                        location: "Msheireb Downtown Doha"
                    },
                    {
                        time: "16:30",
                        title: "하마드 공항 이동",
                        type: "plane",
                        location: "Hamad International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/saudi-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/amsterdam-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/madrid-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/hong-kong-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/macau-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/sydney-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/perth-portrait.jpg',
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
    brisbane: {
        id: "brisbane",
        city: "Brisbane",
        country: "Australia",
        summary: "사우스뱅크, 스토리 브리지, 론파인 코알라, 마운트 쿠사 전망에 골드코스트 당일치기를 더한 브리즈번 템플릿입니다.",
        footer: "Brisbane works when river light, koalas, and a Gold Coast beach day stay easy.",
        heroImage: "assets/heroes/brisbane.jpg",
        heroImagePortrait: 'assets/heroes/brisbane-portrait.jpg',
        heroPosition: "center center",
        accent: "#A3E635",
        accentRgb: "163, 230, 53",
        ink: "#1A2E12",
        inkRgb: "26, 46, 18",
        overlayTop: "rgba(26, 46, 18, 0.38)",
        overlayBottom: "rgba(14, 26, 14, 0.90)",
        timeZone: "Australia/Brisbane",
        weather: {
            latitude: -27.4698,
            longitude: 153.0251
        },
        currency: {
            code: "AUD",
            symbol: "A$",
            locale: "en-AU"
        },
        startOffsetDays: 12,
        phraseLabel: "English",
        phrases: [
            {
                text: "Where do I tap on?",
                pron: "[웨어 두 아이 탭 온]",
                meaning: "교통카드 어디에 찍어요?"
            },
            {
                text: "Does the CityCat stop here?",
                pron: "[더즈 더 시티캣 스탑 히어]",
                meaning: "시티캣(페리) 여기 서요?"
            },
            {
                text: "This arvo works for me",
                pron: "[디스 아보 웍스 포 미]",
                meaning: "오늘 오후 괜찮아요 (호주식 표현)"
            },
            {
                text: "Can I hold a koala?",
                pron: "[캔 아이 홀드 어 코알라]",
                meaning: "코알라 안아볼 수 있어요?"
            },
            {
                text: "Do you sell sunscreen?",
                pron: "[두 유 셀 선스크린]",
                meaning: "선크림 팔아요?"
            },
            {
                text: "Ta, mate",
                pron: "[타 메이트]",
                meaning: "고마워요 (호주식 표현)"
            }
        ],
        itineraryTemplate: [
            {
                title: "사우스뱅크 & 시티",
                activities: [
                    {
                        time: "10:00",
                        title: "사우스뱅크 파크랜드 & 스트리츠 비치",
                        type: "sun",
                        location: "South Bank Parklands"
                    },
                    {
                        time: "13:00",
                        title: "퀸즐랜드 현대미술관(GOMA)",
                        type: "palette",
                        location: "Gallery of Modern Art Brisbane"
                    },
                    {
                        time: "18:00",
                        title: "휠 오브 브리즈번 & 강변 야경",
                        type: "sparkles",
                        location: "The Wheel of Brisbane"
                    }
                ]
            },
            {
                title: "스토리 브리지 & 뉴팜",
                activities: [
                    {
                        time: "09:30",
                        title: "스토리 브리지 어드벤처 클라임",
                        type: "bridge",
                        location: "Story Bridge"
                    },
                    {
                        time: "13:00",
                        title: "하워드 스미스 워브스 런치",
                        type: "utensils-crossed",
                        location: "Howard Smith Wharves"
                    },
                    {
                        time: "17:30",
                        title: "뉴팜 파크 & 브리즈번 파워하우스",
                        type: "trees",
                        location: "New Farm Park"
                    }
                ]
            },
            {
                title: "론파인 & 마운트 쿠사",
                activities: [
                    {
                        time: "09:30",
                        title: "론파인 코알라 보호구역",
                        type: "camera",
                        location: "Lone Pine Koala Sanctuary"
                    },
                    {
                        time: "13:30",
                        title: "마운트 쿠사 식물원",
                        type: "trees",
                        location: "Brisbane Botanic Gardens Mt Coot-tha"
                    },
                    {
                        time: "17:30",
                        title: "마운트 쿠사 전망대 선셋",
                        type: "binoculars",
                        location: "Mount Coot-tha Lookout"
                    }
                ]
            },
            {
                title: "골드코스트 당일치기",
                activities: [
                    {
                        time: "09:00",
                        title: "서퍼스 파라다이스 비치",
                        type: "sun",
                        location: "Surfers Paradise Beach"
                    },
                    {
                        time: "13:00",
                        title: "스카이포인트 전망대",
                        type: "tower-control",
                        location: "SkyPoint Observation Deck"
                    },
                    {
                        time: "17:00",
                        title: "버레이 헤즈 선셋",
                        type: "camera",
                        location: "Burleigh Heads"
                    }
                ]
            },
            {
                title: "퀸 스트리트 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "시티 보타닉 가든 산책",
                        type: "trees",
                        location: "City Botanic Gardens Brisbane"
                    },
                    {
                        time: "12:30",
                        title: "퀸 스트리트 몰 쇼핑",
                        type: "shopping-bag",
                        location: "Queen Street Mall"
                    },
                    {
                        time: "16:00",
                        title: "브리즈번 공항 이동",
                        type: "plane",
                        location: "Brisbane Airport"
                    }
                ]
            }
        ]
    },
    melbourne: {
        id: "melbourne",
        city: "Melbourne",
        country: "Australia",
        summary: "플린더스 역과 호시어 레인, 퀸빅토리아 마켓, 세인트 킬다에 그레이트 오션 로드와 야라 밸리 당일치기를 더한 멜버른 템플릿입니다.",
        footer: "Melbourne runs on laneway coffee, street art, and one long coastal drive.",
        heroImage: "assets/heroes/melbourne.jpg",
        heroImagePortrait: 'assets/heroes/melbourne-portrait.jpg',
        heroPosition: "center center",
        accent: "#818CF8",
        accentRgb: "129, 140, 248",
        ink: "#1C1B2F",
        inkRgb: "28, 27, 47",
        overlayTop: "rgba(28, 27, 47, 0.42)",
        overlayBottom: "rgba(16, 15, 30, 0.92)",
        timeZone: "Australia/Melbourne",
        weather: {
            latitude: -37.8136,
            longitude: 144.9631
        },
        currency: {
            code: "AUD",
            symbol: "A$",
            locale: "en-AU"
        },
        startOffsetDays: 14,
        phraseLabel: "English",
        phrases: [
            {
                text: "Where can I top up my Myki?",
                pron: "[웨어 캔 아이 탑 업 마이 마이키]",
                meaning: "마이키(교통카드) 어디서 충전해요?"
            },
            {
                text: "Is this tram in the free zone?",
                pron: "[이즈 디스 트램 인 더 프리 존]",
                meaning: "이 트램 무료 구간이에요?"
            },
            {
                text: "A long black, please",
                pron: "[어 롱 블랙 플리즈]",
                meaning: "롱블랙 한 잔 주세요"
            },
            {
                text: "Four seasons in one day",
                pron: "[포 시즌스 인 원 데이]",
                meaning: "하루에 사계절 다 있어요 (멜버른 날씨 표현)"
            },
            {
                text: "Who’s playing at the G tonight?",
                pron: "[후즈 플레잉 앳 더 지 투나잇]",
                meaning: "오늘 MCG에 어느 팀 경기해요?"
            },
            {
                text: "Which laneway is that café in?",
                pron: "[위치 레인웨이 이즈 댓 카페 인]",
                meaning: "그 카페 어느 골목에 있어요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "CBD & 레인웨이",
                activities: [
                    {
                        time: "09:00",
                        title: "플린더스 스트리트 역 & 페더레이션 스퀘어",
                        type: "landmark",
                        location: "Flinders Street Station"
                    },
                    {
                        time: "12:00",
                        title: "호시어 레인 & 디그레이브스 골목",
                        type: "palette",
                        location: "Hosier Lane"
                    },
                    {
                        time: "18:00",
                        title: "멜버른 스카이덱 야경",
                        type: "building",
                        location: "Melbourne Skydeck"
                    }
                ]
            },
            {
                title: "퀸빅토리아 마켓 & 칼튼",
                activities: [
                    {
                        time: "09:00",
                        title: "퀸 빅토리아 마켓",
                        type: "store",
                        location: "Queen Victoria Market"
                    },
                    {
                        time: "13:00",
                        title: "라이곤 스트리트 이탈리안 런치",
                        type: "utensils-crossed",
                        location: "Lygon Street"
                    },
                    {
                        time: "17:00",
                        title: "칼튼 가든 & 왕립전시관",
                        type: "landmark",
                        location: "Royal Exhibition Building"
                    }
                ]
            },
            {
                title: "그레이트 오션 로드 당일치기",
                activities: [
                    {
                        time: "08:00",
                        title: "토키 & 벨스 비치",
                        type: "sun",
                        location: "Bells Beach"
                    },
                    {
                        time: "12:30",
                        title: "아폴로 베이 런치",
                        type: "utensils-crossed",
                        location: "Apollo Bay"
                    },
                    {
                        time: "16:30",
                        title: "12 사도 바위",
                        type: "camera",
                        location: "Twelve Apostles"
                    }
                ]
            },
            {
                title: "세인트 킬다 & 사우스 야라",
                activities: [
                    {
                        time: "10:00",
                        title: "왕립식물원 & 추모 사원",
                        type: "trees",
                        location: "Royal Botanic Gardens Victoria"
                    },
                    {
                        time: "13:00",
                        title: "채플 스트리트 런치 & 쇼핑",
                        type: "shopping-bag",
                        location: "Chapel Street South Yarra"
                    },
                    {
                        time: "17:30",
                        title: "세인트 킬다 피어 & 펭귄",
                        type: "sun",
                        location: "St Kilda Pier"
                    }
                ]
            },
            {
                title: "야라 밸리 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "야라 밸리 와이너리 (도멘 샹동)",
                        type: "sparkles",
                        location: "Domaine Chandon Yarra Valley"
                    },
                    {
                        time: "12:30",
                        title: "힐스빌 런치",
                        type: "utensils-crossed",
                        location: "Healesville"
                    },
                    {
                        time: "16:30",
                        title: "멜버른 공항 이동",
                        type: "plane",
                        location: "Melbourne Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/beijing-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/shanghai-portrait.jpg',
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
    hangzhou: {
        id: "hangzhou",
        city: "Hangzhou",
        country: "China",
        summary: "서호 호반과 차밭, 고찰과 옛 거리를 천천히 묶은 항저우 템플릿입니다.",
        footer: "Hangzhou opens up when the lake, the tea hills, and the temple bells share one slow day.",
        heroImage: "assets/heroes/hangzhou.jpg",
        heroImagePortrait: 'assets/heroes/hangzhou-portrait.jpg',
        heroPosition: "center 38%",
        accent: "#14B8A6",
        accentRgb: "20, 184, 166",
        ink: "#042F2E",
        inkRgb: "4, 47, 46",
        overlayTop: "rgba(4, 47, 46, 0.42)",
        overlayBottom: "rgba(15, 23, 42, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 30.2741,
            longitude: 120.1551
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 9,
        phraseLabel: "中文",
        phrases: [
            {
                text: "请问怎么走？",
                pron: "[칭원 전머 저우]",
                meaning: "실례지만 어떻게 가나요?"
            },
            {
                text: "太美了",
                pron: "[타이 메이 러]",
                meaning: "정말 아름답네요"
            },
            {
                text: "一杯龙井茶",
                pron: "[이 베이 룽징 차]",
                meaning: "용정차 한 잔 주세요"
            },
            {
                text: "多少钱？",
                pron: "[둬사오 첸]",
                meaning: "얼마예요?"
            },
            {
                text: "可以拍照吗？",
                pron: "[커이 파이자오 마]",
                meaning: "사진 찍어도 될까요?"
            },
            {
                text: "我要这个",
                pron: "[워 야오 저거]",
                meaning: "이걸로 할게요"
            }
        ],
        itineraryTemplate: [
            {
                title: "서호 동안 산책",
                activities: [
                    {
                        time: "09:30",
                        title: "단교와 백제 산책",
                        type: "bridge",
                        location: "Broken Bridge, West Lake"
                    },
                    {
                        time: "12:30",
                        title: "호반 점심",
                        type: "utensils-crossed",
                        location: "Lou Wai Lou Restaurant"
                    },
                    {
                        time: "17:30",
                        title: "뇌봉탑 일몰",
                        type: "tower-control",
                        location: "Leifeng Pagoda"
                    }
                ]
            },
            {
                title: "영은사 & 비래봉",
                activities: [
                    {
                        time: "09:30",
                        title: "영은사 참배",
                        type: "landmark",
                        location: "Lingyin Temple"
                    },
                    {
                        time: "12:00",
                        title: "사찰 앞 소면 점심",
                        type: "utensils-crossed",
                        location: "Fayun Alley"
                    },
                    {
                        time: "15:00",
                        title: "비래봉 석굴 탐방",
                        type: "binoculars",
                        location: "Feilai Feng"
                    }
                ]
            },
            {
                title: "용정 차밭",
                activities: [
                    {
                        time: "10:00",
                        title: "용정촌 차밭 걷기",
                        type: "trees",
                        location: "Longjing Village"
                    },
                    {
                        time: "12:30",
                        title: "농가 차요리 점심",
                        type: "utensils-crossed",
                        location: "Meijiawu Tea Village"
                    },
                    {
                        time: "15:30",
                        title: "중국차엽박물관",
                        type: "library",
                        location: "China National Tea Museum"
                    }
                ]
            },
            {
                title: "허팡제 옛 거리",
                activities: [
                    {
                        time: "10:30",
                        title: "허팡제 골목 구경",
                        type: "store",
                        location: "Hefang Street"
                    },
                    {
                        time: "13:00",
                        title: "항저우 가정식 점심",
                        type: "utensils-crossed",
                        location: "Grandma's Home Hefang Street"
                    },
                    {
                        time: "18:30",
                        title: "우산 야경 전망",
                        type: "moon-star",
                        location: "Wushan Tiancheng"
                    }
                ]
            },
            {
                title: "시시습지 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "시시습지 보트",
                        type: "ship",
                        location: "Xixi National Wetland Park"
                    },
                    {
                        time: "12:30",
                        title: "습지 앞 브런치",
                        type: "coffee",
                        location: "Xixi Tiantang"
                    },
                    {
                        time: "16:00",
                        title: "샤오산 공항 이동",
                        type: "plane",
                        location: "Hangzhou Xiaoshan International Airport"
                    }
                ]
            }
        ]
    },
    suzhou: {
        id: "suzhou",
        city: "Suzhou",
        country: "China",
        summary: "고전 정원과 수로 골목, 사찰과 옛 거리를 잇는 쑤저우 템플릿입니다.",
        footer: "Suzhou reads like ink on paper: gardens, canals, and a temple bell at dusk.",
        heroImage: "assets/heroes/suzhou.jpg",
        heroImagePortrait: 'assets/heroes/suzhou-portrait.jpg',
        heroPosition: "center 40%",
        accent: "#475B72",
        accentRgb: "71, 91, 114",
        ink: "#1E293B",
        inkRgb: "30, 41, 59",
        overlayTop: "rgba(30, 41, 59, 0.40)",
        overlayBottom: "rgba(15, 23, 42, 0.88)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 31.2989,
            longitude: 120.5853
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 14,
        phraseLabel: "中文",
        phrases: [
            {
                text: "园林几点开？",
                pron: "[위안린 지 뎬 카이]",
                meaning: "정원은 몇 시에 여나요?"
            },
            {
                text: "坐船好吗？",
                pron: "[쭤 촨 하오 마]",
                meaning: "배를 타는 게 좋을까요?"
            },
            {
                text: "这条路很安静",
                pron: "[저 톄오 루 헌 안징]",
                meaning: "이 길은 참 조용하네요"
            },
            {
                text: "请慢走",
                pron: "[칭 만 저우]",
                meaning: "조심히 가세요"
            },
            {
                text: "我想休息一下",
                pron: "[워 샹 슈시 이샤]",
                meaning: "잠깐 쉬고 싶어요"
            },
            {
                text: "有没有地图？",
                pron: "[여우 메이여우 디투]",
                meaning: "지도 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "졸정원 & 박물관",
                activities: [
                    {
                        time: "09:30",
                        title: "졸정원 정원 산책",
                        type: "trees",
                        location: "Humble Administrator's Garden"
                    },
                    {
                        time: "12:30",
                        title: "정원 앞 쑤저우식 점심",
                        type: "utensils-crossed",
                        location: "Dongbei Street Suzhou"
                    },
                    {
                        time: "14:30",
                        title: "쑤저우 박물관",
                        type: "library",
                        location: "Suzhou Museum"
                    }
                ]
            },
            {
                title: "평강로 수로 골목",
                activities: [
                    {
                        time: "10:00",
                        title: "평강로 옛 거리 산책",
                        type: "map",
                        location: "Pingjiang Road"
                    },
                    {
                        time: "13:00",
                        title: "골목 찻집 점심",
                        type: "coffee",
                        location: "Pingjiang Road"
                    },
                    {
                        time: "18:30",
                        title: "수로 야간 유람선",
                        type: "ship",
                        location: "Suzhou Grand Canal"
                    }
                ]
            },
            {
                title: "한산사 & 서원",
                activities: [
                    {
                        time: "09:30",
                        title: "한산사 종루",
                        type: "landmark",
                        location: "Hanshan Temple"
                    },
                    {
                        time: "12:30",
                        title: "펑차오 근처 점심",
                        type: "utensils-crossed",
                        location: "Fengqiao Scenic Area"
                    },
                    {
                        time: "15:30",
                        title: "유원 고전 정원",
                        type: "trees",
                        location: "Lingering Garden"
                    }
                ]
            },
            {
                title: "산탕제 & 호구",
                activities: [
                    {
                        time: "10:00",
                        title: "호구탑 언덕",
                        type: "tower-control",
                        location: "Tiger Hill Suzhou"
                    },
                    {
                        time: "13:00",
                        title: "산탕제 먹거리 점심",
                        type: "utensils-crossed",
                        location: "Shantang Street"
                    },
                    {
                        time: "19:00",
                        title: "산탕제 홍등 야경",
                        type: "moon-star",
                        location: "Shantang Street"
                    }
                ]
            },
            {
                title: "자수 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "쑤저우 자수연구소",
                        type: "palette",
                        location: "Suzhou Embroidery Research Institute"
                    },
                    {
                        time: "12:30",
                        title: "관첸제 기념품 쇼핑",
                        type: "gift",
                        location: "Guanqian Street"
                    },
                    {
                        time: "16:00",
                        title: "쑤저우역 이동",
                        type: "train-front",
                        location: "Suzhou Railway Station"
                    }
                ]
            }
        ]
    },
    xian: {
        id: "xian",
        city: "Xi'an",
        country: "China",
        summary: "병마용과 성벽, 회민가 먹거리로 고도의 시간을 되짚는 시안 템플릿입니다.",
        footer: "Xi'an lands when clay soldiers, old ramparts, and night-market smoke stack up in one trip.",
        heroImage: "assets/heroes/xian.jpg",
        heroImagePortrait: 'assets/heroes/xian-portrait.jpg',
        heroPosition: "center 40%",
        accent: "#B46A09",
        accentRgb: "180, 106, 9",
        ink: "#431407",
        inkRgb: "67, 20, 7",
        overlayTop: "rgba(67, 20, 7, 0.44)",
        overlayBottom: "rgba(28, 18, 12, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 34.3416,
            longitude: 108.9398
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 10,
        phraseLabel: "中文",
        phrases: [
            {
                text: "不要太辣",
                pron: "[부야오 타이 라]",
                meaning: "너무 맵지 않게 해주세요"
            },
            {
                text: "来一碗",
                pron: "[라이 이 완]",
                meaning: "한 그릇 주세요"
            },
            {
                text: "门票在哪买？",
                pron: "[먼퍄오 짜이 날 마이]",
                meaning: "입장권은 어디서 사나요?"
            },
            {
                text: "几点关门？",
                pron: "[지 뎬 관먼]",
                meaning: "몇 시에 닫나요?"
            },
            {
                text: "请帮我一下",
                pron: "[칭 방 워 이샤]",
                meaning: "좀 도와주세요"
            },
            {
                text: "很好吃",
                pron: "[헌 하오츠]",
                meaning: "정말 맛있어요"
            }
        ],
        itineraryTemplate: [
            {
                title: "병마용 하루",
                activities: [
                    {
                        time: "09:00",
                        title: "병마용 1~3호갱",
                        type: "landmark",
                        location: "Terracotta Army Museum"
                    },
                    {
                        time: "13:00",
                        title: "진시황릉 근처 점심",
                        type: "utensils-crossed",
                        location: "Lintong District"
                    },
                    {
                        time: "15:30",
                        title: "화청지 온천 정원",
                        type: "sun",
                        location: "Huaqing Palace"
                    }
                ]
            },
            {
                title: "성벽 & 종고루",
                activities: [
                    {
                        time: "10:00",
                        title: "고성벽 자전거 일주",
                        type: "map",
                        location: "Xi'an City Wall"
                    },
                    {
                        time: "13:30",
                        title: "종루 근처 점심",
                        type: "utensils-crossed",
                        location: "Bell Tower of Xi'an"
                    },
                    {
                        time: "19:00",
                        title: "고루 야경 산책",
                        type: "moon-star",
                        location: "Drum Tower of Xi'an"
                    }
                ]
            },
            {
                title: "회민가 먹거리",
                activities: [
                    {
                        time: "10:30",
                        title: "화각항 골목 탐방",
                        type: "store",
                        location: "Huajue Lane"
                    },
                    {
                        time: "12:30",
                        title: "대청진사 관람",
                        type: "landmark",
                        location: "Great Mosque of Xi'an"
                    },
                    {
                        time: "18:00",
                        title: "회민가 야시장",
                        type: "sparkles",
                        location: "Muslim Quarter Xi'an"
                    }
                ]
            },
            {
                title: "대안탑 & 박물관",
                activities: [
                    {
                        time: "09:30",
                        title: "섬서역사박물관",
                        type: "library",
                        location: "Shaanxi History Museum"
                    },
                    {
                        time: "13:00",
                        title: "대당불야성 점심",
                        type: "utensils-crossed",
                        location: "Great Tang All Day Mall"
                    },
                    {
                        time: "19:30",
                        title: "대안탑 분수쇼",
                        type: "sparkles",
                        location: "Giant Wild Goose Pagoda"
                    }
                ]
            },
            {
                title: "마지막 거리 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "서원문 문방구 거리",
                        type: "gift",
                        location: "Shuyuanmen Ancient Culture Street"
                    },
                    {
                        time: "12:30",
                        title: "비림박물관",
                        type: "library",
                        location: "Beilin Museum"
                    },
                    {
                        time: "16:30",
                        title: "셴양 공항 이동",
                        type: "plane",
                        location: "Xi'an Xianyang International Airport"
                    }
                ]
            }
        ]
    },
    chengdu: {
        id: "chengdu",
        city: "Chengdu",
        country: "China",
        summary: "판다와 찻집, 사당과 옛 골목을 느긋하게 이어 붙인 청두 템플릿입니다.",
        footer: "Chengdu works at teahouse speed: pandas early, hotpot late, everything else in between.",
        heroImage: "assets/heroes/chengdu.jpg",
        heroImagePortrait: 'assets/heroes/chengdu-portrait.jpg',
        heroPosition: "center 42%",
        accent: "#4D7C0F",
        accentRgb: "77, 124, 15",
        ink: "#1A2E05",
        inkRgb: "26, 46, 5",
        overlayTop: "rgba(26, 46, 5, 0.42)",
        overlayBottom: "rgba(17, 24, 39, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 30.5728,
            longitude: 104.0668
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 11,
        phraseLabel: "中文",
        phrases: [
            {
                text: "微辣就好",
                pron: "[웨이라 지우 하오]",
                meaning: "약간만 맵게 해주세요"
            },
            {
                text: "熊猫在哪里？",
                pron: "[슝마오 짜이 날리]",
                meaning: "판다는 어디 있나요?"
            },
            {
                text: "再来一杯茶",
                pron: "[짜이 라이 이 베이 차]",
                meaning: "차 한 잔 더 주세요"
            },
            {
                text: "慢一点",
                pron: "[만 이뎬]",
                meaning: "조금 천천히요"
            },
            {
                text: "打包带走",
                pron: "[다바오 다이 저우]",
                meaning: "포장해 주세요"
            },
            {
                text: "这个辣吗？",
                pron: "[저거 라 마]",
                meaning: "이거 매운가요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "판다 기지 아침",
                activities: [
                    {
                        time: "08:00",
                        title: "자이언트 판다 번식기지",
                        type: "trees",
                        location: "Chengdu Research Base of Giant Panda Breeding"
                    },
                    {
                        time: "12:30",
                        title: "기지 근처 촨차이 점심",
                        type: "utensils-crossed",
                        location: "Xiongmao Avenue"
                    },
                    {
                        time: "15:30",
                        title: "원수원 사찰 찻집",
                        type: "landmark",
                        location: "Wenshu Monastery"
                    }
                ]
            },
            {
                title: "우허우사당 & 진리",
                activities: [
                    {
                        time: "10:00",
                        title: "우허우사당 관람",
                        type: "landmark",
                        location: "Wuhou Shrine"
                    },
                    {
                        time: "12:30",
                        title: "진리거리 먹거리 점심",
                        type: "utensils-crossed",
                        location: "Jinli Ancient Street"
                    },
                    {
                        time: "19:00",
                        title: "진리 홍등 야경",
                        type: "moon-star",
                        location: "Jinli Ancient Street"
                    }
                ]
            },
            {
                title: "관자이샹쯔 골목",
                activities: [
                    {
                        time: "10:30",
                        title: "콴자이 골목 산책",
                        type: "store",
                        location: "Kuanzhai Alley"
                    },
                    {
                        time: "13:00",
                        title: "골목 안 촨촨 점심",
                        type: "utensils-crossed",
                        location: "Kuanzhai Alley"
                    },
                    {
                        time: "16:00",
                        title: "인민공원 찻집",
                        type: "coffee",
                        location: "Heming Teahouse, People's Park"
                    }
                ]
            },
            {
                title: "두보초당 & 강변",
                activities: [
                    {
                        time: "10:00",
                        title: "두보초당 정원",
                        type: "library",
                        location: "Du Fu Thatched Cottage"
                    },
                    {
                        time: "13:00",
                        title: "칭양궁 근처 점심",
                        type: "utensils-crossed",
                        location: "Qingyang Palace"
                    },
                    {
                        time: "18:30",
                        title: "주청리 야경 쇼핑",
                        type: "shopping-bag",
                        location: "Jiuyanqiao"
                    }
                ]
            },
            {
                title: "마지막 훠궈 & 이동",
                activities: [
                    {
                        time: "10:30",
                        title: "춘시루 쇼핑",
                        type: "shopping-cart",
                        location: "Chunxi Road"
                    },
                    {
                        time: "13:00",
                        title: "청두 훠궈 점심",
                        type: "utensils-crossed",
                        location: "Shudaxia Hotpot Chunxi Road"
                    },
                    {
                        time: "17:00",
                        title: "톈푸 공항 이동",
                        type: "plane",
                        location: "Chengdu Tianfu International Airport"
                    }
                ]
            }
        ]
    },
    guangzhou: {
        id: "guangzhou",
        city: "Guangzhou",
        country: "China",
        summary: "딤섬과 강변 야경, 사면섬 산책을 묶은 광저우 템플릿입니다.",
        footer: "Guangzhou is a food city first: dim sum by day, river lights by night.",
        heroImage: "assets/heroes/guangzhou.jpg",
        heroImagePortrait: 'assets/heroes/guangzhou-portrait.jpg',
        heroPosition: "center 35%",
        accent: "#DB2777",
        accentRgb: "219, 39, 119",
        ink: "#500724",
        inkRgb: "80, 7, 36",
        overlayTop: "rgba(80, 7, 36, 0.44)",
        overlayBottom: "rgba(24, 14, 26, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 23.1291,
            longitude: 113.2644
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 12,
        phraseLabel: "中文",
        phrases: [
            {
                text: "喝早茶",
                pron: "[허 자오차]",
                meaning: "아침 딤섬 먹으러 가요"
            },
            {
                text: "再点一笼",
                pron: "[짜이 뎬 이 룽]",
                meaning: "한 판 더 주문할게요"
            },
            {
                text: "有推荐吗？",
                pron: "[여우 퉈이젠 마]",
                meaning: "추천 메뉴 있나요?"
            },
            {
                text: "不要香菜",
                pron: "[부야오 샹차이]",
                meaning: "고수는 빼주세요"
            },
            {
                text: "地铁站怎么走？",
                pron: "[디톄잔 전머 저우]",
                meaning: "지하철역은 어떻게 가나요?"
            },
            {
                text: "买单",
                pron: "[마이단]",
                meaning: "계산할게요"
            }
        ],
        itineraryTemplate: [
            {
                title: "사면섬 & 상하구",
                activities: [
                    {
                        time: "09:30",
                        title: "사면섬 옛 조계지 산책",
                        type: "map",
                        location: "Shamian Island"
                    },
                    {
                        time: "12:00",
                        title: "아침 딤섬 점심",
                        type: "utensils-crossed",
                        location: "Guangzhou Restaurant Wenchang Road"
                    },
                    {
                        time: "16:00",
                        title: "상하구 보행가 쇼핑",
                        type: "shopping-bag",
                        location: "Shangxiajiu Pedestrian Street"
                    }
                ]
            },
            {
                title: "천허 도심 & 타워",
                activities: [
                    {
                        time: "10:30",
                        title: "천허 도심 쇼핑",
                        type: "shopping-cart",
                        location: "Tianhe District"
                    },
                    {
                        time: "13:00",
                        title: "태고회 점심",
                        type: "utensils-crossed",
                        location: "Taikoo Hui Guangzhou"
                    },
                    {
                        time: "19:00",
                        title: "광저우 타워 전망",
                        type: "tower-control",
                        location: "Canton Tower"
                    }
                ]
            },
            {
                title: "주강 & 오래된 성",
                activities: [
                    {
                        time: "10:00",
                        title: "진씨서원 관람",
                        type: "landmark",
                        location: "Chen Clan Ancestral Hall"
                    },
                    {
                        time: "13:00",
                        title: "판시주가 딤섬 점심",
                        type: "utensils-crossed",
                        location: "Panxi Restaurant"
                    },
                    {
                        time: "19:30",
                        title: "주강 야경 크루즈",
                        type: "ship",
                        location: "Pearl River Night Cruise"
                    }
                ]
            },
            {
                title: "백운산 자연",
                activities: [
                    {
                        time: "09:30",
                        title: "백운산 등반",
                        type: "trees",
                        location: "Baiyun Mountain"
                    },
                    {
                        time: "13:00",
                        title: "산 아래 광둥식 점심",
                        type: "utensils-crossed",
                        location: "Baiyun Mountain Scenic Area"
                    },
                    {
                        time: "16:30",
                        title: "월수공원 오양상",
                        type: "landmark",
                        location: "Yuexiu Park"
                    }
                ]
            },
            {
                title: "마지막 차 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "천자만당 조차",
                        type: "coffee",
                        location: "Tao Tao Ju Restaurant"
                    },
                    {
                        time: "13:00",
                        title: "영남 기념품 쇼핑",
                        type: "gift",
                        location: "Beijing Road Pedestrian Street"
                    },
                    {
                        time: "17:00",
                        title: "바이윈 공항 이동",
                        type: "plane",
                        location: "Guangzhou Baiyun International Airport"
                    }
                ]
            }
        ]
    },
    qingdao: {
        id: "qingdao",
        city: "Qingdao",
        country: "China",
        summary: "바다와 독일식 거리, 맥주와 해산물을 묶은 칭다오 템플릿입니다.",
        footer: "Qingdao is red roofs, blue water, and a cold glass of beer at the end of the day.",
        heroImage: "assets/heroes/qingdao.jpg",
        heroImagePortrait: 'assets/heroes/qingdao-portrait.jpg',
        heroPosition: "center 45%",
        accent: "#2563EB",
        accentRgb: "37, 99, 235",
        ink: "#172554",
        inkRgb: "23, 37, 84",
        overlayTop: "rgba(23, 37, 84, 0.42)",
        overlayBottom: "rgba(15, 23, 42, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 36.0671,
            longitude: 120.3826
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 13,
        phraseLabel: "中文",
        phrases: [
            {
                text: "一扎啤酒",
                pron: "[이 자 피주]",
                meaning: "생맥주 한 잔 주세요"
            },
            {
                text: "海鲜怎么卖？",
                pron: "[하이셴 전머 마이]",
                meaning: "해산물은 어떻게 파나요?"
            },
            {
                text: "去海边",
                pron: "[취 하이볜]",
                meaning: "바닷가로 가주세요"
            },
            {
                text: "今天天气真好",
                pron: "[진톈 톈치 전 하오]",
                meaning: "오늘 날씨 정말 좋네요"
            },
            {
                text: "有位子吗？",
                pron: "[여우 웨이쯔 마]",
                meaning: "자리 있나요?"
            },
            {
                text: "再见",
                pron: "[짜이젠]",
                meaning: "안녕히 가세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "잔교 & 옛 시가",
                activities: [
                    {
                        time: "09:30",
                        title: "잔교 부두 산책",
                        type: "bridge",
                        location: "Zhanqiao Pier"
                    },
                    {
                        time: "12:30",
                        title: "피차이위안 먹자골목",
                        type: "utensils-crossed",
                        location: "Pichaiyuan Food Street"
                    },
                    {
                        time: "16:00",
                        title: "천주교당 거리",
                        type: "landmark",
                        location: "St. Michael's Cathedral Qingdao"
                    }
                ]
            },
            {
                title: "8대관 & 해변",
                activities: [
                    {
                        time: "10:00",
                        title: "8대관 별장 거리",
                        type: "map",
                        location: "Badaguan Scenic Area"
                    },
                    {
                        time: "13:00",
                        title: "해변 해산물 점심",
                        type: "utensils-crossed",
                        location: "Second Bathing Beach"
                    },
                    {
                        time: "17:30",
                        title: "화석루 일몰",
                        type: "camera",
                        location: "Huashi Villa"
                    }
                ]
            },
            {
                title: "맥주 박물관 & 시내",
                activities: [
                    {
                        time: "10:30",
                        title: "칭다오 맥주박물관",
                        type: "library",
                        location: "Tsingtao Beer Museum"
                    },
                    {
                        time: "13:00",
                        title: "덩저우루 맥주거리 점심",
                        type: "utensils-crossed",
                        location: "Dengzhou Road Beer Street"
                    },
                    {
                        time: "19:00",
                        title: "5.4광장 야경",
                        type: "moon-star",
                        location: "May Fourth Square"
                    }
                ]
            },
            {
                title: "라오산 하루",
                activities: [
                    {
                        time: "09:00",
                        title: "라오산 남쪽 코스",
                        type: "trees",
                        location: "Laoshan Mountain"
                    },
                    {
                        time: "13:00",
                        title: "타이칭궁 근처 점심",
                        type: "utensils-crossed",
                        location: "Taiqing Palace Laoshan"
                    },
                    {
                        time: "16:30",
                        title: "해안 드라이브 전망",
                        type: "binoculars",
                        location: "Laoshan Scenic Area"
                    }
                ]
            },
            {
                title: "마지막 해변 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "올림픽 요트 선착장",
                        type: "ship",
                        location: "Qingdao Olympic Sailing Center"
                    },
                    {
                        time: "12:30",
                        title: "해산물 마지막 점심",
                        type: "utensils-crossed",
                        location: "Yunxiao Road Food Street"
                    },
                    {
                        time: "16:30",
                        title: "자오둥 공항 이동",
                        type: "plane",
                        location: "Qingdao Jiaodong International Airport"
                    }
                ]
            }
        ]
    },
    zhangjiajie: {
        id: "zhangjiajie",
        city: "Zhangjiajie",
        country: "China",
        summary: "아바타 봉우리와 톈먼산 유리잔도, 대협곡 유리다리로 하늘 위를 걷는 장자제 템플릿입니다.",
        footer: "Zhangjiajie hits hardest when the sandstone pillars float out of the morning mist.",
        heroImage: "assets/heroes/zhangjiajie.jpg",
        heroImagePortrait: 'assets/heroes/zhangjiajie-portrait.jpg',
        heroPosition: "center center",
        accent: "#059669",
        accentRgb: "5, 150, 105",
        ink: "#052E16",
        inkRgb: "5, 46, 22",
        overlayTop: "rgba(5, 46, 22, 0.42)",
        overlayBottom: "rgba(15, 23, 42, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 29.117,
            longitude: 110.479
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 10,
        phraseLabel: "中文",
        phrases: [
            {
                text: "缆车在哪里？",
                pron: "[란처 짜이 날리]",
                meaning: "케이블카는 어디 있나요?"
            },
            {
                text: "观光车几点发？",
                pron: "[관광처 지 뎬 파]",
                meaning: "셔틀버스는 몇 시에 출발해요?"
            },
            {
                text: "风景太壮观了",
                pron: "[펑징 타이 좡관 러]",
                meaning: "경치가 정말 웅장하네요"
            },
            {
                text: "我有点怕高",
                pron: "[워 여우뎬 파 가오]",
                meaning: "저는 높은 곳이 좀 무서워요"
            },
            {
                text: "帮我拍一张",
                pron: "[방 워 파이 이 장]",
                meaning: "사진 한 장 찍어 주세요"
            },
            {
                text: "有点累了",
                pron: "[여우뎬 레이 러]",
                meaning: "조금 피곤해요"
            }
        ],
        itineraryTemplate: [
            {
                title: "우링위안 · 위안자제 & 톈쯔산",
                activities: [
                    {
                        time: "08:30",
                        title: "바이룽 엘리베이터 탑승",
                        type: "tower-control",
                        location: "Bailong Elevator"
                    },
                    {
                        time: "10:00",
                        title: "위안자제 할렐루야산 전망",
                        type: "binoculars",
                        location: "Avatar Hallelujah Mountain"
                    },
                    {
                        time: "14:30",
                        title: "톈쯔산 어필봉 & 케이블카 하산",
                        type: "camera",
                        location: "Tianzi Mountain"
                    }
                ]
            },
            {
                title: "황스자이 & 진볜시",
                activities: [
                    {
                        time: "09:00",
                        title: "황스자이 케이블카 & 전망대",
                        type: "binoculars",
                        location: "Huangshizhai"
                    },
                    {
                        time: "13:00",
                        title: "진볜시 계곡 트레킹",
                        type: "trees",
                        location: "Golden Whip Stream"
                    },
                    {
                        time: "19:00",
                        title: "시부제 야시장",
                        type: "sparkles",
                        location: "Xibu Street"
                    }
                ]
            },
            {
                title: "톈먼산",
                activities: [
                    {
                        time: "08:30",
                        title: "톈먼산 케이블카 탑승",
                        type: "tower-control",
                        location: "Tianmen Mountain Cableway"
                    },
                    {
                        time: "11:00",
                        title: "유리잔도 & 귀곡잔도",
                        type: "camera",
                        location: "Tianmen Mountain Glass Skywalk"
                    },
                    {
                        time: "15:00",
                        title: "톈먼동 999계단",
                        type: "landmark",
                        location: "Tianmen Cave"
                    }
                ]
            },
            {
                title: "대협곡 유리다리 & 이동",
                activities: [
                    {
                        time: "08:30",
                        title: "장자제 대협곡 유리다리",
                        type: "bridge",
                        location: "Zhangjiajie Grand Canyon Glass Bridge"
                    },
                    {
                        time: "11:30",
                        title: "대협곡 트레킹 & 점심",
                        type: "trees",
                        location: "Zhangjiajie Grand Canyon"
                    },
                    {
                        time: "16:30",
                        title: "허화 공항 이동",
                        type: "plane",
                        location: "Zhangjiajie Hehua International Airport"
                    }
                ]
            }
        ]
    },
    nanjing: {
        id: "nanjing",
        city: "Nanjing",
        country: "China",
        summary: "중산릉과 명효릉, 부자묘 친화이허 야경으로 육조 고도의 시간을 되짚는 난징 템플릿입니다.",
        footer: "Nanjing is best read slowly, from the mausoleum steps to the lantern-lit Qinhuai.",
        heroImage: "assets/heroes/nanjing.jpg",
        heroImagePortrait: 'assets/heroes/nanjing-portrait.jpg',
        heroPosition: "center center",
        accent: "#7C3AED",
        accentRgb: "124, 58, 237",
        ink: "#2E1065",
        inkRgb: "46, 16, 101",
        overlayTop: "rgba(46, 16, 101, 0.44)",
        overlayBottom: "rgba(20, 16, 40, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 32.0603,
            longitude: 118.7969
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 8,
        phraseLabel: "中文",
        phrases: [
            {
                text: "这是明朝的吗？",
                pron: "[저 스 밍차오 더 마]",
                meaning: "이건 명나라 것인가요?"
            },
            {
                text: "一碗鸭血粉丝汤",
                pron: "[이 완 야셰 펀쓰탕]",
                meaning: "오리 선지 당면탕 한 그릇 주세요"
            },
            {
                text: "来一份盐水鸭",
                pron: "[라이 이 펀 옌수이야]",
                meaning: "염수압(소금물 오리) 하나 주세요"
            },
            {
                text: "坐游船要多久？",
                pron: "[쭤 여우촨 야오 둬주]",
                meaning: "유람선은 얼마나 걸려요?"
            },
            {
                text: "我想去夫子庙",
                pron: "[워 샹 취 푸쯔먀오]",
                meaning: "부자묘에 가고 싶어요"
            },
            {
                text: "请慢点说",
                pron: "[칭 만뎬 숴]",
                meaning: "천천히 말해 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "중산릉 & 명효릉",
                activities: [
                    {
                        time: "09:00",
                        title: "중산릉 참배",
                        type: "landmark",
                        location: "Sun Yat-sen Mausoleum"
                    },
                    {
                        time: "13:00",
                        title: "명효릉 신도 산책",
                        type: "trees",
                        location: "Ming Xiaoling Mausoleum"
                    },
                    {
                        time: "17:00",
                        title: "쉬안우호 노을 산책",
                        type: "sun",
                        location: "Xuanwu Lake"
                    }
                ]
            },
            {
                title: "부자묘 & 친화이허",
                activities: [
                    {
                        time: "10:00",
                        title: "부자묘 & 강남공원",
                        type: "landmark",
                        location: "Nanjing Confucius Temple"
                    },
                    {
                        time: "12:30",
                        title: "라오먼둥 옛 거리 점심",
                        type: "utensils-crossed",
                        location: "Laomendong"
                    },
                    {
                        time: "19:00",
                        title: "친화이허 야경 유람선",
                        type: "ship",
                        location: "Qinhuai River"
                    }
                ]
            },
            {
                title: "총통부 & 기념관",
                activities: [
                    {
                        time: "09:30",
                        title: "총통부 관람",
                        type: "building",
                        location: "Presidential Palace Nanjing"
                    },
                    {
                        time: "12:30",
                        title: "1912 거리 점심",
                        type: "utensils-crossed",
                        location: "Nanjing 1912"
                    },
                    {
                        time: "15:00",
                        title: "난징대학살기념관",
                        type: "library",
                        location: "Nanjing Massacre Memorial Hall"
                    }
                ]
            },
            {
                title: "중화문 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "중화문 옹성 성벽",
                        type: "landmark",
                        location: "Zhonghua Gate"
                    },
                    {
                        time: "12:30",
                        title: "신제커우 쇼핑 & 점심",
                        type: "shopping-bag",
                        location: "Xinjiekou"
                    },
                    {
                        time: "16:30",
                        title: "루커우 공항 이동",
                        type: "plane",
                        location: "Nanjing Lukou International Airport"
                    }
                ]
            }
        ]
    },
    changsha: {
        id: "changsha",
        city: "Changsha",
        country: "China",
        summary: "웨루산과 오렌지섬, 후난성박물관, 타이핑제와 원허유 야시장으로 매운 밤을 채우는 창사 템플릿입니다.",
        footer: "Changsha runs on chili, milk tea, and a skyline that never quite goes to sleep.",
        heroImage: "assets/heroes/changsha.jpg",
        heroImagePortrait: 'assets/heroes/changsha-portrait.jpg',
        heroPosition: "center center",
        accent: "#EA580C",
        accentRgb: "234, 88, 12",
        ink: "#450A0A",
        inkRgb: "69, 10, 10",
        overlayTop: "rgba(69, 10, 10, 0.42)",
        overlayBottom: "rgba(28, 12, 12, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 28.2282,
            longitude: 112.9388
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 7,
        phraseLabel: "中文",
        phrases: [
            {
                text: "臭豆腐来一份",
                pron: "[처우더우푸 라이 이 펀]",
                meaning: "취두부 하나 주세요"
            },
            {
                text: "太辣了",
                pron: "[타이 라 러]",
                meaning: "너무 매워요"
            },
            {
                text: "奶茶少糖",
                pron: "[나이차 사오 탕]",
                meaning: "밀크티는 당 적게 해 주세요"
            },
            {
                text: "排队要多久？",
                pron: "[파이두이 야오 둬주]",
                meaning: "줄 서면 얼마나 걸려요?"
            },
            {
                text: "有小龙虾吗？",
                pron: "[여우 샤오룽샤 마]",
                meaning: "민물가재 요리 있나요?"
            },
            {
                text: "夜市几点开始？",
                pron: "[예스 지 뎬 카이스]",
                meaning: "야시장은 몇 시에 시작해요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "웨루산 & 오렌지섬",
                activities: [
                    {
                        time: "09:00",
                        title: "웨루서원",
                        type: "landmark",
                        location: "Yuelu Academy"
                    },
                    {
                        time: "11:30",
                        title: "웨루산 애만정 산책",
                        type: "trees",
                        location: "Yuelu Mountain"
                    },
                    {
                        time: "17:00",
                        title: "오렌지섬 노을 & 청년 마오쩌둥상",
                        type: "sun",
                        location: "Orange Isle"
                    }
                ]
            },
            {
                title: "후난성박물관 & 타이핑제",
                activities: [
                    {
                        time: "09:30",
                        title: "후난성박물관 마왕퇴 한묘",
                        type: "library",
                        location: "Hunan Museum"
                    },
                    {
                        time: "12:30",
                        title: "타이핑제 취두부 & 점심",
                        type: "store",
                        location: "Taiping Old Street"
                    },
                    {
                        time: "19:00",
                        title: "원허유 야시장 저녁",
                        type: "sparkles",
                        location: "Changsha Wenheyou"
                    }
                ]
            },
            {
                title: "우이광장 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "우이광장 & 차옌웨써 밀크티",
                        type: "coffee",
                        location: "Wuyi Square"
                    },
                    {
                        time: "12:30",
                        title: "창사 IFS 전망 & 점심",
                        type: "building",
                        location: "Changsha IFS"
                    },
                    {
                        time: "16:30",
                        title: "황화 공항 이동",
                        type: "plane",
                        location: "Changsha Huanghua International Airport"
                    }
                ]
            }
        ]
    },
    kunming: {
        id: "kunming",
        city: "Kunming",
        country: "China",
        summary: "석림과 뎬츠, 진마비지팡에 다리 고성 당일까지 얹은 사계절 봄 도시 쿤밍 템플릿입니다.",
        footer: "Kunming stays spring all year; the stone forest and the lake do the rest.",
        heroImage: "assets/heroes/kunming.jpg",
        heroImagePortrait: 'assets/heroes/kunming-portrait.jpg',
        heroPosition: "center center",
        accent: "#65A30D",
        accentRgb: "101, 163, 13",
        ink: "#1A2E05",
        inkRgb: "26, 46, 5",
        overlayTop: "rgba(26, 46, 5, 0.40)",
        overlayBottom: "rgba(15, 23, 42, 0.88)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 25.0389,
            longitude: 102.7183
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 12,
        phraseLabel: "中文",
        phrases: [
            {
                text: "一碗过桥米线",
                pron: "[이 완 궈차오 미셴]",
                meaning: "과교미셴 한 그릇 주세요"
            },
            {
                text: "这花叫什么？",
                pron: "[저 화 자오 선머]",
                meaning: "이 꽃 이름이 뭐예요?"
            },
            {
                text: "天气真舒服",
                pron: "[톈치 전 수푸]",
                meaning: "날씨가 정말 쾌적하네요"
            },
            {
                text: "去石林的车在哪？",
                pron: "[취 스린 더 처 짜이 날]",
                meaning: "석림 가는 차는 어디예요?"
            },
            {
                text: "有菌子火锅吗？",
                pron: "[여우 쥔쯔 훠궈 마]",
                meaning: "버섯 훠궈 있나요?"
            },
            {
                text: "我先看看",
                pron: "[워 셴 칸칸]",
                meaning: "먼저 좀 둘러볼게요"
            }
        ],
        itineraryTemplate: [
            {
                title: "뎬츠 & 시산",
                activities: [
                    {
                        time: "09:30",
                        title: "윈난민족촌",
                        type: "landmark",
                        location: "Yunnan Nationalities Village"
                    },
                    {
                        time: "13:00",
                        title: "하이겅 제방 갈매기 산책",
                        type: "sun",
                        location: "Haigeng Dam"
                    },
                    {
                        time: "16:00",
                        title: "시산 용문 전망",
                        type: "binoculars",
                        location: "Dragon Gate, Western Hills"
                    }
                ]
            },
            {
                title: "스린 석림 당일",
                activities: [
                    {
                        time: "08:30",
                        title: "스린 대석림 탐방",
                        type: "landmark",
                        location: "Stone Forest"
                    },
                    {
                        time: "13:00",
                        title: "이족 마을 점심",
                        type: "utensils-crossed",
                        location: "Shilin Yi Autonomous County"
                    },
                    {
                        time: "15:00",
                        title: "나이구 석림",
                        type: "binoculars",
                        location: "Naigu Stone Forest"
                    }
                ]
            },
            {
                title: "옛 도심 & 진마비지팡",
                activities: [
                    {
                        time: "09:30",
                        title: "위안퉁사 참배",
                        type: "landmark",
                        location: "Yuantong Temple"
                    },
                    {
                        time: "12:30",
                        title: "취안후 공원 & 과교미셴 점심",
                        type: "utensils-crossed",
                        location: "Green Lake Park"
                    },
                    {
                        time: "19:00",
                        title: "진마비지팡 야경",
                        type: "moon-star",
                        location: "Jinma Biji Archways"
                    }
                ]
            },
            {
                title: "다리 고성 당일",
                activities: [
                    {
                        time: "10:00",
                        title: "다리 고성 산책",
                        type: "landmark",
                        location: "Dali Ancient City"
                    },
                    {
                        time: "13:00",
                        title: "얼하이 호숫가 점심",
                        type: "utensils-crossed",
                        location: "Erhai Lake"
                    },
                    {
                        time: "15:30",
                        title: "충성사 삼탑",
                        type: "landmark",
                        location: "Three Pagodas of Chongsheng Temple"
                    }
                ]
            },
            {
                title: "관두 고진 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "윈난성박물관",
                        type: "library",
                        location: "Yunnan Provincial Museum"
                    },
                    {
                        time: "12:30",
                        title: "관두 고진 점심",
                        type: "store",
                        location: "Guandu Ancient Town"
                    },
                    {
                        time: "16:30",
                        title: "창수이 공항 이동",
                        type: "plane",
                        location: "Kunming Changshui International Airport"
                    }
                ]
            }
        ]
    },
    xiamen: {
        id: "xiamen",
        city: "Xiamen",
        country: "China",
        summary: "구랑위 섬, 샤먼대학과 난푸퉈사, 쩡춰안 바닷가 골목을 묶은 샤먼 템플릿입니다.",
        footer: "Xiamen is a ferry ride, a piano echo, and a slow walk along the sea wall.",
        heroImage: "assets/heroes/xiamen.jpg",
        heroImagePortrait: 'assets/heroes/xiamen-portrait.jpg',
        heroPosition: "center center",
        accent: "#E11D48",
        accentRgb: "225, 29, 72",
        ink: "#0C4A6E",
        inkRgb: "12, 74, 110",
        overlayTop: "rgba(12, 74, 110, 0.42)",
        overlayBottom: "rgba(15, 23, 42, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 24.4798,
            longitude: 118.0894
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 9,
        phraseLabel: "中文",
        phrases: [
            {
                text: "船票怎么买？",
                pron: "[촨퍄오 전머 마이]",
                meaning: "배표는 어떻게 사나요?"
            },
            {
                text: "一碗沙茶面",
                pron: "[이 완 사차몐]",
                meaning: "사차면 한 그릇 주세요"
            },
            {
                text: "海边可以游泳吗？",
                pron: "[하이볜 커이 여우융 마]",
                meaning: "바닷가에서 수영해도 되나요?"
            },
            {
                text: "一杯冰美式",
                pron: "[이 베이 빙 메이스]",
                meaning: "아이스 아메리카노 한 잔 주세요"
            },
            {
                text: "最后一班船几点？",
                pron: "[쭈이허우 이 반 촨 지 뎬]",
                meaning: "마지막 배는 몇 시예요?"
            },
            {
                text: "这个是什么？",
                pron: "[저거 스 선머]",
                meaning: "이건 뭐예요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "구랑위",
                activities: [
                    {
                        time: "09:00",
                        title: "르광옌 전망대",
                        type: "binoculars",
                        location: "Sunlight Rock"
                    },
                    {
                        time: "12:30",
                        title: "룽터우루 먹거리 점심",
                        type: "utensils-crossed",
                        location: "Longtou Road"
                    },
                    {
                        time: "15:30",
                        title: "슈좡화원 & 피아노박물관",
                        type: "music",
                        location: "Shuzhuang Garden"
                    }
                ]
            },
            {
                title: "샤먼대학 & 난푸퉈사",
                activities: [
                    {
                        time: "09:00",
                        title: "난푸퉈사 참배",
                        type: "landmark",
                        location: "Nanputuo Temple"
                    },
                    {
                        time: "11:30",
                        title: "샤먼대학 캠퍼스 산책",
                        type: "building",
                        location: "Xiamen University"
                    },
                    {
                        time: "14:30",
                        title: "사포웨이 카페 골목",
                        type: "coffee",
                        location: "Shapowei"
                    }
                ]
            },
            {
                title: "환도로 & 쩡춰안",
                activities: [
                    {
                        time: "09:30",
                        title: "후리산 포대",
                        type: "landmark",
                        location: "Hulishan Fortress"
                    },
                    {
                        time: "13:00",
                        title: "환도로 자전거 라이딩",
                        type: "map",
                        location: "Huandao Road"
                    },
                    {
                        time: "18:30",
                        title: "쩡춰안 야시장 저녁",
                        type: "sparkles",
                        location: "Zengcuoan"
                    }
                ]
            },
            {
                title: "중산루 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "중산루 보행자 거리",
                        type: "shopping-bag",
                        location: "Zhongshan Road Pedestrian Street"
                    },
                    {
                        time: "12:30",
                        title: "바스 시장 사차면 점심",
                        type: "utensils-crossed",
                        location: "Bashi Market"
                    },
                    {
                        time: "16:30",
                        title: "가오치 공항 이동",
                        type: "plane",
                        location: "Xiamen Gaoqi International Airport"
                    }
                ]
            }
        ]
    },
    harbin: {
        id: "harbin",
        city: "Harbin",
        country: "China",
        summary: "성소피아 성당과 중앙대가, 빙설대세계와 태양도로 겨울 러시아 무드를 담은 하얼빈 템플릿입니다.",
        footer: "Harbin glows coldest and brightest when the ice lanterns switch on.",
        heroImage: "assets/heroes/harbin.jpg",
        heroImagePortrait: 'assets/heroes/harbin-portrait.jpg',
        heroPosition: "center center",
        accent: "#7DD3FC",
        accentRgb: "125, 211, 252",
        ink: "#0F172A",
        inkRgb: "15, 23, 42",
        overlayTop: "rgba(15, 23, 42, 0.46)",
        overlayBottom: "rgba(2, 6, 23, 0.92)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 45.8038,
            longitude: 126.535
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 14,
        phraseLabel: "中文",
        phrases: [
            {
                text: "太冷了",
                pron: "[타이 렁 러]",
                meaning: "너무 추워요"
            },
            {
                text: "有暖气吗？",
                pron: "[여우 놘치 마]",
                meaning: "난방 되나요?"
            },
            {
                text: "一份锅包肉",
                pron: "[이 펀 궈바오러우]",
                meaning: "궈바로우 하나 주세요"
            },
            {
                text: "冰灯几点亮？",
                pron: "[빙덩 지 뎬 량]",
                meaning: "빙등은 몇 시에 켜져요?"
            },
            {
                text: "路很滑，小心",
                pron: "[루 헌 화, 샤오신]",
                meaning: "길이 미끄러워요, 조심하세요"
            },
            {
                text: "有热水吗？",
                pron: "[여우 러수이 마]",
                meaning: "뜨거운 물 있나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "중앙대가 & 성소피아",
                activities: [
                    {
                        time: "10:00",
                        title: "성소피아 성당",
                        type: "landmark",
                        location: "Saint Sophia Cathedral"
                    },
                    {
                        time: "12:30",
                        title: "중앙대가 러시아 요리 점심",
                        type: "utensils-crossed",
                        location: "Central Street"
                    },
                    {
                        time: "18:30",
                        title: "방홍기념탑 & 쑹화강 야경",
                        type: "moon-star",
                        location: "Harbin Flood Control Memorial Tower"
                    }
                ]
            },
            {
                title: "태양도 & 빙설대세계",
                activities: [
                    {
                        time: "10:00",
                        title: "태양도 설조박람회 (겨울)",
                        type: "camera",
                        location: "Sun Island Scenic Area"
                    },
                    {
                        time: "13:30",
                        title: "하얼빈 극지관",
                        type: "binoculars",
                        location: "Harbin Polarland"
                    },
                    {
                        time: "17:00",
                        title: "빙설대세계 야간 점등 (겨울)",
                        type: "sparkles",
                        location: "Harbin Ice and Snow World"
                    }
                ]
            },
            {
                title: "호랑이림원 & 라오다오와이",
                activities: [
                    {
                        time: "09:30",
                        title: "둥베이 호랑이림원",
                        type: "binoculars",
                        location: "Siberian Tiger Park"
                    },
                    {
                        time: "13:00",
                        title: "라오다오와이 궈바로우 점심",
                        type: "utensils-crossed",
                        location: "Laodaowai"
                    },
                    {
                        time: "18:30",
                        title: "하얼빈 대극장 야경",
                        type: "building",
                        location: "Harbin Grand Theatre"
                    }
                ]
            },
            {
                title: "기념관 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "731부대 죄증진열관",
                        type: "library",
                        location: "Unit 731 Museum"
                    },
                    {
                        time: "12:30",
                        title: "하얼빈역 안중근 의사 기념관",
                        type: "landmark",
                        location: "Harbin Railway Station"
                    },
                    {
                        time: "16:30",
                        title: "타이핑 공항 이동",
                        type: "plane",
                        location: "Harbin Taiping International Airport"
                    }
                ]
            }
        ]
    },
    yanji: {
        id: "yanji",
        city: "Yanji",
        country: "China",
        summary: "한글 간판 거리와 옌볜 냉면, 백두산 천지 당일과 두만강까지 잇는 옌지 템플릿입니다.",
        footer: "Yanji feels close to home, with Heaven Lake one long morning away.",
        heroImage: "assets/heroes/yanji.jpg",
        heroImagePortrait: 'assets/heroes/yanji-portrait.jpg',
        heroPosition: "center center",
        accent: "#0F766E",
        accentRgb: "15, 118, 110",
        ink: "#134E4A",
        inkRgb: "19, 78, 74",
        overlayTop: "rgba(19, 78, 74, 0.42)",
        overlayBottom: "rgba(15, 23, 42, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 42.9048,
            longitude: 129.5091
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 11,
        phraseLabel: "中文",
        phrases: [
            {
                text: "会说韩语吗？",
                pron: "[후이 숴 한위 마]",
                meaning: "한국어 할 줄 아세요?"
            },
            {
                text: "一碗冷面",
                pron: "[이 완 렁몐]",
                meaning: "냉면 한 그릇 주세요"
            },
            {
                text: "天池今天能看到吗？",
                pron: "[톈츠 진톈 넝 칸다오 마]",
                meaning: "오늘 천지 볼 수 있나요?"
            },
            {
                text: "打包一份米肠",
                pron: "[다바오 이 펀 미창]",
                meaning: "순대 하나 포장해 주세요"
            },
            {
                text: "几点回延吉？",
                pron: "[지 뎬 후이 옌지]",
                meaning: "옌지로 몇 시에 돌아가요?"
            },
            {
                text: "这里离边境远吗？",
                pron: "[저리 리 볜징 위안 마]",
                meaning: "여기서 국경까지 멀어요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "옌지 한글 간판 거리",
                activities: [
                    {
                        time: "10:00",
                        title: "옌볜대학 한글 간판 벽",
                        type: "camera",
                        location: "Yanbian University"
                    },
                    {
                        time: "12:30",
                        title: "서시장 옌볜 냉면 점심",
                        type: "utensils-crossed",
                        location: "Yanji Xishi Market"
                    },
                    {
                        time: "19:00",
                        title: "옌지 야시장",
                        type: "sparkles",
                        location: "Yanji Night Market"
                    }
                ]
            },
            {
                title: "백두산 천지 당일 (북파)",
                activities: [
                    {
                        time: "06:30",
                        title: "창바이산 북파 산문 이동",
                        type: "map",
                        location: "Changbai Mountain North Scenic Area"
                    },
                    {
                        time: "10:30",
                        title: "천지 전망대",
                        type: "binoculars",
                        location: "Heaven Lake, Changbai Mountain"
                    },
                    {
                        time: "13:30",
                        title: "창바이 폭포 & 온천 계란",
                        type: "trees",
                        location: "Changbai Waterfall"
                    }
                ]
            },
            {
                title: "도문 두만강 & 이동",
                activities: [
                    {
                        time: "09:00",
                        title: "도문 두만강 국경 전망",
                        type: "map",
                        location: "Tumen River Scenic Area"
                    },
                    {
                        time: "12:30",
                        title: "부르하퉁하 강변 산책 & 점심",
                        type: "sun",
                        location: "Buerhatong River"
                    },
                    {
                        time: "16:00",
                        title: "차오양촨 공항 이동",
                        type: "plane",
                        location: "Yanji Chaoyangchuan International Airport"
                    }
                ]
            }
        ]
    },
    chongqing: {
        id: "chongqing",
        city: "Chongqing",
        country: "China",
        summary: "훙야둥 야경과 경전철 관통 건물, 고진 골목과 훠궈를 한 줄로 엮은 산성 충칭 템플릿입니다.",
        footer: "Chongqing stacks itself: trains through towers, lights on the cliff, hotpot at the end.",
        heroImage: "assets/heroes/chongqing.jpg",
        heroImagePortrait: 'assets/heroes/chongqing-portrait.jpg',
        heroPosition: "center center",
        accent: "#D72626",
        accentRgb: "215, 38, 38",
        ink: "#4C0519",
        inkRgb: "76, 5, 25",
        overlayTop: "rgba(76, 5, 25, 0.44)",
        overlayBottom: "rgba(24, 12, 18, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 29.563,
            longitude: 106.5516
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 7,
        phraseLabel: "中文",
        phrases: [
            {
                text: "要鸳鸯锅",
                pron: "[야오 위안양 궈]",
                meaning: "반반 훠궈로 할게요"
            },
            {
                text: "微麻微辣",
                pron: "[웨이 마 웨이 라]",
                meaning: "조금만 얼얼하고 조금만 맵게요"
            },
            {
                text: "索道在哪坐？",
                pron: "[쒀다오 짜이 나 쭤]",
                meaning: "케이블카는 어디서 타나요?"
            },
            {
                text: "轻轨怎么坐？",
                pron: "[칭구이 전머 쭤]",
                meaning: "경전철은 어떻게 타나요?"
            },
            {
                text: "一碗小面",
                pron: "[이 완 샤오몐]",
                meaning: "충칭 샤오몐 한 그릇 주세요"
            },
            {
                text: "几点亮灯？",
                pron: "[지 뎬 량 덩]",
                meaning: "몇 시에 조명이 켜지나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "해방비 & 훙야둥",
                activities: [
                    {
                        time: "10:00",
                        title: "해방비 보행가 쇼핑",
                        type: "shopping-bag",
                        location: "Jiefangbei Pedestrian Street"
                    },
                    {
                        time: "12:30",
                        title: "바이루 먹자골목 점심",
                        type: "utensils-crossed",
                        location: "Bayi Road Food Street"
                    },
                    {
                        time: "19:00",
                        title: "훙야둥 야경",
                        type: "sparkles",
                        location: "Hongya Cave"
                    }
                ]
            },
            {
                title: "리쯔바 & 창장 케이블카",
                activities: [
                    {
                        time: "10:00",
                        title: "리쯔바 경전철 관통 건물",
                        type: "train-front",
                        location: "Liziba Station"
                    },
                    {
                        time: "12:30",
                        title: "어링얼창 카페 점심",
                        type: "coffee",
                        location: "Eling Erchang Creative Park"
                    },
                    {
                        time: "18:00",
                        title: "창장 케이블카 야경",
                        type: "moon-star",
                        location: "Yangtze River Cableway"
                    }
                ]
            },
            {
                title: "츠치커우 고진",
                activities: [
                    {
                        time: "10:00",
                        title: "츠치커우 골목 산책",
                        type: "store",
                        location: "Ciqikou Ancient Town"
                    },
                    {
                        time: "12:30",
                        title: "마오쉐왕 고진 점심",
                        type: "utensils-crossed",
                        location: "Ciqikou Ancient Town"
                    },
                    {
                        time: "15:30",
                        title: "보륜사 & 자링강 전망",
                        type: "landmark",
                        location: "Baolun Temple"
                    }
                ]
            },
            {
                title: "난산 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "난산 이커수 전망대",
                        type: "binoculars",
                        location: "Nanshan Yikeshu Viewing Platform"
                    },
                    {
                        time: "12:30",
                        title: "난빈루 강변 훠궈 점심",
                        type: "utensils-crossed",
                        location: "Nanbin Road"
                    },
                    {
                        time: "16:30",
                        title: "장베이 공항 이동",
                        type: "plane",
                        location: "Chongqing Jiangbei International Airport"
                    }
                ]
            }
        ]
    },
    guilin: {
        id: "guilin",
        city: "Guilin",
        country: "China",
        summary: "상비산과 리장 유람, 룽지 다랑논과 양숴 시골길까지 카르스트 풍경을 나흘로 묶은 구이린 템플릿입니다.",
        footer: "Guilin is an ink painting you can float through.",
        heroImage: "assets/heroes/guilin.jpg",
        heroImagePortrait: 'assets/heroes/guilin-portrait.jpg',
        heroPosition: "center center",
        accent: "#2F855A",
        accentRgb: "47, 133, 90",
        ink: "#022C22",
        inkRgb: "2, 44, 34",
        overlayTop: "rgba(2, 44, 34, 0.42)",
        overlayBottom: "rgba(12, 24, 20, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 25.2742,
            longitude: 110.29
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 8,
        phraseLabel: "中文",
        phrases: [
            {
                text: "我要坐竹筏",
                pron: "[워 야오 쭤 주파]",
                meaning: "대나무 뗏목 타고 싶어요"
            },
            {
                text: "船几点开？",
                pron: "[촨 지 뎬 카이]",
                meaning: "배는 몇 시에 출발하나요?"
            },
            {
                text: "风景真美",
                pron: "[펑징 전 메이]",
                meaning: "풍경이 정말 아름답네요"
            },
            {
                text: "一碗米粉",
                pron: "[이 완 미펀]",
                meaning: "구이린 쌀국수 한 그릇 주세요"
            },
            {
                text: "去阳朔的车在哪？",
                pron: "[취 양숴 더 처 짜이 나]",
                meaning: "양숴 가는 차는 어디 있나요?"
            },
            {
                text: "梯田怎么去？",
                pron: "[티톈 전머 취]",
                meaning: "다랑논은 어떻게 가나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "구이린 시내",
                activities: [
                    {
                        time: "10:00",
                        title: "상비산 코끼리바위",
                        type: "landmark",
                        location: "Elephant Trunk Hill"
                    },
                    {
                        time: "12:30",
                        title: "정양 보행가 구이린 미펀 점심",
                        type: "utensils-crossed",
                        location: "Zhengyang Pedestrian Street"
                    },
                    {
                        time: "19:00",
                        title: "일월쌍탑 야경",
                        type: "moon-star",
                        location: "Sun and Moon Twin Pagodas"
                    }
                ]
            },
            {
                title: "룽지 다랑논",
                activities: [
                    {
                        time: "08:30",
                        title: "룽지 다랑논 트레킹",
                        type: "trees",
                        location: "Longji Rice Terraces"
                    },
                    {
                        time: "12:30",
                        title: "핑안 마을 대나무통밥 점심",
                        type: "utensils-crossed",
                        location: "Ping'an Village"
                    },
                    {
                        time: "15:30",
                        title: "황뤄 야오족 긴머리 마을",
                        type: "landmark",
                        location: "Huangluo Yao Village"
                    }
                ]
            },
            {
                title: "리장 유람 & 양숴",
                activities: [
                    {
                        time: "08:30",
                        title: "리장 유람선 (구이린→양숴)",
                        type: "ship",
                        location: "Li River"
                    },
                    {
                        time: "13:30",
                        title: "양숴 서가 비어피시 점심",
                        type: "utensils-crossed",
                        location: "Yangshuo West Street"
                    },
                    {
                        time: "19:30",
                        title: "인상유삼저 야간 공연",
                        type: "music",
                        location: "Impression Liu Sanjie"
                    }
                ]
            },
            {
                title: "양숴 시골 & 이동",
                activities: [
                    {
                        time: "09:00",
                        title: "위룽강 대나무 뗏목",
                        type: "ship",
                        location: "Yulong River"
                    },
                    {
                        time: "12:00",
                        title: "월량산 농가 점심",
                        type: "utensils-crossed",
                        location: "Moon Hill"
                    },
                    {
                        time: "16:30",
                        title: "량장 공항 이동",
                        type: "plane",
                        location: "Guilin Liangjiang International Airport"
                    }
                ]
            }
        ]
    },
    dalian: {
        id: "dalian",
        city: "Dalian",
        country: "China",
        summary: "싱하이광장과 빈하이로 해안, 라오후탄과 러시아풍정가를 잇는 바닷바람 다롄 템플릿입니다.",
        footer: "Dalian is sea wind, wide squares, and seafood by the pier.",
        heroImage: "assets/heroes/dalian.jpg",
        heroImagePortrait: 'assets/heroes/dalian-portrait.jpg',
        heroPosition: "center center",
        accent: "#1F6FB2",
        accentRgb: "31, 111, 178",
        ink: "#1E3A8A",
        inkRgb: "30, 58, 138",
        overlayTop: "rgba(30, 58, 138, 0.42)",
        overlayBottom: "rgba(15, 23, 42, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 38.914,
            longitude: 121.6147
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 9,
        phraseLabel: "中文",
        phrases: [
            {
                text: "海鲜新鲜吗？",
                pron: "[하이셴 신셴 마]",
                meaning: "해산물 신선한가요?"
            },
            {
                text: "我想坐电车",
                pron: "[워 샹 쭤 뎬처]",
                meaning: "트램을 타보고 싶어요"
            },
            {
                text: "广场怎么走？",
                pron: "[광창 전머 저우]",
                meaning: "광장은 어떻게 가나요?"
            },
            {
                text: "风好大",
                pron: "[펑 하오 다]",
                meaning: "바람이 정말 세네요"
            },
            {
                text: "来一份烤鱿鱼",
                pron: "[라이 이 펀 카오 여우위]",
                meaning: "오징어구이 하나 주세요"
            },
            {
                text: "哪里看日落好？",
                pron: "[날리 칸 르뤄 하오]",
                meaning: "일몰 보기 좋은 곳이 어디예요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "싱하이광장 & 빈하이로",
                activities: [
                    {
                        time: "10:00",
                        title: "싱하이광장 산책",
                        type: "map",
                        location: "Xinghai Square"
                    },
                    {
                        time: "12:30",
                        title: "다롄 해산물 점심",
                        type: "utensils-crossed",
                        location: "Wanbao Seafood Restaurant"
                    },
                    {
                        time: "17:00",
                        title: "빈하이로 해안 일몰",
                        type: "camera",
                        location: "Binhai Road Dalian"
                    }
                ]
            },
            {
                title: "라오후탄 & 남쪽 해안",
                activities: [
                    {
                        time: "09:30",
                        title: "라오후탄 해양공원",
                        type: "sun",
                        location: "Laohutan Ocean Park"
                    },
                    {
                        time: "13:00",
                        title: "푸자좡 해변 점심",
                        type: "utensils-crossed",
                        location: "Fujiazhuang Beach"
                    },
                    {
                        time: "16:30",
                        title: "방추이다오 해안 산책",
                        type: "trees",
                        location: "Bangchui Island Scenic Area"
                    }
                ]
            },
            {
                title: "러시아풍정가 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "러시아 풍정가 산책",
                        type: "store",
                        location: "Russian Style Street"
                    },
                    {
                        time: "12:30",
                        title: "중산광장 근처 점심",
                        type: "utensils-crossed",
                        location: "Zhongshan Square Dalian"
                    },
                    {
                        time: "16:30",
                        title: "저우수이쯔 공항 이동",
                        type: "plane",
                        location: "Dalian Zhoushuizi International Airport"
                    }
                ]
            }
        ]
    },
    shenyang: {
        id: "shenyang",
        city: "Shenyang",
        country: "China",
        summary: "선양고궁과 장씨수부, 북릉공원과 중가 야경으로 청나라 첫 수도를 걷는 선양 템플릿입니다.",
        footer: "Shenyang is the first Qing capital, still warm with dumplings and skewers.",
        heroImage: "assets/heroes/shenyang.jpg",
        heroImagePortrait: 'assets/heroes/shenyang-portrait.jpg',
        heroPosition: "center center",
        accent: "#B8860B",
        accentRgb: "184, 134, 11",
        ink: "#422006",
        inkRgb: "66, 32, 6",
        overlayTop: "rgba(66, 32, 6, 0.44)",
        overlayBottom: "rgba(28, 20, 12, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 41.8057,
            longitude: 123.4315
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 10,
        phraseLabel: "中文",
        phrases: [
            {
                text: "故宫怎么走？",
                pron: "[구궁 전머 저우]",
                meaning: "고궁은 어떻게 가나요?"
            },
            {
                text: "来一个鸡架",
                pron: "[라이 이 거 지자]",
                meaning: "지자(닭뼈 구이) 하나 주세요"
            },
            {
                text: "天真冷",
                pron: "[톈 전 렁]",
                meaning: "날씨가 정말 춥네요"
            },
            {
                text: "有讲解吗？",
                pron: "[여우 장제 마]",
                meaning: "해설 가이드 있나요?"
            },
            {
                text: "来十串",
                pron: "[라이 스 촨]",
                meaning: "꼬치 열 개 주세요"
            },
            {
                text: "老好了",
                pron: "[라오 하오 러]",
                meaning: "엄청 좋아요 (동북 사투리)"
            }
        ],
        itineraryTemplate: [
            {
                title: "선양고궁 & 중가",
                activities: [
                    {
                        time: "09:30",
                        title: "선양고궁 (무크덴 궁)",
                        type: "landmark",
                        location: "Shenyang Imperial Palace"
                    },
                    {
                        time: "12:30",
                        title: "라오볜 만두 점심",
                        type: "utensils-crossed",
                        location: "Laobian Dumpling Restaurant"
                    },
                    {
                        time: "18:30",
                        title: "중가 보행가 야경 쇼핑",
                        type: "shopping-bag",
                        location: "Zhongjie Pedestrian Street"
                    }
                ]
            },
            {
                title: "시타 & 태원가",
                activities: [
                    {
                        time: "10:00",
                        title: "중산광장 옛 만철 건물",
                        type: "building",
                        location: "Zhongshan Square Shenyang"
                    },
                    {
                        time: "12:30",
                        title: "시타 조선족 거리 점심",
                        type: "utensils-crossed",
                        location: "Xita Street"
                    },
                    {
                        time: "18:00",
                        title: "태원가 쇼핑 & 저녁",
                        type: "shopping-cart",
                        location: "Taiyuan Street"
                    }
                ]
            },
            {
                title: "북릉 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "북릉공원 소릉 산책",
                        type: "trees",
                        location: "Beiling Park"
                    },
                    {
                        time: "12:30",
                        title: "장씨수부 관람 & 점심",
                        type: "building-2",
                        location: "Marshal Zhang's Mansion Museum"
                    },
                    {
                        time: "16:30",
                        title: "타오셴 공항 이동",
                        type: "plane",
                        location: "Shenyang Taoxian International Airport"
                    }
                ]
            }
        ]
    },
    yantai: {
        id: "yantai",
        city: "Yantai",
        country: "China",
        summary: "옌타이산 등대와 펑라이각 전설, 창위 와인과 양마도 해안을 담은 옌타이 템플릿입니다.",
        footer: "Yantai pours wine by the sea and tells legends of the eight immortals.",
        heroImage: "assets/heroes/yantai.jpg",
        heroImagePortrait: 'assets/heroes/yantai-portrait.jpg',
        heroPosition: "center center",
        accent: "#7B2D8E",
        accentRgb: "123, 45, 142",
        ink: "#2E1065",
        inkRgb: "46, 16, 101",
        overlayTop: "rgba(46, 16, 101, 0.42)",
        overlayBottom: "rgba(20, 14, 34, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 37.4638,
            longitude: 121.4479
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 11,
        phraseLabel: "中文",
        phrases: [
            {
                text: "一杯红酒",
                pron: "[이 베이 훙주]",
                meaning: "와인 한 잔 주세요"
            },
            {
                text: "可以试喝吗？",
                pron: "[커이 스 허 마]",
                meaning: "시음할 수 있나요?"
            },
            {
                text: "苹果甜吗？",
                pron: "[핑궈 톈 마]",
                meaning: "사과 달아요?"
            },
            {
                text: "去蓬莱怎么走？",
                pron: "[취 펑라이 전머 저우]",
                meaning: "펑라이는 어떻게 가나요?"
            },
            {
                text: "有海景房吗？",
                pron: "[여우 하이징팡 마]",
                meaning: "바다 전망 방 있나요?"
            },
            {
                text: "轮渡几点？",
                pron: "[룬두 지 뎬]",
                meaning: "페리는 몇 시예요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "옌타이산 & 조계지",
                activities: [
                    {
                        time: "10:00",
                        title: "옌타이산 등대 공원",
                        type: "landmark",
                        location: "Yantaishan Park"
                    },
                    {
                        time: "12:30",
                        title: "차오양제 옛 거리 점심",
                        type: "utensils-crossed",
                        location: "Chaoyang Street Yantai"
                    },
                    {
                        time: "17:30",
                        title: "제1해수욕장 일몰",
                        type: "camera",
                        location: "Yantai First Bathing Beach"
                    }
                ]
            },
            {
                title: "양마도 & 와인",
                activities: [
                    {
                        time: "09:30",
                        title: "양마도 해안도로 드라이브",
                        type: "map",
                        location: "Yangma Island"
                    },
                    {
                        time: "12:30",
                        title: "양마도 어가 해산물 점심",
                        type: "utensils-crossed",
                        location: "Yangma Island"
                    },
                    {
                        time: "16:00",
                        title: "창위 와인문화박물관 시음",
                        type: "library",
                        location: "Changyu Wine Culture Museum"
                    }
                ]
            },
            {
                title: "펑라이 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "창위 카스텔 와인성 투어",
                        type: "ticket",
                        location: "Chateau Changyu Castel"
                    },
                    {
                        time: "12:30",
                        title: "펑라이각 & 해변 점심",
                        type: "landmark",
                        location: "Penglai Pavilion"
                    },
                    {
                        time: "16:30",
                        title: "펑라이 공항 이동",
                        type: "plane",
                        location: "Yantai Penglai International Airport"
                    }
                ]
            }
        ]
    },
    weihai: {
        id: "weihai",
        city: "Weihai",
        country: "China",
        summary: "류궁다오 페리와 한국인거리, 성산두 일출과 환추이러우 전망을 묶은 웨이하이 템플릿입니다.",
        footer: "Weihai is clean air, a quiet bay, and the first sunrise on the coast.",
        heroImage: "assets/heroes/weihai.jpg",
        heroPosition: "center center",
        accent: "#1B4EAA",
        accentRgb: "27, 78, 170",
        ink: "#083344",
        inkRgb: "8, 51, 68",
        overlayTop: "rgba(8, 51, 68, 0.42)",
        overlayBottom: "rgba(12, 24, 32, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 37.513,
            longitude: 122.1204
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 12,
        phraseLabel: "中文",
        phrases: [
            {
                text: "去刘公岛的船票",
                pron: "[취 류궁다오 더 촨퍄오]",
                meaning: "류궁다오 가는 배표 주세요"
            },
            {
                text: "韩国街在哪？",
                pron: "[한궈제 짜이 나]",
                meaning: "한국인 거리는 어디예요?"
            },
            {
                text: "我是韩国人",
                pron: "[워 스 한궈런]",
                meaning: "저는 한국인이에요"
            },
            {
                text: "空气真好",
                pron: "[쿵치 전 하오]",
                meaning: "공기가 정말 좋네요"
            },
            {
                text: "几点日出？",
                pron: "[지 뎬 르추]",
                meaning: "일출은 몇 시예요?"
            },
            {
                text: "帮我叫车",
                pron: "[방 워 자오 처]",
                meaning: "차 좀 불러주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "류궁다오 & 환추이러우",
                activities: [
                    {
                        time: "09:00",
                        title: "류궁다오 페리 & 섬 산책",
                        type: "ship",
                        location: "Liugong Island"
                    },
                    {
                        time: "12:30",
                        title: "섬 안 해산물 점심",
                        type: "utensils-crossed",
                        location: "Liugong Island"
                    },
                    {
                        time: "17:30",
                        title: "환추이러우 전망 & 야경",
                        type: "tower-control",
                        location: "Huancuilou Park"
                    }
                ]
            },
            {
                title: "해변 산책로 & 한국인거리",
                activities: [
                    {
                        time: "10:00",
                        title: "웨이하이 공원 해변 산책",
                        type: "map",
                        location: "Weihai Park"
                    },
                    {
                        time: "12:30",
                        title: "한러팡 한국인거리 점심",
                        type: "utensils-crossed",
                        location: "Hanlefang Weihai"
                    },
                    {
                        time: "18:00",
                        title: "행복문 야경",
                        type: "moon-star",
                        location: "Happiness Gate Weihai"
                    }
                ]
            },
            {
                title: "성산두 & 이동",
                activities: [
                    {
                        time: "08:30",
                        title: "성산두 천애 해각",
                        type: "sun",
                        location: "Chengshantou Scenic Area"
                    },
                    {
                        time: "12:30",
                        title: "시샤커우 어촌 해산물 점심",
                        type: "utensils-crossed",
                        location: "Xixiakou Scenic Area"
                    },
                    {
                        time: "16:30",
                        title: "다수이보 공항 이동",
                        type: "plane",
                        location: "Weihai Dashuibo Airport"
                    }
                ]
            }
        ]
    },
    wuhan: {
        id: "wuhan",
        city: "Wuhan",
        country: "China",
        summary: "황학루와 창장대교, 둥후 녹도와 후베이성박물관, 호부항 먹거리를 잇는 우한 템플릿입니다.",
        footer: "Wuhan starts with hot dry noodles and ends with the river lights.",
        heroImage: "assets/heroes/wuhan.jpg",
        heroImagePortrait: 'assets/heroes/wuhan-portrait.jpg',
        heroPosition: "center center",
        accent: "#E08A1E",
        accentRgb: "224, 138, 30",
        ink: "#451A03",
        inkRgb: "69, 26, 3",
        overlayTop: "rgba(69, 26, 3, 0.44)",
        overlayBottom: "rgba(26, 18, 12, 0.90)",
        timeZone: "Asia/Shanghai",
        weather: {
            latitude: 30.5928,
            longitude: 114.3055
        },
        currency: {
            code: "CNY",
            symbol: "¥",
            locale: "zh-CN"
        },
        startOffsetDays: 13,
        phraseLabel: "中文",
        phrases: [
            {
                text: "一碗热干面",
                pron: "[이 완 러간몐]",
                meaning: "러간몐 한 그릇 주세요"
            },
            {
                text: "过早了吗？",
                pron: "[궈자오 러 마]",
                meaning: "아침 드셨어요? (우한식 인사)"
            },
            {
                text: "黄鹤楼几点开门？",
                pron: "[황허러우 지 뎬 카이먼]",
                meaning: "황학루는 몇 시에 여나요?"
            },
            {
                text: "我想租自行车",
                pron: "[워 샹 쭈 쯔싱처]",
                meaning: "자전거 빌리고 싶어요"
            },
            {
                text: "鸭脖辣不辣？",
                pron: "[야보 라 부 라]",
                meaning: "오리목 매운가요?"
            },
            {
                text: "樱花开了吗？",
                pron: "[잉화 카이 러 마]",
                meaning: "벚꽃 폈나요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "황학루 & 창장대교",
                activities: [
                    {
                        time: "09:30",
                        title: "황학루 전망",
                        type: "landmark",
                        location: "Yellow Crane Tower"
                    },
                    {
                        time: "12:30",
                        title: "호부항 러간몐 점심",
                        type: "utensils-crossed",
                        location: "Hubu Alley"
                    },
                    {
                        time: "18:30",
                        title: "창장대교 강변 야경",
                        type: "bridge",
                        location: "Wuhan Yangtze River Bridge"
                    }
                ]
            },
            {
                title: "둥후 & 박물관",
                activities: [
                    {
                        time: "09:30",
                        title: "후베이성박물관 증후을 편종",
                        type: "library",
                        location: "Hubei Provincial Museum"
                    },
                    {
                        time: "12:30",
                        title: "추허한제 점심 & 쇼핑",
                        type: "utensils-crossed",
                        location: "Chu River Han Street"
                    },
                    {
                        time: "16:00",
                        title: "둥후 녹도 자전거 & 일몰",
                        type: "trees",
                        location: "East Lake Greenway"
                    }
                ]
            },
            {
                title: "한커우 조계지",
                activities: [
                    {
                        time: "10:00",
                        title: "장한루 보행가 옛 조계지",
                        type: "map",
                        location: "Jianghan Road Pedestrian Street"
                    },
                    {
                        time: "12:30",
                        title: "리황피루 카페 거리 브런치",
                        type: "coffee",
                        location: "Lihuangpi Road"
                    },
                    {
                        time: "19:00",
                        title: "한커우 장탄 강변 야경",
                        type: "moon-star",
                        location: "Hankou Jiangtan Park"
                    }
                ]
            },
            {
                title: "한양 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "귀원선사 참배",
                        type: "landmark",
                        location: "Guiyuan Temple"
                    },
                    {
                        time: "12:30",
                        title: "칭촨거 산책 & 점심",
                        type: "camera",
                        location: "Qingchuan Pavilion"
                    },
                    {
                        time: "16:30",
                        title: "톈허 공항 이동",
                        type: "plane",
                        location: "Wuhan Tianhe International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/taipei-portrait.jpg',
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
    kaohsiung: {
        id: "kaohsiung",
        city: "Kaohsiung",
        country: "Taiwan",
        summary: "연지담 용호탑, 보얼예술특구와 치진섬, 불광산과 류허 야시장, 아이허 야경을 3박 4일로 묶은 가오슝 템플릿입니다.",
        footer: "Kaohsiung is a harbor city that turns on its lights slowly and generously.",
        heroImage: "assets/heroes/kaohsiung.jpg",
        heroImagePortrait: 'assets/heroes/kaohsiung-portrait.jpg',
        heroPosition: "center center",
        accent: "#F43F76",
        accentRgb: "244, 63, 118",
        ink: "#1B1F3A",
        inkRgb: "27, 31, 58",
        overlayTop: "rgba(27, 31, 58, 0.36)",
        overlayBottom: "rgba(14, 16, 32, 0.86)",
        timeZone: "Asia/Taipei",
        weather: {
            latitude: 22.6273,
            longitude: 120.3014
        },
        currency: {
            code: "TWD",
            symbol: "NT$",
            locale: "zh-TW"
        },
        startOffsetDays: 7,
        phraseLabel: "中文",
        phrases: [
            {
                text: "不好意思",
                pron: "부하오이쓰",
                meaning: "실례합니다 / 미안해요 (대만식)"
            },
            {
                text: "一杯珍珠奶茶",
                pron: "이 베이 전주 나이차",
                meaning: "버블티 한 잔 주세요"
            },
            {
                text: "捷運站在哪裡？",
                pron: "제윈잔 짜이 나리",
                meaning: "MRT 역이 어디예요?"
            },
            {
                text: "內用還是外帶？",
                pron: "네이용 하이스 와이다이",
                meaning: "매장에서 드세요, 포장이에요? (점원이 묻는 말)"
            },
            {
                text: "可以刷卡嗎？",
                pron: "커이 솨카 마",
                meaning: "카드 결제 되나요?"
            },
            {
                text: "超好吃！",
                pron: "차오 하오츠",
                meaning: "엄청 맛있어요!"
            }
        ],
        itineraryTemplate: [
            {
                title: "쭤잉 연지담",
                activities: [
                    {
                        time: "10:00",
                        title: "연지담 용호탑",
                        type: "landmark",
                        location: "Dragon and Tiger Pagodas"
                    },
                    {
                        time: "13:30",
                        title: "한신 아레나 점심 & 쇼핑",
                        type: "shopping-cart",
                        location: "Hanshin Arena Shopping Plaza"
                    },
                    {
                        time: "18:30",
                        title: "루이펑 야시장",
                        type: "sparkles",
                        location: "Ruifeng Night Market"
                    }
                ]
            },
            {
                title: "옌청 & 치진",
                activities: [
                    {
                        time: "10:00",
                        title: "보얼 예술특구",
                        type: "palette",
                        location: "Pier-2 Art Center"
                    },
                    {
                        time: "13:00",
                        title: "치진섬 해산물 거리 점심",
                        type: "utensils-crossed",
                        location: "Cijin Island"
                    },
                    {
                        time: "18:30",
                        title: "아이허 야경 유람선",
                        type: "moon-star",
                        location: "Love River"
                    }
                ]
            },
            {
                title: "불광산 & 류허",
                activities: [
                    {
                        time: "09:30",
                        title: "불광산 불타기념관",
                        type: "landmark",
                        location: "Fo Guang Shan Buddha Museum"
                    },
                    {
                        time: "15:00",
                        title: "메이리다오역 빛의 돔",
                        type: "train-front",
                        location: "Formosa Boulevard Station"
                    },
                    {
                        time: "18:30",
                        title: "류허 야시장 저녁",
                        type: "utensils-crossed",
                        location: "Liuhe Night Market"
                    }
                ]
            },
            {
                title: "항구 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "가오슝 유행음악센터",
                        type: "music",
                        location: "Kaohsiung Music Center"
                    },
                    {
                        time: "12:30",
                        title: "다강교 & 하마싱 점심",
                        type: "bridge",
                        location: "Great Harbor Bridge"
                    },
                    {
                        time: "15:30",
                        title: "가오슝 공항 이동",
                        type: "plane",
                        location: "Kaohsiung International Airport"
                    }
                ]
            }
        ]
    },
    taichung: {
        id: "taichung",
        city: "Taichung",
        country: "Taiwan",
        summary: "궁위안옌과와 펑자 야시장, 르웨탄 유람선, 무지개마을과 가오메이 습지 선셋을 3박 4일로 엮은 타이중 템플릿입니다.",
        footer: "Taichung pairs bubble tea and a mountain lake within one easy day.",
        heroImage: "assets/heroes/taichung.jpg",
        heroImagePortrait: 'assets/heroes/taichung-portrait.jpg',
        heroPosition: "center center",
        accent: "#8B5CF6",
        accentRgb: "139, 92, 246",
        ink: "#1E2A3A",
        inkRgb: "30, 42, 58",
        overlayTop: "rgba(30, 42, 58, 0.34)",
        overlayBottom: "rgba(16, 22, 32, 0.84)",
        timeZone: "Asia/Taipei",
        weather: {
            latitude: 24.1477,
            longitude: 120.6736
        },
        currency: {
            code: "TWD",
            symbol: "NT$",
            locale: "zh-TW"
        },
        startOffsetDays: 8,
        phraseLabel: "中文",
        phrases: [
            {
                text: "我要一份雞排",
                pron: "워 야오 이 펀 지파이",
                meaning: "지파이(대만식 닭튀김) 하나 주세요"
            },
            {
                text: "去逢甲夜市",
                pron: "취 펑자 예스",
                meaning: "펑자 야시장으로 가주세요"
            },
            {
                text: "半糖少冰",
                pron: "반탕 사오빙",
                meaning: "설탕 반, 얼음 적게요 (음료 주문)"
            },
            {
                text: "哪裡可以買悠遊卡？",
                pron: "나리 커이 마이 여우여우카",
                meaning: "이지카드는 어디서 사나요?"
            },
            {
                text: "幾點日落？",
                pron: "지 뎬 르뤄",
                meaning: "해는 몇 시에 지나요?"
            },
            {
                text: "太好了",
                pron: "타이 하오 러",
                meaning: "아주 좋아요 / 잘됐어요"
            }
        ],
        itineraryTemplate: [
            {
                title: "타이중 시내",
                activities: [
                    {
                        time: "10:00",
                        title: "국립 대만 미술관",
                        type: "palette",
                        location: "National Taiwan Museum of Fine Arts"
                    },
                    {
                        time: "13:00",
                        title: "궁위안옌과 아이스크림",
                        type: "coffee",
                        location: "Miyahara"
                    },
                    {
                        time: "18:30",
                        title: "펑자 야시장",
                        type: "utensils-crossed",
                        location: "Fengjia Night Market"
                    }
                ]
            },
            {
                title: "르웨탄 (일월담)",
                activities: [
                    {
                        time: "09:00",
                        title: "르웨탄 유람선",
                        type: "ship",
                        location: "Sun Moon Lake"
                    },
                    {
                        time: "12:30",
                        title: "이다샤오 거리 점심",
                        type: "store",
                        location: "Ita Thao Pier"
                    },
                    {
                        time: "15:30",
                        title: "르웨탄 로프웨이",
                        type: "binoculars",
                        location: "Sun Moon Lake Ropeway"
                    }
                ]
            },
            {
                title: "무지개마을 & 가오메이",
                activities: [
                    {
                        time: "10:00",
                        title: "무지개마을",
                        type: "camera",
                        location: "Rainbow Village Taichung"
                    },
                    {
                        time: "13:00",
                        title: "선지신촌 점심 & 소품 구경",
                        type: "gift",
                        location: "Shen Ji New Village"
                    },
                    {
                        time: "17:30",
                        title: "가오메이 습지 선셋",
                        type: "sun",
                        location: "Gaomei Wetlands"
                    }
                ]
            },
            {
                title: "가극원 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "타이중 국가가극원",
                        type: "building",
                        location: "National Taichung Theater"
                    },
                    {
                        time: "12:00",
                        title: "타이중 제2시장 점심",
                        type: "store",
                        location: "Taichung Second Market"
                    },
                    {
                        time: "15:30",
                        title: "타이중 공항 이동",
                        type: "plane",
                        location: "Taichung International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/hanoi-portrait.jpg',
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
    'da-nang': {
        id: "da-nang",
        city: "Da Nang",
        country: "Vietnam",
        summary: "미케 비치 아침, 바나힐 골든 브릿지, 호이안 등불, 용다리 불쇼까지 바다와 산과 옛 마을을 한 번에 도는 다낭 템플릿입니다.",
        footer: "Da Nang is a beach morning, a mountain bridge, and a lantern town after dark.",
        heroImage: "assets/heroes/da-nang.jpg",
        heroImagePortrait: 'assets/heroes/da-nang-portrait.jpg',
        heroPosition: "center center",
        accent: "#0F940D",
        accentRgb: "15, 148, 13",
        ink: "#0F2A2E",
        inkRgb: "15, 42, 46",
        overlayTop: "rgba(15, 42, 46, 0.44)",
        overlayBottom: "rgba(10, 24, 28, 0.90)",
        timeZone: "Asia/Ho_Chi_Minh",
        weather: {
            latitude: 16.0544,
            longitude: 108.2022
        },
        currency: {
            code: "VND",
            symbol: "₫",
            locale: "vi-VN"
        },
        startOffsetDays: 9,
        phraseLabel: "Tiếng Việt",
        phrases: [
            {
                text: "Bao nhiêu tiền?",
                pron: "[바오 니에우 띠엔]",
                meaning: "얼마예요?"
            },
            {
                text: "Đắt quá!",
                pron: "[닷 꾸아]",
                meaning: "너무 비싸요!"
            },
            {
                text: "Bớt chút được không?",
                pron: "[벗 쭛 드억 콩]",
                meaning: "조금 깎아 주실 수 있나요?"
            },
            {
                text: "Làm ơn đưa tôi đến bãi biển Mỹ Khê",
                pron: "[람 언 드어 또이 덴 바이 비엔 미 케]",
                meaning: "미케 비치까지 데려다 주세요"
            },
            {
                text: "Không cay",
                pron: "[콩 까이]",
                meaning: "안 맵게 해주세요"
            },
            {
                text: "Cho tôi một ly cà phê sữa đá",
                pron: "[쪼 또이 못 리 까페 스어 다]",
                meaning: "연유 아이스커피 한 잔 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "미케 비치 & 손짜",
                activities: [
                    {
                        time: "09:30",
                        title: "미케 비치 아침 산책",
                        type: "sun",
                        location: "My Khe Beach"
                    },
                    {
                        time: "13:00",
                        title: "영응사 해수관음상",
                        type: "landmark",
                        location: "Linh Ung Pagoda"
                    },
                    {
                        time: "18:30",
                        title: "안트엉 거리 저녁",
                        type: "utensils-crossed",
                        location: "An Thuong Tourist Area"
                    }
                ]
            },
            {
                title: "바나힐",
                activities: [
                    {
                        time: "08:00",
                        title: "바나힐 케이블카 탑승",
                        type: "ticket",
                        location: "Sun World Ba Na Hills"
                    },
                    {
                        time: "10:00",
                        title: "골든 브릿지",
                        type: "bridge",
                        location: "Golden Bridge"
                    },
                    {
                        time: "13:00",
                        title: "프렌치 빌리지 점심 & 판타지 파크",
                        type: "sparkles",
                        location: "French Village Ba Na Hills"
                    }
                ]
            },
            {
                title: "호이안 올드타운",
                activities: [
                    {
                        time: "10:00",
                        title: "내원교 & 옛 거리 산책",
                        type: "landmark",
                        location: "Japanese Covered Bridge"
                    },
                    {
                        time: "13:00",
                        title: "까오러우 점심",
                        type: "utensils-crossed",
                        location: "Hoi An Market"
                    },
                    {
                        time: "18:30",
                        title: "투본강 등불 야경 & 야시장",
                        type: "moon-star",
                        location: "Hoi An Night Market"
                    }
                ]
            },
            {
                title: "오행산 & 한강",
                activities: [
                    {
                        time: "09:30",
                        title: "오행산 동굴 사원",
                        type: "landmark",
                        location: "Marble Mountains"
                    },
                    {
                        time: "13:00",
                        title: "한시장 로컬 점심",
                        type: "store",
                        location: "Han Market"
                    },
                    {
                        time: "20:30",
                        title: "용다리 야경 & 불쇼",
                        type: "sparkles",
                        location: "Dragon Bridge"
                    }
                ]
            },
            {
                title: "마지막 카페 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "콩카페 코코넛 커피",
                        type: "coffee",
                        location: "Cong Caphe Da Nang"
                    },
                    {
                        time: "12:30",
                        title: "빈컴 플라자 마지막 쇼핑",
                        type: "shopping-bag",
                        location: "Vincom Plaza Da Nang"
                    },
                    {
                        time: "16:30",
                        title: "다낭 공항 이동",
                        type: "plane",
                        location: "Da Nang International Airport"
                    }
                ]
            }
        ]
    },
    'nha-trang': {
        id: "nha-trang",
        city: "Nha Trang",
        country: "Vietnam",
        summary: "포나가르 탑과 롱선사, 머드 온천, 혼문섬 스노클링, 빈원더스를 해변 도시의 느긋한 리듬으로 엮은 나트랑 템플릿입니다.",
        footer: "Nha Trang works best when the bay does most of the planning.",
        heroImage: "assets/heroes/nha-trang.jpg",
        heroImagePortrait: 'assets/heroes/nha-trang-portrait.jpg',
        heroPosition: "center center",
        accent: "#08B263",
        accentRgb: "8, 178, 99",
        ink: "#0C2A3A",
        inkRgb: "12, 42, 58",
        overlayTop: "rgba(12, 42, 58, 0.44)",
        overlayBottom: "rgba(8, 22, 34, 0.90)",
        timeZone: "Asia/Ho_Chi_Minh",
        weather: {
            latitude: 12.2388,
            longitude: 109.1967
        },
        currency: {
            code: "VND",
            symbol: "₫",
            locale: "vi-VN"
        },
        startOffsetDays: 10,
        phraseLabel: "Tiếng Việt",
        phrases: [
            {
                text: "Xin lỗi",
                pron: "[씬 로이]",
                meaning: "죄송합니다 / 실례합니다"
            },
            {
                text: "Nhà vệ sinh ở đâu?",
                pron: "[냐 베 신 어 더우]",
                meaning: "화장실이 어디예요?"
            },
            {
                text: "Tôi không hiểu",
                pron: "[또이 콩 히에우]",
                meaning: "잘 이해하지 못했어요"
            },
            {
                text: "Ngon quá!",
                pron: "[응온 꾸아]",
                meaning: "정말 맛있어요!"
            },
            {
                text: "Tôi muốn gọi món",
                pron: "[또이 무온 고이 몬]",
                meaning: "주문할게요"
            },
            {
                text: "Hẹn gặp lại",
                pron: "[헨 갑 라이]",
                meaning: "또 만나요"
            }
        ],
        itineraryTemplate: [
            {
                title: "나트랑 비치 & 시내",
                activities: [
                    {
                        time: "09:30",
                        title: "나트랑 비치",
                        type: "sun",
                        location: "Nha Trang Beach"
                    },
                    {
                        time: "13:00",
                        title: "담시장 로컬 점심",
                        type: "store",
                        location: "Dam Market"
                    },
                    {
                        time: "18:30",
                        title: "나트랑 야시장",
                        type: "sparkles",
                        location: "Nha Trang Night Market"
                    }
                ]
            },
            {
                title: "포나가르 & 머드 온천",
                activities: [
                    {
                        time: "09:00",
                        title: "롱선사 백불상",
                        type: "landmark",
                        location: "Long Son Pagoda"
                    },
                    {
                        time: "11:00",
                        title: "포나가르 참탑",
                        type: "landmark",
                        location: "Po Nagar Cham Towers"
                    },
                    {
                        time: "15:30",
                        title: "탑바 머드 온천",
                        type: "sparkles",
                        location: "Thap Ba Hot Spring Center"
                    }
                ]
            },
            {
                title: "혼문섬 스노클링",
                activities: [
                    {
                        time: "08:30",
                        title: "혼문섬 스노클링 투어",
                        type: "ship",
                        location: "Hon Mun Island"
                    },
                    {
                        time: "12:30",
                        title: "혼땀섬 해변 점심",
                        type: "sun",
                        location: "Hon Tam Island"
                    },
                    {
                        time: "18:30",
                        title: "해변 브루하우스 저녁",
                        type: "utensils-crossed",
                        location: "Louisiane Brewhouse"
                    }
                ]
            },
            {
                title: "빈원더스 & 혼쫑곶",
                activities: [
                    {
                        time: "08:30",
                        title: "빈원더스 케이블카 입장",
                        type: "ticket",
                        location: "VinWonders Nha Trang"
                    },
                    {
                        time: "16:00",
                        title: "혼쫑곶 노을",
                        type: "camera",
                        location: "Hon Chong Promontory"
                    },
                    {
                        time: "19:00",
                        title: "세일링 클럽 비치 디너",
                        type: "moon-star",
                        location: "Sailing Club Nha Trang"
                    }
                ]
            },
            {
                title: "마지막 한 끼 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "나트랑 대성당",
                        type: "landmark",
                        location: "Nha Trang Cathedral"
                    },
                    {
                        time: "12:30",
                        title: "넴느엉 점심",
                        type: "utensils-crossed",
                        location: "Nem Nuong Dang Van Quyen"
                    },
                    {
                        time: "16:30",
                        title: "깜란 공항 이동",
                        type: "plane",
                        location: "Cam Ranh International Airport"
                    }
                ]
            }
        ]
    },
    'phu-quoc': {
        id: "phu-quoc",
        city: "Phu Quoc",
        country: "Vietnam",
        summary: "롱비치와 사오비치, 혼똠 케이블카와 선셋타운 키스 브릿지, 즈엉동 야시장까지 섬 남북을 오가는 푸꾸옥 템플릿입니다.",
        footer: "Phu Quoc is white sand by day and a sunset show by night.",
        heroImage: "assets/heroes/phu-quoc.jpg",
        heroPosition: "center center",
        accent: "#EA0C18",
        accentRgb: "234, 12, 24",
        ink: "#3A1A0A",
        inkRgb: "58, 26, 10",
        overlayTop: "rgba(58, 26, 10, 0.42)",
        overlayBottom: "rgba(30, 16, 10, 0.90)",
        timeZone: "Asia/Ho_Chi_Minh",
        weather: {
            latitude: 10.2899,
            longitude: 103.984
        },
        currency: {
            code: "VND",
            symbol: "₫",
            locale: "vi-VN"
        },
        startOffsetDays: 12,
        phraseLabel: "Tiếng Việt",
        phrases: [
            {
                text: "Tôi muốn đi đến đây",
                pron: "[또이 무온 디 덴 더이]",
                meaning: "여기로 가고 싶어요"
            },
            {
                text: "Có bán kem chống nắng không?",
                pron: "[꼬 반 껨 쫑 낭 콩]",
                meaning: "선크림 파나요?"
            },
            {
                text: "Mấy giờ mặt trời lặn?",
                pron: "[머이 저 맛 쩌이 란]",
                meaning: "해가 몇 시에 지나요?"
            },
            {
                text: "Cho tôi nước dừa",
                pron: "[쪼 또이 느억 즈어]",
                meaning: "코코넛 주스 주세요"
            },
            {
                text: "Hải sản có tươi không?",
                pron: "[하이 산 꼬 뜨어이 콩]",
                meaning: "해산물 신선한가요?"
            },
            {
                text: "Giúp tôi với!",
                pron: "[줍 또이 버이]",
                meaning: "도와주세요!"
            }
        ],
        itineraryTemplate: [
            {
                title: "즈엉동 & 롱비치",
                activities: [
                    {
                        time: "10:00",
                        title: "롱비치 오전",
                        type: "sun",
                        location: "Long Beach Phu Quoc"
                    },
                    {
                        time: "13:00",
                        title: "진꺼우 사당 바위",
                        type: "landmark",
                        location: "Dinh Cau Temple"
                    },
                    {
                        time: "18:30",
                        title: "즈엉동 야시장 해산물",
                        type: "sparkles",
                        location: "Phu Quoc Night Market"
                    }
                ]
            },
            {
                title: "남부 — 사오비치 & 선셋타운",
                activities: [
                    {
                        time: "09:00",
                        title: "사오비치 백사장",
                        type: "sun",
                        location: "Bai Sao Beach"
                    },
                    {
                        time: "13:00",
                        title: "혼똠 해상 케이블카",
                        type: "ticket",
                        location: "Sun World Hon Thom"
                    },
                    {
                        time: "18:00",
                        title: "선셋타운 키스 브릿지 노을",
                        type: "bridge",
                        location: "Kiss Bridge"
                    }
                ]
            },
            {
                title: "북부 — 빈원더스 & 그랜드월드",
                activities: [
                    {
                        time: "09:00",
                        title: "빈원더스 푸꾸옥",
                        type: "ticket",
                        location: "VinWonders Phu Quoc"
                    },
                    {
                        time: "13:30",
                        title: "빈펄 사파리",
                        type: "trees",
                        location: "Vinpearl Safari Phu Quoc"
                    },
                    {
                        time: "18:30",
                        title: "그랜드월드 베니스 운하 야경",
                        type: "lightbulb",
                        location: "Grand World Phu Quoc"
                    }
                ]
            },
            {
                title: "동부 & 중부 로컬",
                activities: [
                    {
                        time: "09:30",
                        title: "함닌 어촌 마을",
                        type: "ship",
                        location: "Ham Ninh Fishing Village"
                    },
                    {
                        time: "12:30",
                        title: "수오이짜인 폭포 산책",
                        type: "trees",
                        location: "Suoi Tranh Waterfall"
                    },
                    {
                        time: "16:00",
                        title: "응옥히엔 진주농장",
                        type: "gift",
                        location: "Ngoc Hien Pearl Farm"
                    }
                ]
            },
            {
                title: "마지막 쇼핑 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "즈엉동 시장 아침",
                        type: "store",
                        location: "Duong Dong Market"
                    },
                    {
                        time: "12:30",
                        title: "킹콩마트 기념품",
                        type: "shopping-bag",
                        location: "King Kong Mart Phu Quoc"
                    },
                    {
                        time: "16:00",
                        title: "푸꾸옥 공항 이동",
                        type: "plane",
                        location: "Phu Quoc International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/ho-chi-minh-city-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/india-portrait.jpg',
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
    colombo: {
        id: "colombo",
        city: "Colombo",
        country: "Sri Lanka",
        summary: "갈레 페이스 일몰과 강가라마야 사원, 페타 시장, 로터스 타워에 갈레 요새 당일 기차까지 엮은 콜롬보 템플릿입니다.",
        footer: "Colombo is best at golden hour, with sea spray and a cup of Ceylon tea.",
        heroImage: "assets/heroes/colombo.jpg",
        heroImagePortrait: 'assets/heroes/colombo-portrait.jpg',
        heroPosition: "center center",
        accent: "#10B981",
        accentRgb: "16, 185, 129",
        ink: "#064E3B",
        inkRgb: "6, 78, 59",
        overlayTop: "rgba(6, 78, 59, 0.36)",
        overlayBottom: "rgba(6, 30, 26, 0.88)",
        timeZone: "Asia/Colombo",
        weather: {
            latitude: 6.9271,
            longitude: 79.8612
        },
        currency: {
            code: "LKR",
            symbol: "Rs",
            locale: "si-LK"
        },
        startOffsetDays: 9,
        phraseLabel: "සිංහල · English",
        phrases: [
            {
                text: "ආයුබෝවන්",
                pron: "아유보완",
                meaning: "안녕하세요"
            },
            {
                text: "ස්තූතියි",
                pron: "스투티",
                meaning: "감사합니다"
            },
            {
                text: "මේක කීයද?",
                pron: "메카 키야다",
                meaning: "이거 얼마예요?"
            },
            {
                text: "සමාවෙන්න",
                pron: "사마웬나",
                meaning: "실례합니다"
            },
            {
                text: "හරි රසයි",
                pron: "하리 라사이",
                meaning: "정말 맛있어요"
            },
            {
                text: "බිල ගේන්න",
                pron: "빌라 겐나",
                meaning: "계산서 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "포트 & 페타",
                activities: [
                    {
                        time: "10:00",
                        title: "콜롬보 포트 & 올드 더치 호스피탈",
                        type: "building",
                        location: "Dutch Hospital Shopping Precinct"
                    },
                    {
                        time: "13:00",
                        title: "페타 시장",
                        type: "store",
                        location: "Pettah Market"
                    },
                    {
                        time: "18:00",
                        title: "갈레 페이스 그린 일몰",
                        type: "sun",
                        location: "Galle Face Green"
                    }
                ]
            },
            {
                title: "베이라 호수 & 로터스 타워",
                activities: [
                    {
                        time: "10:00",
                        title: "강가라마야 사원",
                        type: "landmark",
                        location: "Gangaramaya Temple"
                    },
                    {
                        time: "12:30",
                        title: "시마 말라카 수상 법당",
                        type: "camera",
                        location: "Seema Malaka"
                    },
                    {
                        time: "18:30",
                        title: "로터스 타워 야경",
                        type: "tower-control",
                        location: "Lotus Tower"
                    }
                ]
            },
            {
                title: "갈레 요새 당일 (해안 기차)",
                activities: [
                    {
                        time: "09:30",
                        title: "갈레 요새 성벽 산책",
                        type: "landmark",
                        location: "Galle Fort"
                    },
                    {
                        time: "13:00",
                        title: "올드 더치 호스피탈 갈레 점심",
                        type: "utensils-crossed",
                        location: "Old Dutch Hospital Galle"
                    },
                    {
                        time: "17:00",
                        title: "갈레 등대 & 성벽 일몰",
                        type: "sun",
                        location: "Galle Fort Lighthouse"
                    }
                ]
            },
            {
                title: "콜롬보 7 & 인디펜던스",
                activities: [
                    {
                        time: "10:00",
                        title: "콜롬보 국립박물관",
                        type: "building-2",
                        location: "Colombo National Museum"
                    },
                    {
                        time: "13:00",
                        title: "인디펜던스 메모리얼 홀",
                        type: "landmark",
                        location: "Independence Memorial Hall"
                    },
                    {
                        time: "18:30",
                        title: "아케이드 인디펜던스 스퀘어 저녁",
                        type: "shopping-bag",
                        location: "Arcade Independence Square"
                    }
                ]
            },
            {
                title: "마운트 라비니아 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "마운트 라비니아 비치 브런치",
                        type: "coffee",
                        location: "Mount Lavinia Beach"
                    },
                    {
                        time: "13:00",
                        title: "락살라 실론 티 & 기념품",
                        type: "gift",
                        location: "Laksala"
                    },
                    {
                        time: "16:00",
                        title: "반다라나이케 공항 이동",
                        type: "plane",
                        location: "Bandaranaike International Airport"
                    }
                ]
            }
        ]
    },
    kathmandu: {
        id: "kathmandu",
        city: "Kathmandu",
        country: "Nepal",
        summary: "보드나트와 스와얌부나트, 더르바르 광장과 파슈파티나트, 타멜 밤거리에 나가르코트 일출까지 담은 카트만두 템플릿입니다.",
        footer: "Kathmandu feels richest in prayer flags, butter lamps, and mountain dawns.",
        heroImage: "assets/heroes/kathmandu.jpg",
        heroImagePortrait: 'assets/heroes/kathmandu-portrait.jpg',
        heroPosition: "center center",
        accent: "#E4572E",
        accentRgb: "228, 87, 46",
        ink: "#431407",
        inkRgb: "67, 20, 7",
        overlayTop: "rgba(67, 20, 7, 0.38)",
        overlayBottom: "rgba(28, 12, 6, 0.88)",
        timeZone: "Asia/Kathmandu",
        weather: {
            latitude: 27.7172,
            longitude: 85.324
        },
        currency: {
            code: "NPR",
            symbol: "₨",
            locale: "ne-NP"
        },
        startOffsetDays: 12,
        phraseLabel: "नेपाली",
        phrases: [
            {
                text: "नमस्ते",
                pron: "나마스테",
                meaning: "안녕하세요"
            },
            {
                text: "धन्यवाद",
                pron: "단녀바드",
                meaning: "감사합니다"
            },
            {
                text: "यो कति हो?",
                pron: "요 카티 호",
                meaning: "이거 얼마예요?"
            },
            {
                text: "माफ गर्नुहोस्",
                pron: "마프 가르누호스",
                meaning: "실례합니다 / 죄송합니다"
            },
            {
                text: "मिठो छ",
                pron: "미토 차",
                meaning: "맛있어요"
            },
            {
                text: "बिल दिनुहोस्",
                pron: "빌 디누호스",
                meaning: "계산서 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "더르바르 광장 & 타멜",
                activities: [
                    {
                        time: "10:00",
                        title: "카트만두 더르바르 광장 & 쿠마리 하우스",
                        type: "landmark",
                        location: "Kathmandu Durbar Square"
                    },
                    {
                        time: "13:00",
                        title: "아산 바자르 골목 & 점심",
                        type: "store",
                        location: "Asan Bazaar"
                    },
                    {
                        time: "18:00",
                        title: "타멜 저녁 산책",
                        type: "shopping-bag",
                        location: "Thamel"
                    }
                ]
            },
            {
                title: "스와얌부나트 & 파탄",
                activities: [
                    {
                        time: "08:30",
                        title: "스와얌부나트 (몽키 템플)",
                        type: "landmark",
                        location: "Swayambhunath Stupa"
                    },
                    {
                        time: "13:00",
                        title: "파탄 더르바르 광장 & 점심",
                        type: "building-2",
                        location: "Patan Durbar Square"
                    },
                    {
                        time: "18:00",
                        title: "가든 오브 드림스 저녁",
                        type: "trees",
                        location: "Garden of Dreams"
                    }
                ]
            },
            {
                title: "보드나트 & 파슈파티나트",
                activities: [
                    {
                        time: "09:00",
                        title: "보드나트 스투파 아침 코라",
                        type: "landmark",
                        location: "Boudhanath Stupa"
                    },
                    {
                        time: "13:00",
                        title: "코판 사원 전망 & 점심",
                        type: "binoculars",
                        location: "Kopan Monastery"
                    },
                    {
                        time: "17:30",
                        title: "파슈파티나트 저녁 아르티",
                        type: "sparkles",
                        location: "Pashupatinath Temple"
                    }
                ]
            },
            {
                title: "나가르코트 일출 & 박타푸르",
                activities: [
                    {
                        time: "05:30",
                        title: "나가르코트 히말라야 일출",
                        type: "sun",
                        location: "Nagarkot"
                    },
                    {
                        time: "10:30",
                        title: "박타푸르 더르바르 광장",
                        type: "landmark",
                        location: "Bhaktapur Durbar Square"
                    },
                    {
                        time: "13:30",
                        title: "냐타폴라 사원 & 주주 다우 점심",
                        type: "utensils-crossed",
                        location: "Taumadhi Square"
                    }
                ]
            },
            {
                title: "궁전 박물관 & 이동",
                activities: [
                    {
                        time: "11:00",
                        title: "나라얀히티 궁전 박물관",
                        type: "building",
                        location: "Narayanhiti Palace Museum"
                    },
                    {
                        time: "13:30",
                        title: "더르바르 마르그 점심 & 기념품",
                        type: "gift",
                        location: "Durbar Marg"
                    },
                    {
                        time: "16:30",
                        title: "트리부반 공항 이동",
                        type: "plane",
                        location: "Tribhuvan International Airport"
                    }
                ]
            }
        ]
    },
    bishkek: {
        id: "bishkek",
        city: "Bishkek",
        country: "Kyrgyzstan",
        summary: "알라투 광장과 오쉬 바자르, 알라 아르차 트레킹, 부라나 탑을 지나 이식쿨 호수까지 이어지는 비슈케크 템플릿입니다.",
        footer: "Bishkek is a gateway: bazaars in the morning, alpine air by noon.",
        heroImage: "assets/heroes/bishkek.jpg",
        heroImagePortrait: 'assets/heroes/bishkek-portrait.jpg',
        heroPosition: "center center",
        accent: "#EF4444",
        accentRgb: "239, 68, 68",
        ink: "#292524",
        inkRgb: "41, 37, 36",
        overlayTop: "rgba(41, 37, 36, 0.36)",
        overlayBottom: "rgba(20, 18, 17, 0.88)",
        timeZone: "Asia/Bishkek",
        weather: {
            latitude: 42.8746,
            longitude: 74.5698
        },
        currency: {
            code: "KGS",
            symbol: "сом",
            locale: "ky-KG"
        },
        startOffsetDays: 11,
        phraseLabel: "Кыргызча · Русский",
        phrases: [
            {
                text: "Саламатсызбы",
                pron: "살라맛스즈브",
                meaning: "안녕하세요"
            },
            {
                text: "Рахмат",
                pron: "라흐맛",
                meaning: "감사합니다"
            },
            {
                text: "Бул канча турат?",
                pron: "불 칸차 투라트",
                meaning: "이거 얼마예요?"
            },
            {
                text: "Кечиресиз",
                pron: "케치레시즈",
                meaning: "실례합니다"
            },
            {
                text: "Очень вкусно",
                pron: "오친 프쿠스나",
                meaning: "정말 맛있어요 (러시아어)"
            },
            {
                text: "Где базар?",
                pron: "그제 바자르",
                meaning: "시장이 어디예요? (러시아어)"
            }
        ],
        itineraryTemplate: [
            {
                title: "알라투 광장 & 도심",
                activities: [
                    {
                        time: "10:00",
                        title: "알라투 광장 & 근위병 교대",
                        type: "map",
                        location: "Ala-Too Square"
                    },
                    {
                        time: "13:00",
                        title: "오쉬 바자르 점심",
                        type: "store",
                        location: "Osh Bazaar"
                    },
                    {
                        time: "18:30",
                        title: "수파라 에스노 콤플렉스 저녁",
                        type: "utensils-crossed",
                        location: "Supara Ethno Complex"
                    }
                ]
            },
            {
                title: "알라 아르차 국립공원",
                activities: [
                    {
                        time: "09:00",
                        title: "알라 아르차 트레킹",
                        type: "trees",
                        location: "Ala Archa National Park"
                    },
                    {
                        time: "12:30",
                        title: "악사이 폭포 코스 & 도시락",
                        type: "camera",
                        location: "Ak-Sai Waterfall"
                    },
                    {
                        time: "18:30",
                        title: "에르킨딕 대로 산책 & 저녁",
                        type: "lightbulb",
                        location: "Erkindik Boulevard"
                    }
                ]
            },
            {
                title: "부라나 탑 & 이식쿨 호수",
                activities: [
                    {
                        time: "09:00",
                        title: "부라나 탑 & 발발 석상",
                        type: "landmark",
                        location: "Burana Tower"
                    },
                    {
                        time: "14:00",
                        title: "촐폰아타 도착 & 호수 수영",
                        type: "sun",
                        location: "Cholpon-Ata"
                    },
                    {
                        time: "17:30",
                        title: "암각화 야외 박물관",
                        type: "palette",
                        location: "Cholpon-Ata Petroglyphs"
                    }
                ]
            },
            {
                title: "이식쿨 → 비슈케크",
                activities: [
                    {
                        time: "09:00",
                        title: "루흐 오르도 문화센터",
                        type: "building",
                        location: "Ruh Ordo Cultural Center"
                    },
                    {
                        time: "12:30",
                        title: "그리고리예프카 협곡",
                        type: "trees",
                        location: "Grigorievka Gorge"
                    },
                    {
                        time: "19:30",
                        title: "비슈케크 귀환 & 나밧 저녁",
                        type: "utensils-crossed",
                        location: "Navat Restaurant"
                    }
                ]
            },
            {
                title: "박물관 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "국립역사박물관",
                        type: "building-2",
                        location: "State History Museum Bishkek"
                    },
                    {
                        time: "13:00",
                        title: "춤(TSUM) 펠트 기념품",
                        type: "gift",
                        location: "TSUM Aichurek"
                    },
                    {
                        time: "16:00",
                        title: "마나스 공항 이동",
                        type: "plane",
                        location: "Manas International Airport"
                    }
                ]
            }
        ]
    },
    tashkent: {
        id: "tashkent",
        city: "Tashkent",
        country: "Uzbekistan",
        summary: "하즈라티 이맘과 초르수 바자르, 지하철 역 투어에 사마르칸트 레기스탄 당일 고속철까지 묶은 타슈켄트 템플릿입니다.",
        footer: "Tashkent runs on blue tiles, plov, and marble metro stations.",
        heroImage: "assets/heroes/tashkent.jpg",
        heroImagePortrait: 'assets/heroes/tashkent-portrait.jpg',
        heroPosition: "center center",
        accent: "#26A0B8",
        accentRgb: "38, 160, 184",
        ink: "#0C4A6E",
        inkRgb: "12, 74, 110",
        overlayTop: "rgba(12, 74, 110, 0.40)",
        overlayBottom: "rgba(8, 30, 48, 0.88)",
        timeZone: "Asia/Tashkent",
        weather: {
            latitude: 41.2995,
            longitude: 69.2401
        },
        currency: {
            code: "UZS",
            symbol: "soʻm",
            locale: "uz-UZ"
        },
        startOffsetDays: 10,
        phraseLabel: "Oʻzbekcha",
        phrases: [
            {
                text: "Assalomu alaykum",
                pron: "앗살로무 알라이쿰",
                meaning: "안녕하세요"
            },
            {
                text: "Rahmat",
                pron: "라흐맛",
                meaning: "감사합니다"
            },
            {
                text: "Bu qancha turadi?",
                pron: "부 칸차 투라디",
                meaning: "이거 얼마예요?"
            },
            {
                text: "Kechirasiz",
                pron: "케치라시즈",
                meaning: "실례합니다"
            },
            {
                text: "Hisobni bering, iltimos",
                pron: "히솝니 베링 일티모스",
                meaning: "계산서 주세요"
            },
            {
                text: "Juda mazali",
                pron: "주다 마잘리",
                meaning: "정말 맛있어요"
            }
        ],
        itineraryTemplate: [
            {
                title: "올드 타운 & 초르수",
                activities: [
                    {
                        time: "10:00",
                        title: "하즈라티 이맘 단지 (오스만 쿠란)",
                        type: "landmark",
                        location: "Hazrati Imam Complex"
                    },
                    {
                        time: "13:00",
                        title: "초르수 바자르 플로프 점심",
                        type: "store",
                        location: "Chorsu Bazaar"
                    },
                    {
                        time: "17:30",
                        title: "쿠켈다시 마드라사 & 저녁",
                        type: "building-2",
                        location: "Kukeldash Madrasah"
                    }
                ]
            },
            {
                title: "아미르 티무르 광장 & 신시가",
                activities: [
                    {
                        time: "10:00",
                        title: "아미르 티무르 광장",
                        type: "landmark",
                        location: "Amir Temur Square"
                    },
                    {
                        time: "13:00",
                        title: "아미르 티무르 박물관",
                        type: "building",
                        location: "Amir Timur Museum"
                    },
                    {
                        time: "18:30",
                        title: "타슈켄트 시티 파크 분수 야경",
                        type: "sparkles",
                        location: "Tashkent City Park"
                    }
                ]
            },
            {
                title: "사마르칸트 당일 (아프로시욥 고속철)",
                activities: [
                    {
                        time: "10:00",
                        title: "레기스탄 광장",
                        type: "landmark",
                        location: "Registan Square"
                    },
                    {
                        time: "13:00",
                        title: "시욥 바자르 & 비비하눔 모스크",
                        type: "store",
                        location: "Siyob Bazaar"
                    },
                    {
                        time: "16:00",
                        title: "샤히진다 영묘군",
                        type: "camera",
                        location: "Shah-i-Zinda"
                    }
                ]
            },
            {
                title: "지하철 역 투어 & 독립광장",
                activities: [
                    {
                        time: "10:00",
                        title: "독립광장 산책",
                        type: "map",
                        location: "Independence Square"
                    },
                    {
                        time: "13:30",
                        title: "지하철 명소 역 투어 (코스모나블라르)",
                        type: "train-front",
                        location: "Kosmonavtlar Metro Station"
                    },
                    {
                        time: "19:00",
                        title: "나보이 오페라 발레 극장",
                        type: "music",
                        location: "Alisher Navoi Opera and Ballet Theater"
                    }
                ]
            },
            {
                title: "TV 타워 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "타슈켄트 TV 타워 전망",
                        type: "tower-control",
                        location: "Tashkent TV Tower"
                    },
                    {
                        time: "13:00",
                        title: "사마르칸트 다르보자 몰 점심 & 기념품",
                        type: "gift",
                        location: "Samarkand Darvoza Mall"
                    },
                    {
                        time: "16:00",
                        title: "타슈켄트 공항 이동",
                        type: "plane",
                        location: "Tashkent International Airport"
                    }
                ]
            }
        ]
    },
    almaty: {
        id: "almaty",
        city: "Almaty",
        country: "Kazakhstan",
        summary: "젠코프 성당과 그린 바자르, 콕토베, 메데우·침불락, 빅 알마티 호수와 차른 캐니언까지 산과 도시를 잇는 알마티 템플릿입니다.",
        footer: "Almaty works best when apple orchards, snow peaks, and bazaars share one day.",
        heroImage: "assets/heroes/almaty.jpg",
        heroImagePortrait: 'assets/heroes/almaty-portrait.jpg',
        heroPosition: "center center",
        accent: "#16A34A",
        accentRgb: "22, 163, 74",
        ink: "#14532D",
        inkRgb: "20, 83, 45",
        overlayTop: "rgba(20, 83, 45, 0.36)",
        overlayBottom: "rgba(12, 26, 18, 0.88)",
        timeZone: "Asia/Almaty",
        weather: {
            latitude: 43.238,
            longitude: 76.889
        },
        currency: {
            code: "KZT",
            symbol: "₸",
            locale: "kk-KZ"
        },
        startOffsetDays: 9,
        phraseLabel: "Қазақша · Русский",
        phrases: [
            {
                text: "Сәлеметсіз бе",
                pron: "살레메트시즈 베",
                meaning: "안녕하세요"
            },
            {
                text: "Рахмет",
                pron: "라흐메트",
                meaning: "감사합니다"
            },
            {
                text: "Бұл қанша тұрады?",
                pron: "불 칸샤 투라드",
                meaning: "이거 얼마예요?"
            },
            {
                text: "Кешіріңіз",
                pron: "케시리니즈",
                meaning: "실례합니다"
            },
            {
                text: "Счёт, пожалуйста",
                pron: "숏 파잘루스타",
                meaning: "계산서 주세요 (러시아어)"
            },
            {
                text: "Өте әдемі",
                pron: "외테 애데미",
                meaning: "정말 예쁘네요"
            }
        ],
        itineraryTemplate: [
            {
                title: "판필로프 공원 & 콕토베",
                activities: [
                    {
                        time: "10:00",
                        title: "젠코프 성당 (승천 대성당)",
                        type: "landmark",
                        location: "Ascension Cathedral"
                    },
                    {
                        time: "13:00",
                        title: "그린 바자르 점심",
                        type: "store",
                        location: "Green Bazaar"
                    },
                    {
                        time: "18:00",
                        title: "콕토베 케이블카 야경",
                        type: "moon-star",
                        location: "Kok Tobe"
                    }
                ]
            },
            {
                title: "메데우 & 침불락",
                activities: [
                    {
                        time: "09:30",
                        title: "메데우 빙상장",
                        type: "camera",
                        location: "Medeu"
                    },
                    {
                        time: "12:30",
                        title: "침불락 곤돌라 & 산 위 점심",
                        type: "binoculars",
                        location: "Shymbulak Mountain Resort"
                    },
                    {
                        time: "19:00",
                        title: "아바이 오페라 공연",
                        type: "music",
                        location: "Abay Opera House"
                    }
                ]
            },
            {
                title: "빅 알마티 호수 & 남부",
                activities: [
                    {
                        time: "09:00",
                        title: "빅 알마티 호수",
                        type: "camera",
                        location: "Big Almaty Lake"
                    },
                    {
                        time: "13:30",
                        title: "첫 대통령 공원 산책",
                        type: "trees",
                        location: "First President Park"
                    },
                    {
                        time: "18:30",
                        title: "공화국 광장 & 독립기념비",
                        type: "landmark",
                        location: "Republic Square"
                    }
                ]
            },
            {
                title: "차른 캐니언 당일",
                activities: [
                    {
                        time: "07:00",
                        title: "차른 캐니언 성의 계곡 트레킹",
                        type: "map",
                        location: "Charyn Canyon"
                    },
                    {
                        time: "12:30",
                        title: "캐니언 에코파크 유르트 점심",
                        type: "utensils-crossed",
                        location: "Charyn Canyon Eco Park"
                    },
                    {
                        time: "19:30",
                        title: "판필로프 거리 저녁 산책",
                        type: "lightbulb",
                        location: "Panfilov Street"
                    }
                ]
            },
            {
                title: "박물관 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "중앙 국립박물관",
                        type: "building-2",
                        location: "Central State Museum of Kazakhstan"
                    },
                    {
                        time: "13:00",
                        title: "도스틱 플라자 점심 & 기념품",
                        type: "gift",
                        location: "Dostyk Plaza"
                    },
                    {
                        time: "16:30",
                        title: "알마티 공항 이동",
                        type: "plane",
                        location: "Almaty International Airport"
                    }
                ]
            }
        ]
    },
    astana: {
        id: "astana",
        city: "Astana",
        country: "Kazakhstan",
        summary: "바이테렉과 칸 샤티르, 하즈렛 술탄 모스크, 누르 알렘에 보로보이 당일까지 더한 초원 위 미래도시 아스타나 템플릿입니다.",
        footer: "Astana feels strongest when glass towers meet the wide steppe sky.",
        heroImage: "assets/heroes/astana.jpg",
        heroImagePortrait: 'assets/heroes/astana-portrait.jpg',
        heroPosition: "center center",
        accent: "#EEF205",
        accentRgb: "238, 242, 5",
        ink: "#1E3A5F",
        inkRgb: "30, 58, 95",
        overlayTop: "rgba(30, 58, 95, 0.36)",
        overlayBottom: "rgba(12, 22, 40, 0.88)",
        timeZone: "Asia/Almaty",
        weather: {
            latitude: 51.1694,
            longitude: 71.4491
        },
        currency: {
            code: "KZT",
            symbol: "₸",
            locale: "kk-KZ"
        },
        startOffsetDays: 9,
        phraseLabel: "Қазақша · Русский",
        phrases: [
            {
                text: "Сәлем",
                pron: "살렘",
                meaning: "안녕 (편한 인사)"
            },
            {
                text: "Көп рахмет",
                pron: "쾨프 라흐메트",
                meaning: "정말 감사합니다"
            },
            {
                text: "Дәмді екен",
                pron: "댐디 에켄",
                meaning: "맛있네요"
            },
            {
                text: "Где остановка?",
                pron: "그제 아스타놉카",
                meaning: "정류장이 어디예요? (러시아어)"
            },
            {
                text: "Можно фото?",
                pron: "모즈나 포토",
                meaning: "사진 찍어도 돼요? (러시아어)"
            },
            {
                text: "Сау болыңыз",
                pron: "사우 볼르느즈",
                meaning: "안녕히 계세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "좌안 신도심 & 바이테렉",
                activities: [
                    {
                        time: "10:00",
                        title: "바이테렉 전망대",
                        type: "tower-control",
                        location: "Bayterek Tower"
                    },
                    {
                        time: "13:30",
                        title: "칸 샤티르 점심 & 쇼핑",
                        type: "shopping-cart",
                        location: "Khan Shatyr"
                    },
                    {
                        time: "18:30",
                        title: "누르졸 대로 야경 산책",
                        type: "moon-star",
                        location: "Nurzhol Boulevard"
                    }
                ]
            },
            {
                title: "하즈렛 술탄 & 독립 광장",
                activities: [
                    {
                        time: "10:00",
                        title: "하즈렛 술탄 모스크",
                        type: "landmark",
                        location: "Hazrat Sultan Mosque"
                    },
                    {
                        time: "13:00",
                        title: "국립박물관",
                        type: "building-2",
                        location: "National Museum of the Republic of Kazakhstan"
                    },
                    {
                        time: "18:00",
                        title: "피라미드 (평화와 화해의 궁전)",
                        type: "building",
                        location: "Palace of Peace and Reconciliation"
                    }
                ]
            },
            {
                title: "엑스포 & 누르 알렘",
                activities: [
                    {
                        time: "10:00",
                        title: "누르 알렘 미래 에너지 박물관",
                        type: "sparkles",
                        location: "Nur Alem"
                    },
                    {
                        time: "13:30",
                        title: "아스타나 식물원 산책",
                        type: "trees",
                        location: "Astana Botanical Garden"
                    },
                    {
                        time: "18:00",
                        title: "메가 실크웨이 저녁",
                        type: "shopping-bag",
                        location: "Mega Silk Way"
                    }
                ]
            },
            {
                title: "보로보이 (부라바이) 당일",
                activities: [
                    {
                        time: "07:30",
                        title: "부라바이 국립공원 이동 & 숲 산책",
                        type: "map",
                        location: "Burabay National Park"
                    },
                    {
                        time: "12:30",
                        title: "옥제트페스 바위 전망",
                        type: "binoculars",
                        location: "Okzhetpes"
                    },
                    {
                        time: "15:30",
                        title: "보로보이 호수 보트",
                        type: "ship",
                        location: "Lake Burabay"
                    }
                ]
            },
            {
                title: "그랜드 모스크 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "아스타나 그랜드 모스크",
                        type: "landmark",
                        location: "Astana Grand Mosque"
                    },
                    {
                        time: "13:00",
                        title: "케루엔 몰 점심 & 기념품",
                        type: "gift",
                        location: "Keruen Mall"
                    },
                    {
                        time: "16:00",
                        title: "나자르바예프 공항 이동",
                        type: "plane",
                        location: "Nursultan Nazarbayev International Airport"
                    }
                ]
            }
        ]
    },
    ulaanbaatar: {
        id: "ulaanbaatar",
        city: "Ulaanbaatar",
        country: "Mongolia",
        summary: "간단사와 수흐바타르 광장, 자이산 전망대에 테를지 초원과 칭기즈칸 기마상까지 묶은 몽골 템플릿입니다.",
        footer: "Ulaanbaatar is best read against an endless blue sky and open steppe.",
        heroImage: "assets/heroes/ulaanbaatar.jpg",
        heroImagePortrait: 'assets/heroes/ulaanbaatar-portrait.jpg',
        heroPosition: "center center",
        accent: "#3B82F6",
        accentRgb: "59, 130, 246",
        ink: "#1E293B",
        inkRgb: "30, 41, 59",
        overlayTop: "rgba(30, 41, 59, 0.34)",
        overlayBottom: "rgba(15, 23, 42, 0.86)",
        timeZone: "Asia/Ulaanbaatar",
        weather: {
            latitude: 47.9188,
            longitude: 106.9176
        },
        currency: {
            code: "MNT",
            symbol: "₮",
            locale: "mn-MN"
        },
        startOffsetDays: 10,
        phraseLabel: "Монгол",
        phrases: [
            {
                text: "Сайн байна уу",
                pron: "샌 배노",
                meaning: "안녕하세요"
            },
            {
                text: "Баярлалаа",
                pron: "바야를라",
                meaning: "감사합니다"
            },
            {
                text: "Энэ хэд вэ?",
                pron: "엔 헤드 웨",
                meaning: "이거 얼마예요?"
            },
            {
                text: "Уучлаарай",
                pron: "오칠라래",
                meaning: "실례합니다 / 죄송합니다"
            },
            {
                text: "Тооцоогоо хийе",
                pron: "토초고 히예",
                meaning: "계산할게요"
            },
            {
                text: "Амттай байна",
                pron: "암태 밴",
                meaning: "맛있어요"
            }
        ],
        itineraryTemplate: [
            {
                title: "수흐바타르 광장 & 도심",
                activities: [
                    {
                        time: "10:00",
                        title: "수흐바타르 광장",
                        type: "map",
                        location: "Sukhbaatar Square"
                    },
                    {
                        time: "13:30",
                        title: "칭기즈칸 국립박물관",
                        type: "building-2",
                        location: "Chinggis Khaan National Museum"
                    },
                    {
                        time: "18:00",
                        title: "투멘 에흐 전통 공연 (흐미·마두금)",
                        type: "music",
                        location: "Tumen Ekh Ensemble"
                    }
                ]
            },
            {
                title: "간단사 & 자이산",
                activities: [
                    {
                        time: "09:30",
                        title: "간단사 아침 예불",
                        type: "landmark",
                        location: "Gandantegchinlen Monastery"
                    },
                    {
                        time: "13:30",
                        title: "보그드 칸 겨울 궁전",
                        type: "building",
                        location: "Winter Palace of the Bogd Khan"
                    },
                    {
                        time: "18:00",
                        title: "자이산 전망대 일몰",
                        type: "sun",
                        location: "Zaisan Memorial"
                    }
                ]
            },
            {
                title: "테를지 국립공원 당일",
                activities: [
                    {
                        time: "09:00",
                        title: "칭기즈칸 기마상",
                        type: "landmark",
                        location: "Chinggis Khaan Statue Complex"
                    },
                    {
                        time: "12:30",
                        title: "거북바위 & 게르 점심",
                        type: "camera",
                        location: "Turtle Rock"
                    },
                    {
                        time: "15:30",
                        title: "아리야발 명상 사원 트레킹",
                        type: "trees",
                        location: "Aryabal Meditation Temple"
                    }
                ]
            },
            {
                title: "초이진 라마 & 나란톨",
                activities: [
                    {
                        time: "10:00",
                        title: "초이진 라마 사원 박물관",
                        type: "landmark",
                        location: "Choijin Lama Temple Museum"
                    },
                    {
                        time: "13:30",
                        title: "나란톨 시장 구경",
                        type: "store",
                        location: "Narantuul Market"
                    },
                    {
                        time: "18:30",
                        title: "블루 스카이 타워 야경",
                        type: "moon-star",
                        location: "Blue Sky Tower"
                    }
                ]
            },
            {
                title: "캐시미어 쇼핑 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "국영백화점 캐시미어 쇼핑",
                        type: "shopping-cart",
                        location: "State Department Store"
                    },
                    {
                        time: "13:00",
                        title: "몽골 전통 음식 점심",
                        type: "utensils-crossed",
                        location: "Modern Nomads"
                    },
                    {
                        time: "16:00",
                        title: "칭기즈칸 국제공항 이동",
                        type: "plane",
                        location: "Chinggis Khaan International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/philippines-portrait.jpg',
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
    cebu: {
        id: "cebu",
        city: "Cebu",
        country: "Philippines",
        summary: "막탄 호핑과 오슬롭 고래상어, 모알보알 정어리떼와 카와산 폭포에 세부 시티 탑스힐 야경까지 얹은 4박 5일 세부 휴양 템플릿입니다.",
        footer: "Cebu is turquoise water, mango shakes, and a boat waiting at every pier.",
        heroImage: "assets/heroes/cebu.jpg",
        heroImagePortrait: 'assets/heroes/cebu-portrait.jpg',
        heroPosition: "center center",
        accent: "#2DD4BF",
        accentRgb: "45, 212, 191",
        ink: "#0C2A3A",
        inkRgb: "12, 42, 58",
        overlayTop: "rgba(12, 42, 58, 0.34)",
        overlayBottom: "rgba(8, 24, 36, 0.84)",
        timeZone: "Asia/Manila",
        weather: {
            latitude: 10.3157,
            longitude: 123.8854
        },
        currency: {
            code: "PHP",
            symbol: "₱",
            locale: "en-PH"
        },
        startOffsetDays: 10,
        phraseLabel: "English · Tagalog",
        phrases: [
            {
                text: "Maayong buntag",
                pron: "마아용 분탁",
                meaning: "좋은 아침이에요 (세부아노)"
            },
            {
                text: "Salamat kaayo",
                pron: "살라맛 카아요",
                meaning: "정말 감사합니다 (세부아노)"
            },
            {
                text: "Tagpila ni?",
                pron: "탁필라 니",
                meaning: "이거 얼마예요? (세부아노)"
            },
            {
                text: "Lami kaayo!",
                pron: "라미 카아요",
                meaning: "정말 맛있어요! (세부아노)"
            },
            {
                text: "Where is the pier?",
                pron: "웨어 이즈 더 피어",
                meaning: "선착장이 어디예요?"
            },
            {
                text: "Ingat!",
                pron: "잉갓",
                meaning: "조심히 가세요 / 몸 조심해요"
            }
        ],
        itineraryTemplate: [
            {
                title: "막탄 섬",
                activities: [
                    {
                        time: "09:30",
                        title: "막탄 호핑투어 · 힐루퉁안 스노클링",
                        type: "ship",
                        location: "Hilutungan Island"
                    },
                    {
                        time: "13:30",
                        title: "란타우 수상 레스토랑 점심",
                        type: "utensils-crossed",
                        location: "Lantaw Floating Native Restaurant"
                    },
                    {
                        time: "18:30",
                        title: "막탄 뉴타운 저녁 산책",
                        type: "moon-star",
                        location: "Mactan Newtown"
                    }
                ]
            },
            {
                title: "세부 시티",
                activities: [
                    {
                        time: "10:00",
                        title: "마젤란 십자가 · 산토니뇨 성당",
                        type: "landmark",
                        location: "Magellan's Cross"
                    },
                    {
                        time: "13:30",
                        title: "아얄라 센터 점심 & 쇼핑",
                        type: "shopping-cart",
                        location: "Ayala Center Cebu"
                    },
                    {
                        time: "18:30",
                        title: "탑스힐 야경",
                        type: "binoculars",
                        location: "Tops Lookout Cebu"
                    }
                ]
            },
            {
                title: "오슬롭 & 남부",
                activities: [
                    {
                        time: "06:30",
                        title: "오슬롭 고래상어 스노클링",
                        type: "camera",
                        location: "Oslob Whale Shark Watching"
                    },
                    {
                        time: "11:00",
                        title: "투말록 폭포",
                        type: "trees",
                        location: "Tumalog Falls"
                    },
                    {
                        time: "15:00",
                        title: "수밀론 섬 샌드바",
                        type: "sun",
                        location: "Sumilon Island"
                    }
                ]
            },
            {
                title: "모알보알 & 카와산",
                activities: [
                    {
                        time: "09:00",
                        title: "카와산 폭포 캐녀닝",
                        type: "sparkles",
                        location: "Kawasan Falls"
                    },
                    {
                        time: "14:00",
                        title: "파낙사마 비치 정어리떼 스노클링",
                        type: "binoculars",
                        location: "Panagsama Beach"
                    },
                    {
                        time: "18:00",
                        title: "화이트 비치 선셋",
                        type: "sun",
                        location: "White Beach Moalboal"
                    }
                ]
            },
            {
                title: "마지막 쇼핑 & 이동",
                activities: [
                    {
                        time: "10:00",
                        title: "SM 시사이드 시티 쇼핑",
                        type: "shopping-bag",
                        location: "SM Seaside City Cebu"
                    },
                    {
                        time: "13:00",
                        title: "타보안 시장 건망고 · 건어물 선물",
                        type: "gift",
                        location: "Taboan Public Market"
                    },
                    {
                        time: "16:30",
                        title: "막탄 공항 이동",
                        type: "plane",
                        location: "Mactan-Cebu International Airport"
                    }
                ]
            }
        ]
    },
    bohol: {
        id: "bohol",
        city: "Bohol",
        country: "Philippines",
        summary: "초콜릿힐과 안경원숭이, 로복강 크루즈, 팡라오 알로나비치와 발리카삭 스노클링을 3박 4일로 엮은 보홀 템플릿입니다.",
        footer: "Bohol moves slowly: hills, rivers, and reefs all on one small island.",
        heroImage: "assets/heroes/bohol.jpg",
        heroImagePortrait: 'assets/heroes/bohol-portrait.jpg',
        heroPosition: "center center",
        accent: "#84CC16",
        accentRgb: "132, 204, 22",
        ink: "#1F2E1A",
        inkRgb: "31, 46, 26",
        overlayTop: "rgba(31, 46, 26, 0.32)",
        overlayBottom: "rgba(16, 24, 14, 0.84)",
        timeZone: "Asia/Manila",
        weather: {
            latitude: 9.6475,
            longitude: 123.8556
        },
        currency: {
            code: "PHP",
            symbol: "₱",
            locale: "en-PH"
        },
        startOffsetDays: 12,
        phraseLabel: "English · Tagalog",
        phrases: [
            {
                text: "Magandang umaga",
                pron: "마간당 우마가",
                meaning: "좋은 아침입니다"
            },
            {
                text: "Pwede po bang magtanong?",
                pron: "뿌웨데 포 방 막타농",
                meaning: "뭐 좀 여쭤봐도 될까요?"
            },
            {
                text: "Nasaan ang beach?",
                pron: "나사안 앙 비치",
                meaning: "해변이 어디예요?"
            },
            {
                text: "Masarap!",
                pron: "마사랍",
                meaning: "맛있어요!"
            },
            {
                text: "Can I rent a scooter?",
                pron: "캔 아이 렌트 어 스쿠터",
                meaning: "스쿠터 빌릴 수 있나요?"
            },
            {
                text: "Paalam",
                pron: "파알람",
                meaning: "안녕히 계세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "팡라오 섬",
                activities: [
                    {
                        time: "11:00",
                        title: "히나그다난 동굴",
                        type: "camera",
                        location: "Hinagdanan Cave"
                    },
                    {
                        time: "14:00",
                        title: "두마루안 비치",
                        type: "sun",
                        location: "Dumaluan Beach"
                    },
                    {
                        time: "18:30",
                        title: "알로나 비치 선셋 & 씨푸드 저녁",
                        type: "utensils-crossed",
                        location: "Alona Beach"
                    }
                ]
            },
            {
                title: "초콜릿힐 & 로복",
                activities: [
                    {
                        time: "09:00",
                        title: "안경원숭이 보호구역",
                        type: "trees",
                        location: "Philippine Tarsier Sanctuary"
                    },
                    {
                        time: "11:30",
                        title: "초콜릿힐 전망대",
                        type: "binoculars",
                        location: "Chocolate Hills Complex"
                    },
                    {
                        time: "14:00",
                        title: "로복강 크루즈 점심",
                        type: "ship",
                        location: "Loboc River Cruise"
                    }
                ]
            },
            {
                title: "발리카삭 & 바다",
                activities: [
                    {
                        time: "06:30",
                        title: "발리카삭 스노클링 · 돌고래 워칭",
                        type: "binoculars",
                        location: "Balicasag Island"
                    },
                    {
                        time: "11:00",
                        title: "버진 아일랜드 샌드바",
                        type: "sun",
                        location: "Virgin Island Panglao"
                    },
                    {
                        time: "18:30",
                        title: "아바탄강 반딧불 투어",
                        type: "moon-star",
                        location: "Abatan River"
                    }
                ]
            },
            {
                title: "바클라욘 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "바클라욘 교회",
                        type: "landmark",
                        location: "Baclayon Church"
                    },
                    {
                        time: "12:30",
                        title: "보홀 비 팜 점심",
                        type: "utensils-crossed",
                        location: "Bohol Bee Farm"
                    },
                    {
                        time: "16:00",
                        title: "팡라오 공항 이동",
                        type: "plane",
                        location: "Bohol-Panglao International Airport"
                    }
                ]
            }
        ]
    },
    boracay: {
        id: "boracay",
        city: "Boracay",
        country: "Philippines",
        summary: "화이트비치 스테이션 1~3과 디몰, 푸카셸비치, 선셋 세일링, 아리엘스 포인트까지 섬 하나를 꽉 채우는 3박 4일 보라카이 템플릿입니다.",
        footer: "Boracay is powder-white sand, paraw sails, and a sunset that never gets old.",
        heroImage: "assets/heroes/boracay.jpg",
        heroImagePortrait: 'assets/heroes/boracay-portrait.jpg',
        heroPosition: "center center",
        accent: "#F472B6",
        accentRgb: "244, 114, 182",
        ink: "#3B1A2E",
        inkRgb: "59, 26, 46",
        overlayTop: "rgba(59, 26, 46, 0.30)",
        overlayBottom: "rgba(30, 14, 26, 0.82)",
        timeZone: "Asia/Manila",
        weather: {
            latitude: 11.9674,
            longitude: 121.9248
        },
        currency: {
            code: "PHP",
            symbol: "₱",
            locale: "en-PH"
        },
        startOffsetDays: 9,
        phraseLabel: "English · Tagalog",
        phrases: [
            {
                text: "Isa pa po",
                pron: "이사 파 포",
                meaning: "하나 더 주세요"
            },
            {
                text: "Sobrang ganda!",
                pron: "소브랑 간다",
                meaning: "정말 아름다워요!"
            },
            {
                text: "How much for the boat?",
                pron: "하우 머치 포 더 보트",
                meaning: "보트 요금이 얼마예요?"
            },
            {
                text: "Bawal ba dito?",
                pron: "바왈 바 디토",
                meaning: "여기서는 금지인가요?"
            },
            {
                text: "Sandali lang",
                pron: "산달리 랑",
                meaning: "잠시만요"
            },
            {
                text: "Walang anuman",
                pron: "왈랑 아누만",
                meaning: "천만에요"
            }
        ],
        itineraryTemplate: [
            {
                title: "화이트비치 스테이션 1~2",
                activities: [
                    {
                        time: "11:00",
                        title: "화이트비치 산책",
                        type: "sun",
                        location: "White Beach Boracay"
                    },
                    {
                        time: "13:30",
                        title: "디몰 점심 & 쇼핑",
                        type: "shopping-bag",
                        location: "D'Mall de Boracay"
                    },
                    {
                        time: "18:00",
                        title: "윌리스 록 선셋",
                        type: "camera",
                        location: "Willy's Rock"
                    }
                ]
            },
            {
                title: "호핑 & 푸카셸",
                activities: [
                    {
                        time: "09:30",
                        title: "아일랜드 호핑 · 크리스탈 코브",
                        type: "binoculars",
                        location: "Crystal Cove Island"
                    },
                    {
                        time: "13:00",
                        title: "푸카셸 비치",
                        type: "sun",
                        location: "Puka Shell Beach"
                    },
                    {
                        time: "17:30",
                        title: "파라우 선셋 세일링",
                        type: "ship",
                        location: "Station 1 Boracay"
                    }
                ]
            },
            {
                title: "아리엘스 포인트 & 스테이션 3",
                activities: [
                    {
                        time: "10:00",
                        title: "아리엘스 포인트 절벽 다이빙",
                        type: "ship",
                        location: "Ariel's Point"
                    },
                    {
                        time: "15:00",
                        title: "불라복 비치 카이트서핑 구경",
                        type: "sparkles",
                        location: "Bulabog Beach"
                    },
                    {
                        time: "19:00",
                        title: "디탈리파파 씨푸드 저녁",
                        type: "utensils-crossed",
                        location: "D'Talipapa Market"
                    }
                ]
            },
            {
                title: "마운트 루호 & 이동",
                activities: [
                    {
                        time: "08:30",
                        title: "마운트 루호 전망대",
                        type: "binoculars",
                        location: "Mt. Luho View Deck"
                    },
                    {
                        time: "11:30",
                        title: "조나스 프루트 셰이크",
                        type: "coffee",
                        location: "Jonah's Fruit Shake"
                    },
                    {
                        time: "14:00",
                        title: "칼리보 공항 이동",
                        type: "plane",
                        location: "Kalibo International Airport"
                    }
                ]
            }
        ]
    },
    clark: {
        id: "clark",
        city: "Clark (Angeles)",
        country: "Philippines",
        summary: "미모사 골프 라운딩과 피나투보 화산 트레킹, 수빅 오션어드벤처, SM클락 쇼핑을 묶은 3박 4일 클락 템플릿입니다.",
        footer: "Clark is volcano ash, wide fairways, and the easiest airport in the Philippines.",
        heroImage: "assets/heroes/clark.jpg",
        heroImagePortrait: 'assets/heroes/clark-portrait.jpg',
        heroPosition: "center center",
        accent: "#9A3412",
        accentRgb: "154, 52, 18",
        ink: "#2B1D14",
        inkRgb: "43, 29, 20",
        overlayTop: "rgba(43, 29, 20, 0.36)",
        overlayBottom: "rgba(24, 16, 12, 0.86)",
        timeZone: "Asia/Manila",
        weather: {
            latitude: 15.145,
            longitude: 120.5887
        },
        currency: {
            code: "PHP",
            symbol: "₱",
            locale: "en-PH"
        },
        startOffsetDays: 8,
        phraseLabel: "English · Tagalog",
        phrases: [
            {
                text: "Magandang hapon",
                pron: "마간당 하폰",
                meaning: "좋은 오후예요 (낮 인사)"
            },
            {
                text: "Saan ang terminal?",
                pron: "사안 앙 터미널",
                meaning: "터미널이 어디예요?"
            },
            {
                text: "Pakibigyan ako ng tubig",
                pron: "파키비기얀 아코 낭 투빅",
                meaning: "물 좀 주세요"
            },
            {
                text: "Opo",
                pron: "오포",
                meaning: "네 (공손한 대답)"
            },
            {
                text: "Tee time at nine, please",
                pron: "티 타임 앳 나인 플리즈",
                meaning: "9시 티타임으로 부탁해요"
            },
            {
                text: "Ang init!",
                pron: "앙 이닛",
                meaning: "너무 더워요!"
            }
        ],
        itineraryTemplate: [
            {
                title: "클락 프리포트",
                activities: [
                    {
                        time: "08:00",
                        title: "미모사 플러스 골프 라운딩",
                        type: "trees",
                        location: "Mimosa Plus Golf Course"
                    },
                    {
                        time: "13:30",
                        title: "SM 시티 클락 점심 & 쇼핑",
                        type: "shopping-cart",
                        location: "SM City Clark"
                    },
                    {
                        time: "18:00",
                        title: "클락 퍼레이드 그라운드 선셋 산책",
                        type: "sun",
                        location: "Clark Parade Grounds"
                    }
                ]
            },
            {
                title: "피나투보 화산",
                activities: [
                    {
                        time: "06:00",
                        title: "산타 훌리아나 4x4 지프 출발",
                        type: "map",
                        location: "Santa Juliana, Capas, Tarlac"
                    },
                    {
                        time: "09:30",
                        title: "피나투보 분화구 호수 트레킹",
                        type: "binoculars",
                        location: "Mount Pinatubo Crater Lake"
                    },
                    {
                        time: "16:30",
                        title: "푸닝 온천 화산재 스파",
                        type: "sparkles",
                        location: "Puning Hot Spring & Restaurant"
                    }
                ]
            },
            {
                title: "수빅 베이",
                activities: [
                    {
                        time: "09:30",
                        title: "오션 어드벤처 돌고래 쇼",
                        type: "ticket",
                        location: "Ocean Adventure Subic Bay"
                    },
                    {
                        time: "13:30",
                        title: "주빅 사파리",
                        type: "camera",
                        location: "Zoobic Safari"
                    },
                    {
                        time: "18:30",
                        title: "수빅 보드워크 씨푸드 저녁",
                        type: "utensils-crossed",
                        location: "Subic Bay Boardwalk"
                    }
                ]
            },
            {
                title: "앙헬레스 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "홀리 로사리 성당",
                        type: "landmark",
                        location: "Holy Rosary Parish Church"
                    },
                    {
                        time: "12:30",
                        title: "알링 루싱 시식(Sisig) 점심",
                        type: "store",
                        location: "Aling Lucing's Sisig"
                    },
                    {
                        time: "15:30",
                        title: "클락 공항 이동",
                        type: "plane",
                        location: "Clark International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/russia-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/vladivostok-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/canada-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/vancouver-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/mexico-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/cancun-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/brazil-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/argentina-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/germany-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/egypt-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/guam-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/hawaii-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/alaska-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/texas-portrait.jpg',
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
    'san-francisco': {
        id: "san-francisco",
        city: "San Francisco",
        country: "United States",
        summary: "골든게이트, 알카트라즈, 피어 39, 케이블카, 소살리토 페리를 언덕 동선으로 묶은 샌프란시스코 템플릿입니다.",
        footer: "San Francisco works when fog, hills, and the bay keep showing up in one frame.",
        heroImage: "assets/heroes/san-francisco.jpg",
        heroImagePortrait: 'assets/heroes/san-francisco-portrait.jpg',
        heroPosition: "center center",
        accent: "#F00035",
        accentRgb: "240, 0, 53",
        ink: "#1E293B",
        inkRgb: "30, 41, 59",
        overlayTop: "rgba(30, 41, 59, 0.40)",
        overlayBottom: "rgba(15, 23, 42, 0.90)",
        timeZone: "America/Los_Angeles",
        weather: {
            latitude: 37.7749,
            longitude: -122.4194
        },
        currency: {
            code: "USD",
            symbol: "$",
            locale: "en-US"
        },
        startOffsetDays: 12,
        phraseLabel: "English",
        phrases: [
            {
                text: "Does this cable car go to the Wharf?",
                pron: "[더즈 디스 케이블 카 고 투 더 워프]",
                meaning: "이 케이블카 피셔맨스 워프 가나요?"
            },
            {
                text: "Clam chowder in a bread bowl, please",
                pron: "[클램 차우더 인 어 브레드 보울 플리즈]",
                meaning: "빵 그릇 클램차우더 주세요"
            },
            {
                text: "Is the fog rolling in?",
                pron: "[이즈 더 포그 롤링 인]",
                meaning: "안개 끼기 시작하나요?"
            },
            {
                text: "Can I tap my card on Muni?",
                pron: "[캔 아이 탭 마이 카드 온 뮤니]",
                meaning: "뮤니(시내 교통)에서 카드 태그 되나요?"
            },
            {
                text: "Which pier is the ferry from?",
                pron: "[위치 피어 이즈 더 페리 프롬]",
                meaning: "페리는 몇 번 부두에서 타요?"
            },
            {
                text: "It’s chilly by the bay",
                pron: "[잇츠 칠리 바이 더 베이]",
                meaning: "만 근처는 쌀쌀하네요"
            }
        ],
        itineraryTemplate: [
            {
                title: "피셔맨스 워프 & 알카트라즈",
                activities: [
                    {
                        time: "09:30",
                        title: "알카트라즈 페리 (예약 필수)",
                        type: "ship",
                        location: "Alcatraz Island"
                    },
                    {
                        time: "13:00",
                        title: "피어 39 & 바다사자",
                        type: "camera",
                        location: "Pier 39"
                    },
                    {
                        time: "18:00",
                        title: "피셔맨스 워프 클램차우더",
                        type: "utensils-crossed",
                        location: "Fisherman's Wharf"
                    }
                ]
            },
            {
                title: "골든게이트 & 소살리토",
                activities: [
                    {
                        time: "09:30",
                        title: "골든게이트 브리지 자전거",
                        type: "bridge",
                        location: "Golden Gate Bridge"
                    },
                    {
                        time: "13:00",
                        title: "소살리토 런치",
                        type: "utensils-crossed",
                        location: "Sausalito"
                    },
                    {
                        time: "17:30",
                        title: "페리로 귀환 & 페리 빌딩 마켓",
                        type: "ship",
                        location: "San Francisco Ferry Building"
                    }
                ]
            },
            {
                title: "케이블카 & 노브힐",
                activities: [
                    {
                        time: "10:00",
                        title: "케이블카 탑승",
                        type: "train-front",
                        location: "Powell Street Cable Car Turnaround"
                    },
                    {
                        time: "13:00",
                        title: "롬바드 스트리트",
                        type: "camera",
                        location: "Lombard Street"
                    },
                    {
                        time: "18:00",
                        title: "차이나타운 저녁",
                        type: "utensils-crossed",
                        location: "Chinatown San Francisco"
                    }
                ]
            },
            {
                title: "골든게이트 파크 & 미션",
                activities: [
                    {
                        time: "10:00",
                        title: "골든게이트 파크 & 드 영 미술관",
                        type: "palette",
                        location: "de Young Museum"
                    },
                    {
                        time: "13:30",
                        title: "알라모 스퀘어 & 페인티드 레이디스",
                        type: "camera",
                        location: "Alamo Square Park"
                    },
                    {
                        time: "18:00",
                        title: "미션 디스트릭트 부리토",
                        type: "utensils-crossed",
                        location: "Mission District San Francisco"
                    }
                ]
            },
            {
                title: "트윈 픽스 & 이동",
                activities: [
                    {
                        time: "09:00",
                        title: "트윈 픽스 전망",
                        type: "binoculars",
                        location: "Twin Peaks San Francisco"
                    },
                    {
                        time: "12:00",
                        title: "기라델리 스퀘어 초콜릿 쇼핑",
                        type: "gift",
                        location: "Ghirardelli Square"
                    },
                    {
                        time: "16:00",
                        title: "SFO 공항 이동",
                        type: "plane",
                        location: "San Francisco International Airport"
                    }
                ]
            }
        ]
    },
    seattle: {
        id: "seattle",
        city: "Seattle",
        country: "United States",
        summary: "파이크 플레이스 마켓, 스페이스 니들, 치훌리, 케리 파크 스카이라인을 커피 향으로 묶은 시애틀 템플릿입니다.",
        footer: "Seattle feels right with a coffee in hand, a ferry horn, and rain that never quite falls.",
        heroImage: "assets/heroes/seattle.jpg",
        heroImagePortrait: 'assets/heroes/seattle-portrait.jpg',
        heroPosition: "center center",
        accent: "#1FA91F",
        accentRgb: "31, 169, 31",
        ink: "#0F2A22",
        inkRgb: "15, 42, 34",
        overlayTop: "rgba(15, 42, 34, 0.42)",
        overlayBottom: "rgba(10, 22, 20, 0.92)",
        timeZone: "America/Los_Angeles",
        weather: {
            latitude: 47.6062,
            longitude: -122.3321
        },
        currency: {
            code: "USD",
            symbol: "$",
            locale: "en-US"
        },
        startOffsetDays: 13,
        phraseLabel: "English",
        phrases: [
            {
                text: "A tall drip coffee, please",
                pron: "[어 톨 드립 커피 플리즈]",
                meaning: "톨 사이즈 드립커피 주세요"
            },
            {
                text: "Room for cream, please",
                pron: "[룸 포 크림 플리즈]",
                meaning: "크림 넣을 공간 남겨 주세요"
            },
            {
                text: "Is it going to rain later?",
                pron: "[이즈 잇 고잉 투 레인 레이터]",
                meaning: "이따 비 와요?"
            },
            {
                text: "Where’s the ferry terminal?",
                pron: "[웨어즈 더 페리 터미널]",
                meaning: "페리 터미널 어디예요?"
            },
            {
                text: "Do you sell this by the pound?",
                pron: "[두 유 셀 디스 바이 더 파운드]",
                meaning: "이거 파운드 단위로 팔아요?"
            },
            {
                text: "Which stop for the Space Needle?",
                pron: "[위치 스탑 포 더 스페이스 니들]",
                meaning: "스페이스 니들은 어느 정류장이에요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "파이크 플레이스 & 워터프런트",
                activities: [
                    {
                        time: "09:30",
                        title: "파이크 플레이스 마켓",
                        type: "store",
                        location: "Pike Place Market"
                    },
                    {
                        time: "12:30",
                        title: "스타벅스 1호점",
                        type: "coffee",
                        location: "Original Starbucks"
                    },
                    {
                        time: "18:00",
                        title: "시애틀 그레이트 휠 & 워터프런트",
                        type: "sparkles",
                        location: "Seattle Great Wheel"
                    }
                ]
            },
            {
                title: "시애틀 센터",
                activities: [
                    {
                        time: "10:00",
                        title: "스페이스 니들",
                        type: "tower-control",
                        location: "Space Needle"
                    },
                    {
                        time: "13:00",
                        title: "치훌리 가든 앤 글라스",
                        type: "palette",
                        location: "Chihuly Garden and Glass"
                    },
                    {
                        time: "18:00",
                        title: "팝 컬처 뮤지엄",
                        type: "music",
                        location: "Museum of Pop Culture"
                    }
                ]
            },
            {
                title: "다운타운 & 케리 파크",
                activities: [
                    {
                        time: "10:00",
                        title: "시애틀 미술관",
                        type: "building-2",
                        location: "Seattle Art Museum"
                    },
                    {
                        time: "13:00",
                        title: "시애틀 중앙도서관",
                        type: "library",
                        location: "Seattle Central Library"
                    },
                    {
                        time: "18:30",
                        title: "케리 파크 스카이라인 선셋",
                        type: "binoculars",
                        location: "Kerry Park"
                    }
                ]
            },
            {
                title: "베인브리지 & 파이오니어 스퀘어",
                activities: [
                    {
                        time: "09:30",
                        title: "베인브리지 아일랜드 페리",
                        type: "ship",
                        location: "Bainbridge Island"
                    },
                    {
                        time: "13:30",
                        title: "파이오니어 스퀘어 & 스미스 타워",
                        type: "building",
                        location: "Smith Tower"
                    },
                    {
                        time: "18:00",
                        title: "캐피톨 힐 디너",
                        type: "utensils-crossed",
                        location: "Capitol Hill Seattle"
                    }
                ]
            },
            {
                title: "가스 웍스 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "가스 웍스 파크",
                        type: "trees",
                        location: "Gas Works Park"
                    },
                    {
                        time: "12:30",
                        title: "프리몬트 트롤 & 브런치",
                        type: "camera",
                        location: "Fremont Troll"
                    },
                    {
                        time: "16:00",
                        title: "시택 공항 이동",
                        type: "plane",
                        location: "Seattle-Tacoma International Airport"
                    }
                ]
            }
        ]
    },
    chicago: {
        id: "chicago",
        city: "Chicago",
        country: "United States",
        summary: "클라우드 게이트, 아트 인스티튜트, 건축 리버 크루즈, 윌리스 타워, 딥디쉬를 묶은 시카고 템플릿입니다.",
        footer: "Chicago works when the river, the skyline, and a slow deep-dish share one day.",
        heroImage: "assets/heroes/chicago.jpg",
        heroImagePortrait: 'assets/heroes/chicago-portrait.jpg',
        heroPosition: "center center",
        accent: "#3DEBF2",
        accentRgb: "61, 235, 242",
        ink: "#0F172A",
        inkRgb: "15, 23, 42",
        overlayTop: "rgba(15, 23, 42, 0.44)",
        overlayBottom: "rgba(10, 14, 28, 0.92)",
        timeZone: "America/Chicago",
        weather: {
            latitude: 41.8781,
            longitude: -87.6298
        },
        currency: {
            code: "USD",
            symbol: "$",
            locale: "en-US"
        },
        startOffsetDays: 14,
        phraseLabel: "English",
        phrases: [
            {
                text: "Which way is the Loop?",
                pron: "[위치 웨이 이즈 더 루프]",
                meaning: "루프(도심)는 어느 쪽이에요?"
            },
            {
                text: "How long for a deep-dish?",
                pron: "[하우 롱 포 어 딥 디시]",
                meaning: "딥디쉬 피자 얼마나 걸려요?"
            },
            {
                text: "Is this the Red Line?",
                pron: "[이즈 디스 더 레드 라인]",
                meaning: "이거 레드라인 맞아요?"
            },
            {
                text: "It’s windy out there",
                pron: "[잇츠 윈디 아웃 데어]",
                meaning: "밖에 바람 엄청 불어요"
            },
            {
                text: "Do I need to tip here?",
                pron: "[두 아이 니드 투 팁 히어]",
                meaning: "여기 팁 내야 해요?"
            },
            {
                text: "Can we sit by the river?",
                pron: "[캔 위 싯 바이 더 리버]",
                meaning: "강가 자리에 앉을 수 있어요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "밀레니엄 파크 & 루프",
                activities: [
                    {
                        time: "10:00",
                        title: "클라우드 게이트(더 빈)",
                        type: "sparkles",
                        location: "Cloud Gate"
                    },
                    {
                        time: "13:00",
                        title: "아트 인스티튜트 오브 시카고",
                        type: "palette",
                        location: "The Art Institute of Chicago"
                    },
                    {
                        time: "18:30",
                        title: "딥디쉬 피자 디너",
                        type: "utensils-crossed",
                        location: "Lou Malnati's Pizzeria"
                    }
                ]
            },
            {
                title: "리버 크루즈 & 매그니피센트 마일",
                activities: [
                    {
                        time: "10:00",
                        title: "시카고 건축 리버 크루즈",
                        type: "ship",
                        location: "Chicago Architecture Center"
                    },
                    {
                        time: "13:30",
                        title: "매그니피센트 마일 쇼핑",
                        type: "shopping-bag",
                        location: "Magnificent Mile"
                    },
                    {
                        time: "18:00",
                        title: "360 시카고 전망대",
                        type: "building",
                        location: "360 Chicago"
                    }
                ]
            },
            {
                title: "윌리스 타워 & 리버워크",
                activities: [
                    {
                        time: "10:00",
                        title: "윌리스 타워 스카이덱",
                        type: "tower-control",
                        location: "Skydeck Chicago"
                    },
                    {
                        time: "13:00",
                        title: "리버워크 런치",
                        type: "coffee",
                        location: "Chicago Riverwalk"
                    },
                    {
                        time: "18:00",
                        title: "시카고 극장 & 스테이트 스트리트",
                        type: "music",
                        location: "The Chicago Theatre"
                    }
                ]
            },
            {
                title: "네이비 피어 & 링컨 파크",
                activities: [
                    {
                        time: "10:00",
                        title: "네이비 피어",
                        type: "sparkles",
                        location: "Navy Pier"
                    },
                    {
                        time: "13:30",
                        title: "링컨 파크 동물원",
                        type: "trees",
                        location: "Lincoln Park Zoo"
                    },
                    {
                        time: "18:30",
                        title: "노스 애비뉴 비치 스카이라인",
                        type: "sun",
                        location: "North Avenue Beach"
                    }
                ]
            },
            {
                title: "뮤지엄 캠퍼스 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "필드 자연사 박물관",
                        type: "building-2",
                        location: "Field Museum"
                    },
                    {
                        time: "12:30",
                        title: "애들러 천문관 스카이라인 뷰",
                        type: "binoculars",
                        location: "Adler Planetarium"
                    },
                    {
                        time: "16:00",
                        title: "오헤어 공항 이동",
                        type: "plane",
                        location: "O'Hare International Airport"
                    }
                ]
            }
        ]
    },
    boston: {
        id: "boston",
        city: "Boston",
        country: "United States",
        summary: "프리덤 트레일, 퀸시 마켓, 하버드·MIT, 펜웨이, 뉴베리 스트리트를 걸어서 묶은 보스턴 템플릿입니다.",
        footer: "Boston is best on foot, where red brick, campus lawns, and the harbour line up.",
        heroImage: "assets/heroes/boston.jpg",
        heroImagePortrait: 'assets/heroes/boston-portrait.jpg',
        heroPosition: "center center",
        accent: "#BD3039",
        accentRgb: "189, 48, 57",
        ink: "#2A1410",
        inkRgb: "42, 20, 16",
        overlayTop: "rgba(42, 20, 16, 0.42)",
        overlayBottom: "rgba(22, 14, 12, 0.90)",
        timeZone: "America/New_York",
        weather: {
            latitude: 42.3601,
            longitude: -71.0589
        },
        currency: {
            code: "USD",
            symbol: "$",
            locale: "en-US"
        },
        startOffsetDays: 15,
        phraseLabel: "English",
        phrases: [
            {
                text: "Wicked good",
                pron: "[위키드 굿]",
                meaning: "진짜 좋네요 (보스턴식 표현)"
            },
            {
                text: "Where does the Freedom Trail start?",
                pron: "[웨어 더즈 더 프리덤 트레일 스타트]",
                meaning: "프리덤 트레일 출발점이 어디예요?"
            },
            {
                text: "One lobster roll, hot with butter",
                pron: "[원 랍스터 롤 핫 위드 버터]",
                meaning: "버터 바른 따뜻한 랍스터롤 하나요"
            },
            {
                text: "Is this the Green Line to Fenway?",
                pron: "[이즈 디스 더 그린 라인 투 펜웨이]",
                meaning: "펜웨이 가는 그린라인 맞아요?"
            },
            {
                text: "Can I get a CharlieCard?",
                pron: "[캔 아이 겟 어 찰리카드]",
                meaning: "찰리카드(교통카드) 하나 살 수 있어요?"
            },
            {
                text: "Are there student discounts?",
                pron: "[아 데어 스튜던트 디스카운츠]",
                meaning: "학생 할인 있어요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "프리덤 트레일",
                activities: [
                    {
                        time: "09:30",
                        title: "보스턴 커먼 & 주 의사당",
                        type: "landmark",
                        location: "Boston Common"
                    },
                    {
                        time: "13:00",
                        title: "퀸시 마켓 런치",
                        type: "store",
                        location: "Quincy Market"
                    },
                    {
                        time: "17:30",
                        title: "노스엔드 이탈리안 디너",
                        type: "utensils-crossed",
                        location: "North End Boston"
                    }
                ]
            },
            {
                title: "하버드 & MIT",
                activities: [
                    {
                        time: "10:00",
                        title: "하버드 야드 캠퍼스 투어",
                        type: "library",
                        location: "Harvard University"
                    },
                    {
                        time: "13:00",
                        title: "하버드 스퀘어 런치",
                        type: "coffee",
                        location: "Harvard Square"
                    },
                    {
                        time: "17:00",
                        title: "MIT & 찰스강 산책",
                        type: "map",
                        location: "Massachusetts Institute of Technology"
                    }
                ]
            },
            {
                title: "펜웨이 & 백베이",
                activities: [
                    {
                        time: "10:00",
                        title: "보스턴 미술관",
                        type: "palette",
                        location: "Museum of Fine Arts Boston"
                    },
                    {
                        time: "13:30",
                        title: "펜웨이 파크 투어",
                        type: "ticket",
                        location: "Fenway Park"
                    },
                    {
                        time: "18:00",
                        title: "뉴베리 스트리트 저녁",
                        type: "shopping-bag",
                        location: "Newbury Street"
                    }
                ]
            },
            {
                title: "하버 & 시포트",
                activities: [
                    {
                        time: "10:00",
                        title: "보스턴 티 파티 박물관",
                        type: "building-2",
                        location: "Boston Tea Party Ships & Museum"
                    },
                    {
                        time: "13:00",
                        title: "시포트 런치",
                        type: "utensils-crossed",
                        location: "Seaport District Boston"
                    },
                    {
                        time: "17:30",
                        title: "하버워크 선셋",
                        type: "map",
                        location: "Boston Harborwalk"
                    }
                ]
            },
            {
                title: "비컨힐 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "비컨힐 & 에이콘 스트리트",
                        type: "camera",
                        location: "Acorn Street"
                    },
                    {
                        time: "12:30",
                        title: "보스턴 퍼블릭 가든",
                        type: "trees",
                        location: "Boston Public Garden"
                    },
                    {
                        time: "16:00",
                        title: "로건 공항 이동",
                        type: "plane",
                        location: "Boston Logan International Airport"
                    }
                ]
            }
        ]
    },
    'washington-dc': {
        id: "washington-dc",
        city: "Washington, D.C.",
        country: "United States",
        summary: "내셔널 몰의 링컨 기념관, 스미소니언, 백악관과 의사당, 조지타운, 알링턴을 묶은 워싱턴 D.C. 템플릿입니다.",
        footer: "Washington works when monuments, free museums, and Georgetown brick stay in one loop.",
        heroImage: "assets/heroes/washington-dc.jpg",
        heroImagePortrait: 'assets/heroes/washington-dc-portrait.jpg',
        heroPosition: "center center",
        accent: "#F9A8D4",
        accentRgb: "249, 168, 212",
        ink: "#1E2A47",
        inkRgb: "30, 42, 71",
        overlayTop: "rgba(30, 42, 71, 0.40)",
        overlayBottom: "rgba(15, 20, 40, 0.90)",
        timeZone: "America/New_York",
        weather: {
            latitude: 38.9072,
            longitude: -77.0369
        },
        currency: {
            code: "USD",
            symbol: "$",
            locale: "en-US"
        },
        startOffsetDays: 16,
        phraseLabel: "English",
        phrases: [
            {
                text: "Are the museums free?",
                pron: "[아 더 뮤지엄즈 프리]",
                meaning: "박물관 무료예요?"
            },
            {
                text: "Do I need a timed pass?",
                pron: "[두 아이 니드 어 타임드 패스]",
                meaning: "시간 지정 입장권 필요해요?"
            },
            {
                text: "Stand right, walk left",
                pron: "[스탠드 라이트 워크 레프트]",
                meaning: "에스컬레이터는 오른쪽 서고 왼쪽으로 걷기"
            },
            {
                text: "Where’s the nearest Metro?",
                pron: "[웨어즈 더 니어리스트 메트로]",
                meaning: "가장 가까운 메트로역 어디예요?"
            },
            {
                text: "Can I bring a bag inside?",
                pron: "[캔 아이 브링 어 백 인사이드]",
                meaning: "가방 들고 들어갈 수 있어요?"
            },
            {
                text: "Which exit for the Mall?",
                pron: "[위치 엑싯 포 더 몰]",
                meaning: "내셔널 몰은 어느 출구예요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "내셔널 몰 서쪽",
                activities: [
                    {
                        time: "09:30",
                        title: "링컨 기념관",
                        type: "landmark",
                        location: "Lincoln Memorial"
                    },
                    {
                        time: "13:00",
                        title: "워싱턴 기념탑 & 리플렉팅 풀",
                        type: "camera",
                        location: "Washington Monument"
                    },
                    {
                        time: "18:00",
                        title: "타이들 베이슨 제퍼슨 기념관 야경",
                        type: "moon-star",
                        location: "Jefferson Memorial"
                    }
                ]
            },
            {
                title: "스미소니언",
                activities: [
                    {
                        time: "10:00",
                        title: "국립 항공우주박물관",
                        type: "building-2",
                        location: "National Air and Space Museum"
                    },
                    {
                        time: "13:30",
                        title: "국립 자연사박물관",
                        type: "building-2",
                        location: "National Museum of Natural History"
                    },
                    {
                        time: "17:30",
                        title: "국립 미술관",
                        type: "palette",
                        location: "National Gallery of Art"
                    }
                ]
            },
            {
                title: "백악관 & 캐피톨",
                activities: [
                    {
                        time: "09:30",
                        title: "백악관",
                        type: "landmark",
                        location: "The White House"
                    },
                    {
                        time: "13:00",
                        title: "국회의사당 투어",
                        type: "landmark",
                        location: "United States Capitol"
                    },
                    {
                        time: "17:30",
                        title: "의회도서관",
                        type: "library",
                        location: "Library of Congress"
                    }
                ]
            },
            {
                title: "알링턴 & 조지타운",
                activities: [
                    {
                        time: "09:30",
                        title: "알링턴 국립묘지",
                        type: "landmark",
                        location: "Arlington National Cemetery"
                    },
                    {
                        time: "13:00",
                        title: "조지타운 M 스트리트 런치",
                        type: "utensils-crossed",
                        location: "Georgetown Washington DC"
                    },
                    {
                        time: "17:30",
                        title: "조지타운 워터프런트 파크",
                        type: "sun",
                        location: "Georgetown Waterfront Park"
                    }
                ]
            },
            {
                title: "내셔널 아카이브 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "국립문서보관소 (독립선언서)",
                        type: "building",
                        location: "National Archives Museum"
                    },
                    {
                        time: "12:30",
                        title: "더 워프 브런치",
                        type: "coffee",
                        location: "The Wharf Washington DC"
                    },
                    {
                        time: "16:00",
                        title: "덜레스 공항 이동",
                        type: "plane",
                        location: "Washington Dulles International Airport"
                    }
                ]
            }
        ]
    },
    'salt-lake-city': {
        id: "salt-lake-city",
        city: "Salt Lake City",
        country: "United States",
        summary: "템플 스퀘어와 주 의사당, 앤털로프 아일랜드, 파크시티, 와사치 캐니언을 로드트립으로 묶은 솔트레이크시티 템플릿입니다.",
        footer: "Salt Lake City works when granite temples, salt flats, and mountain roads share the week.",
        heroImage: "assets/heroes/salt-lake-city.jpg",
        heroImagePortrait: 'assets/heroes/salt-lake-city-portrait.jpg',
        heroPosition: "center center",
        accent: "#D084FC",
        accentRgb: "208, 132, 252",
        ink: "#2E1065",
        inkRgb: "46, 16, 101",
        overlayTop: "rgba(46, 16, 101, 0.38)",
        overlayBottom: "rgba(24, 12, 48, 0.90)",
        timeZone: "America/Denver",
        weather: {
            latitude: 40.7608,
            longitude: -111.891
        },
        currency: {
            code: "USD",
            symbol: "$",
            locale: "en-US"
        },
        startOffsetDays: 18,
        phraseLabel: "English",
        phrases: [
            {
                text: "Does TRAX go to the airport?",
                pron: "[더즈 트랙스 고 투 디 에어포트]",
                meaning: "트랙스(경전철) 공항까지 가요?"
            },
            {
                text: "Is the canyon road open?",
                pron: "[이즈 더 캐니언 로드 오픈]",
                meaning: "캐니언 도로 열려 있어요?"
            },
            {
                text: "Are you open on Sundays?",
                pron: "[아 유 오픈 온 선데이즈]",
                meaning: "일요일에도 영업해요?"
            },
            {
                text: "I need to fill up the tank",
                pron: "[아이 니드 투 필 업 더 탱크]",
                meaning: "기름 넣어야 해요"
            },
            {
                text: "What’s the elevation here?",
                pron: "[왓츠 디 엘리베이션 히어]",
                meaning: "여기 고도가 얼마예요?"
            },
            {
                text: "Do you rent gear here?",
                pron: "[두 유 렌트 기어 히어]",
                meaning: "여기서 장비 대여돼요?"
            }
        ],
        itineraryTemplate: [
            {
                title: "템플 스퀘어 & 다운타운",
                activities: [
                    {
                        time: "10:00",
                        title: "템플 스퀘어",
                        type: "landmark",
                        location: "Temple Square"
                    },
                    {
                        time: "13:00",
                        title: "시티 크릭 센터 런치",
                        type: "shopping-cart",
                        location: "City Creek Center"
                    },
                    {
                        time: "18:00",
                        title: "유타 주 의사당 야경",
                        type: "building",
                        location: "Utah State Capitol"
                    }
                ]
            },
            {
                title: "앤털로프 아일랜드",
                activities: [
                    {
                        time: "09:00",
                        title: "앤털로프 아일랜드 주립공원 & 들소",
                        type: "trees",
                        location: "Antelope Island State Park"
                    },
                    {
                        time: "12:30",
                        title: "버팔로 포인트 트레일",
                        type: "map",
                        location: "Buffalo Point Trail"
                    },
                    {
                        time: "17:30",
                        title: "그레이트 솔트레이크 선셋",
                        type: "sun",
                        location: "Great Salt Lake"
                    }
                ]
            },
            {
                title: "파크시티",
                activities: [
                    {
                        time: "09:30",
                        title: "파크시티 메인 스트리트",
                        type: "map",
                        location: "Park City Main Street"
                    },
                    {
                        time: "13:00",
                        title: "유타 올림픽 파크",
                        type: "ticket",
                        location: "Utah Olympic Park"
                    },
                    {
                        time: "17:30",
                        title: "파크시티 마운틴 디너",
                        type: "utensils-crossed",
                        location: "Park City Mountain Resort"
                    }
                ]
            },
            {
                title: "와사치 캐니언",
                activities: [
                    {
                        time: "09:00",
                        title: "리틀 코튼우드 캐니언 드라이브",
                        type: "map",
                        location: "Little Cottonwood Canyon"
                    },
                    {
                        time: "12:30",
                        title: "스노버드 에어리얼 트램",
                        type: "sparkles",
                        location: "Snowbird"
                    },
                    {
                        time: "17:30",
                        title: "엔사인 피크 선셋",
                        type: "binoculars",
                        location: "Ensign Peak"
                    }
                ]
            },
            {
                title: "자연사 박물관 & 이동",
                activities: [
                    {
                        time: "09:30",
                        title: "유타 자연사 박물관",
                        type: "building-2",
                        location: "Natural History Museum of Utah"
                    },
                    {
                        time: "12:30",
                        title: "리버티 파크 브런치",
                        type: "coffee",
                        location: "Liberty Park Salt Lake City"
                    },
                    {
                        time: "16:00",
                        title: "솔트레이크시티 공항 이동",
                        type: "plane",
                        location: "Salt Lake City International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/czech-portrait.jpg',
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
    budapest: {
        id: "budapest",
        city: "Budapest",
        country: "Hungary",
        summary: "국회의사당과 어부의 요새, 세체니 온천, 중앙시장, 도나우 야경 유람선을 묶은 부다페스트 템플릿입니다.",
        footer: "Budapest glows brightest when thermal steam and Danube lights end the same day.",
        heroImage: "assets/heroes/budapest.jpg",
        heroImagePortrait: 'assets/heroes/budapest-portrait.jpg',
        heroPosition: "center center",
        accent: "#DE843B",
        accentRgb: "222, 132, 59",
        ink: "#1E1B2E",
        inkRgb: "30, 27, 46",
        overlayTop: "rgba(30, 27, 46, 0.42)",
        overlayBottom: "rgba(16, 14, 28, 0.92)",
        timeZone: "Europe/Budapest",
        weather: {
            latitude: 47.4979,
            longitude: 19.0402
        },
        currency: {
            code: "HUF",
            symbol: "Ft",
            locale: "hu-HU"
        },
        startOffsetDays: 14,
        phraseLabel: "Magyar",
        phrases: [
            {
                text: "Jó napot kívánok",
                pron: "[요 너포트 키바노크]",
                meaning: "안녕하세요 (정중한 인사)"
            },
            {
                text: "Köszönöm",
                pron: "[쾨쇠뇜]",
                meaning: "감사합니다"
            },
            {
                text: "Mennyibe kerül?",
                pron: "[멘니베 케륄]",
                meaning: "얼마예요?"
            },
            {
                text: "Egy sört kérek",
                pron: "[에지 쇠르트 케레크]",
                meaning: "맥주 한 잔 주세요"
            },
            {
                text: "A számlát kérem",
                pron: "[어 사믈라트 케렘]",
                meaning: "계산서 주세요"
            },
            {
                text: "Egészségedre!",
                pron: "[에게셰게드레]",
                meaning: "건배! / 건강을 위하여"
            }
        ],
        itineraryTemplate: [
            {
                title: "페스트 – 국회의사당 & 도나우",
                activities: [
                    {
                        time: "10:00",
                        title: "국회의사당 투어",
                        type: "landmark",
                        location: "Hungarian Parliament Building"
                    },
                    {
                        time: "13:00",
                        title: "다뉴브 강변의 신발",
                        type: "camera",
                        location: "Shoes on the Danube Bank"
                    },
                    {
                        time: "19:00",
                        title: "도나우 야경 유람선",
                        type: "ship",
                        location: "Vigadó tér"
                    }
                ]
            },
            {
                title: "부다 – 성 지구",
                activities: [
                    {
                        time: "09:30",
                        title: "어부의 요새",
                        type: "landmark",
                        location: "Fisherman's Bastion"
                    },
                    {
                        time: "12:30",
                        title: "마차시 성당 & 성 지구 골목",
                        type: "map",
                        location: "Matthias Church"
                    },
                    {
                        time: "17:30",
                        title: "부다 왕궁 & 푸니쿨라",
                        type: "building",
                        location: "Buda Castle"
                    }
                ]
            },
            {
                title: "온천 & 시민공원",
                activities: [
                    {
                        time: "09:00",
                        title: "세체니 온천",
                        type: "sparkles",
                        location: "Széchenyi Thermal Bath"
                    },
                    {
                        time: "13:00",
                        title: "영웅 광장",
                        type: "landmark",
                        location: "Heroes' Square"
                    },
                    {
                        time: "17:30",
                        title: "바이다후냐드 성 & 시민공원",
                        type: "trees",
                        location: "Vajdahunyad Castle"
                    }
                ]
            },
            {
                title: "중앙시장 & 유대인 지구",
                activities: [
                    {
                        time: "10:00",
                        title: "중앙 시장",
                        type: "store",
                        location: "Great Market Hall"
                    },
                    {
                        time: "13:00",
                        title: "바치 거리 런치",
                        type: "coffee",
                        location: "Váci Street"
                    },
                    {
                        time: "19:00",
                        title: "폐허 술집 심플라 케르트",
                        type: "music",
                        location: "Szimpla Kert"
                    }
                ]
            },
            {
                title: "겔레르트 언덕 & 이동",
                activities: [
                    {
                        time: "09:00",
                        title: "겔레르트 언덕 & 자유의 여신상",
                        type: "binoculars",
                        location: "Gellért Hill"
                    },
                    {
                        time: "12:00",
                        title: "뉴욕 카페",
                        type: "coffee",
                        location: "New York Café"
                    },
                    {
                        time: "16:00",
                        title: "리스트 페렌츠 공항 이동",
                        type: "plane",
                        location: "Budapest Ferenc Liszt International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/poland-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/denmark-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/sweden-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/norway-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/finland-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/austria-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/ireland-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/iceland-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/south-africa-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/ghana-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/kenya-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/greece-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/turkey-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/switzerland-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/portugal-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/quebec-portrait.jpg',
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
    calgary: {
        id: "calgary",
        city: "Calgary (Banff)",
        country: "Canada",
        summary: "캘거리 타워에서 밴프 곤돌라, 모레인 호수, 레이크 루이스, 아이스필드 파크웨이까지 이어지는 로키 로드트립 템플릿입니다.",
        footer: "The Rockies reward early starts, glacier-blue water, and one more lookout.",
        heroImage: "assets/heroes/calgary.jpg",
        heroImagePortrait: 'assets/heroes/calgary-portrait.jpg',
        heroPosition: "center center",
        accent: "#5EEAD4",
        accentRgb: "94, 234, 212",
        ink: "#0C2B2B",
        inkRgb: "12, 43, 43",
        overlayTop: "rgba(12, 43, 43, 0.38)",
        overlayBottom: "rgba(8, 24, 26, 0.90)",
        timeZone: "America/Edmonton",
        weather: {
            latitude: 51.0447,
            longitude: -114.0719
        },
        currency: {
            code: "CAD",
            symbol: "C$",
            locale: "en-CA"
        },
        startOffsetDays: 20,
        phraseLabel: "English",
        phrases: [
            {
                text: "One Parks Canada pass, please",
                pron: "[원 팍스 캐나다 패스 플리즈]",
                meaning: "파크스 캐나다 입장권 하나 주세요"
            },
            {
                text: "Is the Moraine Lake shuttle running?",
                pron: "[이즈 더 모레인 레이크 셔틀 러닝]",
                meaning: "모레인 호수 셔틀 운행해요?"
            },
            {
                text: "Any bears on the trail?",
                pron: "[애니 베어즈 온 더 트레일]",
                meaning: "트레일에 곰 나왔어요?"
            },
            {
                text: "What time is the last gondola?",
                pron: "[왓 타임 이즈 더 라스트 곤돌라]",
                meaning: "마지막 곤돌라 몇 시예요?"
            },
            {
                text: "Do I need winter tires?",
                pron: "[두 아이 니드 윈터 타이어즈]",
                meaning: "겨울용 타이어 필요해요?"
            },
            {
                text: "A double-double, please",
                pron: "[어 더블 더블 플리즈]",
                meaning: "더블더블(팀홀튼 커피) 하나 주세요"
            }
        ],
        itineraryTemplate: [
            {
                title: "캘거리 다운타운",
                activities: [
                    {
                        time: "10:00",
                        title: "캘거리 타워",
                        type: "tower-control",
                        location: "Calgary Tower"
                    },
                    {
                        time: "13:00",
                        title: "스티븐 애비뉴 런치",
                        type: "utensils-crossed",
                        location: "Stephen Avenue Walk"
                    },
                    {
                        time: "17:30",
                        title: "피스 브리지 & 프린스 아일랜드 파크",
                        type: "bridge",
                        location: "Peace Bridge Calgary"
                    }
                ]
            },
            {
                title: "밴프 타운 & 설퍼산",
                activities: [
                    {
                        time: "09:30",
                        title: "밴프 곤돌라 (설퍼산)",
                        type: "binoculars",
                        location: "Banff Gondola"
                    },
                    {
                        time: "13:00",
                        title: "밴프 애비뉴 런치",
                        type: "utensils-crossed",
                        location: "Banff Avenue"
                    },
                    {
                        time: "18:00",
                        title: "밴프 어퍼 핫 스프링스",
                        type: "sparkles",
                        location: "Banff Upper Hot Springs"
                    }
                ]
            },
            {
                title: "모레인 호수 & 레이크 루이스",
                activities: [
                    {
                        time: "07:30",
                        title: "모레인 호수 (셔틀 예약)",
                        type: "camera",
                        location: "Moraine Lake"
                    },
                    {
                        time: "12:30",
                        title: "샤토 레이크 루이스 런치",
                        type: "utensils-crossed",
                        location: "Fairmont Chateau Lake Louise"
                    },
                    {
                        time: "16:30",
                        title: "레이크 루이스 카누",
                        type: "ship",
                        location: "Lake Louise Boathouse"
                    }
                ]
            },
            {
                title: "아이스필드 파크웨이 (재스퍼 방향)",
                activities: [
                    {
                        time: "08:30",
                        title: "보우 호수",
                        type: "camera",
                        location: "Bow Lake"
                    },
                    {
                        time: "11:00",
                        title: "페이토 호수 전망대",
                        type: "binoculars",
                        location: "Peyto Lake"
                    },
                    {
                        time: "15:00",
                        title: "컬럼비아 아이스필드 스카이워크",
                        type: "sparkles",
                        location: "Columbia Icefield Skywalk"
                    }
                ]
            },
            {
                title: "존스턴 캐니언 & 이동",
                activities: [
                    {
                        time: "08:30",
                        title: "존스턴 캐니언 하이킹",
                        type: "map",
                        location: "Johnston Canyon"
                    },
                    {
                        time: "12:30",
                        title: "캔모어 런치",
                        type: "coffee",
                        location: "Canmore"
                    },
                    {
                        time: "16:30",
                        title: "캘거리 공항 이동",
                        type: "plane",
                        location: "Calgary International Airport"
                    }
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
        heroImagePortrait: 'assets/heroes/las-vegas-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/peru-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/chile-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/colombia-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/bolivia-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/morocco-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/tanzania-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/new-zealand-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/maldives-portrait.jpg',
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
        heroImagePortrait: 'assets/heroes/palau-portrait.jpg',
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
// 옛 도시 id(예전 진입 페이지·공유 링크)를 지금 id로 바꿔 준다. 404.html의 aliases와 같게 유지할 것.
const LEGACY_DESTINATION_ALIASES = { hongkong: 'hong-kong', losangeles: 'los-angeles', newyork: 'new-york', usa: 'los-angeles' };
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
    activeActivityId: null,
    reorderMode: false
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
// 모바일(세로 화면)에서는 세로 사진이 있으면 그것을 쓴다. 가로 사진을 세로로 자르면 랜드마크가 잘려 나가기 때문.
const portraitViewportQuery = window.matchMedia('(orientation: portrait)');
function isPortraitViewport() {
    return portraitViewportQuery.matches;
}
function getHeroSource(destination) {
    if (isPortraitViewport() && destination.heroImagePortrait) {
        return { src: destination.heroImagePortrait, position: destination.heroPositionPortrait || 'center center' };
    }
    return { src: destination.heroImage, position: destination.heroPosition || 'center center' };
}
const heroImagePreloadCache = new Map();

const COUNTRY_FLAGS = {
    France: '🇫🇷',
    'United Kingdom': '🇬🇧',
    'United States': '🇺🇸',
    'South Korea': '🇰🇷',
    Laos: '🇱🇦',
    Cambodia: '🇰🇭',
    Brunei: '🇧🇳',
    Mongolia: '🇲🇳',
    Kazakhstan: '🇰🇿',
    Uzbekistan: '🇺🇿',
    Kyrgyzstan: '🇰🇬',
    Nepal: '🇳🇵',
    'Sri Lanka': '🇱🇰',
    Qatar: '🇶🇦',
    Hungary: '🇭🇺',
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
    LAK: '₭',
    BND: 'B$',
    MNT: '₮',
    KZT: '₸',
    UZS: 'soʻm',
    KGS: 'сом',
    NPR: '₨',
    LKR: 'Rs',
    QAR: 'QR',
    HUF: 'Ft',
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
    'South Korea': '대한민국',
    Laos: '라오스',
    Cambodia: '캄보디아',
    Brunei: '브루나이',
    Mongolia: '몽골',
    Kazakhstan: '카자흐스탄',
    Uzbekistan: '우즈베키스탄',
    Kyrgyzstan: '키르기스스탄',
    Nepal: '네팔',
    'Sri Lanka': '스리랑카',
    Qatar: '카타르',
    Hungary: '헝가리',
    Tokyo: '도쿄',
    Kagoshima: '가고시마',
    Kumamoto: '구마모토',
    Nagasaki: '나가사키',
    'Oita (Beppu)': '오이타(벳푸)',
    Miyazaki: '미야자키',
    Kitakyushu: '기타큐슈',
    Saga: '사가',
    Hiroshima: '히로시마',
    Kobe: '고베',
    Okayama: '오카야마',
    Takamatsu: '다카마쓰',
    Matsuyama: '마쓰야마',
    Tokushima: '도쿠시마',
    'Yonago (Tottori)': '요나고(돗토리)',
    Kanazawa: '가나자와',
    Sendai: '센다이',
    Niigata: '니가타',
    Aomori: '아오모리',
    Hakodate: '하코다테',
    Shizuoka: '시즈오카',
    Ishigaki: '이시가키',
    Miyakojima: '미야코지마',
    Zhangjiajie: '장자제',
    Nanjing: '난징',
    Changsha: '창사',
    Kunming: '쿤밍',
    Xiamen: '샤먼',
    Harbin: '하얼빈',
    Yanji: '옌지',
    Chongqing: '충칭',
    Guilin: '구이린',
    Dalian: '다롄',
    Shenyang: '선양',
    Yantai: '옌타이',
    Weihai: '웨이하이',
    Wuhan: '우한',
    'Da Nang': '다낭',
    'Nha Trang': '나트랑',
    'Phu Quoc': '푸꾸옥',
    'Chiang Mai': '치앙마이',
    Phuket: '푸켓',
    Vientiane: '비엔티안',
    'Phnom Penh': '프놈펜',
    Cebu: '세부',
    Bohol: '보홀',
    Boracay: '보라카이',
    'Clark (Angeles)': '클락',
    'Kota Kinabalu': '코타키나발루',
    Kaohsiung: '가오슝',
    Taichung: '타이중',
    'Bandar Seri Begawan': '반다르스리브가완',
    Manado: '마나도',
    Ulaanbaatar: '울란바토르',
    Almaty: '알마티',
    Astana: '아스타나',
    Tashkent: '타슈켄트',
    Bishkek: '비슈케크',
    Kathmandu: '카트만두',
    Colombo: '콜롬보',
    Doha: '도하',
    'Abu Dhabi': '아부다비',
    Milan: '밀라노',
    Budapest: '부다페스트',
    'San Francisco': '샌프란시스코',
    Seattle: '시애틀',
    Chicago: '시카고',
    Boston: '보스턴',
    'Washington, D.C.': '워싱턴 D.C.',
    'Salt Lake City': '솔트레이크시티',
    'Calgary (Banff)': '캘거리(밴프)',
    Brisbane: '브리즈번',
    Melbourne: '멜버른',
    Seoul: '서울',
    Busan: '부산',
    Jeju: '제주',
    Osaka: '오사카',
    Kyoto: '교토',
    Fukuoka: '후쿠오카',
    Sapporo: '삿포로',
    Nagoya: '나고야',
    Okinawa: '오키나와',
    Hangzhou: '항저우',
    Suzhou: '쑤저우',
    "Xi'an": '시안',
    Chengdu: '청두',
    Guangzhou: '광저우',
    Qingdao: '칭다오',
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

// 같은 나라·같은 시간대의 도시는 목록에서 한 줄로 묶고, 여기 적힌 도시가 그 줄의 대표가 된다.
// (없으면 데이터 순서상 첫 도시) 키는 "나라::시간대" 또는 나라 이름.
const PREFERRED_GROUP_DESTINATIONS = {
    'Japan::Asia/Tokyo': 'tokyo',
    'China::Asia/Shanghai': 'shanghai',
    'South Korea::Asia/Seoul': 'seoul',
    'United States::America/Los_Angeles': 'los-angeles',
    'United States::America/New_York': 'new-york',
    'United States::America/Chicago': 'chicago',
    'Canada::America/Toronto': 'canada',
    'Indonesia::Asia/Makassar': 'bali',
    'Spain::Europe/Madrid': 'madrid',
    'Italy::Europe/Rome': 'rome',
    'Thailand::Asia/Bangkok': 'bangkok',
    'Vietnam::Asia/Ho_Chi_Minh': 'da-nang',
    'Philippines::Asia/Manila': 'cebu',
    'Taiwan::Asia/Taipei': 'taipei',
    'Malaysia::Asia/Kuala_Lumpur': 'malaysia',
    'United Arab Emirates::Asia/Dubai': 'dubai',
    'Kazakhstan::Asia/Almaty': 'almaty'
};

// 시간대가 여러 개인 나라에서 맨 위에 올 대표 시간대의 도시
const PREFERRED_COUNTRY_DESTINATIONS = {
    'United States': 'los-angeles',
    Canada: 'canada',
    Indonesia: 'bali'
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
    routePreview: document.getElementById('route-preview'),
    routePreviewCard: document.getElementById('route-preview-card'),
    routePreviewTitle: document.getElementById('route-preview-title'),
    routePreviewOpen: document.getElementById('route-preview-open'),
    routePreviewClose: document.getElementById('route-preview-close'),
    routePreviewFrame: document.getElementById('route-preview-frame'),
    routePreviewStatus: document.getElementById('route-preview-status'),
    currentFocusBtn: document.getElementById('current-focus-btn'),
    reorderModeBtn: document.getElementById('reorder-mode-btn'),
    reorderModeHint: document.getElementById('reorder-mode-hint'),
    reorderDoneFab: document.getElementById('reorder-done-fab'),
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
    aiTripNotes: document.getElementById('ai-trip-notes'),
    aiPromptTitle: document.getElementById('ai-prompt-title'),
    aiRequestStep: document.getElementById('ai-request-step'),
    aiServiceStep: document.getElementById('ai-service-step'),
    aiCopyStatus: document.getElementById('ai-copy-status'),
    aiRequestBackBtn: document.getElementById('ai-request-back-btn'),
    aiPromptCopyBtn: document.getElementById('ai-prompt-copy-btn'),
    aiPromptCloseBtn: document.getElementById('ai-prompt-close-btn')
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

function getDestinationGroupKey(destination) {
    return `${destination.country}::${destination.timeZone}`;
}

// 나라 + 시간대로 묶은 도시 그룹. 어차피 시간대가 핵심이라 목록에는 그룹마다 대표 도시 한 줄만 보여 주고,
// 같은 시간대의 다른 도시는 그 줄 아래에 이름만 함께 적는다. 도시 데이터 자체는 그대로라 링크(?destination=osaka)로는 여전히 열린다.
let destinationGroupCache = null;
function getDestinationGroups() {
    if (destinationGroupCache) return destinationGroupCache;
    const groups = new Map();
    Object.values(DESTINATIONS).forEach((destination) => {
        const key = getDestinationGroupKey(destination);
        if (!groups.has(key)) {
            groups.set(key, { key, country: destination.country, timeZone: destination.timeZone, members: [] });
        }
        groups.get(key).members.push(destination);
    });
    groups.forEach((group) => {
        const preferredId = PREFERRED_GROUP_DESTINATIONS[group.key] || PREFERRED_GROUP_DESTINATIONS[group.country];
        group.representative = group.members.find((member) => member.id === preferredId) || group.members[0];
        group.siblings = group.members.filter((member) => member.id !== group.representative.id);
    });
    destinationGroupCache = groups;
    return groups;
}

function getDestinationGroup(destinationId) {
    return getDestinationGroups().get(getDestinationGroupKey(getDestination(destinationId))) || null;
}

// Curated ordering informed by Korean outbound/air passenger statistics; not a live ranking.
const POPULAR_CITY_LABELS={Japan:['도쿄','오사카','후쿠오카','삿포로','오키나와'],China:['상하이','칭다오','베이징','장자제','다롄'],Vietnam:['다낭','나트랑','푸꾸옥','하노이','호치민'],Thailand:['방콕','치앙마이','푸켓'],Philippines:['세부','마닐라','보홀','클락','보라카이']};
const EXTRA_CITY_LABELS = {
    india:['뭄바이','벵갈루루','첸나이'],colombo:['캔디','갈레'],kathmandu:['포카라','박타푸르'],bishkek:['오시','카라콜'],tashkent:['사마르칸트','부하라'],ulaanbaatar:['다르항','에르데네트'],
    'phnom-penh':['시엠레아프','시아누크빌'],vientiane:['루앙프라방','방비엥'],saudi:['리야드','제다','메디나'],alaska:['앵커리지','페어뱅크스'],calgary:['에드먼턴','밴프'],
    ireland:['코크','골웨이','리머릭'],iceland:['아퀴레이리','케플라비크'],
    'south-africa':['요하네스버그','더반','프리토리아'],ghana:['쿠마시','테마'],kenya:['몸바사','나쿠루'],
    brazil:['상파울루','브라질리아'],argentina:['코르도바','멘도사'],peru:['리마','아레키파'],chile:['발파라이소','푸에르토몬트'],colombia:['보고타','메데인'],bolivia:['라파스','수크레'],morocco:['카사블랑카','마라케시','페스'],tanzania:['다르에스살람','잔지바르'],
    'new-zealand':['오클랜드','크라이스트처치','웰링턴'],egypt:['룩소르','알렉산드리아'],turkey:['앙카라','안탈리아','이즈미르'],
    paris:['리옹','마르세유','니스','보르도','스트라스부르'], london:['맨체스터','에든버러','리버풀','버밍엄','글래스고'],
    germany:['뮌헨','프랑크푸르트','함부르크','쾰른','뒤셀도르프'], czech:['브르노','체스키크룸로프','카를로비바리'],
    budapest:['데브레첸','세게드','페치'], poland:['크라쿠프','그단스크','브로츠와프','포즈난'],
    austria:['잘츠부르크','인스브루크','그라츠'], switzerland:['취리히','제네바','루체른','인터라켄','베른'],
    amsterdam:['로테르담','헤이그','위트레흐트'], portugal:['포르투','파루','코임브라'], greece:['테살로니키','산토리니','미코노스','이라클리온'],
    sweden:['예테보리','말뫼','웁살라'], norway:['베르겐','트롬쇠','트론헤임'], denmark:['오르후스','오덴세','올보르'],
    finland:['탐페레','투르쿠','로바니에미'], canada:['오타와','몬트리올'], vancouver:['빅토리아','휘슬러'],
    mexico:['과달라하라','몬테레이','푸에블라'], cancun:['플라야델카르멘','툴룸','코수멜']
};
let selectableDestinationCache = null;
function getSelectableDestinations() {
    if (selectableDestinationCache) return selectableDestinationCache;
    const groups = [...getDestinationGroups().values()];
    const countryGroupCounts = new Map();
    groups.forEach((group) => {
        countryGroupCounts.set(group.country, (countryGroupCounts.get(group.country) || 0) + 1);
    });

    selectableDestinationCache = groups.map((group) => {
        const destination = group.representative;
        const countryLabel = getLocalizedLabel(destination.country);
        const cityLabel = getLocalizedLabel(destination.city, destination.city);
        const showCity = (countryGroupCounts.get(group.country) || 0) > 1 || group.siblings.length > 0;

        return {
            id: destination.id,
            groupKey: group.key,
            memberIds: group.members.map((member) => member.id),
            siblingLabels: [...new Set([...(POPULAR_CITY_LABELS[destination.country] || []), ...group.siblings.map((member) => getLocalizedLabel(member.city, member.city)), ...(EXTRA_CITY_LABELS[destination.id] || [])])].filter(label=>label!==cityLabel).slice(0,4),
            country: destination.country,
            city: destination.city,
            region: getRegionKey(destination.country),
            primaryLabel: `${countryLabel} · ${cityLabel}`,
            secondaryLabel: destination.timeZone,
            timeZone: destination.timeZone
        };
    }).sort((left, right) => {

        const countryCompare = getCountrySortIndex(left.country) - getCountrySortIndex(right.country);
        if (countryCompare !== 0) return countryCompare;

        const preferredId = PREFERRED_COUNTRY_DESTINATIONS[left.country];
        if (preferredId && left.id === preferredId) return -1;
        if (preferredId && right.id === preferredId) return 1;

        return (left.secondaryLabel || left.primaryLabel).localeCompare(right.secondaryLabel || right.primaryLabel, 'ko');
    });
    return selectableDestinationCache;
}

// 도시 id가 속한 목록 줄(대표 도시 항목). 묶인 도시(오사카 등)도 일본·도쿄 줄을 돌려준다.
function getSelectableEntryFor(destinationId) {
    const id = getDestination(destinationId).id;
    return getSelectableDestinations().find((entry) => entry.memberIds.includes(id)) || null;
}

function getSelectableDestinationId(id) {
    const key = String(id || '').trim().toLowerCase();
    return getDestination(LEGACY_DESTINATION_ALIASES[key] || key).id;
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
    if (Array.isArray(day.links)) return;
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
    return `${EXAMPLE_HOTELS[destinationId]} ${destination.city}`;
}

function createStayActivity({ destinationId, time, title }) {
    return {
        id: createId('activity'),
        destinationId,
        time,
        title,
        location: EXAMPLE_HOTELS[destinationId],
        mapQuery: buildStayMapQuery(destinationId),
        type: 'luggage',
        memo: title.includes('출발') ? '예시 호텔 · 출발' : '예시 호텔 · 복귀'
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

function addBranchExample(day, dayIndex) {
    if(dayIndex!==1 || day.activities.length<4 || day.destinationIds.length!==1) return day;
    const [first,...rest]=day.activities, last=rest.pop();
    const choices=rest.slice(0,3);
    if(choices.length<2) return day;
    choices.forEach(a=>{a.row='example-choices-'+day.id;a.time=choices[0].time;});
    day.links=choices.flatMap(a=>[[first.id,a.id],[a.id,last.id]]);
    // Longer templates keep remaining stops after the sample alternatives.
    if(rest.length>3){day.links=choices.map(a=>[first.id,a.id]);choices.forEach(a=>day.links.push([a.id,rest[3].id]));rest.slice(3).forEach((a,i,rr)=>day.links.push([a.id,rr[i+1]?.id||last.id]));}
    TripGraph.normalize(day);return day;
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

        return addBranchExample(applyDailyStayAnchors({
            id: createId('day'),
            destinationId,
            destinationIds: [destinationId],
            date: currentDateValue,
            day: DAY_LABELS[currentDate.getDay()],
            title: buildTemplateTitle(destination, dayIndex),
            activities
        }), dayIndex);
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
        .map(([date, contexts], dayIndex) => {
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

            return addBranchExample(applyDailyStayAnchors({
                id: createId('day'),
                destinationId: destinationIds[0],
                destinationIds,
                date,
                day: DAY_LABELS[parseYmd(date).getDay()],
                title: destinationIds.length > 1
                    ? `${destinationIds.length}개 국가 일정`
                    : buildTemplateTitle(primaryDestination, sortedContexts[0].dayIndex),
                activities
            }), dayIndex);
        });
}

function buildItineraryFromSharedPayload(segments = [], serializedDays = []) {
    const templateItinerary = buildItineraryFromSegments(segments);

    return templateItinerary.map((day, dayIndex) => {
        const sourceDay = serializedDays[dayIndex];
        if (!sourceDay) return day;

        const nextActivities = Array.isArray(sourceDay.a)
            ? sourceDay.a.map((activity) => ({
                id: typeof activity.id === 'string' && /^[a-zA-Z0-9_-]+$/.test(activity.id) ? activity.id : createId('activity'),
                row: typeof activity.r === 'string' ? activity.r : undefined,
                destinationId: getSelectableDestinationId(
                    typeof activity.d === 'string' && activity.d
                        ? activity.d
                        : (day.activities[0]?.destinationId || day.destinationId)
                ),
                time: typeof activity.h === 'string' ? activity.h : '',
                title: typeof activity.n === 'string' && activity.n
                    ? activity.n
                    : (typeof activity.l === 'string' && activity.l.trim() ? activity.l.trim() : '일정'),
                location: typeof activity.l === 'string' ? activity.l : '',
                type: typeof activity.k === 'string' && (ACTIVITY_ICON_VALUES.has(activity.k) || activity.k === '') ? activity.k : '',
                memo: typeof activity.m === 'string' ? activity.m : '',
                mapQuery: typeof activity.q === 'string' ? activity.q : activity.l
            }))
            : day.activities;

        return {
            ...day,
            destinationId: nextActivities[0]?.destinationId || day.destinationId,
            destinationIds: [...new Set(nextActivities.map((activity) => activity.destinationId).filter(Boolean))],
            title: typeof sourceDay.t === 'string' && sourceDay.t.trim() ? sourceDay.t.trim() : day.title,
            activities: nextActivities,
            links: Array.isArray(sourceDay.e) ? sourceDay.e : undefined
        };
    });
}

function buildSharePayload() {
    return {
        v: 4,
        g: appState.segments.map((segment) => ({
            d: getSelectableDestinationId(segment.destinationId),
            s: segment.startDate,
            e: segment.endDate
        })),
        i: appState.itinerary.map((day) => ({
            e: day.links,
            a: day.activities.map((activity) => ({
                id: activity.id, r: activity.row, n: activity.title, q: activity.mapQuery,
                d: getSelectableDestinationId(activity.destinationId || day.destinationId),
                h: activity.time,
                l: activity.location,
                k: activity.type,
                m: activity.memo || ''
            }))
        }))
    };
}

const LZString = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    compressToEncodedURIComponent(input) {
        if (input == null) return "";
        return LZString._compress(input, 6, (a) => LZString._keyStr.charAt(a));
    },
    decompressFromEncodedURIComponent(input) {
        if (input == null) return "";
        if (input === "") return null;
        return LZString._decompress(input.length, 32, (index) => LZString._keyStr.indexOf(input.charAt(index)));
    },
    _compress(uncompressed, bitsPerChar, getCharFromInt) {
        if (uncompressed == null) return "";
        let i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
        for (ii = 0; ii < uncompressed.length; ii += 1) {
            context_c = uncompressed.charAt(ii);
            if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                context_dictionary[context_c] = context_dictSize++;
                context_dictionaryToCreate[context_c] = true;
            }
            context_wc = context_w + context_c;
            if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
                context_w = context_wc;
            } else {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                    if (context_w.charCodeAt(0) < 256) {
                        for (i = 0; i < context_numBits; i++) {
                            context_data_val = (context_data_val << 1);
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                        }
                        value = context_w.charCodeAt(0);
                        for (i = 0; i < 8; i++) {
                            context_data_val = (context_data_val << 1) | (value & 1);
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                            value = value >> 1;
                        }
                    } else {
                        value = 1;
                        for (i = 0; i < context_numBits; i++) {
                            context_data_val = (context_data_val << 1) | value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                            value = 0;
                        }
                        value = context_w.charCodeAt(0);
                        for (i = 0; i < 16; i++) {
                            context_data_val = (context_data_val << 1) | (value & 1);
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else {
                                context_data_position++;
                            }
                            value = value >> 1;
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    delete context_dictionaryToCreate[context_w];
                } else {
                    value = context_dictionary[context_w];
                    for (i = 0; i < context_numBits; i++) {
                        context_data_val = (context_data_val << 1) | (value & 1);
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        } else {
                            context_data_position++;
                        }
                        value = value >> 1;
                    }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                }
                context_dictionary[context_wc] = context_dictSize++;
                context_w = String(context_c);
            }
        }

        if (context_w !== "") {
            if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                if (context_w.charCodeAt(0) < 256) {
                    for (i = 0; i < context_numBits; i++) {
                        context_data_val = (context_data_val << 1);
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        } else {
                            context_data_position++;
                        }
                    }
                    value = context_w.charCodeAt(0);
                    for (i = 0; i < 8; i++) {
                        context_data_val = (context_data_val << 1) | (value & 1);
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        } else {
                            context_data_position++;
                        }
                        value = value >> 1;
                    }
                } else {
                    value = 1;
                    for (i = 0; i < context_numBits; i++) {
                        context_data_val = (context_data_val << 1) | value;
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        } else {
                            context_data_position++;
                        }
                        value = 0;
                    }
                    value = context_w.charCodeAt(0);
                    for (i = 0; i < 16; i++) {
                        context_data_val = (context_data_val << 1) | (value & 1);
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        } else {
                            context_data_position++;
                        }
                        value = value >> 1;
                    }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                }
                delete context_dictionaryToCreate[context_w];
            } else {
                value = context_dictionary[context_w];
                for (i = 0; i < context_numBits; i++) {
                    context_data_val = (context_data_val << 1) | (value & 1);
                    if (context_data_position == bitsPerChar - 1) {
                        context_data_position = 0;
                        context_data.push(getCharFromInt(context_data_val));
                        context_data_val = 0;
                    } else {
                        context_data_position++;
                    }
                    value = value >> 1;
                }
            }
            context_enlargeIn--;
            if (context_enlargeIn == 0) {
                context_enlargeIn = Math.pow(2, context_numBits);
                context_numBits++;
            }
        }

        value = 2;
        for (i = 0; i < context_numBits; i++) {
            context_data_val = (context_data_val << 1) | (value & 1);
            if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
            } else {
                context_data_position++;
            }
            value = value >> 1;
        }

        while (true) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar - 1) {
                context_data.push(getCharFromInt(context_data_val));
                break;
            }
            else context_data_position++;
        }
        return context_data.join('');
    },
    _decompress(length, resetValue, getNextValue) {
        let dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = { val: getNextValue(0), position: resetValue, index: 1 };
        for (i = 0; i < 3; i += 1) { dictionary[i] = i; }
        bits = 0; maxpower = Math.pow(2, 2); power = 1;
        while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
        }
        switch (next = bits) {
            case 0:
                bits = 0; maxpower = Math.pow(2, 8); power = 1;
                while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                c = String.fromCharCode(bits);
                break;
            case 1:
                bits = 0; maxpower = Math.pow(2, 16); power = 1;
                while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                c = String.fromCharCode(bits);
                break;
            case 2:
                return "";
        }
        dictionary[3] = c; w = c; result.push(c);
        while (true) {
            if (data.index > length) { return ""; }
            bits = 0; maxpower = Math.pow(2, numBits); power = 1;
            while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
            }
            switch (c = bits) {
                case 0:
                    bits = 0; maxpower = Math.pow(2, 8); power = 1;
                    while (power != maxpower) {
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    dictionary[dictSize++] = String.fromCharCode(bits);
                    c = dictSize - 1;
                    enlargeIn--;
                    break;
                case 1:
                    bits = 0; maxpower = Math.pow(2, 16); power = 1;
                    while (power != maxpower) {
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) { data.position = resetValue; data.val = getNextValue(data.index++); }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    dictionary[dictSize++] = String.fromCharCode(bits);
                    c = dictSize - 1;
                    enlargeIn--;
                    break;
                case 2:
                    return result.join('');
            }
            if (enlargeIn == 0) { enlargeIn = Math.pow(2, numBits); numBits++; }
            if (dictionary[c]) { entry = dictionary[c]; }
            else {
                if (c === dictSize) { entry = w + w.charAt(0); }
                else { return null; }
            }
            result.push(entry);
            dictionary[dictSize++] = w + entry.charAt(0);
            enlargeIn--;
            if (enlargeIn == 0) { enlargeIn = Math.pow(2, numBits); numBits++; }
            w = entry;
        }
    }
};

function encodePlan(payload) {
    const json = JSON.stringify(payload);
    try {
        const compressed = LZString.compressToEncodedURIComponent(json);
        if (compressed) return 'z' + compressed;
    } catch (e) {
        console.warn('LZ compression failed, falling back to base64:', e);
    }
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

function decodePlan(value, { onRepair } = {}) {
    if (!value) return null;
    let json = null;

    if (value.startsWith('z')) {
        try {
            const decompressed = LZString.decompressFromEncodedURIComponent(value.slice(1));
            if (decompressed) {
                json = decompressed;
            }
        } catch (e) {
            console.warn('LZ decompression failed, falling back to base64:', e);
        }
    }

    if (!json) {
        const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
        const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);
        const binary = atob(padded);
        const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
        json = new TextDecoder().decode(bytes);
    }
    
    try {
        return JSON.parse(json);
    } catch (originalError) {
        // Only repair a missing memo/object terminator immediately before the next stop.
        // Valid JSON is always returned untouched; no activities or fields are discarded.
        const repaired = json.replace(/("m"\s*:\s*"(?:[^"\\]|\\.)*),\s*(\{\s*"id"\s*:)/g, '$1"},$2');
        if (repaired === json) throw originalError;
        const payload = JSON.parse(repaired);
        if (payload?.v !== 4 || !Array.isArray(payload.g) || !Array.isArray(payload.i)
            || !payload.i.length || !payload.i.every(day => Array.isArray(day.a) && Array.isArray(day.e))) {
            throw originalError;
        }
        onRepair?.();
        return payload;
    }
}

function setScrollLock(locked) {
    document.body.style.overflow = locked ? 'hidden' : '';
}

function updateBodyScrollLock() {
    const shouldLock = !ui.setupOverlay.classList.contains('hidden')
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

    const heroSource = getHeroSource(destination);
    if (ui.heroImage.getAttribute('src') !== heroSource.src) ui.heroImage.src = heroSource.src;
    ui.heroImage.alt = `${destination.city}, ${destination.country}`;
    ui.heroImage.style.objectPosition = heroSource.position;
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

function routeModeRadios(name,selected){
    return `<fieldset class="route-modes" aria-label="이동 수단">${[['driving','자동차'],['transit','대중교통'],['walking','도보']].map(([value,label])=>`<label><input type="radio" name="${name}" value="${value}" ${value===selected?'checked':''}>${label}</label>`).join('')}</fieldset>`;
}
function getDirectionsUrl(origin, destination, mode = 'transit') {
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('hl', 'ko');
    url.searchParams.set('gl', 'kr');
    url.searchParams.set('travelmode', mode);
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    return url.toString();
}

function getRouteStops(activities = []) {
    return activities
        .map((activity) => String(activity.mapQuery || activity.location || '').trim())
        .filter(Boolean);
}

// 키 없이 쓰는 구글 지도 길찾기 임베드. 경유지는 daddr 뒤에 "+to:"로 잇는다.
function getDirectionsEmbedUrl(origin, destination, waypoints = [], mode = 'transit') {
    const start = String(origin || '').trim();
    const stops = [...waypoints, destination].map((stop) => String(stop || '').trim()).filter(Boolean);
    if (!start || !stops.length) return '';
    const daddr = stops.map((stop) => encodeURIComponent(stop)).join('+to:');
    return `https://maps.google.com/maps?saddr=${encodeURIComponent(start)}&daddr=${daddr}&dirflg=${mode === 'driving' ? 'd' : mode === 'walking' ? 'w' : 'r'}&hl=ko&output=embed`;
}

function getDayDirectionsEmbedUrl(activities = [], mode = 'driving') {
    const stops = getRouteStops(activities);
    if (stops.length < 2) return '';
    return getDirectionsEmbedUrl(stops[0], stops[stops.length - 1], stops.slice(1, -1), mode);
}

function getDayDirectionsUrl(activities = [], fallbackDestinationId = '', mode = 'driving') {
    const validLocations = getRouteStops(activities);
    if (validLocations.length < 2) return '';

    const origin = validLocations[0];
    const destination = validLocations[validLocations.length - 1];
    const waypoints = validLocations.slice(1, -1);
    const url = new URL('https://www.google.com/maps/dir/');
    url.searchParams.set('api', '1');
    url.searchParams.set('hl', 'ko');
    url.searchParams.set('gl', 'kr');
    url.searchParams.set('travelmode', mode);
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

    if (destination.currency.code === 'KRW') {
        ui.rateToKrw.textContent = '국내 여행이라 환율 변환이 필요 없어요.';
        ui.rateFromKrw.textContent = '해외 구간을 추가하면 그 나라 환율이 표시됩니다.';
        return;
    }

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

function inferPlaceIcon(text){
    const rules=[['tower-control',/타워|tower|タワー|塔/i],['luggage',/호텔|숙소|리조트|\b(hotel|hilton|inn|resort)\b|ホテル|旅館|酒店|饭店/i],['waves',/강$|강변|하천|\briver\b|川|河流|河畔/i],['coffee',/카페|커피|cafe|café|coffee|カフェ|咖啡/i],['plane',/공항|airport|空港|机场/i],['trees',/공원|park|公園|公园/i],['landmark',/신궁|사원|temple|shrine|神宮|神社|寺/i],['utensils-crossed',/식당|맛집|restaurant|レストラン|餐厅/i]];
    return rules.find(([,pattern])=>pattern.test(text))?.[0]||'';
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
    if (!appState.hasStarted || !appState.activeActivityId || appState.reorderMode || ui.tripShell.classList.contains('hidden')) {
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
    ui.destinationSelector.innerHTML = ['all'].map((regionKey) => {
        const entries = selectableDestinations;
        if (!entries.length) return '';

        const buttons = entries.map((destination) => `
            <button
                type="button"
                class="dropdown-option w-full rounded-[18px] border border-white/10 bg-slate-900 px-4 py-3 text-left transition-colors hover:bg-slate-800 ${destination.memberIds.includes(setupSelection.destinationId) ? 'active' : ''}"
                data-destination="${destination.id}"
                data-member-ids="${escapeHtml(destination.memberIds.join(' '))}">
                <div class="flex items-center justify-between gap-3">
                    <div class="min-w-0">
                        <div class="text-base font-semibold text-white truncate">${escapeHtml(destination.primaryLabel)}</div>
                        <div class="text-sm text-white/62 truncate">${escapeHtml(destination.secondaryLabel || '대표 시간대')}</div>
                        ${destination.siblingLabels.length ? `
                            <div class="mt-1.5 text-xs leading-5 text-white/50 whitespace-normal" data-sibling-cities="true">
                                <span class="text-white/34">같은 시간대 · </span>${escapeHtml(destination.siblingLabels.join(' · '))}
                            </div>
                        ` : ''}
                    </div>
                    <div class="text-lg shrink-0">${getCountryFlag(destination.country)}</div>
                </div>
            </button>
        `).join('');

        return `
            <section class="pb-1 ${regionKey === REGION_ORDER[0] ? '' : 'pt-2'}">
                <div class="px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/34">한국 출발 인기 여행지</div>
                <div class="space-y-2">${buttons}</div>
            </section>
        `;
    }).join('');

    const selectedDestination = selectableDestinations.find((destination) => destination.memberIds.includes(setupSelection.destinationId))
        || selectableDestinations[0];
    if (selectedDestination) {
        // 링크로 들어온 묶인 도시(예: 오사카)는 대표 도시 대신 실제 도시 이름을 보여 준다
        const actualDestination = DESTINATIONS[setupSelection.destinationId];
        ui.destinationDropdownValue.textContent = actualDestination && actualDestination.id !== selectedDestination.id
            ? `${getLocalizedLabel(actualDestination.country)} · ${getLocalizedLabel(actualDestination.city, actualDestination.city)}`
            : selectedDestination.primaryLabel;
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
        const secondary = getSelectableEntryFor(destination.id)?.secondaryLabel
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
    const availableBelow = Math.max(100, window.innerHeight - rect.bottom - viewportPadding - 8);

    ui.destinationSelector.style.left = `${left}px`;
    ui.destinationSelector.style.top = `${rect.bottom + 8}px`;
    ui.destinationSelector.style.bottom = 'auto';
    ui.destinationSelector.style.width = `${width}px`;
    ui.destinationSelector.style.maxHeight = `${availableBelow}px`;
}

function openDestinationDropdown() {
    document.body.appendChild(ui.destinationSelector);
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
    const selectableEntry = getSelectableEntryFor(destination.id);
    if (selectableEntry?.secondaryLabel) {
        return `${getLocalizedLabel(destination.country, destination.country)} · ${getLocalizedLabel(destination.city, destination.city)}`;
    }

    return getLocalizedLabel(destination.country, destination.country);
}

function getClockTimeValue(timeZone) {
    const now = getLocalNow(timeZone);
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
}

function generateAIPromptText(destinationId, startDate, endDate, tripNotes = '') {
    const destination=getDestination(destinationId);
    const segments=(pendingSetupSegmentsData?.length?pendingSetupSegmentsData:[{destinationId,startDate,endDate}]);
    const compact=segments.map(s=>({d:s.destinationId,s:s.startDate,e:s.endDate}));
    const groupParams = compact.map(segment => `g=${segment.d}~${segment.s}~${segment.e}`).join('&');
    return `여행 일정을 만들고, 아래 출력 형식대로 일정 주소와 ‘여행 일정 열기’ 링크를 주세요.
여행 요구사항: ${tripNotes.trim() || '동선이 무리하지 않은 여행.'}
여행지: ${getLocalizedLabel(destination.country)} · ${getLocalizedLabel(destination.city,destination.city)}
여행 구간: ${compact.map(segment => `${segment.d}: ${segment.s} ~ ${segment.e}`).join(', ')}
사용자가 적은 숙소·맛집·필수 방문지·정해진 루트를 우선 반영하고, 명시한 예약 날짜와 시간은 임의로 바꾸지 마세요.
숙소를 지정하지 않았다면 실제 호텔을 제안하고 메모에 예시 호텔이라고 표시하세요. 이동시간은 추정입니다.
앱 개발이나 소스 분석이 아닌 여행 일정 생성 요청입니다. 아래 형식으로 바로 일정을 작성하세요.

이 앱은 아래의 텍스트 URL을 직접 읽습니다. JSON, Base64, 압축, 코드 실행이 필요 없습니다.
링크 시작 부분은 다음을 그대로 사용하세요:
https://minwoo19930301.github.io/tour-city-planner/#trip=1&${groupParams}

위 URL 끝에 장소마다 아래 항목을 &s= 로 이어 붙이세요:
&s=날짜~고유ID~행ID~HH:MM~도시ID~아이콘~장소명
예: &s=${startDate}~a1~r1~09:00~${destinationId}~landmark~센소지
- 구간의 시작일과 종료일을 포함한 모든 날짜에 실제 장소를 넣으세요. 날짜·시간 순서로 작성하세요.
- 도시ID는 해당 여행 구간의 ID를 그대로 사용하세요: ${[...new Set(compact.map(segment => segment.d))].join(', ')}.
- 고유ID는 a1,a2처럼 전체 일정에서 중복되지 않는 영문·숫자. 행ID는 r1,r2처럼 쓰세요.
- 같은 날짜에서 같은 행ID인 연속 장소들은 나란한 후보입니다(기본 3개 표시, 더 많으면 가로 스크롤). 보통 순차 일정은 행ID를 다르게 주세요.
- 아이콘은 다음 중 하나: ${ACTIVITY_ICON_OPTIONS.map(option => option.value).join(', ')}.
- 장소명은 도시를 함께 적어 정확히 찾게 해 주세요. 한글·영어·일본어를 그대로 쓸 수 있습니다.
- 장소명·메모 안의 공백은 +, &는 %26, #은 %23, ~는 %7E, +는 %2B, %는 %25, 괄호는 %28 및 %29로 쓰세요. 이스케이프는 원래 글자에 한 번만 적용하세요. 항목 사이의 &와 ~는 그대로 둡니다.
- 메모가 필요하면 &m=고유ID~메모 를 붙이세요. 메모는 간단히 적으세요.
- 지도 검색어를 별도로 지정하려면 &q=고유ID~검색어 를 붙이세요.
- 기본은 앞 행에서 다음 행으로 자동 연결됩니다. 서로 다른 경로를 명시할 때는 해당 날짜의 모든 연결을 &e=출발ID~도착ID 로 적으세요.
  예: a1 → a2/a3 → a4는 &e=a1~a2&e=a1~a3&e=a2~a4&e=a3~a4 입니다. a2,a3는 같은 행ID를 씁니다.

최종 답변은 정확히 다음 세 부분으로 작성하세요:
1. “이 응답 전체를 복사한 뒤 아래 ‘여행 일정 열기’를 눌러 주세요.”
2. 위 규칙으로 만든 완성 URL 원문 한 줄. 주소를 마크다운 링크 제목 뒤에 숨기지 마세요. URL 내부에 줄바꿈·공백을 넣지 마세요.
3. 다음 고정 링크를 수정 없이 그대로 출력하세요: [여행 일정 열기](https://minwoo19930301.github.io/tour-city-planner/?import=ai)
고정 링크에는 일정을 붙이지 마세요. 그 화면에서 복사한 응답을 읽어 일정을 엽니다. 생성한 주소가 클릭되지 않는 AI 화면에서도 사용할 수 있는 방식입니다.
JSON이나 코드 블록, 미완성 예시, 인코딩된 #plan 링크를 반환하지 마세요. #trip=1 형식의 URL을 직접 작성하면 됩니다.
날짜 누락·중복 ID·잘못된 시간·연결을 확인하고 주소 전체를 생략 없이 출력하세요.`;
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
    if (destination.currency.code === 'KRW') {
        // 국내 여행: 환율 변환이 필요 없다
        isExchangeLoading = false;
        currentExchangeRate = 1;
        updateExchangeOutputs();
        return;
    }
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
    const periods={오전:'09:00',점심:'12:00',오후:'15:00',저녁:'18:00',밤:'21:00'};
    const resolved=periods[activity.time] || activity.time;
    if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(resolved || '')) return '';
    const hourLabel = `${day.date}T${resolved.split(':')[0]}:00`;
    const weather = appState.currentWeather?.hourlyByKey?.[`${activity.destinationId || day.destinationId}|${hourLabel}`];
    if (!weather) return '';

    const weatherInfo = getWeatherInfo(weather.weatherCode);
    const temp = Math.round(weather.temp);

    return `
        <i data-lucide="${weatherInfo.icon}" class="w-4 h-4 mb-0.5" style="color:${weatherInfo.color}"></i>
        <span class="text-[10px] font-bold text-white/90" title="${periods[activity.time] ? periods[activity.time] + ' 기준 예보' : '시간별 예보'}">${periods[activity.time] ? '약 ' : ''}${temp}°</span>
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

function getDayMoveLabel(day, dayIndex) {
    const date = parseYmd(day.date);
    return `${dayIndex + 1}일차 · ${formatMonthDay(date)} ${formatMonthDayWithWeekday(date)} · ${getDayChipLabel(day)}`;
}

function buildActivityReorderControlsHtml(day, dayIndex, activity, activityIndex) {
    const dayCount = appState.itinerary.length;
    const isFirstCard = activityIndex === 0;
    const isLastCard = activityIndex === day.activities.length - 1;
    const upCrossesDay = isFirstCard && dayIndex > 0;
    const downCrossesDay = isLastCard && dayIndex < dayCount - 1;
    const canMoveUp = !isFirstCard || upCrossesDay;
    const canMoveDown = !isLastCard || downCrossesDay;
    const upLabel = upCrossesDay ? '이전 날짜의 마지막으로 이동' : '위로 이동';
    const downLabel = downCrossesDay ? '다음 날짜의 처음으로 이동' : '아래로 이동';
    const dayOptionsHtml = appState.itinerary
        .map((otherDay, otherIndex) => (otherIndex === dayIndex
            ? ''
            : `<option value="${otherIndex}">${escapeHtml(getDayMoveLabel(otherDay, otherIndex))}</option>`))
        .join('');
    const dayMoveHtml = dayCount > 1 ? `
        <label class="reorder-day-move" title="${escapeHtml('다른 날짜로 이동')}">
            <i data-lucide="calendar-days" class="w-3.5 h-3.5"></i>
            <span>날짜 이동</span>
            <select
                class="reorder-day-select"
                data-reorder-day-select="true"
                data-day-index="${dayIndex}"
                data-activity-id="${activity.id}"
                aria-label="${escapeHtml('다른 날짜로 이동')}">
                <option value="" selected disabled>${escapeHtml('이동할 날짜 선택')}</option>
                ${dayOptionsHtml}
            </select>
        </label>
    ` : '';

    return `
        <div class="activity-reorder-controls" data-reorder-control="true" data-skip-edit="true">
            ${dayMoveHtml}
            <button
                type="button"
                class="reorder-step-btn"
                data-reorder-step="up"
                data-day-index="${dayIndex}"
                data-activity-id="${activity.id}"
                aria-label="${escapeHtml(upLabel)}"
                title="${escapeHtml(upLabel)}"
                ${canMoveUp ? '' : 'disabled'}>
                <i data-lucide="${upCrossesDay ? 'chevrons-up' : 'chevron-up'}" class="w-5 h-5"></i>
            </button>
            <button
                type="button"
                class="reorder-step-btn"
                data-reorder-step="down"
                data-day-index="${dayIndex}"
                data-activity-id="${activity.id}"
                aria-label="${escapeHtml(downLabel)}"
                title="${escapeHtml(downLabel)}"
                ${canMoveDown ? '' : 'disabled'}>
                <i data-lucide="${downCrossesDay ? 'chevrons-down' : 'chevron-down'}" class="w-5 h-5"></i>
            </button>
        </div>
    `;
}


let pendingParallelActivity = null;

function graphLayoutAttributes(rows, activity) {
    const rowIndex = rows.findIndex(r => r.includes(activity)), row = rows[rowIndex];
    let lanes = row.length, column = row.indexOf(activity);
    if (row.length === 1 && rowIndex > 0) {
        const day = appState.itinerary.find(d => d.activities.includes(activity)), previous = rows[rowIndex - 1];
        const parents = day?.links.filter(e => e[1] === activity.id).map(e => e[0]) || [];
        const parent = previous.find(a => parents.includes(a.id));
        if (previous.length > 1 && parents.length === 1 && parent) { lanes = previous.length; column = previous.indexOf(parent); }
    }
    return `data-parallel="${row.length > 1}" style="grid-row:${rowIndex + 1};grid-column:1 / -1;width:calc((100% + var(--tree-column-gap)) / ${lanes} - var(--tree-column-gap));margin-left:calc((100% + var(--tree-column-gap)) * ${column / lanes})"`;
}

function graphControlsHtml(day, dayIndex, activity) {
    const attrs = `data-graph-day="${dayIndex}" data-graph-id="${activity.id}" data-skip-edit="true"`;
    return `<button type="button" ${attrs} class="graph-port graph-input" data-graph-port="in" aria-label="${escapeHtml(activity.location)}에 연결" title="위 일정으로 끌거나 여기에 놓아 연결"></button>
    <button type="button" ${attrs} class="graph-port graph-output" data-graph-port="out" aria-label="${escapeHtml(activity.location)}에서 연결" title="아래 일정의 연결점으로 드래그"></button>
    <button type="button" ${attrs} data-graph-action="remove" class="graph-remove" aria-label="${escapeHtml(activity.location)} 제거" title="일정 제거">×</button>`;
}
let graphWire = null;
function finishGraphWire(target) {
    if (!graphWire) return;
    const wire = graphWire; graphWire = null;
    wire.svg.remove(); document.body.classList.remove('graph-connecting');
    document.querySelectorAll('.graph-port-ready').forEach(el=>el.classList.remove('graph-port-ready'));
    suppressItineraryClickUntil = Date.now() + 350;
    if (target?.dataset.graphPort === (wire.reverse?'out':'in') && Number(target.dataset.graphDay) === wire.day &&
        TripGraph.connect(appState.itinerary[wire.day], wire.reverse?target.dataset.graphId:wire.id, wire.reverse?wire.id:target.dataset.graphId)) persistItineraryChanges();
}
function startGraphWire(port, pointerId) {
    finishGraphWire();
    const r=port.getBoundingClientRect(), svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.classList.add('graph-wire'); svg.innerHTML='<path />'; document.body.appendChild(svg);
    graphWire={day:Number(port.dataset.graphDay),id:port.dataset.graphId,x:r.left+r.width/2,y:r.top+r.height/2,svg,pointerId,reverse:port.dataset.graphPort==='in'};
    const rows=TripGraph.rows(appState.itinerary[graphWire.day]), rank=rows.findIndex(row=>row.some(a=>a.id===graphWire.id));
    (graphWire.reverse?rows.slice(0,rank):rows.slice(rank+1)).flat().forEach(a=>ui.itineraryContainer.querySelector(`[data-graph-port="${graphWire.reverse?'out':'in'}"][data-graph-id="${a.id}"]`)?.classList.add('graph-port-ready'));
    document.body.classList.add('graph-connecting');
}
document.addEventListener('pointerdown', event=>{
    const port=event.target.closest('[data-graph-port]');
    if(!port || event.button!==0) return;
    event.preventDefault(); startGraphWire(port,event.pointerId);
});
window.addEventListener('pointermove', event=>{
    if(!graphWire || graphWire.pointerId!==event.pointerId) return;
    const {x,y,svg,reverse}=graphWire;
    const bend=reverse?-35:35;
    svg.firstChild.setAttribute('d',`M ${x} ${y} C ${x} ${y+bend}, ${event.clientX} ${event.clientY-bend}, ${event.clientX} ${event.clientY}`);
});
window.addEventListener('pointerup', event=>{
    if(graphWire?.pointerId!==event.pointerId) return;
    finishGraphWire(document.elementFromPoint(event.clientX,event.clientY)?.closest('[data-graph-port]'));
});
window.addEventListener('pointercancel',()=>finishGraphWire());
document.addEventListener('keydown',event=>{
    if(event.key==='Escape') finishGraphWire();
    if(event.target.closest('.graph-edge-remove') && (event.key==='Enter' || event.key===' ')) {event.preventDefault();handleGraphClick(event);}
    const port=event.target.closest('[data-graph-port]');
    if(port && (event.key==='Enter' || event.key===' ')) {
        event.preventDefault();
        if(graphWire) finishGraphWire(port); else startGraphWire(port,null);
    }
});
function reconnectMovedStop(day, id) {
    const rows = TripGraph.normalize(day), i = rows.findIndex(r => r.some(a => a.id === id));
    day.links = day.links.filter(e => !e.includes(id));
    (rows[i-1] || []).forEach(a => TripGraph.connect(day,a.id,id));
    (rows[i+1] || []).forEach(a => TripGraph.connect(day,id,a.id));
}
function handleGraphClick(event) {
    const button = event.target.closest('[data-graph-action]');
    if (!button) return false;
    const dayIndex = Number(button.dataset.graphDay), day = appState.itinerary[dayIndex], id = button.dataset.graphId;
    const activity = day?.activities.find(a => a.id === id); if (!activity) return true;
    const action = button.dataset.graphAction;
    if (action === 'parallel') {
        const item = {...activity, id:createId('activity'), location:'새 후보 장소', title:'새 후보', mapQuery:'', memo:''};
        if (!TripGraph.parallel(day,id,item)) return true;
        pendingParallelActivity={dayIndex,id:item.id};
        persistItineraryChanges(); openActivityEditor(dayIndex,item.id); return true;
    }
    if (action === 'separate') TripGraph.separate(day,id);
    if (action === 'remove') TripGraph.remove(day,id);
    if (action === 'unlink') day.links = day.links.filter(e => !(e[0] === id && e[1] === button.dataset.graphTo));
    syncDayDestinations(day); persistItineraryChanges(); return true;
}
function getRouteColor(index) {
    const colors = ['#fb923c', '#38bdf8', '#a78bfa', '#f472b6', '#4ade80', '#facc15', '#2dd4bf', '#f87171'];
    return colors[index % colors.length];
}
function routeEdgeColors(day){
    const colors=new Map(), incoming=new Set(day.links.map(e=>e[1]));let count=0;
    function visit(id,edges,seen){
        if(count>=200||seen.has(id))return;
        const next=day.links.filter(e=>e[0]===id);
        if(!next.length){const color=getRouteColor(count++);edges.forEach(e=>{const key=e.join('→');if(!colors.has(key))colors.set(key,new Set());colors.get(key).add(color);});return;}
        next.forEach(e=>visit(e[1],[...edges,e],new Set([...seen,id])));
    }
    day.activities.filter(a=>!incoming.has(a.id)).forEach(a=>visit(a.id,[],new Set()));return colors;
}
function drawGraphEdges() {
    appState.itinerary.forEach((day,dayIndex) => {
        const list=ui.itineraryContainer.querySelector(`[data-activity-list="${dayIndex}"]`), svg=list?.querySelector('.tree-svg');
        if (!svg) return;
        const rankForGap=new Map(TripGraph.rows(day).flatMap((row,i)=>row.map(a=>[a.id,i]))),counts=new Map();
        day.links.forEach(([a,b])=>{const key=rankForGap.get(a)+'-'+rankForGap.get(b);counts.set(key,(counts.get(key)||0)+1);});
        const columnsForGap=Math.max(1,Math.floor(list.clientWidth/76));
        const toolbarRows=Math.ceil(Math.max(1,...counts.values())/columnsForGap);
        list.style.setProperty('row-gap',`${Math.max(placingStop||activityDragState.active?96:60,toolbarRows*36+20)}px`,'important');
        const bounds=list.getBoundingClientRect();
        svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
        list.querySelectorAll('.edge-actions').forEach(el=>el.remove());
        const edgeColors=routeEdgeColors(day);
        const actionPositions=[];
        const boundaryCounts=new Map();
        const ranks=new Map(TripGraph.rows(day).flatMap((r,i)=>r.map(a=>[a.id,i])));
        svg.innerHTML=day.links.map(([from,to]) => {
            const a=list.querySelector(`[data-activity-wrapper="${from}"]`)?.getBoundingClientRect();
            const b=list.querySelector(`[data-activity-wrapper="${to}"]`)?.getBoundingClientRect();
            if(!a || !b) return '';
            const x=a.left+a.width/2-bounds.left, y=a.bottom-bounds.top;
            const xx=b.left+b.width/2-bounds.left, yy=b.top-bounds.top;
            const bend=Math.min(34,(yy-y)/2);
            const skips=ranks.get(to)-ranks.get(from)>1;
            const lane=xx<bounds.width/2?-9:bounds.width+9;
            let path=skips?`M ${x} ${y} V ${y+30} H ${lane} V ${yy-30} H ${xx} V ${yy}`:`M ${x} ${y} C ${x} ${y+bend}, ${xx} ${yy-bend}, ${xx} ${yy}`;
            const toolbarY=skips?y+46:(y+yy)/2;
            const source=day.activities.find(a=>a.id===from), target=day.activities.find(a=>a.id===to);
            const origin=source.mapQuery || source.location, dest=target.mapQuery || target.location;
            const routeRows=TripGraph.rows(day),sr=routeRows.find(r=>r.includes(source)),tr=routeRows.find(r=>r.includes(target));
            const branchIndex=tr.length>1?tr.indexOf(target):sr.length>1?sr.indexOf(source):0;
            const colors=[...(edgeColors.get(from+'→'+to)||new Set(['#fb923c']))];
            const color=colors[0];
            const actions=document.createElement('div');actions.style.borderColor=color;actions.className='edge-actions';actions.dataset.skipEdit='true';
            const boundary=ranks.get(from)+'-'+ranks.get(to);
            const siblings=day.links.filter(([f,t])=>ranks.get(f)===ranks.get(from)&&ranks.get(t)===ranks.get(to));
            const position=boundaryCounts.get(boundary)||0;boundaryCounts.set(boundary,position+1);
            const columns=Math.max(1,Math.min(siblings.length,Math.floor(bounds.width/76)));
            const rows=Math.ceil(siblings.length/columns);
            const ax=(position%columns+.5)*bounds.width/columns;
            const ay=skips?toolbarY+Math.floor(position/columns)*36:y+(yy-y)/2+(Math.floor(position/columns)-(rows-1)/2)*36;
            if(!skips)path=`M ${x} ${y} C ${x} ${y+18}, ${ax} ${ay-18}, ${ax} ${ay} C ${ax} ${ay+18}, ${xx} ${yy-18}, ${xx} ${yy}`;
            actionPositions.push({x:ax,y:ay});
            actions.style.left=`${ax}px`;actions.style.top=`${ay}px`;
            actions.title=source.location+' → '+target.location;
            actions.innerHTML=`<a href="${getDirectionsUrl(origin,dest)}" data-route-preview="true" data-route-title="${escapeHtml(source.location+' → '+target.location)}" data-route-embed="${escapeHtml(getDirectionsEmbedUrl(origin,dest))}" aria-label="${escapeHtml(source.location+' → '+target.location)} 가는 길" title="가는 길"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M8 5h8a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h8"/></svg></a><button type="button" data-graph-action="unlink" data-graph-day="${dayIndex}" data-graph-id="${from}" data-graph-to="${to}" aria-label="${escapeHtml(source.location+' → '+target.location)} 연결 제거">×</button>`;
            list.appendChild(actions);
            return `<a data-route-preview="true" data-skip-edit="true" href="${getDirectionsUrl(origin,dest)}" data-route-title="${escapeHtml(source.location+' → '+target.location)}" data-route-embed="${escapeHtml(getDirectionsEmbedUrl(origin,dest))}" aria-label="${escapeHtml(source.location+'에서 '+target.location+' 가는 길')}">${colors.map((c,i)=>`<path transform="translate(${(i-(colors.length-1)/2)*3.5},0)" style="pointer-events:stroke;cursor:pointer;stroke:${c};stroke-width:3" d="${path}"/>`).join('')}<circle cx="${xx}" cy="${yy}" r="3" fill="currentColor"/></a><g class="graph-edge-remove" data-skip-edit="true" data-graph-action="unlink" data-graph-day="${dayIndex}" data-graph-id="${from}" data-graph-to="${to}" role="button" tabindex="0" aria-label="${escapeHtml(source.location+' → '+target.location)} 연결 제거" transform="translate(${(x+xx)/2},${(y+yy)/2})"><circle r="9"/><text text-anchor="middle" dy="4">×</text></g>`;
        }).join('');
    });
}
window.addEventListener('resize', () => requestAnimationFrame(drawGraphEdges));
function renderItinerary() {
    if(placingStop) return;
    if (graphWire) finishGraphWire();
    if (activityDragState.active) {
        // 끌기 도중에는 DOM을 갈아끼우지 않고, 끌기가 끝난 뒤 다시 그린다
        activityDragState.renderPending = true;
        return;
    }

    closeRoutePreview();
    const reorderMode = false;
    const horizontalOffsets = new Map([...ui.itineraryContainer.querySelectorAll('[data-day-panel]')].map(panel => [panel.dataset.dayPanel, panel.querySelector('.tree-scroll')?.scrollLeft || 0]));
    ui.itineraryContainer.innerHTML = '';

    appState.itinerary.forEach((day, dayIndex) => {
        removeRedundantBypasses(day);
        ensureStopTimes(day);
        const dayDestination = getDayDestination(day);
        const headerDate = parseYmd(day.date);
        const previousDay = appState.itinerary[dayIndex - 1];
        const isSegmentBoundary = !previousDay
            || previousDay.destinationId !== day.destinationId
            || countDaysInclusive(parseYmd(previousDay.date), parseYmd(day.date)) > 1;
        const dayElement = document.createElement('div');
        dayElement.className = 'day-panel';
        dayElement.dataset.dayPanel = String(dayIndex);
        const graphIsLinear = TripGraph.normalize(day).every(r => r.length === 1) && day.links.length === Math.max(0, day.activities.length - 1) && day.links.every(([a,b]) => day.activities.findIndex(x => x.id === b) === day.activities.findIndex(x => x.id === a) + 1);
        const dayDirectionsUrl = graphIsLinear ? getDayDirectionsUrl(day.activities, day.destinationId) : null;
        const dayDirectionsEmbedUrl = getDayDirectionsEmbedUrl(day.activities);
        const graphRows = TripGraph.normalize(day);
        const graphLanes = Math.max(3, ...graphRows.map(row => row.length));
        const activitiesHtml = day.activities.map((activity, activityIndex) => {
            const nextActivity = day.activities[activityIndex + 1];
            const isActiveActivity = activity.id === appState.activeActivityId;
            const activityDestination = getDestination(activity.destinationId || day.destinationId);
            const showActivityCountry = (day.destinationIds?.length || 0) > 1;
            const routeOrigin = String(activity.mapQuery || activity.location || '').trim();
            const routeTarget = String(nextActivity?.mapQuery || nextActivity?.location || '').trim();
            const routeTitle = `${activity.location || routeOrigin} → ${nextActivity?.location || routeTarget}`;
            const betweenStopsHtml = '';
            const mapLinkHtml = `
                <a href="${getMapsSearchUrl(activity.mapQuery || activity.location, activity.destinationId || day.destinationId)}"
                    target="_blank"
                    rel="noreferrer"
                    data-skip-edit="true"
                    class="map-link p-2 text-white/36 transition-colors shrink-0"
                    title="구글 맵에서 보기">
                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                </a>
            `;
            const dragHandleHtml = '';
            const cardModeClasses = reorderMode
                ? 'flex-wrap activity-card-reorder'
                : 'justify-between cursor-pointer hover:bg-white/[0.08]';
            const cardModeAttributes = reorderMode ? '' : 'data-action="edit-activity"';

            return `
            <div data-activity-wrapper="${activity.id}" data-flip-item="true" ${graphLayoutAttributes(graphRows, activity)}>
                <div
                    class="activity-card relative glass-panel p-4 rounded-3xl flex items-center gap-3 mb-3 transition-colors ${cardModeClasses} ${isActiveActivity ? 'next-item' : ''}"
                    ${cardModeAttributes}
                    data-day-index="${dayIndex}"
                    data-activity-card-id="${activity.id}"
                    data-activity-id="${activity.id}"
                    tabindex="0">
                    ${buildHourlyWeatherHtml(day, activity)}
                    <div class="activity-card-main flex items-center gap-3 flex-1 min-w-0">
                        ${dragHandleHtml}
                        <div class="p-2 rounded-xl accent-icon shrink-0">
                            <i data-lucide="${getRenderableActivityIcon(activity.type)}" class="w-4 h-4"></i>
                        </div>
                        <div class="min-w-0 flex-1">
                            ${showActivityCountry ? `<div class="text-[10px] uppercase tracking-[0.22em] text-white/46 mb-1">${escapeHtml(getLocalizedLabel(activityDestination.country, activityDestination.country))}</div>` : ''}
                            <div class="text-sm font-bold text-white activity-card-time">${escapeHtml(activity.time || '시간 미정')}</div>
                            <div class="text-sm text-white/88 mt-1 activity-card-location">${escapeHtml(activity.location)}</div>
                            ${activity.memo ? `<div class="text-xs text-white/62 mt-1 leading-5 activity-card-memo">${escapeHtml(activity.memo)}</div>` : ''}
                        </div>

                    </div>
                    ${graphControlsHtml(day, dayIndex, activity, graphRows)}
                </div>
                ${betweenStopsHtml}
            </div>
        `;
        }).join('');

        dayElement.innerHTML = `
            <div class="day-header-row" data-day-header="${dayIndex}" data-flip-item="true">
                <div class="day-date"><h3>${escapeHtml(formatMonthDay(headerDate))}</h3><span>${escapeHtml(formatMonthDayWithWeekday(headerDate))}</span></div>
                <button class="day-routes-button" data-day-routes="${dayIndex}" type="button"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M8 5h8a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h8"/></svg><span>하루 이동코스</span></button>
                ${buildDailyWeatherHtml(day)}
                <button type="button" class="day-add-button" data-action="add-activity" data-day-index="${dayIndex}">+ 일정</button>
            </div>

            ${graphLanes > 3 ? '<p class="tree-scroll-hint">↔ 옆으로 밀어 더 보기 · 길게 눌러 일정 이동</p>' : ''}
            <div class="tree-scroll" ${graphLanes > 3 ? 'tabindex="0" role="region" aria-label="나란한 일정, 좌우로 스크롤"' : ''}><div class="activity-tree" data-activity-list="${dayIndex}" style="width:calc(${graphLanes / 3 * 100}% + var(--tree-column-gap) * ${graphLanes / 3 - 1})">
                <svg class="tree-svg" aria-hidden="true"></svg>${activitiesHtml}
            </div></div>
        `;

        ui.itineraryContainer.appendChild(dayElement);
        dayElement.querySelector('.tree-scroll').scrollLeft = horizontalOffsets.get(String(dayIndex)) || 0;
    });

    syncReorderModeUi();
    lucide.createIcons();
    requestAnimationFrame(drawGraphEdges);
    updateCurrentFocusButton();
}

function buildShareUrl() {
    const url = new URL(window.location.href);
    url.searchParams.delete('plan');
    url.pathname = url.pathname.replace(/\/index\.html$/, '/');
    url.searchParams.set('plan', encodePlan(buildSharePayload()));
    return url.toString();
}

function syncUrl() {
    if (!appState.hasStarted) return;
    const url = new URL(window.location.href);
    url.searchParams.delete('plan');
    url.hash = `plan=${encodePlan(buildSharePayload())}`;
    window.history.replaceState({}, '', url.toString());
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
    appState.reorderMode = false;

    ui.startOptionsModal.classList.add('hidden');
    hideSetupOverlay();

    ui.applyPlanBtn.disabled = true;
    await Promise.all(appState.segments.map((segment) => preloadHeroImage(getHeroSource(getDestination(segment.destinationId)).src)));
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
    appState.reorderMode = false;
    syncReorderModeUi();
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

function openDayRoutes(dayIndex, offset=0) {
    document.getElementById('day-route-picker')?.remove();
    const day=appState.itinerary[dayIndex];TripGraph.normalize(day);
    const byId=new Map(day.activities.map(a=>[a.id,a])), paths=[];
    const incoming=new Set(day.links.map(e=>e[1]));
    let visited=0;
    function visit(id,path){if(paths.length>=201)return;const next=day.links.filter(e=>e[0]===id).map(e=>e[1]);if(!next.length){if(visited++>=offset)paths.push([...path,id]);}else next.forEach(n=>visit(n,[...path,id]));}
    day.activities.filter(a=>!incoming.has(a.id)).forEach(a=>visit(a.id,[]));
    const hasMore=paths.length>200;if(hasMore)paths.pop();
    const panel=document.createElement('section');panel.id='day-route-picker';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','하루 이동코스');
    panel.innerHTML=`<header><strong>하루 이동코스 · ${offset?offset+1+'–':''}${offset+paths.length}${hasMore?'+':''}개</strong><button type="button" aria-label="코스 닫기">×</button></header><div class="day-route-options">${paths.map((path,i)=>`<label><input type="radio" name="day-route-choice" value="${i}" ${i===0?'checked':''}><span><b style="color:${getRouteColor(offset+i)}">${String.fromCharCode(65+(offset+i)%26)}.</b> ${path.map(id=>escapeHtml(byId.get(id).location)).join(' → ')}</span></label>`).join('') || '등록된 일정이 없어요.'}</div><div class="route-pages">${offset?'<button data-route-page="prev">이전 코스</button>':''}${hasMore?'<button data-route-page="next">다음 코스</button>':''}</div>${routeModeRadios('day-travel-mode','driving')}<label class="transit-leg-label">대중교통 이동 구간<select id="transit-leg-select"></select></label><iframe title="선택한 하루 이동코스 지도" referrerpolicy="no-referrer-when-downgrade"></iframe><a target="_blank" rel="noreferrer">구글 맵에서 열기 ↗</a>`;
    document.body.appendChild(panel);panel.querySelector('button').onclick=()=>panel.remove();
    panel.querySelectorAll('[data-route-page]').forEach(button=>button.onclick=()=>openDayRoutes(dayIndex,offset+(button.dataset.routePage==='next'?200:-200)));
    let chosenActivities=[];
    const modeSelect=()=>panel.querySelector('[name=day-travel-mode]:checked').value;
    panel.querySelector('.route-modes').onchange=()=>chooseLeg(Number(panel.querySelector('#transit-leg-select').value)||0);
    function chooseLeg(i){
        panel.querySelector('.transit-leg-label').hidden=modeSelect()!=='transit';
        if(modeSelect()!=='transit'){const frame=panel.querySelector('iframe'),link=panel.querySelector('a');frame.src=getDayDirectionsEmbedUrl(chosenActivities,modeSelect())||'about:blank';link.href=getDayDirectionsUrl(chosenActivities,'',modeSelect());link.hidden=chosenActivities.length<2;link.textContent=`이 코스를 구글 맵 ${modeSelect()==='walking'?'도보':'자동차'}로 열기 ↗`;return;}
        const from=chosenActivities[i],to=chosenActivities[i+1];
        const frame=panel.querySelector('iframe'),link=panel.querySelector('a');
        if(!from||!to){frame.src='about:blank';link.hidden=true;return;}
        const origin=from.mapQuery||from.location,dest=to.mapQuery||to.location;
        frame.src=getDirectionsEmbedUrl(origin,dest);link.href=getDirectionsUrl(origin,dest);link.hidden=false;
        link.textContent='이 구간을 구글 맵 대중교통으로 열기 ↗';
    }
    function choose(i){
        chosenActivities=paths[i]?.map(id=>byId.get(id))||[];
        const options=panel.querySelector('.day-route-options'), selected=options.querySelectorAll('label')[i];
        if(selected){let spacer=options.querySelector('.route-scroll-spacer');if(!spacer){spacer=document.createElement('div');spacer.className='route-scroll-spacer';options.appendChild(spacer);}spacer.style.height=Math.max(0,options.clientHeight-selected.offsetHeight)+'px';options.scrollTo({top:selected.offsetTop-options.firstElementChild.offsetTop,behavior:'smooth'});}
        const select=panel.querySelector('#transit-leg-select');
        select.innerHTML=chosenActivities.slice(0,-1).map((a,j)=>`<option value="${j}">${escapeHtml(a.location+' → '+chosenActivities[j+1].location)}</option>`).join('');
        select.disabled=chosenActivities.length<2;chooseLeg(0);
    }
    panel.querySelector('#transit-leg-select').addEventListener('change',event=>chooseLeg(Number(event.target.value)));

    panel.addEventListener('change',e=>{if(e.target.name==='day-route-choice')choose(Number(e.target.value));});choose(0);
}
function removeRedundantBypasses(day) {
    TripGraph.normalize(day);
    day.links=day.links.filter(([from,to],index,edges)=>{
        const seen=new Set(), stack=edges.filter((e,i)=>i!==index&&e[0]===from).map(e=>e[1]);
        while(stack.length){const id=stack.pop();if(id===to)return false;if(seen.has(id))continue;seen.add(id);edges.filter(e=>e[0]===id).forEach(e=>stack.push(e[1]));}
        return true;
    });
}
function ensureStopTimes(day) {
    const periods={오전:'09:00',점심:'12:00',오후:'15:00',저녁:'18:00',밤:'21:00'};
    day.activities.forEach(a=>{if(periods[a.time])a.time=periods[a.time];});
    TripGraph.rows(day).forEach(row=>{
        const known=row.find(a=>/^([01]\d|2[0-3]):[0-5]\d$/.test(a.time||''))?.time;
        row.forEach(a=>{if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(a.time||''))a.time=known||inferStopTime(day,a.id);});
    });
}
function inferStopTime(day,id,placement) {
    const rows=TripGraph.rows(day), item=day.activities.find(a=>a.id===id);
    const rowIndex=rows.findIndex(r=>r.some(a=>a.id===(placement?.target || id)));
    const minute=a=>{const t=({오전:'09:00',점심:'12:00',오후:'15:00',저녁:'18:00',밤:'21:00'})[a?.time]||a?.time;return /^\d{2}:\d{2}$/.test(t||'')?timeToMinutes(t):null;};
    if(placement && ['left','right'].includes(placement.where)){const t=minute(day.activities.find(a=>a.id===placement.target));return minutesToTime(t??720);}
    const boundary=placement?rowIndex+(placement.where==='after'?1:0):rowIndex;
    const previous=rows.slice(0,boundary).reverse().map(row=>row.map(minute).filter(t=>t!==null)).find(times=>times.length);
    const beforeTime=previous?.length?Math.max(...previous):undefined;
    const nextTimes=rows.slice(placement?boundary:rowIndex+1).map(row=>row.map(minute).filter(t=>t!==null)).find(times=>times.length);
    const following=nextTimes?.length?Math.min(...nextTimes):undefined;
    const value=beforeTime!==undefined&&following!==undefined?(beforeTime+following)/2:beforeTime!==undefined?Math.min(1439,beforeTime+60):following!==undefined?Math.max(0,following-60):720;
    return minutesToTime(Math.round(value));
}
let pendingStopPlacement=null;
let placingStop=null;
let placeEstimateVersion=0,placeEstimateTimer=null;
const placeCoordinateCache=new Map();
function distanceKm(a,b){
    const rad=n=>n*Math.PI/180,dl=rad(b[0]-a[0]),dp=rad(b[1]-a[1]);
    const h=Math.sin(dp/2)**2+Math.cos(rad(a[1]))*Math.cos(rad(b[1]))*Math.sin(dl/2)**2;
    return 6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(Math.max(0,1-h)));
}
function approximateTravelMinutes(km){return Math.max(5,Math.ceil((km*1.35/22*60+10)/5)*5);}
async function lookupPlaceCoordinates(query,destinationId){
    const key=destinationId+':'+query;if(placeCoordinateCache.has(key))return placeCoordinateCache.get(key);
    const center=getDestination(destinationId)?.weather;
    const url=new URL('https://photon.komoot.io/api/');url.searchParams.set('q',query);url.searchParams.set('limit','3');
    if(center){url.searchParams.set('lat',center.latitude);url.searchParams.set('lon',center.longitude);}
    const result=await fetch(url,{signal:AbortSignal.timeout(7000)});if(!result.ok)throw Error('lookup');
    const features=(await result.json()).features||[];
    const found=features.find(f=>Array.isArray(f.geometry?.coordinates)&&(!center||distanceKm([center.longitude,center.latitude],f.geometry.coordinates)<150));
    const coords=found?.geometry.coordinates;if(!coords)throw Error('not found');
    placeCoordinateCache.set(key,coords);return coords;
}
async function estimateEnteredPlace(){
    const version=++placeEstimateVersion,location=ui.activityLocation.value.trim();
    if(!location||activityEditorState.timeManual||ui.activityModal.classList.contains('hidden'))return;
    const day=appState.itinerary[activityEditorState.dayIndex],id=activityEditorState.activityId,placement=pendingStopPlacement;
    let parentIds=day.links?.filter(e=>e[1]===(placement?.target||id)).map(e=>e[0])||[];
    if(placement?.where==='after')parentIds=[placement.target];
    const previous=parentIds.map(id=>day.activities.find(a=>a.id===id)).filter(Boolean).sort((a,b)=>timeToMinutes(b.time)-timeToMinutes(a.time))[0] || (!id&&!placement?day.activities.at(-1):null);
    const status=document.getElementById('activity-time-estimate');
    if(!previous){status.textContent='첫 일정은 원하는 시작 시간을 지정해주세요.';return;}
    status.textContent='장소 좌표로 이동시간 추정 중…';
    const destinationId=getEditingActivityDestinationId();
    try{
        const from=await lookupPlaceCoordinates(previous.mapQuery||previous.location,previous.destinationId||destinationId);
        const to=await lookupPlaceCoordinates(location,destinationId);
        if(version!==placeEstimateVersion||activityEditorState.timeManual||ui.activityModal.classList.contains('hidden'))return;
        const km=distanceKm(from,to),travel=approximateTravelMinutes(km),minutes=timeToMinutes(previous.time)+30+travel;
        if(minutes>1439){status.textContent='예상 도착이 다음 날이에요. 시간을 직접 확인해주세요.';return;}
        ui.activityTime.value=minutesToTime(minutes);
        status.textContent=`직선 약 ${km.toFixed(1)}km · 이동 약 ${travel}분 + 이전 장소 체류 30분으로 추정`;
    }catch{if(version===placeEstimateVersion)status.textContent='좌표를 찾지 못했어요. 기존 시간을 유지했어요.';}
}
function syncOptionalTime(){}
function positionStopEditor(){
    if(ui.activityModal.classList.contains('hidden')) return;
    const id=activityEditorState.activityId || pendingStopPlacement?.target;
    const anchor=id?getActivityCard(id):ui.itineraryContainer.querySelector(`[data-day-panel="${activityEditorState.dayIndex}"] [data-day-header]`);
    if(!anchor) return;
    ui.activityModal.style.width=`${Math.min(420,document.documentElement.clientWidth-16)}px`;
    const r=anchor.getBoundingClientRect(), h=ui.activityModal.offsetHeight, w=ui.activityModal.offsetWidth;
    const below=window.innerHeight-r.bottom, above=r.top;
    const top=below>=Math.min(h,320)||below>=above?r.bottom+8:Math.max(8,r.top-h-8);
    ui.activityModal.style.top=`${window.scrollY+top}px`;
    ui.activityModal.style.left=`${Math.max(8,Math.min(r.left,document.documentElement.clientWidth-w-8))}px`;
}
function cancelStopPlacement(){
    placingStop?.ghost.remove(); placingStop=null;
    document.querySelectorAll('.placement-slot,.placement-cancel').forEach(el=>el.remove());
    document.body.classList.remove('is-placing');requestAnimationFrame(drawGraphEdges);
}
function startStopPlacement(dayIndex){
    closeActivityEditor();cancelStopPlacement();
    const ghost=document.createElement('div');ghost.className='placement-ghost';ghost.textContent='새 일정';
    ghost.style.left='calc(50% - 55px)';ghost.style.top='90px';document.body.appendChild(ghost);
    placingStop={dayIndex,ghost};document.body.classList.add('is-placing');
    const cancel=document.createElement('button');cancel.className='placement-cancel';cancel.textContent='놓을 자리 선택 · 취소';cancel.onclick=cancelStopPlacement;document.body.appendChild(cancel);
    const day=appState.itinerary[dayIndex], rows=TripGraph.rows(day);
    function slot(parent,target,where,label){
        const el=document.createElement('button');el.type='button';el.className=`placement-slot slot-${where}`;el.textContent=label;
        el.setAttribute('aria-label',`${target?.location || '첫 일정'} ${label}`);
        el.onclick=event=>{event.stopPropagation();const targetId=target?.id;cancelStopPlacement();pendingStopPlacement={target:targetId,where};openActivityEditor(dayIndex);};
        parent.appendChild(el);
    }
    rows.forEach((row,i)=>row.forEach((a,j)=>{
        const wrap=getActivityCard(a.id).closest('[data-activity-wrapper]');
        slot(wrap,a,'before','앞에 놓기');
        slot(wrap,a,'after','뒤에 놓기');
        slot(wrap,a,'left','← 옆');slot(wrap,a,'right','옆 →');
    }));
    if(!rows.length){cancelStopPlacement();pendingStopPlacement={where:'after'};openActivityEditor(dayIndex);}
    requestAnimationFrame(drawGraphEdges);
}
function insertPlacedStop(day,item,placement){
    const rows=TripGraph.normalize(day), target=day.activities.find(a=>a.id===placement?.target);
    const targetRow=rows.find(r=>r.includes(target));
    if(target && placement.where==='before' && targetRow.length>1){
        const oldRow=target.row, incoming=day.links.filter(e=>e[1]===target.id);
        item.row=oldRow;
        const index=day.activities.indexOf(target);day.activities.splice(index,1,item);
        target.row=TripGraph.freshRow(day,target.id);
        const last=targetRow.filter(a=>a!==target).concat(item).reduce((n,a)=>Math.max(n,day.activities.indexOf(a)),0);
        day.activities.splice(last+1,0,target);
        day.links=day.links.filter(e=>e[1]!==target.id);
        incoming.forEach(([from])=>day.links.push([from,item.id]));day.links.push([item.id,target.id]);
        TripGraph.normalize(day);return;
    }
    if(target && ['left','right'].includes(placement.where)) {
        TripGraph.parallel(day,target.id,item);
        day.activities=day.activities.filter(a=>a!==item);day.activities.splice(day.activities.indexOf(target)+(placement.where==='right'?1:0),0,item);
        return;
    }
    const rowIndex=target?rows.findIndex(r=>r.includes(target)):rows.length;
    const index=placement?.where==='after'?rowIndex+1:rowIndex;
    const before=rows[index-1]||[], after=rows[index]||[];
    item.row=TripGraph.freshRow(day,item.id);
    day.activities.splice(after.length?day.activities.indexOf(after[0]):day.activities.length,0,item);
    day.links=day.links.filter(([a,b])=>!(before.some(n=>n.id===a)&&after.some(n=>n.id===b)));
    before.forEach(a=>day.links.push([a.id,item.id]));after.forEach(a=>day.links.push([item.id,a.id]));TripGraph.normalize(day);
}
document.addEventListener('pointermove',event=>{if(placingStop&&event.pointerType!=='touch'){placingStop.ghost.style.left=`${event.clientX+12}px`;placingStop.ghost.style.top=`${event.clientY+12}px`;}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){cancelStopPlacement();document.getElementById('day-route-picker')?.remove();}});
window.addEventListener('resize',positionStopEditor);
ui.activityTime.addEventListener('input',()=>{activityEditorState.timeManual=true;placeEstimateVersion++;document.getElementById('activity-time-estimate').textContent='직접 지정한 시간';});
ui.activityTime.addEventListener('click',()=>{try{ui.activityTime.showPicker();}catch{}});
function renderActivityParents(day, existing) {
    TripGraph.normalize(day);
    const descendants=new Set(existing?[existing.id]:[]);
    let changed=true;
    while(changed){changed=false;day.links.forEach(([a,b])=>{if(descendants.has(a)&&!descendants.has(b)){descendants.add(b);changed=true;}});}
    const selected=existing?day.links.filter(e=>e[1]===existing.id).map(e=>e[0]):[day.activities.at(-1)?.id];
    document.getElementById('activity-parents').innerHTML=day.activities.filter(a=>!descendants.has(a.id)).map(a=>`<label><input type="checkbox" value="${escapeHtml(a.id)}" ${selected.includes(a.id)?'checked':''}>${escapeHtml(a.location)}</label>`).join('') || '<span class="text-xs text-white/40">이 날짜의 첫 장소</span>';
}
function openActivityEditor(dayIndex, activityId = null) {
    const day = appState.itinerary[dayIndex];
    const existing = activityId ? day.activities.find((activity) => activity.id === activityId) : null;

    placeEstimateVersion++;clearTimeout(placeEstimateTimer);
    activityEditorState.timeManual=false;
    document.getElementById('activity-time-estimate').textContent='장소 입력 후 거리로 시간을 추정해요. 직접 수정한 시간은 유지돼요.';
    activityEditorState.dayIndex = dayIndex;
    activityEditorState.activityId = activityId;
    activityEditorState.icon = existing?.type || '';
    ui.activityModalTitle.textContent = existing ? '일정 편집' : '새 일정 추가';
    ensureStopTimes(day);
    ui.activityTime.value = existing?.time || inferStopTime(day,null,pendingStopPlacement);
    ui.activityModal.querySelectorAll('details').forEach(el=>el.open=el.classList.contains('stop-map'));
    syncOptionalTime();
    renderActivityParents(day, existing);
    ui.activityLocation.value = existing?.location || '';
    ui.activityMemo.value = existing?.memo || '';
    ui.activityDeleteBtn.classList.toggle('hidden', !existing);
    renderActivityIconSelection();
    updateActivityMapPreview();
    closeIconPicker();

    ui.activityModal.classList.remove('hidden');
    positionStopEditor();
    updateBodyScrollLock();
    lucide.createIcons();
}

function closeActivityEditor() {
    placeEstimateVersion++;clearTimeout(placeEstimateTimer);
    if(pendingParallelActivity){const {dayIndex,id}=pendingParallelActivity; pendingParallelActivity=null;TripGraph.remove(appState.itinerary[dayIndex],id);persistItineraryChanges();}
    closeIconPicker();
    ui.activityModal.classList.add('hidden');
    updateBodyScrollLock();
    activityEditorState.dayIndex = null;
    activityEditorState.activityId = null;
    activityEditorState.icon = '';
    pendingStopPlacement=null;
}

function persistItineraryChanges() {
    appState.itinerary.forEach(ensureStopTimes);
    appState.customized = true;
    applyActiveContext(findActiveContext());
    renderItinerary();
    renderStaticSummary();
    syncUrl();
}

function reorderEditedTime(day,id){
    const item=day.activities.find(a=>a.id===id);
    TripGraph.remove(day,id);
    const rows=TripGraph.rows(day);
    const next=rows.find(row=>Math.min(...row.map(a=>timeToMinutes(a.time)))>timeToMinutes(item.time));
    item.row=TripGraph.freshRow(day,item.id);
    day.activities.splice(next?day.activities.indexOf(next[0]):day.activities.length,0,item);
    TripGraph.reconnectRows(day);
}
function showDragSlots(){
    appState.itinerary.forEach((day,dayIndex)=>TripGraph.rows(day).forEach(row=>row.forEach(a=>{
        if(a.id===activityDragState.activityId)return;
        const wrap=getActivityCard(a.id)?.closest('[data-activity-wrapper]');if(!wrap)return;
        for(const where of ['before','after','left','right']){
            const el=document.createElement('div');el.className=`placement-slot drag-placement-slot slot-${where}`;
            el.dataset.dropTarget=a.id;el.dataset.dropWhere=where;el.dataset.dropDay=dayIndex;
            el.textContent=({before:'앞에 놓기',after:'뒤에 놓기',left:'← 옆',right:'옆 →'})[where];wrap.appendChild(el);
        }
    })));
}
async function saveActivityEditor() {
    const editorIdentity=[activityEditorState.dayIndex,activityEditorState.activityId,ui.activityLocation.value].join('|');
    clearTimeout(placeEstimateTimer);
    await estimateEnteredPlace();
    if(ui.activityModal.classList.contains('hidden')||editorIdentity!==[activityEditorState.dayIndex,activityEditorState.activityId,ui.activityLocation.value].join('|'))return;
    const day = appState.itinerary[activityEditorState.dayIndex];
    if (!day) return;

    const location = ui.activityLocation.value.trim();
    const time = ui.activityTime.value.trim() || inferStopTime(day,activityEditorState.activityId,pendingStopPlacement);
    const existingActivity = activityEditorState.activityId
        ? day.activities.find((activity) => activity.id === activityEditorState.activityId)
        : null;

    if (!location) {
        window.alert('장소를 입력해주세요.');
        return;
    }

    const nextActivity = {
        ...existingActivity,
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

    pendingParallelActivity=null;
    if(!existingActivity) {
        day.activities=day.activities.filter(a=>a!==nextActivity);
        insertPlacedStop(day,nextActivity,pendingStopPlacement);
    }
    if(existingActivity && existingActivity.time!==time) reorderEditedTime(day,nextActivity.id);
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

    pendingParallelActivity=null;
    TripGraph.remove(day, activityEditorState.activityId);
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


const activityDragState = {
    pointerId: null,
    pointerType: '',
    active: false,
    immediate: false,
    renderPending: false,
    card: null,
    wrapper: null,
    handle: null,
    ghost: null,
    placeholder: null,
    sourceDayIndex: -1,
    activityId: '',
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    targetDayIndex: -1,
    targetIndex: -1,
    dayPanel: null,
    holdTimer: null,
    lockUntil: 0,
    autoScrollFrame: null,
    flipTimer: null
};

const DRAG_START_THRESHOLD = 6;          // 마우스: 이만큼 움직이면 바로 끌기 시작
const DRAG_HOLD_CANCEL_DISTANCE = 10;    // 길게 누르는 동안 이만큼 움직이면 스크롤/선택으로 보고 취소
const DRAG_HOLD_DELAY_REORDER = 220;     // 순서 편집 모드에서 길게 누르기 시간(ms)
const DRAG_HOLD_DELAY_DEFAULT = 300;     // 일반 모드에서 카드를 길게 누르기 시간(ms)
const DRAG_EDGE_ZONE = 90;
const DRAG_EDGE_SPEED = 14;
const DRAG_FLIP_DURATION = 150;
const DRAG_CLICK_SUPPRESS_MS = 250;      // 놓은 직후 따라오는 click 무시 시간(ms)
let suppressItineraryClickUntil = 0;

function reassignDayTimes(day, orderedActivities) {
    day.activities = orderedActivities;
}

function moveActivityWithinDay(dayIndex, activityId, targetIndex) {
    const day = appState.itinerary[dayIndex];
    if (!day) return false;

    const currentIndex = day.activities.findIndex((activity) => activity.id === activityId);
    if (currentIndex === -1) return false;

    let nextIndex = Math.max(0, Math.min(day.activities.length - 1, targetIndex > currentIndex ? targetIndex - 1 : targetIndex));
    if (nextIndex === currentIndex && TripGraph.rows(day).find(row=>row.some(a=>a.id===activityId)).length === 1) return false;

    const ordered = day.activities.slice();
    const [moved] = ordered.splice(currentIndex, 1);
    ordered.splice(nextIndex, 0, moved);
    moved.row = TripGraph.freshRow(day, moved.id);
    reassignDayTimes(day, ordered);
    TripGraph.normalize(day);
    TripGraph.reconnectRows(day);
    moved.time=inferStopTime(day,moved.id);
    return true;
}

function resolveInsertedTime(activities, insertIndex, fallbackTime) {
    const previous = activities[insertIndex - 1];
    const next = activities[insertIndex];

    if (previous && next) {
        const previousMinutes = timeToMinutes(previous.time);
        const nextMinutes = timeToMinutes(next.time);
        if (nextMinutes - previousMinutes >= 2) {
            return minutesToTime(Math.floor((previousMinutes + nextMinutes) / 2));
        }
        return minutesToTime(previousMinutes);
    }

    if (next) return minutesToTime(Math.max(0, timeToMinutes(next.time) - 60));
    if (previous) return minutesToTime(Math.min(1439, timeToMinutes(previous.time) + 60));
    return fallbackTime;
}

function moveActivityAcrossDays(sourceDayIndex, targetDayIndex, activityId, targetIndex) {
    const sourceDay = appState.itinerary[sourceDayIndex];
    const targetDay = appState.itinerary[targetDayIndex];
    if (!sourceDay || !targetDay) return false;

    const currentIndex = sourceDay.activities.findIndex((activity) => activity.id === activityId);
    if (currentIndex === -1) return false;

    const moved = sourceDay.activities[currentIndex];
    TripGraph.remove(sourceDay, moved.id);
    moved.row = TripGraph.freshRow(targetDay, moved.id);
    const insertIndex = Math.max(0, Math.min(targetDay.activities.length, targetIndex));
    // 배치가 끝난 뒤 앞뒤 시간의 중간값을 계산한다.
    moved.destinationId = targetDay.destinationIds?.[0] || targetDay.destinationId || moved.destinationId;
    targetDay.activities.splice(insertIndex, 0, moved);

    TripGraph.normalize(targetDay);
    TripGraph.reconnectRows(sourceDay);
    TripGraph.reconnectRows(targetDay);
    moved.time=inferStopTime(targetDay,moved.id);
    if (typeof syncDayDestinations === 'function') {
        syncDayDestinations(sourceDay);
        syncDayDestinations(targetDay);
    }
    return true;
}

// ▲/▼ 한 칸 이동. 날짜의 맨 위/맨 아래에서는 이전/다음 날짜로 넘어간다.
function stepActivity(dayIndex, activityId, direction) {
    const day = appState.itinerary[dayIndex];
    if (!day) return false;

    const currentIndex = day.activities.findIndex((activity) => activity.id === activityId);
    if (currentIndex === -1) return false;

    if (direction < 0) {
        if (currentIndex > 0) return moveActivityWithinDay(dayIndex, activityId, currentIndex - 1);
        const previousDay = appState.itinerary[dayIndex - 1];
        if (!previousDay) return false;
        return moveActivityAcrossDays(dayIndex, dayIndex - 1, activityId, previousDay.activities.length);
    }

    if (currentIndex < day.activities.length - 1) return moveActivityWithinDay(dayIndex, activityId, currentIndex + 2);
    if (!appState.itinerary[dayIndex + 1]) return false;
    return moveActivityAcrossDays(dayIndex, dayIndex + 1, activityId, 0);
}

// "날짜 이동": 고른 날짜의 마지막 순서로 옮긴다.
function moveActivityToDay(dayIndex, activityId, targetDayIndex) {
    const targetDay = appState.itinerary[targetDayIndex];
    if (!targetDay || targetDayIndex === dayIndex) return false;
    return moveActivityAcrossDays(dayIndex, targetDayIndex, activityId, targetDay.activities.length);
}

// 끌어다 놓기 결과 반영. targetIndex는 끌던 카드를 뺀 나머지 카드 기준의 삽입 위치다.
function commitActivityDrop(sourceDayIndex, targetDayIndex, targetIndex, activityId) {
    if (targetDayIndex !== sourceDayIndex) {
        return moveActivityAcrossDays(sourceDayIndex, targetDayIndex, activityId, targetIndex);
    }

    const day = appState.itinerary[sourceDayIndex];
    if (!day) return false;
    const currentIndex = day.activities.findIndex((activity) => activity.id === activityId);
    if (currentIndex === -1) return false;

    const insertPosition = targetIndex >= currentIndex ? targetIndex + 1 : targetIndex;
    return moveActivityWithinDay(sourceDayIndex, activityId, insertPosition);
}

function getDayCards(dayIndex) {
    const panel = ui.itineraryContainer.querySelector(`[data-day-panel="${dayIndex}"]`);
    if (!panel) return [];
    return Array.from(panel.querySelectorAll('[data-activity-card-id]'));
}

function getActivityCard(activityId) {
    return ui.itineraryContainer.querySelector(`[data-activity-card-id="${activityId}"]`);
}

function getCardTop(activityId) {
    const card = getActivityCard(activityId);
    return card ? card.getBoundingClientRect().top : null;
}

function vibrateDevice(duration) {
    try {
        navigator.vibrate?.(duration);
    } catch (error) {
        /* 진동을 지원하지 않는 환경은 무시합니다. */
    }
}

function syncReorderModeUi() {
    const enabled = Boolean(appState.reorderMode);
    document.body.classList.toggle('is-reorder-mode', enabled);

    if (ui.reorderModeBtn) {
        ui.reorderModeBtn.classList.toggle('is-active', enabled);
        ui.reorderModeBtn.setAttribute('aria-pressed', String(enabled));
        ui.reorderModeBtn.innerHTML = enabled
            ? '<i data-lucide="check" class="w-4 h-4"></i><span>완료</span>'
            : '<i data-lucide="list-ordered" class="w-4 h-4"></i><span>순서 편집</span>';
    }
    if (ui.reorderModeHint) ui.reorderModeHint.hidden = !enabled;
    if (ui.reorderDoneFab) ui.reorderDoneFab.hidden = !enabled;
}

function setReorderMode(enabled) {
    const next = Boolean(enabled);
    if (appState.reorderMode === next) return;

    if (activityDragState.pointerId !== null) cancelActivityDrag();
    appState.reorderMode = next;

    if (appState.hasStarted) {
        renderItinerary();
    } else {
        syncReorderModeUi();
        lucide.createIcons();
    }
    updateCurrentFocusButton();
}

function focusActivityCard(activityId) {
    const card = getActivityCard(activityId);
    if (card) card.focus({ preventScroll: true });
}

// 옮긴 카드를 찾기 쉽게: anchorTop이 있으면 카드를 화면의 같은 자리에 두고(엄지 아래 유지),
// 화면 밖이면 부드럽게 스크롤한 뒤 잠깐 강조한다.
function revealActivityCard(activityId, { anchorTop = null } = {}) {
    const card = getActivityCard(activityId);
    if (!card) return;

    if (anchorTop !== null) {
        const delta = card.getBoundingClientRect().top - anchorTop;
        if (Math.abs(delta) > 1) window.scrollBy(0, delta);
    }

    const rect = card.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    if (rect.top < 72 || rect.bottom > viewportHeight - 72) {
        card.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }

    card.focus({ preventScroll: true });
    card.classList.add('activity-card-moved');
    window.setTimeout(() => card.classList.remove('activity-card-moved'), 700);
}

function highlightDayPanel(panel) {
    if (activityDragState.dayPanel === panel) return;
    if (activityDragState.dayPanel) activityDragState.dayPanel.classList.remove('day-drop-target');
    activityDragState.dayPanel = panel;
    if (panel) panel.classList.add('day-drop-target');
}

function captureFlipPositions() {
    const positions = new Map();
    ui.itineraryContainer.querySelectorAll('[data-flip-item]').forEach((element) => {
        if (element.hidden) return;
        positions.set(element, element.getBoundingClientRect().top);
    });
    return positions;
}

// FLIP: 자리 표시자가 옮겨진 뒤, 이웃 카드가 이전 위치에서 새 위치로 150ms 동안 미끄러지게 한다.
function playFlip(positionsBefore) {
    if (activityDragState.flipTimer) {
        window.clearTimeout(activityDragState.flipTimer);
        activityDragState.flipTimer = null;
    }

    positionsBefore.forEach((top, element) => {
        element.style.transition = 'none';
        element.style.transform = '';
    });

    const moving = [];
    positionsBefore.forEach((top, element) => {
        if (!element.isConnected) return;
        const delta = top - element.getBoundingClientRect().top;
        if (Math.abs(delta) < 0.5) return;
        element.style.transform = `translateY(${delta}px)`;
        moving.push(element);
    });

    if (!moving.length) return;
    void ui.itineraryContainer.offsetHeight;
    moving.forEach((element) => {
        element.style.transition = `transform ${DRAG_FLIP_DURATION}ms ease`;
        element.style.transform = '';
    });
    activityDragState.flipTimer = window.setTimeout(() => {
        moving.forEach((element) => {
            element.style.transition = '';
        });
        activityDragState.flipTimer = null;
    }, DRAG_FLIP_DURATION + 30);
}

function updateDropTarget(clientX, clientY) {
    if (!activityDragState.active || !activityDragState.placeholder) return;
    if (performance.now() < activityDragState.lockUntil) return;

    const element = document.elementFromPoint(clientX, clientY);
    const slot=element?.closest('.drag-placement-slot');
    document.querySelectorAll('.drag-placement-slot').forEach(el=>el.classList.toggle('is-target',el===slot));
    activityDragState.exactPlacement=slot?{target:slot.dataset.dropTarget,where:slot.dataset.dropWhere}:null;
    if(slot){activityDragState.targetDayIndex=Number(slot.dataset.dropDay);activityDragState.targetIndex=0;activityDragState.dropBlocked=false;return;}
    const panel = element ? element.closest('[data-day-panel]') : null;
    if (!panel || !ui.itineraryContainer.contains(panel)) return;

    const dayIndex = Number(panel.dataset.dayPanel);
    const cards = getDayCards(dayIndex).filter((card) => card !== activityDragState.card);
    const peer = cards.find(card=>{const r=card.getBoundingClientRect();return clientY>r.top+r.height*.22 && clientY<r.bottom-r.height*.22 && clientX>=r.left && clientX<=r.right;});
    document.querySelectorAll('.graph-drop-peer,.graph-drop-full').forEach(el=>el.classList.remove('graph-drop-peer','graph-drop-full'));
    activityDragState.targetPeerId = null;
    activityDragState.dropBlocked = false;
    if(peer) {
        document.querySelectorAll('.graph-insert-marker').forEach(el=>el.remove());
        const row=TripGraph.rows(appState.itinerary[dayIndex]).find(row=>row.some(a=>a.id===peer.dataset.activityId));
        const full=row.some(a=>a.id===activityDragState.activityId);
        peer.classList.add(full?'graph-drop-full':'graph-drop-peer');
        activityDragState.dropBlocked=full;
        activityDragState.targetPeerId=peer.dataset.activityId;
        activityDragState.targetPeerLeft=clientX<peer.getBoundingClientRect().left+peer.getBoundingClientRect().width/2;
        activityDragState.targetDayIndex=dayIndex;
        activityDragState.targetIndex=0;
        return;
    }
    let insertIndex = cards.length;
    for (let index = 0; index < cards.length; index += 1) {
        const rect = cards[index].getBoundingClientRect();
        if (clientY < rect.top || (clientY < rect.bottom && clientX < rect.left + rect.width / 2)) {
            insertIndex = index;
            break;
        }
    }

    if (dayIndex === activityDragState.targetDayIndex && insertIndex === activityDragState.targetIndex) return;

    const list = panel.querySelector('[data-activity-list]');
    if (!list) return;

    // Keep the source placeholder fixed: moving it changes row heights under the pointer.
    // A drop indicator is absolutely positioned, so hit testing stays stable.
    let marker=document.querySelector('.graph-insert-marker');
    if(!marker){marker=document.createElement('div');marker.className='graph-insert-marker';document.body.appendChild(marker);}
    const reference=cards[insertIndex]?.getBoundingClientRect();
    const end=cards.at(-1)?.getBoundingClientRect();
    const bounds=list.getBoundingClientRect();
    marker.style.cssText=`position:fixed;pointer-events:none;z-index:99;left:${bounds.left}px;top:${reference?reference.top-10:(end?.bottom||bounds.top)+10}px;width:${bounds.width}px;border-top:3px solid #a5b4fc;`;

    activityDragState.targetDayIndex = dayIndex;
    activityDragState.targetIndex = insertIndex;
    highlightDayPanel(panel);
    activityDragState.lockUntil = 0;
}

function updateGhostPosition() {
    if (!activityDragState.ghost) return;
    const deltaY = activityDragState.lastY - activityDragState.startY;
    activityDragState.ghost.style.transform = `translate3d(${activityDragState.lastX - activityDragState.startX}px, ${deltaY}px, 0) scale(1.03)`;
}

function stepDragAutoScroll() {
    if (!activityDragState.active) return;

    const y = activityDragState.lastY;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    let delta = 0;

    if (y < DRAG_EDGE_ZONE) {
        delta = -DRAG_EDGE_SPEED * Math.max(0.3, (DRAG_EDGE_ZONE - Math.max(0, y)) / DRAG_EDGE_ZONE);
    } else if (y > viewportHeight - DRAG_EDGE_ZONE) {
        delta = DRAG_EDGE_SPEED * Math.max(0.3, (y - (viewportHeight - DRAG_EDGE_ZONE)) / DRAG_EDGE_ZONE);
    }

    if (delta) {
        const previousScrollY = window.scrollY;
        window.scrollBy(0, delta);
        if (window.scrollY !== previousScrollY) updateDropTarget(activityDragState.lastX, y);
    }

    const scroller = document.elementFromPoint(activityDragState.lastX, y)?.closest('.tree-scroll');
    if (scroller && scroller.scrollWidth > scroller.clientWidth) {
        const bounds = scroller.getBoundingClientRect(), x = activityDragState.lastX;
        const horizontal = x < bounds.left + 36 ? -8 : x > bounds.right - 36 ? 8 : 0;
        if (horizontal) {
            const previous = scroller.scrollLeft;
            scroller.scrollLeft += horizontal;
            if (scroller.scrollLeft !== previous) updateDropTarget(x, y);
        }
    }
    activityDragState.autoScrollFrame = window.requestAnimationFrame(stepDragAutoScroll);
}

function clearHoldTimer() {
    if (activityDragState.holdTimer) {
        window.clearTimeout(activityDragState.holdTimer);
        activityDragState.holdTimer = null;
    }
}

// 카드를 "들어올린다": 고스트(포인터를 따라다니는 복제 카드)와 자리 표시자를 만든다.
function beginActivityDrag() {
    clearHoldTimer();
    const { card, wrapper, pointerId } = activityDragState;
    if (!card || !wrapper || !card.isConnected) {
        resetActivityDragState();
        return;
    }

    activityDragState.active = true;
    showDragSlots();
    card.classList.remove('activity-card-pressing');
    if (activityDragState.handle) activityDragState.handle.classList.add('is-dragging');

    try {
        window.getSelection()?.removeAllRanges();
    } catch (error) {
        /* 선택 영역이 없으면 무시합니다. */
    }
    try {
        ui.itineraryContainer.setPointerCapture(pointerId);
    } catch (error) {
        /* 일부 환경에서는 포인터 캡처를 지원하지 않습니다. */
    }

    // 눌림 축소(transition)나 강조 애니메이션이 섞이지 않은 원래 크기로 잰다 (곧바로 숨겨지므로 되돌려도 티가 나지 않는다)
    ['transform', 'animation', 'transition'].forEach((property) => card.style.setProperty(property, 'none', 'important'));
    const cardRect = card.getBoundingClientRect();
    const sourcePosition = getDayCards(activityDragState.sourceDayIndex).indexOf(card);
    const nextWrapper = wrapper.nextElementSibling;
    const slotHeight = nextWrapper ? nextWrapper.getBoundingClientRect().top - cardRect.top : cardRect.height;
    ['transform', 'animation', 'transition'].forEach((property) => card.style.removeProperty(property));

    const ghost = card.cloneNode(true);
    ghost.classList.remove('relative', 'next-item', 'activity-card-pressing', 'cursor-pointer', 'hover:bg-white/[0.08]');
    ghost.classList.add('activity-card-ghost');
    ['data-activity-card-id', 'data-activity-id', 'data-action', 'data-day-index', 'tabindex'].forEach((name) => ghost.removeAttribute(name));
    ghost.querySelectorAll('[data-hourly-weather]').forEach((element) => element.remove());
    ghost.style.left = `${cardRect.left}px`;
    ghost.style.top = `${cardRect.top}px`;
    ghost.style.width = `${cardRect.width}px`;
    ghost.style.height = `${cardRect.height}px`;
    document.body.appendChild(ghost);

    const placeholder = document.createElement('div');
    placeholder.className = 'activity-drop-placeholder';
    placeholder.style.height = `${cardRect.height}px`;
    placeholder.style.gridRow = wrapper.style.gridRow;
    placeholder.style.gridColumn = wrapper.style.gridColumn;
    wrapper.parentNode.insertBefore(placeholder, wrapper);
    wrapper.style.opacity = '0.18';

    activityDragState.ghost = ghost;
    activityDragState.placeholder = placeholder;
    activityDragState.targetDayIndex = activityDragState.sourceDayIndex;
    activityDragState.targetIndex = sourcePosition;
    activityDragState.lockUntil = 0;
    highlightDayPanel(wrapper.closest('[data-day-panel]'));
    document.body.classList.add('is-reordering-activities');
    updateGhostPosition();
    vibrateDevice(10);
    activityDragState.autoScrollFrame = window.requestAnimationFrame(stepDragAutoScroll);
}

function resetActivityDragState() {
    document.querySelectorAll('.drag-placement-slot').forEach(el=>el.remove());
    activityDragState.exactPlacement=null;
    document.querySelectorAll('.graph-insert-marker').forEach(el=>el.remove());
    document.querySelectorAll('.graph-drop-peer,.graph-drop-full').forEach(el=>el.classList.remove('graph-drop-peer','graph-drop-full'));
    activityDragState.targetPeerId=null;
    activityDragState.dropBlocked=false;
    const wasActive = activityDragState.active;
    clearHoldTimer();

    if (activityDragState.autoScrollFrame) {
        window.cancelAnimationFrame(activityDragState.autoScrollFrame);
        activityDragState.autoScrollFrame = null;
    }
    if (activityDragState.flipTimer) {
        window.clearTimeout(activityDragState.flipTimer);
        activityDragState.flipTimer = null;
    }
    if (activityDragState.pointerId !== null) {
        try {
            if (ui.itineraryContainer.hasPointerCapture(activityDragState.pointerId)) {
                ui.itineraryContainer.releasePointerCapture(activityDragState.pointerId);
            }
        } catch (error) {
            /* 이미 해제된 경우는 무시합니다. */
        }
    }

    if (activityDragState.ghost) activityDragState.ghost.remove();
    if (activityDragState.placeholder) activityDragState.placeholder.remove();
    if (activityDragState.wrapper) {activityDragState.wrapper.hidden = false;activityDragState.wrapper.style.opacity='';}
    if (activityDragState.card) activityDragState.card.classList.remove('activity-card-pressing');
    if (activityDragState.handle) activityDragState.handle.classList.remove('is-dragging');
    highlightDayPanel(null);
    if (wasActive) {
        ui.itineraryContainer.querySelectorAll('[data-flip-item]').forEach((element) => {
            element.style.transform = '';
            element.style.transition = '';
        });
    }
    document.body.classList.remove('is-reordering-activities');

    activityDragState.pointerId = null;
    activityDragState.pointerType = '';
    activityDragState.active = false;
    activityDragState.immediate = false;
    activityDragState.card = null;
    activityDragState.wrapper = null;
    activityDragState.handle = null;
    activityDragState.ghost = null;
    activityDragState.placeholder = null;
    activityDragState.sourceDayIndex = -1;
    activityDragState.activityId = '';
    activityDragState.targetDayIndex = -1;
    activityDragState.targetIndex = -1;
    activityDragState.lockUntil = 0;

    if (activityDragState.renderPending) {
        activityDragState.renderPending = false;
        renderItinerary();
    }
}

function cancelActivityDrag() {
    if (activityDragState.pointerId === null) return;
    if (activityDragState.active) suppressItineraryClickUntil = Date.now() + DRAG_CLICK_SUPPRESS_MS;
    resetActivityDragState();
}

function handleActivityPointerDown(event) {
    if(placingStop) return;
    if (event.button !== undefined && event.button !== 0) return;
    if (activityDragState.pointerId !== null) return;
    if (event.target.closest('[data-reorder-control], a, summary, select, input, textarea, button:not([data-drag-handle])')) return;

    const card = event.target.closest('[data-activity-card-id]');
    if (!card) return;
    const wrapper = card.closest('[data-activity-wrapper]');
    if (!wrapper) return;

    const handle = event.target.closest('[data-drag-handle="true"]');
    const isTouchLike = event.pointerType === 'touch' || event.pointerType === 'pen';

    activityDragState.pointerId = event.pointerId;
    activityDragState.pointerType = event.pointerType;
    activityDragState.card = card;
    activityDragState.wrapper = wrapper;
    activityDragState.handle = handle;
    activityDragState.sourceDayIndex = Number(card.dataset.dayIndex);
    activityDragState.activityId = card.dataset.activityId;
    activityDragState.startX = event.clientX;
    activityDragState.startY = event.clientY;
    activityDragState.lastX = event.clientX;
    activityDragState.lastY = event.clientY;
    // 마우스: 카드 어디를 잡든 움직이자마자 끌기 시작(움직이지 않고 놓으면 평소처럼 클릭=편집).
    // 터치: 손잡이에서는 바로, 그 밖에서는 길게 눌러 들어올린다(그 전까지는 평소처럼 스크롤된다).
    activityDragState.immediate = !isTouchLike || Boolean(handle);

    clearHoldTimer();
    if (isTouchLike) {
        activityDragState.holdTimer = window.setTimeout(() => {
            activityDragState.holdTimer = null;
            if (activityDragState.pointerId === null || activityDragState.active) return;
            beginActivityDrag();
        }, appState.reorderMode ? DRAG_HOLD_DELAY_REORDER : DRAG_HOLD_DELAY_DEFAULT);
    }

    card.classList.add('activity-card-pressing');
    if (handle) event.preventDefault();
}

function handleActivityPointerMove(event) {
    if (activityDragState.pointerId === null || event.pointerId !== activityDragState.pointerId) return;

    activityDragState.lastX = event.clientX;
    activityDragState.lastY = event.clientY;

    if (!activityDragState.active) {
        const distance = Math.hypot(event.clientX - activityDragState.startX, event.clientY - activityDragState.startY);
        if (activityDragState.immediate) {
            if (distance < DRAG_START_THRESHOLD) return;
            beginActivityDrag();
            if (!activityDragState.active) return;
        } else {
            if (distance > DRAG_HOLD_CANCEL_DISTANCE) cancelActivityDrag();
            return;
        }
    }

    if (event.cancelable) event.preventDefault();
    updateGhostPosition();
    updateDropTarget(event.clientX, event.clientY);
}

function handleActivityPointerUp(event) {
    if (activityDragState.pointerId === null || event.pointerId !== activityDragState.pointerId) return;

    const wasActive = activityDragState.active;
    if(wasActive && event.type !== 'pointercancel') {activityDragState.lockUntil=0;updateDropTarget(event.clientX,event.clientY);}
    const isCancelled = event.type === 'pointercancel';
    const { sourceDayIndex, targetDayIndex, targetIndex, activityId, targetPeerId, targetPeerLeft, dropBlocked, exactPlacement } = activityDragState;

    resetActivityDragState();

    if (!wasActive) return;
    suppressItineraryClickUntil = Date.now() + DRAG_CLICK_SUPPRESS_MS;
    if (isCancelled || dropBlocked || targetDayIndex === -1 || targetIndex === -1) return;

    let moved;
    if(exactPlacement){
        const source=appState.itinerary[sourceDayIndex],day=appState.itinerary[targetDayIndex];
        const item=source.activities.find(a=>a.id===activityId);
        TripGraph.remove(source,activityId);
        item.time=inferStopTime(day,item.id,exactPlacement);
        insertPlacedStop(day,item,exactPlacement);
        syncDayDestinations(source);syncDayDestinations(day);moved=true;
    } else if(targetPeerId) {
        const day=appState.itinerary[targetDayIndex], source=appState.itinerary[sourceDayIndex];
        const item=source.activities.find(a=>a.id===activityId);
        if(source===day) moved=TripGraph.join(day,activityId,targetPeerId);
        else if(TripGraph.rows(day).some(r=>r.some(a=>a.id===targetPeerId))) {
            TripGraph.remove(source,activityId); moved=TripGraph.parallel(day,targetPeerId,item);
            item.destinationId=day.activities.find(a=>a.id===targetPeerId).destinationId; syncDayDestinations(source);
        }
        if(moved && targetPeerLeft) {day.activities=day.activities.filter(a=>a!==item);day.activities.splice(day.activities.findIndex(a=>a.id===targetPeerId),0,item);}
        if(moved)item.time=inferStopTime(day,item.id,{target:targetPeerId,where:'right'});
        syncDayDestinations(day);
    } else moved = commitActivityDrop(sourceDayIndex, targetDayIndex, targetIndex, activityId);
    if (!moved) return;
    if(!exactPlacement){TripGraph.reconnectRows(appState.itinerary[sourceDayIndex]);
    if(targetDayIndex!==sourceDayIndex)TripGraph.reconnectRows(appState.itinerary[targetDayIndex]);}

    vibrateDevice(10);
    persistItineraryChanges();
    revealActivityCard(activityId);
}

// 들어올린 뒤에는 터치 스크롤을 막아야 브라우저가 끌기를 가로채(pointercancel) 않는다.
function handleActivityTouchMove(event) {
    if (activityDragState.active && event.cancelable) event.preventDefault();
}

function handleActivityContextMenu(event) {
    if (activityDragState.pointerId !== null) {
        event.preventDefault();
        return;
    }
    if (appState.reorderMode && event.target.closest('[data-activity-card-id]')) event.preventDefault();
}

function handleReorderStep(button) {
    const dayIndex = Number(button.dataset.dayIndex);
    const activityId = button.dataset.activityId;
    const direction = button.dataset.reorderStep === 'up' ? -1 : 1;
    const anchorTop = getCardTop(activityId);

    if (!stepActivity(dayIndex, activityId, direction)) return;
    persistItineraryChanges();
    revealActivityCard(activityId, { anchorTop });
}

function handleReorderDaySelectChange(event) {
    const select = event.target.closest('[data-reorder-day-select]');
    if (!select) return;

    const dayIndex = Number(select.dataset.dayIndex);
    const targetDayIndex = Number(select.value);
    const activityId = select.dataset.activityId;
    if (!Number.isInteger(targetDayIndex) || targetDayIndex === dayIndex) return;

    if (!moveActivityToDay(dayIndex, activityId, targetDayIndex)) {
        select.value = '';
        return;
    }
    persistItineraryChanges();
    revealActivityCard(activityId);
}

function handleActivityReorderKeydown(event) {
    if (!event.altKey) return;
    if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;

    const card = event.target.closest && event.target.closest('[data-activity-card-id]');
    if (!card) return;

    const dayIndex = Number(card.dataset.dayIndex);
    const day = appState.itinerary[dayIndex];
    if (!day) return;

    const currentIndex = day.activities.findIndex((activity) => activity.id === card.dataset.activityId);
    if (currentIndex === -1) return;

    const nextIndex = event.key === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1;
    if (nextIndex < 0 || nextIndex >= day.activities.length) return;

    event.preventDefault();

    const ordered = day.activities.slice();
    const [moved] = ordered.splice(currentIndex, 1);
    ordered.splice(nextIndex, 0, moved);
    moved.row = moved.id;
    reassignDayTimes(day, ordered);
    TripGraph.normalize(day);
    reconnectMovedStop(day, moved.id);
    persistItineraryChanges();
    focusActivityCard(moved.id);
}

/* ---------- 가는 길 미리보기 (구글 지도 길찾기 iframe) ---------- */
const ROUTE_HOVER_DELAY = 180;
const routePreview = { open: false, anchor: null, hoverAnchor: null, hoverTimer: null, lastFocus: null };
// PC(마우스가 있고 넓은 화면)에서는 연결선 옆에 떠 있는 카드, 그 밖에는 아래에서 올라오는 시트
const routePreviewPopoverQuery = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)');

function isRoutePreviewPopover() {
    return routePreviewPopoverQuery.matches;
}

function clearRouteHoverTimer() {
    if (routePreview.hoverTimer) {
        window.clearTimeout(routePreview.hoverTimer);
        routePreview.hoverTimer = null;
    }
}

function positionRoutePreview() {
    const anchor = routePreview.anchor;
    const card = ui.routePreviewCard;
    if (!anchor || !anchor.isConnected || !card) {
        closeRoutePreview();
        return;
    }
    const rect = anchor.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight;
    const margin = 12;
    const gap = 14;
    const cardWidth = Math.min(400, viewportWidth - margin * 2);
    card.style.width = `${cardWidth}px`;
    const cardHeight = card.offsetHeight || 360;
    let left;
    let top;
    if (rect.right + gap + cardWidth <= viewportWidth - margin) {
        left = rect.right + gap;
        top = rect.top + rect.height / 2 - cardHeight / 2;
    } else if (rect.left - gap - cardWidth >= margin) {
        left = rect.left - gap - cardWidth;
        top = rect.top + rect.height / 2 - cardHeight / 2;
    } else {
        left = rect.left + rect.width / 2 - cardWidth / 2;
        top = rect.bottom + gap + cardHeight <= viewportHeight - margin ? rect.bottom + gap : rect.top - gap - cardHeight;
    }
    left = Math.min(Math.max(margin, left), Math.max(margin, viewportWidth - margin - cardWidth));
    top = Math.min(Math.max(margin, top), Math.max(margin, viewportHeight - margin - cardHeight));
    card.style.left = `${Math.round(left + window.scrollX)}px`;
    card.style.top = `${Math.round(top + window.scrollY)}px`;
}

function openRoutePreview(anchor) {
    if (!anchor || !ui.routePreview) return;
    const embedUrl = anchor.dataset.routeEmbed;
    if (!embedUrl) {
        window.open(anchor.getAttribute('href') || '#', '_blank', 'noopener');
        return;
    }
    clearRouteHoverTimer();
    const sameAnchor = routePreview.open && routePreview.anchor === anchor;
    const popover = isRoutePreviewPopover();
    if (!routePreview.open) routePreview.lastFocus = document.activeElement;
    routePreview.anchor = anchor;
    routePreview.open = true;

    ui.routePreviewTitle.textContent = anchor.dataset.routeTitle || '가는 길';
    let selector=document.getElementById('segment-route-mode');
    if(!selector){selector=document.createElement('div');selector.id='segment-route-mode';ui.routePreviewTitle.after(selector);}
    selector.innerHTML=routeModeRadios('segment-travel-mode','transit');
    selector.onchange=()=>{const mode=selector.querySelector('input:checked').value;const url=new URL(anchor.href);const from=url.searchParams.get('origin'),to=url.searchParams.get('destination');ui.routePreviewFrame.src=getDirectionsEmbedUrl(from,to,[],mode);ui.routePreviewOpen.href=getDirectionsUrl(from,to,mode);};


    ui.routePreviewOpen.href = anchor.getAttribute('href') || '#';
    if (!sameAnchor) {
        ui.routePreviewStatus.hidden = false;
        ui.routePreviewFrame.src = embedUrl;
    }

    ui.routePreview.classList.toggle('route-preview--pop', popover);
    ui.routePreview.classList.toggle('route-preview--sheet', !popover);
    document.body.classList.toggle('route-preview-sheet-open', !popover);
    ui.routePreview.hidden = false;
    ui.itineraryContainer.querySelectorAll('[data-route-preview].is-previewing').forEach((element) => element.classList.remove('is-previewing'));
    anchor.classList.add('is-previewing');

    if (popover) {
        positionRoutePreview();
    } else {
        ui.routePreviewCard.style.left = '';
        ui.routePreviewCard.style.top = '';
        ui.routePreviewCard.style.width = '';
        if (!sameAnchor) ui.routePreviewClose.focus({ preventScroll: true });
    }
}

function closeRoutePreview() {
    clearRouteHoverTimer();
    routePreview.hoverAnchor = null;
    if (!routePreview.open || !ui.routePreview) return;
    routePreview.open = false;
    ui.routePreview.hidden = true;
    ui.routePreview.classList.remove('route-preview--pop', 'route-preview--sheet');
    document.body.classList.remove('route-preview-sheet-open');
    ui.routePreviewFrame.src = 'about:blank';
    ui.routePreviewStatus.hidden = false;
    if (routePreview.anchor?.isConnected) routePreview.anchor.classList.remove('is-previewing');
    const lastFocus = routePreview.lastFocus;
    routePreview.anchor = null;
    routePreview.lastFocus = null;
    if (lastFocus && lastFocus !== document.body && document.contains(lastFocus) && ui.routePreviewCard.contains(document.activeElement)) {
        try {
            lastFocus.focus({ preventScroll: true });
        } catch (error) {
            /* 포커스를 되돌릴 수 없으면 그대로 둡니다. */
        }
    }
}

// PC: 연결선(또는 하루 이동코스)에 마우스를 잠깐 올려두면 미리보기가 뜬다. 닫기는 버튼·Esc·바깥 클릭.
function handleRoutePointerOver(event) {
    if (event.pointerType !== 'mouse' || !isRoutePreviewPopover()) return;
    if (activityDragState.pointerId !== null) return;
    const anchor = event.target.closest('[data-route-preview]');
    if (!anchor || anchor === routePreview.hoverAnchor) return;
    clearRouteHoverTimer();
    routePreview.hoverAnchor = anchor;
    routePreview.hoverTimer = window.setTimeout(() => {
        routePreview.hoverTimer = null;
        if (anchor.isConnected && anchor.matches(':hover')) openRoutePreview(anchor);
    }, ROUTE_HOVER_DELAY);
}

function handleRoutePointerOut(event) {
    if (event.pointerType !== 'mouse') return;
    const anchor = event.target.closest('[data-route-preview]');
    if (!anchor) return;
    if (event.relatedTarget && anchor.contains(event.relatedTarget)) return;
    routePreview.hoverAnchor = null;
    clearRouteHoverTimer();
}

function handleRoutePreviewOutsidePointer(event) {
    if (!routePreview.open || !isRoutePreviewPopover()) return;
    if (ui.routePreviewCard.contains(event.target) || event.target.closest('[data-route-preview]')) return;
    closeRoutePreview();
}

function syncRoutePreviewLayout() {
    if (!routePreview.open) return;
    if (routePreview.anchor?.isConnected) openRoutePreview(routePreview.anchor);
    else closeRoutePreview();
}

function handleItineraryClick(event) {
    if(placingStop) return;
    const dayRouteButton=event.target.closest('[data-day-routes]');
    if(dayRouteButton){openDayRoutes(Number(dayRouteButton.dataset.dayRoutes));return;}
    // 끌어다 놓은 직후 따라오는 click은 편집창을 열지 않는다
    if (Date.now() < suppressItineraryClickUntil) {
        event.preventDefault();
        return;
    }

    const stepButton = event.target.closest('[data-reorder-step]');
    if (stepButton) {
        if (!stepButton.disabled) handleReorderStep(stepButton);
        return;
    }

    const routeTrigger = event.target.closest('[data-route-preview]');
    if (routeTrigger) {
        // 클릭/탭은 새 창 대신 미리보기를 연다. 사이트로는 미리보기의 "자세히" 버튼으로 간다.
        event.preventDefault();
        openRoutePreview(routeTrigger);
        return;
    }

    if (handleGraphClick(event)) return;

    if (event.target.closest('[data-skip-edit]')) {
        return;
    }

    const editButton = event.target.closest('[data-action="edit-activity"]');
    if (editButton) {
        if (appState.reorderMode) return;
        openActivityEditor(Number(editButton.dataset.dayIndex), editButton.dataset.activityId);
        return;
    }

    const addButton = event.target.closest('[data-action="add-activity"]');
    if (addButton) {
        startStopPlacement(Number(addButton.dataset.dayIndex));
        return;
    }

}

function showPlanImportNotice(message) {
    document.getElementById('plan-import-message').textContent = message;
    document.getElementById('plan-import-notice').classList.remove('hidden');
}

function bootstrapFromUrl() {
    const url = new URL(window.location.href);
    const hashParams = new URLSearchParams(url.hash.replace(/^#/, ''));
    const readablePlan = hashParams.has('trip');
    const hashPlanParam = hashParams.get('plan');
    const planParam = hashPlanParam || url.searchParams.get('plan');

    if (readablePlan || planParam) {
        try {
            let repaired = false;
            const payload = readablePlan
                ? AITripLink.parse(url.hash, { destinationIds: Object.keys(DESTINATIONS), iconIds: ACTIVITY_ICON_OPTIONS.map(option => option.value) })
                : decodePlan(planParam, { onRepair: () => { repaired = true; } });
            if (!payload || typeof payload !== 'object' || Array.isArray(payload)) throw new Error('Invalid plan payload');
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

            if (repaired) showPlanImportNotice('AI가 만든 링크에서 빠진 메모 끝 기호를 복구해 일정을 열었어요. 장소와 메모를 확인해 주세요.');
            const searchPlanParam = url.searchParams.get('plan');
            if (searchPlanParam && !hashPlanParam) {
                const cleanUrl = new URL(window.location.href);
                cleanUrl.searchParams.delete('plan');
                cleanUrl.hash = `plan=${planParam}`;
                window.history.replaceState({}, '', cleanUrl.toString());
            }
            return;
        } catch (error) {
            console.warn('Failed to decode shared plan:', error);
            showPlanImportNotice('일정 링크의 데이터가 깨져서 열지 못했어요. AI에 ‘#trip=1 형식으로 날짜·장소·연결 항목을 확인해 완성 링크를 다시 만들어 줘’라고 요청해 주세요. 원본 링크는 주소창에 남아 있어요.');
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

document.getElementById('plan-import-close').addEventListener('click', () => {
    document.getElementById('plan-import-notice').classList.add('hidden');
});

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
    preloadHeroImage(getHeroSource(destination).src);
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
let aiPromptFlowVersion = 0;
let aiPromptCopied = false;
let pendingAIService = null;
const aiHandoffDialog = document.getElementById('ai-handoff-dialog');

function getAIPasteInstruction(platform, userAgent, maxTouchPoints = 0) {
    const mobile = /Android|iPhone|iPad|iPod/i.test(userAgent) || (/Mac/i.test(platform) && maxTouchPoints > 1);
    if (mobile) return 'AI 서비스의 입력창을 꾹 누른 뒤 ‘붙여넣기’를 선택해 주세요. 붙여넣은 내용을 전송하면 됩니다.';
    const shortcut = /Mac/i.test(platform) ? 'Command (⌘) + V' : 'Ctrl + V';
    return `AI 서비스의 입력창을 클릭한 뒤 ${shortcut}를 누르거나, 우클릭하고 ‘붙여넣기’를 선택해 주세요. 붙여넣은 내용을 전송하면 됩니다.`;
}

aiHandoffDialog.querySelector('[data-handoff-cancel]').addEventListener('click', () => aiHandoffDialog.close());
aiHandoffDialog.querySelector('[data-handoff-confirm]').addEventListener('click', () => {
    if (!aiPromptCopied || !pendingAIService) return;
    window.location.assign(pendingAIService.href);
});
aiHandoffDialog.addEventListener('close', () => {
    pendingAIService?.focus();
    pendingAIService = null;
});

function showAIRequestStep() {
    if (aiHandoffDialog.open) aiHandoffDialog.close();
    aiPromptFlowVersion++;
    aiPromptCopied = false;
    ui.aiPromptTitle.textContent = '어떤 여행을 계획하고 있나요?';
    ui.aiRequestStep.classList.remove('hidden');
    ui.aiServiceStep.classList.add('hidden');
    ui.aiPromptCopyBtn.disabled = !ui.aiTripNotes.value.trim();
    ui.aiCopyStatus.textContent = '다 쓰고 나서 아래 ‘프롬프트 복사하기’를 눌러 주세요. 도시·날짜와 적어 주신 내용을 함께 복사합니다.';
}

function closeAIPrompt() {
    aiPromptFlowVersion++;
    ui.aiPromptModal.classList.add('hidden');
    ui.optAiBtn.focus();
}

ui.optAiBtn.addEventListener('click', () => {
    if (!pendingSetupSegmentsData?.length) return;
    showAIRequestStep();
    ui.startOptionsModal.classList.add('hidden');
    ui.aiPromptModal.classList.remove('hidden');
});
ui.aiPromptCloseBtn.addEventListener('click', () => {
    ui.startOptionsModal.classList.remove('hidden');
    closeAIPrompt();
});
ui.aiRequestBackBtn.addEventListener('click', () => {
    showAIRequestStep();
    ui.aiTripNotes.focus();
});
ui.aiTripNotes.addEventListener('input', () => {
    ui.aiCopyStatus.textContent = '다 쓰고 나서 아래 ‘프롬프트 복사하기’를 눌러 주세요. 도시·날짜와 적어 주신 내용을 함께 복사합니다.';
    aiPromptCopied = false;
    aiPromptFlowVersion++;
    ui.aiPromptCopyBtn.disabled = !ui.aiTripNotes.value.trim();
});
ui.aiPromptCopyBtn.addEventListener('click', async () => {
    if (!pendingSetupSegmentsData?.length || !ui.aiTripNotes.value.trim()) return;
    const version = ++aiPromptFlowVersion;
    const seg = pendingSetupSegmentsData[0];
    const prompt = generateAIPromptText(seg.destinationId, seg.startDate, seg.endDate, ui.aiTripNotes.value);
    ui.aiPromptCopyBtn.disabled = true;
    ui.aiCopyStatus.textContent = '프롬프트를 복사하고 있어요…';
    try {
        await navigator.clipboard.writeText(prompt);
        if (version !== aiPromptFlowVersion) return;
        aiPromptCopied = true;
        ui.aiPromptTitle.textContent = '복사했어요. AI에 붙여넣어 주세요';
        ui.aiRequestStep.classList.add('hidden');
        ui.aiServiceStep.classList.remove('hidden');
        ui.aiServiceStep.querySelector('[data-ai-service]').focus();
    } catch {
        if (version === aiPromptFlowVersion) {
            ui.aiCopyStatus.textContent = '복사하지 못했어요. 브라우저의 클립보드 권한을 확인한 뒤 다시 눌러 주세요.';
        }
    } finally {
        if (version === aiPromptFlowVersion) ui.aiPromptCopyBtn.disabled = !ui.aiTripNotes.value.trim();
    }
});
ui.aiServiceStep.addEventListener('click', event => {
    const link = event.target.closest('[data-ai-service]');
    if (!link) return;
    event.preventDefault();
    if (!aiPromptCopied) {
        showAIRequestStep();
        ui.aiPromptCopyBtn.focus();
        return;
    }
    pendingAIService = link;
    document.getElementById('ai-handoff-title').textContent = `${link.dataset.aiService}에 붙여넣어 주세요`;
    document.getElementById('ai-handoff-message').textContent = getAIPasteInstruction(navigator.userAgentData?.platform || navigator.platform, navigator.userAgent, navigator.maxTouchPoints) + ' 답변이 완성되면 응답 전체를 복사하고, 답변 아래 ‘여행 일정 열기’를 눌러 주세요.';
    aiHandoffDialog.showModal();
});

const aiResultDialog = document.getElementById('ai-result-dialog');
const aiResultText = document.getElementById('ai-result-text');
const aiResultStatus = document.getElementById('ai-result-status');
const aiResultOpen = document.getElementById('ai-result-open');
const aiResultClipboard = document.getElementById('ai-result-clipboard');
function openAIResponse(text) {
    try {
        const { fragment } = AITripLink.readResponse(text, {
            destinationIds: Object.keys(DESTINATIONS),
            iconIds: ACTIVITY_ICON_OPTIONS.map(option => option.value)
        });
        const url = new URL(window.location.href);
        url.search = '';
        url.hash = fragment;
        // Validate the complete answer before replacing any current itinerary.
        window.location.assign(url.toString());
    } catch (error) {
        aiResultStatus.textContent = error.message;
        aiResultText.focus();
    }
}
aiResultText.addEventListener('input', () => {
    aiResultOpen.disabled = !aiResultText.value.trim();
    aiResultStatus.textContent = '';
});
aiResultOpen.addEventListener('click', () => openAIResponse(aiResultText.value));
aiResultClipboard.addEventListener('click', async () => {
    aiResultClipboard.disabled = true;
    aiResultStatus.textContent = '';
    try {
        const text = await navigator.clipboard.readText();
        aiResultText.value = text;
        aiResultOpen.disabled = !text.trim();
        openAIResponse(text);
    } catch {
        aiResultStatus.textContent = '자동으로 붙여넣지 못했어요. 아래 입력창에 AI의 응답을 직접 붙여넣어 주세요.';
        aiResultText.focus();
    } finally { aiResultClipboard.disabled = false; }
});
document.getElementById('ai-result-cancel').addEventListener('click', () => aiResultDialog.close());
aiResultDialog.addEventListener('close', () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('import');
    window.history.replaceState({}, '', url.toString());
});

ui.sharePlanBtn.addEventListener('click', sharePlan);
ui.resetPlanBtn.addEventListener('click', resetToSetup);
ui.prependDayBtn?.addEventListener('click', prependDay);
ui.appendDayBtn?.addEventListener('click', appendDay);
ui.removeFirstDayBtn?.addEventListener('click', removeFirstDay);
ui.removeLastDayBtn?.addEventListener('click', removeLastDay);

ui.activityCloseBtn.addEventListener('click', closeActivityEditor);
ui.activityCancelBtn.addEventListener('click', closeActivityEditor);
ui.activitySaveBtn.addEventListener('click', saveActivityEditor);
ui.activityDeleteBtn.addEventListener('click', deleteCurrentActivity);


ui.activityLocation.addEventListener('input', ()=>{updateActivityMapPreview();const icon=inferPlaceIcon(ui.activityLocation.value);activityEditorState.icon=icon;renderActivityIconSelection();placeEstimateVersion++;clearTimeout(placeEstimateTimer);placeEstimateTimer=setTimeout(estimateEnteredPlace,1200);});
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
// 화면을 돌리면(세로↔가로) 히어로 사진을 방향에 맞는 것으로 바꾼다
portraitViewportQuery.addEventListener('change', () => {
    const destination = getDestination(appState.destinationId);
    if (destination) applyTheme(destination);
});
ui.itineraryContainer.addEventListener('pointerdown', event=>{if(event.pointerType!=='touch')handleActivityPointerDown(event);});
ui.itineraryContainer.addEventListener('keydown', handleActivityReorderKeydown);
ui.itineraryContainer.addEventListener('change', handleReorderDaySelectChange);
// Keep a native touch stream alive when the browser cancels Pointer Events for scrolling.
// Before the hold threshold normal swipes scroll; after it, touchmove owns the gesture.
let activityTouchId=null;
function activityTouchEvent(event,touch,type){return {type,pointerId:touch.identifier+100000,pointerType:'touch',button:0,target:event.target,clientX:touch.clientX,clientY:touch.clientY,cancelable:event.cancelable,preventDefault:()=>event.preventDefault()};}
ui.itineraryContainer.addEventListener('touchstart',event=>{
    if(event.touches.length!==1){cancelActivityDrag();activityTouchId=null;return;}
    const touch=event.changedTouches[0];
    handleActivityPointerDown(activityTouchEvent(event,touch,'pointerdown'));
    if(activityDragState.pointerId===touch.identifier+100000)activityTouchId=touch.identifier;
},{passive:true});
window.addEventListener('touchmove',event=>{
    if(activityTouchId===null)return;
    if(event.touches.length!==1){cancelActivityDrag();activityTouchId=null;return;}
    const touch=Array.from(event.changedTouches).find(t=>t.identifier===activityTouchId);if(!touch)return;
    if(activityDragState.active && event.cancelable)event.preventDefault();
    handleActivityPointerMove(activityTouchEvent(event,touch,'pointermove'));
},{passive:false,capture:true});
function finishActivityTouch(event){
    if(activityTouchId===null)return;
    const touch=Array.from(event.changedTouches).find(t=>t.identifier===activityTouchId);if(!touch)return;
    const active=activityDragState.active;
    handleActivityPointerUp(activityTouchEvent(event,touch,event.type==='touchcancel'?'pointercancel':'pointerup'));
    if(active && event.cancelable)event.preventDefault();activityTouchId=null;
}
window.addEventListener('touchend',finishActivityTouch,{passive:false});
window.addEventListener('touchcancel',finishActivityTouch,{passive:false});
ui.itineraryContainer.addEventListener('contextmenu', handleActivityContextMenu);


ui.routePreview?.addEventListener('click', (event) => {
    if (event.target.closest('[data-route-close]')) closeRoutePreview();
});
ui.routePreviewFrame?.addEventListener('load', () => {
    if (ui.routePreviewFrame.getAttribute('src') !== 'about:blank') ui.routePreviewStatus.hidden = true;
});
document.addEventListener('pointerdown', handleRoutePreviewOutsidePointer, true);
window.addEventListener('resize', syncRoutePreviewLayout);
routePreviewPopoverQuery.addEventListener('change', syncRoutePreviewLayout);
window.addEventListener('pointermove', handleActivityPointerMove, { passive: false });
window.addEventListener('pointerup', handleActivityPointerUp);
window.addEventListener('pointercancel', handleActivityPointerUp);
window.addEventListener('blur', cancelActivityDrag);
ui.reorderModeBtn?.addEventListener('click', () => setReorderMode(!appState.reorderMode));
ui.reorderDoneFab?.addEventListener('click', () => setReorderMode(false));
ui.currentFocusBtn.addEventListener('click', scrollToCurrentFocus);

window.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (aiResultDialog.open) { event.preventDefault(); aiResultDialog.close(); return; }
    if (aiHandoffDialog.open) { event.preventDefault(); aiHandoffDialog.close(); return; }

    if (activityDragState.active) {
        cancelActivityDrag();
        return;
    }

    if (!ui.aiPromptModal.classList.contains('hidden')) {
        ui.startOptionsModal.classList.remove('hidden');
        closeAIPrompt();
        return;
    }

    if (routePreview.open) {
        closeRoutePreview();
        return;
    }

    if (!ui.iconPickerModal.classList.contains('hidden')) {
        closeIconPicker();
        return;
    }

    if (!ui.activityModal.classList.contains('hidden')) {
        closeActivityEditor();
        return;
    }

    if (appState.reorderMode) setReorderMode(false);
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

// Navigating to another shared link on an open planner only changes the fragment.
// Re-run startup so the displayed itinerary matches that link. replaceState saves do not fire this.
window.addEventListener('hashchange', () => {
    const params = new URLSearchParams(window.location.hash.slice(1));
    if (params.has('trip') || params.has('plan')) window.location.reload();
});

window.setInterval(updateClocks, 1000);
renderIconPicker();
bootstrapFromUrl();
refreshPlan();
if (new URL(window.location.href).searchParams.get('import') === 'ai') aiResultDialog.showModal();
