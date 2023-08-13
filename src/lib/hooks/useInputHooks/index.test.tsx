import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useInputChangeEvent, useInputFocusEvent } from ".";

test("useInputChangeEvent: keyword가 올바르게 업데이트 되는지 테스트", async () => {
  const user = userEvent.setup();

  //TC : TestComponent
  const TC = () => {
    const [keyword, handleKeyword] = useInputChangeEvent();
    return <input type="text" value={keyword} onChange={handleKeyword} />;
  };

  render(<TC />);
  const input = screen.getByRole("textbox");
  await user.click(input);
  await user.keyboard("typing...");

  expect(input).toHaveDisplayValue("typing...");
});

test("useInputFocusEvent: focus와 blur가 올바르게 핸들링 되는지 테스트", () => {
  const TC = () => {
    const [inputFocus, handleFocusEvent, handleBlurEvent] =
      useInputFocusEvent();
    return (
      <div>
        <input onFocus={handleFocusEvent} onBlur={handleBlurEvent} />
        <p>{inputFocus ? "Focused" : "Not Focused"}</p>
      </div>
    );
  };
  render(<TC />);
  const input = screen.getByRole("textbox");
  const statusText = screen.getByText("Not Focused");

  fireEvent.focus(input);
  expect(statusText.textContent).toBe("Focused");

  fireEvent.blur(input);
  expect(statusText.textContent).toBe("Not Focused");
});
