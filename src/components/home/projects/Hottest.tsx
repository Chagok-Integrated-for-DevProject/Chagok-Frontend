import { H3 } from "components/home/index.styles";
import { useProjectsQuery } from "lib/hooks/useProjectsQuery";
import { useStudiesQuery } from "lib/hooks/useStudiesQuery";
import type { TPostPreview } from "lib/types/post";

import ProjectCarousel from "./Carousel";
import { pickHottestThree } from "./utils/pickHottestThree";

const HottestProjects = () => {
  const contents: TPostPreview[] = [];

  const { data: hottestProject } = useProjectsQuery(0, 3, "hotCount", []);
  const { data: hottestStudy } = useStudiesQuery(0, 3, "hotCount", []);

  if (hottestProject && hottestStudy) {
    contents.push(
      ...pickHottestThree(...hottestProject.content, ...hottestStudy.content),
    );
  }
  return (
    <div id="hottestProject">
      <H3>인기순 Top3</H3>
      <ProjectCarousel contents={contents} />
    </div>
  );
};

export default HottestProjects;
