import styled from "@emotion/styled";
import { palette } from "styles/palette";
import { Swiper, SwiperSlide } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
  width: calc(100% + 3.1rem);

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
  width: 23.75rem !important;
  height: 17.5rem;
  box-sizing: border-box;
  box-shadow: 0px 1px 50px 0px #0000001a;
  border-radius: 1rem;

  margin: 0 10px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;
