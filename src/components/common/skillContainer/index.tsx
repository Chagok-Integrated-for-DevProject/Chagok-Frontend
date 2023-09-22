import { SKILLS } from "lib/constants/skills";
import Image from "next/image";

import { Option, OptionWrapper, SelectBox } from "./index.styles";

interface SkillContainerProps {
  isEditMode: boolean;
  handleSkills: (skill: string) => void;
}

const SkillContainer = ({ isEditMode, handleSkills }: SkillContainerProps) => {
  return (
    <SelectBox isEdit={isEditMode}>
      {SKILLS.map((el) => (
        <OptionWrapper key={el.id} data-name={el.skill} htmlFor={el.id}>
          <Image width={24} height={24} src={el.img} alt={el.skill} />
          <Option
            id={el.id}
            disabled={!isEditMode}
            type="checkbox"
            onChange={() => handleSkills(el.id)}
          />
        </OptionWrapper>
      ))}
    </SelectBox>
  );
};

export default SkillContainer;
