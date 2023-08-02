import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
import HackathonCard from "components/common/card/hackathons/MainPageCard";
import HorizontalCarousel from "components/home/carousel/horizontal";

import { H3 } from "./index.styles";

const LatestHackathons = () => {
  const slides: (() => EmotionJSX.Element)[] = [
    HackathonCard,
    HackathonCard,
    HackathonCard,
  ];
  return (
    <div id="latestHackathons">
      <H3>최신순 Top3</H3>
      <HorizontalCarousel slides={slides} slidesPerView={2.35} />
    </div>
  );
};

export default LatestHackathons;
