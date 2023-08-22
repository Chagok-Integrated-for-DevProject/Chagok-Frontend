import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const DoneWrapper = styled.div`
  text-align: center;

  svg {
    transform: scale(1.65);
    margin-bottom: 1.7rem;
  }

  h1 {
    margin-bottom: 1rem;
  }
`;

export const Strong = styled.strong`
  color: ${palette.fontMainOrange};
  font-weight: 700;
`;

export const P = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 5rem;
`;
