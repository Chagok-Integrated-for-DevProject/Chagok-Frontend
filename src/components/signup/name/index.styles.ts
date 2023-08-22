import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const NameWrapper = styled.div<{ isError: boolean }>`
  h1 {
    margin-bottom: 2rem;
  }

  ${({ isError }) =>
    isError &&
    css`
      input {
        border-color: ${palette.bdMainOrange};
      }

      p {
        color: ${palette.fontMainOrange};
      }
    `}
`;

export const Strong = styled.strong`
  color: ${palette.fontMainOrange};
  font-weight: 700;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NameInputBox = styled.div`
  position: relative;
  max-width: 22.75rem;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.125rem;
  padding: 0.5rem 1rem;
  border-radius: 0.625rem;
  border: 1px solid ${palette.bdGray200};
  background: #fff;

  font-size: 1.25rem;
`;

export const DuplicationCheck = styled.button`
  display: block;
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  border: none;
  color: ${palette.fontBlue100};
`;

export const Notification = styled.p`
  color: #757575;
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  margin-bottom: 2.5rem;
`;
