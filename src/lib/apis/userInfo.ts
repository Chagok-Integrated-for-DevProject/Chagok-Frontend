import type { TNickNameCheck } from "lib/types/userInfo";

import { AxiosClient } from "./axiosClient";

export const getNickNameCheck = async (
  nickname: string,
): Promise<TNickNameCheck> => {
  try {
    const response = await AxiosClient.get(
      `/member/check/nickname?nickname=${nickname}`,
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
