import Hr from "components/common/hr";
import { useCommentsQuery } from "lib/hooks/useCommentsQuery";
import { useContestQuery } from "lib/hooks/useContestQuery";
import { useRouter } from "next/router";

import Comment from "./comment";
import Original from "./original";
import Summary from "./summary";

const HackathonDetail = () => {
  const router = useRouter();
  const contestId = Number(router.query.id);
  const { data: contestData } = useContestQuery(contestId);
  const { data: commentData } = useCommentsQuery(contestId);
  if (!contestData || !commentData) return <></>;
  const summary = { ...contestData };
  const detail = contestData.content;

  return (
    <>
      <Summary data={summary} />
      <Hr />
      <Original data={detail} />
      <Hr />
      <Comment data={commentData} />
    </>
  );
};

export default HackathonDetail;
