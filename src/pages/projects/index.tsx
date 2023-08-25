import { dehydrate, QueryClient } from "@tanstack/query-core";
import TopScrollBtn from "components/common/button/topScroll";
import MainBanner from "components/common/mainBanner";
import SearchProjects from "components/projects";
import { getProjectsInfo } from "lib/apis/projects";
import { getStudiesInfo } from "lib/apis/studies";
import type { NextPage } from "next";

export async function getServerSideProps() {
  // hotCount => 인기순
  // id => 최신순

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["projects", 0, 12, "id"], () =>
    getProjectsInfo(0, 12, "id"),
  );
  await queryClient.prefetchQuery(["studies", 0, 12, "id"], () =>
    getStudiesInfo(0, 12, "id"),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
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
