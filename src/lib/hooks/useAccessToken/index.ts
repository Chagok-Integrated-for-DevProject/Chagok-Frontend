import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { getChagokAccessToken, getKakaoJWT } from "lib/apis/auth";
import type {
  TChagokAccessTokenMutation,
  TKakaoAccessTokenResponse,
  TUseChagokAccessTokenParams,
} from "lib/types/auth";

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
      console.log((error as AxiosError).message);
      onFailed && onFailed();
    },
  });

  return { mutate, error };
};

export const useChagokAccessToken = ({
  onSuccess,
  onFailed,
}: TUseChagokAccessTokenParams) => {
  const { mutate, error } = useMutation({
    mutationFn: ({ accessToken, socialType }: TChagokAccessTokenMutation) =>
      getChagokAccessToken(accessToken, socialType),
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      console.log((error as AxiosError).message);
      onFailed && onFailed(error as AxiosError);
    },
  });

  return { mutate, error };
};
