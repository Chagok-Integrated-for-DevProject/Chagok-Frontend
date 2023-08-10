import secondBanner from "/public/banner/banner2.png";
import blur from "/public/banner/blur/banner2.png";

import { CardWrapper, CustomImg, Em, H2, TextWrapper } from "./index.styles";

export const SecondCard = () => {
  return (
    <CardWrapper>
      <TextWrapper>
        <H2>
          <Em>차곡</Em>에 로그인하고
          <br />
          나에게 맞는 프로젝트를
          <br />
          추천 받아 보세요!
        </H2>
      </TextWrapper>
      <CustomImg
        src={secondBanner}
        alt="두번째 이미지"
        blurDataURL={`${blur}`}
        width={890}
        height={418}
      />
    </CardWrapper>
  );
};
