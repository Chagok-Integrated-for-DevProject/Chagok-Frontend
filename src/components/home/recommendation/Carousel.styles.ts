import styled from "@emotion/styled";
import { palette } from "styles/palette";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: calc(100% + 3.3rem);

  padding: 3.75rem 1rem;
  border-radius: 1rem;

  margin-left: -1.625rem;
  margin-bottom: 4.375rem;

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background-color: ${palette.bgGray200};
    margin: 0 10px !important;
    transition: 0.2s;
  }

  .swiper-pagination-bullet-active {
    width: 30px;
    border-radius: 1rem;
    background-color: ${palette.black};
  }
`;

export const CustomSwiperSlide = styled(SwiperSlide)`
  width: 380px !important;
  height: 280px;
  box-sizing: border-box;

  border-radius: 0.8rem;

  box-shadow: 1px 1px 3.125rem -1.5rem;
  border-radius: 1rem;

  margin: 0 10px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;
