import { useQuery } from "@tanstack/react-query";
import { getRecommendation } from "lib/apis/recommendation";

export const useRecommendationQuery = (jwtToken: string) => {
  const { data } = useQuery({
    queryKey: ["recommendation"],
    queryFn: () => getRecommendation(jwtToken),
    retry: 1,
  });

  return { data };
};
