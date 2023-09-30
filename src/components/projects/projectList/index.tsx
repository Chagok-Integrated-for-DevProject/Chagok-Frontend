import PaginationButtons from "components/common/button/pagination";
import ProjectCard from "components/common/card/projects";
import { useGetMyInfoQuery } from "lib/hooks/useGetMyInfoQuery";
import { useJwtToken } from "lib/hooks/useJwtToken";
import { useProjectsQuery } from "lib/hooks/useProjectsQuery";
import { useStudiesQuery } from "lib/hooks/useStudiesQuery";
import {
  getNumberNextBtnClicked,
  getNumberPrevBtnClicked,
} from "lib/utils/pagination";
import { useSearchParams } from "next/navigation";
import { type FC, useEffect, useState } from "react";

import { GridItem, NoResultH1, ProjectListGrid } from "./index.styles";

interface IProjectList {
  searchKeyword: string;
  selectedSkills: string[];
}

const ProjectList: FC<IProjectList> = ({ searchKeyword, selectedSkills }) => {
  const PAGE_SIZE = 12;
  const searchParams = useSearchParams();

  const [pageNumber, setPageNumber] = useState(1);

  const { token } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(token);

  const { data: projects } = useProjectsQuery(
    pageNumber - 1,
    PAGE_SIZE,
    "createdTime",
    selectedSkills,
    searchKeyword,
  );
  const { data: studies } = useStudiesQuery(
    pageNumber - 1,
    PAGE_SIZE,
    "createdTime",
    selectedSkills,
    searchKeyword,
  );

  const purpose = searchParams.get("purpose");
  const isProject = purpose === "project" && projects;
  const isStudies = purpose === "study" && studies;
  const pageCnt = 6;

  const handleClickPageNumber = (targetPage: number) => {
    setPageNumber(targetPage);
  };

  const handleClickPrevArrow = () => {
    setPageNumber(getNumberPrevBtnClicked(pageNumber, pageCnt));
  };
  const handleClickNextArrow = () => {
    if (isProject) {
      setPageNumber(
        getNumberNextBtnClicked(pageNumber, projects.totalPages, pageCnt),
      );
    }

    if (isStudies) {
      setPageNumber(
        getNumberNextBtnClicked(pageNumber, studies.totalPages, pageCnt),
      );
    }
  };

  const handleClickPrevDblArrow = () => {
    setPageNumber(1);
  };

  const handleClickNextDblArrow = () => {
    if (isProject) {
      setPageNumber(projects.totalPages);
    }

    if (isStudies) {
      setPageNumber(studies.totalPages);
    }
  };

  useEffect(() => {
    if (isProject && pageNumber > projects.totalPages) {
      setPageNumber(1);
    }

    if (isStudies && pageNumber > studies.totalPages) {
      setPageNumber(1);
    }
  }, [
    isProject,
    isStudies,
    pageNumber,
    studies?.totalPages,
    projects?.totalPages,
  ]);

  return (
    <>
      {isProject && (
        <>
          {projects.content.length > 0 ? (
            <ProjectListGrid>
              {projects.content.map((e, i) => (
                <GridItem key={`${e.id}${i}`} data-testid="projectData">
                  <ProjectCard contents={e} jwt={token} userInfo={userInfo} />
                </GridItem>
              ))}
            </ProjectListGrid>
          ) : (
            <NoResultH1>검색 결과가 없습니다</NoResultH1>
          )}
          <PaginationButtons
            totalPages={projects.totalPages}
            pageCnt={pageCnt}
            currentPage={pageNumber}
            handleClickPageNumber={handleClickPageNumber}
            handleClickPrevArrow={handleClickPrevArrow}
            handleClickNextArrow={handleClickNextArrow}
            handleClickPrevDblArrow={handleClickPrevDblArrow}
            handleClickNextDblArrow={handleClickNextDblArrow}
          />
        </>
      )}
      {isStudies && (
        <>
          {studies.content.length > 0 ? (
            <ProjectListGrid>
              {studies.content.map((e, i) => (
                <GridItem key={`${e.id}${i}`} data-testid="studyData">
                  <ProjectCard contents={e} jwt={token} userInfo={userInfo} />
                </GridItem>
              ))}
            </ProjectListGrid>
          ) : (
            <NoResultH1>검색 결과가 없습니다</NoResultH1>
          )}
          <PaginationButtons
            totalPages={studies.totalPages}
            currentPage={pageNumber}
            pageCnt={pageCnt}
            handleClickPageNumber={handleClickPageNumber}
            handleClickPrevArrow={handleClickPrevArrow}
            handleClickNextArrow={handleClickNextArrow}
            handleClickPrevDblArrow={handleClickPrevDblArrow}
            handleClickNextDblArrow={handleClickNextDblArrow}
          />
        </>
      )}
    </>
  );
};

export default ProjectList;
