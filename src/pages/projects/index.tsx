import Hr from "components/common/hr";
import MainBanner from "components/common/mainBanner";
import ProjectList from "components/projects/projectList";
import SearchFilter from "components/projects/search";
import type { NextPage } from "next";

const ProjectPage: NextPage = () => {
  return (
    <>
      <MainBanner />
      <SearchFilter />
      <Hr />
      <ProjectList />
    </>
  );
};

export default ProjectPage;
