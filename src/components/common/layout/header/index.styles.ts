import styled from "@emotion/styled";
import Link from "next/link";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const HeaderOuterWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  background-color: ${palette.bgMainOrange};
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5%;

  width: 100%;
  max-width: 1280px;
  padding: 1rem 2.5rem;
  margin: 0 auto;

  font-size: 1rem;

  @media ${breakPoints.xs} {
    padding: 1rem 1.5rem;
  }
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

  @media ${breakPoints.sm} {
    display: none;
  }
`;

export const LoginBtn = styled.button`
  margin-left: auto;
  border: 0;

  color: ${palette.white};

  @media ${breakPoints.sm} {
    display: none;
  }
`;

export const LogoutUI = styled.div`
  display: flex;
  margin-left: auto;
  gap: 2.0625rem;
`;

export const LogoutBtn = styled.button`
  border: 0;
`;

export const LogoutText = styled.span`
  color: ${palette.white};
  font-size: 1rem;
  line-height: 1.45rem;

  margin: 7px;
`;

export const MyPageLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  width: 5.0625rem;
  height: 3.125rem;
  border-radius: 1.875rem;

  background-color: ${palette.white};
`;
