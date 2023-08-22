import { Button, Footer, H1 } from "components/signup/index.styles";
import { useState } from "react";

import * as S from "./index.styles";

const Name = ({ onNext }: { onNext: () => void }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const onClickDuplicationCheck = () => {
    if (!name) setError(true);
    // 중복 검사 api call
  };
  return (
    <S.NameWrapper isError={error}>
      <H1>
        <S.Strong>차곡</S.Strong>에서 쓰일 닉네임을 설정해주세요!
      </H1>
      <S.Main>
        <S.NameInputBox>
          <S.Input
            type="text"
            alt="닉네임 설정"
            onChange={(e) => setName(e.target.value)}
          />
          <S.DuplicationCheck onClick={onClickDuplicationCheck}>
            중복 검사
          </S.DuplicationCheck>
        </S.NameInputBox>
      </S.Main>
      <S.Notification>
        {error ? "중복된 닉네임이에요" : "닉네임 제한 사항"}
      </S.Notification>
      <Footer>
        <Button onClick={() => setName("")}>초기화</Button>
        <Button onClick={onNext}>설정완료</Button>
      </Footer>
    </S.NameWrapper>
  );
};

export default Name;
