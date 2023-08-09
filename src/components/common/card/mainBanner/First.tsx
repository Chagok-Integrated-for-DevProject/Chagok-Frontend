import { useRouter } from "next/router";

import fisrtBanner from "/public/banner/banner.png";
import blur from "/public/banner/blur/banner.png";

import { LoginBtn } from "./First.styles";
import { CardWrapper, CustomImg, Em, H2, TextWrapper } from "./index.styles";

export const FirstCard = () => {
  const router = useRouter();

  const handleLoginBtn = () => {
    router.push("/userInfo");
  };

  return (
    <CardWrapper className="cardwrapper">
      <TextWrapper className="textwrapper">
        <H2>
          <Em>차곡</Em>에 로그인하고
          <br />
          나에게 맞는 프로젝트를
          <br />
          추천 받아 보세요!
        </H2>
        <LoginBtn type="button" onClick={handleLoginBtn}>
          로그인 하기
        </LoginBtn>
      </TextWrapper>
      <CustomImg
        src={fisrtBanner}
        alt="첫번째 이미지"
        blurDataURL={`${blur}`}
        width={890}
        height={418}
      />
    </CardWrapper>
  );
};
