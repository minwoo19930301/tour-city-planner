# Tour City Planner - Travel Route Planner

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://minwoo19930301.github.io/tour-city-planner/)


도시별 추천 일정 템플릿을 바탕으로 여행 루트를 만들고, 날씨와 환율, 지도 미리보기까지 한 화면에서 확인할 수 있는 정적 여행 플래너입니다. 단일 도시 일정뿐 아니라 여러 나라를 이어 붙인 멀티 세그먼트 일정도 URL로 공유할 수 있습니다.

## 링크

- 서비스: [Tour City Planner](https://minwoo19930301.github.io/tour-city-planner/)
- 예시 페이지: [Paris Trip](https://minwoo19930301.github.io/tour-city-planner/paris_trip.html)
- GitHub: [minwoo19930301/tour-city-planner](https://github.com/minwoo19930301/tour-city-planner)

## 주요 기능

- 목적지 템플릿 156개. 한국에서 직항이 있는 도시를 중심으로 일본 29곳, 중국 22곳, 동남아·대만·홍콩·마카오 27곳, 중앙아시아·남아시아·중동 12곳, 한국 3곳, 유럽·미주·오세아니아·아프리카를 담았습니다
- 국내 도시(서울·부산·제주)를 앞뒤 구간으로 붙여 서울 → 오사카 같은 멀티 세그먼트 일정 작성
- 일정 카드를 손잡이로 끌어 순서 변경, 다른 날짜로 이동 (마우스·터치·키보드 모두 지원)
- 도시별 추천 일정 자동 구성
- 멀티 국가/멀티 도시 세그먼트 일정 편집
- 현재 날짜 기준 여행 기간 날씨 조회
- 현지 통화 환율 계산과 한국 원화 기준 예산 감각 확인
- 활동별 Google Maps 링크와 지도 미리보기
- 공유 링크 생성
- `paris_trip.html`, `tokyo_trip.html` 같은 바로가기 진입 페이지 제공

## 사용하는 방법

1. 앱에서 목적지와 여행 기간을 선택합니다.
2. 기본 템플릿으로 생성된 일정을 확인하고 출발합니다.
3. 각 날짜 카드에서 활동을 추가, 수정, 삭제해 일정 흐름을 다듬습니다.
4. 카드 왼쪽 손잡이를 끌어 순서를 바꾸거나 다른 날짜로 옮깁니다. 카드를 선택한 뒤 `Alt`와 위아래 방향키로도 옮길 수 있습니다.
5. 장소를 입력하면 지도 링크와 미리보기를 바로 확인할 수 있습니다.
6. 날씨와 환율 정보를 참고해 시간대와 예산 감각을 조정합니다.
7. `링크 저장/공유` 버튼으로 현재 일정을 URL로 복사해 공유합니다.

## 로컬 실행

정적 HTML/JS 프로젝트라서 간단한 서버만 있으면 됩니다.

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory "/Users/minwokim/Documents/New project/trip-plans"
```

브라우저에서 `http://127.0.0.1:4173`를 열면 됩니다.

## 배포

- 메인 페이지: [https://minwoo19930301.github.io/tour-city-planner/](https://minwoo19930301.github.io/tour-city-planner/)
- 예시 진입 페이지: [https://minwoo19930301.github.io/tour-city-planner/paris_trip.html](https://minwoo19930301.github.io/tour-city-planner/paris_trip.html)
- GitHub Pages 정적 배포

## 데이터와 외부 연동

- 날씨: `Open-Meteo`
- 환율: `open.er-api.com`
- 지도 링크/미리보기: `Google Maps`

## 파일 구성 및 서브 상세 설명서

- `index.html`: 메인 UI
- `app.js`: 목적지 데이터, 일정 생성, 공유 로직, 날씨/환율 연동
- `*_trip.html`: 특정 목적지로 바로 들어가는 redirect 페이지
- `assets/heroes/*.jpg`: 도시별 대표 사진 156장. 출처와 라이선스는 [docs/PHOTO_CREDITS.md](docs/PHOTO_CREDITS.md)
- `scripts/fetch_hero.py`: 위키미디어 공용에서 자유 라이선스 사진을 받아 출처를 기록하는 도구
- `scripts/city_master.json`: 새로 추가한 도시의 기본 정보와 사진 검색어 목록
- `scripts/new_cities_*.js`: 지역별 도시 데이터 조각 파일. `scripts/verify_fragment.js`로 검증하고 `scripts/merge_cities.py`로 `app.js`에 병합
- `scripts/dedupe_accents.py`: 도시 색상이 겹치지 않게 자동 조정
- `scripts/hero_candidates.py`, `scripts/hero_pick.py`: 위키미디어 분류에서 사진 후보를 시트로 보고 골라 저장
- `scripts/verify_cities.mjs`: 모든 도시를 실제 브라우저에서 열어 사진·일정·라벨을 점검
- 📘 **[시스템 아키텍처 및 상세 개발자 매뉴얼](docs/MANUAL.md)**: 데이터 포맷, Base64 URL 프로토콜, AI 프롬프트 연동 및 도시 템플릿 확장 가이드

## 📄 라이선스 (License)

본 프로젝트는 **[CC BY-NC 4.0 (크리에이티브 커먼즈 저작자표시-비영리 4.0)](LICENSE)** 라이선스에 따라 개인 및 비영리 목적으로 자유롭게 사용하실 수 있습니다.

> ⚠️ **상업적 이용 안내**: 기업 사용, 유료 서비스 연동, 외주 개발 등 상업적 목적으로 활용 시 저작권자(`contact@ai-ing.org`)와 **별도의 상업 라이선스 계약**을 체결해야 합니다.