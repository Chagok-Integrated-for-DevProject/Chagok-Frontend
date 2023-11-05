import ScrabButton from "components/common/button/scrab";
import { useGetMyInfoQuery, useJwtToken, useScrapMutation } from "lib/hooks";
import type { TContestDetail } from "lib/types/contest";
import Image from "next/image";
import type { FC } from "react";
import { toast } from "react-toastify";

import * as S from "./index.styles";

interface ISummaryProps {
  data: Omit<TContestDetail, "content">;
}

const Summary: FC<ISummaryProps> = ({ data }) => {
  const { token } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(token);

  const { mutate: scrapMutate, localScrapCnt } = useScrapMutation(
    token,
    data.scrapCount,
  );

  const isScrapped = !!userInfo?.contestScraps.find((e) => e.id === data.id);

  const onClickScrabButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (token === "") {
      toast.warn("로그인이 필요합니다.");
      return;
    }

    scrapMutate({
      contentId: `${data.id}`,
      category: "contest",
      jwtToken: token,
      isScrapped,
    });
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{data.title}</S.Title>
        <S.ScrabViewBox>
          <S.ScrabCount>
            <ScrabButton onClick={onClickScrabButton} isScrabbed={isScrapped} />
            <span>{localScrapCnt}</span>
          </S.ScrabCount>
          <S.ViewCount>조회수 {data.viewCount}</S.ViewCount>
        </S.ScrabViewBox>
      </S.Header>
      <S.Hr />
      <S.Body>
        <S.ImageBox background={data.imageUrl}>
          <Image
            src={data.imageUrl}
            width={369}
            height={522}
            alt="해커톤 포스터 이미지"
          />
        </S.ImageBox>
        <S.Information>
          <S.Summary>
            <S.Organizer>
              <S.Label>주체 / 기관</S.Label>
              <S.Content>{data.host}</S.Content>
            </S.Organizer>
            <S.ReceptionPeriod>
              <S.Label>접수 기간</S.Label>
              <S.Content>
                {data.startDate} ~ {data.endDate}
              </S.Content>
            </S.ReceptionPeriod>
            <S.CompetitionField>
              <S.Label>공모 분야</S.Label>
              <S.Content>{"해커톤"}</S.Content>
            </S.CompetitionField>
            <S.Source>
              <S.Label>출처</S.Label>
              <S.ResourceLink href={data.originalUrl} target="_blank">
                Contest Korea 바로가기
              </S.ResourceLink>
            </S.Source>
          </S.Summary>
          <S.CautionAndApply>
            {/* FIXME: footer로 옮겨질 예정 */}
            <S.Caution>
              <mark>학습 및 포트폴리오 목적으로 만든 사이트</mark>로{" "}
              <mark>단순 정보 전달</mark>을<br /> 목적으로 합니다.{" "}
              <mark>해당 대회 주최 기관과는 무관</mark>합니다.
            </S.Caution>
          </S.CautionAndApply>
        </S.Information>
      </S.Body>
    </S.Wrapper>
  );
};

export default Summary;
