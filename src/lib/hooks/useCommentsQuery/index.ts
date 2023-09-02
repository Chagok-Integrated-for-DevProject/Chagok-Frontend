import { useQuery } from "@tanstack/react-query";
import { getComments } from "lib/apis/comment";

export const useCommentsQuery = (id: number) => {
  const queryKey = ["contests", id, "comments"];

  const { data } = useQuery(queryKey, () => getComments(id), {
    suspense: true,
  });

  return { data };
};
