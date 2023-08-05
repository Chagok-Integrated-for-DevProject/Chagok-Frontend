import "swiper/css";
import "swiper/css/pagination";

import styled from "@emotion/styled";
import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import { H2, H3, Section } from "components/hackathons/index.styles";
// import { palette } from "styles/palette";
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
    position: relative;
    width: 1.875rem;

    background-color: transparent;

    ::after {
      content: "";
      display: block;
      width: 0.625rem;
      height: 0.625rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: #888;
      border-radius: 1.875rem;
      transition: all 0.3s ease-in-out;
    }
  }

  .swiper-pagination-bullet-active {
    ::after {
      width: 1.875rem;
      background-color: #000;
    }
  }
`;
