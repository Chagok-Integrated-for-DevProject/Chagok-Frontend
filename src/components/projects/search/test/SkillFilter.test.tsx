import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SkillFilter from "components/projects/search/SkillFilter";

const handleSelectedSkills = jest.fn().mockImplementation((skill: string) => {
  if (selectedSkills.includes(skill)) {
    selectedSkills.filter((e) => e !== skill);
    return;
  }
  selectedSkills.push(skill);
});
const selectedSkills: string[] = [];

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
  it("selectedSkills의 길이가 3이상이면 말줄임표와 선택된 스킬 갯수가 렌더링 된다.", () => {
    render(
      <SkillFilter
        handleSelectedSkills={handleSelectedSkills}
        selectedSkills={selectedSkills}
      />,
    );

    const threedots = screen.getByText("...");
    expect(threedots).toBeInTheDocument();

    const skillCnt = screen.getByText("4");
    expect(skillCnt).toBeInTheDocument();
  });
});
