import SkillContainer from "components/common/skillContainer";
import { Button, H2 } from "components/userInfo/index.styles";
import { useState } from "react";
import { palette } from "styles/palette";

import * as S from "./index.styles";

const Skills = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleSkills = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((e) => e !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  return (
    <S.SkillsWrapper>
      <H2>나의 관심 스택</H2>
      <SkillContainer isEditMode={isEdit} handleSkills={handleSkills} />
      <S.SkillController>
        <Button backgroundColor={palette.black} onClick={onClickEdit}>
          수정하기
        </Button>
        {isEdit && (
          <Button backgroundColor={palette.black} onClick={onClickEdit}>
            취소하기
          </Button>
        )}
      </S.SkillController>
    </S.SkillsWrapper>
  );
};

export default Skills;
