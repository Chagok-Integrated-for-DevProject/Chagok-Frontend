import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: calc(100% + 3.1rem);

  padding: 1.875rem 2rem;
  border-radius: 1rem;
  margin: 0 0 3rem -2rem;

  @media ${breakPoints.sm} {
    width: calc(100% + 3.5rem);
    padding: 3rem 2rem;
    margin: 0 0 3rem -2rem;
  }
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  position: relative;
  display: block;

  border-radius: 0.8rem;
  box-shadow: 0px 1px 3.125rem 0px #0000001a;

  border-radius: 1rem;
`;
