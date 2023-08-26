import PaginationButtons from "components/common/button/pagination";
import ProjectCard from "components/common/card/projects";
import { useComponentMount } from "lib/hooks/useComponentMount";
import { useHandlePageNumber } from "lib/hooks/useHandlePageNumber";
import useProjectsQuery from "lib/hooks/useProjectsQuery";
import useStudiesQuery from "lib/hooks/useStudiesQuery";
import { useSearchParams } from "next/navigation";
import type { FC } from "react";

import { GridItem, ProjectListGrid } from "./index.styles";

interface IProjectList {
  searchKeyword: string;
  selectedSkills: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectList: FC<IProjectList> = ({ searchKeyword, selectedSkills }) => {
  const searchParams = useSearchParams();

  const {
    pageNumber,
    handleClickPageNumber,
    handleClickPrevArrow,
    handleClickNextArrow,
    handleClickPrevDblArrow,
    handleClickNextDblArrow,
  } = useHandlePageNumber(1, 15);

  const { data: projects } = useProjectsQuery(
    pageNumber - 1,
    12,
    "id",
    selectedSkills,
    undefined,
    searchKeyword,
  );
  const { data: studies } = useStudiesQuery(
    pageNumber - 1,
    12,
    "id",
    selectedSkills,
    undefined,
    searchKeyword,
  );

  const [mount] = useComponentMount();
  const isProject = searchParams.get("purpose") === "project" && projects;
  const isStudies = searchParams.get("purpose") === "study" && studies;

  return (
    <>
      <ProjectListGrid>
        {mount &&
          isProject &&
          projects.content.map((e) => (
            <GridItem key={e.id}>
              <ProjectCard contents={e} />
            </GridItem>
          ))}
        {mount &&
          isStudies &&
          studies.content.map((e) => (
            <GridItem key={e.id}>
              <ProjectCard contents={e} />
            </GridItem>
          ))}
      </ProjectListGrid>
      <PaginationButtons
        totalPages={15}
        currentPage={pageNumber}
        handleClickPageNumber={handleClickPageNumber}
        handleClickPrevArrow={handleClickPrevArrow}
        handleClickNextArrow={handleClickNextArrow}
        handleClickPrevDblArrow={handleClickPrevDblArrow}
        handleClickNextDblArrow={handleClickNextDblArrow}
      />
    </>
  );
};

export default ProjectList;
