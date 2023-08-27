import { useQuery } from "@tanstack/react-query";
import { getProjectsInfo } from "lib/apis/projects";
import { converToSkillId } from "lib/utils/converToSkillId";

export const useProjectsQuery = (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  skillNames: string[],
  id?: number,
  searchKeyword?: string,
) => {
  let queryKey = ["projects", pageNumber, pageSize, sort];
  let skillIds: string[] = [];

  if (id) {
    queryKey.push(id);
  }

  if (searchKeyword !== undefined && searchKeyword !== "") {
    queryKey.push(searchKeyword);
  }

  if (skillNames.length) {
    skillIds = converToSkillId(skillNames);
    queryKey = [...queryKey, ...skillIds];
  }

  const { data } = useQuery(queryKey, () =>
    getProjectsInfo(pageNumber, pageSize, sort, skillIds, id, searchKeyword),
  );

  return { data };
};
