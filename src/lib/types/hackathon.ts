export interface IContest {
  endDate: string;
  host: string;
  imageUrl: string;
  originalUrl: string;
  scrapCount: number;
  startDate: string;
  title: string;
  viewCount: number;
}

export interface IContests {
  content: Array<{
    commentCount: number;
    contestId: number;
    endDate: string;
    host: string;
    imageUrl: string;
    scrapCount: number;
    startDate: string;
    title: string;
  }>;
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
}
