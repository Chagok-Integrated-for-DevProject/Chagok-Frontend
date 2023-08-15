import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const ScrabWrapper = styled.section`
  color: ${palette.fontGray300};
  padding-top: 5rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 2.25rem;

  h2 {
    margin-bottom: 2.5rem;
  }
`;

export const Navigation = styled.nav`
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

export const ScrabList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;
`;

export const ProjectStudyWrapper = styled.div`
  max-width: 23.75rem;
  border-radius: 0.625rem;
  box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.1);
  padding: 2.3rem;
`;
