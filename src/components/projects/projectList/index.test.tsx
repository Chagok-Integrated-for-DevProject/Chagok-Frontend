import { screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { useProjectsQuery } from "lib/hooks/useProjectsQuery";
import { useStudiesQuery } from "lib/hooks/useStudiesQuery";
import { paginationMockData } from "lib/mocks/data/paginationMockData";
import { render } from "lib/test-utils";
import { useSearchParams } from "next/navigation";
import { palette } from "styles/palette";

import ProjectList from ".";

jest.mock("lib/hooks/useProjectsQuery", () => ({
  useProjectsQuery: jest.fn(),
}));

jest.mock("lib/hooks/useStudiesQuery", () => ({
  useStudiesQuery: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
}));

(useProjectsQuery as jest.Mock).mockImplementation(() => ({
  data: paginationMockData,
}));

(useStudiesQuery as jest.Mock).mockImplementation(() => ({
  data: paginationMockData,
}));

describe("projectList 기능 Test", () => {
  it("query string이 purpose=project이고, projects의 검색결과가 존재하는 경우 검색결과가 렌더링 된다.", () => {
    (useSearchParams as jest.Mock).mockImplementation(() => ({
      get: () => "project",
    }));

    render(<ProjectList searchKeyword={""} selectedSkills={[]} />);

    const projectData = screen.getAllByTestId("projectData");
    expect(projectData).toHaveLength(2);
    expect(projectData[0]).toBeInTheDocument();
    expect(projectData[1]).toBeInTheDocument();

    const studyData = screen.queryByTestId("studyData");
    expect(studyData).not.toBeInTheDocument();
  });
  it("purpose=project일 때, handleClickButtons들에 대한 기능 테스트", async () => {
    const user = UserEvent.setup();
    render(<ProjectList searchKeyword={""} selectedSkills={[]} />);

    const nextBtn = screen.getByTestId("next");
    await user.click(nextBtn);

    let currentNumber = screen.getByRole("button", { name: "7" });
    expect(currentNumber).toHaveStyle({
      backgroundColor: `${palette.bgMainOrange}`,
    });

    currentNumber = screen.getByRole("button", { name: "10" });
    await user.click(currentNumber);
    expect(currentNumber).toHaveStyle({
      backgroundColor: `${palette.bgMainOrange}`,
    });

    const prevBtn = screen.getByTestId("prev");
    await user.click(prevBtn);
    expect(prevBtn).not.toBeInTheDocument();

    const dblNextBtn = screen.getByTestId("dbl-next");
    await user.click(dblNextBtn);
    expect(dblNextBtn).not.toBeInTheDocument();

    const dblPrevBtn = screen.getByTestId("dbl-prev");
    await user.click(dblPrevBtn);
    expect(dblPrevBtn).not.toBeInTheDocument();

    paginationMockData.totalPages = 0;
    const renderBtn = screen.getByRole("button", { name: "1" });
    expect(renderBtn).toBeInTheDocument();
  });
  it("purpose=study일 때, handleClickButtons들에 대한 기능 테스트", async () => {
    (useSearchParams as jest.Mock).mockImplementation(() => ({
      get: () => "study",
    }));
    paginationMockData.totalPages = 16;

    const user = UserEvent.setup();
    render(<ProjectList searchKeyword={""} selectedSkills={[]} />);

    const nextBtn = screen.getByTestId("next");
    await user.click(nextBtn);

    let currentNumber = screen.getByRole("button", { name: "7" });
    expect(currentNumber).toHaveStyle({
      backgroundColor: `${palette.bgMainOrange}`,
    });

    currentNumber = screen.getByRole("button", { name: "10" });
    await user.click(currentNumber);
    expect(currentNumber).toHaveStyle({
      backgroundColor: `${palette.bgMainOrange}`,
    });

    const prevBtn = screen.getByTestId("prev");
    await user.click(prevBtn);
    expect(prevBtn).not.toBeInTheDocument();

    const dblNextBtn = screen.getByTestId("dbl-next");
    await user.click(dblNextBtn);
    expect(dblNextBtn).not.toBeInTheDocument();

    const dblPrevBtn = screen.getByTestId("dbl-prev");
    await user.click(dblPrevBtn);
    expect(dblPrevBtn).not.toBeInTheDocument();

    paginationMockData.totalPages = 0;
    const renderBtn = screen.getByRole("button", { name: "1" });
    expect(renderBtn).toBeInTheDocument();
  });
  it("query string이 purpose=study이고, study의 검색결과가 존재하는 경우 검색결과가 렌더링 된다.", () => {
    (useSearchParams as jest.Mock).mockImplementation(() => ({
      get: () => "study",
    }));

    render(<ProjectList searchKeyword={""} selectedSkills={[]} />);

    const studyData = screen.getAllByTestId("studyData");
    expect(studyData).toHaveLength(2);
    expect(studyData[0]).toBeInTheDocument();
    expect(studyData[1]).toBeInTheDocument();

    const projectData = screen.queryByTestId("projectData");
    expect(projectData).not.toBeInTheDocument();
  });
  it("query string이 purpose=project이고, project의 검색결과가 없으면, `검색 결과가 없습니다`가 렌더링 된다.", () => {
    (useSearchParams as jest.Mock).mockImplementation(() => ({
      get: () => "project",
    }));

    paginationMockData.content = [];

    (useProjectsQuery as jest.Mock).mockImplementation(() => ({
      data: paginationMockData,
    }));

    render(<ProjectList searchKeyword={""} selectedSkills={[]} />);

    const noResultText = screen.getByText("검색 결과가 없습니다");
    expect(noResultText).toBeInTheDocument();
  });
  it("query string이 purpose=study이고, study의 검색결과가 없으면, `검색 결과가 없습니다`가 렌더링 된다.", () => {
    (useSearchParams as jest.Mock).mockImplementation(() => ({
      get: () => "study",
    }));

    paginationMockData.content = [];

    (useStudiesQuery as jest.Mock).mockImplementation(() => ({
      data: paginationMockData,
    }));

    render(<ProjectList searchKeyword={""} selectedSkills={[]} />);

    const noResultText = screen.getByText("검색 결과가 없습니다");
    expect(noResultText).toBeInTheDocument();
  });
});
