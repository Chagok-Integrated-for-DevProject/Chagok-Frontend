import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import ProjectCard from "components/common/card/projects";
import { H2 } from "components/userInfo/index.styles";
import { useJwtToken } from "lib/hooks/useJwtToken";
import type { TContest } from "lib/types/contest";
import type { TPostPreview } from "lib/types/post";
import type { ChangeEvent } from "react";
import { useState } from "react";

import * as S from "./index.styles";

type TNavItem = "hackathon" | "study" | "project";

interface IScrapProp {
  contestScraps: TContest[];
  projectScraps: TPostPreview[];
  studyScraps: TPostPreview[];
}

const Scrab = ({ contestScraps, projectScraps, studyScraps }: IScrapProp) => {
  const [navItem, setNavItem] = useState<TNavItem>("hackathon");
  const { token } = useJwtToken();

  const onClickNavItem = (e: ChangeEvent<HTMLInputElement>) => {
    setNavItem(e.target.id as TNavItem);
  };
  return (
    <S.ScrabWrapper>
      <H2>내 스크랩</H2>
      <S.Navigation>
        <ul>
          <li>
            <S.Input
              id="hackathon"
              type="radio"
              name="scrab"
              onChange={onClickNavItem}
              defaultChecked
            />
            <label htmlFor="hackathon">해커톤</label>
          </li>
          <li>
            <S.Input
              id="study"
              type="radio"
              name="scrab"
              onChange={onClickNavItem}
            />
            <label htmlFor="study">스터디</label>
          </li>
          <li>
            <S.Input
              id="project"
              type="radio"
              name="scrab"
              onChange={onClickNavItem}
            />
            <label htmlFor="project">프로젝트</label>
          </li>
        </ul>
      </S.Navigation>
      <S.ScrabList>
        {/* contest */}
        {navItem === "hackathon" ? (
          contestScraps && contestScraps.length > 0 ? (
            contestScraps.map((contest) => (
              <HackathonPageCard key={contest.id} content={contest} />
            ))
          ) : (
            <span>스크랩한 해커톤이 없어요.</span>
          )
        ) : (
          <></>
        )}
        {/* project */}
        {navItem === "project" ? (
          projectScraps && projectScraps.length > 0 ? (
            projectScraps.map((project) => (
              <S.ProjectStudyWrapper key={project.id}>
                <ProjectCard contents={project} jwt={token} />
              </S.ProjectStudyWrapper>
            ))
          ) : (
            <span>스크랩한 프로젝트가 없어요.</span>
          )
        ) : (
          <></>
        )}
        {/* studies */}
        {navItem === "study" ? (
          studyScraps && studyScraps.length > 0 ? (
            studyScraps.map((study) => (
              <S.ProjectStudyWrapper key={study.id}>
                <ProjectCard contents={study} jwt={token} />
              </S.ProjectStudyWrapper>
            ))
          ) : (
            <span>스크랩한 스터디가 없어요.</span>
          )
        ) : (
          <></>
        )}
      </S.ScrabList>
    </S.ScrabWrapper>
  );
};

export default Scrab;
