import ScrabButton from "components/common/button/scrab";
import { sanitize } from "isomorphic-dompurify";
import { POST_TAGS } from "lib/constants/postTag";
import { useScrapMutation } from "lib/hooks/useScrapMutations";
import type { TPostPreview } from "lib/types/post";
import type { TUserInfoReturnType } from "lib/types/userInfo";
import { convertToSkillSVG } from "lib/utils/convertToSkillSVG";
import { removeCRLF } from "lib/utils/removeCRLF";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import { toast } from "react-toastify";

// 보류: import profileImg from "/public/mocks/user_profile.svg";
import {
  ClassificationTag,
  ClassificationTagWrapper,
  Description,
  Hr,
  PostsInfo,
  Scrab,
  ScrapCnt,
  SkillTagWrapper,
  Title,
} from "./index.styles";

interface IProjectCardProps {
  contents: TPostPreview;
  jwt: string;
  userInfo?: TUserInfoReturnType | null;
}

const ProjectCard: FC<IProjectCardProps> = ({ contents, jwt, userInfo }) => {
  const siteNameBgColor = POST_TAGS.find((e) => e.tagName === contents.siteType)
    ?.color;
  const purposeBgColor = POST_TAGS.find((e) => e.tagName === contents.postType)
    ?.color;
  const purposeParam = contents.postType === "PROJECT" ? "project" : "study";
  const purposeText = contents.postType === "PROJECT" ? "프로젝트" : "스터디";
  const skillSVGList = convertToSkillSVG(contents.skills);

  const isProjectScrapped = !!userInfo?.projectScraps.find(
    (e) => e.id == contents.id,
  );

  const isStudyScrapped = !!userInfo?.studyScraps.find(
    (e) => e.id == contents.id,
  );

  const isScrapped =
    purposeParam === "project" ? isProjectScrapped : isStudyScrapped;

  const { mutate: scrapMutate, localScrapCnt } = useScrapMutation(
    jwt,
    contents.scrapCount,
  );

  const onClickScrabButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (jwt === "") {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    scrapMutate({
      contentId: `${contents.id}`,
      category: purposeParam,
      jwtToken: jwt,
      isScrapped,
    });
  };

  return (
    <Link
      title={contents.title}
      href={`/projects/${contents.id}?purpose=${purposeParam}`}
      data-testid="projectCard"
      style={{ position: "relative", display: "block" }}
    >
      <Scrab>
        <ScrapCnt>{localScrapCnt}</ScrapCnt>
        <ScrabButton
          onClick={onClickScrabButton}
          width={30}
          isScrabbed={isScrapped}
        />
      </Scrab>
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
      <PostsInfo>조회수 {contents.viewCount}회</PostsInfo>
    </Link>
  );
};

export default ProjectCard;
