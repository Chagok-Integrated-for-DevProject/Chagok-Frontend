import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { palette } from "styles/globalStyles";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const ActiveLink = styled(Link)`
  display: inline-block;

  height: 3.125rem;
  padding: 0 1rem;

  text-align: center;
  vertical-align: middle;

  background-color: ${palette.orange400};
  color: ${palette.white};

  border-radius: 1.5625rem;

  span {
    color: inherit;
    line-height: 3.125rem;
  }
`;

const active = css`
  background-color: ${palette.white};
  color: ${palette.orange400};
  font-weight: 700;
`;

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <ActiveLink href={href} css={isActive && active}>
      <span>{children}</span>
    </ActiveLink>
  );
};

export default NavLink;
