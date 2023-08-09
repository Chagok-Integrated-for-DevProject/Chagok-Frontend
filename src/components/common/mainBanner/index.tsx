import "swiper/css";
import "swiper/css/pagination";

import {
  FirstCard,
  SecondCard,
  ThirdCard,
} from "components/common/card/mainBanner";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";

import next from "/public/banner/arrow/next.svg";
import prev from "/public/banner/arrow/prev.svg";

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
        direction={"vertical"}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        <PrevBtn className="prev">
          <Image src={prev} alt="prev arrow" />
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
          <Image src={next} alt="next arrow" />
        </NextBtn>
      </CustomSwiper>
    </MainBannerWrawpper>
  );
};

export default MainBanner;
