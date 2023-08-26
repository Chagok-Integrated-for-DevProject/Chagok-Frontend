import styled from "@emotion/styled";
import { palette } from "styles/palette";

const EmptyBox = styled.div`
  width: 100%;
  height: 80vh;
  background-color: ${palette.bgSubOrange};
  border-radius: 1rem;
  opacity: 0.7;
`;

const Loading = () => {
  return <EmptyBox />;
};

export default Loading;
