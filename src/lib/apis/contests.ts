import type { TContests } from "lib/types/contest";

import { AxiosClient } from "./axiosClient";

export const getContests = async (
  page: number,
  size: number,
  sort:
    | "hotCount"
    | "id"
    | "endDate"
    | "startDate"
    | "scrapCount"
    | "viewCount"
    | "commentCount",
  direction: "desc" | "asc",
): Promise<TContests> => {
  try {
    const response = await AxiosClient(
      `contests?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
