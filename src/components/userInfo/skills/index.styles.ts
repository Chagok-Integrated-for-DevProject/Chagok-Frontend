import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const SkillsWrapper = styled.section`
  padding: 7.4rem 2.5rem 9.4rem;
  h2 {
    margin-bottom: 2.5rem;
  }
`;

export const SelectedSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  width: 100%;
  max-height: calc(100vh / 3);
  overflow-y: auto;

  margin-bottom: 5.5rem;
`;

export const SelectedSkillItem = styled.li`
  display: flex;
  align-items: center;

  gap: 0.9375rem;

  width: 11rem;
  height: 2.8125rem;
  padding: 0.625rem 1.8125rem;

  border: 3px solid ${palette.bdGray200};
  border-radius: 1.875rem;

  line-height: 1.3125rem;
`;

export const SkillController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
`;
