import { matchers } from "@emotion/jest";
import { render, screen } from "@testing-library/react";
import Original from "components/hackathons/detail/original/index";

expect.extend(matchers);

describe("<Orignial />", () => {
  it("컴포넌트 렌더링 테스트", async () => {
    render(<Original />);

    const summaryTag = screen.getByTestId("hackathon-summary");
    const summaryLabel = screen.getByTestId("summary-label");

    expect(summaryTag).toBeInTheDocument();
    expect(summaryLabel).toBeInTheDocument();
  });

  it("동작 테스트", () => {});
});
