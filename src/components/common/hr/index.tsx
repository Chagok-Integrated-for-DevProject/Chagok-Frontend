import styled from "@emotion/styled";
import { palette } from "styles/palette";

const StyledHr = styled.div`
  border-top: 7px solid ${palette.bdGray400};
  margin-block: 1rem;
`;

const Hr = () => {
  return <StyledHr />;
};

export default Hr;
