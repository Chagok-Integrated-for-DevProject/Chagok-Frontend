import "swiper/css";
import "swiper/css/pagination";

import Loading from "components/common/loading";
import { H2, H3, Section } from "components/hackathons/index.styles";
import { Suspense } from "react";

import HackathonRecommendList from "./HackathonRecommendList";

const Recommendation = () => {
  return (
    <Section>
      <H2>차곡&apos;s 추천</H2>
      <H3>차곡이 추천하는 대회를 살펴보세요!</H3>
      <Suspense fallback={<Loading />}>
        <HackathonRecommendList />
      </Suspense>
    </Section>
  );
};

export default Recommendation;
