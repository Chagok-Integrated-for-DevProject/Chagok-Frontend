import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  border-radius: 100%;
  border: 0;

  margin: 0 0.4375rem;
`;

export const PrevArrowBtn = styled.button`
  border: 0;

  svg {
    transform: rotate(90deg);
  }
`;

export const NextArrowBtn = styled.button`
  border: 0;
  svg {
    transform: rotate(270deg);
  }
`;

export const PrevDblArrowBtn = styled.button`
  border: 0;
  svg {
    transform: rotate(180deg);
  }
`;
export const NextDblArrowBtn = styled.button`
  border: 0;
`;

export const Blank = styled.div`
  width: 3rem;
  height: 2.5625rem;
`;
