import ArrowSVG from "components/common/arrow";
import ScrabButton from "components/common/button/scrab";
import { POST_TAGS } from "lib/constants/postTag";
import Image from "next/image";
import { useRouter } from "next/router";
import { palette } from "styles/palette";

import userProfileImg from "/public/mocks/user_profile.svg";
import backArrow from "/public/utils/back_arrow.svg";

import {
  BtnPosition,
  Date,
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

const Header = () => {
  const router = useRouter();
  const handleGoBackBtn = () => {
    router.back();
  };

  const siteType = POST_TAGS.find((e) => e.tagName === "홀라");
  const purpose = POST_TAGS.find((e) => e.tagName === "사이드 프로젝트");

  return (
    <HeaderWrapper>
      <GoBackBtn type="button" onClick={handleGoBackBtn}>
        <Image src={backArrow} alt="뒤로 가기" />
      </GoBackBtn>
      <TagList>
        <TagItem bgColor={siteType?.color}>{siteType?.tagName}</TagItem>
        <TagItem bgColor={purpose?.color}>{purpose?.tagName}</TagItem>
      </TagList>
      <Title>사이드프로젝트 - RoutineConnect ( 디자이너 구인 )</Title>
      <PostInfoWrapper>
        <Image
          src={userProfileImg}
          alt="mock user Profile"
          width={40}
          height={40}
        />
        <UserNickName>razventi</UserNickName>
        <Date>2023. 07. 06</Date>
        <ViewCnt>조회수 55</ViewCnt>
        <OriginLink href="#">
          출처: HOLA 원문 바로가기
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
