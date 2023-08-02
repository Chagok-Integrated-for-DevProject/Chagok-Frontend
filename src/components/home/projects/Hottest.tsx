import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import ProjectCard from "components/common/card/projects";
import HorizontalCarousel from "components/home/carousel/horizontal";

import { H3 } from "./index.styles";

const HottestProjects = () => {
  const slides: (() => EmotionJSX.Element)[] = [
    ProjectCard,
    ProjectCard,
    ProjectCard,
  ];

  return (
    <div id="hottestProject">
      <H3>인기순 Top3</H3>
      <HorizontalCarousel slides={slides} slidesPerView={2.75} />
    </div>
  );
};

export default HottestProjects;
