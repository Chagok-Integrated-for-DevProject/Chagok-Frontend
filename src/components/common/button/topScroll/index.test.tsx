import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TopScrollBtn from "src/components/common/button/button/topScroll";

test("버튼을 클릭하면 scroll을 위로 올리는 함수가 호출된다.", async () => {
  const user = userEvent.setup();
  global.scrollTo = jest.fn();

  render(<TopScrollBtn />);

  const scrollBtn = screen.getByRole("button");
  await user.click(scrollBtn);

  expect(global.scrollTo).toBeCalled();
});
