import { SKILLS } from "lib/constants/skills";
import Image from "next/image";
import type { ChangeEvent } from "react";

import { Option, OptionWrapper, SelectBox } from "./index.styles";

interface SkillContainerProps {
  isEditMode: boolean;
}

const SkillContainer = ({ isEditMode }: SkillContainerProps) => {
  const onClickSkill = (e: ChangeEvent<HTMLInputElement>) => {
    process.env.NODE_ENV === "development" && console.log(e.target.id);
  };
  return (
    <SelectBox isEdit={isEditMode}>
      {SKILLS.map((el) => (
        <OptionWrapper key={el.id} data-name={el.skill} htmlFor={el.id}>
          <Image width={24} height={24} src={el.img} alt={el.skill} />
          <Option
            id={el.id}
            disabled={!isEditMode}
            type="checkbox"
            onChange={onClickSkill}
          />
        </OptionWrapper>
      ))}
    </SelectBox>
  );
};

export default SkillContainer;
