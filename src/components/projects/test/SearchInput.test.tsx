import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from "components/projects/searchInput";

const handleKeyword = jest
  .fn()
  .mockImplementation((e: React.ChangeEvent<HTMLInputElement>) => {
    e.target;
    return;
  });

describe("SearchInput 기능 테스트", () => {
  it("default: `원하는 검색어를 입력해주세요.`, 돋보기 아이콘 표시", () => {
    render(<SearchInput handleKeyword={handleKeyword} keyword="" />);
    const label = screen.getByText("원하는 검색어를 입력해주세요.");
    const img = screen.getByAltText("돋보기");

    expect(label).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
  it("SearchInput에 focus상태이면 `원하는 검색어를 입력해주세요.`, 돋보기 아이콘 표시 X", async () => {
    const user = userEvent.setup();
    render(<SearchInput handleKeyword={handleKeyword} keyword="" />);

    const input = screen.getByTestId("searchInput");
    const label = screen.getByText("원하는 검색어를 입력해주세요.");
    const img = screen.getByAltText("돋보기");

    await user.click(input);

    expect(label).not.toBeInTheDocument();
    expect(img).not.toBeInTheDocument();
  });
  it("SearchInput에 값이 입력되어 있는 상태에서, bluerEvent발생하면 입력된 값 유지", () => {
    render(<SearchInput handleKeyword={handleKeyword} keyword="값 있어요." />);
    const input = screen.getByRole("textbox");
    const label = screen.queryByText("원하는 검색어를 입력해주세요.");
    const img = screen.queryByAltText("돋보기");
    const value = screen.getByDisplayValue("값 있어요.");

    fireEvent.click(input);
    fireEvent.blur(input);

    expect(label).not.toBeInTheDocument();
    expect(img).not.toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
  it("SearchInput에 onChangeEvent 발생하면 handleKeyword 실행", () => {
    render(<SearchInput handleKeyword={handleKeyword} keyword="" />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "chagne..." } });
    expect(handleKeyword).toHaveBeenCalled();
  });
});
