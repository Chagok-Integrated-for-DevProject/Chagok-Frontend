import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const Wrapper = styled("div", {
  shouldForwardProp: (props) => props !== "mobileVisible",
})<{ mobileVisible: boolean }>`
  position: sticky;
  top: 10rem;
  z-index: 1;
  width: 314px;
  height: 400px;

  transition: top 1s linear;

  background-color: ${palette.bgWhite};

  border: 1px solid ${palette.bdMainOrange};
  border-radius: 0.625rem;

  padding: 1.5rem 1.75rem;

  @media ${breakPoints.sm} {
    display: ${({ mobileVisible }) => (mobileVisible ? "block" : "none")};

    width: ${({ mobileVisible }) => (mobileVisible ? "60vw" : "0")};
    max-width: 314px;
    padding: 1.5rem 1.1rem;

    overflow: hidden;
  }
`;

export const Title = styled.h1`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 2.3125rem;
  letter-spacing: -0.02rem;

  @media ${breakPoints.sm} {
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -2%;
  }
`;

export const Em = styled.em`
  font-weight: 700;
`;

export const Ul = styled.ul`
  list-style: disc;

  li {
    margin: 1rem auto 0 1.4rem;
    font-weight: 700;

    @media ${breakPoints.sm} {
      font-size: 0.875rem;
    }
  }
`;
