import { useQuery } from "@tanstack/react-query";
import { getStudyList } from "lib/apis/studies";
import { converToSkillId } from "lib/utils/converToSkillId";

export const useStudiesQuery = (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  skillNames: string[],

  searchKeyword?: string,
) => {
  let queryKey = ["studies", pageNumber, pageSize, sort];
  let skillIds: string[] = [];

  if (searchKeyword !== undefined && searchKeyword !== "") {
    queryKey.push(searchKeyword);
  }

  if (skillNames.length) {
    skillIds = converToSkillId(skillNames);
    queryKey = [...queryKey, ...skillIds];
  }

  const { data } = useQuery(queryKey, () =>
    getStudyList(pageNumber, pageSize, sort, skillIds, searchKeyword),
  );

  return { data };
};
