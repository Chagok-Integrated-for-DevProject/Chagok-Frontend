import "swiper/css";
import "swiper/css/pagination";

import ArrowSVG from "components/common/arrow";
import {
  FirstCard,
  SecondCard,
  ThirdCard,
} from "components/common/card/mainBanner";
import { palette } from "styles/palette";
import { Autoplay, Navigation, Pagination } from "swiper";

import {
  CustomSwiper,
  CustomSwiperSlide,
  MainBannerWrawpper,
  NextBtn,
  PrevBtn,
} from "./index.styles";

const MainBanner = () => {
  return (
    <MainBannerWrawpper>
      <CustomSwiper
        direction={"horizontal"}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            direction: "vertical",
          },
        }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <PrevBtn className="prev">
          <ArrowSVG width={45} color={`${palette.black}`} />
        </PrevBtn>
        <CustomSwiperSlide>
          <FirstCard />
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <SecondCard />
        </CustomSwiperSlide>
        <CustomSwiperSlide>
          <ThirdCard />
        </CustomSwiperSlide>
        <NextBtn className="next">
          <ArrowSVG width={45} color={`${palette.black}`} />
        </NextBtn>
      </CustomSwiper>
    </MainBannerWrawpper>
  );
};

export default MainBanner;
