import styled from "@emotion/styled";
import ScrabButton from "components/common/button/scrab";
import type { TContest } from "lib/types/contest";
import Image from "next/image";
import Link from "next/link";
import type { FC, MouseEvent } from "react";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

interface IHackahtonCardProps {
  content: TContest;
}

const HackathonCard: FC<IHackahtonCardProps> = ({ content }) => {
  const onClickScrabButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <StyledWrapper href="/hackathons/1" title={content.title}>
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
              <ScrapCnt>{content.scrapCount}</ScrapCnt>
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
              <ScrapCnt>{content.scrapCount}</ScrapCnt>
              <ScrabButton onClick={onClickScrabButton} width={35} />
            </Scrab>
            <DDay>D - {1}</DDay>
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
            <DDay>D - {1}</DDay>
          </RightWrapper>
        </MobileWrapper>
      </LayoutWrapper>
    </StyledWrapper>
  );
};

export default HackathonCard;

const StyledWrapper = styled(Link)`
  display: block;
  //FIXME: 회의 필요, 적용 또는 삭제
  /* box-shadow: 0px 1px 50px 0px #0000001a; */
  border-radius: 10px;
  padding: 2.5rem;
  margin: 0 auto;
  max-width: 537px;
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
  // margin-right: 2rem;

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
    font-size: 1.15rem;
    margin-left: auto;
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
  margin-right: auto;

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
