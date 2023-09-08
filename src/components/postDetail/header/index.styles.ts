import styled from "@emotion/styled";
import Link from "next/link";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const GoBackBtn = styled.button`
  border: 0;
  margin: 2.1875rem 0;
`;

export const TagList = styled.div`
  white-space: nowrap;
`;

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

export const BtnPostion = styled.div`
  position: absolute;
  top: 9.75rem;
  right: 0;

  display: flex;
`;

export const Title = styled.h1`
  flex-grow: 1;

  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.625rem;
  letter-spacing: -0.02em;
  text-align: left;

  padding-right: 4.5rem;
  margin: 1.875rem 0;
`;

export const PostInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${breakPoints.sm} {
    flex-direction: column;
    align-items: start;
  }
`;

export const Dates = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: ${palette.fontGray300};

  @media ${breakPoints.sm} {
    display: none;
  }
`;

export const ViewCnt = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
  color: ${palette.fontGray300};

  margin-left: 1.5625rem;

  @media ${breakPoints.sm} {
    margin-left: 0;
  }
`;

export const ScrapCnt = styled.span`
  font-size: 1.25rem;
  line-height: 1.6875rem;
  font-weight: 700;

  margin-left: 0.9375rem;
  margin-right: 2.5rem;
`;

export const OriginLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.875rem;

  margin-left: auto;

  svg {
    margin-bottom: -0.6rem;
    transform: rotate(270deg);

    @media ${breakPoints.sm} {
      margin-bottom: -0.5rem;
      width: 1.9rem;
    }

    @media ${breakPoints.xs} {
      display: none;
    }
  }

  @media ${breakPoints.sm} {
    margin-left: 0;
    font-size: 1.1rem;
  }
`;

export const RecommendationBtn = styled.button`
  width: 4.0625rem;
  min-width: 4.0625rem;
  height: 4.0625rem;
  border: 0;
  border-radius: 0.625rem;
  background-color: ${palette.bgMainOrange};
  color: ${palette.white};

  @media ${breakPoints.sm} {
    font-size: 0.75rem;
  }
`;

export const DesktopWrapper = styled.div`
  @media ${breakPoints.sm} {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  display: none;
  @media ${breakPoints.sm} {
    display: flex;

    button {
      padding: 0;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
