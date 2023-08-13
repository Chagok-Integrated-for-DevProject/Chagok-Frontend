import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const PaginationWrapper = styled.div`
  display: flex;
  margin: 2.4375rem auto;
`;

type TPageNumberBtn = {
  isCurrentPage: boolean;
};

export const PageNumberBtn = styled("button", {
  shouldForwardProp: (prop) => prop !== "isCurrentPage",
})<TPageNumberBtn>`
  width: 2rem;
  height: 2rem;
  background-color: ${({ isCurrentPage }) =>
    isCurrentPage ? `${palette.bgMainOrange}` : "transparent"};
  color: ${({ isCurrentPage }) =>
    isCurrentPage ? `${palette.white}` : `${palette.black}`};
  font-size: ${({ isCurrentPage }) => (isCurrentPage ? "700" : "400")};
`;
