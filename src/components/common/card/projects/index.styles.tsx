import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

export const ClassificationTagWrapper = styled.div`
  height: 34px;
  white-space: pre-wrap;
  overflow: hidden;
`;

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

  @media ${breakPoints.xs} {
    font-size: 0.65rem;
    padding: 0.5rem 1rem;
    margin-right: 0.6rem;
    margin-bottom: 1rem;
  }
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

  @media ${breakPoints.xs} {
    font-size: 0.9rem;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserNickname = styled.span`
  width: 7em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  @media ${breakPoints.xs} {
    width: 5.8em;
    font-size: 0.9rem;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  border: 1px solid ${palette.bdGray200};
  margin: 1rem 0;
`;
