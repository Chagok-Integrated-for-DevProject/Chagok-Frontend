import {
  getNextPageStartNumber,
  getPrevPageEndNumber,
} from "lib/utils/pagination";
import { useState } from "react";

export const useHandlePageNumber = (
  initialPage: number = 1,
  totalPage: number,
) => {
  const [pageNumber, setPageNumber] = useState(initialPage);

  const handleClickPageNumber = (targetPage: number) => {
    setPageNumber(targetPage);
  };
  const handleClickPrevArrow = () => {
    setPageNumber(getPrevPageEndNumber(pageNumber));
  };
  const handleClickNextArrow = () => {
    setPageNumber(getNextPageStartNumber(pageNumber, totalPage));
  };

  const handleClickPrevDblArrow = () => {
    setPageNumber(initialPage);
  };

  const handleClickNextDblArrow = () => {
    setPageNumber(totalPage);
  };

  return {
    pageNumber,
    handleClickPageNumber,
    handleClickPrevArrow,
    handleClickNextArrow,
    handleClickPrevDblArrow,
    handleClickNextDblArrow,
  };
};
