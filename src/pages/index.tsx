import TopScrollBtn from "components/common/button/topScroll";
import Hr from "components/common/hr";
import MainBanner from "components/common/mainBanner";
import Hackathons from "components/home/hackathons";
import Projects from "components/home/projects";
import Recommendation from "components/home/recommendation";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />
      <Recommendation />
      <Hr />
      <Hackathons />
      <Hr />
      <Projects />
      <TopScrollBtn />
    </>
  );
};

export default Home;
