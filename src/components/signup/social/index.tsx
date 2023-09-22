import { useGoogleLogin } from "@react-oauth/google";
import type { UseMutateFunction } from "@tanstack/react-query";
import LogoSVG from "components/common/logo";
import { H1 } from "components/signup/index.styles";
import type { TSignInParams, TSignInResponse } from "lib/types/auth";
import Image from "next/image";
import { type FC } from "react";
import { palette } from "styles/palette";

import * as S from "./index.styles";

interface ISocialProps {
  signInMutate: UseMutateFunction<
    TSignInResponse,
    unknown,
    TSignInParams,
    unknown
  >;
  saveGoogleToken: (token: string) => void;
}

const Social: FC<ISocialProps> = ({ signInMutate, saveGoogleToken }) => {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse) {
        const { access_token } = tokenResponse;
        saveGoogleToken(access_token);
        signInMutate({ accessToken: access_token, socialType: "Google" });
      }
    },
  });

  const kakaoLogin = () => {
    const redirectUri =
      process.env.NODE_ENV === "production"
        ? "https://chagok.site"
        : "https://localhost:3001";

    window.Kakao.Auth.authorize({
      redirectUri: `${redirectUri}`,
    });
  };

  const onSelectGoogle = () => {
    googleLogin();
  };

  const onSelectKakao = () => {
    kakaoLogin();
  };

  return (
    <S.SocialWrapper>
      <S.Title>
        <LogoSVG color={palette.bgMainOrange} />
        <H1>에 로그인 해보세요!</H1>
      </S.Title>
      <S.SocialSelecBox>
        <S.Google onClick={onSelectGoogle}>
          <Image
            width={60}
            height={60}
            src="/social-google.png"
            alt="구글 소셜 로그인"
            priority
          />
        </S.Google>
        <S.Kakao onClick={onSelectKakao}>
          <Image
            width={60}
            height={60}
            src="/social-kakao.png"
            alt="카카오 소셜 로그인"
            priority
          />
        </S.Kakao>
      </S.SocialSelecBox>
      <S.Label>
        <label>Google에 로그인</label>
        <label>Kakao에 로그인</label>
      </S.Label>
    </S.SocialWrapper>
  );
};

export default Social;
