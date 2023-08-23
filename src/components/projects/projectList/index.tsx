import ProjectCard from "components/common/card/projects";
import type { TPostPreview } from "lib/types/post";

import { GridItem, ProjectListGrid } from "./index.styles";

const ProjectList = () => {
  const contents: TPostPreview = {
    siteType: "HOLA",
    postType: "PROJECT",
    title: "검증된 PT 트레이너 매칭 플랫폼 팀원 모집",
    viewCount: 5,
    scrapCount: 3,
    preview:
      '"\\n<h2>프로젝트 소개</h2>\\n<p><strong>"전문가에게 퍼스널 트레이닝을 받고 닭가슴살을 먹으며 건강한 몸을 만든다. 요즘 밀레니얼 세대에겐 운동으로 자신을 가꾸는 게 자기표현의 방식으로 자리 잡았다. 여기에 주 52시간 근무제도가 정착하면서 운동으로 몸을 관리하고 스트레스를 푸는 직장인도 부쩍 늘어났다"</strong></p>\\n<p><br></p>\\n<p>이렇듯 PT(Personal Training)는 이제 우리 라이프스타일의 일부가 되었습니다. 국내 시장 규모는 무려 1조 5천억 원에 이릅니다.</p>\\n<p><br></p>\\n<p><strong>하지만 아직도 대부분의 고객들은 불투명하고 비대칭적인 정보 속에서 믿을 수 있는 트레이너를 찾기 위해 일일이 발품을 팔거나, 그렇지 않으면 소위 \'양아치 트레이너\'에게 비싼 가격을 지불하고 PT를 받고 있습니다.</strong></p>\\n<p><br></p>\\n<p><strong>저희 팀은 이러한 문제를 해결하기 위해 검증된 트레이너들을 쉽고 빠르게 고객에게 제공하고, 고객은 이러한 트레이너들을 직접 투명하게 비교하고 선택할 수 있는 플랫폼을 만들고 있습니다.</strong></p>\\n<p><br></p>\\n<p>현재 스타트업에서 제품 개발, 투자 유치 등을 경험한 리더와 SK플래닛, 카카오 등 다양한 기업을 거쳐 현재는 PT업계에서 일하고 있는 시니어가 팀을 이끌고 있으며, 1명의 UXUI 디자이너와 2명의 현직 개발자들이 함께 서비스 개발을 진행 중입니다.</p>\\n<p><br></p>\\n<h2>프로젝트 이력</h2>\\n<ul>\\n <li>23년 1월 가천코코네스쿨(GCS) 최종 우수 졸업</li>\\n <li>23년 2월 한국장학재단 서울청년창업센터 사업 선정</li>\\n <li>23년 3월 서울창업허브 팀빌딩 지원사업 선정</li>\\n <li>23년 3월 성균관대학교 캠퍼스타운 사업 선정</li>\\n <li>23년 4월 중소벤처기업부 예비창업패키지 선정</li>\\n <li>23년 5월 경기도 창업서포터즈 프로그램 선정</li>\\n</ul>\\n<p><br></p>\\n<h2>찾고있는 멤버</h2>\\n<ul>\\n <li>서비스 기획자(웹/앱)</li>\\n <li>디자이너</li>\\n <li>마케터</li>\\n <li>FE/BE 개발자(React/Node.js)</li>\\n</ul>\\n<p><br></p>\\n<p>스타트업 초기 멤버로 합류까지 가능하신 분을 찾고 있으며, 카카오 등 현직에 재직중인 개발자 분들이 팀원으로 계셔서 주니어 분도 지원 가능합니다.</p>\\n<p><br></p>\\n<h2>지원 방법</h2>\\n<p>아래 이메일 혹은 카카오톡 오픈채팅을 통해 편하게 연락주세요!</p>\\n<ul>\\n <li><a href="mailto:teamfibud@gmail.com" target="_blank">teamfibud@gmail.com</a></li>\\n <li><a href="https://open.kakao.com/o/s1jQCbSe" target="_blank">https://open.kakao.com/o/s1jQCbSe</a></li>\\n</ul>\\n<p><br></p>"',
    nickName: "피벗",
    createdTime: "2023-08-09T11:52:29.01",
    id: "50209",
    skills: ["", "", "", ""],
  };

  const Cards = new Array(9).fill(null).map((e) => {
    e = <ProjectCard contents={contents} />;
    return e;
  });

  return (
    <ProjectListGrid>
      {Cards.map((e, i) => (
        <GridItem key={i}>{e}</GridItem>
      ))}
    </ProjectListGrid>
  );
};

export default ProjectList;
