import styled from "@emotion/styled";
import { palette } from "styles/globalStyles";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 5%;

  width: 100%;
  max-width: 1280px;
  padding: 2.175rem 2.5rem;
  margin: 0 auto;

  background-color: ${palette.red100}; // palette 정해지면 수정할 것 (임시)

  font-size: 1rem;
`;

export const Logo = styled.div`
  width: 89px;
  height: 33px;

  font-size: 1.5rem;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    margin: 1rem;
    color: ${palette.white};
  }

  img {
    height: 1rem !important;
  }
`;

export const LoginBtn = styled.button`
  margin-left: auto;
  border: 0;

  color: ${palette.white};
`;
