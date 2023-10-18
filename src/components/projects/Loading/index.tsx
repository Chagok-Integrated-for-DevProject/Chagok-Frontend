import styled from "@emotion/styled";
import SkeletonItem from "components/common/skeleton";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

const SkeletonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc(33% - 0.8rem));
  gap: 2.375rem;

  margin: 6.4375rem 0;

  @media ${breakPoints.md} {
    grid-template-columns: repeat(2, calc(50% - 0.8rem));
  }

  @media ${breakPoints.sm} {
    grid-template-columns: repeat(1, 100%);
  }
`;

const SkeletonCard = styled.div`
  padding: 2.3125rem;

  border-radius: 0.625rem;
  background: ${palette.white};
  box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.1);
`;

const TagWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 1.5rem;
  white-space: pre-wrap;
  overflow: hidden;
`;

const Tag = styled.div`
  width: 5rem;
  height: 1.5rem;

  overflow: hidden;
  border: 0;
  border-radius: 1rem;
  margin-right: 1rem;
`;

const Title = styled.div`
  width: 100%;
  height: 3.1875rem;

  margin: 1rem 0;
`;

const Description = styled.div`
  width: 100%;
  height: 6rem;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;
`;

const SkillWrapper = styled.div`
  display: flex;
  width: 100%;

  gap: 1.25rem;
`;

const Skill = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.45rem;

  overflow: hidden;
`;

const ViewCnt = styled.div`
  width: 5.125rem;
  height: 1.5rem;

  margin-top: 1.5rem;
  overflow: hidden;
  border-radius: 0.45rem;
`;

const Loading = () => {
  const cards = new Array(12).fill(1);

  return (
    <SkeletonWrapper>
      {cards.map((e, i) => (
        <SkeletonCard key={i}>
          <TagWrapper>
            <Tag>
              <SkeletonItem />
            </Tag>
            <Tag>
              <SkeletonItem />
            </Tag>
          </TagWrapper>
          <Title>
            <SkeletonItem />
          </Title>
          <Description>
            <SkeletonItem />
          </Description>
          <Hr>
            <SkeletonItem />
          </Hr>
          <SkillWrapper>
            <Skill>
              <SkeletonItem />
            </Skill>
            <Skill>
              <SkeletonItem />
            </Skill>
            <Skill>
              <SkeletonItem />
            </Skill>
          </SkillWrapper>
          <ViewCnt>
            <SkeletonItem />
          </ViewCnt>
        </SkeletonCard>
      ))}
    </SkeletonWrapper>
  );
};

export default Loading;
