import {
  createPageNumberRenderingList,
  getNumberNextBtnClicked,
  getNumberPrevBtnClicked,
} from ".";

describe("createPageNumberRenderingList 기능 테스트", () => {
  it("현재 페이지가 3이고, 최대 페이지가 5인 경우", () => {
    const pageNumList = createPageNumberRenderingList(3, 5, 6);
    expect(pageNumList).toEqual([1, 2, 3, 4, 5]);
  });

  it("현재 페이지가 3이고 최대 페이지가 7인 경우", () => {
    const pageNumList = createPageNumberRenderingList(3, 7, 6);
    expect(pageNumList).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("현재 페이지가 6이고 최대 페이지가 6인 경우", () => {
    const pageNumList = createPageNumberRenderingList(3, 7, 6);
    expect(pageNumList).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("현재 페이지가 7이고, 최대 페이지가 9인 경우", () => {
    const pageNumList = createPageNumberRenderingList(7, 9, 6);
    expect(pageNumList).toEqual([7, 8, 9]);
  });

  it("현재 페이지가 7이고, 최대 페이지가 13", () => {
    const pageNumList = createPageNumberRenderingList(7, 13, 6);
    expect(pageNumList).toEqual([7, 8, 9, 10, 11, 12]);
  });

  it("현재 페이지가 최대 페이지보다 큰 경우", () => {
    const pageNumList = createPageNumberRenderingList(5, 3, 6);
    expect(pageNumList).toEqual([
      "CurrentPageNum cannot greater than MaxPageNum",
    ]);
  });
});

describe("getNumberNextBtnClicked 기능 테스트", () => {
  it("현재 페이지 3, 최대 페이지 9인 경우 7로 이동", () => {
    const nextPageStartNumber = getNumberNextBtnClicked(3, 9, 6);
    expect(nextPageStartNumber).toBe(7);
  });
  it("현재 페이지 6, 최대 페이지 9인 경우 7로 이동", () => {
    const nextPageStartNumber = getNumberNextBtnClicked(6, 9, 6);
    expect(nextPageStartNumber).toBe(7);
  });
  it("현재 페이지 7, 최대 페이지 9인 경우 9로 이동", () => {
    const nextPageStartNumber = getNumberNextBtnClicked(7, 9, 6);
    expect(nextPageStartNumber).toBe(9);
  });
});

describe("getNumberPrevBtnClicked 기능 테스트", () => {
  it("현재 페이지 3이면 1로 이동", () => {
    const prevPageEndNumber = getNumberPrevBtnClicked(3, 6);
    expect(prevPageEndNumber).toBe(1);
  });
  it("현재 페이지 6이면 1로 이동", () => {
    const prevPageEndNumber = getNumberPrevBtnClicked(6, 6);
    expect(prevPageEndNumber).toBe(1);
  });
  it("현재 페이지 14면 12로 이동", () => {
    const prevPageEndNumber = getNumberPrevBtnClicked(14, 6);
    expect(prevPageEndNumber).toBe(12);
  });
});
