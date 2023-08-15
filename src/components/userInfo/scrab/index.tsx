import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import ProjectCard from "components/common/card/projects";
import { H2 } from "components/userInfo/index.styles";
import type { ChangeEvent } from "react";
import { useState } from "react";

import * as S from "./index.styles";

type TNavItem = "hackathon" | "study" | "project";

const Scrab = () => {
  const [navItem, setNavItem] = useState<TNavItem>("hackathon");

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
        {new Array(6).fill(1).map((_, i) => {
          if (navItem === "hackathon") return <HackathonPageCard key={i} />;
          if (navItem === "project" || navItem === "study")
            return (
              <S.ProjectStudyWrapper key={i}>
                <ProjectCard />
              </S.ProjectStudyWrapper>
            );
        })}
      </S.ScrabList>
    </S.ScrabWrapper>
  );
};

export default Scrab;
