import SkillContainer from "components/common/skillContainer";
import { Button, Footer, H1 } from "components/signup/index.styles";

import * as S from "./index.styles";

const Skill = ({ onNext }: { onNext: () => void }) => {
  return (
    <S.SkillWrapper>
      <H1>김철수님의 관심 기술을 알려주세요!</H1>
      <S.P>언제든 기술 스택을 변경할 수 있어요.</S.P>
      <SkillContainer isEditMode={true} />
      <Footer>
        <Button>초기화</Button>
        <Button onClick={onNext}>설정완료</Button>
      </Footer>
    </S.SkillWrapper>
  );
};

export default Skill;
