import { dehydrate, QueryClient } from "@tanstack/react-query";
import HackathonDetail from "components/hackathons/detail";
import { getComments } from "lib/apis/comment";
import { getContest } from "lib/apis/contests";
import type { GetServerSideProps, NextPage } from "next";

const HackathonDetailPage: NextPage = () => {
  return <HackathonDetail />;
};

export default HackathonDetailPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const contestId = Number(params?.id);
  const queryClient = new QueryClient();
  queryClient.prefetchQuery(["contests", contestId], () =>
    getContest(contestId),
  );
  queryClient.prefetchQuery(["contests", contestId, "comments"], () =>
    getComments(contestId),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
