import Modal from "components/common/modal";
import {
  useChagokAccessToken,
  useKakaoAccessToken,
} from "lib/hooks/useAccessToken";
import type {
  TChagokAccessTokenResponse,
  TKakaoAccessTokenResponse,
} from "lib/types/auth";
import { useRouter, useSearchParams } from "next/navigation";
import type { FC } from "react";
import { useEffect, useState } from "react";

import Done from "./done";
import type { TStep } from "./index.types";
import Name from "./name";
import Skill from "./skill";
import Social from "./social";
import Step from "./Step";

interface ISignupProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

/**
 * @DONE
 * 1. 구글, 카카오 회원인지 확인
 * 2. 구글, 카카오 회원이면 로그인
 *
 * @TODO
 * 회원이 아닌 경우
 * 1. 닉네임 입력
 * 2. 기술스택 추가
 * 3. 회원가입 요청
 */
const SignupModal: FC<ISignupProps> = ({
  isModalOpen,
  openModal,
  closeModal,
}) => {
  const [step, setStep] = useState<TStep>("가입방식");
  const [clearParams, setClearParams] = useState(false);
  // INFO: oAuthToken => 회원가입 시에 사용
  const [, setOAuthToken] = useState<{
    platform: "Google" | "Kakao";
    jwt: string;
  }>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const closeModalClearingParams = () => {
    setClearParams(true);
    setStep("가입방식");
    closeModal();
  };

  const handleChagokMutateSuccess = (data?: TChagokAccessTokenResponse) => {
    if (data?.isSignUp && data?.jwtToken) {
      window.localStorage.setItem("jwt", data.jwtToken);
      closeModalClearingParams();
    }

    if (data?.isSignUp === false) {
      setStep("이름설정");
    }
  };

  const { mutate: chagokMutateWithKakao } = useChagokAccessToken({
    onSuccess: (data?: TChagokAccessTokenResponse) =>
      handleChagokMutateSuccess(data),
  });

  const { mutate: chagokMutateWithGoogle } = useChagokAccessToken({
    onSuccess: (data?: TChagokAccessTokenResponse) => {
      handleChagokMutateSuccess(data);
    },
  });

  const { mutate: kakaoMutate } = useKakaoAccessToken({
    onSuccess: (data?: TKakaoAccessTokenResponse) => {
      openModal();
      if (data) {
        setOAuthToken({ platform: "Kakao", jwt: data.access_token });
        chagokMutateWithKakao({
          accessToken: data.access_token,
          socialType: "Kakao",
        });
      }
    },
  });

  useEffect(() => {
    if (clearParams) {
      router.replace("/");
      setClearParams(false);
    }
  }, [clearParams, router]);

  useEffect(() => {
    const authCode = searchParams.get("code");
    if (authCode) {
      kakaoMutate(authCode);
    }
  }, [searchParams, kakaoMutate]);

  return (
    <Modal isOpen={isModalOpen} onCloseModal={closeModalClearingParams}>
      <div>
        <Step is={step === "가입방식"}>
          <Social
            chagokMutateWithGoogle={chagokMutateWithGoogle}
            saveGoogleToken={(token: string) => {
              setOAuthToken({ platform: "Google", jwt: token });
            }}
          />
        </Step>
        <Step is={step === "이름설정"}>
          <Name onNext={() => setStep("기술설정")} />
        </Step>
        <Step is={step === "기술설정"}>
          <Skill onNext={() => setStep("가입완료")} />
        </Step>
        <Step is={step === "가입완료"}>
          <Done onNext={closeModalClearingParams} />
        </Step>
      </div>
    </Modal>
  );
};

export default SignupModal;
