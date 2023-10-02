import "swiper/css";
import "swiper/css/pagination";

import { useRecommendationQuery } from "lib/hooks/useRecommendationQuery";
import { Pagination } from "swiper";

import RecommendationCard from "./Card";
import { CustomSwiper, CustomSwiperSlide } from "./Carousel.styles";

const RecommendationCarousel = () => {
  const { data: recommendations } = useRecommendationQuery();

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
      {recommendations?.map((e, i) => (
        <CustomSwiperSlide key={i}>
          <RecommendationCard title={e.title} id={e.id} />
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default RecommendationCarousel;
