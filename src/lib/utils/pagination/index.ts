export const createPageNumberRenderingList = (
  // 화면에 렌더링 될 페이지 번호 리스트
  currentPageNum: number,
  maxPageNum: number,
  pageCnt: number,
): number[] | string[] => {
  if (currentPageNum > maxPageNum) {
    return ["CurrentPageNum cannot greater than MaxPageNum"];
  }

  const pageNumList = [];
  const startNum = Math.floor((currentPageNum - 1) / pageCnt) * pageCnt + 1;

  for (let i = 0; i < pageCnt; i++) {
    if (startNum + i > maxPageNum) {
      break;
    }
    pageNumList.push(startNum + i);
  }

  return pageNumList;
};

export const getNumberNextBtnClicked = (
  currentPageNum: number,
  totalPageNum: number,
  pageCnt: number,
) => {
  const getNextNumber =
    currentPageNum % pageCnt === 0
      ? currentPageNum + 1
      : currentPageNum - (currentPageNum % pageCnt) + pageCnt + 1;

  return getNextNumber > totalPageNum ? totalPageNum : getNextNumber;
};

export const getNumberPrevBtnClicked = (
  currentPageNum: number,
  pageCnt: number,
) => {
  let getPrevNumber = currentPageNum - (currentPageNum % pageCnt);

  if (getPrevNumber === currentPageNum) {
    getPrevNumber -= pageCnt;
  }

  return getPrevNumber > 0 ? getPrevNumber : 1;
};
