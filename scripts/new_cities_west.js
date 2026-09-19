// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_WEST = {
    milan: {
        id: 'milan',
        city: 'Milan',
        country: 'Italy',
        summary: '두오모와 갤러리아, 최후의 만찬, 브레라, 나빌리 아페리티보에 코모 호수 당일치기를 더한 밀라노 템플릿입니다.',
        footer: 'Milan works when marble spires, fashion, and aperitivo hour share one evening.',
        heroImage: 'assets/heroes/milan.jpg',
        heroPosition: 'center center',
        accent: '#E045B8',
        accentRgb: '224, 69, 184',
        ink: '#3B0716',
        inkRgb: '59, 7, 22',
        overlayTop: 'rgba(59, 7, 22, 0.40)',
        overlayBottom: 'rgba(24, 12, 16, 0.90)',
        timeZone: 'Europe/Rome',
        weather: { latitude: 45.4642, longitude: 9.1900 },
        currency: { code: 'EUR', symbol: '€', locale: 'it-IT' },
        startOffsetDays: 12,
        phraseLabel: 'Italiano',
        phrases: [
            { text: 'Buongiorno', pron: '[부온조르노]', meaning: '좋은 아침입니다 / 안녕하세요' },
            { text: 'Un cappuccino al banco', pron: '[운 카푸치노 알 반코]', meaning: '바에서 카푸치노 한 잔이요 (서서 마시면 더 저렴)' },
            { text: 'Quanto costa?', pron: '[콴토 코스타]', meaning: '얼마예요?' },
            { text: 'Ho una prenotazione', pron: '[오 우나 프레노타치오네]', meaning: '예약했어요' },
            { text: 'Facciamo l’aperitivo?', pron: '[파치아모 라페리티보]', meaning: '아페리티보 할까요?' },
            { text: 'Posso pagare con la carta?', pron: '[포쏘 파가레 콘 라 카르타]', meaning: '카드로 결제할 수 있어요?' }
        ],
        itineraryTemplate: [
            {
                title: '두오모 & 갤러리아',
                activities: [
                    { time: '09:30', title: '두오모 대성당 & 옥상 테라스', type: 'landmark', location: 'Duomo di Milano' },
                    { time: '13:00', title: '갤러리아 비토리오 에마누엘레 2세', type: 'shopping-bag', location: 'Galleria Vittorio Emanuele II' },
                    { time: '18:30', title: '라 스칼라 극장', type: 'music', location: 'Teatro alla Scala' }
                ]
            },
            {
                title: '최후의 만찬 & 스포르체스코',
                activities: [
                    { time: '09:00', title: '최후의 만찬 관람 (예약 필수)', type: 'palette', location: 'Santa Maria delle Grazie' },
                    { time: '12:30', title: '스포르체스코 성', type: 'landmark', location: 'Castello Sforzesco' },
                    { time: '17:30', title: '셈피오네 공원 & 평화의 문', type: 'trees', location: 'Parco Sempione' }
                ]
            },
            {
                title: '브레라 & 콰드릴라테로',
                activities: [
                    { time: '10:00', title: '브레라 미술관', type: 'building-2', location: 'Pinacoteca di Brera' },
                    { time: '13:00', title: '브레라 골목 런치', type: 'coffee', location: 'Via Brera' },
                    { time: '17:00', title: '몬테 나폴레오네 쇼핑 거리', type: 'shopping-bag', location: 'Via Monte Napoleone' }
                ]
            },
            {
                title: '코모 호수 당일치기',
                activities: [
                    { time: '09:00', title: '코모 호숫가 산책', type: 'map', location: 'Lake Como' },
                    { time: '12:30', title: '벨라지오 페리 & 런치', type: 'ship', location: 'Bellagio' },
                    { time: '17:00', title: '브루나테 푸니콜라레 전망', type: 'binoculars', location: 'Funicolare Como-Brunate' }
                ]
            },
            {
                title: '나빌리 & 이동',
                activities: [
                    { time: '10:00', title: '나빌리 운하 산책', type: 'map', location: 'Navigli' },
                    { time: '12:30', title: '나빌리오 그란데 런치', type: 'utensils-crossed', location: 'Naviglio Grande' },
                    { time: '16:00', title: '말펜사 공항 이동', type: 'plane', location: 'Milan Malpensa Airport' }
                ]
            }
        ]
    },
    budapest: {
        id: 'budapest',
        city: 'Budapest',
        country: 'Hungary',
        summary: '국회의사당과 어부의 요새, 세체니 온천, 중앙시장, 도나우 야경 유람선을 묶은 부다페스트 템플릿입니다.',
        footer: 'Budapest glows brightest when thermal steam and Danube lights end the same day.',
        heroImage: 'assets/heroes/budapest.jpg',
        heroPosition: 'center center',
        accent: '#DE843B',
        accentRgb: '222, 132, 59',
        ink: '#1E1B2E',
        inkRgb: '30, 27, 46',
        overlayTop: 'rgba(30, 27, 46, 0.42)',
        overlayBottom: 'rgba(16, 14, 28, 0.92)',
        timeZone: 'Europe/Budapest',
        weather: { latitude: 47.4979, longitude: 19.0402 },
        currency: { code: 'HUF', symbol: 'Ft', locale: 'hu-HU' },
        startOffsetDays: 14,
        phraseLabel: 'Magyar',
        phrases: [
            { text: 'Jó napot kívánok', pron: '[요 너포트 키바노크]', meaning: '안녕하세요 (정중한 인사)' },
            { text: 'Köszönöm', pron: '[쾨쇠뇜]', meaning: '감사합니다' },
            { text: 'Mennyibe kerül?', pron: '[멘니베 케륄]', meaning: '얼마예요?' },
            { text: 'Egy sört kérek', pron: '[에지 쇠르트 케레크]', meaning: '맥주 한 잔 주세요' },
            { text: 'A számlát kérem', pron: '[어 사믈라트 케렘]', meaning: '계산서 주세요' },
            { text: 'Egészségedre!', pron: '[에게셰게드레]', meaning: '건배! / 건강을 위하여' }
        ],
        itineraryTemplate: [
            {
                title: '페스트 – 국회의사당 & 도나우',
                activities: [
                    { time: '10:00', title: '국회의사당 투어', type: 'landmark', location: 'Hungarian Parliament Building' },
                    { time: '13:00', title: '다뉴브 강변의 신발', type: 'camera', location: 'Shoes on the Danube Bank' },
                    { time: '19:00', title: '도나우 야경 유람선', type: 'ship', location: 'Vigadó tér' }
                ]
            },
            {
                title: '부다 – 성 지구',
                activities: [
                    { time: '09:30', title: '어부의 요새', type: 'landmark', location: "Fisherman's Bastion" },
                    { time: '12:30', title: '마차시 성당 & 성 지구 골목', type: 'map', location: 'Matthias Church' },
                    { time: '17:30', title: '부다 왕궁 & 푸니쿨라', type: 'building', location: 'Buda Castle' }
                ]
            },
            {
                title: '온천 & 시민공원',
                activities: [
                    { time: '09:00', title: '세체니 온천', type: 'sparkles', location: 'Széchenyi Thermal Bath' },
                    { time: '13:00', title: '영웅 광장', type: 'landmark', location: "Heroes' Square" },
                    { time: '17:30', title: '바이다후냐드 성 & 시민공원', type: 'trees', location: 'Vajdahunyad Castle' }
                ]
            },
            {
                title: '중앙시장 & 유대인 지구',
                activities: [
                    { time: '10:00', title: '중앙 시장', type: 'store', location: 'Great Market Hall' },
                    { time: '13:00', title: '바치 거리 런치', type: 'coffee', location: 'Váci Street' },
                    { time: '19:00', title: '폐허 술집 심플라 케르트', type: 'music', location: 'Szimpla Kert' }
                ]
            },
            {
                title: '겔레르트 언덕 & 이동',
                activities: [
                    { time: '09:00', title: '겔레르트 언덕 & 자유의 여신상', type: 'binoculars', location: 'Gellért Hill' },
                    { time: '12:00', title: '뉴욕 카페', type: 'coffee', location: 'New York Café' },
                    { time: '16:00', title: '리스트 페렌츠 공항 이동', type: 'plane', location: 'Budapest Ferenc Liszt International Airport' }
                ]
            }
        ]
    },
    'san-francisco': {
        id: 'san-francisco',
        city: 'San Francisco',
        country: 'United States',
        summary: '골든게이트, 알카트라즈, 피어 39, 케이블카, 소살리토 페리를 언덕 동선으로 묶은 샌프란시스코 템플릿입니다.',
        footer: 'San Francisco works when fog, hills, and the bay keep showing up in one frame.',
        heroImage: 'assets/heroes/san-francisco.jpg',
        heroPosition: 'center center',
        accent: '#F00035',
        accentRgb: '240, 0, 53',
        ink: '#1E293B',
        inkRgb: '30, 41, 59',
        overlayTop: 'rgba(30, 41, 59, 0.40)',
        overlayBottom: 'rgba(15, 23, 42, 0.90)',
        timeZone: 'America/Los_Angeles',
        weather: { latitude: 37.7749, longitude: -122.4194 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 12,
        phraseLabel: 'English',
        phrases: [
            { text: 'Does this cable car go to the Wharf?', pron: '[더즈 디스 케이블 카 고 투 더 워프]', meaning: '이 케이블카 피셔맨스 워프 가나요?' },
            { text: 'Clam chowder in a bread bowl, please', pron: '[클램 차우더 인 어 브레드 보울 플리즈]', meaning: '빵 그릇 클램차우더 주세요' },
            { text: 'Is the fog rolling in?', pron: '[이즈 더 포그 롤링 인]', meaning: '안개 끼기 시작하나요?' },
            { text: 'Can I tap my card on Muni?', pron: '[캔 아이 탭 마이 카드 온 뮤니]', meaning: '뮤니(시내 교통)에서 카드 태그 되나요?' },
            { text: 'Which pier is the ferry from?', pron: '[위치 피어 이즈 더 페리 프롬]', meaning: '페리는 몇 번 부두에서 타요?' },
            { text: 'It’s chilly by the bay', pron: '[잇츠 칠리 바이 더 베이]', meaning: '만 근처는 쌀쌀하네요' }
        ],
        itineraryTemplate: [
            {
                title: '피셔맨스 워프 & 알카트라즈',
                activities: [
                    { time: '09:30', title: '알카트라즈 페리 (예약 필수)', type: 'ship', location: 'Alcatraz Island' },
                    { time: '13:00', title: '피어 39 & 바다사자', type: 'camera', location: 'Pier 39' },
                    { time: '18:00', title: '피셔맨스 워프 클램차우더', type: 'utensils-crossed', location: "Fisherman's Wharf" }
                ]
            },
            {
                title: '골든게이트 & 소살리토',
                activities: [
                    { time: '09:30', title: '골든게이트 브리지 자전거', type: 'bridge', location: 'Golden Gate Bridge' },
                    { time: '13:00', title: '소살리토 런치', type: 'utensils-crossed', location: 'Sausalito' },
                    { time: '17:30', title: '페리로 귀환 & 페리 빌딩 마켓', type: 'ship', location: 'San Francisco Ferry Building' }
                ]
            },
            {
                title: '케이블카 & 노브힐',
                activities: [
                    { time: '10:00', title: '케이블카 탑승', type: 'train-front', location: 'Powell Street Cable Car Turnaround' },
                    { time: '13:00', title: '롬바드 스트리트', type: 'camera', location: 'Lombard Street' },
                    { time: '18:00', title: '차이나타운 저녁', type: 'utensils-crossed', location: 'Chinatown San Francisco' }
                ]
            },
            {
                title: '골든게이트 파크 & 미션',
                activities: [
                    { time: '10:00', title: '골든게이트 파크 & 드 영 미술관', type: 'palette', location: 'de Young Museum' },
                    { time: '13:30', title: '알라모 스퀘어 & 페인티드 레이디스', type: 'camera', location: 'Alamo Square Park' },
                    { time: '18:00', title: '미션 디스트릭트 부리토', type: 'utensils-crossed', location: 'Mission District San Francisco' }
                ]
            },
            {
                title: '트윈 픽스 & 이동',
                activities: [
                    { time: '09:00', title: '트윈 픽스 전망', type: 'binoculars', location: 'Twin Peaks San Francisco' },
                    { time: '12:00', title: '기라델리 스퀘어 초콜릿 쇼핑', type: 'gift', location: 'Ghirardelli Square' },
                    { time: '16:00', title: 'SFO 공항 이동', type: 'plane', location: 'San Francisco International Airport' }
                ]
            }
        ]
    },
    seattle: {
        id: 'seattle',
        city: 'Seattle',
        country: 'United States',
        summary: '파이크 플레이스 마켓, 스페이스 니들, 치훌리, 케리 파크 스카이라인을 커피 향으로 묶은 시애틀 템플릿입니다.',
        footer: 'Seattle feels right with a coffee in hand, a ferry horn, and rain that never quite falls.',
        heroImage: 'assets/heroes/seattle.jpg',
        heroPosition: 'center center',
        accent: '#1FA91F',
        accentRgb: '31, 169, 31',
        ink: '#0F2A22',
        inkRgb: '15, 42, 34',
        overlayTop: 'rgba(15, 42, 34, 0.42)',
        overlayBottom: 'rgba(10, 22, 20, 0.92)',
        timeZone: 'America/Los_Angeles',
        weather: { latitude: 47.6062, longitude: -122.3321 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 13,
        phraseLabel: 'English',
        phrases: [
            { text: 'A tall drip coffee, please', pron: '[어 톨 드립 커피 플리즈]', meaning: '톨 사이즈 드립커피 주세요' },
            { text: 'Room for cream, please', pron: '[룸 포 크림 플리즈]', meaning: '크림 넣을 공간 남겨 주세요' },
            { text: 'Is it going to rain later?', pron: '[이즈 잇 고잉 투 레인 레이터]', meaning: '이따 비 와요?' },
            { text: 'Where’s the ferry terminal?', pron: '[웨어즈 더 페리 터미널]', meaning: '페리 터미널 어디예요?' },
            { text: 'Do you sell this by the pound?', pron: '[두 유 셀 디스 바이 더 파운드]', meaning: '이거 파운드 단위로 팔아요?' },
            { text: 'Which stop for the Space Needle?', pron: '[위치 스탑 포 더 스페이스 니들]', meaning: '스페이스 니들은 어느 정류장이에요?' }
        ],
        itineraryTemplate: [
            {
                title: '파이크 플레이스 & 워터프런트',
                activities: [
                    { time: '09:30', title: '파이크 플레이스 마켓', type: 'store', location: 'Pike Place Market' },
                    { time: '12:30', title: '스타벅스 1호점', type: 'coffee', location: 'Original Starbucks' },
                    { time: '18:00', title: '시애틀 그레이트 휠 & 워터프런트', type: 'sparkles', location: 'Seattle Great Wheel' }
                ]
            },
            {
                title: '시애틀 센터',
                activities: [
                    { time: '10:00', title: '스페이스 니들', type: 'tower-control', location: 'Space Needle' },
                    { time: '13:00', title: '치훌리 가든 앤 글라스', type: 'palette', location: 'Chihuly Garden and Glass' },
                    { time: '18:00', title: '팝 컬처 뮤지엄', type: 'music', location: 'Museum of Pop Culture' }
                ]
            },
            {
                title: '다운타운 & 케리 파크',
                activities: [
                    { time: '10:00', title: '시애틀 미술관', type: 'building-2', location: 'Seattle Art Museum' },
                    { time: '13:00', title: '시애틀 중앙도서관', type: 'library', location: 'Seattle Central Library' },
                    { time: '18:30', title: '케리 파크 스카이라인 선셋', type: 'binoculars', location: 'Kerry Park' }
                ]
            },
            {
                title: '베인브리지 & 파이오니어 스퀘어',
                activities: [
                    { time: '09:30', title: '베인브리지 아일랜드 페리', type: 'ship', location: 'Bainbridge Island' },
                    { time: '13:30', title: '파이오니어 스퀘어 & 스미스 타워', type: 'building', location: 'Smith Tower' },
                    { time: '18:00', title: '캐피톨 힐 디너', type: 'utensils-crossed', location: 'Capitol Hill Seattle' }
                ]
            },
            {
                title: '가스 웍스 & 이동',
                activities: [
                    { time: '09:30', title: '가스 웍스 파크', type: 'trees', location: 'Gas Works Park' },
                    { time: '12:30', title: '프리몬트 트롤 & 브런치', type: 'camera', location: 'Fremont Troll' },
                    { time: '16:00', title: '시택 공항 이동', type: 'plane', location: 'Seattle-Tacoma International Airport' }
                ]
            }
        ]
    },
    chicago: {
        id: 'chicago',
        city: 'Chicago',
        country: 'United States',
        summary: '클라우드 게이트, 아트 인스티튜트, 건축 리버 크루즈, 윌리스 타워, 딥디쉬를 묶은 시카고 템플릿입니다.',
        footer: 'Chicago works when the river, the skyline, and a slow deep-dish share one day.',
        heroImage: 'assets/heroes/chicago.jpg',
        heroPosition: 'center center',
        accent: '#3DEBF2',
        accentRgb: '61, 235, 242',
        ink: '#0F172A',
        inkRgb: '15, 23, 42',
        overlayTop: 'rgba(15, 23, 42, 0.44)',
        overlayBottom: 'rgba(10, 14, 28, 0.92)',
        timeZone: 'America/Chicago',
        weather: { latitude: 41.8781, longitude: -87.6298 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 14,
        phraseLabel: 'English',
        phrases: [
            { text: 'Which way is the Loop?', pron: '[위치 웨이 이즈 더 루프]', meaning: '루프(도심)는 어느 쪽이에요?' },
            { text: 'How long for a deep-dish?', pron: '[하우 롱 포 어 딥 디시]', meaning: '딥디쉬 피자 얼마나 걸려요?' },
            { text: 'Is this the Red Line?', pron: '[이즈 디스 더 레드 라인]', meaning: '이거 레드라인 맞아요?' },
            { text: 'It’s windy out there', pron: '[잇츠 윈디 아웃 데어]', meaning: '밖에 바람 엄청 불어요' },
            { text: 'Do I need to tip here?', pron: '[두 아이 니드 투 팁 히어]', meaning: '여기 팁 내야 해요?' },
            { text: 'Can we sit by the river?', pron: '[캔 위 싯 바이 더 리버]', meaning: '강가 자리에 앉을 수 있어요?' }
        ],
        itineraryTemplate: [
            {
                title: '밀레니엄 파크 & 루프',
                activities: [
                    { time: '10:00', title: '클라우드 게이트(더 빈)', type: 'sparkles', location: 'Cloud Gate' },
                    { time: '13:00', title: '아트 인스티튜트 오브 시카고', type: 'palette', location: 'The Art Institute of Chicago' },
                    { time: '18:30', title: '딥디쉬 피자 디너', type: 'utensils-crossed', location: "Lou Malnati's Pizzeria" }
                ]
            },
            {
                title: '리버 크루즈 & 매그니피센트 마일',
                activities: [
                    { time: '10:00', title: '시카고 건축 리버 크루즈', type: 'ship', location: 'Chicago Architecture Center' },
                    { time: '13:30', title: '매그니피센트 마일 쇼핑', type: 'shopping-bag', location: 'Magnificent Mile' },
                    { time: '18:00', title: '360 시카고 전망대', type: 'building', location: '360 Chicago' }
                ]
            },
            {
                title: '윌리스 타워 & 리버워크',
                activities: [
                    { time: '10:00', title: '윌리스 타워 스카이덱', type: 'tower-control', location: 'Skydeck Chicago' },
                    { time: '13:00', title: '리버워크 런치', type: 'coffee', location: 'Chicago Riverwalk' },
                    { time: '18:00', title: '시카고 극장 & 스테이트 스트리트', type: 'music', location: 'The Chicago Theatre' }
                ]
            },
            {
                title: '네이비 피어 & 링컨 파크',
                activities: [
                    { time: '10:00', title: '네이비 피어', type: 'sparkles', location: 'Navy Pier' },
                    { time: '13:30', title: '링컨 파크 동물원', type: 'trees', location: 'Lincoln Park Zoo' },
                    { time: '18:30', title: '노스 애비뉴 비치 스카이라인', type: 'sun', location: 'North Avenue Beach' }
                ]
            },
            {
                title: '뮤지엄 캠퍼스 & 이동',
                activities: [
                    { time: '09:30', title: '필드 자연사 박물관', type: 'building-2', location: 'Field Museum' },
                    { time: '12:30', title: '애들러 천문관 스카이라인 뷰', type: 'binoculars', location: 'Adler Planetarium' },
                    { time: '16:00', title: '오헤어 공항 이동', type: 'plane', location: "O'Hare International Airport" }
                ]
            }
        ]
    },
    boston: {
        id: 'boston',
        city: 'Boston',
        country: 'United States',
        summary: '프리덤 트레일, 퀸시 마켓, 하버드·MIT, 펜웨이, 뉴베리 스트리트를 걸어서 묶은 보스턴 템플릿입니다.',
        footer: 'Boston is best on foot, where red brick, campus lawns, and the harbour line up.',
        heroImage: 'assets/heroes/boston.jpg',
        heroPosition: 'center center',
        accent: '#BD3039',
        accentRgb: '189, 48, 57',
        ink: '#2A1410',
        inkRgb: '42, 20, 16',
        overlayTop: 'rgba(42, 20, 16, 0.42)',
        overlayBottom: 'rgba(22, 14, 12, 0.90)',
        timeZone: 'America/New_York',
        weather: { latitude: 42.3601, longitude: -71.0589 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 15,
        phraseLabel: 'English',
        phrases: [
            { text: 'Wicked good', pron: '[위키드 굿]', meaning: '진짜 좋네요 (보스턴식 표현)' },
            { text: 'Where does the Freedom Trail start?', pron: '[웨어 더즈 더 프리덤 트레일 스타트]', meaning: '프리덤 트레일 출발점이 어디예요?' },
            { text: 'One lobster roll, hot with butter', pron: '[원 랍스터 롤 핫 위드 버터]', meaning: '버터 바른 따뜻한 랍스터롤 하나요' },
            { text: 'Is this the Green Line to Fenway?', pron: '[이즈 디스 더 그린 라인 투 펜웨이]', meaning: '펜웨이 가는 그린라인 맞아요?' },
            { text: 'Can I get a CharlieCard?', pron: '[캔 아이 겟 어 찰리카드]', meaning: '찰리카드(교통카드) 하나 살 수 있어요?' },
            { text: 'Are there student discounts?', pron: '[아 데어 스튜던트 디스카운츠]', meaning: '학생 할인 있어요?' }
        ],
        itineraryTemplate: [
            {
                title: '프리덤 트레일',
                activities: [
                    { time: '09:30', title: '보스턴 커먼 & 주 의사당', type: 'landmark', location: 'Boston Common' },
                    { time: '13:00', title: '퀸시 마켓 런치', type: 'store', location: 'Quincy Market' },
                    { time: '17:30', title: '노스엔드 이탈리안 디너', type: 'utensils-crossed', location: 'North End Boston' }
                ]
            },
            {
                title: '하버드 & MIT',
                activities: [
                    { time: '10:00', title: '하버드 야드 캠퍼스 투어', type: 'library', location: 'Harvard University' },
                    { time: '13:00', title: '하버드 스퀘어 런치', type: 'coffee', location: 'Harvard Square' },
                    { time: '17:00', title: 'MIT & 찰스강 산책', type: 'map', location: 'Massachusetts Institute of Technology' }
                ]
            },
            {
                title: '펜웨이 & 백베이',
                activities: [
                    { time: '10:00', title: '보스턴 미술관', type: 'palette', location: 'Museum of Fine Arts Boston' },
                    { time: '13:30', title: '펜웨이 파크 투어', type: 'ticket', location: 'Fenway Park' },
                    { time: '18:00', title: '뉴베리 스트리트 저녁', type: 'shopping-bag', location: 'Newbury Street' }
                ]
            },
            {
                title: '하버 & 시포트',
                activities: [
                    { time: '10:00', title: '보스턴 티 파티 박물관', type: 'building-2', location: 'Boston Tea Party Ships & Museum' },
                    { time: '13:00', title: '시포트 런치', type: 'utensils-crossed', location: 'Seaport District Boston' },
                    { time: '17:30', title: '하버워크 선셋', type: 'map', location: 'Boston Harborwalk' }
                ]
            },
            {
                title: '비컨힐 & 이동',
                activities: [
                    { time: '09:30', title: '비컨힐 & 에이콘 스트리트', type: 'camera', location: 'Acorn Street' },
                    { time: '12:30', title: '보스턴 퍼블릭 가든', type: 'trees', location: 'Boston Public Garden' },
                    { time: '16:00', title: '로건 공항 이동', type: 'plane', location: 'Boston Logan International Airport' }
                ]
            }
        ]
    },
    'washington-dc': {
        id: 'washington-dc',
        city: 'Washington, D.C.',
        country: 'United States',
        summary: '내셔널 몰의 링컨 기념관, 스미소니언, 백악관과 의사당, 조지타운, 알링턴을 묶은 워싱턴 D.C. 템플릿입니다.',
        footer: 'Washington works when monuments, free museums, and Georgetown brick stay in one loop.',
        heroImage: 'assets/heroes/washington-dc.jpg',
        heroPosition: 'center center',
        accent: '#F9A8D4',
        accentRgb: '249, 168, 212',
        ink: '#1E2A47',
        inkRgb: '30, 42, 71',
        overlayTop: 'rgba(30, 42, 71, 0.40)',
        overlayBottom: 'rgba(15, 20, 40, 0.90)',
        timeZone: 'America/New_York',
        weather: { latitude: 38.9072, longitude: -77.0369 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 16,
        phraseLabel: 'English',
        phrases: [
            { text: 'Are the museums free?', pron: '[아 더 뮤지엄즈 프리]', meaning: '박물관 무료예요?' },
            { text: 'Do I need a timed pass?', pron: '[두 아이 니드 어 타임드 패스]', meaning: '시간 지정 입장권 필요해요?' },
            { text: 'Stand right, walk left', pron: '[스탠드 라이트 워크 레프트]', meaning: '에스컬레이터는 오른쪽 서고 왼쪽으로 걷기' },
            { text: 'Where’s the nearest Metro?', pron: '[웨어즈 더 니어리스트 메트로]', meaning: '가장 가까운 메트로역 어디예요?' },
            { text: 'Can I bring a bag inside?', pron: '[캔 아이 브링 어 백 인사이드]', meaning: '가방 들고 들어갈 수 있어요?' },
            { text: 'Which exit for the Mall?', pron: '[위치 엑싯 포 더 몰]', meaning: '내셔널 몰은 어느 출구예요?' }
        ],
        itineraryTemplate: [
            {
                title: '내셔널 몰 서쪽',
                activities: [
                    { time: '09:30', title: '링컨 기념관', type: 'landmark', location: 'Lincoln Memorial' },
                    { time: '13:00', title: '워싱턴 기념탑 & 리플렉팅 풀', type: 'camera', location: 'Washington Monument' },
                    { time: '18:00', title: '타이들 베이슨 제퍼슨 기념관 야경', type: 'moon-star', location: 'Jefferson Memorial' }
                ]
            },
            {
                title: '스미소니언',
                activities: [
                    { time: '10:00', title: '국립 항공우주박물관', type: 'building-2', location: 'National Air and Space Museum' },
                    { time: '13:30', title: '국립 자연사박물관', type: 'building-2', location: 'National Museum of Natural History' },
                    { time: '17:30', title: '국립 미술관', type: 'palette', location: 'National Gallery of Art' }
                ]
            },
            {
                title: '백악관 & 캐피톨',
                activities: [
                    { time: '09:30', title: '백악관', type: 'landmark', location: 'The White House' },
                    { time: '13:00', title: '국회의사당 투어', type: 'landmark', location: 'United States Capitol' },
                    { time: '17:30', title: '의회도서관', type: 'library', location: 'Library of Congress' }
                ]
            },
            {
                title: '알링턴 & 조지타운',
                activities: [
                    { time: '09:30', title: '알링턴 국립묘지', type: 'landmark', location: 'Arlington National Cemetery' },
                    { time: '13:00', title: '조지타운 M 스트리트 런치', type: 'utensils-crossed', location: 'Georgetown Washington DC' },
                    { time: '17:30', title: '조지타운 워터프런트 파크', type: 'sun', location: 'Georgetown Waterfront Park' }
                ]
            },
            {
                title: '내셔널 아카이브 & 이동',
                activities: [
                    { time: '09:30', title: '국립문서보관소 (독립선언서)', type: 'building', location: 'National Archives Museum' },
                    { time: '12:30', title: '더 워프 브런치', type: 'coffee', location: 'The Wharf Washington DC' },
                    { time: '16:00', title: '덜레스 공항 이동', type: 'plane', location: 'Washington Dulles International Airport' }
                ]
            }
        ]
    },
    'salt-lake-city': {
        id: 'salt-lake-city',
        city: 'Salt Lake City',
        country: 'United States',
        summary: '템플 스퀘어와 주 의사당, 앤털로프 아일랜드, 파크시티, 와사치 캐니언을 로드트립으로 묶은 솔트레이크시티 템플릿입니다.',
        footer: 'Salt Lake City works when granite temples, salt flats, and mountain roads share the week.',
        heroImage: 'assets/heroes/salt-lake-city.jpg',
        heroPosition: 'center center',
        accent: '#D084FC',
        accentRgb: '208, 132, 252',
        ink: '#2E1065',
        inkRgb: '46, 16, 101',
        overlayTop: 'rgba(46, 16, 101, 0.38)',
        overlayBottom: 'rgba(24, 12, 48, 0.90)',
        timeZone: 'America/Denver',
        weather: { latitude: 40.7608, longitude: -111.8910 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 18,
        phraseLabel: 'English',
        phrases: [
            { text: 'Does TRAX go to the airport?', pron: '[더즈 트랙스 고 투 디 에어포트]', meaning: '트랙스(경전철) 공항까지 가요?' },
            { text: 'Is the canyon road open?', pron: '[이즈 더 캐니언 로드 오픈]', meaning: '캐니언 도로 열려 있어요?' },
            { text: 'Are you open on Sundays?', pron: '[아 유 오픈 온 선데이즈]', meaning: '일요일에도 영업해요?' },
            { text: 'I need to fill up the tank', pron: '[아이 니드 투 필 업 더 탱크]', meaning: '기름 넣어야 해요' },
            { text: 'What’s the elevation here?', pron: '[왓츠 디 엘리베이션 히어]', meaning: '여기 고도가 얼마예요?' },
            { text: 'Do you rent gear here?', pron: '[두 유 렌트 기어 히어]', meaning: '여기서 장비 대여돼요?' }
        ],
        itineraryTemplate: [
            {
                title: '템플 스퀘어 & 다운타운',
                activities: [
                    { time: '10:00', title: '템플 스퀘어', type: 'landmark', location: 'Temple Square' },
                    { time: '13:00', title: '시티 크릭 센터 런치', type: 'shopping-cart', location: 'City Creek Center' },
                    { time: '18:00', title: '유타 주 의사당 야경', type: 'building', location: 'Utah State Capitol' }
                ]
            },
            {
                title: '앤털로프 아일랜드',
                activities: [
                    { time: '09:00', title: '앤털로프 아일랜드 주립공원 & 들소', type: 'trees', location: 'Antelope Island State Park' },
                    { time: '12:30', title: '버팔로 포인트 트레일', type: 'map', location: 'Buffalo Point Trail' },
                    { time: '17:30', title: '그레이트 솔트레이크 선셋', type: 'sun', location: 'Great Salt Lake' }
                ]
            },
            {
                title: '파크시티',
                activities: [
                    { time: '09:30', title: '파크시티 메인 스트리트', type: 'map', location: 'Park City Main Street' },
                    { time: '13:00', title: '유타 올림픽 파크', type: 'ticket', location: 'Utah Olympic Park' },
                    { time: '17:30', title: '파크시티 마운틴 디너', type: 'utensils-crossed', location: 'Park City Mountain Resort' }
                ]
            },
            {
                title: '와사치 캐니언',
                activities: [
                    { time: '09:00', title: '리틀 코튼우드 캐니언 드라이브', type: 'map', location: 'Little Cottonwood Canyon' },
                    { time: '12:30', title: '스노버드 에어리얼 트램', type: 'sparkles', location: 'Snowbird' },
                    { time: '17:30', title: '엔사인 피크 선셋', type: 'binoculars', location: 'Ensign Peak' }
                ]
            },
            {
                title: '자연사 박물관 & 이동',
                activities: [
                    { time: '09:30', title: '유타 자연사 박물관', type: 'building-2', location: 'Natural History Museum of Utah' },
                    { time: '12:30', title: '리버티 파크 브런치', type: 'coffee', location: 'Liberty Park Salt Lake City' },
                    { time: '16:00', title: '솔트레이크시티 공항 이동', type: 'plane', location: 'Salt Lake City International Airport' }
                ]
            }
        ]
    },
    calgary: {
        id: 'calgary',
        city: 'Calgary (Banff)',
        country: 'Canada',
        summary: '캘거리 타워에서 밴프 곤돌라, 모레인 호수, 레이크 루이스, 아이스필드 파크웨이까지 이어지는 로키 로드트립 템플릿입니다.',
        footer: 'The Rockies reward early starts, glacier-blue water, and one more lookout.',
        heroImage: 'assets/heroes/calgary.jpg',
        heroPosition: 'center center',
        accent: '#5EEAD4',
        accentRgb: '94, 234, 212',
        ink: '#0C2B2B',
        inkRgb: '12, 43, 43',
        overlayTop: 'rgba(12, 43, 43, 0.38)',
        overlayBottom: 'rgba(8, 24, 26, 0.90)',
        timeZone: 'America/Edmonton',
        weather: { latitude: 51.0447, longitude: -114.0719 },
        currency: { code: 'CAD', symbol: 'C$', locale: 'en-CA' },
        startOffsetDays: 20,
        phraseLabel: 'English',
        phrases: [
            { text: 'One Parks Canada pass, please', pron: '[원 팍스 캐나다 패스 플리즈]', meaning: '파크스 캐나다 입장권 하나 주세요' },
            { text: 'Is the Moraine Lake shuttle running?', pron: '[이즈 더 모레인 레이크 셔틀 러닝]', meaning: '모레인 호수 셔틀 운행해요?' },
            { text: 'Any bears on the trail?', pron: '[애니 베어즈 온 더 트레일]', meaning: '트레일에 곰 나왔어요?' },
            { text: 'What time is the last gondola?', pron: '[왓 타임 이즈 더 라스트 곤돌라]', meaning: '마지막 곤돌라 몇 시예요?' },
            { text: 'Do I need winter tires?', pron: '[두 아이 니드 윈터 타이어즈]', meaning: '겨울용 타이어 필요해요?' },
            { text: 'A double-double, please', pron: '[어 더블 더블 플리즈]', meaning: '더블더블(팀홀튼 커피) 하나 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '캘거리 다운타운',
                activities: [
                    { time: '10:00', title: '캘거리 타워', type: 'tower-control', location: 'Calgary Tower' },
                    { time: '13:00', title: '스티븐 애비뉴 런치', type: 'utensils-crossed', location: 'Stephen Avenue Walk' },
                    { time: '17:30', title: '피스 브리지 & 프린스 아일랜드 파크', type: 'bridge', location: 'Peace Bridge Calgary' }
                ]
            },
            {
                title: '밴프 타운 & 설퍼산',
                activities: [
                    { time: '09:30', title: '밴프 곤돌라 (설퍼산)', type: 'binoculars', location: 'Banff Gondola' },
                    { time: '13:00', title: '밴프 애비뉴 런치', type: 'utensils-crossed', location: 'Banff Avenue' },
                    { time: '18:00', title: '밴프 어퍼 핫 스프링스', type: 'sparkles', location: 'Banff Upper Hot Springs' }
                ]
            },
            {
                title: '모레인 호수 & 레이크 루이스',
                activities: [
                    { time: '07:30', title: '모레인 호수 (셔틀 예약)', type: 'camera', location: 'Moraine Lake' },
                    { time: '12:30', title: '샤토 레이크 루이스 런치', type: 'utensils-crossed', location: 'Fairmont Chateau Lake Louise' },
                    { time: '16:30', title: '레이크 루이스 카누', type: 'ship', location: 'Lake Louise Boathouse' }
                ]
            },
            {
                title: '아이스필드 파크웨이 (재스퍼 방향)',
                activities: [
                    { time: '08:30', title: '보우 호수', type: 'camera', location: 'Bow Lake' },
                    { time: '11:00', title: '페이토 호수 전망대', type: 'binoculars', location: 'Peyto Lake' },
                    { time: '15:00', title: '컬럼비아 아이스필드 스카이워크', type: 'sparkles', location: 'Columbia Icefield Skywalk' }
                ]
            },
            {
                title: '존스턴 캐니언 & 이동',
                activities: [
                    { time: '08:30', title: '존스턴 캐니언 하이킹', type: 'map', location: 'Johnston Canyon' },
                    { time: '12:30', title: '캔모어 런치', type: 'coffee', location: 'Canmore' },
                    { time: '16:30', title: '캘거리 공항 이동', type: 'plane', location: 'Calgary International Airport' }
                ]
            }
        ]
    },
    brisbane: {
        id: 'brisbane',
        city: 'Brisbane',
        country: 'Australia',
        summary: '사우스뱅크, 스토리 브리지, 론파인 코알라, 마운트 쿠사 전망에 골드코스트 당일치기를 더한 브리즈번 템플릿입니다.',
        footer: 'Brisbane works when river light, koalas, and a Gold Coast beach day stay easy.',
        heroImage: 'assets/heroes/brisbane.jpg',
        heroPosition: 'center center',
        accent: '#A3E635',
        accentRgb: '163, 230, 53',
        ink: '#1A2E12',
        inkRgb: '26, 46, 18',
        overlayTop: 'rgba(26, 46, 18, 0.38)',
        overlayBottom: 'rgba(14, 26, 14, 0.90)',
        timeZone: 'Australia/Brisbane',
        weather: { latitude: -27.4698, longitude: 153.0251 },
        currency: { code: 'AUD', symbol: 'A$', locale: 'en-AU' },
        startOffsetDays: 12,
        phraseLabel: 'English',
        phrases: [
            { text: 'Where do I tap on?', pron: '[웨어 두 아이 탭 온]', meaning: '교통카드 어디에 찍어요?' },
            { text: 'Does the CityCat stop here?', pron: '[더즈 더 시티캣 스탑 히어]', meaning: '시티캣(페리) 여기 서요?' },
            { text: 'This arvo works for me', pron: '[디스 아보 웍스 포 미]', meaning: '오늘 오후 괜찮아요 (호주식 표현)' },
            { text: 'Can I hold a koala?', pron: '[캔 아이 홀드 어 코알라]', meaning: '코알라 안아볼 수 있어요?' },
            { text: 'Do you sell sunscreen?', pron: '[두 유 셀 선스크린]', meaning: '선크림 팔아요?' },
            { text: 'Ta, mate', pron: '[타 메이트]', meaning: '고마워요 (호주식 표현)' }
        ],
        itineraryTemplate: [
            {
                title: '사우스뱅크 & 시티',
                activities: [
                    { time: '10:00', title: '사우스뱅크 파크랜드 & 스트리츠 비치', type: 'sun', location: 'South Bank Parklands' },
                    { time: '13:00', title: '퀸즐랜드 현대미술관(GOMA)', type: 'palette', location: 'Gallery of Modern Art Brisbane' },
                    { time: '18:00', title: '휠 오브 브리즈번 & 강변 야경', type: 'sparkles', location: 'The Wheel of Brisbane' }
                ]
            },
            {
                title: '스토리 브리지 & 뉴팜',
                activities: [
                    { time: '09:30', title: '스토리 브리지 어드벤처 클라임', type: 'bridge', location: 'Story Bridge' },
                    { time: '13:00', title: '하워드 스미스 워브스 런치', type: 'utensils-crossed', location: 'Howard Smith Wharves' },
                    { time: '17:30', title: '뉴팜 파크 & 브리즈번 파워하우스', type: 'trees', location: 'New Farm Park' }
                ]
            },
            {
                title: '론파인 & 마운트 쿠사',
                activities: [
                    { time: '09:30', title: '론파인 코알라 보호구역', type: 'camera', location: 'Lone Pine Koala Sanctuary' },
                    { time: '13:30', title: '마운트 쿠사 식물원', type: 'trees', location: 'Brisbane Botanic Gardens Mt Coot-tha' },
                    { time: '17:30', title: '마운트 쿠사 전망대 선셋', type: 'binoculars', location: 'Mount Coot-tha Lookout' }
                ]
            },
            {
                title: '골드코스트 당일치기',
                activities: [
                    { time: '09:00', title: '서퍼스 파라다이스 비치', type: 'sun', location: 'Surfers Paradise Beach' },
                    { time: '13:00', title: '스카이포인트 전망대', type: 'tower-control', location: 'SkyPoint Observation Deck' },
                    { time: '17:00', title: '버레이 헤즈 선셋', type: 'camera', location: 'Burleigh Heads' }
                ]
            },
            {
                title: '퀸 스트리트 & 이동',
                activities: [
                    { time: '09:30', title: '시티 보타닉 가든 산책', type: 'trees', location: 'City Botanic Gardens Brisbane' },
                    { time: '12:30', title: '퀸 스트리트 몰 쇼핑', type: 'shopping-bag', location: 'Queen Street Mall' },
                    { time: '16:00', title: '브리즈번 공항 이동', type: 'plane', location: 'Brisbane Airport' }
                ]
            }
        ]
    },
    melbourne: {
        id: 'melbourne',
        city: 'Melbourne',
        country: 'Australia',
        summary: '플린더스 역과 호시어 레인, 퀸빅토리아 마켓, 세인트 킬다에 그레이트 오션 로드와 야라 밸리 당일치기를 더한 멜버른 템플릿입니다.',
        footer: 'Melbourne runs on laneway coffee, street art, and one long coastal drive.',
        heroImage: 'assets/heroes/melbourne.jpg',
        heroPosition: 'center center',
        accent: '#818CF8',
        accentRgb: '129, 140, 248',
        ink: '#1C1B2F',
        inkRgb: '28, 27, 47',
        overlayTop: 'rgba(28, 27, 47, 0.42)',
        overlayBottom: 'rgba(16, 15, 30, 0.92)',
        timeZone: 'Australia/Melbourne',
        weather: { latitude: -37.8136, longitude: 144.9631 },
        currency: { code: 'AUD', symbol: 'A$', locale: 'en-AU' },
        startOffsetDays: 14,
        phraseLabel: 'English',
        phrases: [
            { text: 'Where can I top up my Myki?', pron: '[웨어 캔 아이 탑 업 마이 마이키]', meaning: '마이키(교통카드) 어디서 충전해요?' },
            { text: 'Is this tram in the free zone?', pron: '[이즈 디스 트램 인 더 프리 존]', meaning: '이 트램 무료 구간이에요?' },
            { text: 'A long black, please', pron: '[어 롱 블랙 플리즈]', meaning: '롱블랙 한 잔 주세요' },
            { text: 'Four seasons in one day', pron: '[포 시즌스 인 원 데이]', meaning: '하루에 사계절 다 있어요 (멜버른 날씨 표현)' },
            { text: 'Who’s playing at the G tonight?', pron: '[후즈 플레잉 앳 더 지 투나잇]', meaning: '오늘 MCG에 어느 팀 경기해요?' },
            { text: 'Which laneway is that café in?', pron: '[위치 레인웨이 이즈 댓 카페 인]', meaning: '그 카페 어느 골목에 있어요?' }
        ],
        itineraryTemplate: [
            {
                title: 'CBD & 레인웨이',
                activities: [
                    { time: '09:00', title: '플린더스 스트리트 역 & 페더레이션 스퀘어', type: 'landmark', location: 'Flinders Street Station' },
                    { time: '12:00', title: '호시어 레인 & 디그레이브스 골목', type: 'palette', location: 'Hosier Lane' },
                    { time: '18:00', title: '멜버른 스카이덱 야경', type: 'building', location: 'Melbourne Skydeck' }
                ]
            },
            {
                title: '퀸빅토리아 마켓 & 칼튼',
                activities: [
                    { time: '09:00', title: '퀸 빅토리아 마켓', type: 'store', location: 'Queen Victoria Market' },
                    { time: '13:00', title: '라이곤 스트리트 이탈리안 런치', type: 'utensils-crossed', location: 'Lygon Street' },
                    { time: '17:00', title: '칼튼 가든 & 왕립전시관', type: 'landmark', location: 'Royal Exhibition Building' }
                ]
            },
            {
                title: '그레이트 오션 로드 당일치기',
                activities: [
                    { time: '08:00', title: '토키 & 벨스 비치', type: 'sun', location: 'Bells Beach' },
                    { time: '12:30', title: '아폴로 베이 런치', type: 'utensils-crossed', location: 'Apollo Bay' },
                    { time: '16:30', title: '12 사도 바위', type: 'camera', location: 'Twelve Apostles' }
                ]
            },
            {
                title: '세인트 킬다 & 사우스 야라',
                activities: [
                    { time: '10:00', title: '왕립식물원 & 추모 사원', type: 'trees', location: 'Royal Botanic Gardens Victoria' },
                    { time: '13:00', title: '채플 스트리트 런치 & 쇼핑', type: 'shopping-bag', location: 'Chapel Street South Yarra' },
                    { time: '17:30', title: '세인트 킬다 피어 & 펭귄', type: 'sun', location: 'St Kilda Pier' }
                ]
            },
            {
                title: '야라 밸리 & 이동',
                activities: [
                    { time: '09:30', title: '야라 밸리 와이너리 (도멘 샹동)', type: 'sparkles', location: 'Domaine Chandon Yarra Valley' },
                    { time: '12:30', title: '힐스빌 런치', type: 'utensils-crossed', location: 'Healesville' },
                    { time: '16:30', title: '멜버른 공항 이동', type: 'plane', location: 'Melbourne Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_WEST;
