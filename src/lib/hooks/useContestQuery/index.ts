import { useQuery } from "@tanstack/react-query";
import { getContest } from "lib/apis/contests";

export const useContestQuery = (id: number) => {
  const queryKey = ["contests", id];

  const { data } = useQuery(queryKey, () => getContest(id), {
    suspense: true,
  });

  return { data };
};
