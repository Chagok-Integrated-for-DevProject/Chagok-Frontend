import { H2 } from "components/userInfo/index.styles";
import type { ChangeEvent } from "react";
import { useState } from "react";

import ContestScrap from "./Contest";
import * as S from "./index.styles";
import ProjectScrap from "./Project";
import StudyScrap from "./Study";

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
      <S.ScrapWrapper>
        {navItem === "hackathon" && <ContestScrap />}
        {navItem === "project" && <ProjectScrap />}
        {navItem === "study" && <StudyScrap />}
      </S.ScrapWrapper>
    </S.ScrabWrapper>
  );
};

export default Scrab;
