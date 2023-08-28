import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import {
  getChagokJWTWithGoogle,
  getChagokJWTWithKakao,
  getKakaoJWT,
} from "lib/apis/auth";

export const useKakaoAccessToken = () => {
  const { mutate, error } = useMutation({
    mutationFn: (authCode: string) => getKakaoJWT(authCode),
    onSuccess: (data) => {
      console.log(data);
      // TODO: 성공 시 로직 처리
    },
    onError: (error) => {
      console.log((error as AxiosError).message);
      // TODO: 실패 시 로직 처리
    },
  });

  return { mutate, error };
};

export const useChagokAccessTokenWithGoogle = (onNext: () => void) => {
  const { mutate, error } = useMutation({
    mutationFn: (accessToken: string) => getChagokJWTWithGoogle(accessToken),
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

export const useChagokAccessTokenWithKakao = () => {
  const { mutate, error } = useMutation({
    mutationFn: (authorizationCode: string) =>
      getChagokJWTWithKakao(authorizationCode),
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
