import styled from "@emotion/styled";
import { palette } from "styles/globalStyles";

export const HeaderOuterWrapper = styled.header`
  width: 100%;
  background-color: ${palette.orange400};
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;

  width: 100%;
  max-width: 1280px;
  padding: 2.175rem 2.5rem;
  margin: 0 auto;

  font-size: 1rem;
`;

export const Logo = styled.div`
  width: 89px;
  height: 33px;

  font-size: 1.5rem;
`;

export const Navigation = styled.nav`
  height: 3.125rem;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100%;
  }

  img {
    height: 1rem !important;
    vertical-align: middle;
    margin: 0 1rem;
  }
`;

export const LoginBtn = styled.button`
  margin-left: auto;
  border: 0;

  color: ${palette.white};
`;
