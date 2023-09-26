import styled from "@emotion/styled";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

import MobileNav from "./MobileNav";

interface IHamburgerProps {
  openModal: () => void;
}

const Hamburger: FC<IHamburgerProps> = ({ openModal }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target as Node)
      ) {
        setMobileNav(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [hamburgerRef]);

  return (
    <Wrapper ref={hamburgerRef}>
      <HamburgerBtn onClick={handleMobileNav}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerBtn>
      {mobileNav && <MobileNav openModal={openModal} />}
    </Wrapper>
  );
};

export default Hamburger;

const Wrapper = styled.div`
  position: relative;
  display: none;
  margin-left: auto;

  @media ${breakPoints.sm} {
    display: block;
  }
`;

const HamburgerBtn = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 22px;
  height: 18px;

  padding: 0;
  border: 0;
`;

const HamburgerLine = styled.span`
  display: block;
  width: 18px;
  height: 3px;

  background-color: ${palette.white};
  border-radius: 3px;
`;
