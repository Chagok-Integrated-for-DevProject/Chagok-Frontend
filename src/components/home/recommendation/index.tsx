import ArrowSVG from "components/common/arrow";
import { Br, H2, P, Section, ShowMore } from "components/home/index.styles";
import { palette } from "styles/palette";

import RecommendationCarousel from "./Carousel";

const Recommendation = () => {
  return (
    <Section>
      <div className="section-title">
        <H2>
          김철수님을 위한
          <Br /> 추천 과제
        </H2>
        <P>철수님의 취향에 맞춘 추천 프로젝트들을 구경해보세요!</P>
        <ShowMore href="projects">
          <span>더 보기</span>
          <ArrowSVG width={35} color={`${palette.fontGray300}`} />
        </ShowMore>
      </div>
      <RecommendationCarousel />
    </Section>
  );
};

export default Recommendation;
