import { dehydrate, QueryClient } from "@tanstack/react-query";
import TopScrollBtn from "components/common/button/topScroll";
import Hr from "components/common/hr";
import Loading from "components/common/loading";
import MainBanner from "components/common/mainBanner";
import Hackathons from "components/home/hackathons";
import Projects from "components/home/projects";
import Recommendation from "components/home/recommendation";
import { getContests } from "lib/apis/contests";
import { getProjectList } from "lib/apis/projects";
import { getStudyList } from "lib/apis/studies";
import type { NextPage } from "next";
import { Suspense } from "react";

export async function getServerSideProps() {
  // hotCount => 인기순
  // createdTime=> 최신순
  // queryKey => [purpose, pageNum, pageSize, sort, skills]

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["projects", 0, 3, "hotCount"], () =>
    getProjectList(0, 3, "hotCount", []),
  );
  await queryClient.prefetchQuery(["studies", 0, 3, "hotCount"], () =>
    getStudyList(0, 3, "hotCount", []),
  );
  await queryClient.prefetchQuery(["projects", 0, 3, "createdTime"], () =>
    getProjectList(0, 3, "createdTime", []),
  );
  await queryClient.prefetchQuery(["studies", 0, 3, "createdTime"], () =>
    getStudyList(0, 3, "createdTime", []),
  );
  await queryClient.prefetchQuery(["contests", 0, 3, "endDate", "asc"], () =>
    getContests(0, 3, "endDate", "asc"),
  );

  await queryClient.prefetchQuery(["contests", 0, 3, "startDate", "desc"], () =>
    getContests(0, 3, "startDate", "desc"),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />
      <Suspense fallback={<Loading />}>
        <Recommendation />
      </Suspense>
      <Hackathons />
      <Hr />
      <Projects />
      <TopScrollBtn />
    </>
  );
};

export default Home;
