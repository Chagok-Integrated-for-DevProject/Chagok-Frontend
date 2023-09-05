import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const LoginBtn = styled.button`
  color: ${palette.black};
  font-weight: 400;
  size: 1.25rem;
  line-height: 1.875rem;

  padding: 0.375rem 2.5625rem;
  border-radius: 1.875rem;
  margin: 2.125rem 0;

  @media ${breakPoints.md} {
    size: 1rem;
    line-height: 1.3125rem;
    padding: 0.375rem 2rem;
    margin: 1rem 0;
  }
`;
