import "swiper/css";

import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import type { FC } from "react";

import {
  CarouselWrapper,
  CustomSwiperSlide,
  CustomSwiperWrapper,
} from "./Carousel.styles";

interface ProjectCarouselProps {
  slides: (() => EmotionJSX.Element)[];
}

const ProjectCarousel: FC<ProjectCarouselProps> = ({ slides }) => {
  return (
    <CarouselWrapper>
      <CustomSwiperWrapper spaceBetween={20} slidesPerView={2.75}>
        {slides.map((e, i) => (
          <CustomSwiperSlide key={i}>{e}</CustomSwiperSlide>
        ))}
      </CustomSwiperWrapper>
    </CarouselWrapper>
  );
};

export default ProjectCarousel;
