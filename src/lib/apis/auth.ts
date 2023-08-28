import axios from "axios";

import { AxiosClient } from "./axiosClient";

export const getChagokJWTWithGoogle = async (accessToken: string) => {
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

export const getChagokJWTWithKakao = async (authorizationCode: string) => {
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

export const getKakaoJWT = async (authCode: string) => {
  const kakaoAuth = axios.create({
    baseURL: "https://kauth.kakao.com/oauth/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  const redirectUrl =
    process.env.NODE_ENV === "production"
      ? "https://chagok.site/auth/kakao"
      : "http://localhost:3000/auth/kakao";

  console.log(
    redirectUrl,
    process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
    authCode,
  );
  try {
    const response = kakaoAuth.post("", {
      grant_type: "authorization_code",
      client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY as string,
      redirect_uri: redirectUrl,
      code: authCode,
    });

    return (await response).data;
  } catch (error) {
    throw error;
  }
};
