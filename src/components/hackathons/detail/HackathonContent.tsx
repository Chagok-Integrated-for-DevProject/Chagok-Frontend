import Hr from "components/common/hr";
import { useContestQuery } from "lib/hooks";
import { useRouter } from "next/router";

import Original from "./original";
import Summary from "./summary";

const Content = () => {
  const router = useRouter();
  const contestId = Number(router.query.id);
  const { data: contestData } = useContestQuery(contestId);
  if (!contestData) return <></>;
  const summary = { ...contestData };
  const detail = contestData.content;
  return (
    <>
      <Summary data={summary} />
      <Hr />
      <Original data={detail} />
    </>
  );
};

export default Content;
