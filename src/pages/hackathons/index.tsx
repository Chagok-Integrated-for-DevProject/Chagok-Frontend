import Hr from "components/common/hr";
import List from "components/hackathons/list";
import Recommendation from "components/hackathons/recommendation";
import { AxiosClient } from "lib/apis/axiosClient";
import type { IContests } from "lib/types/hackathon";

export const getServerSideProps = async () => {
  const { data } = await AxiosClient.get("https://api.chagok.site/hackathons");
  const contests = { ...data };
  return {
    props: {
      contests,
    },
  };
};

const HackathonPage = ({ contests }: { contests: IContests }) => {
  // FIXME: 삭제 예정
  if (process.env.NODE_ENV === "development") console.log(contests);
  return (
    <>
      <Recommendation />
      <Hr />
      <List />
    </>
  );
};

export default HackathonPage;
