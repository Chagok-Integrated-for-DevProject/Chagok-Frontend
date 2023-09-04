import secondBanner from "/public/banner/banner2.png";
import blur from "/public/banner/blur/banner2.png";

import { CardWrapper, CustomImg, Em, H2, TextWrapper } from "./index.styles";

export const SecondCard = () => {
  return (
    <CardWrapper>
      <TextWrapper>
        <H2>
          <Em>차곡</Em>에서
          <br />
          프로젝트, 스터디 모집글을
          <br />한 번에 볼 수 있어요!
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
