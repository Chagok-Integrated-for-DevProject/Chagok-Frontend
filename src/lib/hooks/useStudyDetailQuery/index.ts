import { useQuery } from "@tanstack/react-query";
import { getStudyDetail } from "lib/apis/studies";

export const useStudyDetailQuery = (id: string) => {
  const { data } = useQuery(["study", "detail", id], () => getStudyDetail(id), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });

  return { data };
};
