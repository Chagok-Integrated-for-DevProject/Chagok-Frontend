import { screen } from "@testing-library/react";
import { useGetMyInfoQuery } from "lib/hooks/useGetMyInfoQuery";
import { useRecommendationQuery } from "lib/hooks/useRecommendationQuery";
import { render } from "lib/test-utils";

import FloatingBox from ".";

const recommends = [
  { id: "1", title: "sample1" },
  { id: "2", title: "sample2" },
  { id: "3", title: "sample3" },
];

jest.mock("lib/hooks/useRecommendationQuery", () => ({
  useRecommendationQuery: jest.fn(),
}));

jest.mock("lib/hooks/useGetMyInfoQuery", () => ({
  useGetMyInfoQuery: jest.fn(),
}));

test("Floatin Box 렌더링 테스트", () => {
  (useRecommendationQuery as jest.Mock).mockImplementation(() => ({
    data: recommends,
  }));

  (useGetMyInfoQuery as jest.Mock).mockImplementation(() => ({
    data: { nickName: "sampleNickName" },
  }));

  render(<FloatingBox mobileVisible={false} jwt="aaa" />);
  const nickName = screen.getByText(/samplenickname/i);
  expect(nickName).toBeInTheDocument();

  const recommendation = screen.getAllByTestId("recommends");
  expect(recommendation).toHaveLength(3);
});
