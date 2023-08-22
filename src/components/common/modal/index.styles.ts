import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background: rgba(0 0 0 /0.7);
  backdrop-filter: blur(20px);
`;

export const Box = styled.div`
  position: relative;
  max-width: 42rem;
  max-height: 80vh;
  width: 100%;
  padding: 1.5rem;
  margin: 0 1rem;
  background-color: #f8f8f8;
  border-radius: 0.625rem;

  @media ${breakPoints.xs} {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media ${breakPoints.xs} {
    margin-bottom: 1.5rem;
  }
`;

export const PrevButton = styled.button`
  border: none;
  padding: 0.5rem;
`;

export const CloseButton = styled.button`
  border: none;
  padding: 0.5rem;
`;

export const Main = styled.div``;
