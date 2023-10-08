import styled from "@emotion/styled";
import ProjectCard from "components/common/card/projects";
import { useGetMyInfoQuery, useJwtToken } from "lib/hooks";
import { breakPoints } from "styles/breakPoints";
import { palette } from "styles/palette";

import * as C from "./index.styles";

const StudyScrap = () => {
  const { token } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(token);

  return (
    <C.ScrapList>
      {userInfo?.projectScraps.map((e, i) => (
        <Li key={`${i}${e.id}`}>
          <ProjectCard contents={e} jwt={token} userInfo={userInfo} />
        </Li>
      ))}
    </C.ScrapList>
  );
};

export const Li = styled.li`
  width: 30%;
  padding: 2.3125rem;

  border-radius: 0.625rem;
  background: ${palette.white};
  box-shadow: 0px 1px 50px 0px rgba(0, 0, 0, 0.1);

  @media ${breakPoints.md} {
    width: 47%;
  }

  @media ${breakPoints.sm} {
    width: 100%;
    a {
      display: block;
      margin: 0 auto;
    }
  }
`;

export default StudyScrap;
