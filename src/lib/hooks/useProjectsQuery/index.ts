import { useQuery } from "@tanstack/react-query";
import { getProjectsInfo } from "lib/apis/projects";

const useProjectsQuery = (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  id?: number,
  searchKeyword?: string,
) => {
  const queryKey = ["projects", pageNumber, pageSize, sort];

  if (id) {
    queryKey.push(id);
  }

  if (searchKeyword !== undefined && searchKeyword !== "") {
    queryKey.push(searchKeyword);
  }

  const { data } = useQuery(queryKey, () =>
    getProjectsInfo(pageNumber, pageSize, sort, id, searchKeyword),
  );

  return { data };
};

export default useProjectsQuery;
