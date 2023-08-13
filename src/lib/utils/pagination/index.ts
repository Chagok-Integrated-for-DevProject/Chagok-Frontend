export const createPageNumberRenderingList = (
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

export const getNextPageStartNumber = (
  currentPageNum: number,
  totalPageNum: number,
) => {
  const nextPageStartNumber =
    currentPageNum % 6 === 0
      ? currentPageNum + 1
      : currentPageNum - (currentPageNum % 6) + 7;

  return nextPageStartNumber > totalPageNum
    ? totalPageNum
    : nextPageStartNumber;
};

export const getPrevPageEndNumber = (currentPageNum: number) => {
  let prevPageEndNumber = currentPageNum - (currentPageNum % 6);

  if (prevPageEndNumber === currentPageNum) {
    prevPageEndNumber -= 6;
  }

  return prevPageEndNumber > 0 ? prevPageEndNumber : 1;
};
