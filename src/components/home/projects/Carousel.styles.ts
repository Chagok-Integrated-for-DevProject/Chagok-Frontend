import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: calc(100% + 1rem);

  padding: 1.875rem 2rem;
  border-radius: 1rem;
  margin: 0 0 3rem -2rem;
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  position: relative;
  display: block;

  width: 26.25rem;
  height: 25.6875rem;
  padding: 2.375rem;
  border-radius: 0.8rem;
  box-shadow: 0px 1px 3.125rem 0px #0000001a;

  border-radius: 1rem;
  margin: 0.2rem 0.1rem 0.875rem;

  @media ${breakPoints.xs} {
    padding: 1.8rem;
  }
`;
