import { AxiosClient } from "./axiosClient";

export const getAccessTokenWithGoogle = async (accessToken: string) => {
  try {
    const response = await AxiosClient.post("/auth", {
      accessToken: accessToken,
      socialType: "Google",
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAccessTokenWithKakao = async (authorizationCode: string) => {
  const isTest = process.env.NODE_ENV === "production" ? false : true;

  try {
    const response = await AxiosClient.post("/auth", {
      authorizationToken: authorizationCode,
      socialType: "Kakao",
      test: isTest,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
