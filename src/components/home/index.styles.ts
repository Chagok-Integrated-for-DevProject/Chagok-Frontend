import styled from "@emotion/styled";
import Link from "next/link";
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
`;
