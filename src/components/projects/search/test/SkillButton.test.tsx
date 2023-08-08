import { matchers } from "@emotion/jest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SkillButton from "components/projects/search/SkillButton";

const mockHandleSelectedSkills = jest.fn();
expect.extend(matchers);

test("skillName에 전달 된 값이 렌더링 된다.", () => {
  render(
    <SkillButton
      isChecked={false}
      skillName="React"
      handleSelectedSkills={mockHandleSelectedSkills}
    />,
  );

  const react = screen.getByText("React");

  expect(react).toBeInTheDocument();
});
test("SkillButton의 label을 클릭하면 handleSelectedSkills로 전달된 함수가 호출된다.", async () => {
  const user = userEvent.setup();

  render(
    <SkillButton
      isChecked={false}
      skillName="React"
      handleSelectedSkills={mockHandleSelectedSkills}
    />,
  );

  const label = screen.getByTestId("React");

  await user.click(label);
  expect(mockHandleSelectedSkills).toHaveBeenCalled();
});
test("SkillButton이 checked이면 Label의 배경색이 mainColor가 되고, box-shadow가 생긴다.", () => {
  render(
    <SkillButton
      isChecked={true}
      skillName="React"
      handleSelectedSkills={mockHandleSelectedSkills}
    />,
  );

  const label = screen.getByTestId("React");
  expect(label).toHaveStyleRule("background-color", "#FF6B00");
  expect(label).toHaveStyleRule("box-shadow", "0px 4px 4px -1.5px #FF6B00");
});
test("SkillButton이 not checked이면 배경색이 transparent가 되고, box-shadow가 없다.", () => {
  render(
    <SkillButton
      isChecked={false}
      skillName="React"
      handleSelectedSkills={mockHandleSelectedSkills}
    />,
  );

  const label = screen.getByTestId("React");
  expect(label).toHaveStyleRule("background-color", "transparent");
});
