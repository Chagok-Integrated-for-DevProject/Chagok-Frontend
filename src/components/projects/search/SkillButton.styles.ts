import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const SkillWrapper = styled.div`
  flex-basis: calc(100% / 3);
  margin-bottom: 1.4375rem;

  display: flex;
  align-items: center;
  gap: 0.9375rem;
`;

export const SkillName = styled.span`
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 700;
`;

export const CheckInput = styled.input`
  display: none;
`;

type TCheckLabel = {
  isChecked: boolean;
};

export const CheckLabel = styled("label", {
  shouldForwardProp: (props) => props !== "isChecked",
})<TCheckLabel>`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid
    ${({ isChecked }) =>
      isChecked ? `${palette.bgMainOrange}` : `${palette.black}`};
  border-radius: 100%;

  cursor: pointer;
  background-color: ${({ isChecked }) =>
    isChecked ? `${palette.bgMainOrange}` : "transparent"};
  box-shadow: ${({ isChecked }) =>
    isChecked ? `0px 4px 4px -1.5px ${palette.bgMainOrange}` : ""};
`;
