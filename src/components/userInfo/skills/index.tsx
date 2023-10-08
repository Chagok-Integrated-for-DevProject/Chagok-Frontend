import SkillContainer from "components/common/skillContainer";
import { Button, H2 } from "components/userInfo/index.styles";
import { useGetMyInfoQuery } from "lib/hooks";
import { useJwtToken } from "lib/hooks/useJwtToken";
import { useUpdateSkillsMutation } from "lib/hooks/useMyInfoMutation";
import { getSkillObjs } from "lib/utils/getSkillObjs";
import Image from "next/image";
import { useState } from "react";
import { palette } from "styles/palette";

import * as S from "./index.styles";

const Skills = () => {
  const { token: jwtToken } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(jwtToken);

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);

  const { mutate: updateSkills } = useUpdateSkillsMutation(() => {
    setIsEdit(false);
  });

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);

    if (!isEdit && userInfo) {
      setSkills(userInfo.skills);
      return;
    }

    if (isEdit) {
      setSkills([]);
      return;
    }
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
      {isEdit && (
        <SkillContainer
          defaultCheckedSkills={skills}
          isEditMode={isEdit}
          handleSkills={handleSkills}
        />
      )}
      {userInfo && !isEdit && (
        <S.SelectedSkills>
          {getSkillObjs(userInfo.skills).map((e) => (
            <S.SelectedSkillItem key={e.id}>
              <Image src={e.img} alt={e.id} width={21} />
              <span>{e.skill}</span>
            </S.SelectedSkillItem>
          ))}
        </S.SelectedSkills>
      )}
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
