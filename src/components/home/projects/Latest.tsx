import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import ProjectCard from "components/common/card/projects";
import ProjectCarousel from "components/home/projects/Carousel";

import { H3 } from "./index.styles";

const LatestProjects = () => {
  const slides: (() => EmotionJSX.Element)[] = [
    ProjectCard,
    ProjectCard,
    ProjectCard,
  ];

  return (
    <div id="latestProject">
      <H3>최신순 Top3</H3>
      <ProjectCarousel slides={slides} />
    </div>
  );
};

export default LatestProjects;
