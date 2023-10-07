import Hr from "components/common/hr";
import Loading from "components/common/loading";
import { useComponentMount } from "lib/hooks";
import React from "react";

import Comment from "./comment";
import Content from "./HackathonContent";

const HackathonDetail = () => {
  const [mount] = useComponentMount();

  return (
    <>
      <React.Suspense fallback={<Loading />}>
        {mount && <Content />}
      </React.Suspense>
      <Hr />
      <React.Suspense fallback={<Loading />}>
        {mount && <Comment />}
      </React.Suspense>
    </>
  );
};

export default HackathonDetail;
