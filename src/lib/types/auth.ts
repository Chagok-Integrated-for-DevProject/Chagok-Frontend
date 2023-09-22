export type TKakaoAccessTokenResponse = {
  access_token: string;
  expires_in: string;
  refresh_token: string;
  refresh_token_expires_in: string;
  scope: string;
  token_type: string;
};

export type TSignInParams = {
  socialType: "Google" | "Kakao";
  accessToken: string;
};

export type TSignInResponse = {
  isSignUp: boolean;
  jwtToken?: string | null;
  signUp: boolean;
};

export type TSignUpParams = {
  accessToken: string;
  nickName: string;
  skills: string[];
  socialType: "Google" | "Kakao";
};

export type TSignUpResponse = {
  isSignUp: boolean;
  jwtToken: string;
  signUp: boolean;
};
