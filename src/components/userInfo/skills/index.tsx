import SkillContainer from "components/common/skillContainer";
import { Button, H2 } from "components/userInfo/index.styles";
import { useState } from "react";
import { palette } from "styles/palette";

import * as S from "./index.styles";

const Skills = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <S.SkillsWrapper>
      <H2>나의 관심 스택</H2>
      <SkillContainer isEditMode={isEdit} />
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
