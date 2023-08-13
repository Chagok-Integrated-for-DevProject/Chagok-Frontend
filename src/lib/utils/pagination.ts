export const createRenderPageNumberList = (
  currentPageNum: number,
  maxPageNum: number,
): number[] | string[] => {
  if (currentPageNum > maxPageNum) {
    return ["CurrentPageNum cannot greater than MaxPageNum"];
  }

  const pageNumList = [];
  const startNum = Math.floor(currentPageNum / 6) * 6 + 1;

  for (let i = 0; i < 6; i++) {
    if (startNum + i > maxPageNum) break;
    pageNumList.push(startNum + i);
  }

  return pageNumList;
};
