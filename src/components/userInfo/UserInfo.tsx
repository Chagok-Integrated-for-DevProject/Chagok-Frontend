import axios from "axios";
import Hr from "components/common/hr";
import type { TUserInfoReturnType } from "lib/types/userInfo";
import { useEffect, useState } from "react";

import Profile from "./profile";
import Scrab from "./scrab";
import Skills from "./skills";
const UserInfo = () => {
  const [userInfo, setUserInfo] = useState<TUserInfoReturnType>();
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) return;
    axios
      .get("https://api.chagok.site/member/info", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setUserInfo(data);
      });
  }, []);

  if (!userInfo) return <></>;
  const {
    email,
    nickName,
    profileImg,
    social,
    contestScraps,
    projectScraps,
    skills,
    studyScraps,
  } = userInfo;

  const profileData = { email, nickName, profileImg, social };
  const skillsData = { skills };
  const scrapData = { contestScraps, projectScraps, studyScraps };

  return (
    <>
      <Profile {...profileData} />
      <Hr />
      <Skills {...skillsData} />
      <Hr />
      <Scrab {...scrapData} />
    </>
  );
};

export default UserInfo;
