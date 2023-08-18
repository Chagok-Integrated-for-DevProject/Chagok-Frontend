import TopScrollBtn from "components/common/button/topScroll";
import MainBanner from "components/common/mainBanner";
import SearchProjects from "components/projects";
import type { NextPage } from "next";

// 스터디 / 프로젝트
const ProjectPage: NextPage = () => {
  return (
    <>
      <MainBanner />
      <SearchProjects />
      <TopScrollBtn />
    </>
  );
};

export default ProjectPage;
