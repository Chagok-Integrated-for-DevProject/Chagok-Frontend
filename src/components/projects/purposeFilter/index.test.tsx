import { matchers } from "@emotion/jest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useSearchParams } from "next/navigation";

import PurposeFilter from ".";

expect.extend(matchers);

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

(useSearchParams as jest.Mock).mockImplementation(() => {
  return { get: () => "study" };
});

test("FilterBtn을 클릭하면 props로 전달된 handlePurpose가 호출된다.", async () => {
  const user = userEvent.setup();
  const mockHandlePurpose = jest.fn();

  render(<PurposeFilter handlePurpose={mockHandlePurpose} />);
  const studyBtn = screen.getByRole("button", { name: "스터디" });
  const projectBtn = screen.getByRole("button", { name: "프로젝트" });

  await user.click(studyBtn);
  expect(mockHandlePurpose).toHaveBeenCalled();

  await user.click(projectBtn);
  expect(mockHandlePurpose).toHaveBeenCalled();
});

test("FilterBtn isCurrentQuery가 true이면 active style이 적용된다.", () => {
  render(<PurposeFilter handlePurpose={() => {}} />);
  const studyBtn = screen.getByRole("button", { name: "스터디" });
  const projectBtn = screen.getByRole("button", { name: "프로젝트" });

  expect(studyBtn).toHaveStyleRule("color", "#000!important");
  expect(projectBtn).toHaveStyleRule("color", "#757575!important");
});
