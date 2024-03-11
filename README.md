# Team-SolDamWha 프로젝트

## 🚀 프로젝트 소개

**Team-SolDamWha**은 프론트엔드반 술담화 리액트 프로젝트 팀입니다. 술담화라는 전통주 구독 플랫폼을 재해석해서 사이트로 표현하는 웹 프로젝트입니다.

## 🌐 배포용 링크

https://sooldamwha.netlify.app/

## 📖 한장으로 보는 술담화 개발여정

- [노션 기획서 바로 가기]([https://invented-level-d67.notion.site/9299e0485c414f87bd02d8b202c4364d?pvs=4](https://www.notion.so/9299e0485c414f87bd02d8b202c4364d))
- [PDF 기획서 바로 가기]([[https://invented-level-d67.notion.site/9299e0485c414f87bd02d8b202c4364d?pvs=4](https://www.notion.so/9299e0485c414f87bd02d8b202c4364d](https://file.notion.so/f/f/3eeb5bea-be87-40e2-ad02-1d1272cec098/43285ffa-7bc6-43e5-82b6-225d13200b9b/sooldamhwa.pdf?id=aaaa2767-bb4c-41f7-8b93-dfc352298f7e&table=block&spaceId=3eeb5bea-be87-40e2-ad02-1d1272cec098&expirationTimestamp=1709971200000&signature=0iq6dfvZYaMUd8DBg1_R-WLABYKzzqRxp12k-TD1H_8&downloadName=sooldamhwa.pdf)))
- [노션 이슈처리 바로 가기]([[https://invented-level-d67.notion.site/9299e0485c414f87bd02d8b202c4364d?pvs=4](https://www.notion.so/9299e0485c414f87bd02d8b202c4364d](https://file.notion.so/f/f/3eeb5bea-be87-40e2-ad02-1d1272cec098/43285ffa-7bc6-43e5-82b6-225d13200b9b/sooldamhwa.pdf?id=aaaa2767-bb4c-41f7-8b93-dfc352298f7e&table=block&spaceId=3eeb5bea-be87-40e2-ad02-1d1272cec098&expirationTimestamp=1709971200000&signature=0iq6dfvZYaMUd8DBg1_R-WLABYKzzqRxp12k-TD1H_8&downloadName=sooldamhwa.pdf)))
- [피그마 바로 가기](https://www.figma.com/file/KUL9il7XOPOrt2ce4OYvXT/%EC%88%A0%EB%8B%B4%ED%99%94-%ED%94%BC%EA%B7%B8%EB%A7%88-%EB%B0%B0%ED%8F%AC%EC%9A%A9?type=design&node-id=1-1068&mode=design&t=OPx03nzqhn2vOAdr-0)

## 🌟 팀원 소개

![JR](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/310410e2-7210-49ca-a8aa-b8f8d8c55beb) [kimjaer](https://github.com/kimjaer)
 : 리뷰섹션, 입점문의섹션, Q & A 페이지 작업.

 ![JY](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/c7a2e01a-9974-4c3f-9101-422323fc1291) [jiyy25](https://github.com/jiyy25) 
 : 상품섹션, 푸터섹션, 구독페이지 작업.
 
 ![SE](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/b4ee5657-ad51-47f9-94c1-13e2a8ed012b) [SeungEunChun](https://github.com/SeungEunChun)
 : 헤더섹션, 메인배너섹션, 이벤트페이지 작업.
  
![SH](https://github.com/YoHaiYo/React-SoolDamWha.github.io/assets/124754510/4bf043ac-9ad9-4bce-b8ef-76d6b928f45d) [YoHaiYo](https://github.com/YoHaiYo)
 : 구독섹션, 베스트아이템(술고래픽)섹션, 전체상품페이지 작업.

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
