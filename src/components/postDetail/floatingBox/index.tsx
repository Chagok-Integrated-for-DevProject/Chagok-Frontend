import { useGetMyInfoQuery } from "lib/hooks/useGetMyInfoQuery";
import { useRecommendationQuery } from "lib/hooks/useRecommendationQuery";
import type { FC } from "react";

import { Em, RecommendLink, Title, Ul, Wrapper } from "./index.styles";

interface IFLoatingBoxProps {
  mobileVisible?: boolean;
  jwt: string;
}

const FloatingBox: FC<IFLoatingBoxProps> = ({ mobileVisible, jwt }) => {
  const { data: recommendations } = useRecommendationQuery(jwt);
  const { data: userInfo } = useGetMyInfoQuery(jwt);

  return (
    <Wrapper mobileVisible={mobileVisible || false}>
      <Title>
        <Em>{userInfo?.nickName}</Em>님에게 추천 프로젝트
      </Title>
      <Ul>
        {recommendations?.map((e, i) => (
          <li key={i} data-testid="recommends">
            <RecommendLink href={`/projects/${e.id}?purpose="purpose`}>
              {e.title}
            </RecommendLink>
          </li>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default FloatingBox;
