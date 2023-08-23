import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const BackgroundDiv = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 10rem);

  background-color: ${palette.bgWhite};
`;

export const TextBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 2rem;
  line-height: 2.6rem;
  font-weight: 700;
  color: ${palette.fontMainOrange};
`;

export const H1 = styled.h1`
  font-size: 1.9rem;
  line-height: 2.6rem;
  font-weight: 700;
  color: ${palette.fontMainOrange};

  text-align: center;
`;

export const ReloadBtn = styled.button`
  display: block;
  background-color: ${palette.bgMainOrange};
  color: ${palette.white};

  padding: 0.6rem 1.5rem;
  border-radius: 1rem;
  border: 0;
  margin: 1rem auto;

  font-size: 1.3rem;
  font-weight: 700;

  &:hover {
    background-color: #efb600;
  }
`;
