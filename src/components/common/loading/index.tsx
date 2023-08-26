import styled from "@emotion/styled";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Spinner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-size: 10rem;
`;

const Loading = () => {
  return (
    <Wrapper>
      <Spinner>Loading...</Spinner>
    </Wrapper>
  );
};

export default Loading;
