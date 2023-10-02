import type { TNickNameCheck, TUserInfoReturnType } from "lib/types/userInfo";

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

export const getMyInfo = async (
  jwtToken: string,
): Promise<TUserInfoReturnType> => {
  try {
    const response = await AxiosClient.get("/member/info", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNickname = async (
  nickname: string,
  jwtToken: string,
): Promise<{
  body: object;
  statusCode: string;
  statusCodeValue: number;
}> => {
  try {
    const response = await AxiosClient.post(
      `/member/update/nickname?nickname=${nickname}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfileImg = async (imageFile: File, jwtToken: string) => {
  const formData = new FormData();
  formData.append("image", imageFile);
  try {
    const response = await AxiosClient.post(
      "member/update/profile-image",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateSkills = async (skills: string[], jwtToken: string) => {
  try {
    const response = await AxiosClient.post("member/update/skills", skills, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
