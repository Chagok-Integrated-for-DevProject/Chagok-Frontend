import { isAxiosError } from "axios";
import { Button, Footer, H1 } from "components/signup/index.styles";
import { useCheckNickNameMutation } from "lib/hooks/useCheckNickNameMutation";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import * as S from "./index.styles";

interface INameProps {
  onNext: () => void;
  nickName: string;
  handleNickName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emptyNickName: () => void;
}

const Name: FC<INameProps> = ({
  onNext,
  nickName,
  handleNickName,
  emptyNickName,
}) => {
  const isProperNickName = new RegExp(/^[a-zA-Z0-9가-힣]{2,20}$/).test(
    nickName,
  );

  const [isCheckNickName, setCheckNickName] = useState({
    error: false,
    checked: false,
  });

  const { mutate } = useCheckNickNameMutation(
    () => {
      setCheckNickName({ ...isCheckNickName, error: false, checked: true });
      toast.success("사용가능한 닉네임입니다.");
    },
    (error: unknown) => {
      if (isAxiosError(error) && error.status === 400) {
        setCheckNickName({ ...isCheckNickName, error: true, checked: false });
        toast.error("중복된 닉네임입니다.");
      }

      if (isAxiosError(error) && error.status !== 400) {
        toast.error(`${error.status}: ${error.message}`);
      }
    },
  );
  const onClickDuplicationCheck = () => {
    mutate(nickName);
  };

  const onClickNicikNameResetButton = () => {
    setCheckNickName({ ...isCheckNickName, error: false, checked: false });
    emptyNickName();
  };

  useEffect(() => {
    if (!isProperNickName) {
      setCheckNickName({ ...isCheckNickName, error: false, checked: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProperNickName]);

  return (
    <S.NameWrapper isError={isCheckNickName.error}>
      <H1>
        <S.Strong>차곡</S.Strong>에서 쓰일 닉네임을 설정해주세요!
      </H1>
      <S.Main>
        <S.NameInputBox>
          <S.Input
            type="text"
            alt="닉네임 설정"
            onChange={handleNickName}
            value={nickName}
          />
          <S.DuplicationCheck
            onClick={onClickDuplicationCheck}
            disabled={!isProperNickName}
          >
            중복 검사
          </S.DuplicationCheck>
        </S.NameInputBox>
      </S.Main>
      <S.Notification>2 ~ 20글자의 닉네임을 작성해주세요</S.Notification>
      <Footer>
        <Button onClick={onClickNicikNameResetButton}>초기화</Button>
        <Button
          onClick={onNext}
          disabled={
            !isProperNickName ||
            !isCheckNickName.checked ||
            isCheckNickName.error
          }
        >
          설정완료
        </Button>
      </Footer>
    </S.NameWrapper>
  );
};

export default Name;
