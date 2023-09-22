import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const H1 = styled.h1`
  color: ${palette.black};
  text-align: center;
  vertical-align: middle;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.25rem;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
  @media ${breakPoints.xs} {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  max-width: 11rem;
  width: 100%;
  border-radius: 1.875rem;
  border: 1px solid #000;
  background: #fff;
  padding: 0.5rem 3rem;

  &:disabled {
    cursor: not-allowed;
  }
`;
