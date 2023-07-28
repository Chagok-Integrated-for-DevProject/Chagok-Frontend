# 차곡(Chagok)

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
5. [폴더 구조](#)
6. [기능 설명](#)
7. [문제 해결](#)

<br><br>

## :rocket: 기술 스택

### Language

### Framework

### State Management

### Style

### Testing

### CI/CD

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
- [Pages Router 선택 이유 - 블로그](https://velog.io/@tt8784/App-Router-vs-Page-Router-Next.js)

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
- `interface`의 경우 `I`, `type`의 경우 `T`를 이름의 첫글자로 한다.

### :safety_vest: Error 처리

- 렌더링 관련 에러 처리: [Nextjs Error Boundary - 공식문서](https://nextjs.org/docs/pages/building-your-application/configuring/error-handling)
- 비동기 api 에러 처리: queryClient의 onError props에 toast연결.

<br><br>

## :building_construction: 폴더 구조

```
src
├─components
│  ├─common
│  │  └─layout
│  │      ├─body
│  │      ├─footer
│  │      └─header
│  ├─contest
│  ├─project
│  └─userInfo
├─lib
│  ├─apis
│  ├─constants
│  ├─hooks
│  ├─types
│  └─utils
├─pages
│  ├─api
│  ├─contests
│  │  └─[id]
│  ├─projects
│  │  └─[id]
│  └─userInfo
└─styles
```

<br><br>

## :technologist: 기능 설명
