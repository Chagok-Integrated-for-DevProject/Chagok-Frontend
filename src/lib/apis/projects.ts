import type { TPaginationDates } from "lib/types/post";

import { AxiosClient } from "./axiosClient";

export const getProjectsInfo = async (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  id?: number,
  searchKeyword?: string,
): Promise<TPaginationDates> => {
  const idParam = id ? `/${id}` : "";
  const searchKeywordParam = searchKeyword
    ? `&searchTerm=${searchKeyword}`
    : "";
  try {
    const response = await AxiosClient(
      `projects${idParam}?page=${pageNumber}&size=${pageSize}&sort=${sort}${searchKeywordParam}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
