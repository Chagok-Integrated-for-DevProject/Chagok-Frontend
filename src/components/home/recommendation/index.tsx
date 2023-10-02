import ArrowSVG from "components/common/arrow";
import Hr from "components/common/hr";
import Loading from "components/common/loading";
import { Br, H2, P, Section, ShowMore } from "components/home/index.styles";
import { useGetMyInfoQuery } from "lib/hooks/useGetMyInfoQuery";
import { useJwtToken } from "lib/hooks/useJwtToken";
import { Suspense } from "react";
import { palette } from "styles/palette";

import RecommendationCarousel from "./Carousel";

const Recommendation = () => {
  const { token: jwt } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(jwt);

  return (
    <>
      <Section>
        {jwt !== "" && (
          <>
            <div className="section-title">
              <H2>
                {userInfo?.nickName}님을 위한
                <Br /> 추천 과제
              </H2>
              <P>
                {userInfo?.nickName}님의 취향에 맞춘 추천 프로젝트들을
                구경해보세요!
              </P>
              <ShowMore href="projects?purpose=project">
                <span>더 보기</span>
                <ArrowSVG width={35} color={`${palette.fontGray300}`} />
              </ShowMore>
            </div>
            <Suspense fallback={<Loading />}>
              <RecommendationCarousel />
            </Suspense>
          </>
        )}
      </Section>
      {jwt !== "" && <Hr />}
    </>
  );
};

export default Recommendation;
