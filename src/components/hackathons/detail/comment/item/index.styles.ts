import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const CommentItemContainer = styled.li`
  display: block;
  width: 100%;
  border-radius: 0.625rem;
  background-color: ${palette.bgSubOrange};
  padding: 3rem 2.5rem;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.125rem;
  line-height: normal;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;

export const UserNameAndDate = styled.div`
  min-width: 12rem;
  > span {
    display: block;
  }
`;

export const UserName = styled.span`
  color: #000;
  font-weight: 700;
`;

export const CreateDate = styled.span`
  color: ${palette.fontGray300};
  font-weight: 400;
`;

export const Divider = styled.div`
  border-left: 1px solid ${palette.fontGray200};
  padding: 0 2rem;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Controller = styled.div`
  min-width: 6rem;
  display: flex;
  align-items: start;
  gap: 0.5rem;
  button {
    border: none;
    color: ${palette.fontGray300};
    font-weight: 400;
  }
`;
