import "swiper/css";

import ProjectCard from "components/common/card/projects";
import type { TPostPreview } from "lib/types/post";
import type { FC } from "react";

import { CustomSwiper, CustomSwiperSlide } from "./Carousel.styles";

interface IProjectCarouselProps {
  contents: TPostPreview[];
}

const ProjectCarousel: FC<IProjectCarouselProps> = ({ contents }) => {
  return (
    <CustomSwiper
      spaceBetween={20}
      slidesPerView={1}
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
          <ProjectCard contents={e} />
        </CustomSwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default ProjectCarousel;
