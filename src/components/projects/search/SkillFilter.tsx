import { SKILLS } from "lib/constants/skills";
import Image from "next/image";
import type { FC } from "react";
import { useState } from "react";

import bottomArrow from "/public/bottom_arrow.svg";

import SkillButton from "./SkillButton";
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
} from "./SkillFilter.styles";

interface SkillFilterProps {
  handleSelectedSkills: (skill: string) => void;
  selectedSkills: string[];
}

const SkillFilter: FC<SkillFilterProps> = ({
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
        {selectedSkills.slice(0, 3).map((e) => (
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
          <Image src={bottomArrow} alt="show skill options" />
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
