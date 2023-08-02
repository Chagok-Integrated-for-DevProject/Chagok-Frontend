import { H2, P, Section, ShowMore } from "components/home/index.styles";
import Image from "next/image";

import arrow from "/public/showMore.svg";

import HottestProjects from "./Hottest";
import LatestProjects from "./Latest";

const Projects = () => {
  return (
    <Section>
      <div>
        <H2>프로젝트 / 스터디</H2>
        <P>나와 맞는 프로젝트와 스터디에 대한 모집글을 찾아보세요!</P>
        <ShowMore href="projects">
          <span>더 보기</span>
          <Image src={arrow} alt="show more" />
        </ShowMore>
      </div>
      <LatestProjects />
      <HottestProjects />
    </Section>
  );
};

export default Projects;
