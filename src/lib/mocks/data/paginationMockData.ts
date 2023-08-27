import type { TPaginationData } from "lib/types/post";

export const paginationMockData: TPaginationData = {
  content: [
    {
      title: "[마감] Java 코딩 테스트 스터디 모집",
      siteType: "OKKY",
      postType: "STUDY",
      viewCount: 0,
      scrapCount: 3,
      preview:
        '"\\n<p>Java 코딩 테스트 합격을 위한 알고리즘 풀이 스터디원을 모집합니다. <br>\\n 관심 있으신 분들은 오픈 카카오톡으로 연락 부탁드립니다. <br>\\n 감사합니다.<br></p>\\n<ul>\\n <li>\\n <p>총 4명 (현 2명)</p></li>\\n <li>\\n <p>주 1회 온라인 미팅</p></li>\\n <li>\\n <p>기간: 2~3달 예정</p></li>\\n <li>\\n <p>문제: leetcode medium 이상</p></li>\\n <li>\\n <p>연락: <a href="https://open.kakao.com/o/s9iiyUuf" rel="nofollow">https://open.kakao.com/o/s9iiyUuf</a></p></li>\\n</ul>"',
      createdTime: "2023-07-12T14:01:53",
      nickName: "minnim",
      id: "50738",
      skills: ["java", "react", "js"],
    },
    {
      title: "부천, 역곡, 여의도 자바 스터디 있을까요?",
      siteType: "OKKY",
      postType: "STUDY",
      viewCount: 0,
      scrapCount: 3,
      preview:
        '"\\n<p>자바 스터디를 찾고있습니다.</p>\\n<p></p>\\n<p>부천, 역곡, 여의도 자바 스터디 있을까요?</p>"',
      createdTime: "2023-07-18T11:42:54",
      nickName: "Aaron999666",
      id: "50718",
      skills: ["java", "react", "ts"],
    },
  ],
  pageable: {
    sort: {
      sorted: true,
      unsorted: false,
      empty: false,
    },
    pageNumber: 0,
    pageSize: 12,
    offset: 0,
    paged: true,
    unpaged: false,
  },
  last: false,
  totalPages: 16,
  totalElements: 182,
  first: true,
  number: 0,
  sort: {
    sorted: true,
    unsorted: false,
    empty: false,
  },
  numberOfElements: 12,
  size: 12,
  empty: false,
};
