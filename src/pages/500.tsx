import styled from "@emotion/styled";
import type { NextPage } from "next";
import { palette } from "styles/palette";

const BackgroundDiv = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 10rem);

  background-color: ${palette.bgWhite};
`;

const H1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 2rem;
  line-height: 2.6rem;
  font-weight: 700;
  color: ${palette.fontMainOrange};
`;

const Custom500: NextPage = () => {
  return (
    <BackgroundDiv>
      <H1>
        서버에 문제가 발생했습니다.
        <br /> 잠시후 다시 시도해주세요 <br />- 500 - Internal Server Error
      </H1>
    </BackgroundDiv>
  );
};

export default Custom500;
