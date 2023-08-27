/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getNextPageStartNumber,
  getPrevPageEndNumber,
} from "lib/utils/pagination";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useHandlePageNumber = (
  initialPage: number = 1,
  totalPage: number,
  deps?: any[],
) => {
  const searchParams = useSearchParams();
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

  const useEffectDeps = [searchParams.get("purpose"), initialPage];

  if (deps) {
    useEffectDeps.push(...deps);
  }

  useEffect(() => {
    setPageNumber(initialPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...useEffectDeps]);

  return {
    pageNumber,
    handleClickPageNumber,
    handleClickPrevArrow,
    handleClickNextArrow,
    handleClickPrevDblArrow,
    handleClickNextDblArrow,
  };
};
