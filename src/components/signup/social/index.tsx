import LogoSVG from "components/common/logo";
import { H1 } from "components/signup/index.styles";
import Image from "next/image";
import { palette } from "styles/palette";

import * as S from "./index.styles";

const Social = ({ onNext }: { onNext: () => void }) => {
  // TODO: 소셜 로그인 연결
  const onSelectGoogle = () => {
    onNext();
  };
  const onSelectKakao = () => {
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
