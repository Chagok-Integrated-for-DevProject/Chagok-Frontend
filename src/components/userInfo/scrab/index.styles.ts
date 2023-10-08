import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const ScrabWrapper = styled.section`
  padding-top: 5rem;

  h2 {
    margin-bottom: 2.5rem;
  }
`;

export const Navigation = styled.nav`
  color: ${palette.fontGray300};

  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;

  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
  }

  input:checked + label {
    color: ${palette.black};
  }

  label:hover {
    cursor: pointer;
  }

  li {
    position: relative;
  }

  margin-bottom: 3.5rem;
`;

export const Input = styled.input`
  appearance: none;
  position: absolute;
`;

export const ScrapList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4375rem;

  list-style-type: none;
`;

export const ScrapWrapper = styled.div`
  min-height: 500px;
`;
