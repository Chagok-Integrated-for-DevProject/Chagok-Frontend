import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SkillButton from "components/projects/search/SkillButton";

const mockHandleSelectedSkills = jest.fn();

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
