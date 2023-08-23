import type { TPaginationDates } from "lib/types/post";

import { AxiosClient } from "./axiosClient";

export const getStudiesInfo = async (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  id?: number,
): Promise<TPaginationDates> => {
  const studyID = id ? `/${id}` : "";
  try {
    const response = await AxiosClient.get(
      `studies${studyID}?number=${pageNumber}&size=${pageSize}&sort=${sort}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
