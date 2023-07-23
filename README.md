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

| Git Imoji | Tag Name | Description                                           |
| --------- | -------- | ----------------------------------------------------- |
|           | Feat     | 새로운 기능 추가                                      |
|           | Fix      | 버그수정                                              |
|           | Style    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
|           | Design   | CSS 등 사용자 UI 변경                                 |
|           | Refactor | 코드 리팩토링                                         |
|           | Docs     | 문서 수정                                             |
|           | Chore    | 빌드 업무, 패키지 매니저, 패키지 관지라 구성 등 수정  |
|           | Test     | 테스트 코드, 리팩토링 테스트 코드 추가                |
|           | Rename   | 파일 혹은 몰더명 수정하거나 옮기는 작업만 한 경우     |
|           | Remove   | 파일을 삭제하는 작업만 한 경우                        |

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

- css Object or styled-components
- breakpoints
- palette
- 파일 분리 방식

### :closed_lock_with_key: React-Query

- 버전: v4
- query key 관리 방식
- [레퍼런스](https://tkdodo.eu/blog/effective-react-query-keys)

### :label: Type 관리

- interface
- type
- type 선언 위치

### :safety_vest: Error 처리

<br><br>

## :building_construction: 폴더 구조

<br><br>

## :technologist: 기능 설명
