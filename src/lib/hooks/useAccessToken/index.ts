import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getKakaoJWT, postSignIn, postSignUp } from "lib/apis/auth";
import type {
  TKakaoAccessTokenResponse,
  TSignInParams,
  TSignInResponse,
  TSignUpParams,
  TSignUpResponse,
} from "lib/types/auth";
import { toast } from "react-toastify";

type TUseKakaoAccessTokenParams = {
  onSuccess?: (data?: TKakaoAccessTokenResponse) => void;
  onFailed?: () => void;
};

export const useKakaoAccessToken = ({
  onSuccess,
  onFailed,
}: TUseKakaoAccessTokenParams) => {
  const { mutate, error } = useMutation({
    mutationFn: (authCode: string) => getKakaoJWT(authCode),
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      toast.error((error as AxiosError).message);
      onFailed && onFailed();
    },
  });

  return { mutate, error };
};

type TUseChagokSignInParams = {
  onSuccess?: (data?: TSignInResponse) => void;
  onFailed?: () => void;
};

export const useChagokSignIn = ({
  onSuccess,
  onFailed,
}: TUseChagokSignInParams) => {
  const { mutate, error } = useMutation({
    mutationFn: ({ accessToken, socialType }: TSignInParams) =>
      postSignIn(accessToken, socialType),
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      toast.error((error as AxiosError).message);
      onFailed && onFailed();
    },
  });
  return { mutate, error };
};

type TUseChagokSignUpParams = {
  onSuccess?: (data?: TSignUpResponse) => void;
  onFailed?: () => void;
};

export const useChagokSignUp = ({
  onSuccess,
  onFailed,
}: TUseChagokSignUpParams) => {
  const { mutate, error } = useMutation({
    mutationFn: ({
      accessToken,
      nickName,
      skills,
      socialType,
    }: TSignUpParams) => postSignUp(accessToken, nickName, skills, socialType),
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      toast.error((error as AxiosError).message);
      onFailed && onFailed();
    },
  });

  return { mutate, error };
};
