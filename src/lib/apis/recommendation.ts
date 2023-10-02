import type { TRecommendation } from "lib/types/recommendation";

import { AxiosClient } from "./axiosClient";

export const getRecommendation = async (): Promise<TRecommendation[]> => {
  try {
    const response = await AxiosClient.get("/projects/recommend", {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
      },
    });

    return response.data.slice(0, 10);
  } catch (error) {
    throw error;
  }
};
