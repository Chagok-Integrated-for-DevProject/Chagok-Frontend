import { matchers } from "@emotion/jest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PurposeFilter from "components/projects/search/PurposeFilter";
import { useRouter } from "next/router";

expect.extend(matchers);

afterEach(() => {
  jest.clearAllMocks();
});

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({
  query: { purpose: "study" },
  push: jest.fn(),
});

test("FilterBtn을 클릭하면 pathname, query와 함께 useRouter().push가 실행된다.", async () => {
  const user = userEvent.setup();

  render(<PurposeFilter />);
  const studyBtn = screen.getByRole("button", { name: "스터디" });
  const projectBtn = screen.getByRole("button", { name: "프로젝트" });

  await user.click(studyBtn);
  expect(useRouter().push).toHaveBeenCalledWith({
    pathname: "/projects",
    query: { purpose: "study" },
  });
  await user.click(projectBtn);
  expect(useRouter().push).toHaveBeenCalledWith({
    pathname: "/projects",
    query: { purpose: "project" },
  });
});

test("FilterBtn isCurrentQuery가 true이면 active style이 적용된다.", () => {
  render(<PurposeFilter />);
  const studyBtn = screen.getByRole("button", { name: "스터디" });
  const projectBtn = screen.getByRole("button", { name: "프로젝트" });

  expect(studyBtn).toHaveStyleRule("color", "#000!important");
  expect(projectBtn).toHaveStyleRule("color", "#757575!important");
});
