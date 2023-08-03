import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";

export const CarouselWrapper = styled.div`
  padding: 0 0.6rem;
  margin: 2rem 0 3rem -0.6rem;
  overflow: hidden;
`;

export const CustomSwiperWrapper = styled(Swiper)`
  overflow: visible;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  position: relative;
  z-index: 1;

  box-shadow: 1px 1px 1rem -0.6rem;
  border-radius: 1rem;
  margin: 0.2rem 0.1rem 0.875rem;
`;
