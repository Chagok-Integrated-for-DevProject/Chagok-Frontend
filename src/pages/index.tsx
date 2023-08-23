import { dehydrate, QueryClient } from "@tanstack/react-query";
import TopScrollBtn from "components/common/button/topScroll";
import Hr from "components/common/hr";
import MainBanner from "components/common/mainBanner";
import Hackathons from "components/home/hackathons";
import Projects from "components/home/projects";
import Recommendation from "components/home/recommendation";
import { getProjectsInfo } from "lib/apis/projects";
import { getStudiesInfo } from "lib/apis/studies";
import type { NextPage } from "next";

export async function getServerSideProps() {
  // hotCount => 인기순
  // id => 최신순

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["projects", 0, 3, "hotCount"], () =>
    getProjectsInfo(0, 3, "hotCount"),
  );
  await queryClient.prefetchQuery(["studies", 0, 3, "hotCount"], () =>
    getStudiesInfo(0, 3, "hotCount"),
  );
  await queryClient.prefetchQuery(["projects", 0, 3, "id"], () =>
    getProjectsInfo(0, 3, "id"),
  );
  await queryClient.prefetchQuery(["studies", 0, 3, "id"], () =>
    getStudiesInfo(0, 3, "id"),
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
      <Recommendation />
      <Hr />
      <Hackathons />
      <Hr />
      <Projects />
      <TopScrollBtn />
    </>
  );
};

export default Home;
