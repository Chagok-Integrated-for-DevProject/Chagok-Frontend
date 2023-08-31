import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "styles/palette";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Spinner = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: inline-block;
  width: 4rem;
  height: 4rem;
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top: 6px solid ${palette.bgMainOrange};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default Loading;
