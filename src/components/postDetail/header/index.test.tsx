import { screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { useGetMyInfoQuery } from "lib/hooks/useGetMyInfoQuery";
import { useJwtToken } from "lib/hooks/useJwtToken";
import { useRecommendationQuery } from "lib/hooks/useRecommendationQuery";
import { useScrapMutation } from "lib/hooks/useScrapMutations";
import { postDetail } from "lib/mocks/data/postDetail";
import { mockRecommendations } from "lib/mocks/data/recommendations";
import { mockUserInfo } from "lib/mocks/data/userInfo";
import { render } from "lib/test-utils";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import { palette } from "styles/palette";

import Header from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("lib/hooks/useJwtToken", () => ({
  useJwtToken: jest.fn().mockImplementation(() => ({
    token: "",
    logout: jest.fn(),
  })),
}));

jest.mock("lib/hooks/useGetMyInfoQuery", () => ({
  useGetMyInfoQuery: jest.fn().mockImplementation(() => ({
    data: mockUserInfo,
  })),
}));

jest.mock("lib/hooks/useScrapMutations", () => ({
  useScrapMutation: jest.fn().mockReturnValue({ mutate: jest.fn() }),
}));

jest.mock("lib/hooks/useRecommendationQuery");

jest.mock("react-toastify", () => ({
  toast: {
    warn: jest.fn(),
  },
}));

beforeEach(() => {
  (useGetMyInfoQuery as jest.Mock).mockImplementation(() => ({
    data: mockUserInfo,
  }));

  (useScrapMutation as jest.Mock).mockImplementation(() => ({
    data: mockUserInfo,
  }));

  (useRecommendationQuery as jest.Mock).mockReturnValue(mockRecommendations);
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("Header 기능 테스트", () => {
  it("뒤로 가기 버튼을 누르면 router.back이 호출된다.", async () => {
    const mockRouter = {
      back: jest.fn(),
      query: {
        purpose: "project",
      },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);

    const user = UserEvent.setup();

    render(<Header data={postDetail} id={postDetail.id} />);

    const backBtn = screen.getByAltText("뒤로 가기");
    await user.click(backBtn);

    expect(mockRouter.back).toHaveBeenCalled();
  });
  it("hola, inflearn, okky에 맞는 색이 태그의 배경색이 된다.", () => {
    const mockRouter = {
      back: jest.fn(),
      query: {
        purpose: "project",
      },
    };
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    postDetail.siteType = "HOLA";
    render(<Header data={postDetail} id={postDetail.id} />);

    const holaTag = screen.getByText("HOLA");
    expect(holaTag).toHaveStyle({ backgroundColor: `${palette.hola}` });

    postDetail.siteType = "INFLEARN";
    render(<Header data={postDetail} id={postDetail.id} />);

    const inflearnTag = screen.getByText("INFLEARN");
    expect(inflearnTag).toHaveStyle({ backgroundColor: `${palette.inflearn}` });

    postDetail.siteType = "OKKY";
    render(<Header data={postDetail} id={postDetail.id} />);

    const okkyTag = screen.getByText("OKKY");
    expect(okkyTag).toHaveStyle({
      backgroundColor: `${palette.okky}`,
    });
  });

  it("추천 프로젝트 버튼을 누르면 handleFloatingBox 호출된다.", async () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        purpose: "project",
      },
    });

    const setFloatingBox = jest.fn();

    jest.spyOn(React, "useState").mockReturnValue([false, setFloatingBox]);

    const user = UserEvent.setup();
    render(<Header data={postDetail} id={postDetail.id} />);
    const recommendBtn = screen.getByTestId(/recommend/i);
    await user.click(recommendBtn);
    expect(setFloatingBox).toHaveBeenCalled();

    jest.restoreAllMocks();
  });

  it("로그인 되어 있지 않고 추천 버튼을 누르면 toast.warn이 호출된다.", async () => {
    (useJwtToken as jest.Mock).mockImplementation(() => ({
      token: "",
      logout: () => {},
    }));

    (useRouter as jest.Mock).mockReturnValue({
      query: {
        purpose: "project",
      },
    });

    const user = UserEvent.setup();
    render(<Header data={postDetail} id={postDetail.id} />);
    const recommendBtn = screen.getByTestId(/recommend/i);
    await user.click(recommendBtn);

    const text = screen.getByText(/추천/);
    expect(text).toBeInTheDocument();
    expect(toast.warn).toHaveBeenCalled();
  });

  it("로그인 되어 있고, 추천 버튼을 누르면 추천프로젝트가 Close로 바뀐다. 한번 더 누르면 원상복구", async () => {
    (useJwtToken as jest.Mock).mockImplementation(() => ({
      token: "aaaa",
      logout: () => {},
    }));

    /*(useGetMyInfoQuery as jest.Mock).mockImplementation(() => ({
      data: mockUserInfo,
    }));

    (useScrapMutation as jest.Mock).mockImplementation(() => ({
      data: mockUserInfo,
    }));*/

    (useRouter as jest.Mock).mockReturnValue({
      query: {
        purpose: "project",
      },
    });

    // (useRecommendationQuery as jest.Mock).mockReturnValue(mockRecommendations);

    jest.spyOn(React, "useState").mockReturnValue([true, () => {}]);

    const user = UserEvent.setup();
    render(<Header data={postDetail} id={postDetail.id} />);
    const recommendBtn = screen.getByTestId(/recommend/i);
    await user.click(recommendBtn);

    const text = screen.getByText(/Close/);
    expect(text).toBeInTheDocument();

    await user.click(recommendBtn);
  });
});
