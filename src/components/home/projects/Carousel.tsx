import "swiper/css";

import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import type { FC } from "react";

import { CustomSwiper, CustomSwiperSlide } from "./Carousel.styles";

interface ProjectCarouselProps {
  slides: (() => EmotionJSX.Element)[];
}

const ProjectCarousel: FC<ProjectCarouselProps> = ({ slides }) => {
  return (
    <CustomSwiper spaceBetween={20} slidesPerView={2.75}>
      {slides.map((e, i) => (
        <CustomSwiperSlide key={i}>{e}</CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default ProjectCarousel;
