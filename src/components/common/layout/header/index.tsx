import SignupModal from "components/signup";
import useModal from "lib/hooks/useModal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [accessToken, setAccessToken] = useState("");

  const logout = () => {
    window.localStorage.removeItem("jwt");
    setAccessToken("");
  };

  useEffect(() => {
    const jwt = window.localStorage.getItem("jwt");
    if (!isModalOpen && accessToken === "" && jwt) {
      setAccessToken(jwt);
    }
  }, [accessToken, isModalOpen]);

  return (
    <>
      <HeaderOuterWrapper>
        <HeaderInnerWrapper>
          <Link href="/">
            <Image src={logo} alt="chagok logo" />
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
          <Hamburger />
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
