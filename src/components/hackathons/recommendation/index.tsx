import "swiper/css";
import "swiper/css/navigation";

import styled from "@emotion/styled";
import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import { H2, H3, Section } from "components/hackathons/index.styles";
import { palette } from "styles/palette";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Recommendation = () => {
  return (
    <Section>
      <H2>차곡&apos;s 추천</H2>
      <H3>차곡이 추천하는 대회를 살펴보세요!</H3>
      <CardWrapper
        slidesPerView={3}
        spaceBetween={10}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {new Array(9).fill(1).map((_, i) => (
          <SwiperSlide key={i}>
            <HackathonPageCard />
          </SwiperSlide>
        ))}
      </CardWrapper>
    </Section>
  );
};

export default Recommendation;

const CardWrapper = styled(Swiper)`
  margin-block: 2.5rem;

  .swiper-wrapper {
    padding-bottom: 4rem;
  }

  .swiper-pagination {
    > * {
      transition: all 0.2s ease-in-out;
    }
  }

  .swiper-pagination-bullet {
    width: 0.625rem;
    height: 0.625rem;

    margin: 0 0.875rem !important;
  }
  /* TODO: 좀 더 자연스러운 애니메이션 생각해보기
    목표 : 양쪽으로 넓어지는 애니메이션

    1. scaleX 를 사용하면 border-radius 적용이 까다롭다.
    2. animation으로 width를 조정하면 레이아웃이 계속 바뀐다.
  */
  .swiper-pagination-bullet-active {
    width: 1.875rem;
    border-radius: 1.875rem;
    background-color: ${palette.bgMainOrange};
  }
`;
