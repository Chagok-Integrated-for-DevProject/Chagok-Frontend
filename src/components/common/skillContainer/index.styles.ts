import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

interface ISelectBoxStyle {
  isEdit: boolean;
}

export const SelectBox = styled.div<ISelectBoxStyle>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-height: calc(100vh / 3);
  margin-bottom: 5rem;
  overflow: scroll;
  ${({ isEdit }) =>
    isEdit &&
    css`
      > * {
        cursor: pointer;
      }
    `}

  @media ${breakPoints.xs} {
    margin-bottom: 1rem;
  }
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

  @media ${breakPoints.xs} {
    img {
      display: none;
    }

    ::after {
      padding-left: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
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

  @media ${breakPoints.xs} {
    width: 7rem;
    height: 2rem;
  }
`;
