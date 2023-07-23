import { render, screen } from "@testing-library/react";

function Sample() {
  return <div>Sample</div>;
}

beforeEach(() => {
  jest.fn().mockImplementation(() => {});
});

test("Sample Test", () => {
  render(<Sample />);
  const SampleText = screen.getByText("Sample");

  expect(SampleText).toBeInTheDocument();
});
