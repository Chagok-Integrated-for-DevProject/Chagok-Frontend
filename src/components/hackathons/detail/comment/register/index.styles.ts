import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

interface NewCommentContainerProps {
  isFocused: boolean;
}

export const NewCommentContainer = styled.div<NewCommentContainerProps>`
  border: 1px solid
    ${({ isFocused }) => (isFocused ? palette.bdBlue100 : palette.bdGray300)};
  border-radius: 0.625rem;
  padding-left: 2rem;
  background-color: #fff;
  overflow: hidden;

  ${({ isFocused }) =>
    isFocused &&
    css`
      display: flex;

      div:first-of-type {
        width: 100%;
      }

      input:nth-of-type(2),
      button,
      .newCommentHr {
        display: block;
      }
    `}

  color: #000;
  font-size: 1.25rem;
  font-weight: 400;

  transition: all 0.1s ease-in-out;
  :hover {
    border: 1px solid ${palette.bdBlue100};
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 2rem 0;
  border: none;

  :nth-of-type(2) {
    display: none;
  }
`;

export const Hr = styled.div`
  display: none;
  border-top: 1px solid ${palette.bdGray200};
`;

export const SubmitButton = styled.button`
  display: none;
  max-width: 8.5rem;
  width: 100%;
  border: none;

  color: #000;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.875rem;
`;
