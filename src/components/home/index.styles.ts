import styled from "@emotion/styled";
import Link from "next/link";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

/** common for HomePage */

export const Section = styled.section`
  position: relative;
  padding: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
`;

export const H2 = styled.h2`
  font-size: 1.75rem;
  line-height: 2.6875rem;
  font-weight: 700;

  margin: 2rem 0 0.5rem;

  @media ${breakPoints.sm} {
    font-size: 1.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 5rem 0 1rem;
`;

export const Br = styled.br`
  display: none;

  @media ${breakPoints.xs} {
    display: block;
  }
`;

export const P = styled.p`
  font-size: 1.125rem;
  line-height: 1.6875rem;
  font-weight: 400;
`;

export const ShowMore = styled(Link)`
  position: absolute;
  top: 4rem;
  right: 1.5rem;

  display: flex;
  align-items: center;

  font-size: 1.25rem;
  line-height: 1.875rem;

  span {
    margin-right: 1rem;
    color: ${palette.fontGray300};
  }

  svg {
    transform: rotate(270deg);
  }

  @media ${breakPoints.xs} {
    span {
      margin-right: 0rem;
      font-size: 1rem;
      color: ${palette.fontGray300};
    }

    svg {
      transform: rotate(270deg);
      width: 1.4rem;
    }
  }
`;
