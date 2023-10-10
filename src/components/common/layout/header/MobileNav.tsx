import styled from "@emotion/styled";
import { useJwtToken } from "lib/hooks/useJwtToken";
import Link from "next/link";
import type { FC } from "react";
import { palette } from "styles/palette";

interface IMobileNavProps {
  openModal: () => void;
}

const MobileNav: FC<IMobileNavProps> = ({ openModal }) => {
  const { token: accessToken, logout } = useJwtToken();

  return (
    <Wrapper>
      <ul>
        <Li>
          <NavLink href="/">홈</NavLink>
        </Li>
        <Li>
          <NavLink href="/hackathons">해커톤</NavLink>
        </Li>
        <Li>
          <NavLink href="/projects?purpose=project">스터디 / 프로젝트</NavLink>
        </Li>
        {accessToken !== "" && (
          <Li>
            <NavLink href="/userInfo">마이페이지</NavLink>
          </Li>
        )}
        <Li>
          {accessToken === "" && (
            <LoginBtn type="button" onClick={openModal}>
              로그인
            </LoginBtn>
          )}
          {accessToken !== "" && (
            <LoginBtn type="button" onClick={logout}>
              로그아웃
            </LoginBtn>
          )}
        </Li>
      </ul>
    </Wrapper>
  );
};

export default MobileNav;

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;

  width: 200px;

  background-color: ${palette.white};

  border: 0;
  border-radius: 0.625rem;
  overflow: hidden;

  box-shadow: 0px 1px 50px 0px #0000001a;
`;

const Li = styled.li`
  height: 50px;
  line-height: 50px;

  text-align: center;

  :hover {
    background-color: ${palette.bgSubOrange};
  }
`;

const NavLink = styled(Link)`
  color: inherit;
`;

const LoginBtn = styled.button`
  width: 100%;
  height: 100%;

  font-size: 1rem;
  line-height: 50px;
  border: 0;
`;
