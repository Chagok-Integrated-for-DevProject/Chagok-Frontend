import "swiper/css";

import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import type { FC } from "react";
import { Swiper } from "swiper/react";

import { HorizontalWrapper, SwiperSlideStyles } from "./horizontal.styles";

interface HorizontalCarouselProps {
  slides: (() => EmotionJSX.Element)[];
  slidesPerView: number;
}

const HorizontalCarousel: FC<HorizontalCarouselProps> = ({
  slides,
  slidesPerView,
}) => {
  return (
    <HorizontalWrapper>
      <Swiper spaceBetween={20} slidesPerView={slidesPerView}>
        {slides.map((e, i) => (
          <SwiperSlideStyles key={i}>{e}</SwiperSlideStyles>
        ))}
      </Swiper>
    </HorizontalWrapper>
  );
};

export default HorizontalCarousel;
