import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";

export const SearchForm = styled.form`
  padding: 6rem 2.4375rem 1.25rem;
`;

export const FilterAndInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8125rem;

  width: 100%;
  margin: 2.875rem 0;

  @media ${breakPoints.md} {
    align-items: normal;
    flex-direction: column;
  }
`;

export const FilterAndInputInnerWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 1.8125rem;

  @media ${breakPoints.sm} {
    flex-direction: column;
  }
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 2.625rem;
`;
