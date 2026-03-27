# Trip Plans

도시별 추천 일정 템플릿을 바탕으로 여행 루트를 만들고, 날씨와 환율, 지도 미리보기까지 한 화면에서 확인할 수 있는 정적 여행 플래너입니다. 단일 도시 일정뿐 아니라 여러 나라를 이어 붙인 멀티 세그먼트 일정도 URL로 공유할 수 있습니다.

## 링크

- 서비스: [Trip Plans](https://minwoo19930301.github.io/trip-plans/)
- 예시 페이지: [Paris Trip](https://minwoo19930301.github.io/trip-plans/paris_trip.html)
- GitHub: [minwoo19930301/trip-plans](https://github.com/minwoo19930301/trip-plans)

## 주요 기능

- 아시아, 유럽, 북미 등 여러 지역의 목적지 템플릿 제공
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
4. 장소를 입력하면 지도 링크와 미리보기를 바로 확인할 수 있습니다.
5. 날씨와 환율 정보를 참고해 시간대와 예산 감각을 조정합니다.
6. `링크 저장/공유` 버튼으로 현재 일정을 URL로 복사해 공유합니다.

## 로컬 실행

정적 HTML/JS 프로젝트라서 간단한 서버만 있으면 됩니다.

```bash
python3 -m http.server 4173 --bind 127.0.0.1 --directory "/Users/minwokim/Documents/New project/trip-plans"
```

브라우저에서 `http://127.0.0.1:4173`를 열면 됩니다.

## 배포

- 메인 페이지: [https://minwoo19930301.github.io/trip-plans/](https://minwoo19930301.github.io/trip-plans/)
- 예시 진입 페이지: [https://minwoo19930301.github.io/trip-plans/paris_trip.html](https://minwoo19930301.github.io/trip-plans/paris_trip.html)
- GitHub Pages 정적 배포

## 데이터와 외부 연동

- 날씨: `Open-Meteo`
- 환율: `open.er-api.com`
- 지도 링크/미리보기: `Google Maps`

## 파일 구성

- `index.html`: 메인 UI
- `app.js`: 목적지 데이터, 일정 생성, 공유 로직, 날씨/환율 연동
- `*_trip.html`: 특정 목적지로 바로 들어가는 redirect 페이지
