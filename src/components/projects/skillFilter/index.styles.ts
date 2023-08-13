import styled from "@emotion/styled";
import { palette } from "styles/palette";

type TIsOpen = {
  isOpen: boolean;
};

export const SkillFilterWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<TIsOpen>`
  position: relative;
  flex-grow: 1;
  margin-left: auto;

  background-color: ${palette.bgGray300};
  border-radius: 0.625rem ${({ isOpen }) => isOpen && "0.625rem 0 0"};
`;

export const SelectedSkillListWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  max-height: 60px;
  padding: 1.25rem 1.75rem;
  cursor: pointer;
`;

export const Placeholder = styled.span`
  font-size: 0.875rem;
  line-height: 1.1875rem;
  color: ${palette.fontGray100};
`;

export const Skill = styled.span`
  position: relative;
  z-index: 1;
  display: inline-block;

  background-color: ${palette.white};
  padding: 0.375rem 0.65rem;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);

  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 700;
  border-radius: 2rem;
  margin: 0.3rem 0.57rem 2rem 0;
`;

export const ThreeDots = styled.span`
  display: inline-block;
  font-weight: 700;
  vertical-align: middle;

  margin-left: auto;
  margin-bottom: 0.5rem;
`;

export const SkillCnt = styled.span`
  position: relative;
  z-index: 1;
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

  margin-left: 13px;
`;

export const SelectedSkillList = styled.div`
  flex-grow: 1;
  max-width: 386px;
  max-height: 76px;

  overflow: hidden;

  padding: 1rem 0.2rem;
`;

export const Hr = styled.hr`
  width: calc(100% - 5rem);
  height: 0.5px;
  background-color: ${palette.bdGray300};
  margin: 0 0 1.1875rem;
`;

export const Arrow = styled("div", {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<TIsOpen>`
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
`;
