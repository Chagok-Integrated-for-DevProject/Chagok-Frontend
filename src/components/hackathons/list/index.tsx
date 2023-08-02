import styled from "@emotion/styled";
import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import TopScrollBtn from "components/common/topScrollbtn";
import { H2, H3, Section } from "components/hackathons/common.styles";

const List = () => {
  return (
    <>
      <Section>
        <H2>해커톤을 위한 팀원을 모집해보세요</H2>
        <H3>해커톤의 소식을 빠르게 알아보세요!</H3>
        <SelectBox>
          <Select>
            <option>최신순</option>
            <option>조회순</option>
            <option>스크랩순</option>
          </Select>
        </SelectBox>
        <ListBox>
          {new Array(9).fill(1).map((_, i) => (
            <HackathonPageCard key={i} />
          ))}
        </ListBox>
        <BottomContents>
          <div>Pagination</div>
        </BottomContents>
      </Section>
      <TopScrollBtn />
    </>
  );
};

export default List;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  position: relative;

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 0.5rem;
    height: 0.5rem;
    border-left: 1.5px solid black;
    border-bottom: 1.5px solid black;
    transform: rotate(-45deg);
    background-color: white;
  }

  margin-bottom: 4.5rem;
`;

const Select = styled.select`
  width: 18.6875rem;
  padding: 0.8rem 2rem;
  border-radius: 0.625rem;
  border: 1px solid #525252;
  font-size: 1.25rem;
  color: #888;
  appearance: none;
`;

const ListBox = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(min-content, max-content);
  grid-template-columns: repeat(auto-fit, minmax(23.75rem, 1fr));
  grid-gap: 1.87rem;
`;

const BottomContents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 5rem;
`;
