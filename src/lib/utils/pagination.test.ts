import { createRenderPageNumberList } from "./pagination";

describe("createRenderPageNumberList 기능 테스트", () => {
  it("현재 페이지가 3이고, 최대 페이지가 5인 경우", () => {
    const pageNumList = createRenderPageNumberList(3, 5);
    expect(pageNumList).toEqual([1, 2, 3, 4, 5]);
  });

  it("현재 페이지가 3이고 최대 페이지가 7인 경우", () => {
    const pageNumList = createRenderPageNumberList(3, 7);
    expect(pageNumList).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("현재 페이지가 7이고, 최대 페이지가 9인 경우", () => {
    const pageNumList = createRenderPageNumberList(7, 9);
    expect(pageNumList).toEqual([7, 8, 9]);
  });

  it("현재 페이지가 7이고, 최대 페이지가 13", () => {
    const pageNumList = createRenderPageNumberList(7, 13);
    expect(pageNumList).toEqual([7, 8, 9, 10, 11, 12]);
  });

  it("현재 페이지가 최대 페이지보다 큰 경우", () => {
    const pageNumList = createRenderPageNumberList(5, 3);
    expect(pageNumList).toEqual([
      "CurrentPageNum cannot greater than MaxPageNum",
    ]);
  });
});
