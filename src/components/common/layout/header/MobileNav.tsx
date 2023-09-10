import styled from "@emotion/styled";
import Link from "next/link";
import { palette } from "styles/palette";

const MobileNav = () => {
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
        <Li>로그인</Li>
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
  height: 200px;
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
