import styled from "@emotion/styled";
import ScrabButton from "components/common/button/scrab";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

//FIXME: 추후 삭제할 더미 데이터
const DummyHackathonData = {
  title: "대안데이터 기반 핀테크 아이디어톤",
  organizer: "주최사",
  startDate: new Date(),
  endDate: new Date(),
};

const HackathonCard = () => {
  const { title, organizer, startDate, endDate } = DummyHackathonData;
  const onClickScrabButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <StyledWrapper href="/hackathons/1">
      <LayoutWrapper>
        {/* 왼쪽 */}
        <ImageBox>
          <Image
            width={166}
            height={159}
            src="/mocks/hackathon_poster_small.png"
            alt="해커톤 배너 이미지"
          />
        </ImageBox>
        {/* 중앙 */}
        <HackathonOrganizer>{organizer}</HackathonOrganizer>
        <HackathonTitle>{title}</HackathonTitle>
        <HackathonDateBox>
          <span>행사일시</span>
          <StartToEndDate>
            <StartAt>{startDate.toLocaleDateString()}</StartAt>
            <EndAt>~{endDate.toLocaleDateString()}</EndAt>
          </StartToEndDate>
        </HackathonDateBox>
        {/* 오른쪽 */}
        <DDay>D - {1}</DDay>
        <Scrab>
          <ScrabButton onClick={onClickScrabButton} />
        </Scrab>
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
  max-width: 537px;
  max-height: 240px;
`;

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 166px auto 4rem;
  grid-template-rows: auto auto 40px;
  grid-template-areas:
    "image title icon"
    "image name icon"
    "image date tag";
`;

const ImageBox = styled.div`
  background-color: #ddd;
  grid-area: image;
  height: 100%;
  /* FIXME: 추후 삭제  */
  img {
    transform: scale(1.7);
  }
`;

const HackathonTitle = styled.div`
  grid-area: title;
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  inline-size: 170px;
  word-break: keep-all;
  line-height: 1.875rem;
`;

const HackathonOrganizer = styled.div`
  grid-area: name;
  margin-left: 1rem;
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
`;

const StartToEndDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const StartAt = styled.span``;
const EndAt = styled.span``;

const DDay = styled.div`
  grid-area: icon;
  color: #ff6b00;
  text-align: right;
  font-size: 1.25rem;
  font-weight: 700;
`;

const Scrab = styled.div`
  grid-area: tag;
  max-height: 40px;
  text-align: right;
`;
