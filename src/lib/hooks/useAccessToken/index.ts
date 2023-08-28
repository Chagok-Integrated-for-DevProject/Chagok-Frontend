import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import {
  getAccessTokenWithGoogle,
  getAccessTokenWithKakao,
} from "lib/apis/auth";

export const useAccessTokenWithGoogle = (onNext: () => void) => {
  const { mutate, error } = useMutation({
    mutationFn: (accessToken: string) => getAccessTokenWithGoogle(accessToken),
    onSuccess: (data) => {
      window.localStorage.setItem("jwt", data.jwtToken);

      if (data.signUp) {
        onNext();
      }

      if (!data.signUp) {
        window.location.reload();
      }
    },
    onError: (error) => {
      console.log((error as AxiosError).message);
      // TODO: 로그인 실패 시 로직 처리
    },
  });

  return { mutate, error };
};

export const useAccessTokenWithKakao = () => {
  const { mutate, error } = useMutation({
    mutationFn: (authorizationCode: string) =>
      getAccessTokenWithKakao(authorizationCode),
    onSuccess: (data) => {
      window.localStorage.setItem("jwt", data.jwtToken);
      window.localStorage.setItem("signUpFirst", data.signUp);
    },
    onError: (error) => {
      console.log((error as AxiosError).message);
      // TODO: 로그인 실패 시 로직 처리
    },
  });

  return { mutate, error };
};
