export const createPageNumberRenderingList = (
  // 화면에 렌더링 될 페이지 번호 리스트
  currentPageNum: number,
  maxPageNum: number,
): number[] | string[] => {
  if (currentPageNum > maxPageNum) {
    return ["CurrentPageNum cannot greater than MaxPageNum"];
  }

  const pageNumList = [];
  const startNum = Math.floor((currentPageNum - 1) / 6) * 6 + 1;

  for (let i = 0; i < 6; i++) {
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
) => {
  const getNextNumber =
    currentPageNum % 6 === 0
      ? currentPageNum + 1
      : currentPageNum - (currentPageNum % 6) + 7;

  return getNextNumber > totalPageNum ? totalPageNum : getNextNumber;
};

export const getNumberPrevBtnClicked = (currentPageNum: number) => {
  let getPrevNumber = currentPageNum - (currentPageNum % 6);

  if (getPrevNumber === currentPageNum) {
    getPrevNumber -= 6;
  }

  return getPrevNumber > 0 ? getPrevNumber : 1;
};
