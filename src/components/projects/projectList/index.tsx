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
  const PAGE_SIZE = 12;

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
    PAGE_SIZE,
    "id",
    selectedSkills,
    undefined,
    searchKeyword,
  );
  const { data: studies } = useStudiesQuery(
    pageNumber - 1,
    PAGE_SIZE,
    "id",
    selectedSkills,
    undefined,
    searchKeyword,
  );

  const searchParams = useSearchParams();
  const [mount] = useComponentMount();
  const isProject = searchParams.get("purpose") === "project" && projects;
  const isStudies = searchParams.get("purpose") === "study" && studies;

  const PROJECTS_TOTAL_PAGES = isProject
    ? Math.ceil(projects.content.length / PAGE_SIZE)
    : null;
  const STUDIES_TOTAL_PAGES = isStudies
    ? Math.ceil(studies.content.length / PAGE_SIZE)
    : null;

  return (
    <>
      <ProjectListGrid>
        {mount &&
          isProject &&
          projects.content.length > 0 &&
          projects.content.map((e) => (
            <GridItem key={e.id}>
              <ProjectCard contents={e} />
            </GridItem>
          ))}
        {mount && isProject && projects.content.length === 0 && (
          <h2
            style={{
              position: "relative",
              fontSize: "4rem",
              whiteSpace: "nowrap",
            }}
          >
            검색 결과가 없습니다{" "}
          </h2>
        )}
        {mount &&
          isStudies &&
          studies.content.length > 0 &&
          studies.content.map((e) => (
            <GridItem key={e.id}>
              <ProjectCard contents={e} />
            </GridItem>
          ))}
        {mount && isStudies && studies.content.length === 0 && (
          <h2
            style={{
              position: "relative",
              fontSize: "4rem",
              whiteSpace: "nowrap",
            }}
          >
            검색 결과가 없습니다{" "}
          </h2>
        )}
      </ProjectListGrid>
      <PaginationButtons
        totalPages={
          PROJECTS_TOTAL_PAGES !== null
            ? (PROJECTS_TOTAL_PAGES as number)
            : (STUDIES_TOTAL_PAGES as number)
        }
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
