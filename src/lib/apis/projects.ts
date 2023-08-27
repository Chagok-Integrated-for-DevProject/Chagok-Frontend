import type { TPaginationData } from "lib/types/post";
import { converToSkillIdParams } from "lib/utils/converToSkillIdParams";

import { AxiosClient } from "./axiosClient";

export const getProjectsInfo = async (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  skillIds: string[],
  id?: number,
  searchKeyword?: string,
): Promise<TPaginationData> => {
  const idParam = id ? `/${id}` : "";
  const searchKeywordParam = searchKeyword
    ? `&searchTerm=${searchKeyword}`
    : "";
  let skillIdParams = "";

  if (skillIds.length) {
    skillIdParams += converToSkillIdParams(skillIds);
  }
  try {
    const response = await AxiosClient(
      `projects${idParam}?page=${pageNumber}&size=${pageSize}&sort=${sort}${searchKeywordParam}${skillIdParams}`,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
