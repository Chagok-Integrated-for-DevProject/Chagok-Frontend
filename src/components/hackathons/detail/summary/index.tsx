import ScrabButton from "components/common/button/scrab";
import Image from "next/image";

import * as S from "./index.styles";

const Summary = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>성동구 청년정책 해커톤</S.Title>
        <S.ScrabViewBox>
          <S.ScrabCount>
            <ScrabButton />
            <span>{152}</span>
          </S.ScrabCount>
          <S.ViewCount>조회수 {250}</S.ViewCount>
        </S.ScrabViewBox>
      </S.Header>
      <S.Hr />
      <S.Body>
        <S.ImageBox>
          <Image
            src="/mocks/hackathon_poster_big.png"
            width={369}
            height={522}
            alt="해커톤 포스터 이미지"
          />
        </S.ImageBox>
        <S.Information>
          <S.Summary>
            <S.Organizer>
              <S.Label>주체 / 기관</S.Label>
              <S.Content>{"킹십리"}</S.Content>
            </S.Organizer>
            <S.ReceptionPeriod>
              <S.Label>접수 기간</S.Label>
              <S.Content>
                {"2023년 07월 12일"} ~ {"2023년 07월 26일 00:00"}
              </S.Content>
            </S.ReceptionPeriod>
            <S.CompetitionField>
              <S.Label>공모 분야</S.Label>
              <S.Content>{"해커톤"}</S.Content>
            </S.CompetitionField>
            <S.Source>
              <S.Label>출처</S.Label>
              <S.ResourceLink href="https://www.contestkorea.com/">
                https://www.contestkorea.com
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
