import { useQuery } from "@tanstack/react-query";
import { getStudiesInfo } from "lib/apis/studies";
import { converToSkillId } from "lib/utils/converToSkillId";

const useStudiesQuery = (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  skillNames: string[],
  id?: number,
  searchKeyword?: string,
) => {
  let queryKey = ["studies", pageNumber, pageSize, sort];
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
    getStudiesInfo(pageNumber, pageSize, sort, skillIds, id, searchKeyword),
  );

  return { data };
};

export default useStudiesQuery;
