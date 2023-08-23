import { useQuery } from "@tanstack/react-query";
import { getProjectsInfo } from "lib/apis/projects";

const useProjectsQuery = (
  pageSize: number,
  pageNumber: number,
  sort: "hotCount" | "id",
  id?: number,
) => {
  const queryKey = ["projects", pageSize, pageNumber, sort];

  if (id) {
    queryKey.push(id);
  }

  const { data } = useQuery(queryKey, () =>
    getProjectsInfo(pageSize, pageNumber, sort, id),
  );

  return { data };
};

export default useProjectsQuery;
