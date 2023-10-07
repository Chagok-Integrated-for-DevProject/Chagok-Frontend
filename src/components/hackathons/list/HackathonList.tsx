import styled from "@emotion/styled";
import PaginationButtons from "components/common/button/pagination";
import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import { useContestsQuery } from "lib/hooks/useContestsQuery";
import {
  getNumberNextBtnClicked,
  getNumberPrevBtnClicked,
} from "lib/utils/pagination";
import type { FC } from "react";
import { useState } from "react";

import type { TFilter } from ".";

interface IHackathonListSectionProps {
  filter: TFilter;
}

const HackathonListSection: FC<IHackathonListSectionProps> = ({ filter }) => {
  const { sort, direction } = filter;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data } = useContestsQuery(pageNumber - 1, 12, sort, direction);

  const pageCnt = 6;
  const handleClickNextArrow = () => {
    setPageNumber(
      getNumberNextBtnClicked(pageNumber, Number(data?.totalPages), pageCnt),
    );
  };
  const handleClickNextDblArrow = () => {
    setPageNumber(Number(data?.totalPages));
  };
  const handleClickPageNumber = (targetPage: number) => {
    setPageNumber(targetPage);
  };
  const handleClickPrevArrow = () => {
    setPageNumber(getNumberPrevBtnClicked(pageNumber, pageCnt));
  };
  const handleClickPrevDblArrow = () => {
    setPageNumber(1);
  };

  if (!data) return <></>;
  return (
    <>
      <ListBox>
        {data.content.map((content) => (
          <HackathonPageCard key={content.id} content={content} />
        ))}
      </ListBox>
      <PaginationBox>
        <PaginationButtons
          pageCnt={6}
          handleClickNextArrow={handleClickNextArrow}
          handleClickNextDblArrow={handleClickNextDblArrow}
          handleClickPageNumber={handleClickPageNumber}
          handleClickPrevArrow={handleClickPrevArrow}
          handleClickPrevDblArrow={handleClickPrevDblArrow}
          currentPage={pageNumber}
          totalPages={data.totalPages}
        />
      </PaginationBox>
    </>
  );
};

export default HackathonListSection;

const ListBox = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 1.85rem;
  grid-template-columns: repeat(auto-fit, minmax(18.75rem, 1fr));
  justify-items: center;
  margin: 0 auto;
`;
const PaginationBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5rem;
`;
