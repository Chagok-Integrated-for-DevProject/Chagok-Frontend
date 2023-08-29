import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { postDetail } from "lib/mocks/data/postDetail";
import { useRouter } from "next/router";
import { palette } from "styles/palette";

import Header from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

afterAll(() => {
  jest.restoreAllMocks();
});

describe("Header 기능 테스트", () => {
  it("뒤로 가기 버튼을 누르면 router.back이 호출된다.", async () => {
    const mockRouter = {
      back: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const user = UserEvent.setup();

    render(<Header data={postDetail} />);

    const backBtn = screen.getByAltText("뒤로 가기");
    await user.click(backBtn);

    expect(mockRouter.back).toHaveBeenCalled();
  });
  it("hola, inflearn, okky에 맞는 색이 태그의 배경색이 된다.", () => {
    const mockRouter = {
      back: jest.fn(),
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    postDetail.siteType = "HOLA";
    render(<Header data={postDetail} />);

    const holaTag = screen.getByText("HOLA");
    expect(holaTag).toHaveStyle({ backgroundColor: `${palette.hola}` });

    postDetail.siteType = "INFLEARN";
    render(<Header data={postDetail} />);

    const inflearnTag = screen.getByText("INFLEARN");
    expect(inflearnTag).toHaveStyle({ backgroundColor: `${palette.inflearn}` });

    postDetail.siteType = "OKKY";
    render(<Header data={postDetail} />);

    const okkyTag = screen.getByText("OKKY");
    expect(okkyTag).toHaveStyle({
      backgroundColor: `${palette.okky}`,
    });
  });
});
