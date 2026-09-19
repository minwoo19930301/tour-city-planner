// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_SEA_B = {
    cebu: {
        id: 'cebu',
        city: 'Cebu',
        country: 'Philippines',
        summary: '막탄 호핑과 오슬롭 고래상어, 모알보알 정어리떼와 카와산 폭포에 세부 시티 탑스힐 야경까지 얹은 4박 5일 세부 휴양 템플릿입니다.',
        footer: 'Cebu is turquoise water, mango shakes, and a boat waiting at every pier.',
        heroImage: 'assets/heroes/cebu.jpg',
        heroPosition: 'center center',
        accent: '#2DD4BF',
        accentRgb: '45, 212, 191',
        ink: '#0C2A3A',
        inkRgb: '12, 42, 58',
        overlayTop: 'rgba(12, 42, 58, 0.34)',
        overlayBottom: 'rgba(8, 24, 36, 0.84)',
        timeZone: 'Asia/Manila',
        weather: { latitude: 10.3157, longitude: 123.8854 },
        currency: { code: 'PHP', symbol: '₱', locale: 'en-PH' },
        startOffsetDays: 10,
        phraseLabel: 'English · Tagalog',
        phrases: [
            { text: 'Maayong buntag', pron: '마아용 분탁', meaning: '좋은 아침이에요 (세부아노)' },
            { text: 'Salamat kaayo', pron: '살라맛 카아요', meaning: '정말 감사합니다 (세부아노)' },
            { text: 'Tagpila ni?', pron: '탁필라 니', meaning: '이거 얼마예요? (세부아노)' },
            { text: 'Lami kaayo!', pron: '라미 카아요', meaning: '정말 맛있어요! (세부아노)' },
            { text: 'Where is the pier?', pron: '웨어 이즈 더 피어', meaning: '선착장이 어디예요?' },
            { text: 'Ingat!', pron: '잉갓', meaning: '조심히 가세요 / 몸 조심해요' }
        ],
        itineraryTemplate: [
            {
                title: '막탄 섬',
                activities: [
                    { time: '09:30', title: '막탄 호핑투어 · 힐루퉁안 스노클링', type: 'ship', location: 'Hilutungan Island' },
                    { time: '13:30', title: '란타우 수상 레스토랑 점심', type: 'utensils-crossed', location: 'Lantaw Floating Native Restaurant' },
                    { time: '18:30', title: '막탄 뉴타운 저녁 산책', type: 'moon-star', location: 'Mactan Newtown' }
                ]
            },
            {
                title: '세부 시티',
                activities: [
                    { time: '10:00', title: '마젤란 십자가 · 산토니뇨 성당', type: 'landmark', location: 'Magellan\'s Cross' },
                    { time: '13:30', title: '아얄라 센터 점심 & 쇼핑', type: 'shopping-cart', location: 'Ayala Center Cebu' },
                    { time: '18:30', title: '탑스힐 야경', type: 'binoculars', location: 'Tops Lookout Cebu' }
                ]
            },
            {
                title: '오슬롭 & 남부',
                activities: [
                    { time: '06:30', title: '오슬롭 고래상어 스노클링', type: 'camera', location: 'Oslob Whale Shark Watching' },
                    { time: '11:00', title: '투말록 폭포', type: 'trees', location: 'Tumalog Falls' },
                    { time: '15:00', title: '수밀론 섬 샌드바', type: 'sun', location: 'Sumilon Island' }
                ]
            },
            {
                title: '모알보알 & 카와산',
                activities: [
                    { time: '09:00', title: '카와산 폭포 캐녀닝', type: 'sparkles', location: 'Kawasan Falls' },
                    { time: '14:00', title: '파낙사마 비치 정어리떼 스노클링', type: 'binoculars', location: 'Panagsama Beach' },
                    { time: '18:00', title: '화이트 비치 선셋', type: 'sun', location: 'White Beach Moalboal' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '10:00', title: 'SM 시사이드 시티 쇼핑', type: 'shopping-bag', location: 'SM Seaside City Cebu' },
                    { time: '13:00', title: '타보안 시장 건망고 · 건어물 선물', type: 'gift', location: 'Taboan Public Market' },
                    { time: '16:30', title: '막탄 공항 이동', type: 'plane', location: 'Mactan-Cebu International Airport' }
                ]
            }
        ]
    },
    bohol: {
        id: 'bohol',
        city: 'Bohol',
        country: 'Philippines',
        summary: '초콜릿힐과 안경원숭이, 로복강 크루즈, 팡라오 알로나비치와 발리카삭 스노클링을 3박 4일로 엮은 보홀 템플릿입니다.',
        footer: 'Bohol moves slowly: hills, rivers, and reefs all on one small island.',
        heroImage: 'assets/heroes/bohol.jpg',
        heroPosition: 'center center',
        accent: '#84CC16',
        accentRgb: '132, 204, 22',
        ink: '#1F2E1A',
        inkRgb: '31, 46, 26',
        overlayTop: 'rgba(31, 46, 26, 0.32)',
        overlayBottom: 'rgba(16, 24, 14, 0.84)',
        timeZone: 'Asia/Manila',
        weather: { latitude: 9.6475, longitude: 123.8556 },
        currency: { code: 'PHP', symbol: '₱', locale: 'en-PH' },
        startOffsetDays: 12,
        phraseLabel: 'English · Tagalog',
        phrases: [
            { text: 'Magandang umaga', pron: '마간당 우마가', meaning: '좋은 아침입니다' },
            { text: 'Pwede po bang magtanong?', pron: '뿌웨데 포 방 막타농', meaning: '뭐 좀 여쭤봐도 될까요?' },
            { text: 'Nasaan ang beach?', pron: '나사안 앙 비치', meaning: '해변이 어디예요?' },
            { text: 'Masarap!', pron: '마사랍', meaning: '맛있어요!' },
            { text: 'Can I rent a scooter?', pron: '캔 아이 렌트 어 스쿠터', meaning: '스쿠터 빌릴 수 있나요?' },
            { text: 'Paalam', pron: '파알람', meaning: '안녕히 계세요' }
        ],
        itineraryTemplate: [
            {
                title: '팡라오 섬',
                activities: [
                    { time: '11:00', title: '히나그다난 동굴', type: 'camera', location: 'Hinagdanan Cave' },
                    { time: '14:00', title: '두마루안 비치', type: 'sun', location: 'Dumaluan Beach' },
                    { time: '18:30', title: '알로나 비치 선셋 & 씨푸드 저녁', type: 'utensils-crossed', location: 'Alona Beach' }
                ]
            },
            {
                title: '초콜릿힐 & 로복',
                activities: [
                    { time: '09:00', title: '안경원숭이 보호구역', type: 'trees', location: 'Philippine Tarsier Sanctuary' },
                    { time: '11:30', title: '초콜릿힐 전망대', type: 'binoculars', location: 'Chocolate Hills Complex' },
                    { time: '14:00', title: '로복강 크루즈 점심', type: 'ship', location: 'Loboc River Cruise' }
                ]
            },
            {
                title: '발리카삭 & 바다',
                activities: [
                    { time: '06:30', title: '발리카삭 스노클링 · 돌고래 워칭', type: 'binoculars', location: 'Balicasag Island' },
                    { time: '11:00', title: '버진 아일랜드 샌드바', type: 'sun', location: 'Virgin Island Panglao' },
                    { time: '18:30', title: '아바탄강 반딧불 투어', type: 'moon-star', location: 'Abatan River' }
                ]
            },
            {
                title: '바클라욘 & 이동',
                activities: [
                    { time: '09:30', title: '바클라욘 교회', type: 'landmark', location: 'Baclayon Church' },
                    { time: '12:30', title: '보홀 비 팜 점심', type: 'utensils-crossed', location: 'Bohol Bee Farm' },
                    { time: '16:00', title: '팡라오 공항 이동', type: 'plane', location: 'Bohol-Panglao International Airport' }
                ]
            }
        ]
    },
    boracay: {
        id: 'boracay',
        city: 'Boracay',
        country: 'Philippines',
        summary: '화이트비치 스테이션 1~3과 디몰, 푸카셸비치, 선셋 세일링, 아리엘스 포인트까지 섬 하나를 꽉 채우는 3박 4일 보라카이 템플릿입니다.',
        footer: 'Boracay is powder-white sand, paraw sails, and a sunset that never gets old.',
        heroImage: 'assets/heroes/boracay.jpg',
        heroPosition: 'center center',
        accent: '#F472B6',
        accentRgb: '244, 114, 182',
        ink: '#3B1A2E',
        inkRgb: '59, 26, 46',
        overlayTop: 'rgba(59, 26, 46, 0.30)',
        overlayBottom: 'rgba(30, 14, 26, 0.82)',
        timeZone: 'Asia/Manila',
        weather: { latitude: 11.9674, longitude: 121.9248 },
        currency: { code: 'PHP', symbol: '₱', locale: 'en-PH' },
        startOffsetDays: 9,
        phraseLabel: 'English · Tagalog',
        phrases: [
            { text: 'Isa pa po', pron: '이사 파 포', meaning: '하나 더 주세요' },
            { text: 'Sobrang ganda!', pron: '소브랑 간다', meaning: '정말 아름다워요!' },
            { text: 'How much for the boat?', pron: '하우 머치 포 더 보트', meaning: '보트 요금이 얼마예요?' },
            { text: 'Bawal ba dito?', pron: '바왈 바 디토', meaning: '여기서는 금지인가요?' },
            { text: 'Sandali lang', pron: '산달리 랑', meaning: '잠시만요' },
            { text: 'Walang anuman', pron: '왈랑 아누만', meaning: '천만에요' }
        ],
        itineraryTemplate: [
            {
                title: '화이트비치 스테이션 1~2',
                activities: [
                    { time: '11:00', title: '화이트비치 산책', type: 'sun', location: 'White Beach Boracay' },
                    { time: '13:30', title: '디몰 점심 & 쇼핑', type: 'shopping-bag', location: 'D\'Mall de Boracay' },
                    { time: '18:00', title: '윌리스 록 선셋', type: 'camera', location: 'Willy\'s Rock' }
                ]
            },
            {
                title: '호핑 & 푸카셸',
                activities: [
                    { time: '09:30', title: '아일랜드 호핑 · 크리스탈 코브', type: 'binoculars', location: 'Crystal Cove Island' },
                    { time: '13:00', title: '푸카셸 비치', type: 'sun', location: 'Puka Shell Beach' },
                    { time: '17:30', title: '파라우 선셋 세일링', type: 'ship', location: 'Station 1 Boracay' }
                ]
            },
            {
                title: '아리엘스 포인트 & 스테이션 3',
                activities: [
                    { time: '10:00', title: '아리엘스 포인트 절벽 다이빙', type: 'ship', location: 'Ariel\'s Point' },
                    { time: '15:00', title: '불라복 비치 카이트서핑 구경', type: 'sparkles', location: 'Bulabog Beach' },
                    { time: '19:00', title: '디탈리파파 씨푸드 저녁', type: 'utensils-crossed', location: 'D\'Talipapa Market' }
                ]
            },
            {
                title: '마운트 루호 & 이동',
                activities: [
                    { time: '08:30', title: '마운트 루호 전망대', type: 'binoculars', location: 'Mt. Luho View Deck' },
                    { time: '11:30', title: '조나스 프루트 셰이크', type: 'coffee', location: 'Jonah\'s Fruit Shake' },
                    { time: '14:00', title: '칼리보 공항 이동', type: 'plane', location: 'Kalibo International Airport' }
                ]
            }
        ]
    },
    clark: {
        id: 'clark',
        city: 'Clark (Angeles)',
        country: 'Philippines',
        summary: '미모사 골프 라운딩과 피나투보 화산 트레킹, 수빅 오션어드벤처, SM클락 쇼핑을 묶은 3박 4일 클락 템플릿입니다.',
        footer: 'Clark is volcano ash, wide fairways, and the easiest airport in the Philippines.',
        heroImage: 'assets/heroes/clark.jpg',
        heroPosition: 'center center',
        accent: '#9A3412',
        accentRgb: '154, 52, 18',
        ink: '#2B1D14',
        inkRgb: '43, 29, 20',
        overlayTop: 'rgba(43, 29, 20, 0.36)',
        overlayBottom: 'rgba(24, 16, 12, 0.86)',
        timeZone: 'Asia/Manila',
        weather: { latitude: 15.1450, longitude: 120.5887 },
        currency: { code: 'PHP', symbol: '₱', locale: 'en-PH' },
        startOffsetDays: 8,
        phraseLabel: 'English · Tagalog',
        phrases: [
            { text: 'Magandang hapon', pron: '마간당 하폰', meaning: '좋은 오후예요 (낮 인사)' },
            { text: 'Saan ang terminal?', pron: '사안 앙 터미널', meaning: '터미널이 어디예요?' },
            { text: 'Pakibigyan ako ng tubig', pron: '파키비기얀 아코 낭 투빅', meaning: '물 좀 주세요' },
            { text: 'Opo', pron: '오포', meaning: '네 (공손한 대답)' },
            { text: 'Tee time at nine, please', pron: '티 타임 앳 나인 플리즈', meaning: '9시 티타임으로 부탁해요' },
            { text: 'Ang init!', pron: '앙 이닛', meaning: '너무 더워요!' }
        ],
        itineraryTemplate: [
            {
                title: '클락 프리포트',
                activities: [
                    { time: '08:00', title: '미모사 플러스 골프 라운딩', type: 'trees', location: 'Mimosa Plus Golf Course' },
                    { time: '13:30', title: 'SM 시티 클락 점심 & 쇼핑', type: 'shopping-cart', location: 'SM City Clark' },
                    { time: '18:00', title: '클락 퍼레이드 그라운드 선셋 산책', type: 'sun', location: 'Clark Parade Grounds' }
                ]
            },
            {
                title: '피나투보 화산',
                activities: [
                    { time: '06:00', title: '산타 훌리아나 4x4 지프 출발', type: 'map', location: 'Santa Juliana, Capas, Tarlac' },
                    { time: '09:30', title: '피나투보 분화구 호수 트레킹', type: 'binoculars', location: 'Mount Pinatubo Crater Lake' },
                    { time: '16:30', title: '푸닝 온천 화산재 스파', type: 'sparkles', location: 'Puning Hot Spring & Restaurant' }
                ]
            },
            {
                title: '수빅 베이',
                activities: [
                    { time: '09:30', title: '오션 어드벤처 돌고래 쇼', type: 'ticket', location: 'Ocean Adventure Subic Bay' },
                    { time: '13:30', title: '주빅 사파리', type: 'camera', location: 'Zoobic Safari' },
                    { time: '18:30', title: '수빅 보드워크 씨푸드 저녁', type: 'utensils-crossed', location: 'Subic Bay Boardwalk' }
                ]
            },
            {
                title: '앙헬레스 & 이동',
                activities: [
                    { time: '09:30', title: '홀리 로사리 성당', type: 'landmark', location: 'Holy Rosary Parish Church' },
                    { time: '12:30', title: '알링 루싱 시식(Sisig) 점심', type: 'store', location: 'Aling Lucing\'s Sisig' },
                    { time: '15:30', title: '클락 공항 이동', type: 'plane', location: 'Clark International Airport' }
                ]
            }
        ]
    },
    'kota-kinabalu': {
        id: 'kota-kinabalu',
        city: 'Kota Kinabalu',
        country: 'Malaysia',
        summary: '탄중아루 선셋과 사피·마누칸 섬 호핑, 마리마리 문화마을, 키나발루 공원과 필리피노 야시장까지 4박 5일 코타키나발루 템플릿입니다.',
        footer: 'Kota Kinabalu ends every day the same way, with the sun sinking into the South China Sea.',
        heroImage: 'assets/heroes/kota-kinabalu.jpg',
        heroPosition: 'center center',
        accent: '#FF7043',
        accentRgb: '255, 112, 67',
        ink: '#2A1C33',
        inkRgb: '42, 28, 51',
        overlayTop: 'rgba(42, 28, 51, 0.32)',
        overlayBottom: 'rgba(22, 14, 30, 0.84)',
        timeZone: 'Asia/Kuala_Lumpur',
        weather: { latitude: 5.9804, longitude: 116.0735 },
        currency: { code: 'MYR', symbol: 'RM', locale: 'ms-MY' },
        startOffsetDays: 11,
        phraseLabel: 'Bahasa Melayu',
        phrases: [
            { text: 'Selamat petang', pron: '슬라맛 프탕', meaning: '좋은 오후예요 / 좋은 저녁이에요' },
            { text: 'Boleh kurang sikit?', pron: '볼레 쿠랑 시킷', meaning: '조금만 깎아 주실래요?' },
            { text: 'Sedap!', pron: '스답', meaning: '맛있어요!' },
            { text: 'Di mana jeti?', pron: '디 마나 제티', meaning: '선착장이 어디예요?' },
            { text: 'Saya nak ini', pron: '사야 낙 이니', meaning: '이걸로 할게요' },
            { text: 'Jumpa lagi', pron: '줌파 라기', meaning: '또 만나요' }
        ],
        itineraryTemplate: [
            {
                title: '시내 & 탄중아루',
                activities: [
                    { time: '10:00', title: '시그널힐 전망대', type: 'binoculars', location: 'Signal Hill Observatory Tower' },
                    { time: '13:00', title: '가야 스트리트 점심', type: 'utensils-crossed', location: 'Gaya Street' },
                    { time: '18:00', title: '탄중아루 선셋', type: 'sun', location: 'Tanjung Aru Beach' }
                ]
            },
            {
                title: '툰쿠 압둘 라만 해양공원',
                activities: [
                    { time: '09:30', title: '사피섬 스노클링', type: 'binoculars', location: 'Sapi Island' },
                    { time: '13:30', title: '마누칸섬 점심 & 해변', type: 'sun', location: 'Manukan Island' },
                    { time: '19:00', title: '필리피노 야시장 씨푸드', type: 'utensils-crossed', location: 'Filipino Market' }
                ]
            },
            {
                title: '마리마리 & 반딧불',
                activities: [
                    { time: '09:30', title: '마리마리 문화마을', type: 'palette', location: 'Mari Mari Cultural Village' },
                    { time: '14:00', title: '수리아 사바 쇼핑', type: 'shopping-bag', location: 'Suria Sabah Shopping Mall' },
                    { time: '17:30', title: '클리아스강 코주부원숭이 · 반딧불 크루즈', type: 'ship', location: 'Klias River' }
                ]
            },
            {
                title: '키나발루 공원',
                activities: [
                    { time: '08:30', title: '키나발루 공원 트레일', type: 'trees', location: 'Kinabalu Park' },
                    { time: '12:30', title: '데사 목장 우유 · 아이스크림', type: 'coffee', location: 'Desa Dairy Farm' },
                    { time: '16:00', title: '포링 온천', type: 'sparkles', location: 'Poring Hot Spring' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '09:30', title: '수상 모스크 (시티 모스크)', type: 'landmark', location: 'Kota Kinabalu City Mosque' },
                    { time: '12:30', title: '이마고 몰 점심 & 쇼핑', type: 'shopping-cart', location: 'Imago Shopping Mall' },
                    { time: '16:00', title: '코타키나발루 공항 이동', type: 'plane', location: 'Kota Kinabalu International Airport' }
                ]
            }
        ]
    },
    kaohsiung: {
        id: 'kaohsiung',
        city: 'Kaohsiung',
        country: 'Taiwan',
        summary: '연지담 용호탑, 보얼예술특구와 치진섬, 불광산과 류허 야시장, 아이허 야경을 3박 4일로 묶은 가오슝 템플릿입니다.',
        footer: 'Kaohsiung is a harbor city that turns on its lights slowly and generously.',
        heroImage: 'assets/heroes/kaohsiung.jpg',
        heroPosition: 'center center',
        accent: '#F43F76',
        accentRgb: '244, 63, 118',
        ink: '#1B1F3A',
        inkRgb: '27, 31, 58',
        overlayTop: 'rgba(27, 31, 58, 0.36)',
        overlayBottom: 'rgba(14, 16, 32, 0.86)',
        timeZone: 'Asia/Taipei',
        weather: { latitude: 22.6273, longitude: 120.3014 },
        currency: { code: 'TWD', symbol: 'NT$', locale: 'zh-TW' },
        startOffsetDays: 7,
        phraseLabel: '中文',
        phrases: [
            { text: '不好意思', pron: '부하오이쓰', meaning: '실례합니다 / 미안해요 (대만식)' },
            { text: '一杯珍珠奶茶', pron: '이 베이 전주 나이차', meaning: '버블티 한 잔 주세요' },
            { text: '捷運站在哪裡？', pron: '제윈잔 짜이 나리', meaning: 'MRT 역이 어디예요?' },
            { text: '內用還是外帶？', pron: '네이용 하이스 와이다이', meaning: '매장에서 드세요, 포장이에요? (점원이 묻는 말)' },
            { text: '可以刷卡嗎？', pron: '커이 솨카 마', meaning: '카드 결제 되나요?' },
            { text: '超好吃！', pron: '차오 하오츠', meaning: '엄청 맛있어요!' }
        ],
        itineraryTemplate: [
            {
                title: '쭤잉 연지담',
                activities: [
                    { time: '10:00', title: '연지담 용호탑', type: 'landmark', location: 'Dragon and Tiger Pagodas' },
                    { time: '13:30', title: '한신 아레나 점심 & 쇼핑', type: 'shopping-cart', location: 'Hanshin Arena Shopping Plaza' },
                    { time: '18:30', title: '루이펑 야시장', type: 'sparkles', location: 'Ruifeng Night Market' }
                ]
            },
            {
                title: '옌청 & 치진',
                activities: [
                    { time: '10:00', title: '보얼 예술특구', type: 'palette', location: 'Pier-2 Art Center' },
                    { time: '13:00', title: '치진섬 해산물 거리 점심', type: 'utensils-crossed', location: 'Cijin Island' },
                    { time: '18:30', title: '아이허 야경 유람선', type: 'moon-star', location: 'Love River' }
                ]
            },
            {
                title: '불광산 & 류허',
                activities: [
                    { time: '09:30', title: '불광산 불타기념관', type: 'landmark', location: 'Fo Guang Shan Buddha Museum' },
                    { time: '15:00', title: '메이리다오역 빛의 돔', type: 'train-front', location: 'Formosa Boulevard Station' },
                    { time: '18:30', title: '류허 야시장 저녁', type: 'utensils-crossed', location: 'Liuhe Night Market' }
                ]
            },
            {
                title: '항구 & 이동',
                activities: [
                    { time: '09:30', title: '가오슝 유행음악센터', type: 'music', location: 'Kaohsiung Music Center' },
                    { time: '12:30', title: '다강교 & 하마싱 점심', type: 'bridge', location: 'Great Harbor Bridge' },
                    { time: '15:30', title: '가오슝 공항 이동', type: 'plane', location: 'Kaohsiung International Airport' }
                ]
            }
        ]
    },
    taichung: {
        id: 'taichung',
        city: 'Taichung',
        country: 'Taiwan',
        summary: '궁위안옌과와 펑자 야시장, 르웨탄 유람선, 무지개마을과 가오메이 습지 선셋을 3박 4일로 엮은 타이중 템플릿입니다.',
        footer: 'Taichung pairs bubble tea and a mountain lake within one easy day.',
        heroImage: 'assets/heroes/taichung.jpg',
        heroPosition: 'center center',
        accent: '#8B5CF6',
        accentRgb: '139, 92, 246',
        ink: '#1E2A3A',
        inkRgb: '30, 42, 58',
        overlayTop: 'rgba(30, 42, 58, 0.34)',
        overlayBottom: 'rgba(16, 22, 32, 0.84)',
        timeZone: 'Asia/Taipei',
        weather: { latitude: 24.1477, longitude: 120.6736 },
        currency: { code: 'TWD', symbol: 'NT$', locale: 'zh-TW' },
        startOffsetDays: 8,
        phraseLabel: '中文',
        phrases: [
            { text: '我要一份雞排', pron: '워 야오 이 펀 지파이', meaning: '지파이(대만식 닭튀김) 하나 주세요' },
            { text: '去逢甲夜市', pron: '취 펑자 예스', meaning: '펑자 야시장으로 가주세요' },
            { text: '半糖少冰', pron: '반탕 사오빙', meaning: '설탕 반, 얼음 적게요 (음료 주문)' },
            { text: '哪裡可以買悠遊卡？', pron: '나리 커이 마이 여우여우카', meaning: '이지카드는 어디서 사나요?' },
            { text: '幾點日落？', pron: '지 뎬 르뤄', meaning: '해는 몇 시에 지나요?' },
            { text: '太好了', pron: '타이 하오 러', meaning: '아주 좋아요 / 잘됐어요' }
        ],
        itineraryTemplate: [
            {
                title: '타이중 시내',
                activities: [
                    { time: '10:00', title: '국립 대만 미술관', type: 'palette', location: 'National Taiwan Museum of Fine Arts' },
                    { time: '13:00', title: '궁위안옌과 아이스크림', type: 'coffee', location: 'Miyahara' },
                    { time: '18:30', title: '펑자 야시장', type: 'utensils-crossed', location: 'Fengjia Night Market' }
                ]
            },
            {
                title: '르웨탄 (일월담)',
                activities: [
                    { time: '09:00', title: '르웨탄 유람선', type: 'ship', location: 'Sun Moon Lake' },
                    { time: '12:30', title: '이다샤오 거리 점심', type: 'store', location: 'Ita Thao Pier' },
                    { time: '15:30', title: '르웨탄 로프웨이', type: 'binoculars', location: 'Sun Moon Lake Ropeway' }
                ]
            },
            {
                title: '무지개마을 & 가오메이',
                activities: [
                    { time: '10:00', title: '무지개마을', type: 'camera', location: 'Rainbow Village Taichung' },
                    { time: '13:00', title: '선지신촌 점심 & 소품 구경', type: 'gift', location: 'Shen Ji New Village' },
                    { time: '17:30', title: '가오메이 습지 선셋', type: 'sun', location: 'Gaomei Wetlands' }
                ]
            },
            {
                title: '가극원 & 이동',
                activities: [
                    { time: '09:30', title: '타이중 국가가극원', type: 'building', location: 'National Taichung Theater' },
                    { time: '12:00', title: '타이중 제2시장 점심', type: 'store', location: 'Taichung Second Market' },
                    { time: '15:30', title: '타이중 공항 이동', type: 'plane', location: 'Taichung International Airport' }
                ]
            }
        ]
    },
    brunei: {
        id: 'brunei',
        city: 'Bandar Seri Begawan',
        country: 'Brunei',
        summary: '술탄 오마르 알리 사이푸딘 모스크와 캄퐁아예르 수상마을, 제임 아스르 모스크, 울루템부롱 정글까지 3박 4일 브루나이 템플릿입니다.',
        footer: 'Brunei is gold domes, quiet water villages, and rainforest an hour away.',
        heroImage: 'assets/heroes/brunei.jpg',
        heroPosition: 'center center',
        accent: '#C8EA08',
        accentRgb: '200, 234, 8',
        ink: '#14322A',
        inkRgb: '20, 50, 42',
        overlayTop: 'rgba(20, 50, 42, 0.36)',
        overlayBottom: 'rgba(10, 28, 24, 0.86)',
        timeZone: 'Asia/Brunei',
        weather: { latitude: 4.9031, longitude: 114.9398 },
        currency: { code: 'BND', symbol: 'B$', locale: 'ms-BN' },
        startOffsetDays: 13,
        phraseLabel: 'Bahasa Melayu',
        phrases: [
            { text: 'Assalamualaikum', pron: '앗살라무알라이쿰', meaning: '안녕하세요 (평안을 빕니다)' },
            { text: 'Maaf, saya tak faham', pron: '마아프 사야 탁 파함', meaning: '죄송해요, 이해 못 했어요' },
            { text: 'Boleh saya ambil gambar?', pron: '볼레 사야 암빌 감바르', meaning: '사진 찍어도 될까요?' },
            { text: 'Bila masjid dibuka?', pron: '빌라 마스짓 디부카', meaning: '모스크는 언제 열어요?' },
            { text: 'Satu teh tarik', pron: '사투 테 타릭', meaning: '테 타릭(밀크티) 한 잔 주세요' },
            { text: 'Sama-sama', pron: '사마사마', meaning: '천만에요' }
        ],
        itineraryTemplate: [
            {
                title: '시내 모스크 & 박물관',
                activities: [
                    { time: '10:00', title: '술탄 오마르 알리 사이푸딘 모스크', type: 'landmark', location: 'Sultan Omar Ali Saifuddien Mosque' },
                    { time: '13:00', title: '로열 레갈리아 박물관', type: 'building', location: 'Royal Regalia Museum' },
                    { time: '18:30', title: '가동 야시장 저녁', type: 'utensils-crossed', location: 'Gadong Night Market' }
                ]
            },
            {
                title: '캄퐁아예르 & 브루나이강',
                activities: [
                    { time: '09:30', title: '캄퐁아예르 수상마을 보트', type: 'ship', location: 'Kampong Ayer' },
                    { time: '13:30', title: '제임 아스르 하사날 볼키아 모스크', type: 'landmark', location: 'Jame\' Asr Hassanil Bolkiah Mosque' },
                    { time: '17:00', title: '브루나이강 코주부원숭이 크루즈', type: 'binoculars', location: 'Brunei River' }
                ]
            },
            {
                title: '울루 템부롱',
                activities: [
                    { time: '07:00', title: '울루 템부롱 캐노피 워크', type: 'trees', location: 'Ulu Temburong National Park' },
                    { time: '13:00', title: '템부롱 대교 경유 귀환', type: 'bridge', location: 'Temburong Bridge' },
                    { time: '17:30', title: '무아라 비치 선셋', type: 'sun', location: 'Muara Beach' }
                ]
            },
            {
                title: '제루동 & 이동',
                activities: [
                    { time: '09:30', title: '제루동 파크', type: 'sparkles', location: 'Jerudong Park Playground' },
                    { time: '12:30', title: '엠파이어 브루나이 애프터눈 티', type: 'coffee', location: 'The Empire Brunei' },
                    { time: '16:30', title: '브루나이 공항 이동', type: 'plane', location: 'Brunei International Airport' }
                ]
            }
        ]
    },
    manado: {
        id: 'manado',
        city: 'Manado',
        country: 'Indonesia',
        summary: '부나켄 스노클링·다이빙과 톰모혼 시장, 린노우 호수, 마하우 화산, 미나하사 고원을 4박 5일로 엮은 마나도 템플릿입니다.',
        footer: 'Manado is reef walls, highland lakes, and food that does not hold back on chili.',
        heroImage: 'assets/heroes/manado.jpg',
        heroPosition: 'center center',
        accent: '#005596',
        accentRgb: '0, 85, 150',
        ink: '#0F2F3A',
        inkRgb: '15, 47, 58',
        overlayTop: 'rgba(15, 47, 58, 0.34)',
        overlayBottom: 'rgba(8, 26, 34, 0.84)',
        timeZone: 'Asia/Makassar',
        weather: { latitude: 1.4748, longitude: 124.8421 },
        currency: { code: 'IDR', symbol: 'Rp', locale: 'id-ID' },
        startOffsetDays: 14,
        phraseLabel: 'Bahasa Indonesia',
        phrases: [
            { text: 'Selamat siang', pron: '슬라맛 시앙', meaning: '안녕하세요 (낮 인사)' },
            { text: 'Jangan terlalu pedas', pron: '장안 뜨를랄루 쁘다스', meaning: '너무 맵지 않게 해주세요' },
            { text: 'Mau snorkeling ke Bunaken', pron: '마우 스노클링 끄 부나켄', meaning: '부나켄으로 스노클링 가고 싶어요' },
            { text: 'Enak sekali!', pron: '에낙 스깔리', meaning: '정말 맛있어요!' },
            { text: 'Bisa pakai kartu?', pron: '비사 빠까이 까르뚜', meaning: '카드 결제 되나요?' },
            { text: 'Sampai jumpa', pron: '삼빠이 줌빠', meaning: '또 만나요' }
        ],
        itineraryTemplate: [
            {
                title: '마나도 시내',
                activities: [
                    { time: '10:00', title: '예수 축복상', type: 'landmark', location: 'Christ Blessing Monument' },
                    { time: '13:00', title: '마나도 타운 스퀘어 점심', type: 'shopping-cart', location: 'Manado Town Square' },
                    { time: '18:00', title: '불러바드 선셋 (마나도 투아 조망)', type: 'sun', location: 'Boulevard Manado' }
                ]
            },
            {
                title: '부나켄 해양공원',
                activities: [
                    { time: '08:00', title: '부나켄 스노클링 · 다이빙', type: 'binoculars', location: 'Bunaken Island' },
                    { time: '12:30', title: '시라덴 섬 점심 & 해변', type: 'sun', location: 'Siladen Island' },
                    { time: '16:00', title: '마나도 투아 화산섬 조망', type: 'camera', location: 'Manado Tua Island' }
                ]
            },
            {
                title: '톰모혼 고원',
                activities: [
                    { time: '08:30', title: '마하우 화산 분화구 트레킹', type: 'trees', location: 'Mount Mahawu' },
                    { time: '11:30', title: '톰모혼 전통시장', type: 'store', location: 'Tomohon Traditional Market' },
                    { time: '14:30', title: '린노우 호수 카페', type: 'coffee', location: 'Lake Linow' }
                ]
            },
            {
                title: '미나하사 고원',
                activities: [
                    { time: '09:00', title: '워루가 석관 유적', type: 'landmark', location: 'Waruga Sawangan' },
                    { time: '12:30', title: '톤다노 호수 점심', type: 'utensils-crossed', location: 'Lake Tondano' },
                    { time: '15:30', title: '부킷 카시 전망', type: 'camera', location: 'Bukit Kasih' }
                ]
            },
            {
                title: '마지막 산책 & 이동',
                activities: [
                    { time: '09:30', title: '반 힌 키옹 사원', type: 'landmark', location: 'Ban Hin Kiong Temple' },
                    { time: '12:30', title: '클라퍼타르트 선물', type: 'gift', location: 'Christine Klappertaart' },
                    { time: '15:30', title: '삼 라툴랑이 공항 이동', type: 'plane', location: 'Sam Ratulangi International Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_SEA_B;
