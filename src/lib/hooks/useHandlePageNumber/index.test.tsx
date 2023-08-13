import { act, renderHook } from "@testing-library/react";

import { useHandlePageNumber } from ".";

describe("useHandlePageNumber hook 기능 테스트", () => {
  it("handleClickNextArrow를 실행하면 pageNumber를 다음페이지 시작 번호로 업데이트 한다.", () => {
    const { result } = renderHook(() => useHandlePageNumber(1, 15));

    act(() => {
      result.current.handleClickNextArrow();
    });
    expect(result.current.pageNumber).toBe(7);

    act(() => {
      result.current.handleClickNextArrow();
    });
    expect(result.current.pageNumber).toBe(13);

    act(() => {
      result.current.handleClickNextArrow();
    });
    expect(result.current.pageNumber).toBe(15);
  });

  it("handleClickNextDblArrow를 실행하면 pageNumber를 totalPage번호로 업데이트 한다.", () => {
    const { result } = renderHook(() => useHandlePageNumber(1, 15));
    act(() => {
      result.current.handleClickNextDblArrow();
    });
    expect(result.current.pageNumber).toBe(15);
  });

  it("handleClickPrevDblArrow를 실행하면 pageNumber를 1로 업데이트 한다.", () => {
    const { result } = renderHook(() => useHandlePageNumber(1, 15));
    act(() => {
      result.current.handleClickNextDblArrow();
    });
    act(() => {
      result.current.handleClickPrevDblArrow();
    });
    expect(result.current.pageNumber).toBe(1);
  });

  it("handleClickprevArrow를 실행하면 pageNumber를 이전 페이지 끝 번호로 업데이트 한다.", () => {
    const { result } = renderHook(() => useHandlePageNumber(14, 15));

    act(() => {
      result.current.handleClickPrevArrow();
    });
    expect(result.current.pageNumber).toBe(12);

    act(() => {
      result.current.handleClickPrevArrow();
    });
    expect(result.current.pageNumber).toBe(6);

    act(() => {
      result.current.handleClickPrevArrow();
    });
    expect(result.current.pageNumber).toBe(1);
  });

  it("handleClickPageNumber를 실행하면 pageNumber를 원하는 번호로 업데이트 한다.", () => {
    const { result } = renderHook(() => useHandlePageNumber(1, 15));

    act(() => {
      result.current.handleClickPageNumber(10);
    });
    expect(result.current.pageNumber).toBe(10);

    act(() => {
      result.current.handleClickPageNumber(2);
    });
    expect(result.current.pageNumber).toBe(2);
  });

  it("useHandlePageNumber의 첫번째 매개변수에 값을 전달하지 않으면 initialPageNumber는 1이다.", () => {
    const { result } = renderHook(() => useHandlePageNumber(undefined, 15));
    expect(result.current.pageNumber).toBe(1);
  });
});
