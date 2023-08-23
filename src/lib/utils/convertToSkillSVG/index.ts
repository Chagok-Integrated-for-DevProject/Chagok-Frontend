import { SKILLS } from "lib/constants/skills";

export const convertToSkillSVG = (skillNameList: string[]) => {
  const skillSVGArray = [];

  for (let i = 0; i < skillNameList.length; i++) {
    const SKILL = SKILLS.find((e) => e.id === skillNameList[i]);
    if (SKILL) {
      skillSVGArray.push(SKILL.img);
    }
  }

  return skillSVGArray;
};
