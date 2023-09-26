import ArrowSVG from "components/common/arrow";
import ScrabButton from "components/common/button/scrab";
import Loading from "components/common/loading";
import FloatingBox from "components/postDetail/floatingBox";
import { POST_TAGS } from "lib/constants/postTag";
import { useJwtToken } from "lib/hooks/useJwtToken";
import type { TPostDetail } from "lib/types/post";
import Image from "next/image";
import { useRouter } from "next/router";
import { type FC, Suspense, useState } from "react";
import { toast } from "react-toastify";
import { palette } from "styles/palette";

import backArrow from "/public/utils/back_arrow.svg";

import {
  BtnPostion,
  Dates,
  DesktopWrapper,
  GoBackBtn,
  HeaderWrapper,
  MobileWrapper,
  OriginLink,
  PostInfoWrapper,
  RecommendationBtn,
  ScrapCnt,
  TagItem,
  TagList,
  Title,
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

  const [floatingBox, setFloatingBox] = useState(false);
  const { token: accessToken } = useJwtToken();

  const handleFloatingBox = () => {
    if (floatingBox) {
      setFloatingBox(false);
      return;
    }

    if (!floatingBox && accessToken === "") {
      toast.warn("로그인해주세요");
      return;
    }

    if (!floatingBox && accessToken.length > 0) {
      setFloatingBox(true);
      return;
    }
  };

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
      <DesktopWrapper>
        <BtnPostion>
          <ScrabButton />
        </BtnPostion>
      </DesktopWrapper>
      <MobileWrapper>
        <BtnPostion>
          <RecommendationBtn
            type="button"
            onClick={handleFloatingBox}
            data-testid="recommend btn"
          >
            {floatingBox ? (
              "Close"
            ) : (
              <>
                추천
                <br />
                프로젝트
              </>
            )}
          </RecommendationBtn>
          {accessToken?.length > 0 && (
            <Suspense fallback={<Loading />}>
              <FloatingBox mobileVisible={floatingBox} jwt={accessToken} />
            </Suspense>
          )}
        </BtnPostion>
      </MobileWrapper>
      <PostInfoWrapper>
        <MobileWrapper>
          <ScrabButton />
          <ScrapCnt>{data.scrapCount}</ScrapCnt>
          <ViewCnt>조회수 {data.viewCount}</ViewCnt>
        </MobileWrapper>
        <Dates>
          {date.getFullYear()}. {date.getMonth() + 1}. {date.getDate()}
        </Dates>
        <DesktopWrapper>
          <ViewCnt>조회수 {data.viewCount}</ViewCnt>
        </DesktopWrapper>
        <OriginLink href={`${data.sourceUrl}`}>
          출처: {data.siteType} 원문 바로가기
          <ArrowSVG width={36} color={`${palette.bgGray100}`} />
        </OriginLink>
      </PostInfoWrapper>
    </HeaderWrapper>
  );
};

export default Header;
