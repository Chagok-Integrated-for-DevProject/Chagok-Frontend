import "swiper/css";

import ProjectCard from "components/common/card/projects";
import { useGetMyInfoQuery } from "lib/hooks/useGetMyInfoQuery";
import { useJwtToken } from "lib/hooks/useJwtToken";
import type { TPostPreview } from "lib/types/post";
import type { FC } from "react";

import { CustomSwiper, CustomSwiperSlide } from "./Carousel.styles";

interface IProjectCarouselProps {
  contents: TPostPreview[];
}

const ProjectCarousel: FC<IProjectCarouselProps> = ({ contents }) => {
  const { token } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(token);

  return (
    <CustomSwiper
      spaceBetween={30}
      slidesPerView={0.965}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.75,
        },
      }}
    >
      {contents.map((e, i) => (
        <CustomSwiperSlide key={i}>
          <ProjectCard contents={e} jwt={token} userInfo={userInfo} />
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default ProjectCarousel;
