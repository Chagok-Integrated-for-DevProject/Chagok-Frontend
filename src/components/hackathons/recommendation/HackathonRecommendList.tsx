import styled from "@emotion/styled";
import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import { useContestsQuery } from "lib/hooks/useContestsQuery";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HackathonRecommendList = () => {
  const { data } = useContestsQuery(0, 9, "hotCount", "desc");
  return (
    <CardWrapper
      slidesPerView={3}
      spaceBetween={10}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      {data?.content.map((content) => (
        <SwiperSlide key={content.id}>
          <HackathonPageCard content={content} />
        </SwiperSlide>
      ))}
    </CardWrapper>
  );
};

export default HackathonRecommendList;

const CardWrapper = styled(Swiper)`
  margin-block: 2.5rem;

  .swiper-wrapper {
    padding-bottom: 4rem;
  }

  .swiper-slide {
    min-width: 18.75rem;
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
