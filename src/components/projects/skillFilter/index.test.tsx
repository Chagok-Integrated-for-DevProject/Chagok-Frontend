import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SkillFilter from ".";

const handleSelectedSkills = jest.fn().mockImplementation((skill: string) => {
  if (selectedSkills.includes(skill)) {
    selectedSkills.filter((e) => e !== skill);
    return;
  }
  selectedSkills.push(skill);
});
let selectedSkills: string[] = [];

describe("SkillFilter 기능 테스트", () => {
  it("default: selector가 닫혀있고, `원하는 태그를 선택해보세요`가 렌더링 된다.", () => {
    render(
      <SkillFilter
        handleSelectedSkills={handleSelectedSkills}
        selectedSkills={selectedSkills}
      />,
    );

    const placeholder = screen.getByText(/원하는 태그를 선택해보세요./);
    const skillList = screen.queryByTestId(/skillList/);
    expect(placeholder).toBeInTheDocument();
    expect(skillList).not.toBeInTheDocument();
  });
  it("클릭하면 skill 선택창이 열린다", async () => {
    const user = userEvent.setup();

    render(
      <SkillFilter
        handleSelectedSkills={handleSelectedSkills}
        selectedSkills={selectedSkills}
      />,
    );
    const placeholder = screen.getByText(/원하는 태그를 선택해보세요./);
    await user.click(placeholder);

    const skillList = screen.getByTestId(/skillList/);
    expect(skillList).toBeInTheDocument();
  });
  it("SkillOptions의 특정 skill을 클릭하면 handleSelectedSkills가 호출된다.", async () => {
    const user = userEvent.setup();
    render(
      <SkillFilter
        handleSelectedSkills={handleSelectedSkills}
        selectedSkills={selectedSkills}
      />,
    );

    const placeholder = screen.getByText(/원하는 태그를 선택해보세요./);
    await user.click(placeholder);

    const java = screen.getByTestId("Java");
    const vue = screen.getByTestId("Vue");
    const node = screen.getByTestId("Nodejs");
    const js = screen.getByTestId("JavaScript");

    await user.click(java);
    await user.click(vue);
    await user.click(node);
    await user.click(js);

    expect(handleSelectedSkills).toHaveBeenCalledTimes(4);
  });
  it("selectedSkills의 길이가 0이면 말줄임표와 선택된 스킬 갯수가 렌더링 되지 않는다.", () => {
    selectedSkills = [];

    render(
      <SkillFilter
        handleSelectedSkills={handleSelectedSkills}
        selectedSkills={selectedSkills}
      />,
    );

    const threedots = screen.queryByText("...");
    expect(threedots).not.toBeInTheDocument();

    expect(selectedSkills.length).toBe(0);
    const skillCnt = screen.queryByText("0");
    expect(skillCnt).not.toBeInTheDocument();
  });
  it("selectedSkills의 길이가 3이면 말줄임표와 선택된 스킬 갯수 3이 렌더링 된다.", () => {
    selectedSkills = ["node", "react", "jest"];
    render(
      <SkillFilter
        handleSelectedSkills={handleSelectedSkills}
        selectedSkills={selectedSkills}
      />,
    );

    const threedots = screen.getByText("...");
    expect(threedots).toBeInTheDocument();

    const skillCnt = screen.getByText("3");
    expect(skillCnt).toBeInTheDocument();
  });
  it("selectedSkills의 길이가 4이면 말줄임표와 선택된 스킬 갯수 4가 렌더링 된다.", () => {
    selectedSkills.push("angular");

    render(
      <SkillFilter
        handleSelectedSkills={handleSelectedSkills}
        selectedSkills={selectedSkills}
      />,
    );

    const threedots = screen.getByText("...");
    expect(threedots).toBeInTheDocument();

    expect(selectedSkills.length).toBe(4);
    const skillCnt = screen.getByText("4");
    expect(skillCnt).toBeInTheDocument();
  });
});
