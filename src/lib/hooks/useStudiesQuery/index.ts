import { useQuery } from "@tanstack/react-query";
import { getStudiesInfo } from "lib/apis/studies";

const useStudiesQuery = (
  pageNumber: number,
  pageSize: number,
  sort: "hotCount" | "id",
  id?: number,
  searchKeyword?: string,
) => {
  const queryKey = ["studies", pageNumber, pageSize, sort];

  if (id) {
    queryKey.push(id);
  }

  if (searchKeyword !== undefined && searchKeyword !== "") {
    queryKey.push(searchKeyword);
  }

  const { data } = useQuery(queryKey, () =>
    getStudiesInfo(pageNumber, pageSize, sort, id, searchKeyword),
  );

  return { data };
};

export default useStudiesQuery;
