import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const CommentCount = styled.p`
  margin: 1rem 0;
  margin-top: 4.5rem;
  color: ${palette.fontGray100};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: normal;

  img {
    margin-right: 0.5rem;
  }
`;

export const CommentListBox = styled.ul`
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const NoComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${palette.fontMainOrange};
  font-size: 1.25rem;
`;
