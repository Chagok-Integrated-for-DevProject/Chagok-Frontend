import SignupModal from "components/signup";
import { useJwtToken } from "lib/hooks/useJwtToken";
import useModal from "lib/hooks/useModal";
import Image from "next/image";
import Link from "next/link";

import logo from "/public/logo.svg";
import dot from "/public/utils/dot.svg";

import Hamburger from "./Hamburger";
import {
  HeaderInnerWrapper,
  HeaderOuterWrapper,
  LoginBtn,
  LogoutBtn,
  LogoutUI,
  Navigation,
} from "./index.styles";
import NavLink from "./NavLink";

const Header = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { token: accessToken, logout } = useJwtToken();

  return (
    <>
      <HeaderOuterWrapper>
        <HeaderInnerWrapper>
          <Link href="/">
            <Image
              src={logo}
              alt="차곡 - 사이드 프로젝트, 해커톤 모집 사이트"
            />
          </Link>
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
          {accessToken === "" && (
            <LoginBtn type="button" onClick={openModal}>
              {/** @desktop */}
              로그인
            </LoginBtn>
          )}
          {accessToken.length > 0 && (
            <LogoutUI>
              <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
            </LogoutUI>
          )}
          <Hamburger openModal={openModal} />
        </HeaderInnerWrapper>
      </HeaderOuterWrapper>
      {/** @desktop */}
      {accessToken === "" && (
        <SignupModal
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default Header;
