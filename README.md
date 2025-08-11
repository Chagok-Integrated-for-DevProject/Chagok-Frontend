# 차곡(Chagok)

사이드 프로젝트, 해커톤 등을 여러 사이트에서 크롤링하여 한 번에 보고 팀빌딩까지 할 수 있도록 해주는 웹 사이트.
<br>

## :children_crossing: 팀 구성

프론트엔드2, 백엔드2, 디자이너1
<br>

## :page_facing_up: 목차

1. [기술 스택](#rocket-기술-스택)
2. [커밋 컨벤션](#memo-커밋-컨벤션)
3. [브랜치 플로우](#sparkles-브랜치-플로우)
4. [코드 컨벤션](#pencil2-코드-컨벤션)
5. [프로젝트 아키텍처](#construction-프로젝트-아키텍처)
6. [기능 설명](#technologist-기능-설명)
7. [폴더 구조](#building_construction-폴더-구조)

<br>

## :rocket: 기술 스택

- TypeScript
- Nextjs13
- React-Query V4
- Emotion
- Jest, React-Testing-Library, Mock Service Worker
- EC2, S3, Github Action, PM2
  <br>

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

<br>

## :sparkles: 브랜치 플로우

- Github flow 사용

1. repository clone하기, fork (X)
2. Main branch를 기준으로 sub branch만들기
3. 진행상황 확인을 위해 commit내역 push 자주하기
4. 1 기능, 1 PR
   상대방이 review, 메인 브랜치에 merge, 해당 원격 브랜치 삭제
5. branches rule: github action으로 testing 및 build가 성공적으로 수행되어야 merge 가능
6. branch name pattern: `[commit prefix]/[description]`

<br>

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

### :white_check_mark: 테스팅

- 현재까지 60개의 테스트 케이스 작성<br /><br />
  ![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/20a6a601-bb7c-4843-8852-e6d5b88721fb)

<br>

## :construction: 프로젝트 아키텍처

![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/6885256b-4fb7-4eac-adc7-b0cc506e47e0)

<br>

## :technologist: 기능 설명

### 1. 회원가입 / 로그인

![OAuth](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/0e7ccda9-cec7-4b84-a227-86027d734cd7)

#### A. OAuth 2.0 (Kakao, Google)

Kakao (`Authorization Code Grant`)<br>
Google (`Implicit Grant`)

1.  frontend에서 KaKao와 Google Access token을 발급
2.  발급 받은 KaKao or Google Access token을 백엔드 서버에 전달
3.  백엔드 서버에서 KaKao or Google Access token으로 유저의 정보를 얻어 DB에 저장.
4.  백엔드 서버에서 자체 access token, refresh token 생성

#### B. `Refresh Token은 httpOnly쿠키, Access Token은 LocalStorage`에 저장하고 만료시간을 짧게 하여 보안 위험 최소화
<br/>

### 2. 랜딩페이지

![홈](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/c893ca90-7619-4082-9b48-7b90120a4dc8)

#### A. BookMark에 대한 유효성 검사

- 로그아웃 상태일 경우 => "로그인이 필요합니다" 토스트 메세지
- 로그인 상태일 경우 => 토스트 메세지를 사용하여 성공, 취소 알림. (`Optimistic Update` 적용)

#### B. 해커톤, 스터디/프로젝트 모집글을 서버사이드에서 Prefetch

![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/473affa1-7ae8-42b1-8558-2fe45b93f968)

<br/><br/>

### 3. 프로젝트 / 스터디 모집글

![스터디프로젝트](https://github.com/With-Pet-Project/With-Pet-FE/assets/68717963/e16b7adb-62c5-4fa3-b733-b62f689c2706)

#### A. 로딩 Fallback UI로 `Skeleton` 적용. (`Layout Shift` 방지)

#### B. `기술스택 + 검색어` 조합에 따른 검색결과 표시 (`Debounce` 적용)

![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/cbc4258e-fb7f-4282-badf-d5fae1453559)

#### C. `Offset Pagination` 적용

<br/><br/>

### 4. 프로젝트 / 스터디 상세 정보

![스터디프로젝트상세](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/203fd207-d216-4e3b-b76c-e82e57e305cd)

#### A. InnerHTML형식의 TEXT를 렌더링 (sanitize를 하여 XSS에 대응)

<br/><br/>

### 5. 해커톤 공고글

![해커톤](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/2a0c32f1-89e7-4915-b30b-5168ae9e05b3)

#### A. 해커톤 모집글에 대해 서버사이드에서 prefetch

![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/f91902af-050c-4ef0-9e75-a7ecbe99d3e8)

<br/><br/>

### 6. 해커톤 상세 페이지

![해커톤상세](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/03c2ebcb-7d4c-4f39-bb9a-e6a0b2aa52dc)

#### A. InnerHTML형식의 TEXT를 렌더링 (sanitize를 하여 XSS에 대응)

#### B. 댓글 작성을 통해 해커톤 팀빌딩

<br/><br/>

### 7. 유저 닉네임, 프로필 이미지 수정

![유저정보변경](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/e843475b-af40-4eeb-87ed-c0e9f65ed936)

#### A. 프로필 이미지 수정 조건

- 파일 확장자가 jpg, png일 것 (정규표현식)
- 파일 크기가 200kb이하 일 것
- 조건에 맞지 않으면 토스트 메세지로 사용자에게 알림.

![image](https://github.com/Chagok-Integrated-for-DevProject/Chagok-Frontend/assets/68717963/548d38be-582d-491c-83fc-57c3813862a0)

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
