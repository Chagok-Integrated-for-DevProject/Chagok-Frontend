import { useQuery } from "@tanstack/react-query";
import { getRecommendation } from "lib/apis/recommendation";

export const useRecommendationQuery = () => {
  const { data } = useQuery({
    queryKey: ["recommendation"],
    queryFn: () => getRecommendation(),
    retry: 1,
  });

  return { data };
};
