export type TContest = {
  commentCount: number;
  id: number;
  endDate: string;
  host: string;
  imageUrl: string;
  scrapCount: number;
  startDate: string;
  title: string;
};

export type TContests = {
  content: TContest[];
  empty: true;
  first: true;
  last: true;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalElements: number;
  totalPages: number;
};

export type TContestDetail = {
  content: string;
  endDate: string;
  host: string;
  id: number;
  imageUrl: string;
  originalUrl: string;
  scrapCount: number;
  startDate: string;
  title: string;
  viewCount: number;
};

export type TComment = {
  commentId: number;
  content: string;
  createdDate: string;
  deleted: boolean;
  kakaoRef: string;
  linkedComment: TComment[];
  memberNickName: string;
  parentId: number;
};
