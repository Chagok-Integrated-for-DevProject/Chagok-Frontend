import Body from "./body";
import Header from "./header";
import { Hr, ProjectDetailWrapper } from "./index.styles";

const ProjectDetail = () => {
  return (
    <ProjectDetailWrapper>
      <Header />
      <Hr />
      <Body
        skills={["js", "react", "ts", "nodejs"]}
        content={
          '"\\n<p>안녕하세요? 토요일 오전, 영어회화 스터디 인원을 모집합니다</p>\\n<p><strong>모집 상세 내용</strong></p>\\n<p>*스터디 장소:</p>\\n<p>신도림역 인근 카페</p>\\n<p>*스터디 시간:</p>\\n<p>매주 토요일 오전 10시30분~ 12시30분</p>\\n<p>*스터디 비용:</p>\\n<p>개인 자율적 메뉴주문을 제외하고 타 비용은 없어요</p>\\n<p>*스터디 참가인원:</p>\\n<p>평균 참석 인원 5명</p>\\n<p>*스터디 모집인원:</p>\\n<p>1명(20대 ~ 30대), 중상급</p>\\n<p>*스터디 진행방식</p>\\n<p>10시30-10시40분 &nbsp;&nbsp;아이스브레이킹</p>\\n<p>10시40분-11시30분 테드활용토론1</p>\\n<p>11시30분-11시40분 브레이크타임</p>\\n<p>11시40분-12시30분 디스커션토픽토론2</p>\\n<p>*스터디 지원신청:</p>\\n<p>성함, 성별, 나이, 하고계신일, 지역, 연락처 등을 써서 메일주세요.&nbsp;&nbsp;</p>\\n<p>E-mail 주소 ninspiration@naver.com 입니다.</p>\\n<p>&nbsp;</p>"'
        }
      />
    </ProjectDetailWrapper>
  );
};

export default ProjectDetail;
