# Tour City Planner - Travel Route Planner

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://minwoo19930301.github.io/tour-city-planner/)


도시별 추천 일정 템플릿을 바탕으로 여행 루트를 만들고, 날씨와 환율, 지도 미리보기까지 한 화면에서 확인할 수 있는 정적 여행 플래너입니다. 단일 도시 일정뿐 아니라 여러 나라를 이어 붙인 멀티 세그먼트 일정도 URL로 공유할 수 있습니다.

## 링크

- 서비스: [Tour City Planner](https://minwoo19930301.github.io/tour-city-planner/)
- 예시 페이지: [Paris Trip](https://minwoo19930301.github.io/tour-city-planner/trips/france/paris.html)
- GitHub: [minwoo19930301/tour-city-planner](https://github.com/minwoo19930301/tour-city-planner)

## 주요 기능

- 목적지 템플릿 156개. 한국에서 직항이 있는 도시를 중심으로 일본 29곳, 중국 22곳, 동남아·대만·홍콩·마카오 27곳, 중앙아시아·남아시아·중동 12곳, 한국 3곳, 유럽·미주·오세아니아·아프리카를 담았습니다
- 목적지 목록은 나라·시간대별로 한 줄(대표 도시)씩 80줄로 묶어 보여 줍니다. 여행에서 중요한 건 시간대라서, 같은 시간대의 다른 도시(오사카·교토 등)는 그 줄 아래에 이름으로 함께 적어 두었습니다. 그 도시들의 템플릿과 사진은 그대로 있어서 `?destination=osaka`나 `osaka_trip.html`로 열면 그대로 씁니다
- 국내 도시(서울·부산·제주)를 앞뒤 구간으로 붙여 서울 → 오사카 같은 멀티 세그먼트 일정 작성
- 일정 카드는 아무 데나 잡고 끌어서 옮길 수 있음 (PC는 누르고 바로, 터치는 길게 누른 뒤). 「순서 편집」 모드에서는 카드마다 ▲▼ 버튼과 「날짜 이동」도 나타남 (키보드는 `Alt`+위아래)
- 카드 사이 연결선(가는 길)과 「하루 이동코스」에 마우스를 올리거나 탭하면 구글 지도 길찾기가 그 자리에 iframe으로 뜸. 「자세히」 아이콘으로 구글 지도로 이동, 「닫기」로 닫음
- 모바일(세로 화면)에서는 세로 구도 대표 사진을, PC에서는 가로 사진을 따로 보여줌
- 도시별 추천 일정 자동 구성
- 멀티 국가/멀티 도시 세그먼트 일정 편집
- 현재 날짜 기준 여행 기간 날씨 조회
- 현지 통화 환율 계산과 한국 원화 기준 예산 감각 확인
- 활동별 Google Maps 링크와 지도 미리보기
- 공유 링크 생성
- `trips/<나라>/<도시>.html` 바로가기 진입 페이지 제공 (예: `trips/japan/osaka.html`). 옛 주소 `osaka_trip.html`도 `404.html`이 같은 곳으로 보내 줍니다

## 사용하는 방법

1. 앱에서 목적지와 여행 기간을 선택합니다.
2. 기본 템플릿으로 생성된 일정을 확인하고 출발합니다.
3. 각 날짜 카드에서 활동을 추가, 수정, 삭제해 일정 흐름을 다듬습니다.
4. 카드를 아무 데나 잡고 끌어서 순서와 날짜를 바꿉니다 (PC는 마우스로 누르고 바로 끌기, 휴대폰은 길게 누른 뒤 끌기). 일정 위의 「순서 편집」을 누르면 카드마다 ▲▼와 「날짜 이동」 버튼도 나타나고, 카드를 선택한 뒤 `Alt`와 위아래 방향키로도 옮길 수 있습니다. 「완료」를 누르면 평소 화면으로 돌아옵니다.
5. 카드 사이의 연결선에 마우스를 올리거나 탭하면 두 장소 사이의 가는 길이 구글 지도로 바로 뜹니다. 날짜 옆 「하루 이동코스」는 그날 전체 경로를 보여 줍니다. 「자세히」 아이콘을 누르면 구글 지도 사이트로 이동합니다.
6. 장소를 입력하면 지도 링크와 미리보기를 바로 확인할 수 있습니다.
7. 날씨와 환율 정보를 참고해 시간대와 예산 감각을 조정합니다.
8. `링크 저장/공유` 버튼으로 현재 일정을 URL로 복사해 공유합니다.

## 로컬 실행

정적 HTML/JS 프로젝트라서 간단한 서버만 있으면 됩니다.

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory "/Users/minwokim/Documents/New project/trip-plans"
```

브라우저에서 `http://127.0.0.1:4173`를 열면 됩니다.

## 배포

- 메인 페이지: [https://minwoo19930301.github.io/tour-city-planner/](https://minwoo19930301.github.io/tour-city-planner/)
- 예시 진입 페이지: [https://minwoo19930301.github.io/tour-city-planner/trips/france/paris.html](https://minwoo19930301.github.io/tour-city-planner/trips/france/paris.html)
- GitHub Pages 정적 배포

## 데이터와 외부 연동

- 날씨: `Open-Meteo`
- 환율: `open.er-api.com`
- 지도 링크/미리보기: `Google Maps`

## 파일 구성 및 서브 상세 설명서

- `index.html`: 메인 UI
- `app.js`: 목적지 데이터, 일정 생성, 공유 로직, 날씨/환율 연동
- `trips/<나라>/<도시>.html`: 특정 목적지로 바로 들어가는 redirect 페이지. `scripts/gen_trip_pages.py`가 `app.js`의 도시 목록에서 전부 다시 만듭니다
- `404.html`: 없는 주소와 옛 `<도시>_trip.html` 주소를 `index.html?destination=<도시>`로 보내는 페이지. 로컬에서 시험하려면 `python3 scripts/serve_with_404.py`
- `assets/heroes/<id>.jpg`(가로, PC용)와 `assets/heroes/<id>-portrait.jpg`(세로, 모바일용): 도시별 대표 랜드마크 사진. 위키미디어 공용의 자유 라이선스 사진 중 심사 등급·해상도·구도로 후보를 뽑고 사람이 직접 골랐습니다. 출처와 라이선스는 [docs/PHOTO_CREDITS.md](docs/PHOTO_CREDITS.md)
- `scripts/fetch_hero.py`: 위키미디어 공용에서 자유 라이선스 사진을 받아 출처를 기록하는 도구
- `scripts/city_master.json`: 새로 추가한 도시의 기본 정보와 사진 검색어 목록
- `scripts/new_cities_*.js`: 지역별 도시 데이터 조각 파일. `scripts/verify_fragment.js`로 검증하고 `scripts/merge_cities.py`로 `app.js`에 병합
- `scripts/dedupe_accents.py`: 도시 색상이 겹치지 않게 자동 조정
- `scripts/hero_search.py`: 위키미디어에서 랜드마크 사진 후보를 점수화해 가로/세로 시트로 보여주고(`<slug>`), 고른 것을 저장(`--pick`). `scripts/hero_queries.json`이 도시별 랜드마크 검색어, `scripts/hero_rescore.py`가 점수 규칙, `scripts/apply_hero_portraits.py`가 세로 사진을 `app.js`에 연결
- `scripts/verify_cities.mjs`: 모든 도시를 실제 브라우저에서 열어 사진·일정·라벨(묶인 도시는 대표 줄 아래 이름)을 점검
- `scripts/verify_ux.mjs`: 가는 길 미리보기(PC 마우스 올리기·모바일 탭·닫기·자세히), 카드 아무 데나 잡고 끌기, 시간대별 목록을 브라우저에서 점검
- `scripts/regress_multiseg.mjs`: 서울 + 도쿄 멀티 세그먼트 작성, 구간 간 끌어놓기, 공유 링크 왕복 회귀 검사
- 📘 **[시스템 아키텍처 및 상세 개발자 매뉴얼](docs/MANUAL.md)**: 데이터 포맷, Base64 URL 프로토콜, AI 프롬프트 연동 및 도시 템플릿 확장 가이드

## 📄 라이선스 (License)

본 프로젝트는 **[CC BY-NC 4.0 (크리에이티브 커먼즈 저작자표시-비영리 4.0)](LICENSE)** 라이선스에 따라 개인 및 비영리 목적으로 자유롭게 사용하실 수 있습니다.

> ⚠️ **상업적 이용 안내**: 기업 사용, 유료 서비스 연동, 외주 개발 등 상업적 목적으로 활용 시 저작권자(`contact@ai-ing.org`)와 **별도의 상업 라이선스 계약**을 체결해야 합니다.