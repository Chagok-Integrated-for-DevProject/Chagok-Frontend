import styled from "@emotion/styled";

const SkeletonItem = styled.div`
  width: 100%;
  height: 100%;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 3.5s infinite ease-in-out;
  }
`;

export default SkeletonItem;
