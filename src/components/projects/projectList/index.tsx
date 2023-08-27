import PaginationButtons from "components/common/button/pagination";
import ProjectCard from "components/common/card/projects";
import { useComponentMount } from "lib/hooks/useComponentMount";
import { useHandlePageNumber } from "lib/hooks/useHandlePageNumber";
import { useProjectsQuery } from "lib/hooks/useProjectsQuery";
import { useStudiesQuery } from "lib/hooks/useStudiesQuery";
import { useSearchParams } from "next/navigation";
import { type FC, useEffect, useState } from "react";

import { GridItem, NoResultH1, ProjectListGrid } from "./index.styles";

interface IProjectList {
  searchKeyword: string;
  selectedSkills: string[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProjectList: FC<IProjectList> = ({ searchKeyword, selectedSkills }) => {
  const PAGE_SIZE = 12;
  const [totalPageNumber, setTotalPageNumber] = useState(1);

  const {
    pageNumber,
    handleClickPageNumber,
    handleClickPrevArrow,
    handleClickNextArrow,
    handleClickPrevDblArrow,
    handleClickNextDblArrow,
  } = useHandlePageNumber(1, totalPageNumber, [
    ...selectedSkills,
    searchKeyword,
  ]);

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

  useEffect(() => {
    if (isProject) {
      setTotalPageNumber(projects.totalPages);
    }

    if (isStudies) {
      setTotalPageNumber(studies.totalPages);
    }
  }, [isProject, isStudies, projects?.totalPages, studies?.totalPages]);

  return (
    <>
      <ProjectListGrid>
        {mount &&
          isProject &&
          projects.content.length > 0 &&
          projects.content.map((e) => (
            <GridItem key={e.id} data-testid="projectData">
              <ProjectCard contents={e} />
            </GridItem>
          ))}
        {mount && isProject && projects.content.length === 0 && (
          <NoResultH1>검색 결과가 없습니다</NoResultH1>
        )}
        {mount &&
          isStudies &&
          studies.content.length > 0 &&
          studies.content.map((e) => (
            <GridItem key={e.id} data-testid="studyData">
              <ProjectCard contents={e} />
            </GridItem>
          ))}
        {mount && isStudies && studies.content.length === 0 && (
          <NoResultH1>검색 결과가 없습니다</NoResultH1>
        )}
      </ProjectListGrid>
      {mount && (
        <PaginationButtons
          totalPages={totalPageNumber}
          currentPage={pageNumber}
          handleClickPageNumber={handleClickPageNumber}
          handleClickPrevArrow={handleClickPrevArrow}
          handleClickNextArrow={handleClickNextArrow}
          handleClickPrevDblArrow={handleClickPrevDblArrow}
          handleClickNextDblArrow={handleClickNextDblArrow}
        />
      )}
    </>
  );
};

export default ProjectList;
