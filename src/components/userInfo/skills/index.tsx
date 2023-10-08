import SkillContainer from "components/common/skillContainer";
import { Button, H2 } from "components/userInfo/index.styles";
import { useJwtToken } from "lib/hooks/useJwtToken";
import { useUpdateSkillsMutation } from "lib/hooks/useMyInfoMutation";
import { useState } from "react";
import { palette } from "styles/palette";

import * as S from "./index.styles";

interface ISkillsProp {
  skills: string[];
}

const Skills = ({ skills: skillsData }: ISkillsProp) => {
  const { token: jwtToken } = useJwtToken();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>(skillsData ?? []);

  const { mutate: updateSkills } = useUpdateSkillsMutation(() => {
    setIsEdit(false);
  });

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

  const onUpdateSkills = () => {
    updateSkills({ skills, jwtToken });
  };

  return (
    <S.SkillsWrapper>
      <H2>나의 관심 스택</H2>
      <SkillContainer
        defaultCheckedSkills={skills}
        isEditMode={isEdit}
        handleSkills={handleSkills}
      />
      <S.SkillController>
        <Button
          backgroundColor={palette.black}
          onClick={isEdit ? onUpdateSkills : onClickEdit}
        >
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
