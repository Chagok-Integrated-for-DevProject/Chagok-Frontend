import "swiper/css";

import HackathonCard from "components/common/card/hackathons/MainPageCard";
import type { TContest } from "lib/types/contest";
import type { FC } from "react";

import { CustomSwiper, CustomSwiperSlide } from "./Carousel.styles";

interface IHackathonsCarouselProps {
  contents: TContest[];
}

const HackthonsCarousel: FC<IHackathonsCarouselProps> = ({ contents }) => {
  return (
    <CustomSwiper
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
        615: {
          slidesPerView: 1.4,
        },
        768: {
          slidesPerView: 1.4,
        },
        900: {
          slidesPerView: 1.6,
        },
        1004: {
          slidesPerView: 1.8,
        },
        1200: {
          slidesPerView: 2.2,
        },
      }}
    >
      {contents.map((e, i) => (
        <CustomSwiperSlide key={i}>
          <HackathonCard content={e} />
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default HackthonsCarousel;
