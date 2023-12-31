import { H3 } from "components/home/index.styles";
import { useComponentMount } from "lib/hooks/useComponentMount";
import { useContestsQuery } from "lib/hooks/useContestsQuery";

import HackthonsCarousel from "./Carousel";

const LatestHackathons = () => {
  const [mount] = useComponentMount();

  const { data } = useContestsQuery(0, 3, "startDate", "desc");

  return (
    <div id="latestHackathons">
      <H3>최신순 Top3</H3>
      {mount && data && <HackthonsCarousel contents={data?.content} />}
    </div>
  );
};

export default LatestHackathons;
