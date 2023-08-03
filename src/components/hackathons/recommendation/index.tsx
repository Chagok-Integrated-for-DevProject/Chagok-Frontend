import styled from "@emotion/styled";
import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import { H2, H3, Section } from "components/hackathons/index.styles";

const Recommendation = () => {
  return (
    <Section>
      <H2>차곡&apos;s 추천</H2>
      <H3>차곡이 추천하는 대회를 살펴보세요!</H3>
      <CardWrapper>
        <HackathonPageCard />
        <HackathonPageCard />
        <HackathonPageCard />
      </CardWrapper>
      <Navigation>Navigation</Navigation>
    </Section>
  );
};

export default Recommendation;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

const Navigation = styled.div`
  margin-block: 3.5rem;
  text-align: center;
`;
