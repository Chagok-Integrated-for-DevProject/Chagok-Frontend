import { SKILLS } from "lib/constants/skills";

export const converToSkillId = (skillNames: string[]) => {
  const skillIds = [];

  for (let i = 0; i < skillNames.length; i++) {
    const findSkill = SKILLS.find((e) => e.skill === skillNames[i]);
    if (findSkill) {
      skillIds.push(findSkill.id);
    }
  }

  return skillIds;
};
