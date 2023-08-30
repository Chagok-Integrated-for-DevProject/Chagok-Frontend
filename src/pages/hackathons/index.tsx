import { dehydrate, QueryClient } from "@tanstack/react-query";
import Hr from "components/common/hr";
import List from "components/hackathons/list";
import Recommendation from "components/hackathons/recommendation";
import { getContests } from "lib/apis/contests";
import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  // 차곡 추천(인기순)
  await queryClient.prefetchQuery(["contests", 0, 9, "hotCount", "desc"], () =>
    getContests(0, 9, "hotCount", "desc"),
  );
  // 초기 리스트
  await queryClient.prefetchQuery(["contests", 0, 12, "id", "desc"], () =>
    getContests(0, 12, "id", "desc"),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const HackathonPage: NextPage = () => {
  return (
    <>
      <Recommendation />
      <Hr />
      <List />
    </>
  );
};

export default HackathonPage;
