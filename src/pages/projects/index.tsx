import { dehydrate, QueryClient } from "@tanstack/query-core";
import TopScrollBtn from "components/common/button/topScroll";
import MainBanner from "components/common/mainBanner";
import SearchProjects from "components/projects";
import { getProjectList } from "lib/apis/projects";
import { getStudyList } from "lib/apis/studies";
import type { NextPage } from "next";

export async function getServerSideProps() {
  // hotCount => 인기순
  // createdTime => 최신순

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["projects", 0, 12, "id"], () =>
    getProjectList(0, 12, "createdTime", []),
  );
  await queryClient.prefetchQuery(["studies", 0, 12, "id"], () =>
    getStudyList(0, 12, "createdTime", []),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
// 스터디 / 프로젝트
const PostPage: NextPage = () => {
  return (
    <>
      <MainBanner />
      <SearchProjects />
      <TopScrollBtn />
    </>
  );
};

export default PostPage;
