import { matchers } from "@emotion/jest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { palette } from "styles/palette";

import PaginationButtons from ".";

expect.extend(matchers);
const mockHandleClickNextArrow = jest.fn();
const mockHandleClickPageNumber = jest.fn();
const mockHandleClickPrevArrow = jest.fn();
const mockHandleClickNextDblArrow = jest.fn();
const mockHandleClickPrevDblArrow = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe("pagination button 기능 test", () => {
  it("prev, next, prevDbl, nextDbl 버튼 클릭 test", async () => {
    const user = userEvent.setup();

    render(
      <PaginationButtons
        totalPages={16}
        currentPage={1}
        handleClickPageNumber={mockHandleClickPageNumber}
        handleClickNextArrow={mockHandleClickNextArrow}
        handleClickPrevArrow={mockHandleClickPrevArrow}
        handleClickPrevDblArrow={mockHandleClickPrevDblArrow}
        handleClickNextDblArrow={mockHandleClickNextDblArrow}
      />,
    );

    const next = screen.getByTestId("next");
    const dblNext = screen.getByTestId("dbl-next");
    let prev = screen.queryByTestId("prev");
    let dblPrev = screen.queryByTestId("dbl-prev");

    expect(next).toBeInTheDocument();
    expect(dblNext).toBeInTheDocument();
    expect(prev).not.toBeInTheDocument();
    expect(dblPrev).not.toBeInTheDocument();
    await user.click(next);
    await user.click(dblNext);
    expect(mockHandleClickNextArrow).toHaveBeenCalled();
    expect(mockHandleClickNextDblArrow).toHaveBeenCalled();

    const pageButton = screen.getByRole("button", { name: "3" });
    await user.click(pageButton);
    expect(mockHandleClickPageNumber).toHaveBeenCalled();

    jest.clearAllMocks();

    render(
      <PaginationButtons
        totalPages={16}
        currentPage={16}
        handleClickPageNumber={mockHandleClickPageNumber}
        handleClickNextArrow={mockHandleClickNextArrow}
        handleClickPrevArrow={mockHandleClickPrevArrow}
        handleClickPrevDblArrow={mockHandleClickPrevDblArrow}
        handleClickNextDblArrow={mockHandleClickNextDblArrow}
      />,
    );

    prev = screen.getByTestId("prev");
    dblPrev = screen.getByTestId("dbl-prev");
    await user.click(prev);
    await user.click(dblPrev);
    expect(mockHandleClickPrevArrow).toHaveBeenCalled();
    expect(mockHandleClickPrevDblArrow).toHaveBeenCalled();
  });
  it("totalPage에 0이 전달된 경우, 페이지는 1개가 생성된다.", () => {
    render(
      <PaginationButtons
        totalPages={0}
        currentPage={1}
        handleClickPageNumber={mockHandleClickPageNumber}
        handleClickNextArrow={mockHandleClickNextArrow}
        handleClickPrevArrow={mockHandleClickPrevArrow}
        handleClickPrevDblArrow={mockHandleClickPrevDblArrow}
        handleClickNextDblArrow={mockHandleClickNextDblArrow}
      />,
    );

    const pageButton = screen.getByRole("button", { name: "1" });
    expect(pageButton).toBeInTheDocument();
  });

  it("현재 페이지 번호를 표시하는 버튼의 색은 bgMainOrange이다.", () => {
    render(
      <PaginationButtons
        totalPages={10}
        currentPage={3}
        handleClickPageNumber={mockHandleClickPageNumber}
        handleClickNextArrow={mockHandleClickNextArrow}
        handleClickPrevArrow={mockHandleClickPrevArrow}
        handleClickPrevDblArrow={mockHandleClickPrevDblArrow}
        handleClickNextDblArrow={mockHandleClickNextDblArrow}
      />,
    );

    const currentNumberBtn = screen.getByRole("button", { name: "3" });
    expect(currentNumberBtn).toHaveStyleRule(
      "background-color",
      `${palette.bgMainOrange}`,
    );
  });
  it("현재 페이지 번호가 아닌 버튼의 색은 transparent이다.", () => {
    render(
      <PaginationButtons
        totalPages={10}
        currentPage={3}
        handleClickPageNumber={mockHandleClickPageNumber}
        handleClickNextArrow={mockHandleClickNextArrow}
        handleClickPrevArrow={mockHandleClickPrevArrow}
        handleClickPrevDblArrow={mockHandleClickPrevDblArrow}
        handleClickNextDblArrow={mockHandleClickNextDblArrow}
      />,
    );

    const currentNumberBtn = screen.getByRole("button", { name: "1" });
    expect(currentNumberBtn).toHaveStyleRule("background-color", "transparent");
  });
});
