import "swiper/css";
import "swiper/css/pagination";

import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import { Pagination } from "swiper";

import RecommendationCard from "./Card";
import { CustomSwiper, CustomSwiperSlide } from "./Carousel.styles";

const RecommendationCarousel = () => {
  const slides: (() => EmotionJSX.Element)[] = [
    RecommendationCard,
    RecommendationCard,
    RecommendationCard,
    RecommendationCard,
    RecommendationCard,
    RecommendationCard,
  ];

  return (
    <CustomSwiper
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {slides.map((e, i) => (
        <CustomSwiperSlide key={i}>
          <RecommendationCard />
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default RecommendationCarousel;
