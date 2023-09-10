import { H3 } from "components/home/index.styles";
import { useComponentMount } from "lib/hooks/useComponentMount";
import { useContestsQuery } from "lib/hooks/useContestsQuery";

import HackthonsCarousel from "./Carousel";

const ClosingSoonHackathons = () => {
  const [mount] = useComponentMount();

  const { data } = useContestsQuery(0, 3, "endDate", "asc");

  return (
    <div id="ClosingSoonHackathons">
      <H3>마감순 Top3</H3>
      {mount && data && <HackthonsCarousel contents={data?.content} />}
    </div>
  );
};

export default ClosingSoonHackathons;
