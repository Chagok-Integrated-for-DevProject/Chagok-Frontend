import Image from "next/image";
import Link from "next/link";

import dot from "/public/dot.svg";
import logo from "/public/logo.svg";

import { HeaderWrapper, LoginBtn, Navigation } from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <Image src={logo} alt="chagok logo" />
      <Navigation>
        <ul>
          <li>
            <Link href="/">
              <span>홈</span>
            </Link>
            <Image src={dot} alt="middle dot" />
          </li>
          <li>
            <Link href="/contests">
              <span>해커톤 / 공모전</span>
            </Link>
            <Image src={dot} alt="middle dot" />
          </li>
          <li>
            <Link href="/projects">
              <span>스터디 / 프로젝트</span>
            </Link>
          </li>
        </ul>
      </Navigation>
      <LoginBtn type="button">로그인</LoginBtn>
    </HeaderWrapper>
  );
};

export default Header;
