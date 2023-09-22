import axios from "axios";
import type { TSignInResponse, TSignUpResponse } from "lib/types/auth";

import { AxiosClient } from "./axiosClient";

export const getKakaoJWT = async (authCode: string) => {
  const kakaoAuth = axios.create({
    baseURL: "https://kauth.kakao.com/oauth/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  const redirectUrl =
    process.env.NODE_ENV === "production"
      ? "https://chagok.site"
      : "https://localhost:3001";

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

export const postSignIn = async (
  accessToken: string,
  socialType: "Google" | "Kakao",
): Promise<TSignInResponse> => {
  try {
    const response = await AxiosClient.post("/auth/signIn", {
      accessToken,
      socialType,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postSignUp = async (
  accessToken: string,
  nickName: string,
  skills: string[],
  socialType: "Google" | "Kakao",
): Promise<TSignUpResponse> => {
  try {
    const response = await AxiosClient.post("/auth/signUp", {
      accessToken,
      nickName,
      skills,
      socialType,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
