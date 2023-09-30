import { screen } from "@testing-library/react";
import { render } from "lib/test-utils";
import type { TPostPreview } from "lib/types/post";
import { palette } from "styles/palette";

import ProjectCard from ".";

const mockContents: TPostPreview = {
  siteType: "HOLA",
  postType: "PROJECT",
  title: "[프론트/백엔드 멤버]앱 런칭 할께 할 멤버모집합니다!",
  viewCount: 0,
  scrapCount: 3,
  preview:
    '"\\n<p>안녕하세요.</p>\\n<p>저희 팀은 여행을 주제로 앱 서비스를 준비하고 있습니다.</p>\\n<p>현재 멤버들은 현직에서 경력 10년차 이상으로, 회사 업무 이외 새로운 서비스를 만들어 런칭 해보고자 프로젝트를 시작하게 되었습니다.</p>\\n<p>기획과 디자인이 모두 완료 되었고, 현재 최소한의 MVP 범위내 1차 런칭을 준비하고 있습니다.</p>\\n<p>1차 런칭을 준비하면서 멤버가 1차 완료 후 만나게 된다면 이후 업그레이드 하는 작업을 진행하게 되고,</p>\\n<p>빠르게 만나게 된다면 1차 준비를 함께 이어가게 될 것 같습니다.</p>\\n<p>기존 개발자님이 개인적인 사정으로 지속적인 참여가 어려워지셔서 신규로 멤버를 찾고 있습니다</p>\\n<p>저희는 앱 런칭이 목표입니다!</p>\\n<p>앱 서비스를 만들어보고 싶은데 혼자가 아닌 각자의 전문직군들이 모여있는 팀을 찾고 있다면 편하게 문의주세요~!</p>\\n<p><br></p>\\n<ul>\\n <li><strong>프로젝트 주제&nbsp;</strong>: 여행관련 앱 서비스</li>\\n</ul>\\n<p><br></p>\\n<ul>\\n <li><strong>프로젝트 목표</strong>&nbsp;: 앱 런칭</li>\\n</ul>\\n<p><br></p>\\n<ul>\\n <li><strong>예상 프로젝트 일정(횟수</strong>) : 3개월 이상</li>\\n</ul>\\n<p><br></p>\\n<ul>\\n <li><strong>예상 모집인원</strong></li>\\n</ul>\\n<p><br></p>\\n<ol>\\n <li>백엔드 1명 : NestJS + MySQL + TypeScript</li>\\n <li>프론트 1명 : Typescript, ReactNative</li>\\n</ol>\\n<p><br></p>\\n<ul>\\n <li><strong>현재 멤버</strong></li>\\n</ul>\\n<p><br></p>\\n<ol>\\n <li>풀스택 10년차 1명/백엔드 1년차 1명</li>\\n <li>기획&amp;디자이너 15년차 1명</li>\\n <li>ui&amp;브랜딩 디자이너 10년차 1명</li>\\n</ol>\\n<p><br></p>\\n<ul>\\n <li><strong>이런 분 환영합니다!</strong></li>\\n</ul>\\n<p><br></p>\\n<ol>\\n <li>회사업무와 프로젝트 병행이 가능하신 분(회사일이 바쁘시면 정말 힘들더라구요 ㅠㅠ)</li>\\n <li>소통&amp;연락이 잘 되시는 분!( 온라인 작업이 많다보니 파트너끼리 소통이 가장 중요하더라구요!)</li>\\n <li>회사일과 별개로 뭔가 새로운 서비스를 스스로 런칭하는 경험을 만들고 싶으신 분 대환영!</li>\\n <li>매주 수요일 10시에 줌미팅</li>\\n</ol>\\n<p><br></p>"',
  nickName: "amber",
  createdTime: "2023-08-09T13:30:09.201",
  id: "50208",
  skills: [
    "javascript",
    "typescript",
    "react",
    "java",
    "spring",
    "vue",
    "kotlin",
    "docker",
  ],
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("ProjectCard 렌더링 테스트", () => {
  it("사이트 이름에 따른 태그 색상 테스트", () => {
    render(<ProjectCard contents={mockContents} />);
    const hola = screen.getByText(/hola/i);
    expect(hola).toHaveStyle(`background: ${palette.hola}`);

    mockContents.siteType = "INFLEARN";
    render(<ProjectCard contents={mockContents} />);
    const inflearn = screen.getByText(/inflearn/i);
    expect(inflearn).toHaveStyle(`background: ${palette.inflearn}`);

    mockContents.siteType = "OKKY";
    render(<ProjectCard contents={mockContents} />);
    const okky = screen.getByText(/okky/i);
    expect(okky).toHaveStyle(`background: ${palette.okky}`);
  });
  it("postType에 따른 색상 테스트", () => {
    render(<ProjectCard contents={mockContents} />);
    const project = screen.getByText("프로젝트");
    expect(project).toHaveStyle(`background: ${palette.bgMainOrange}`);

    mockContents.postType = "STUDY";
    render(<ProjectCard contents={mockContents} />);
    const study = screen.getByText("스터디");
    expect(study).toHaveStyle(`background: ${palette.bgMainOrange}`);
  });
  it("postType이 PROJECT면 link의 purpose는 project이다.", () => {
    mockContents.postType = "PROJECT";
    render(<ProjectCard contents={mockContents} />);
    const projectLink = screen.getByRole("link");
    expect(projectLink.getAttribute("href")).toBe(
      `/projects/50208?purpose=project`,
    );
  });
  it("postType이 STUDY면 link의 purpose는 study이다.", () => {
    mockContents.postType = "STUDY";
    render(<ProjectCard contents={mockContents} />);
    const studyLink = screen.getByRole("link");
    expect(studyLink.getAttribute("href")).toBe(
      `/projects/50208?purpose=study`,
    );
  });
});
