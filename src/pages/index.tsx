import TopScrollBtn from "components/common/topScrollbtn";
import Hackathons from "components/home/hackathons";
import MainBanner from "components/home/mainBanner";
import Projects from "components/home/projects";
import Recommendation from "components/home/recommendation";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <MainBanner />
      <Recommendation />
      <Hackathons />
      <Projects />
      <TopScrollBtn />
    </>
  );
};

export default Home;
