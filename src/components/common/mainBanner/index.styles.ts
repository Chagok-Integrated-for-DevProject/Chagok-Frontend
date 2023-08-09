import styled from "@emotion/styled";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";
import { Swiper, SwiperSlide } from "swiper/react";

export const MainBannerWrawpper = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomSwiper = styled(Swiper)`
  width: 100%;
  height: 26.125rem;

  .swiper-pagination {
    margin-right: 7%;
  }

  .swiper-pagination-bullet {
    display: block;
    margin: 1.5rem 0 !important;

    background-color: ${palette.black};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${palette.bgMainOrange};
  }

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

export const PrevBtn = styled.div`
  position: relative;
  z-index: 2;
  width: 1.5625rem;
  height: 1rem;
  margin: -17rem 7% 0 auto;

  cursor: pointer;
`;

export const NextBtn = styled.div`
  position: relative;
  z-index: 2;
  width: 1.5625rem;
  height: 1rem;
  margin: 5.9rem 7% 0 auto;

  cursor: pointer;
`;
