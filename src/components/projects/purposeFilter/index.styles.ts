import styled from "@emotion/styled";
import { palette } from "styles/palette";

type TFilterLink = {
  isCurrentQuery: boolean;
};

export const FilterBtn = styled("button", {
  shouldForwardProp: (prop) => prop !== "isCurrentQuery",
})<TFilterLink>`
  color: ${({ isCurrentQuery }) =>
    isCurrentQuery ? `${palette.black}` : `${palette.fontGray300}`} !important;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;

  padding: 0;
  border: 0;
  margin-right: 1.5625rem;
  cursor: pointer;
`;
