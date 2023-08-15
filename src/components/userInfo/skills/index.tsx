import { Button, H2 } from "components/userInfo/index.styles";
import { SKILLS } from "lib/constants/skills";
import Image from "next/image";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { palette } from "styles/palette";

import * as S from "./index.styles";

const Skills = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const onClickSkill = (e: ChangeEvent<HTMLInputElement>) => {
    process.env.NODE_ENV === "development" && console.log(e.target.id);
  };
  return (
    <S.SkillsWrapper>
      <H2>나의 관심 스택</H2>
      <S.SelectBox isEdit={isEdit}>
        {SKILLS.map((el) => (
          <S.OptionWrapper key={el.id} data-name={el.skill} htmlFor={el.id}>
            <Image width={24} height={24} src={el.img} alt={el.skill} />
            <S.Option
              id={el.id}
              disabled={!isEdit}
              type="checkbox"
              onChange={onClickSkill}
            />
          </S.OptionWrapper>
        ))}
      </S.SelectBox>
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
