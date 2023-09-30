import styled from "@emotion/styled";
import ScrabButton from "components/common/button/scrab";
import { useGetMyInfoQuery } from "lib/hooks/useGetMyInfoQuery";
import { useJwtToken } from "lib/hooks/useJwtToken";
import { useScrapMutation } from "lib/hooks/useScrapMutations";
import type { TContest } from "lib/types/contest";
import Image from "next/image";
import Link from "next/link";
import { type FC, type MouseEvent, useState } from "react";
import { toast } from "react-toastify";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

interface IHackahtonCardProps {
  content: TContest;
}

const HackathonCard: FC<IHackahtonCardProps> = ({ content }) => {
  const [scrapCnt, setScrapCnt] = useState(content.scrapCount);

  const { token } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(token);
  const isScrapped = userInfo?.contestScraps.find((e) => e.id === content.id)
    ? true
    : false;

  const { mutate: scrapMutate } = useScrapMutation(
    token,
    scrapCnt,
    setScrapCnt,
  );

  const onClickScrabButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (token === "") {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    scrapMutate({
      contentId: `${content.id}`,
      category: "contest",
      jwtToken: token,
      isScrapped,
    });
  };
  const dday = getDDay(content.endDate);

  return (
    <StyledWrapper href={`/hackathons/${content.id}`} title={content.title}>
      <LayoutWrapper>
        {/* 왼쪽 */}
        <ImageBox>
          <Image
            width={166}
            height={166}
            src={content.imageUrl}
            alt="해커톤 배너 이미지"
          />
        </ImageBox>
        {/* 중앙 */}
        {/** @Desktop */}
        <DeskTopWrapper>
          <MiddleWrapper>
            <HackathonTitle>{content.title}</HackathonTitle>
            <HackathonOrganizer>{content.host}</HackathonOrganizer>
            <HackathonDateBox>
              <span>행사일시</span>
              <StartToEndDate>
                <StartAt>
                  {new Date(content.startDate).toLocaleDateString()}
                </StartAt>
                <EndAt>~{new Date(content.endDate).toLocaleDateString()}</EndAt>
              </StartToEndDate>
            </HackathonDateBox>
          </MiddleWrapper>
        </DeskTopWrapper>
        {/** @Mobile */}
        <MobileWrapper>
          <MiddleWrapper>
            <HackathonTitle>{content.title}</HackathonTitle>
            <Scrab>
              <ScrapCnt>{scrapCnt}</ScrapCnt>
              <ScrabButton onClick={onClickScrabButton} width={30} />
            </Scrab>
          </MiddleWrapper>
          <HackathonOrganizer>{content.host}</HackathonOrganizer>
        </MobileWrapper>
        {/* 오른쪽 */}
        {/** @Desktop */}
        <DeskTopWrapper>
          <RightWrapper>
            <Scrab>
              <ScrapCnt>{scrapCnt}</ScrapCnt>
              <ScrabButton
                onClick={onClickScrabButton}
                width={35}
                isScrabbed={isScrapped}
              />
            </Scrab>
            {dday === 0 && <DDay>D - Day</DDay>}
            {dday < 0 && <DDay>마감</DDay>}
            {dday > 0 && <DDay>D - {dday}</DDay>}
          </RightWrapper>
        </DeskTopWrapper>
        {/** @Mobile */}
        <MobileWrapper>
          <RightWrapper>
            <HackathonDateBox>
              <span>행사일시</span>
              <StartToEndDate>
                <StartAt>
                  {new Date(content.startDate).toLocaleDateString()}
                </StartAt>
                <EndAt>~{new Date(content.endDate).toLocaleDateString()}</EndAt>
              </StartToEndDate>
            </HackathonDateBox>
            {dday === 0 && <DDay>D - Day</DDay>}
            {dday < 0 && <DDay>마감</DDay>}
            {dday > 0 && <DDay>D - {dday}</DDay>}
          </RightWrapper>
        </MobileWrapper>
      </LayoutWrapper>
    </StyledWrapper>
  );
};

export default HackathonCard;

const getDDay = (endDate: string) => {
  const end = new Date(endDate);
  const today = new Date();

  const dday = Math.ceil(
    (end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
  );

  return dday;
};

const StyledWrapper = styled(Link)`
  display: block;

  border-radius: 10px;
  padding: 2.5rem;
  margin: 0 auto;
  max-width: 537px;

  @media ${breakPoints.sm} {
    padding: 2rem;
  }
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;

  border-radius: 10px;
  width: 100%;
  height: 100%;

  @media ${breakPoints.sm} {
    flex-direction: column;
  }
`;

/**
 * @POSITION : Left
 */
const ImageBox = styled.div`
  background-color: #ddd;
  grid-area: image;
  width: 166px;
  height: 100%;

  @media ${breakPoints.sm} {
    margin: 0 auto 1rem;
  }
`;

/**
 * @POSITION : Middle
 */

const MiddleWrapper = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  height: 100%;

  @media ${breakPoints.sm} {
    flex-direction: row;
    margin: 0;
  }
`;

const HackathonTitle = styled.div`
  flex-grow: 1;

  height: 90px;
  max-height: 90px;
  margin-left: 1rem;

  font-size: 1.25rem;
  font-weight: 700;
  inline-size: 170px;
  word-break: keep-all;
  line-height: 1.875rem;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;
  overflow: hidden;
  @media ${breakPoints.sm} {
    width: 15rem;
    max-width: 18rem;
    max-height: 5.625rem;
    margin-right: auto;

    font-size: 1.15rem;
    word-break: break-word;
  }
`;

const HackathonOrganizer = styled.div`
  max-width: 180px;
  margin: 1rem auto 1rem 1rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HackathonDateBox = styled.div`
  display: flex;
  max-height: 40px;
  grid-area: date;
  margin-left: 1rem;

  font-size: 12px;
  line-height: 18px;
  > span:first-of-type {
    font-weight: 700;
  }

  @media ${breakPoints.sm} {
    margin-top: 1.4375rem;
    margin-right: 0.3rem;
  }
`;

const StartToEndDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const StartAt = styled.span``;
const EndAt = styled.span``;

/**
 * @POSITION : Right
 */

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  @media ${breakPoints.sm} {
    flex-direction: row;
  }
`;

const Scrab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  max-height: 40px;
  text-align: right;

  button {
    width: 100%;
    margin-right: -0.2rem;
    padding: 0;
  }

  @media ${breakPoints.sm} {
    margin-left: 1rem;

    button {
      margin-right: -0.1rem;
    }
  }
`;

const DDay = styled.div`
  color: ${palette.bdMainOrange};
  text-align: right;
  font-size: 1.25rem;
  font-weight: 700;
  white-space: nowrap;

  margin-top: auto;

  @media ${breakPoints.sm} {
    margin-left: auto;
  }

  @media ${breakPoints.xs} {
    font-size: 1rem;
  }
`;

const ScrapCnt = styled.span`
  width: 100%;

  font-weight: 700;
  line-height: 1.5rem;
  text-align: center;
`;

/** @ResponsiveVisible */
const DeskTopWrapper = styled.div`
  margin-left: auto;

  @media ${breakPoints.sm} {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media ${breakPoints.sm} {
    display: block;
  }
`;
