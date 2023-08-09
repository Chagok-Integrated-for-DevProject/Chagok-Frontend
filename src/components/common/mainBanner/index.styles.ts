import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 26.125rem;

  @media ${breakPoints.md} {
    height: 22rem;
  }

  @media ${breakPoints.sm} {
    height: 15rem;
  }

  @media ${breakPoints.xs} {
    height: 12em;
  }
`;

export const CustomSwiperSlide = styled(SwiperSlide)``;
