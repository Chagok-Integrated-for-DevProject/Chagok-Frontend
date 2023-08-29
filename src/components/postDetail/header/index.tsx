import ArrowSVG from "components/common/arrow";
import ScrabButton from "components/common/button/scrab";
import { POST_TAGS } from "lib/constants/postTag";
import type { TPostDetail } from "lib/types/post";
import Image from "next/image";
import { useRouter } from "next/router";
import type { FC } from "react";
import { palette } from "styles/palette";

import backArrow from "/public/utils/back_arrow.svg";

import {
  BtnPosition,
  Dates,
  GoBackBtn,
  HeaderWrapper,
  OriginLink,
  PostInfoWrapper,
  TagItem,
  TagList,
  Title,
  UserNickName,
  ViewCnt,
} from "./index.styles";

interface IHeaderProps {
  data: TPostDetail;
}

const Header: FC<IHeaderProps> = ({ data }) => {
  const router = useRouter();
  const handleGoBackBtn = () => {
    router.back();
  };

  const siteType = POST_TAGS.find((e) => e.tagName === data.siteType);
  const purpose = POST_TAGS.find((e) => e.tagName === "PROJECT");
  const date = new Date(data.createdTime);

  return (
    <HeaderWrapper>
      <GoBackBtn type="button" onClick={handleGoBackBtn}>
        <Image src={backArrow} alt="뒤로 가기" />
      </GoBackBtn>
      <TagList>
        <TagItem bgColor={siteType?.color}>{siteType?.tagName}</TagItem>
        <TagItem bgColor={purpose?.color}>프로젝트</TagItem>
      </TagList>
      <Title>{data.title}</Title>
      <PostInfoWrapper>
        {/**보류: <Image
          src={userProfileImg}
          alt="mock user Profile"
          width={40}
          height={40}
          />
      */}
        <UserNickName>작성자: {data.nickName}</UserNickName>
        <Dates>
          {date.getFullYear()}. {date.getMonth() + 1}. {date.getDate()}
        </Dates>
        <ViewCnt>조회수 {data.viewCount}</ViewCnt>
        <OriginLink href={`${data.sourceUrl}`}>
          출처: {data.siteType} 원문 바로가기
          <ArrowSVG width={36} color={`${palette.bgGray100}`} />
        </OriginLink>
      </PostInfoWrapper>
      <BtnPosition>
        <ScrabButton />
      </BtnPosition>
    </HeaderWrapper>
  );
};

export default Header;
