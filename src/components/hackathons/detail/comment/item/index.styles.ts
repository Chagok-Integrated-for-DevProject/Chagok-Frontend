import styled from "@emotion/styled";
import Link from "next/link";
import { palette } from "styles/palette";

export const CommentItemContainer = styled.li`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 0.625rem;
  background-color: ${palette.bgSubOrange};
  padding: 2rem 2.5rem;
`;
export const DeletedCommentItem = styled.li`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 0.625rem;
  background-color: ${palette.bgSubOrange};

  padding: 1rem 2.5rem;
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
  min-width: 10rem;
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

export const ContentBox = styled.div<{ isEdit: boolean }>`
  width: 100%;

  input:disabled {
    background-color: transparent;
  }

  background-color: ${({ isEdit }) => isEdit && "white"};
  border: ${({ isEdit }) => isEdit && `1px solid ${palette.bdBlue100}`};
  border-radius: 0.5rem;
  input {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
  }

  overflow: hidden;
`;

export const Content = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
`;

export const MethodBox = styled.label`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  color: ${palette.fontBlue100};
  span {
    font-weight: 700;
    margin-right: 1rem;
    min-width: max-content;
  }
  svg {
    width: 2.125rem;
    height: 2rem;
  }
`;

export const Method = styled.input`
  width: 100%;
`;

export const MethodLink = styled(Link)`
  color: ${palette.fontBlue100};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: underline;
`;

export const Controller = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  display: flex;
  align-items: start;
  gap: 0.5rem;
  button {
    border: none;
    color: ${palette.fontGray300};
    font-weight: 400;
  }
`;
