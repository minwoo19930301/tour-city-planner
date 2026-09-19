// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_CENTRAL = {
    ulaanbaatar: {
        id: 'ulaanbaatar',
        city: 'Ulaanbaatar',
        country: 'Mongolia',
        summary: '간단사와 수흐바타르 광장, 자이산 전망대에 테를지 초원과 칭기즈칸 기마상까지 묶은 몽골 템플릿입니다.',
        footer: 'Ulaanbaatar is best read against an endless blue sky and open steppe.',
        heroImage: 'assets/heroes/ulaanbaatar.jpg',
        heroPosition: 'center center',
        accent: '#3B82F6',
        accentRgb: '59, 130, 246',
        ink: '#1E293B',
        inkRgb: '30, 41, 59',
        overlayTop: 'rgba(30, 41, 59, 0.34)',
        overlayBottom: 'rgba(15, 23, 42, 0.86)',
        timeZone: 'Asia/Ulaanbaatar',
        weather: { latitude: 47.9188, longitude: 106.9176 },
        currency: { code: 'MNT', symbol: '₮', locale: 'mn-MN' },
        startOffsetDays: 10,
        phraseLabel: 'Монгол',
        phrases: [
            { text: 'Сайн байна уу', pron: '샌 배노', meaning: '안녕하세요' },
            { text: 'Баярлалаа', pron: '바야를라', meaning: '감사합니다' },
            { text: 'Энэ хэд вэ?', pron: '엔 헤드 웨', meaning: '이거 얼마예요?' },
            { text: 'Уучлаарай', pron: '오칠라래', meaning: '실례합니다 / 죄송합니다' },
            { text: 'Тооцоогоо хийе', pron: '토초고 히예', meaning: '계산할게요' },
            { text: 'Амттай байна', pron: '암태 밴', meaning: '맛있어요' }
        ],
        itineraryTemplate: [
            {
                title: '수흐바타르 광장 & 도심',
                activities: [
                    { time: '10:00', title: '수흐바타르 광장', type: 'map', location: 'Sukhbaatar Square' },
                    { time: '13:30', title: '칭기즈칸 국립박물관', type: 'building-2', location: 'Chinggis Khaan National Museum' },
                    { time: '18:00', title: '투멘 에흐 전통 공연 (흐미·마두금)', type: 'music', location: 'Tumen Ekh Ensemble' }
                ]
            },
            {
                title: '간단사 & 자이산',
                activities: [
                    { time: '09:30', title: '간단사 아침 예불', type: 'landmark', location: 'Gandantegchinlen Monastery' },
                    { time: '13:30', title: '보그드 칸 겨울 궁전', type: 'building', location: 'Winter Palace of the Bogd Khan' },
                    { time: '18:00', title: '자이산 전망대 일몰', type: 'sun', location: 'Zaisan Memorial' }
                ]
            },
            {
                title: '테를지 국립공원 당일',
                activities: [
                    { time: '09:00', title: '칭기즈칸 기마상', type: 'landmark', location: 'Chinggis Khaan Statue Complex' },
                    { time: '12:30', title: '거북바위 & 게르 점심', type: 'camera', location: 'Turtle Rock' },
                    { time: '15:30', title: '아리야발 명상 사원 트레킹', type: 'trees', location: 'Aryabal Meditation Temple' }
                ]
            },
            {
                title: '초이진 라마 & 나란톨',
                activities: [
                    { time: '10:00', title: '초이진 라마 사원 박물관', type: 'landmark', location: 'Choijin Lama Temple Museum' },
                    { time: '13:30', title: '나란톨 시장 구경', type: 'store', location: 'Narantuul Market' },
                    { time: '18:30', title: '블루 스카이 타워 야경', type: 'moon-star', location: 'Blue Sky Tower' }
                ]
            },
            {
                title: '캐시미어 쇼핑 & 이동',
                activities: [
                    { time: '10:00', title: '국영백화점 캐시미어 쇼핑', type: 'shopping-cart', location: 'State Department Store' },
                    { time: '13:00', title: '몽골 전통 음식 점심', type: 'utensils-crossed', location: 'Modern Nomads' },
                    { time: '16:00', title: '칭기즈칸 국제공항 이동', type: 'plane', location: 'Chinggis Khaan International Airport' }
                ]
            }
        ]
    },
    almaty: {
        id: 'almaty',
        city: 'Almaty',
        country: 'Kazakhstan',
        summary: '젠코프 성당과 그린 바자르, 콕토베, 메데우·침불락, 빅 알마티 호수와 차른 캐니언까지 산과 도시를 잇는 알마티 템플릿입니다.',
        footer: 'Almaty works best when apple orchards, snow peaks, and bazaars share one day.',
        heroImage: 'assets/heroes/almaty.jpg',
        heroPosition: 'center center',
        accent: '#16A34A',
        accentRgb: '22, 163, 74',
        ink: '#14532D',
        inkRgb: '20, 83, 45',
        overlayTop: 'rgba(20, 83, 45, 0.36)',
        overlayBottom: 'rgba(12, 26, 18, 0.88)',
        timeZone: 'Asia/Almaty',
        weather: { latitude: 43.2380, longitude: 76.8890 },
        currency: { code: 'KZT', symbol: '₸', locale: 'kk-KZ' },
        startOffsetDays: 9,
        phraseLabel: 'Қазақша · Русский',
        phrases: [
            { text: 'Сәлеметсіз бе', pron: '살레메트시즈 베', meaning: '안녕하세요' },
            { text: 'Рахмет', pron: '라흐메트', meaning: '감사합니다' },
            { text: 'Бұл қанша тұрады?', pron: '불 칸샤 투라드', meaning: '이거 얼마예요?' },
            { text: 'Кешіріңіз', pron: '케시리니즈', meaning: '실례합니다' },
            { text: 'Счёт, пожалуйста', pron: '숏 파잘루스타', meaning: '계산서 주세요 (러시아어)' },
            { text: 'Өте әдемі', pron: '외테 애데미', meaning: '정말 예쁘네요' }
        ],
        itineraryTemplate: [
            {
                title: '판필로프 공원 & 콕토베',
                activities: [
                    { time: '10:00', title: '젠코프 성당 (승천 대성당)', type: 'landmark', location: 'Ascension Cathedral' },
                    { time: '13:00', title: '그린 바자르 점심', type: 'store', location: 'Green Bazaar' },
                    { time: '18:00', title: '콕토베 케이블카 야경', type: 'moon-star', location: 'Kok Tobe' }
                ]
            },
            {
                title: '메데우 & 침불락',
                activities: [
                    { time: '09:30', title: '메데우 빙상장', type: 'camera', location: 'Medeu' },
                    { time: '12:30', title: '침불락 곤돌라 & 산 위 점심', type: 'binoculars', location: 'Shymbulak Mountain Resort' },
                    { time: '19:00', title: '아바이 오페라 공연', type: 'music', location: 'Abay Opera House' }
                ]
            },
            {
                title: '빅 알마티 호수 & 남부',
                activities: [
                    { time: '09:00', title: '빅 알마티 호수', type: 'camera', location: 'Big Almaty Lake' },
                    { time: '13:30', title: '첫 대통령 공원 산책', type: 'trees', location: 'First President Park' },
                    { time: '18:30', title: '공화국 광장 & 독립기념비', type: 'landmark', location: 'Republic Square' }
                ]
            },
            {
                title: '차른 캐니언 당일',
                activities: [
                    { time: '07:00', title: '차른 캐니언 성의 계곡 트레킹', type: 'map', location: 'Charyn Canyon' },
                    { time: '12:30', title: '캐니언 에코파크 유르트 점심', type: 'utensils-crossed', location: 'Charyn Canyon Eco Park' },
                    { time: '19:30', title: '판필로프 거리 저녁 산책', type: 'lightbulb', location: 'Panfilov Street' }
                ]
            },
            {
                title: '박물관 & 이동',
                activities: [
                    { time: '10:00', title: '중앙 국립박물관', type: 'building-2', location: 'Central State Museum of Kazakhstan' },
                    { time: '13:00', title: '도스틱 플라자 점심 & 기념품', type: 'gift', location: 'Dostyk Plaza' },
                    { time: '16:30', title: '알마티 공항 이동', type: 'plane', location: 'Almaty International Airport' }
                ]
            }
        ]
    },
    astana: {
        id: 'astana',
        city: 'Astana',
        country: 'Kazakhstan',
        summary: '바이테렉과 칸 샤티르, 하즈렛 술탄 모스크, 누르 알렘에 보로보이 당일까지 더한 초원 위 미래도시 아스타나 템플릿입니다.',
        footer: 'Astana feels strongest when glass towers meet the wide steppe sky.',
        heroImage: 'assets/heroes/astana.jpg',
        heroPosition: 'center center',
        accent: '#EEF205',
        accentRgb: '238, 242, 5',
        ink: '#1E3A5F',
        inkRgb: '30, 58, 95',
        overlayTop: 'rgba(30, 58, 95, 0.36)',
        overlayBottom: 'rgba(12, 22, 40, 0.88)',
        timeZone: 'Asia/Almaty',
        weather: { latitude: 51.1694, longitude: 71.4491 },
        currency: { code: 'KZT', symbol: '₸', locale: 'kk-KZ' },
        startOffsetDays: 9,
        phraseLabel: 'Қазақша · Русский',
        phrases: [
            { text: 'Сәлем', pron: '살렘', meaning: '안녕 (편한 인사)' },
            { text: 'Көп рахмет', pron: '쾨프 라흐메트', meaning: '정말 감사합니다' },
            { text: 'Дәмді екен', pron: '댐디 에켄', meaning: '맛있네요' },
            { text: 'Где остановка?', pron: '그제 아스타놉카', meaning: '정류장이 어디예요? (러시아어)' },
            { text: 'Можно фото?', pron: '모즈나 포토', meaning: '사진 찍어도 돼요? (러시아어)' },
            { text: 'Сау болыңыз', pron: '사우 볼르느즈', meaning: '안녕히 계세요' }
        ],
        itineraryTemplate: [
            {
                title: '좌안 신도심 & 바이테렉',
                activities: [
                    { time: '10:00', title: '바이테렉 전망대', type: 'tower-control', location: 'Bayterek Tower' },
                    { time: '13:30', title: '칸 샤티르 점심 & 쇼핑', type: 'shopping-cart', location: 'Khan Shatyr' },
                    { time: '18:30', title: '누르졸 대로 야경 산책', type: 'moon-star', location: 'Nurzhol Boulevard' }
                ]
            },
            {
                title: '하즈렛 술탄 & 독립 광장',
                activities: [
                    { time: '10:00', title: '하즈렛 술탄 모스크', type: 'landmark', location: 'Hazrat Sultan Mosque' },
                    { time: '13:00', title: '국립박물관', type: 'building-2', location: 'National Museum of the Republic of Kazakhstan' },
                    { time: '18:00', title: '피라미드 (평화와 화해의 궁전)', type: 'building', location: 'Palace of Peace and Reconciliation' }
                ]
            },
            {
                title: '엑스포 & 누르 알렘',
                activities: [
                    { time: '10:00', title: '누르 알렘 미래 에너지 박물관', type: 'sparkles', location: 'Nur Alem' },
                    { time: '13:30', title: '아스타나 식물원 산책', type: 'trees', location: 'Astana Botanical Garden' },
                    { time: '18:00', title: '메가 실크웨이 저녁', type: 'shopping-bag', location: 'Mega Silk Way' }
                ]
            },
            {
                title: '보로보이 (부라바이) 당일',
                activities: [
                    { time: '07:30', title: '부라바이 국립공원 이동 & 숲 산책', type: 'map', location: 'Burabay National Park' },
                    { time: '12:30', title: '옥제트페스 바위 전망', type: 'binoculars', location: 'Okzhetpes' },
                    { time: '15:30', title: '보로보이 호수 보트', type: 'ship', location: 'Lake Burabay' }
                ]
            },
            {
                title: '그랜드 모스크 & 이동',
                activities: [
                    { time: '10:00', title: '아스타나 그랜드 모스크', type: 'landmark', location: 'Astana Grand Mosque' },
                    { time: '13:00', title: '케루엔 몰 점심 & 기념품', type: 'gift', location: 'Keruen Mall' },
                    { time: '16:00', title: '나자르바예프 공항 이동', type: 'plane', location: 'Nursultan Nazarbayev International Airport' }
                ]
            }
        ]
    },
    tashkent: {
        id: 'tashkent',
        city: 'Tashkent',
        country: 'Uzbekistan',
        summary: '하즈라티 이맘과 초르수 바자르, 지하철 역 투어에 사마르칸트 레기스탄 당일 고속철까지 묶은 타슈켄트 템플릿입니다.',
        footer: 'Tashkent runs on blue tiles, plov, and marble metro stations.',
        heroImage: 'assets/heroes/tashkent.jpg',
        heroPosition: 'center center',
        accent: '#26A0B8',
        accentRgb: '38, 160, 184',
        ink: '#0C4A6E',
        inkRgb: '12, 74, 110',
        overlayTop: 'rgba(12, 74, 110, 0.40)',
        overlayBottom: 'rgba(8, 30, 48, 0.88)',
        timeZone: 'Asia/Tashkent',
        weather: { latitude: 41.2995, longitude: 69.2401 },
        currency: { code: 'UZS', symbol: 'soʻm', locale: 'uz-UZ' },
        startOffsetDays: 10,
        phraseLabel: 'Oʻzbekcha',
        phrases: [
            { text: 'Assalomu alaykum', pron: '앗살로무 알라이쿰', meaning: '안녕하세요' },
            { text: 'Rahmat', pron: '라흐맛', meaning: '감사합니다' },
            { text: 'Bu qancha turadi?', pron: '부 칸차 투라디', meaning: '이거 얼마예요?' },
            { text: 'Kechirasiz', pron: '케치라시즈', meaning: '실례합니다' },
            { text: 'Hisobni bering, iltimos', pron: '히솝니 베링 일티모스', meaning: '계산서 주세요' },
            { text: 'Juda mazali', pron: '주다 마잘리', meaning: '정말 맛있어요' }
        ],
        itineraryTemplate: [
            {
                title: '올드 타운 & 초르수',
                activities: [
                    { time: '10:00', title: '하즈라티 이맘 단지 (오스만 쿠란)', type: 'landmark', location: 'Hazrati Imam Complex' },
                    { time: '13:00', title: '초르수 바자르 플로프 점심', type: 'store', location: 'Chorsu Bazaar' },
                    { time: '17:30', title: '쿠켈다시 마드라사 & 저녁', type: 'building-2', location: 'Kukeldash Madrasah' }
                ]
            },
            {
                title: '아미르 티무르 광장 & 신시가',
                activities: [
                    { time: '10:00', title: '아미르 티무르 광장', type: 'landmark', location: 'Amir Temur Square' },
                    { time: '13:00', title: '아미르 티무르 박물관', type: 'building', location: 'Amir Timur Museum' },
                    { time: '18:30', title: '타슈켄트 시티 파크 분수 야경', type: 'sparkles', location: 'Tashkent City Park' }
                ]
            },
            {
                title: '사마르칸트 당일 (아프로시욥 고속철)',
                activities: [
                    { time: '10:00', title: '레기스탄 광장', type: 'landmark', location: 'Registan Square' },
                    { time: '13:00', title: '시욥 바자르 & 비비하눔 모스크', type: 'store', location: 'Siyob Bazaar' },
                    { time: '16:00', title: '샤히진다 영묘군', type: 'camera', location: 'Shah-i-Zinda' }
                ]
            },
            {
                title: '지하철 역 투어 & 독립광장',
                activities: [
                    { time: '10:00', title: '독립광장 산책', type: 'map', location: 'Independence Square' },
                    { time: '13:30', title: '지하철 명소 역 투어 (코스모나블라르)', type: 'train-front', location: 'Kosmonavtlar Metro Station' },
                    { time: '19:00', title: '나보이 오페라 발레 극장', type: 'music', location: 'Alisher Navoi Opera and Ballet Theater' }
                ]
            },
            {
                title: 'TV 타워 & 이동',
                activities: [
                    { time: '10:00', title: '타슈켄트 TV 타워 전망', type: 'tower-control', location: 'Tashkent TV Tower' },
                    { time: '13:00', title: '사마르칸트 다르보자 몰 점심 & 기념품', type: 'gift', location: 'Samarkand Darvoza Mall' },
                    { time: '16:00', title: '타슈켄트 공항 이동', type: 'plane', location: 'Tashkent International Airport' }
                ]
            }
        ]
    },
    bishkek: {
        id: 'bishkek',
        city: 'Bishkek',
        country: 'Kyrgyzstan',
        summary: '알라투 광장과 오쉬 바자르, 알라 아르차 트레킹, 부라나 탑을 지나 이식쿨 호수까지 이어지는 비슈케크 템플릿입니다.',
        footer: 'Bishkek is a gateway: bazaars in the morning, alpine air by noon.',
        heroImage: 'assets/heroes/bishkek.jpg',
        heroPosition: 'center center',
        accent: '#EF4444',
        accentRgb: '239, 68, 68',
        ink: '#292524',
        inkRgb: '41, 37, 36',
        overlayTop: 'rgba(41, 37, 36, 0.36)',
        overlayBottom: 'rgba(20, 18, 17, 0.88)',
        timeZone: 'Asia/Bishkek',
        weather: { latitude: 42.8746, longitude: 74.5698 },
        currency: { code: 'KGS', symbol: 'сом', locale: 'ky-KG' },
        startOffsetDays: 11,
        phraseLabel: 'Кыргызча · Русский',
        phrases: [
            { text: 'Саламатсызбы', pron: '살라맛스즈브', meaning: '안녕하세요' },
            { text: 'Рахмат', pron: '라흐맛', meaning: '감사합니다' },
            { text: 'Бул канча турат?', pron: '불 칸차 투라트', meaning: '이거 얼마예요?' },
            { text: 'Кечиресиз', pron: '케치레시즈', meaning: '실례합니다' },
            { text: 'Очень вкусно', pron: '오친 프쿠스나', meaning: '정말 맛있어요 (러시아어)' },
            { text: 'Где базар?', pron: '그제 바자르', meaning: '시장이 어디예요? (러시아어)' }
        ],
        itineraryTemplate: [
            {
                title: '알라투 광장 & 도심',
                activities: [
                    { time: '10:00', title: '알라투 광장 & 근위병 교대', type: 'map', location: 'Ala-Too Square' },
                    { time: '13:00', title: '오쉬 바자르 점심', type: 'store', location: 'Osh Bazaar' },
                    { time: '18:30', title: '수파라 에스노 콤플렉스 저녁', type: 'utensils-crossed', location: 'Supara Ethno Complex' }
                ]
            },
            {
                title: '알라 아르차 국립공원',
                activities: [
                    { time: '09:00', title: '알라 아르차 트레킹', type: 'trees', location: 'Ala Archa National Park' },
                    { time: '12:30', title: '악사이 폭포 코스 & 도시락', type: 'camera', location: 'Ak-Sai Waterfall' },
                    { time: '18:30', title: '에르킨딕 대로 산책 & 저녁', type: 'lightbulb', location: 'Erkindik Boulevard' }
                ]
            },
            {
                title: '부라나 탑 & 이식쿨 호수',
                activities: [
                    { time: '09:00', title: '부라나 탑 & 발발 석상', type: 'landmark', location: 'Burana Tower' },
                    { time: '14:00', title: '촐폰아타 도착 & 호수 수영', type: 'sun', location: 'Cholpon-Ata' },
                    { time: '17:30', title: '암각화 야외 박물관', type: 'palette', location: 'Cholpon-Ata Petroglyphs' }
                ]
            },
            {
                title: '이식쿨 → 비슈케크',
                activities: [
                    { time: '09:00', title: '루흐 오르도 문화센터', type: 'building', location: 'Ruh Ordo Cultural Center' },
                    { time: '12:30', title: '그리고리예프카 협곡', type: 'trees', location: 'Grigorievka Gorge' },
                    { time: '19:30', title: '비슈케크 귀환 & 나밧 저녁', type: 'utensils-crossed', location: 'Navat Restaurant' }
                ]
            },
            {
                title: '박물관 & 이동',
                activities: [
                    { time: '10:00', title: '국립역사박물관', type: 'building-2', location: 'State History Museum Bishkek' },
                    { time: '13:00', title: '춤(TSUM) 펠트 기념품', type: 'gift', location: 'TSUM Aichurek' },
                    { time: '16:00', title: '마나스 공항 이동', type: 'plane', location: 'Manas International Airport' }
                ]
            }
        ]
    },
    kathmandu: {
        id: 'kathmandu',
        city: 'Kathmandu',
        country: 'Nepal',
        summary: '보드나트와 스와얌부나트, 더르바르 광장과 파슈파티나트, 타멜 밤거리에 나가르코트 일출까지 담은 카트만두 템플릿입니다.',
        footer: 'Kathmandu feels richest in prayer flags, butter lamps, and mountain dawns.',
        heroImage: 'assets/heroes/kathmandu.jpg',
        heroPosition: 'center center',
        accent: '#E4572E',
        accentRgb: '228, 87, 46',
        ink: '#431407',
        inkRgb: '67, 20, 7',
        overlayTop: 'rgba(67, 20, 7, 0.38)',
        overlayBottom: 'rgba(28, 12, 6, 0.88)',
        timeZone: 'Asia/Kathmandu',
        weather: { latitude: 27.7172, longitude: 85.3240 },
        currency: { code: 'NPR', symbol: '₨', locale: 'ne-NP' },
        startOffsetDays: 12,
        phraseLabel: 'नेपाली',
        phrases: [
            { text: 'नमस्ते', pron: '나마스테', meaning: '안녕하세요' },
            { text: 'धन्यवाद', pron: '단녀바드', meaning: '감사합니다' },
            { text: 'यो कति हो?', pron: '요 카티 호', meaning: '이거 얼마예요?' },
            { text: 'माफ गर्नुहोस्', pron: '마프 가르누호스', meaning: '실례합니다 / 죄송합니다' },
            { text: 'मिठो छ', pron: '미토 차', meaning: '맛있어요' },
            { text: 'बिल दिनुहोस्', pron: '빌 디누호스', meaning: '계산서 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '더르바르 광장 & 타멜',
                activities: [
                    { time: '10:00', title: '카트만두 더르바르 광장 & 쿠마리 하우스', type: 'landmark', location: 'Kathmandu Durbar Square' },
                    { time: '13:00', title: '아산 바자르 골목 & 점심', type: 'store', location: 'Asan Bazaar' },
                    { time: '18:00', title: '타멜 저녁 산책', type: 'shopping-bag', location: 'Thamel' }
                ]
            },
            {
                title: '스와얌부나트 & 파탄',
                activities: [
                    { time: '08:30', title: '스와얌부나트 (몽키 템플)', type: 'landmark', location: 'Swayambhunath Stupa' },
                    { time: '13:00', title: '파탄 더르바르 광장 & 점심', type: 'building-2', location: 'Patan Durbar Square' },
                    { time: '18:00', title: '가든 오브 드림스 저녁', type: 'trees', location: 'Garden of Dreams' }
                ]
            },
            {
                title: '보드나트 & 파슈파티나트',
                activities: [
                    { time: '09:00', title: '보드나트 스투파 아침 코라', type: 'landmark', location: 'Boudhanath Stupa' },
                    { time: '13:00', title: '코판 사원 전망 & 점심', type: 'binoculars', location: 'Kopan Monastery' },
                    { time: '17:30', title: '파슈파티나트 저녁 아르티', type: 'sparkles', location: 'Pashupatinath Temple' }
                ]
            },
            {
                title: '나가르코트 일출 & 박타푸르',
                activities: [
                    { time: '05:30', title: '나가르코트 히말라야 일출', type: 'sun', location: 'Nagarkot' },
                    { time: '10:30', title: '박타푸르 더르바르 광장', type: 'landmark', location: 'Bhaktapur Durbar Square' },
                    { time: '13:30', title: '냐타폴라 사원 & 주주 다우 점심', type: 'utensils-crossed', location: 'Taumadhi Square' }
                ]
            },
            {
                title: '궁전 박물관 & 이동',
                activities: [
                    { time: '11:00', title: '나라얀히티 궁전 박물관', type: 'building', location: 'Narayanhiti Palace Museum' },
                    { time: '13:30', title: '더르바르 마르그 점심 & 기념품', type: 'gift', location: 'Durbar Marg' },
                    { time: '16:30', title: '트리부반 공항 이동', type: 'plane', location: 'Tribhuvan International Airport' }
                ]
            }
        ]
    },
    colombo: {
        id: 'colombo',
        city: 'Colombo',
        country: 'Sri Lanka',
        summary: '갈레 페이스 일몰과 강가라마야 사원, 페타 시장, 로터스 타워에 갈레 요새 당일 기차까지 엮은 콜롬보 템플릿입니다.',
        footer: 'Colombo is best at golden hour, with sea spray and a cup of Ceylon tea.',
        heroImage: 'assets/heroes/colombo.jpg',
        heroPosition: 'center center',
        accent: '#10B981',
        accentRgb: '16, 185, 129',
        ink: '#064E3B',
        inkRgb: '6, 78, 59',
        overlayTop: 'rgba(6, 78, 59, 0.36)',
        overlayBottom: 'rgba(6, 30, 26, 0.88)',
        timeZone: 'Asia/Colombo',
        weather: { latitude: 6.9271, longitude: 79.8612 },
        currency: { code: 'LKR', symbol: 'Rs', locale: 'si-LK' },
        startOffsetDays: 9,
        phraseLabel: 'සිංහල · English',
        phrases: [
            { text: 'ආයුබෝවන්', pron: '아유보완', meaning: '안녕하세요' },
            { text: 'ස්තූතියි', pron: '스투티', meaning: '감사합니다' },
            { text: 'මේක කීයද?', pron: '메카 키야다', meaning: '이거 얼마예요?' },
            { text: 'සමාවෙන්න', pron: '사마웬나', meaning: '실례합니다' },
            { text: 'හරි රසයි', pron: '하리 라사이', meaning: '정말 맛있어요' },
            { text: 'බිල ගේන්න', pron: '빌라 겐나', meaning: '계산서 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '포트 & 페타',
                activities: [
                    { time: '10:00', title: '콜롬보 포트 & 올드 더치 호스피탈', type: 'building', location: 'Dutch Hospital Shopping Precinct' },
                    { time: '13:00', title: '페타 시장', type: 'store', location: 'Pettah Market' },
                    { time: '18:00', title: '갈레 페이스 그린 일몰', type: 'sun', location: 'Galle Face Green' }
                ]
            },
            {
                title: '베이라 호수 & 로터스 타워',
                activities: [
                    { time: '10:00', title: '강가라마야 사원', type: 'landmark', location: 'Gangaramaya Temple' },
                    { time: '12:30', title: '시마 말라카 수상 법당', type: 'camera', location: 'Seema Malaka' },
                    { time: '18:30', title: '로터스 타워 야경', type: 'tower-control', location: 'Lotus Tower' }
                ]
            },
            {
                title: '갈레 요새 당일 (해안 기차)',
                activities: [
                    { time: '09:30', title: '갈레 요새 성벽 산책', type: 'landmark', location: 'Galle Fort' },
                    { time: '13:00', title: '올드 더치 호스피탈 갈레 점심', type: 'utensils-crossed', location: 'Old Dutch Hospital Galle' },
                    { time: '17:00', title: '갈레 등대 & 성벽 일몰', type: 'sun', location: 'Galle Fort Lighthouse' }
                ]
            },
            {
                title: '콜롬보 7 & 인디펜던스',
                activities: [
                    { time: '10:00', title: '콜롬보 국립박물관', type: 'building-2', location: 'Colombo National Museum' },
                    { time: '13:00', title: '인디펜던스 메모리얼 홀', type: 'landmark', location: 'Independence Memorial Hall' },
                    { time: '18:30', title: '아케이드 인디펜던스 스퀘어 저녁', type: 'shopping-bag', location: 'Arcade Independence Square' }
                ]
            },
            {
                title: '마운트 라비니아 & 이동',
                activities: [
                    { time: '10:00', title: '마운트 라비니아 비치 브런치', type: 'coffee', location: 'Mount Lavinia Beach' },
                    { time: '13:00', title: '락살라 실론 티 & 기념품', type: 'gift', location: 'Laksala' },
                    { time: '16:00', title: '반다라나이케 공항 이동', type: 'plane', location: 'Bandaranaike International Airport' }
                ]
            }
        ]
    },
    doha: {
        id: 'doha',
        city: 'Doha',
        country: 'Qatar',
        summary: '수크 와키프와 이슬람 예술 박물관, 코르니슈, 카타라와 펄, 사막 사파리까지 묶은 도하 템플릿입니다.',
        footer: 'Doha feels strongest when old souq lanterns and new skyline glass share one bay.',
        heroImage: 'assets/heroes/doha.jpg',
        heroPosition: 'center center',
        accent: '#8D1B3D',
        accentRgb: '141, 27, 61',
        ink: '#4C0519',
        inkRgb: '76, 5, 25',
        overlayTop: 'rgba(76, 5, 25, 0.40)',
        overlayBottom: 'rgba(30, 6, 14, 0.90)',
        timeZone: 'Asia/Qatar',
        weather: { latitude: 25.2854, longitude: 51.5310 },
        currency: { code: 'QAR', symbol: 'QR', locale: 'ar-QA' },
        startOffsetDays: 7,
        phraseLabel: 'العربية',
        phrases: [
            { text: 'السلام عليكم', pron: '앗살라무 알라이쿰', meaning: '안녕하세요' },
            { text: 'شكراً جزيلاً', pron: '슈크란 자질란', meaning: '정말 감사합니다' },
            { text: 'بكم هذا؟', pron: '비캄 하다', meaning: '이거 얼마예요?' },
            { text: 'لو سمحت', pron: '라우 사마흐트', meaning: '실례합니다 / 저기요' },
            { text: 'وين سوق واقف؟', pron: '웨인 수크 와키프', meaning: '수크 와키프가 어디예요?' },
            { text: 'لذيذ', pron: '라디드', meaning: '맛있어요' }
        ],
        itineraryTemplate: [
            {
                title: '코르니슈 & 수크 와키프',
                activities: [
                    { time: '10:00', title: '이슬람 예술 박물관', type: 'building-2', location: 'Museum of Islamic Art' },
                    { time: '13:30', title: '코르니슈 산책 & MIA 파크', type: 'map', location: 'Doha Corniche' },
                    { time: '18:30', title: '수크 와키프 저녁', type: 'store', location: 'Souq Waqif' }
                ]
            },
            {
                title: '카타라 & 펄',
                activities: [
                    { time: '10:00', title: '카타라 문화마을', type: 'palette', location: 'Katara Cultural Village' },
                    { time: '13:30', title: '펄 카타르 포르토 아라비아 점심', type: 'coffee', location: 'The Pearl-Qatar' },
                    { time: '18:30', title: '루사일 대로 야경', type: 'moon-star', location: 'Lusail Boulevard' }
                ]
            },
            {
                title: '국립박물관 & 사막 사파리',
                activities: [
                    { time: '10:00', title: '카타르 국립박물관 (사막 장미)', type: 'building', location: 'National Museum of Qatar' },
                    { time: '14:30', title: '사막 사파리 & 내해 (코르 알 아다이드)', type: 'sun', location: 'Khor Al Adaid' },
                    { time: '19:30', title: '사막 캠프 바비큐', type: 'utensils-crossed', location: 'Sealine Beach' }
                ]
            },
            {
                title: '교육도시 & 이동',
                activities: [
                    { time: '10:00', title: '카타르 국립도서관', type: 'library', location: 'Qatar National Library' },
                    { time: '13:00', title: '므셰이레브 다운타운 점심 & 기념품', type: 'gift', location: 'Msheireb Downtown Doha' },
                    { time: '16:30', title: '하마드 공항 이동', type: 'plane', location: 'Hamad International Airport' }
                ]
            }
        ]
    },
    'abu-dhabi': {
        id: 'abu-dhabi',
        city: 'Abu Dhabi',
        country: 'United Arab Emirates',
        summary: '셰이크 자이드 모스크와 카스르 알 와탄, 루브르 아부다비, 야스 섬 페라리 월드와 코르니슈를 묶은 아부다비 템플릿입니다.',
        footer: 'Abu Dhabi is white marble, gold light, and calm turquoise water.',
        heroImage: 'assets/heroes/abu-dhabi.jpg',
        heroPosition: 'center center',
        accent: '#C9A227',
        accentRgb: '201, 162, 39',
        ink: '#422006',
        inkRgb: '66, 32, 6',
        overlayTop: 'rgba(66, 32, 6, 0.36)',
        overlayBottom: 'rgba(28, 16, 6, 0.88)',
        timeZone: 'Asia/Dubai',
        weather: { latitude: 24.4539, longitude: 54.3773 },
        currency: { code: 'AED', symbol: 'د.إ', locale: 'ar-AE' },
        startOffsetDays: 8,
        phraseLabel: 'العربية',
        phrases: [
            { text: 'هلا', pron: '할라', meaning: '안녕하세요 (걸프식 인사)' },
            { text: 'مع السلامة', pron: '마아 살라마', meaning: '안녕히 가세요' },
            { text: 'كم السعر؟', pron: '캄 앗시으르', meaning: '가격이 얼마예요?' },
            { text: 'من فضلك', pron: '민 파들락', meaning: '부탁합니다' },
            { text: 'وين التاكسي؟', pron: '웨인 앗탁시', meaning: '택시 어디예요?' },
            { text: 'ما شاء الله', pron: '마샤알라', meaning: '멋지네요 (감탄)' }
        ],
        itineraryTemplate: [
            {
                title: '그랜드 모스크 & 카스르 알 와탄',
                activities: [
                    { time: '09:30', title: '셰이크 자이드 그랜드 모스크', type: 'landmark', location: 'Sheikh Zayed Grand Mosque' },
                    { time: '13:30', title: '카스르 알 와탄', type: 'building', location: 'Qasr Al Watan' },
                    { time: '18:00', title: '에미리트 팰리스 골드 카푸치노', type: 'coffee', location: 'Emirates Palace' }
                ]
            },
            {
                title: '사디야트 섬',
                activities: [
                    { time: '10:00', title: '루브르 아부다비', type: 'palette', location: 'Louvre Abu Dhabi' },
                    { time: '13:30', title: '마나라트 알 사디야트 점심', type: 'building-2', location: 'Manarat Al Saadiyat' },
                    { time: '17:30', title: '사디야트 비치 선셋', type: 'sun', location: 'Saadiyat Beach' }
                ]
            },
            {
                title: '야스 섬',
                activities: [
                    { time: '10:00', title: '페라리 월드', type: 'ticket', location: 'Ferrari World Abu Dhabi' },
                    { time: '14:00', title: '야스 몰 점심 & 쇼핑', type: 'shopping-cart', location: 'Yas Mall' },
                    { time: '18:30', title: '야스 베이 워터프런트 야경', type: 'moon-star', location: 'Yas Bay Waterfront' }
                ]
            },
            {
                title: '코르니슈 & 이동',
                activities: [
                    { time: '10:00', title: '코르니슈 비치 산책', type: 'map', location: 'Corniche Beach' },
                    { time: '13:00', title: '카스르 알 호슨 & 기념품', type: 'gift', location: 'Qasr Al Hosn' },
                    { time: '16:30', title: '자이드 공항 이동', type: 'plane', location: 'Zayed International Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_CENTRAL;
