import type { TPaginationData, TPostDetail } from "lib/types/post";
import { converToSkillIdParams } from "lib/utils/converToSkillIdParams";

import { AxiosClient } from "./axiosClient";

export const getStudyList = async (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  skillIds: string[],
  searchKeyword?: string,
): Promise<TPaginationData> => {
  const searchKeywordParam = searchKeyword
    ? `&searchTerm=${searchKeyword}`
    : "";

  let skillIdParams = "";

  if (skillIds.length) {
    skillIdParams += converToSkillIdParams(skillIds);
  }

  try {
    const response = await AxiosClient.get(
      `studies?page=${pageNumber}&size=${pageSize}&sort=${sort}${searchKeywordParam}${skillIdParams}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStudyDetail = async (
  id: string,
): Promise<TPostDetail | null> => {
  try {
    const response = await AxiosClient.get(`/studies/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
