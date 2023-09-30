// 스터디 / 프로젝트의 data type

export type TPostPreview = {
  title: string;
  nickName: string;
  scrapCount: number;
  viewCount: number;
  siteType: "HOLA" | "OKKY" | "INFLEARN";
  id: string;
  skills: string[];
  createdTime: string;
  preview: string;
  postType: "PROJECT" | "STUDY";
};

export type TPostDetail = {
  title: string;
  nickName: string;
  content: string;
  sourceUrl: string;
  createdTime: string;
  scrapCount: number;
  viewCount: number;
  siteType: "HOLA" | "OKKY" | "INFLEARN";
  id: string;
  skills: string[];
};

type TSort = {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
};

export type TPaginationData = {
  content: TPostPreview[];
  pageable: {
    sort: TSort;
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: TSort;
  first: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;
};
