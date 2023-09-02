import styled from "@emotion/styled";

export const SocialWrapper = styled.div``;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 2.45rem;
`;

export const SocialSelecBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20%;
  margin-bottom: 2.25rem;
  button {
    max-width: 6.875rem;
    aspect-ratio: 1 / 1;
    width: 100%;
    border: none;
    border-radius: 0.625rem;
    box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const Google = styled.button`
  background-color: #fff;
`;

export const Kakao = styled.button`
  background-color: #fae100;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20%;
  margin-bottom: 6.5rem;

  label {
    color: #000;
    text-align: center;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;
