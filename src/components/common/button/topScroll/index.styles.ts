import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const CircleBtn = styled.button`
  display: block;

  width: 4.5rem;
  height: 4.5rem;

  background-color: ${palette.bgMainOrange};
  border: 0;
  border-radius: 100%;

  margin: 0 2rem 0 auto;

  cursor: pointer;

  svg {
    transform: rotate(180deg);
  }
`;
