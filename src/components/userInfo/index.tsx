import Loading from "components/common/loading";
import { useComponentMount } from "lib/hooks/useComponentMount";
import React from "react";

import { Wrapper } from "./index.styles";
import UserInfo from "./UserInfo";

const UserInfoContainer = () => {
  const [mount] = useComponentMount();

  return (
    <Wrapper>
      <React.Suspense fallback={<Loading />}>
        {mount && <UserInfo />}
      </React.Suspense>
    </Wrapper>
  );
};

export default UserInfoContainer;
