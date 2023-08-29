import { sanitize } from "isomorphic-dompurify";
import { POST_TAGS } from "lib/constants/postTag";
import type { TPostPreview } from "lib/types/post";
import { convertToSkillSVG } from "lib/utils/convertToSkillSVG";
import { removeCRLF } from "lib/utils/removeCRLF";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

// 보류: import profileImg from "/public/mocks/user_profile.svg";
import {
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

interface IProjectCardProps {
  contents: TPostPreview;
}

const ProjectCard: FC<IProjectCardProps> = ({ contents }) => {
  const siteNameBgColor = POST_TAGS.find((e) => e.tagName === contents.siteType)
    ?.color;
  const purposeBgColor = POST_TAGS.find((e) => e.tagName === contents.postType)
    ?.color;
  const purposeParam = contents.postType === "PROJECT" ? "project" : "study";
  const purposeText = contents.postType === "PROJECT" ? "프로젝트" : "스터디";
  const skillSVGList = convertToSkillSVG(contents.skills);

  return (
    <Link
      href={`/projects/${contents.id}?purpose=${purposeParam}`}
      data-testid="projectCard"
    >
      <ClassificationTagWrapper>
        <ClassificationTag bgColor={siteNameBgColor}>
          {contents.siteType}
        </ClassificationTag>
        <ClassificationTag bgColor={purposeBgColor}>
          {purposeText}
        </ClassificationTag>
      </ClassificationTagWrapper>
      <Title>{contents.title}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: sanitize(removeCRLF(contents.preview)),
        }}
      />
      <Hr />
      <SkillTagWrapper>
        {skillSVGList.length > 0 &&
          skillSVGList
            .slice(0, 7)
            .map((e, i) => (
              <Image key={i} src={e} alt={`${contents.skills[i]}`} />
            ))}
      </SkillTagWrapper>
      <InfoWrapper>
        <PostsInfoWrapper>
          {/**보류: <PostsInfo>댓글 5개</PostsInfo>*/}
          <PostsInfo>조회수 {contents.viewCount}회</PostsInfo>
        </PostsInfoWrapper>
        <UserInfoWrapper>
          {/**보류: <Image src={profileImg} alt="user Profile" />*/}
          <UserNickname>작성자: {contents.nickName}</UserNickname>
        </UserInfoWrapper>
      </InfoWrapper>
    </Link>
  );
};

export default ProjectCard;
