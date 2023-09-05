import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";

export const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  min-height: 90vh;
  box-sizing: border-box;

  padding-top: 5.125rem;
  margin: 0 auto;

  @media ${breakPoints.sm} {
    padding-top: 3.8125rem;
  }
`;
