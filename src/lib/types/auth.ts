import type { AxiosError } from "axios";

export type TKakaoAccessTokenResponse = {
  access_token: string;
  expires_in: string;
  refresh_token: string;
  refresh_token_expires_in: string;
  scope: string;
  token_type: string;
};

export type TChagokAccessTokenResponse = {
  isSignUp: boolean;
  jwtToken: null | string;
};

export type TChagokAccessTokenMutation = {
  accessToken: string;
  socialType: "Google" | "Kakao";
};

export type TUseChagokAccessTokenParams = {
  onSuccess?: (data?: TChagokAccessTokenResponse) => void;
  onFailed?: (error?: AxiosError) => void;
};
