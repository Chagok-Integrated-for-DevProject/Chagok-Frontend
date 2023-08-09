import "swiper/css";
import "swiper/css/pagination";

import {
  FirstCard,
  SecondCard,
  ThirdCard,
} from "components/common/card/mainBanner";

import { CustomSwiper, CustomSwiperSlide } from "./index.styles";

const MainBanner = () => {
  return (
    <CustomSwiper>
      <CustomSwiperSlide>
        <FirstCard />
      </CustomSwiperSlide>
      <CustomSwiperSlide>
        <SecondCard />
      </CustomSwiperSlide>
      <CustomSwiperSlide>
        <ThirdCard />
      </CustomSwiperSlide>
    </CustomSwiper>
  );
};

export default MainBanner;
