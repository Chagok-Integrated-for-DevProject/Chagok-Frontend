import Image from "next/image";

import dot from "/public/dot.svg";
import logo from "/public/logo.svg";

import {
  HeaderInnerWrapper,
  HeaderOuterWrapper,
  LoginBtn,
  Navigation,
} from "./Header.styles";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <HeaderOuterWrapper>
      <HeaderInnerWrapper>
        <Image src={logo} alt="chagok logo" />
        <Navigation>
          <ul>
            <li>
              <NavLink href="/">홈</NavLink>
              <Image src={dot} alt="middle dot" />
            </li>
            <li>
              <NavLink href="/hackathons">해커톤</NavLink>
              <Image src={dot} alt="middle dot" />
            </li>
            <li>
              <NavLink href="/projects" query={{ purpose: "study" }}>
                스터디 / 프로젝트
              </NavLink>
            </li>
          </ul>
        </Navigation>
        <LoginBtn type="button">로그인</LoginBtn>
      </HeaderInnerWrapper>
    </HeaderOuterWrapper>
  );
};

export default Header;
