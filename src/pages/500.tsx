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
        현재 개발 진행중이며
        <br /> 서버 API가 개발되지 않아
        <br /> 배포 버전에서 에러가 발생합니다. <br />- 500 - Internal Server
        Error
      </H1>
    </BackgroundDiv>
  );
};

export default Custom500;
