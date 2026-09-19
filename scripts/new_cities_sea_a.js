// 자동 병합용 조각 파일 — app.js의 DESTINATIONS에 합쳐집니다
const NEW_CITIES_SEA_A = {
    'da-nang': {
        id: 'da-nang',
        city: 'Da Nang',
        country: 'Vietnam',
        summary: '미케 비치 아침, 바나힐 골든 브릿지, 호이안 등불, 용다리 불쇼까지 바다와 산과 옛 마을을 한 번에 도는 다낭 템플릿입니다.',
        footer: 'Da Nang is a beach morning, a mountain bridge, and a lantern town after dark.',
        heroImage: 'assets/heroes/da-nang.jpg',
        heroPosition: 'center center',
        accent: '#0F940D',
        accentRgb: '15, 148, 13',
        ink: '#0F2A2E',
        inkRgb: '15, 42, 46',
        overlayTop: 'rgba(15, 42, 46, 0.44)',
        overlayBottom: 'rgba(10, 24, 28, 0.90)',
        timeZone: 'Asia/Ho_Chi_Minh',
        weather: { latitude: 16.0544, longitude: 108.2022 },
        currency: { code: 'VND', symbol: '₫', locale: 'vi-VN' },
        startOffsetDays: 9,
        phraseLabel: 'Tiếng Việt',
        phrases: [
            { text: 'Bao nhiêu tiền?', pron: '[바오 니에우 띠엔]', meaning: '얼마예요?' },
            { text: 'Đắt quá!', pron: '[닷 꾸아]', meaning: '너무 비싸요!' },
            { text: 'Bớt chút được không?', pron: '[벗 쭛 드억 콩]', meaning: '조금 깎아 주실 수 있나요?' },
            { text: 'Làm ơn đưa tôi đến bãi biển Mỹ Khê', pron: '[람 언 드어 또이 덴 바이 비엔 미 케]', meaning: '미케 비치까지 데려다 주세요' },
            { text: 'Không cay', pron: '[콩 까이]', meaning: '안 맵게 해주세요' },
            { text: 'Cho tôi một ly cà phê sữa đá', pron: '[쪼 또이 못 리 까페 스어 다]', meaning: '연유 아이스커피 한 잔 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '미케 비치 & 손짜',
                activities: [
                    { time: '09:30', title: '미케 비치 아침 산책', type: 'sun', location: 'My Khe Beach' },
                    { time: '13:00', title: '영응사 해수관음상', type: 'landmark', location: 'Linh Ung Pagoda' },
                    { time: '18:30', title: '안트엉 거리 저녁', type: 'utensils-crossed', location: 'An Thuong Tourist Area' }
                ]
            },
            {
                title: '바나힐',
                activities: [
                    { time: '08:00', title: '바나힐 케이블카 탑승', type: 'ticket', location: 'Sun World Ba Na Hills' },
                    { time: '10:00', title: '골든 브릿지', type: 'bridge', location: 'Golden Bridge' },
                    { time: '13:00', title: '프렌치 빌리지 점심 & 판타지 파크', type: 'sparkles', location: 'French Village Ba Na Hills' }
                ]
            },
            {
                title: '호이안 올드타운',
                activities: [
                    { time: '10:00', title: '내원교 & 옛 거리 산책', type: 'landmark', location: 'Japanese Covered Bridge' },
                    { time: '13:00', title: '까오러우 점심', type: 'utensils-crossed', location: 'Hoi An Market' },
                    { time: '18:30', title: '투본강 등불 야경 & 야시장', type: 'moon-star', location: 'Hoi An Night Market' }
                ]
            },
            {
                title: '오행산 & 한강',
                activities: [
                    { time: '09:30', title: '오행산 동굴 사원', type: 'landmark', location: 'Marble Mountains' },
                    { time: '13:00', title: '한시장 로컬 점심', type: 'store', location: 'Han Market' },
                    { time: '20:30', title: '용다리 야경 & 불쇼', type: 'sparkles', location: 'Dragon Bridge' }
                ]
            },
            {
                title: '마지막 카페 & 이동',
                activities: [
                    { time: '09:30', title: '콩카페 코코넛 커피', type: 'coffee', location: 'Cong Caphe Da Nang' },
                    { time: '12:30', title: '빈컴 플라자 마지막 쇼핑', type: 'shopping-bag', location: 'Vincom Plaza Da Nang' },
                    { time: '16:30', title: '다낭 공항 이동', type: 'plane', location: 'Da Nang International Airport' }
                ]
            }
        ]
    },
    'nha-trang': {
        id: 'nha-trang',
        city: 'Nha Trang',
        country: 'Vietnam',
        summary: '포나가르 탑과 롱선사, 머드 온천, 혼문섬 스노클링, 빈원더스를 해변 도시의 느긋한 리듬으로 엮은 나트랑 템플릿입니다.',
        footer: 'Nha Trang works best when the bay does most of the planning.',
        heroImage: 'assets/heroes/nha-trang.jpg',
        heroPosition: 'center center',
        accent: '#08B263',
        accentRgb: '8, 178, 99',
        ink: '#0C2A3A',
        inkRgb: '12, 42, 58',
        overlayTop: 'rgba(12, 42, 58, 0.44)',
        overlayBottom: 'rgba(8, 22, 34, 0.90)',
        timeZone: 'Asia/Ho_Chi_Minh',
        weather: { latitude: 12.2388, longitude: 109.1967 },
        currency: { code: 'VND', symbol: '₫', locale: 'vi-VN' },
        startOffsetDays: 10,
        phraseLabel: 'Tiếng Việt',
        phrases: [
            { text: 'Xin lỗi', pron: '[씬 로이]', meaning: '죄송합니다 / 실례합니다' },
            { text: 'Nhà vệ sinh ở đâu?', pron: '[냐 베 신 어 더우]', meaning: '화장실이 어디예요?' },
            { text: 'Tôi không hiểu', pron: '[또이 콩 히에우]', meaning: '잘 이해하지 못했어요' },
            { text: 'Ngon quá!', pron: '[응온 꾸아]', meaning: '정말 맛있어요!' },
            { text: 'Tôi muốn gọi món', pron: '[또이 무온 고이 몬]', meaning: '주문할게요' },
            { text: 'Hẹn gặp lại', pron: '[헨 갑 라이]', meaning: '또 만나요' }
        ],
        itineraryTemplate: [
            {
                title: '나트랑 비치 & 시내',
                activities: [
                    { time: '09:30', title: '나트랑 비치', type: 'sun', location: 'Nha Trang Beach' },
                    { time: '13:00', title: '담시장 로컬 점심', type: 'store', location: 'Dam Market' },
                    { time: '18:30', title: '나트랑 야시장', type: 'sparkles', location: 'Nha Trang Night Market' }
                ]
            },
            {
                title: '포나가르 & 머드 온천',
                activities: [
                    { time: '09:00', title: '롱선사 백불상', type: 'landmark', location: 'Long Son Pagoda' },
                    { time: '11:00', title: '포나가르 참탑', type: 'landmark', location: 'Po Nagar Cham Towers' },
                    { time: '15:30', title: '탑바 머드 온천', type: 'sparkles', location: 'Thap Ba Hot Spring Center' }
                ]
            },
            {
                title: '혼문섬 스노클링',
                activities: [
                    { time: '08:30', title: '혼문섬 스노클링 투어', type: 'ship', location: 'Hon Mun Island' },
                    { time: '12:30', title: '혼땀섬 해변 점심', type: 'sun', location: 'Hon Tam Island' },
                    { time: '18:30', title: '해변 브루하우스 저녁', type: 'utensils-crossed', location: 'Louisiane Brewhouse' }
                ]
            },
            {
                title: '빈원더스 & 혼쫑곶',
                activities: [
                    { time: '08:30', title: '빈원더스 케이블카 입장', type: 'ticket', location: 'VinWonders Nha Trang' },
                    { time: '16:00', title: '혼쫑곶 노을', type: 'camera', location: 'Hon Chong Promontory' },
                    { time: '19:00', title: '세일링 클럽 비치 디너', type: 'moon-star', location: 'Sailing Club Nha Trang' }
                ]
            },
            {
                title: '마지막 한 끼 & 이동',
                activities: [
                    { time: '09:30', title: '나트랑 대성당', type: 'landmark', location: 'Nha Trang Cathedral' },
                    { time: '12:30', title: '넴느엉 점심', type: 'utensils-crossed', location: 'Nem Nuong Dang Van Quyen' },
                    { time: '16:30', title: '깜란 공항 이동', type: 'plane', location: 'Cam Ranh International Airport' }
                ]
            }
        ]
    },
    'phu-quoc': {
        id: 'phu-quoc',
        city: 'Phu Quoc',
        country: 'Vietnam',
        summary: '롱비치와 사오비치, 혼똠 케이블카와 선셋타운 키스 브릿지, 즈엉동 야시장까지 섬 남북을 오가는 푸꾸옥 템플릿입니다.',
        footer: 'Phu Quoc is white sand by day and a sunset show by night.',
        heroImage: 'assets/heroes/phu-quoc.jpg',
        heroPosition: 'center center',
        accent: '#EA0C18',
        accentRgb: '234, 12, 24',
        ink: '#3A1A0A',
        inkRgb: '58, 26, 10',
        overlayTop: 'rgba(58, 26, 10, 0.42)',
        overlayBottom: 'rgba(30, 16, 10, 0.90)',
        timeZone: 'Asia/Ho_Chi_Minh',
        weather: { latitude: 10.2899, longitude: 103.9840 },
        currency: { code: 'VND', symbol: '₫', locale: 'vi-VN' },
        startOffsetDays: 12,
        phraseLabel: 'Tiếng Việt',
        phrases: [
            { text: 'Tôi muốn đi đến đây', pron: '[또이 무온 디 덴 더이]', meaning: '여기로 가고 싶어요' },
            { text: 'Có bán kem chống nắng không?', pron: '[꼬 반 껨 쫑 낭 콩]', meaning: '선크림 파나요?' },
            { text: 'Mấy giờ mặt trời lặn?', pron: '[머이 저 맛 쩌이 란]', meaning: '해가 몇 시에 지나요?' },
            { text: 'Cho tôi nước dừa', pron: '[쪼 또이 느억 즈어]', meaning: '코코넛 주스 주세요' },
            { text: 'Hải sản có tươi không?', pron: '[하이 산 꼬 뜨어이 콩]', meaning: '해산물 신선한가요?' },
            { text: 'Giúp tôi với!', pron: '[줍 또이 버이]', meaning: '도와주세요!' }
        ],
        itineraryTemplate: [
            {
                title: '즈엉동 & 롱비치',
                activities: [
                    { time: '10:00', title: '롱비치 오전', type: 'sun', location: 'Long Beach Phu Quoc' },
                    { time: '13:00', title: '진꺼우 사당 바위', type: 'landmark', location: 'Dinh Cau Temple' },
                    { time: '18:30', title: '즈엉동 야시장 해산물', type: 'sparkles', location: 'Phu Quoc Night Market' }
                ]
            },
            {
                title: '남부 — 사오비치 & 선셋타운',
                activities: [
                    { time: '09:00', title: '사오비치 백사장', type: 'sun', location: 'Bai Sao Beach' },
                    { time: '13:00', title: '혼똠 해상 케이블카', type: 'ticket', location: 'Sun World Hon Thom' },
                    { time: '18:00', title: '선셋타운 키스 브릿지 노을', type: 'bridge', location: 'Kiss Bridge' }
                ]
            },
            {
                title: '북부 — 빈원더스 & 그랜드월드',
                activities: [
                    { time: '09:00', title: '빈원더스 푸꾸옥', type: 'ticket', location: 'VinWonders Phu Quoc' },
                    { time: '13:30', title: '빈펄 사파리', type: 'trees', location: 'Vinpearl Safari Phu Quoc' },
                    { time: '18:30', title: '그랜드월드 베니스 운하 야경', type: 'lightbulb', location: 'Grand World Phu Quoc' }
                ]
            },
            {
                title: '동부 & 중부 로컬',
                activities: [
                    { time: '09:30', title: '함닌 어촌 마을', type: 'ship', location: 'Ham Ninh Fishing Village' },
                    { time: '12:30', title: '수오이짜인 폭포 산책', type: 'trees', location: 'Suoi Tranh Waterfall' },
                    { time: '16:00', title: '응옥히엔 진주농장', type: 'gift', location: 'Ngoc Hien Pearl Farm' }
                ]
            },
            {
                title: '마지막 쇼핑 & 이동',
                activities: [
                    { time: '09:30', title: '즈엉동 시장 아침', type: 'store', location: 'Duong Dong Market' },
                    { time: '12:30', title: '킹콩마트 기념품', type: 'shopping-bag', location: 'King Kong Mart Phu Quoc' },
                    { time: '16:00', title: '푸꾸옥 공항 이동', type: 'plane', location: 'Phu Quoc International Airport' }
                ]
            }
        ]
    },
    'chiang-mai': {
        id: 'chiang-mai',
        city: 'Chiang Mai',
        country: 'Thailand',
        summary: '올드시티 사원, 도이수텝, 님만해민 카페, 코끼리 보호구역과 도이인타논까지 란나의 산과 절을 느리게 걷는 치앙마이 템플릿입니다.',
        footer: 'Chiang Mai slows down for temples, mountains, and one more coffee.',
        heroImage: 'assets/heroes/chiang-mai.jpg',
        heroPosition: 'center center',
        accent: '#A14E07',
        accentRgb: '161, 78, 7',
        ink: '#2A1A0E',
        inkRgb: '42, 26, 14',
        overlayTop: 'rgba(42, 26, 14, 0.42)',
        overlayBottom: 'rgba(24, 16, 10, 0.90)',
        timeZone: 'Asia/Bangkok',
        weather: { latitude: 18.7883, longitude: 98.9853 },
        currency: { code: 'THB', symbol: '฿', locale: 'th-TH' },
        startOffsetDays: 11,
        phraseLabel: 'ไทย',
        phrases: [
            { text: 'ไปที่นี่', pron: '[빠이 티 니]', meaning: '여기로 가 주세요' },
            { text: 'อร่อยมาก', pron: '[아로이 막]', meaning: '아주 맛있어요' },
            { text: 'ลดหน่อยได้ไหม', pron: '[롯 너이 다이 마이]', meaning: '조금 깎아 주실 수 있나요?' },
            { text: 'ไม่เป็นไร', pron: '[마이 뻰 라이]', meaning: '괜찮아요' },
            { text: 'ขอน้ำเปล่า', pron: '[커 남 쁠라오]', meaning: '생수 주세요' },
            { text: 'ถ่ายรูปได้ไหม', pron: '[타이 룹 다이 마이]', meaning: '사진 찍어도 되나요?' }
        ],
        itineraryTemplate: [
            {
                title: '올드시티 사원',
                activities: [
                    { time: '09:30', title: '왓 체디루앙', type: 'landmark', location: 'Wat Chedi Luang' },
                    { time: '12:30', title: '카오소이 점심', type: 'utensils-crossed', location: 'Khao Soi Khun Yai' },
                    { time: '18:00', title: '타페 게이트 & 선데이 워킹 스트리트', type: 'sparkles', location: 'Tha Phae Gate' }
                ]
            },
            {
                title: '도이수텝 & 님만해민',
                activities: [
                    { time: '08:00', title: '왓 프라탓 도이수텝', type: 'landmark', location: 'Wat Phra That Doi Suthep' },
                    { time: '13:00', title: '님만해민 카페 거리', type: 'coffee', location: 'Nimmanhaemin Road' },
                    { time: '18:30', title: '원 님만 저녁', type: 'shopping-bag', location: 'One Nimman' }
                ]
            },
            {
                title: '매림 & 코끼리 보호구역',
                activities: [
                    { time: '07:30', title: '코끼리 보호구역 방문', type: 'trees', location: 'Elephant Nature Park' },
                    { time: '14:30', title: '매사 폭포', type: 'trees', location: 'Mae Sa Waterfall' },
                    { time: '19:00', title: '나이트 바자', type: 'sparkles', location: 'Chiang Mai Night Bazaar' }
                ]
            },
            {
                title: '도이인타논',
                activities: [
                    { time: '08:00', title: '도이인타논 정상 & 운해', type: 'trees', location: 'Doi Inthanon National Park' },
                    { time: '12:30', title: '와치라탄 폭포', type: 'camera', location: 'Wachirathan Waterfall' },
                    { time: '18:30', title: '우아라이 새터데이 워킹 스트리트', type: 'shopping-bag', location: 'Wualai Walking Street' }
                ]
            },
            {
                title: '마지막 시장 & 이동',
                activities: [
                    { time: '09:30', title: '와로롯 시장 아침', type: 'store', location: 'Warorot Market' },
                    { time: '12:30', title: '왓 시수판 은사원', type: 'landmark', location: 'Wat Sri Suphan' },
                    { time: '16:30', title: '치앙마이 공항 이동', type: 'plane', location: 'Chiang Mai International Airport' }
                ]
            }
        ]
    },
    phuket: {
        id: 'phuket',
        city: 'Phuket',
        country: 'Thailand',
        summary: '빠통과 올드타운, 빅부다와 프롬텝곶 노을, 팡아만 투어까지 안다만 해의 결을 따라 도는 푸켓 템플릿입니다.',
        footer: 'Phuket is loudest in Patong and quietest at Promthep Cape.',
        heroImage: 'assets/heroes/phuket.jpg',
        heroPosition: 'center center',
        accent: '#0316A1',
        accentRgb: '3, 22, 161',
        ink: '#0B1E3A',
        inkRgb: '11, 30, 58',
        overlayTop: 'rgba(11, 30, 58, 0.44)',
        overlayBottom: 'rgba(8, 18, 36, 0.90)',
        timeZone: 'Asia/Bangkok',
        weather: { latitude: 7.8804, longitude: 98.3923 },
        currency: { code: 'THB', symbol: '฿', locale: 'th-TH' },
        startOffsetDays: 13,
        phraseLabel: 'ไทย',
        phrases: [
            { text: 'ทะเลอยู่ทางไหน', pron: '[탈레 유 탕 나이]', meaning: '바다는 어느 쪽인가요?' },
            { text: 'เผ็ดนิดหน่อย', pron: '[펫 닛 너이]', meaning: '조금만 맵게 해주세요' },
            { text: 'ขอเมนู', pron: '[커 메누]', meaning: '메뉴판 주세요' },
            { text: 'แพงไป', pron: '[팽 빠이]', meaning: '너무 비싸요' },
            { text: 'ช่วยด้วย', pron: '[추어이 두어이]', meaning: '도와주세요' },
            { text: 'ไปสนามบิน', pron: '[빠이 사남빈]', meaning: '공항으로 가 주세요' }
        ],
        itineraryTemplate: [
            {
                title: '빠통',
                activities: [
                    { time: '10:00', title: '빠통 비치', type: 'sun', location: 'Patong Beach' },
                    { time: '13:00', title: '정실론 쇼핑 & 점심', type: 'shopping-bag', location: 'Jungceylon Shopping Center' },
                    { time: '19:00', title: '방라 로드 밤거리', type: 'lightbulb', location: 'Bangla Road' }
                ]
            },
            {
                title: '푸켓 올드타운',
                activities: [
                    { time: '09:30', title: '탈랑 로드 시노-포르투갈 거리', type: 'camera', location: 'Thalang Road' },
                    { time: '12:30', title: '올드타운 로컬 점심', type: 'utensils-crossed', location: 'One Chun Cafe & Restaurant' },
                    { time: '18:00', title: '카오랑 힐 전망 노을', type: 'binoculars', location: 'Khao Rang Hill Viewpoint' }
                ]
            },
            {
                title: '남부 — 빅부다 & 프롬텝곶',
                activities: [
                    { time: '09:30', title: '빅부다', type: 'landmark', location: 'Big Buddha Phuket' },
                    { time: '13:00', title: '라와이 해산물 시장 점심', type: 'utensils-crossed', location: 'Rawai Seafood Market' },
                    { time: '17:30', title: '프롬텝곶 선셋', type: 'camera', location: 'Promthep Cape' }
                ]
            },
            {
                title: '팡아만 투어',
                activities: [
                    { time: '08:00', title: '제임스본드 섬 보트 투어', type: 'ship', location: 'James Bond Island' },
                    { time: '12:30', title: '꼬 빠니 수상마을 점심', type: 'utensils-crossed', location: 'Koh Panyee' },
                    { time: '18:30', title: '카론 비치 노을 저녁', type: 'moon-star', location: 'Karon Beach' }
                ]
            },
            {
                title: '카타 & 이동',
                activities: [
                    { time: '09:30', title: '카타 비치 마지막 수영', type: 'sun', location: 'Kata Beach' },
                    { time: '12:30', title: '센트럴 푸켓 마지막 쇼핑', type: 'shopping-cart', location: 'Central Phuket' },
                    { time: '17:00', title: '푸켓 공항 이동', type: 'plane', location: 'Phuket International Airport' }
                ]
            }
        ]
    },
    vientiane: {
        id: 'vientiane',
        city: 'Vientiane',
        country: 'Laos',
        summary: '탓루앙과 빠뚜사이, 왓시사켓, 메콩 야시장에 고속철 방비엥 당일 여행을 더한 비엔티안 템플릿입니다.',
        footer: 'Vientiane keeps a slow riverside pace, with a fast train to the mountains.',
        heroImage: 'assets/heroes/vientiane.jpg',
        heroPosition: 'center center',
        accent: '#F4DE30',
        accentRgb: '244, 222, 48',
        ink: '#3B2A05',
        inkRgb: '59, 42, 5',
        overlayTop: 'rgba(59, 42, 5, 0.44)',
        overlayBottom: 'rgba(28, 20, 6, 0.90)',
        timeZone: 'Asia/Vientiane',
        weather: { latitude: 17.9757, longitude: 102.6331 },
        currency: { code: 'LAK', symbol: '₭', locale: 'lo-LA' },
        startOffsetDays: 8,
        phraseLabel: 'ລາວ',
        phrases: [
            { text: 'ສະບາຍດີ', pron: '[사바이디]', meaning: '안녕하세요' },
            { text: 'ຂອບໃຈ', pron: '[컵 짜이]', meaning: '감사합니다' },
            { text: 'ເທົ່າໃດ', pron: '[타오 다이]', meaning: '얼마예요?' },
            { text: 'ແຊບຫຼາຍ', pron: '[쌥 라이]', meaning: '아주 맛있어요' },
            { text: 'ບໍ່ເປັນຫຍັງ', pron: '[버 뻰 냥]', meaning: '괜찮아요' },
            { text: 'ຫ້ອງນ້ຳຢູ່ໃສ', pron: '[홍 남 유 사이]', meaning: '화장실이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '탓루앙 & 빠뚜사이',
                activities: [
                    { time: '09:30', title: '탓루앙 황금 탑', type: 'landmark', location: 'Pha That Luang' },
                    { time: '13:00', title: '빠뚜사이 개선문', type: 'landmark', location: 'Patuxai' },
                    { time: '18:30', title: '메콩 강변 야시장', type: 'sparkles', location: 'Vientiane Night Market' }
                ]
            },
            {
                title: '올드타운 사원 & 남푸',
                activities: [
                    { time: '09:30', title: '왓시사켓', type: 'landmark', location: 'Wat Si Saket' },
                    { time: '13:00', title: '조마 베이커리 카페 점심', type: 'coffee', location: 'Joma Bakery Cafe' },
                    { time: '18:30', title: '남푸 분수 광장 저녁', type: 'moon-star', location: 'Nam Phou Fountain' }
                ]
            },
            {
                title: '방비엥 당일 (고속철)',
                activities: [
                    { time: '07:30', title: '라오-중국 고속철 출발', type: 'train-front', location: 'Vientiane Railway Station' },
                    { time: '11:00', title: '블루라군 물놀이', type: 'trees', location: 'Blue Lagoon Vang Vieng' },
                    { time: '15:00', title: '남송강 카약 & 카르스트 풍경', type: 'ship', location: 'Nam Song River' }
                ]
            },
            {
                title: '붓다파크 & 이동',
                activities: [
                    { time: '09:00', title: '붓다파크 (씨엥쿠안)', type: 'landmark', location: 'Buddha Park' },
                    { time: '12:30', title: '딸랏싸오 시장 점심 & 기념품', type: 'store', location: 'Talat Sao Morning Market' },
                    { time: '16:30', title: '왓따이 공항 이동', type: 'plane', location: 'Wattay International Airport' }
                ]
            }
        ]
    },
    'phnom-penh': {
        id: 'phnom-penh',
        city: 'Phnom Penh',
        country: 'Cambodia',
        summary: '왕궁과 실버파고다, 왓프놈, 센트럴마켓, 뚜올슬렝과 킬링필드, 리버사이드를 차분히 잇는 프놈펜 템플릿입니다.',
        footer: 'Phnom Penh asks for a quiet morning, an honest afternoon, and a riverside evening.',
        heroImage: 'assets/heroes/phnom-penh.jpg',
        heroPosition: 'center center',
        accent: '#BE123C',
        accentRgb: '190, 18, 60',
        ink: '#2E0A14',
        inkRgb: '46, 10, 20',
        overlayTop: 'rgba(46, 10, 20, 0.44)',
        overlayBottom: 'rgba(24, 8, 14, 0.90)',
        timeZone: 'Asia/Phnom_Penh',
        weather: { latitude: 11.5564, longitude: 104.9282 },
        currency: { code: 'USD', symbol: '$', locale: 'en-US' },
        startOffsetDays: 7,
        phraseLabel: 'ខ្មែរ',
        phrases: [
            { text: 'សួស្តី', pron: '[수어스데이]', meaning: '안녕하세요' },
            { text: 'អរគុណ', pron: '[어꾼]', meaning: '감사합니다' },
            { text: 'ថ្លៃប៉ុន្មាន?', pron: '[틀라이 뽄만]', meaning: '얼마예요?' },
            { text: 'ឆ្ងាញ់ណាស់', pron: '[츠응안 나]', meaning: '아주 맛있어요' },
            { text: 'សុំទោស', pron: '[솜 또]', meaning: '죄송합니다 / 실례합니다' },
            { text: 'បង្គន់នៅឯណា?', pron: '[벙꼰 너우 아에 나]', meaning: '화장실이 어디예요?' }
        ],
        itineraryTemplate: [
            {
                title: '왕궁 & 리버사이드',
                activities: [
                    { time: '09:00', title: '왕궁 & 실버파고다', type: 'landmark', location: 'Royal Palace Phnom Penh' },
                    { time: '13:00', title: '캄보디아 국립박물관', type: 'palette', location: 'National Museum of Cambodia' },
                    { time: '18:30', title: '시소왓 키 강변 산책 & 저녁', type: 'moon-star', location: 'Sisowath Quay' }
                ]
            },
            {
                title: '왓프놈 & 센트럴마켓',
                activities: [
                    { time: '09:30', title: '왓프놈', type: 'landmark', location: 'Wat Phnom' },
                    { time: '12:30', title: '센트럴마켓 (프사 트마이)', type: 'store', location: 'Central Market Phnom Penh' },
                    { time: '18:30', title: '바삭 레인 골목 저녁', type: 'utensils-crossed', location: 'Bassac Lane' }
                ]
            },
            {
                title: '역사의 하루 — 뚜올슬렝 & 킬링필드',
                activities: [
                    { time: '09:00', title: '뚜올슬렝 학살 박물관', type: 'landmark', location: 'Tuol Sleng Genocide Museum' },
                    { time: '13:30', title: '쯔응아익 킬링필드', type: 'landmark', location: 'Choeung Ek Genocidal Center' },
                    { time: '18:00', title: '러시안 마켓 저녁', type: 'shopping-bag', location: 'Russian Market Phnom Penh' }
                ]
            },
            {
                title: '마지막 사원 & 이동',
                activities: [
                    { time: '09:30', title: '왓 우날롬', type: 'landmark', location: 'Wat Ounalom' },
                    { time: '12:30', title: '이온몰 점심 & 마지막 쇼핑', type: 'shopping-cart', location: 'AEON Mall Phnom Penh' },
                    { time: '16:30', title: '테초 공항 이동', type: 'plane', location: 'Techo International Airport' }
                ]
            }
        ]
    }
};

module.exports = NEW_CITIES_SEA_A;
