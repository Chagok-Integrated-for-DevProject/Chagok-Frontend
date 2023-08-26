export const converToSkillIdParams = (skillIds: string[]) => {
  let skillParams = "";
  for (let i = 0; i < skillIds.length; i++) {
    skillParams += `&techStacks=${skillIds[i]}`;
  }

  return skillParams;
};
