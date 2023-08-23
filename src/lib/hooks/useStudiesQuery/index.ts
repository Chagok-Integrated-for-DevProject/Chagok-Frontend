import { useQuery } from "@tanstack/react-query";
import { getStudiesInfo } from "lib/apis/studies";

const useStudiesQuery = (
  pageSize: number,
  pageNumber: number,
  sort: "hotCount" | "id",
  id?: number,
) => {
  const queryKey = ["studies", pageSize, pageNumber, sort];

  if (id) {
    queryKey.push(id);
  }

  const { data } = useQuery(queryKey, () =>
    getStudiesInfo(pageSize, pageNumber, sort, id),
  );

  return { data };
};

export default useStudiesQuery;
