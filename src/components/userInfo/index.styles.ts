import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

interface ButtonProps {
  backgroundColor: string;
}

export const TextStyle = css`
  color: #000;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
`;

export const Wrapper = styled.div`
  > *:nth-of-type(2n-1) {
    padding-inline: 2rem;
  }
  padding-block: 6rem;
`;

export const H2 = styled.h2`
  color: ${palette.black};
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.625rem;
`;

export const Label = styled.label`
  color: ${palette.black};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;
  min-width: fit-content;
`;

export const Button = styled.button<ButtonProps>`
  width: 9.6875rem;
  height: 2.8125rem;
  border: none;
  border-radius: 1.875rem;
  background-color: ${({ backgroundColor }) => backgroundColor};

  /* 내부 text styling */
  color: #fff;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
`;
