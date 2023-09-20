import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const SearchInputWrapper = styled.div`
  position: relative;
  background-color: ${palette.bgGray300};
  border-radius: 0.625rem;
  overflow: hidden;
`;

export const Input = styled.input`
  position: relative;
  z-index: 1;

  width: 24.8125rem;
  height: 3.75rem;
  max-height: 60px;
  background-color: transparent;

  padding: 1.25rem;
  border: 0;

  font-size: 0.875rem;
  line-height: 1.1875rem;
`;

export const Label = styled.label`
  position: absolute;

  top: 1.2rem;
  left: 1.5rem;

  display: block;

  font-size: 0.875rem;
  line-height: 1.1875rem;
  color: ${palette.fontGray100};
`;

export const Placeholder = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;
