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

  .swiper-slide:nth-child(1) {
    background-color: #ffffef;
  }

  .swiper-slide:nth-child(2) {
    background-color: #f4fff2;
  }

  .swiper-slide:nth-child(3) {
    background-color: #e9fbff;
  }

  @media ${breakPoints.md} {
    height: 22rem;
  }

  @media ${breakPoints.sm} {
    height: 23rem;

    .swiper-pagination {
      margin-right: 4%;
    }
  }

  @media ${breakPoints.xs} {
    height: 24rem;

    .swiper-pagination {
      display: flex;
      justify-content: center;
    }

    .swiper-pagination-bullet {
      display: block;
      margin: 0 0.7rem 0.5rem !important;

      background-color: ${palette.black};
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background-color: ${palette.bgMainOrange};
    }
  }
`;

export const CustomSwiperSlide = styled(SwiperSlide)``;

export const PrevBtn = styled.div`
  position: relative;
  z-index: 2;
  width: 1.5625rem;
  height: 1rem;
  margin: -18rem calc(7% + 0.56rem) 0 auto;

  cursor: pointer;

  svg {
    transform: rotate(180deg);
  }

  @media ${breakPoints.md} {
    margin-top: -16rem;
  }

  @media ${breakPoints.sm} {
    display: none;
  }
`;

export const NextBtn = styled.div`
  position: relative;
  z-index: 2;
  width: 1.5625rem;
  height: 1rem;
  margin: 6.3rem calc(7% + 0.56rem) 0 auto;

  cursor: pointer;

  @media ${breakPoints.md} {
    height: 22rem;
  }

  @media ${breakPoints.sm} {
    display: none;
  }
`;
