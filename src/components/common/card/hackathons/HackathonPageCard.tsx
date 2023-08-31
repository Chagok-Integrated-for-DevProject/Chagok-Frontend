import styled from "@emotion/styled";
import ScrabButton from "components/common/button/scrab";
import type { TContest } from "lib/types/contest";
import { caculateDDay } from "lib/utils/caculateDDay";
import Image from "next/image";
import Link from "next/link";
import type { FC, MouseEvent } from "react";

interface IHackathonPageCardProps {
  content: TContest | undefined;
}

const HackathonPageCard: FC<IHackathonPageCardProps> = ({ content }) => {
  const onClickScrabButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  if (!content) return <></>;

  return (
    <StyledWrapper href={`hackathons/${content.id}`}>
      <ImageBox background={content.imageUrl}>
        {content.imageUrl ? (
          <Image
            width={380}
            height={500}
            src={content.imageUrl}
            alt="해커톤 포스터 이미지"
          />
        ) : (
          <span>포스터 이미지가 없습니다.</span>
        )}
      </ImageBox>
      <ScrabButton onClick={onClickScrabButton} />
      <Description>
        <MainInfoBox>
          <DDay>{caculateDDay(content.endDate)}</DDay>
          <Title>{content.title}</Title>
        </MainInfoBox>
        <Hr />
        <Organizer>주최 / 주관 : {content.host}</Organizer>
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

const ImageBox = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  background: url(${({ background }) => background});
  background-size: cover;
  img {
    object-fit: contain;
    object-position: center;
    backdrop-filter: blur(10px);
  }
  span {
    display: block;
    text-align: center;
    width: 380px;
    height: 500px;
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
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6875rem;
`;
const Organizer = styled.span`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.6875rem;
`;
const Hr = styled.div`
  border-top: 1px solid #fff;
  margin-block: 1.7rem;
`;
