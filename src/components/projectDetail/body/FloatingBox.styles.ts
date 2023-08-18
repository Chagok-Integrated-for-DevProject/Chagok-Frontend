import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const Wrapper = styled.div`
  position: sticky;
  top: 10rem;
  height: 400px;

  transition: top 1s linear;

  border: 1px solid ${palette.bdMainOrange};
  border-radius: 0.625rem;

  padding: 1.5rem 1.75rem;
`;

export const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 2.3125rem;
  letter-spacing: -0.02em;
`;

export const Em = styled.em`
  font-weight: 700;
`;

export const Ul = styled.ul`
  list-style: disc;

  li {
    margin: 1rem auto 0 1.4rem;
    font-weight: 700;
  }
`;
