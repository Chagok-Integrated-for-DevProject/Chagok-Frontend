import { useComponentMount } from "lib/hooks/useComponentMount";
import { useProjectsQuery } from "lib/hooks/useProjectsQuery";
import { useStudiesQuery } from "lib/hooks/useStudiesQuery";
import type { TPostPreview } from "lib/types/post";

import ProjectCarousel from "./Carousel";
import { H3 } from "./index.styles";
import { pickLatestThree } from "./utils/pickLatestThree";

const LatestProjects = () => {
  const [mount] = useComponentMount();
  const contents: TPostPreview[] = [];

  const { data: latestProject } = useProjectsQuery(0, 3, "id", []);
  const { data: latestStudy } = useStudiesQuery(0, 3, "id", []);

  if (latestProject && latestStudy) {
    contents.push(
      ...pickLatestThree(...latestProject.content, ...latestStudy.content),
    );
  }

  return (
    <div id="latestProject">
      <H3>최신순 Top3</H3>
      {mount && <ProjectCarousel contents={contents} />}
    </div>
  );
};

export default LatestProjects;
