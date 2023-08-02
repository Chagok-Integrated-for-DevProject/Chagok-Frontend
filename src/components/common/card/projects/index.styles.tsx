import styled from "@emotion/styled";
import Link from "next/link";
import { palette } from "styles/globalStyles";

export const CardLink = styled(Link)`
  position: relative;
  display: block;

  width: 420px;
  padding: 2.5rem 2.2rem;
  border-radius: 0.8rem;
`;

export const ClassificationTagWrapper = styled.div``;

export const ClassificationTag = styled.button`
  padding: 0.5rem 1.7rem;
  border: 0;
  border-radius: 1rem;
  margin-right: 1rem;

  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.125rem;

  background-color: #ff5100;
  color: ${palette.white};
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.875rem;

  padding: 1rem 0;

  word-break: keep-all;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  margin-bottom: 1.5rem;
`;

export const SkillTagWrapper = styled.div`
  display: flex;
  gap: 1rem;

  padding: 0.5rem 0;

  img {
    border-radius: 0.45rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0.5rem 0 0;

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

  color: #717171;
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
  border: 1px solid #c2c2c2;
  margin: 1rem 0;
`;
