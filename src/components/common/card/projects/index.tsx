import Image from "next/image";

import profileImg from "/public/mocks/user_profile.svg";
import js from "/public/skills/logos_javascript.svg";
import react from "/public/skills/logos_react.svg";

import {
  CardLink,
  ClassificationTag,
  ClassificationTagWrapper,
  Description,
  Hr,
  InfoWrapper,
  PostsInfo,
  PostsInfoWrapper,
  SkillTagWrapper,
  Title,
  UserInfoWrapper,
  UserNickname,
} from "./index.styles";

const ProjectCard = () => {
  return (
    <CardLink href="/projects/1">
      <ClassificationTagWrapper>
        <ClassificationTag>Hola</ClassificationTag>
        <ClassificationTag>프로젝트</ClassificationTag>
      </ClassificationTagWrapper>
      <Title>사이드 프로젝트 돛단배에서 팀원을 구합니다.</Title>
      <Description>
        안녕하세요! 프로젝트 돛단배에 탑승하실 분을 찾습니다. 망망대해에 작은
        돛단배를 띄우고자 하는 웹 서비스 프로젝트입니다!
      </Description>
      <Hr />
      <SkillTagWrapper>
        <Image src={react} alt="skills" />
        <Image src={js} alt="skills" />
      </SkillTagWrapper>
      <InfoWrapper>
        <PostsInfoWrapper>
          <PostsInfo>댓글 5개</PostsInfo>
          <PostsInfo>조회수 55회</PostsInfo>
        </PostsInfoWrapper>
        <UserInfoWrapper>
          <Image src={profileImg} alt="user Profile" />
          <UserNickname>razventi</UserNickname>
        </UserInfoWrapper>
      </InfoWrapper>
    </CardLink>
  );
};

export default ProjectCard;
