import ArrowSVG from "components/common/arrow";
import Loading from "components/common/loading";
import { H2, P, Section, ShowMore } from "components/home/index.styles";
import { Suspense } from "react";
import { palette } from "styles/palette";

import ClosingSoonHackathons from "./ClosingSoon";
import LatestHackathons from "./Latest";

const Hackathons = () => {
  return (
    <Section>
      <div className="section-title">
        <H2>해커톤</H2>
        <P>따끈따끈한 해커톤에 대한 정보를 확인해보세요!</P>
        <ShowMore href="hackathons">
          <span>더 보기</span>
          <ArrowSVG width={35} color={`${palette.fontGray300}`} />
        </ShowMore>
      </div>
      <Suspense fallback={<Loading />}>
        <LatestHackathons />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ClosingSoonHackathons />
      </Suspense>
    </Section>
  );
};

export default Hackathons;
