import { useQuery } from "@tanstack/react-query";
import { getProjectDetail } from "lib/apis/projects";

export const useProjectDetailQuery = (id: string) => {
  const { data } = useQuery(["project", "detail", id], () =>
    getProjectDetail(id),
  );

  return { data };
};
