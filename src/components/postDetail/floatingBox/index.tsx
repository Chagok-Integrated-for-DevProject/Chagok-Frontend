import type { FC } from "react";

import { Em, Title, Ul, Wrapper } from "./index.styles";

interface IFLoatingBoxProps {
  mobileVisible?: boolean;
}

const FloatingBox: FC<IFLoatingBoxProps> = ({ mobileVisible }) => {
  const Recommendations = [
    "Example title1",
    "Example title2",
    "Example title3",
  ];

  return (
    <Wrapper mobileVisible={mobileVisible || false}>
      <Title>
        <Em>김철수</Em>님에게 추천 프로젝트
      </Title>
      <Ul>
        {Recommendations.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </Ul>
    </Wrapper>
  );
};

export default FloatingBox;
