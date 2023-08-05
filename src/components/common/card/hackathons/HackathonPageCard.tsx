import styled from "@emotion/styled";
import ScrabButton from "components/common/button/scrab";
import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";

const DummyHackathonItemData = {
  title: "성동구 청년정책 해커톤",
  organizer: "킹십리",
  commentCount: 5,
  scrabCount: 120,
  viewCount: 55,
};

const HackathonPageCard = () => {
  const { title, organizer, commentCount, scrabCount, viewCount } =
    DummyHackathonItemData;

  const onClickScrabButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <StyledWrapper href="/hackathons/1">
      <Image
        width={380}
        height={500}
        src="/mocks/hackathon_poster_big.png"
        alt="해커톤 포스터 이미지"
      />
      <ScrabButton onClick={onClickScrabButton} />
      <Description>
        <MainInfoBox>
          <DDay>D - 15</DDay>
          <Title>{title}</Title>
          <Organizer>주최 / 주관 : {organizer}</Organizer>
        </MainInfoBox>
        <Hr />
        <AdditionalInfo>
          모집글 {commentCount} 스크랩 {scrabCount} 조회수 {viewCount}
        </AdditionalInfo>
      </Description>
    </StyledWrapper>
  );
};

export default HackathonPageCard;

const StyledWrapper = styled(Link)`
  display: block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  max-width: 380px;
  width: 100%;

  /* FIXME: 추후 삭제 */
  img {
    transform: scaleX(1.275) scaleY(1.25);
  }

  button {
    z-index: 2;
    position: absolute;
    top: 2rem;
    right: 1.5rem;
  }

  :hover {
    div:last-of-type {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const Description = styled.div`
  width: 100%;
  height: 17rem;
  padding: 1.75rem 2.45rem;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  opacity: 0;
  transform: translateY(3rem);
  transition:
    opacity 0.2s ease-in,
    transform 0.2s ease-in;

  color: #fff;
`;

const MainInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const DDay = styled.span`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 2.625rem;
`;
const Title = styled.span`
  font-size: 1.5rem;
  line-height: 2.25rem;
`;
const Organizer = styled.span`
  font-size: 1.125rem;
  line-height: 1.6875rem;
`;
const Hr = styled.div`
  border-top: 1px solid #fff;
  margin-block: 1.7rem;
`;
const AdditionalInfo = styled.span`
  line-height: 1.5rem;
`;
