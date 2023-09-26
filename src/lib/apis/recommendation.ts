import type { TRecommendation } from "lib/types/recommendation";

import { AxiosClient } from "./axiosClient";

export const getRecommendation = async (
  jwtToken: string,
): Promise<TRecommendation[]> => {
  try {
    const response = await AxiosClient.get("/projects/recommend", {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });

    return response.data.slice(0, 10);
  } catch (error) {
    throw error;
  }
};
