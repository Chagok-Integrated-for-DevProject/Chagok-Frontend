import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const CommentSection = styled.section`
  padding: 0 2.5rem;
  margin: 6rem 0 3rem;
`;

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
  gap: 1.2rem;
`;

export const NoComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${palette.fontMainOrange};
  font-size: 1.25rem;
`;
