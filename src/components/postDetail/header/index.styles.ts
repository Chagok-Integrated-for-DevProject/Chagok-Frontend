import styled from "@emotion/styled";
import Link from "next/link";
import { palette } from "styles/palette";

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const GoBackBtn = styled.button`
  border: 0;
  margin: 2.1875rem 0;
`;

export const TagList = styled.div``;

type TTagItem = {
  bgColor: string | undefined;
};

export const TagItem = styled("span", {
  shouldForwardProp: (props) => props !== "bgColor",
})<TTagItem>`
  background-color: ${({ bgColor }) => bgColor};
  padding: 0.1875rem 1.375rem;
  border-radius: 1.875rem;
  margin-right: 0.625rem;

  color: ${palette.white};
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.625rem;
  letter-spacing: -0.02em;
  text-align: left;

  margin: 1.875rem 0;
`;

export const BtnPosition = styled.div`
  position: absolute;
  top: 8.4rem;
  right: 1rem;

  max-width: 40px;
`;

export const PostInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNickName = styled.span`
  display: inline-block;
  margin-left: 7px;

  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
  text-align: right;
`;

export const Dates = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: ${palette.fontGray300};

  margin-left: 3.1875rem;
`;

export const ViewCnt = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: ${palette.fontGray300};

  margin-left: 1.5625rem;
`;

export const OriginLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.875rem;

  margin-left: auto;

  svg {
    margin-bottom: -0.6rem;
    transform: rotate(270deg);
  }
`;
