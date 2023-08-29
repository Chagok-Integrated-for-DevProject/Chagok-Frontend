import { useQuery } from "@tanstack/react-query";
import { getStudyDetail } from "lib/apis/studies";

export const useStudyDetailQuery = (id: string) => {
  const { data } = useQuery(["study", "detail", id], () => getStudyDetail(id));

  return { data };
};
