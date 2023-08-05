import { H2, P, Section, ShowMore } from "components/home/index.styles";
import Image from "next/image";

import arrow from "/public/showMore.svg";

import RecommendationCarousel from "./Carousel";

const Recommendation = () => {
  return (
    <Section>
      <div className="section-title">
        <H2>김철수님을 위한 추천 과제</H2>
        <P>철수님의 취향에 맞춘 추천 프로젝트들을 구경해보세요!</P>
        <ShowMore href="projects">
          <span>더 보기</span>
          <Image src={arrow} alt="show more" />
        </ShowMore>
      </div>
      <RecommendationCarousel />
    </Section>
  );
};

export default Recommendation;
