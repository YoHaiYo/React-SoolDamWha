# Team-SolDamWha 프로젝트

## 🚀 프로젝트 소개

**Team-SolDamWha**은 프론트엔드반 술담화 리액트 프로젝트 팀입니다. 술담화라는 전통주 구독 플랫폼을 재해석해서 사이트로 표현하는 웹 프로젝트입니다.

## 🌐 배포용 링크

https://sooldamwha.netlify.app/

## 🌟 팀원 소개

- [jiyy25](https://github.com/jiyy25) : 상품섹션, 푸터섹션, 구독페이지 작업.
- [kimjaer](https://github.com/kimjaer) : 리뷰섹션, 입점문의섹션, Q & A 페이지 작업.
- [SeungEunChun](https://github.com/SeungEunChun) : 헤더섹션, 메인배너섹션, 이벤트페이지 작업.
- ![SH](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/4bf043ac-9ad9-4bce-b8ef-76d6b928f45d)
 [YoHaiYo](https://github.com/YoHaiYo) : 구독섹션, 베스트아이템(술고래픽)섹션, 전체상품페이지 작업.

## 📑 기획서

- [노션 바로 가기](https://invented-level-d67.notion.site/9299e0485c414f87bd02d8b202c4364d?pvs=4)
- [피그마 바로 가기](https://www.figma.com/file/WSM71CyE0wCWzO0NUIjMvK/%ED%94%84%EB%A1%A0%ED%8A%B8%ED%8C%80-%EC%9E%84%EC%8B%9C%EB%B0%A9!?type=design&node-id=0%3A1&mode=design&t=HmZvD6Zc8vn8ZghQ-1)

## 🛠️ 사용 플러그인

- aos: 2.3.4
- axios: 1.6.2
- bootstrap: 5.3.2
- gh-pages: 6.1.0
- react-bootstrap: 2.9.1
- react-router-dom: 6.21.2
- sass: 1.69.5
- styled-components: 6.1.8
- swiper: 11.0.5

## 🌐 리액트프로젝트 이전 웹 프로젝트 깃허브

[작업 깃허브 바로 가기](https://github.com/YoHaiYo/Team-SoolDamWha)

## 🤔 작업 고려사항

- 컴포넌트 계층구조: `component` 폴더 → `section` 폴더 → `King.js` → `index.js`
- 팀원 작업폴더: `workroom` 폴더에서 팀원 이름으로 각각 작업 폴더 생성
- 데이터 관리: `data` 폴더에서 하나의 JSON 파일로 데이터 관리 및 `props`로 전달
- CSS 관리: `module.css`로 연결하여 CSS 충돌 방지
- 데이터 필드명 통일: SQL 테이블 필드명과 JSON 데이터 객체명 통일
- 이미지 경로 표준화: 데이터 파일 이미지 경로에 `./` 붙여서 사용 (`/`로만 쓰면 deploy 인식 안됨)
