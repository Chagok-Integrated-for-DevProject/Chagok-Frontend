import Modal from "components/common/modal";
import {
  useChagokSignIn,
  useChagokSignUp,
  useKakaoAccessToken,
} from "lib/hooks/useAccessToken";
import { useJwtToken } from "lib/hooks/useJwtToken";
import type {
  TKakaoAccessTokenResponse,
  TSignInResponse,
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

const SignupModal: FC<ISignupProps> = ({
  isModalOpen,
  openModal,
  closeModal,
}) => {
  const [step, setStep] = useState<TStep>("가입방식");
  const [clearParams, setClearParams] = useState(false);
  const [nickname, setNickName] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const [oauthToken, setOAuthToken] = useState<{
    platform: "Google" | "Kakao";
    jwt: string;
  }>();

  const { token: accessToken } = useJwtToken();

  const searchParams = useSearchParams();
  const router = useRouter();
  const closeModalClearingParams = () => {
    setClearParams(true);
    setStep("가입방식");
    setOAuthToken(undefined);
    setNickName("");
    setSkills([]);
    closeModal();
  };

  const { mutate: signInMutate } = useChagokSignIn({
    onSuccess: (data?: TSignInResponse) => {
      if (data?.isSignUp && data?.jwtToken) {
        window.localStorage.setItem("jwt", data.jwtToken);
        closeModalClearingParams();
        router.push("/");
      }

      if (data?.isSignUp === false) {
        setStep("이름설정");
      }
    },
    onFailed: () => {},
  });

  const { mutate: signUpMutate } = useChagokSignUp({
    onSuccess: () => {
      setStep("가입완료");
    },
    onFailed: () => {},
  });

  const signUp = () => {
    if (oauthToken) {
      signUpMutate({
        accessToken: oauthToken?.jwt,
        nickName: nickname,
        skills,
        socialType: oauthToken?.platform,
      });
    }
  };

  const { mutate: kakaoMutate } = useKakaoAccessToken({
    onSuccess: (data?: TKakaoAccessTokenResponse) => {
      openModal();
      if (data) {
        setOAuthToken({ platform: "Kakao", jwt: data.access_token });
        signInMutate({ accessToken: data.access_token, socialType: "Kakao" });
      }
    },
  });

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const emptyNickName = () => {
    setNickName("");
  };

  const handleSkills = (skill: string) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((e) => e !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };
  const emptySkills = () => {
    setSkills([]);
  };

  useEffect(() => {
    if (clearParams) {
      router.replace(`${window.location.pathname}`);
      setClearParams(false);
    }
  }, [clearParams, router]);

  useEffect(() => {
    const authCode = searchParams.get("code");

    if (authCode && accessToken === "" && !window.localStorage.getItem("jwt")) {
      kakaoMutate(authCode);
    }
  }, [searchParams, kakaoMutate, accessToken]);

  return (
    <Modal isOpen={isModalOpen} onCloseModal={closeModalClearingParams}>
      <div>
        <Step is={step === "가입방식"}>
          <Social
            signInMutate={signInMutate}
            saveGoogleToken={(token: string) => {
              setOAuthToken({ platform: "Google", jwt: token });
            }}
          />
        </Step>
        <Step is={step === "이름설정"}>
          <Name
            onNext={() => {
              nickname.length > 0 && setStep("기술설정");
            }}
            nickName={nickname}
            handleNickName={handleNickName}
            emptyNickName={emptyNickName}
          />
        </Step>
        <Step is={step === "기술설정"}>
          <Skill
            onNext={signUp}
            nickName={nickname}
            handleSkills={handleSkills}
            emptySkills={emptySkills}
            skills={skills}
          />
        </Step>
        <Step is={step === "가입완료"}>
          <Done onNext={closeModalClearingParams} />
        </Step>
      </div>
    </Modal>
  );
};

export default SignupModal;
