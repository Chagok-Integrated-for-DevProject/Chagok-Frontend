import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  padding: 1.875rem 0.6rem;
  border-radius: 1rem;
  margin: 0 0 3rem -0.6rem;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  position: relative;
  display: block;

  width: 420px !important;
  padding: 2.5rem 2.2rem;
  border-radius: 0.8rem;

  box-shadow: 1px 1px 3.125rem -1.5rem;
  border-radius: 1rem;
  margin: 0.2rem 0.1rem 0.875rem;
`;
