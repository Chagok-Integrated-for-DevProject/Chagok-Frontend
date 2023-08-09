import Hr from "components/common/hr";

import Comment from "./comment";
import Original from "./original";
import Summary from "./summary";

const HackathonDetail = () => {
  return (
    <>
      <Summary />
      <Hr />
      <Original />
      <Hr />
      <Comment />
    </>
  );
};

export default HackathonDetail;
