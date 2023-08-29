import { useProjectDetailQuery } from "lib/hooks/useProjectDetailQuery";
import { useStudyDetailQuery } from "lib/hooks/useStudyDetailQuery";
import { postDetail } from "lib/mocks/data/postDetail";
import { render } from "lib/test-utils";
import { useRouter } from "next/router";

import PostDetail from ".";

jest.mock("lib/hooks/useProjectDetailQuery", () => ({
  useProjectDetailQuery: jest.fn(),
}));
jest.mock("lib/hooks/useStudyDetailQuery", () => ({
  useStudyDetailQuery: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

beforeEach(() => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    query: { purpose: "study", id: "50774" },
    back: () => {},
  }));
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("PostDetatil 기능 테스트", () => {
  it("purpose가 study면 useStudyDetailQuery 호출된다.", () => {
    (useStudyDetailQuery as jest.Mock).mockResolvedValue({ data: postDetail });

    (useRouter as jest.Mock).mockImplementation(() => ({
      query: { purpose: "study", id: "50774" },
      back: () => {},
    }));

    render(<PostDetail />);
    expect(useStudyDetailQuery).toHaveBeenCalled();

    (useRouter as jest.Mock).mockClear();
  });
  it("purpose가 project면 useProjectDetailQuery가 호출된다.", () => {
    (useProjectDetailQuery as jest.Mock).mockResolvedValue({
      data: postDetail,
    });

    (useRouter as jest.Mock).mockImplementation(() => ({
      query: { purpose: "project", id: "50774" },
      back: () => {},
    }));

    render(<PostDetail />);
    expect(useProjectDetailQuery).toHaveBeenCalled();

    (useRouter as jest.Mock).mockClear();
  });
});
