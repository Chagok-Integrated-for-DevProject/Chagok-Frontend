import TopScrollBtn from "components/common/button/topScroll";
import MainBanner from "components/common/mainBanner";
import SearchProjects from "components/projects";
import type { NextPage } from "next";

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
