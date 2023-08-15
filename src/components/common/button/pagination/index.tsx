import ArrowSVG from "components/common/arrow";
import DblArrowSVG from "components/common/dblArrow";
import { createPageNumberRenderingList } from "lib/utils/pagination";
import { type FC } from "react";
import { palette } from "styles/palette";

import {
  Blank,
  NextArrowBtn,
  NextDblArrowBtn,
  PageNumberBtn,
  PaginationWrapper,
  PrevArrowBtn,
  PrevDblArrowBtn,
} from "./index.styles";

interface IPaginationButtonsProps {
  totalPages: number;
  currentPage: number;
  handleClickPageNumber: (targetPage: number) => void;
  handleClickPrevArrow: () => void;
  handleClickNextArrow: () => void;
  handleClickPrevDblArrow: () => void;
  handleClickNextDblArrow: () => void;
}

const PaginationButtons: FC<IPaginationButtonsProps> = ({
  totalPages,
  currentPage,
  handleClickPageNumber,
  handleClickNextArrow,
  handleClickPrevArrow,
  handleClickPrevDblArrow,
  handleClickNextDblArrow,
}) => {
  const pageNumberList = createPageNumberRenderingList(currentPage, totalPages);
  const activePrevArrow = currentPage > 6;
  const activeNextArrow = currentPage < Math.floor(totalPages / 6) * 6 + 1;

  return (
    <PaginationWrapper>
      {activePrevArrow ? (
        <PrevDblArrowBtn type="button" onClick={handleClickPrevDblArrow}>
          <DblArrowSVG />
        </PrevDblArrowBtn>
      ) : (
        <Blank aria-hidden="true" />
      )}
      {activePrevArrow ? (
        <PrevArrowBtn type="button" onClick={handleClickPrevArrow}>
          <ArrowSVG width={36} color={`${palette.fontGray100}`} />
        </PrevArrowBtn>
      ) : (
        <Blank aria-hidden="true" />
      )}
      {pageNumberList.map((num) => {
        return (
          <PageNumberBtn
            key={num}
            isCurrentPage={currentPage === num}
            onClick={() => handleClickPageNumber(Number(num))}
            className={`${currentPage === num ? "activeBtn" : "non-activeBtn"}`}
          >
            {num}
          </PageNumberBtn>
        );
      })}
      {activeNextArrow ? (
        <NextArrowBtn type="button" onClick={handleClickNextArrow}>
          <ArrowSVG width={36} color={`${palette.fontGray100}`} />
        </NextArrowBtn>
      ) : (
        <Blank aria-hidden="true" />
      )}
      {activeNextArrow ? (
        <NextDblArrowBtn type="button" onClick={handleClickNextDblArrow}>
          <DblArrowSVG />
        </NextDblArrowBtn>
      ) : (
        <Blank aria-hidden="true" />
      )}
    </PaginationWrapper>
  );
};

export default PaginationButtons;
