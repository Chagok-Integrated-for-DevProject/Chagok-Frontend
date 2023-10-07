import styled from "@emotion/styled";
import ScrabButton from "components/common/button/scrab";
import { useGetMyInfoQuery } from "lib/hooks/useGetMyInfoQuery";
import { useJwtToken } from "lib/hooks/useJwtToken";
import { useScrapMutation } from "lib/hooks/useScrapMutations";
import type { TContest } from "lib/types/contest";
import { caculateDDay } from "lib/utils/caculateDDay";
import Image from "next/image";
import Link from "next/link";
import { type FC, type MouseEvent, useState } from "react";
import { toast } from "react-toastify";

interface IHackathonPageCardProps {
  content: TContest | undefined;
}

const HackathonPageCard: FC<IHackathonPageCardProps> = ({ content }) => {
  const [scrapCnt, setScrapCnt] = useState(content?.scrapCount || 0);

  const { token } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(token);
  const isScrapped = userInfo?.contestScraps.find((e) => e.id === content?.id)
    ? true
    : false;

  const { mutate: scrapMutate } = useScrapMutation(
    token,
    scrapCnt || 0,
    setScrapCnt,
  );

  const onClickScrabButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (token === "") {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    scrapMutate({
      contentId: `${content?.id}`,
      category: "contest",
      jwtToken: token,
      isScrapped,
    });
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
          <NoImage>포스터 이미지가 없습니다.</NoImage>
        )}
      </ImageBox>
      <ScrabButton onClick={onClickScrabButton} isScrabbed={isScrapped} />
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
  max-width: 23.75rem;
  width: 100%;
  aspect-ratio: 3 / 4;
  font-size: 1em;
  button {
    z-index: 2;
    position: absolute;
    top: 2em;
    right: 1.5em;
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
  background-color: #ddd;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
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
  padding: 1.75em 2.45em;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  opacity: 0;
  transform: translateY(3rem);
  transition:
    opacity 0.2s ease-in,
    transform 0.2s ease-in;
  font-size: 1em;
  color: #fff;
`;

const MainInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;

const DDay = styled.span`
  font-size: 1.75em;
  font-weight: 700;
  line-height: 2.625rem;
`;
const Title = styled.span`
  font-size: 1.125em;
  font-weight: 400;
  line-height: 1.6875rem;
`;
const Organizer = styled.span`
  font-weight: 400;
  font-size: 1.125em;
  line-height: 1.6875rem;
`;
const Hr = styled.div`
  border-top: 1px solid #fff;
  margin-block: 1.5em;
`;

const NoImage = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
`;
