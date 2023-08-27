import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const ProjectListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 23.4375rem);
  grid-template-rows: repeat(3, 25.9375rem);
  gap: 2.375rem;

  margin: 6.4375rem 0;
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
`;
