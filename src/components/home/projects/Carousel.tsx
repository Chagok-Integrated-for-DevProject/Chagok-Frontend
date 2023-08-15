import "swiper/css";

import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import type { FC } from "react";

import { CustomSwiper, CustomSwiperSlide } from "./Carousel.styles";

interface IProjectCarouselProps {
  slides: (() => EmotionJSX.Element)[];
}

const ProjectCarousel: FC<IProjectCarouselProps> = ({ slides }) => {
  return (
    <CustomSwiper spaceBetween={20} slidesPerView={2.75}>
      {slides.map((e, i) => (
        <CustomSwiperSlide key={i}>{e}</CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default ProjectCarousel;
