import LogoSVG from "components/common/logo";
import { Button, Footer, H1 } from "components/signup/index.styles";
import { palette } from "styles/palette";

import * as S from "./index.styles";

const Done = ({ onNext }: { onNext: () => void }) => {
  return (
    <S.DoneWrapper>
      <LogoSVG color={palette.bgMainOrange} />
      <H1>
        반가워요! <S.Strong>차곡</S.Strong>에 가입되셨습니다.
      </H1>
      <S.P>마음에 드는 프로젝트와 공모전을 살펴보세요.</S.P>
      <Footer>
        <Button onClick={onNext}>시작하기</Button>
      </Footer>
    </S.DoneWrapper>
  );
};

export default Done;
