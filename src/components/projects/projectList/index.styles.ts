import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const ProjectListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(33% - 0.8rem));
  gap: 2.375rem;

  margin: 6.4375rem 0;

  @media ${breakPoints.md} {
    grid-template-columns: repeat(2, calc(50% - 0.8rem));
  }

  @media ${breakPoints.sm} {
    grid-template-columns: repeat(1, 100%);
  }
`;

export const GridItem = styled.div`
  padding: 2.3125rem;

  border-radius: 0.625rem;
  background: ${palette.white};
  box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.1);
`;

export const NoResultH1 = styled.h1`
  position: relative;
  font-size: 4rem;
  white-space: nowrap;

  @media ${breakPoints.sm} {
    font-size: 2rem;
  }

  @media ${breakPoints.xs} {
    font-size: 1.4rem;
  }
`;
