import SignupModal from "components/signup";
import { useJwtToken } from "lib/hooks/useJwtToken";
import useModal from "lib/hooks/useModal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import logo from "/public/logo.svg";
import dot from "/public/utils/dot.svg";

import Hamburger from "./Hamburger";
import {
  HeaderInnerWrapper,
  HeaderOuterWrapper,
  LoginBtn,
  LogoutBtn,
  LogoutUI,
  MyPageButton,
  Navigation,
} from "./index.styles";
import NavLink from "./NavLink";

const Header = () => {
  const router = useRouter();
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
          {/* <SmallNavBox> */}
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
          {accessToken.length > 0 && (
            <MyPageButton onClick={() => router.push("/userInfo")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <circle cx="10" cy="5" r="4" stroke="black" strokeWidth="2" />
                <path
                  d="M1 19C1 17.666 1.241 16.3478 1.70648 15.1219C2.17197 13.8959 2.8508 12.7914 3.69715 11.8681C4.54327 10.9451 5.53787 10.2236 6.61827 9.73539C7.69775 9.2476 8.84621 9 10 9C11.1538 9 12.3022 9.2476 13.3817 9.73539C14.4621 10.2236 15.4567 10.9451 16.3028 11.8681C17.1492 12.7914 17.828 13.8959 18.2935 15.1219C18.759 16.3478 19 17.666 19 19"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
              My
            </MyPageButton>
          )}
          <Hamburger openModal={openModal} />
          {/* </SmallNavBox> */}
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
