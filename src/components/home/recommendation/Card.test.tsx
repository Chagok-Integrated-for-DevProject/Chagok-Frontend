import { matchers } from "@emotion/jest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RecommendationCard from "components/home/recommendation/Card";

expect.extend(matchers);

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn().mockImplementation(() => ({
    get: jest.fn().mockReturnValue("study"),
  })),
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("Recommendation Card Rendering Test", () => {
  it("mouseOverEvent 발생 시, CardLink의 Style이 변한다.", async () => {
    const user = userEvent.setup();

    render(<RecommendationCard title="test title" id="test" />);
    const cardLink = screen.getByRole("link", {
      name: /test title/i,
    });
    await user.hover(cardLink);

    expect(cardLink).toHaveStyle({ backgroundColor: "#ff6b00" });

    await user.unhover(cardLink);
    expect(cardLink).toHaveStyleRule("background-color", "#FFF");
  });

  it("스크랩 버튼을 누르면 스크랩 요청 성공시, 스크랩 색이 변한다", () => {});
  it("스크랩 버튼을 누르면 스크랩 요청 실패시, 스크랩 색이 유지된다", () => {});
});
