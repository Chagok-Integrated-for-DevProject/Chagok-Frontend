import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const SkillFilterWrapper = styled.div`
  position: relative;
  width: 34rem;
  margin-left: auto;

  background-color: ${palette.bgGray300};
  border-radius: 0.625rem;
`;

export const SelectedSkillListWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-height: 76px;

  padding: 1.25rem 1.75rem;
  cursor: pointer;
`;

export const Placeholder = styled.span`
  font-size: 0.875rem;
  line-height: 1.1875rem;
  color: ${palette.fontGray100};
`;

export const Skill = styled.span`
  display: inline-block;

  background-color: ${palette.white};
  padding: 0.375rem 1.12rem;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 700;
  border-radius: 2rem;
  margin: 0.3rem 0.625rem 2rem 0;
`;

export const ThreeDots = styled.span`
  display: inline-block;
  font-weight: 700;
  vertical-align: middle;

  margin-left: auto;
  margin-bottom: 0.5rem;
`;

export const SkillCnt = styled.span`
  display: inline-block;
  min-width: 2.0625rem;
  height: 2.0625rem;
  text-align: center;

  background-color: ${palette.white};

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  font-size: 0.875rem;
  line-height: 2.0625rem;
  font-weight: 700;
  border-radius: 100%;

  margin-left: auto;
`;

export const SelectedSkillList = styled.div`
  flex-grow: 1;
  max-width: 76%;
  max-height: 76px;

  white-space: nowrap;

  padding: 1rem 0.2rem;
`;

export const Hr = styled.hr`
  width: calc(100% - 4.3rem);
  height: 0.5px;
  background-color: ${palette.bdGray300};
  margin: 0 0 1.1875rem;
`;

type TArrow = {
  isOpen: boolean;
};

export const Arrow = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<TArrow>`
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0")});
  margin-left: auto;
`;

export const SKillOptionsWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  background-color: ${palette.bgGray300};
  padding-left: 1.5625rem;

  border-radius: 0 0 0.625rem 0.625rem;

  margin-top: -7px;
`;
