import { useQuery } from "@tanstack/react-query";
import { getProjectDetail } from "lib/apis/projects";

export const useProjectDetailQuery = (id: string) => {
  const { data } = useQuery(
    ["project", "detail", id],
    () => getProjectDetail(id),
    { staleTime: 1000 * 60 * 5, cacheTime: 1000 * 60 * 30 },
  );

  return { data };
};
