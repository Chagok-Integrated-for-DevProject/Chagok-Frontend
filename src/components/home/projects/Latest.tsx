import { H3 } from "components/home/index.styles";
import { useProjectsQuery } from "lib/hooks/useProjectsQuery";
import { useStudiesQuery } from "lib/hooks/useStudiesQuery";
import type { TPostPreview } from "lib/types/post";

import ProjectCarousel from "./Carousel";
import { pickLatestThree } from "./utils/pickLatestThree";

const LatestProjects = () => {
  const contents: TPostPreview[] = [];

  const { data: latestProject } = useProjectsQuery(0, 3, "createdTime", []);
  const { data: latestStudy } = useStudiesQuery(0, 3, "createdTime", []);

  if (latestProject && latestStudy) {
    contents.push(
      ...pickLatestThree(...latestProject.content, ...latestStudy.content),
    );
  }

  return (
    <div id="latestProject">
      <H3>최신순 Top3</H3>
      <ProjectCarousel contents={contents} />
    </div>
  );
};

export default LatestProjects;
