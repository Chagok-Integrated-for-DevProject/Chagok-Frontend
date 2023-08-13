import type { FC } from "react";

import {
  CheckInput,
  CheckLabel,
  SkillName,
  SkillWrapper,
} from "./index.styles";

interface SkillButtonProps {
  isChecked: boolean;
  skillName: string;
  handleSelectedSkills: (skill: string) => void;
}

const SkillButton: FC<SkillButtonProps> = ({
  isChecked,
  skillName,
  handleSelectedSkills,
}) => {
  return (
    <SkillWrapper>
      <CheckInput
        id={skillName}
        type="checkbox"
        onClick={() => handleSelectedSkills(skillName)}
      />
      <CheckLabel
        htmlFor={skillName}
        isChecked={isChecked}
        data-testid={skillName}
      />
      <SkillName>{skillName}</SkillName>
    </SkillWrapper>
  );
};

export default SkillButton;
