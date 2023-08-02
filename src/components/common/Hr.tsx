import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledHr = styled.div`
  border-top: 7px solid #f2f2f2;
  margin-block: 1rem;
  width: 1vw;
  transform: scaleX(100);
`;

const Hr = () => {
  return (
    <Wrapper>
      <StyledHr />
    </Wrapper>
  );
};

export default Hr;
