import ArrowSVG from "components/common/arrow";
import DblArrowSVG from "components/common/dblArrow";
import { createPageNumberRenderingList } from "lib/utils/pagination";
import { type FC } from "react";
import { palette } from "styles/palette";

import {
  Blank,
  DesktopWrapper,
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
  pageCnt: number;
  handleClickPageNumber: (targetPage: number) => void;
  handleClickPrevArrow: () => void;
  handleClickNextArrow: () => void;
  handleClickPrevDblArrow: () => void;
  handleClickNextDblArrow: () => void;
}

const PaginationButtons: FC<IPaginationButtonsProps> = ({
  totalPages,
  currentPage,
  pageCnt,
  handleClickPageNumber,
  handleClickNextArrow,
  handleClickPrevArrow,
  handleClickPrevDblArrow,
  handleClickNextDblArrow,
}) => {
  totalPages = totalPages === 0 ? 1 : totalPages;

  const pageNumberList = createPageNumberRenderingList(
    currentPage,
    totalPages,
    pageCnt,
  );
  const activePrevArrow = currentPage > pageCnt;
  const activeNextArrow =
    currentPage < Math.floor(totalPages / pageCnt) * pageCnt + 1;

  return (
    <PaginationWrapper>
      <DesktopWrapper>
        {activePrevArrow ? (
          <PrevDblArrowBtn
            type="button"
            onClick={handleClickPrevDblArrow}
            data-testid="dbl-prev"
          >
            <DblArrowSVG />
          </PrevDblArrowBtn>
        ) : (
          <Blank aria-hidden="true" />
        )}
      </DesktopWrapper>
      {activePrevArrow ? (
        <PrevArrowBtn
          type="button"
          onClick={handleClickPrevArrow}
          data-testid="prev"
        >
          <ArrowSVG width={30} color={`${palette.fontGray100}`} />
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
          >
            {num}
          </PageNumberBtn>
        );
      })}
      {activeNextArrow ? (
        <NextArrowBtn
          type="button"
          onClick={handleClickNextArrow}
          data-testid="next"
        >
          <ArrowSVG width={30} color={`${palette.fontGray100}`} />
        </NextArrowBtn>
      ) : (
        <Blank aria-hidden="true" />
      )}
      <DesktopWrapper>
        {activeNextArrow ? (
          <NextDblArrowBtn
            type="button"
            onClick={handleClickNextDblArrow}
            data-testid="dbl-next"
          >
            <DblArrowSVG />
          </NextDblArrowBtn>
        ) : (
          <Blank aria-hidden="true" />
        )}
      </DesktopWrapper>
    </PaginationWrapper>
  );
};

export default PaginationButtons;
