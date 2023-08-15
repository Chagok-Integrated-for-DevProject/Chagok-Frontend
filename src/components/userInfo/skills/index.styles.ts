import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

interface ISelectBoxStyle {
  isEdit: boolean;
}

export const SkillsWrapper = styled.section`
  padding-block: 7.4rem 9.5rem;
  h2 {
    margin-bottom: 2.5rem;
  }
`;

export const SelectBox = styled.form<ISelectBoxStyle>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  margin-bottom: 5rem;

  ${({ isEdit }) =>
    isEdit &&
    css`
      > * {
        cursor: pointer;
      }
    `}
`;

export const OptionWrapper = styled.label`
  position: relative;

  img {
    position: absolute;
    left: 1.8rem;
    top: 50%;
    transform: translateY(-50%);
  }

  ::after {
    content: attr(data-name);
    display: block;
    position: absolute;
    left: 1.8rem;
    top: 50%;
    text-align: center;
    padding-left: 2rem;
    transform: translateY(-55%);
  }
`;

export const Option = styled.input`
  appearance: none;
  width: 11.08125rem;
  height: 3.5rem;
  border-radius: 1.875rem;
  border: 1px solid ${palette.bdGray200};

  :disabled {
    background-color: ${palette.bgGray300};
    border: none;
    cursor: default;
  }

  :checked {
    border: 3px solid ${palette.black};
  }

  cursor: pointer;
`;

export const SkillController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
`;
