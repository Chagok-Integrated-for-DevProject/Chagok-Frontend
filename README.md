# 차곡(Chagok) - [배포 링크](https://chagok.site/)

사이드 프로젝트, 해커톤 등을 여러 사이트에서 크롤링하여 한 번에 보고 팀빌딩까지 할 수 있도록 해주는 웹 사이트.
<br><br>

## :children_crossing: 팀 구성

프론트엔드2, 백엔드2, 디자이너1
<br><br>

## :page_facing_up: 목차

1. [기술 스택](#rocket-기술-스택)
2. [커밋 컨벤션](#memo-커밋-컨벤션)
3. [브랜치 플로우](#sparkles-브랜치-플로우)
4. [코드 컨벤션](#pencil2-코드-컨벤션)
5. [기능 설명](#technologist-기능-설명)
6. [폴더 구조](#building_construction-폴더-구조)

<br><br>

## :rocket: 기술 스택

### Language

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">

### Framework

<img src="https://img.shields.io/badge/Next.js-232323?style=for-the-badge&logo=Next.js&logoColor=white">

### State Management

<img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white">

### Style

<img src="https://img.shields.io/badge/Emotion-5B0BB5?style=for-the-badge&logoColor=white">

### Testing

<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white"><img src="https://img.shields.io/badge/React Testing Library-E33332?style=for-the-badge&logo=Testing Library&logoColor=white"><img src="https://img.shields.io/badge/Mock Service Worker-FABD14?style=for-the-badge&logoColor=white">

### CI/CD

<img src="https://img.shields.io/badge/AWS EC2-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"><img src="https://img.shields.io/badge/AWS S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"><img src="https://img.shields.io/badge/AWS CodeDeploy-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white"><img src="https://img.shields.io/badge/Github Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white"><img src="https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=PM2&logoColor=white">

<br><br>

## :memo: 커밋 컨벤션

| Git Imoji          | Tag Name | Description                                           |
| ------------------ | -------- | ----------------------------------------------------- |
| :tada:             | Tada     | 프로젝트 시작                                         |
| :sparkles:         | Feat     | 새로운 기능 추가                                      |
| :bug:              | Fix      | 버그수정                                              |
| :art:              | Style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| :lipstick:         | Design   | CSS 등 사용자 UI 변경 및 설계                         |
| :recycle:          | Refactor | 코드 리팩토링                                         |
| :memo:             | Docs     | 문서 수정                                             |
| :package:          | Chore    | 빌드 업무, 패키지 매니저, 패키지 관지라 구성 등 수정  |
| :rotating_light:   | Lint     | eslintrc 수정 및 린트 에러 수정                       |
| :rocket:           | Deploy   | 빌드 및 배포 작업                                     |
| :white_check_mark: | Test     | 테스트 코드, 리팩토링 테스트 코드 추가                |
| :truck:            | Rename   | 파일 혹은 몰더명 수정하거나 옮기는 작업만 한 경우     |
| :fire:             | Remove   | 파일을 삭제하는 작업만 한 경우                        |

<br><br>

## :sparkles: 브랜치 플로우

- Github flow 사용

1. repository clone하기, fork (X)
2. Main branch를 기준으로 sub branch만들기
3. 진행상황 확인을 위해 commit내역 push 자주하기
4. 1 기능, 1 PR
   상대방이 review, 메인 브랜치에 merge, 해당 원격 브랜치 삭제
5. branches rule: github action으로 testing 및 build가 성공적으로 수행되어야 merge 가능
6. branch name pattern: `[commit prefix]/[description]`

<br><br>

## :pencil2: 코드 컨벤션

### :card_file_box: Nextjs Router

- Pages Router

### :hammer: Code Formatting

- eslint, prettier
- husky & lint-staged를 사용하여 linting 자동화 및 강제성 부여

### :art: Emotion (styles)

- styled-components 방식
- [componentName].styles.ts 파일로 분리

### :closed_lock_with_key: React-Query

- 버전: v4
- query key 관리 방식: useQuery가 호출되는 위치에서 각자 관리

### :label: Type 관리

- 전역적으로 사용될 타입들: `lib/types` 폴더 안에 정의
- 단일 컴포넌트 내에서 사용되는 타입들은 해당 컴포넌트 폴더 내에서 관리
- `interface`의 경우 `I`, `type`의 경우 `T`를 이름의 첫글자로 한다.

### :bookmark: 관심사 분리 방식

- custom hook 사용

### :safety_vest: Error 처리

- 렌더링 관련 에러 처리: [Nextjs Error Boundary - 공식문서](https://nextjs.org/docs/pages/building-your-application/configuring/error-handling)
- 서버사이드 에러: 500, 404 커스텀
- 그 밖에 에러: 토스트 메세지를 통해 사용자에게 알림

### :passport_control: 인증/인가 방식 (CSRF, XSS에 대응)

- 카카오, 구글 소셜 로그인
- refresh token은 httpOnly쿠키에 저장
- access token은 만료 시간을 짧게 하여 localStorage에 저장

### :white_check_mak: 테스팅

- 현재까지 60개의 테스트 케이스 작성<br /><br />
  ![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/20a6a601-bb7c-4843-8852-e6d5b88721fb)

<br><br>

## :technologist: 기능 설명

### 1. 회원가입 / 로그인

![OAuth](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/0e7ccda9-cec7-4b84-a227-86027d734cd7)

<br/><br/>

### 2. 랜딩페이지

![홈](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/c893ca90-7619-4082-9b48-7b90120a4dc8)

<br/><br/>

### 3. 프로젝트 / 스터디 모집글

![스터디프로젝트](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/6554e94f-9942-4f51-be8f-bf91cc836a38)

<br/><br/>

### 4. 프로젝트 / 스터디 상세 정보

![스터디프로젝트상세](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/203fd207-d216-4e3b-b76c-e82e57e305cd)

<br/><br/>

### 5. 해커톤 공고글

![해커톤](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/2a0c32f1-89e7-4915-b30b-5168ae9e05b3)

<br/><br/>

### 6. 해커톤 상세 페이지

![해커톤상세](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/03c2ebcb-7d4c-4f39-bb9a-e6a0b2aa52dc)

<br/><br/>

### 7. 유저 닉네임, 이메일 수정

![유저정보변경](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/e843475b-af40-4eeb-87ed-c0e9f65ed936)

<br/><br/>

### 8. 유저 기술스택 변경

![기술스택 변경](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/d1bc7044-afa2-4cfd-add8-c2b066396628)

<br/><br/>

### 9. 유저 스크랩 목록 조회

![스크랩변경](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/aad7c636-9e16-40ad-a91f-9527a93935cb)

<br/><br/>

## :building_construction: 폴더 구조

```
src
├─components
│  ├─common
│  │  ├─arrow
│  │  ├─button
│  │  │  ├─pagination
│  │  │  ├─scrab
│  │  │  └─topScroll
│  │  ├─card
│  │  │  ├─hackathons
│  │  │  ├─mainBanner
│  │  │  └─projects
│  │  ├─dblArrow
│  │  ├─error
│  │  ├─hr
│  │  ├─layout
│  │  │  ├─body
│  │  │  ├─footer
│  │  │  └─header
│  │  ├─link
│  │  ├─loading
│  │  ├─logo
│  │  ├─mainBanner
│  │  ├─modal
│  │  └─skillContainer
│  ├─hackathons
│  │  ├─detail
│  │  │  ├─comment
│  │  │  │  ├─item
│  │  │  │  └─register
│  │  │  ├─original
│  │  │  │  └─test
│  │  │  └─summary
│  │  ├─list
│  │  └─recommendation
│  ├─home
│  │  ├─hackathons
│  │  ├─projects
│  │  │  └─utils
│  │  └─recommendation
│  ├─postDetail
│  │  ├─body
│  │  ├─floatingBox
│  │  └─header
│  ├─projects
│  │  ├─Loading
│  │  ├─projectList
│  │  ├─purposeFilter
│  │  ├─searchInput
│  │  ├─skillButton
│  │  └─skillFilter
│  ├─signup
│  │  ├─done
│  │  ├─name
│  │  ├─skill
│  │  └─social
│  └─userInfo
│      ├─profile
│      ├─scrab
│      └─skills
├─lib
│  ├─apis
│  ├─constants
│  ├─hooks
│  │  ├─useAccessToken
│  │  ├─useCheckNickNameMutation
│  │  ├─useCommentMutation
│  │  ├─useCommentsQuery
│  │  ├─useComponentMount
│  │  ├─useContestQuery
│  │  ├─useContestsQuery
│  │  ├─useDebounce
│  │  ├─useGetMyInfoQuery
│  │  ├─useInputHooks
│  │  ├─useJwtToken
│  │  ├─useModal
│  │  ├─useMyInfoMutation
│  │  ├─useProjectDetailQuery
│  │  ├─useProjectsQuery
│  │  ├─useStudiesQuery
│  │  └─useStudyDetailQuery
│  ├─mocks
│  │  └─data
│  ├─test-utils
│  ├─types
│  └─utils
│      ├─caculateDDay
│      ├─converToSkillId
│      ├─converToSkillIdParams
│      ├─convertToSkillSVG
│      ├─pagination
│      └─removeCRLF
├─pages
│  ├─api
│  ├─hackathons
│  │  └─[id]
│  ├─projects
│  │  └─[id]
│  └─userInfo
└─styles
```
