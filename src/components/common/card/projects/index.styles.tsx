import styled from "@emotion/styled";
import { palette } from "styles/palette";

export const ClassificationTagWrapper = styled.div``;

export const ClassificationTag = styled("span", {
  shouldForwardProp: (props) => props !== "bgColor",
})<{ bgColor?: string }>`
  display: inline-block;

  padding: 0.5rem 1.7rem;
  border: 0;
  border-radius: 1rem;
  margin-right: 1rem;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 150%;

  background-color: ${({ bgColor }) => bgColor};

  color: ${palette.white};
`;

export const Title = styled.h2`
  height: 3.75rem;

  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.875rem;

  margin: 1.25rem 0;

  word-break: keep-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Description = styled.div`
  height: 72px;

  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 1.5rem;

  img {
    display: none;
  }
`;

export const SkillTagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.3125rem;

  margin: 1.4375rem 0;
  overflow: hidden;

  img {
    border-radius: 0.45rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1rem 0 0;

  img {
    margin-left: auto;
  }
`;

export const PostsInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PostsInfo = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  color: ${palette.fontGray300};
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserNickname = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Hr = styled.hr`
  width: 100%;
  border: 1px solid ${palette.bdGray200};
  margin: 1rem 0;
`;
