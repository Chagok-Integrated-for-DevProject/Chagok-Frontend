import styled from "@emotion/styled";
import Image from "next/image";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const CardWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CustomImg = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 55.625rem;
  height: 26.125rem;

  @media ${breakPoints.md} {
    width: 42rem;
    height: 20rem;
  }

  @media ${breakPoints.sm} {
    width: 32rem;
    height: 14rem;
  }

  @media ${breakPoints.xs} {
    width: 110vw;
    height: 60vw;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  z-index: 1;

  height: 100%;

  top: 23%;
  left: 7%;

  @media ${breakPoints.md} {
    top: 8%;
  }
`;

export const H2 = styled.h2`
  color: ${palette.black};
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  @media ${breakPoints.md} {
    font-size: 1.5rem;
    line-height: 2.4rem;
  }

  @media ${breakPoints.sm} {
    line-height: 2.2rem;
  }

  @media ${breakPoints.xs} {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;

export const Em = styled.em`
  color: ${palette.fontMainOrange};
`;
