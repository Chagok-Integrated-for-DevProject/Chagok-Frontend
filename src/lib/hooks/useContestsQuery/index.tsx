import { useQuery } from "@tanstack/react-query";
import { getContests } from "lib/apis/contests";

export const useContestsQuery = (
  page: number,
  size: number,
  sort:
    | "hotCount"
    | "id"
    | "endDate"
    | "startDate"
    | "scrapCount"
    | "viewCount"
    | "commentCount",
  direction: "desc" | "asc",
) => {
  const queryKey = ["contests", page, size, sort, direction];

  const { data } = useQuery(
    queryKey,
    () => getContests(page, size, sort, direction),
    { suspense: true },
  );

  return { data };
};
