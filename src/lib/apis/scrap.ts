import type { TCategory } from "lib/types/scrap";

import { AxiosClient } from "./axiosClient";

export const postScrap = async (
  category: TCategory,
  contentId: string,
  accessToken: string,
) => {
  try {
    const response = await AxiosClient.post(
      "/member/update/scrap",
      {
        category,
        id: contentId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteScrap = async (
  category: TCategory,
  contentId: string,
  accessToken: string,
) => {
  try {
    const response = await AxiosClient.delete("/member/update/scrap", {
      data: {
        category,
        id: contentId,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
