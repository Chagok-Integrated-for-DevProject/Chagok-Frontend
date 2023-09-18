import ArrowSVG from "components/common/arrow";
import Loading from "components/common/loading";
import { Br, H2, P, Section, ShowMore } from "components/home/index.styles";
import { useComponentMount } from "lib/hooks/useComponentMount";
import { Suspense } from "react";
import { palette } from "styles/palette";

import HottestProjects from "./Hottest";
import LatestProjects from "./Latest";

const Projects = () => {
  const [mount] = useComponentMount();

  return (
    <Section>
      <div>
        <H2>
          프로젝트 <Br />/ 스터디
        </H2>
        <P>나와 맞는 프로젝트와 스터디에 대한 모집글을 찾아보세요!</P>
        <ShowMore href="projects?purpose=project">
          <span>더 보기</span>
          <ArrowSVG width={35} color={`${palette.fontGray300}`} />
        </ShowMore>
      </div>
      {mount && (
        <>
          <Suspense fallback={<Loading />}>
            <LatestProjects />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <HottestProjects />
          </Suspense>
        </>
      )}
    </Section>
  );
};

export default Projects;
