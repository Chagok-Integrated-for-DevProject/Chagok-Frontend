import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 100%;

  margin: 8% auto auto 7%;
`;

export const H2 = styled.h2`
  color: ${palette.black};
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  /*@media ${breakPoints.md} {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }*/

  @media ${breakPoints.sm} {
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  @media ${breakPoints.xs} {
  }
`;

export const Em = styled.em`
  color: ${palette.fontMainOrange};
`;
