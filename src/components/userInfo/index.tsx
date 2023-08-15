import Hr from "components/common/hr";

import { Wrapper } from "./index.styles";
import Profile from "./profile";
import Scrab from "./scrab";
import Skills from "./skills";

const UserInfo = () => {
  return (
    <Wrapper>
      <Profile />
      <Hr />
      <Skills />
      <Hr />
      <Scrab />
    </Wrapper>
  );
};

export default UserInfo;
