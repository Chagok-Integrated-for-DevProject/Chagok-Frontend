import { SKILLS } from "lib/constants/skills";

export const getSkillObjs = (skills: string[]) => {
  const skillObjs = [];

  for (let i = 0; i < skills.length; i++) {
    const findSkill = SKILLS.find((e) => e.id === skills[i]);

    if (findSkill) {
      skillObjs.push(findSkill);
    }
  }

  return skillObjs;
};
