import { render, screen } from "@testing-library/react";
import { postDetail } from "lib/mocks/data/postDetail";

import Body from ".";

describe("Body 렌더링 테스트", () => {
  it("skills에 전달된 배열의 길이만큼 스킬이미지가 렌더링된다.", () => {
    render(<Body skills={postDetail.skills} content={postDetail.content} />);

    const skill = screen.getAllByTestId(/skill/i);
    expect(skill).toHaveLength(8);
  });
  it("skills에 전달된 배열의 요소가 적절하지 않은 것은 렌더링에서 제외된다.", () => {
    render(
      <Body
        skills={["js", "ts", "react", "ReAct"]}
        content={postDetail.content}
      />,
    );

    const skill = screen.getAllByTestId(/skill/i);
    expect(skill).toHaveLength(3);
  });
});
