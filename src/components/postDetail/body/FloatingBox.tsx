import { Em, Title, Ul, Wrapper } from "./FloatingBox.styles";

const FloatingBox = () => {
  const Recommendations = [
    "Example title1",
    "Example title2",
    "Example title3",
  ];

  return (
    <Wrapper>
      <Title>
        <Em>김철수</Em>님에게 추천하는 프로젝트
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
