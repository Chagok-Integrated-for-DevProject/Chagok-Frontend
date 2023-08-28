import { useGoogleLogin } from "@react-oauth/google";
import LogoSVG from "components/common/logo";
import { H1 } from "components/signup/index.styles";
import Image from "next/image";
import { palette } from "styles/palette";

import * as S from "./index.styles";

const Social = ({ onNext }: { onNext: () => void }) => {
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse) {
        onNext();
      }
    },
  });

  const kakaoLogin = () => {
    const redirectUri =
      process.env.NODE_ENV === "production"
        ? "https://chagok.site/auth/kakao"
        : "http://localhost:3000/auth/kakao";

    window.Kakao.Auth.authorize({
      redirectUri: `${redirectUri}`,
    });
  };

  const onSelectGoogle = () => {
    googleLogin();
  };

  // TODO: 카카오 로그인
  const onSelectKakao = () => {
    kakaoLogin();
    onNext();
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
          />
        </S.Google>
        <S.Kakao onClick={onSelectKakao}>
          <Image
            width={60}
            height={60}
            src="/social-kakao.png"
            alt="카카오 소셜 로그인"
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
