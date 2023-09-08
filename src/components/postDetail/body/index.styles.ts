import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const BodyWrapper = styled.div`
  display: flex;
  padding-bottom: 5rem;
`;

export const MainContentWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 70%;
  padding: 0 4rem 0 0;

  @media ${breakPoints.sm} {
    padding-right: 0;
  }
`;

export const SkillListWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const H2 = styled.h2`
  display: inline-block;

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.0625rem;
  letter-spacing: 0.01em;

  margin: 2rem 0;

  @media ${breakPoints.sm} {
    font-size: 1.25rem;
  }
`;

export const SkillList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.1875rem;
`;

export const SkillItem = styled.li``;

export const VerticalDivider = styled.div`
  display: inline-block;
  width: 2px;
  height: 1.5rem;

  background-color: ${palette.bgGray100};

  margin: 0 2.0625rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  white-space: pre-wrap;
  img {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.0625rem;
    letter-spacing: 0.01em;

    @media ${breakPoints.sm} {
      font-size: 1.3rem;
    }
  }

  p {
    font-family: Noto Sans;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 2.3125rem;
    letter-spacing: -0.02em;

    @media ${breakPoints.sm} {
      font-size: 1rem;
    }

    @media ${breakPoints.xs} {
      font-size: 0.875rem;
    }
  }

  a {
    color: ${palette.fontBlue100};
  }
`;

export const DesktopWrapper = styled.div`
  @media ${breakPoints.sm} {
    display: none;
  }
`;
