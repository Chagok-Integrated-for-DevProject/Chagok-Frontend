import { useQuery } from "@tanstack/react-query";
import { getProjectList } from "lib/apis/projects";
import { converToSkillId } from "lib/utils/converToSkillId";

export const useProjectsQuery = (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "createdTime",
  skillNames: string[],
  searchKeyword?: string,
) => {
  let queryKey = ["projects", pageNumber, pageSize, sort];
  let skillIds: string[] = [];

  if (searchKeyword !== undefined && searchKeyword !== "") {
    queryKey.push(searchKeyword);
  }

  if (skillNames.length) {
    skillIds = converToSkillId(skillNames);
    queryKey = [...queryKey, ...skillIds];
  }

  const { data } = useQuery(queryKey, () =>
    getProjectList(pageNumber, pageSize, sort, skillIds, searchKeyword),
  );

  return { data };
};
