import ArrowSVG from "components/common/arrow";
import SkillButton from "components/projects/skillButton";
import { SKILLS } from "lib/constants/skills";
import type { FC } from "react";
import { useState } from "react";
import { palette } from "styles/palette";

import {
  Arrow,
  Hr,
  Placeholder,
  SelectedSkillList,
  SelectedSkillListWrapper,
  Skill,
  SkillCnt,
  SkillFilterWrapper,
  SKillOptionsWrapper,
  ThreeDots,
} from "./index.styles";

interface ISkillFilterProps {
  handleSelectedSkills: (skill: string) => void;
  selectedSkills: string[];
}

const SkillFilter: FC<ISkillFilterProps> = ({
  handleSelectedSkills,
  selectedSkills,
}) => {
  const [selectorOpen, SetSelectorOpen] = useState(false);

  const handleSelectorOpen = () => {
    SetSelectorOpen(!selectorOpen);
  };

  const SelectedSkills = () => {
    return (
      <>
        {selectedSkills.map((e) => (
          <Skill key={e}>{e}</Skill>
        ))}
      </>
    );
  };

  const SkillButtons = () => {
    return (
      <>
        {SKILLS.map((e) => {
          const isChecked = selectedSkills.includes(e.skill);

          return (
            <SkillButton
              key={e.id}
              skillName={`${e.skill}`}
              handleSelectedSkills={handleSelectedSkills}
              isChecked={isChecked}
            />
          );
        })}
      </>
    );
  };

  return (
    <SkillFilterWrapper isOpen={selectorOpen}>
      <SelectedSkillListWrapper onClick={handleSelectorOpen}>
        <SelectedSkillList>
          {selectedSkills.length ? (
            <SelectedSkills />
          ) : (
            <Placeholder>원하는 태그를 선택해보세요.</Placeholder>
          )}
        </SelectedSkillList>
        {selectedSkills.length > 2 && (
          <>
            <ThreeDots>...</ThreeDots>
            <SkillCnt>{selectedSkills.length}</SkillCnt>
          </>
        )}
        <Arrow isOpen={selectorOpen}>
          <ArrowSVG width={40} color={`${palette.fontGray100}`} />
        </Arrow>
      </SelectedSkillListWrapper>
      {selectorOpen && (
        <SKillOptionsWrapper data-testid="skillList">
          <Hr />
          <SkillButtons />
        </SKillOptionsWrapper>
      )}
    </SkillFilterWrapper>
  );
};
export default SkillFilter;
