import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 20rem;
`;

const Loading = () => {
  return <Wrapper>Loading...</Wrapper>;
};

export default Loading;
