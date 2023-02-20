# Movie Picker

Axios 사용 및 TMDB API 비동기 통신하여 얻은 데이터를 이용한 영화 검색 웹 서비스. TypeScript를 사용하여 컴포넌트 및 기능 구현.

</br>
</br>

## 1. 개발 목표

- 타입스크립트 및 Rest API를 이용하여 영화 검색 서비스 프론트엔드 구현

</br>
</br>

## 2. 개발 기간, 사용 기술 및 배포

### 2.1 개발 기간

- 1차 - _22. 12. 15 ~ 23. 02. 10_
- 2차 - _준비중_

### 2.2 사용 기술

- TypeScript
- React
- Styled-Components
- Axios
- Recoil
- Lodash

### 2.3 배포

- Demo : http://YouYou94.github.io/movie-picker/

#### 배운점

- 전역 상태 라이브러리 : Recoil
- 자바스크립트 유틸리티 라이브러리 : Lodash
- 반응형 웹 grid, aspect-ratio

#### 고민한점

- useAxios 커스텀 훅을 만들어 API 데이터를 받아왔었는데, 원하는 데이터에 따라 HTTP URI가 다 달라 하나의 useAxios에서 어떻게 구현을 해야할지 많은 고민이 있었습니다. 처음에는 prop으로 원하는 리소스를 주어 규칙에 맞게 HTTP URI를 변경하였으나, 컴포넌트들마다 해당 prop을 주기 위해 선언하는 변수들이 중복으로 선언되어 type에 따라 원하는 데이터를 가지고 올 수 있도록 useAxios에서 여러 연동 함수를 구현하였습니다.

---

_(1차 완성)_
