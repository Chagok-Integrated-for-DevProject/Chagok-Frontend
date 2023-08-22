import { useState } from "react";

import Done from "./done";
import type { TStep } from "./index.types";
import Name from "./name";
import Skill from "./skill";
import Social from "./social";
import Step from "./Step";

const Signup = ({ onCloseModal }: { onCloseModal: () => void }) => {
  // TODO: 가입 및 유저의 초기 정보 데이터 수집
  const [step, setStep] = useState<TStep>("가입방식");
  return (
    <div>
      <Step is={step === "가입방식"}>
        <Social onNext={() => setStep("이름설정")} />
      </Step>
      <Step is={step === "이름설정"}>
        <Name onNext={() => setStep("기술설정")} />
      </Step>
      <Step is={step === "기술설정"}>
        <Skill onNext={() => setStep("가입완료")} />
      </Step>
      <Step is={step === "가입완료"}>
        <Done onNext={() => onCloseModal()} />
      </Step>
    </div>
  );
};

export default Signup;
