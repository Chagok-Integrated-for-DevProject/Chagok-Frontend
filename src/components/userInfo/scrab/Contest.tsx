import styled from "@emotion/styled";
import HackathonPageCard from "components/common/card/hackathons/HackathonPageCard";
import { useGetMyInfoQuery, useJwtToken } from "lib/hooks";
import { breakPoints } from "styles/breakPoints";

import * as C from "./index.styles";

const ContestScrap = () => {
  const { token } = useJwtToken();
  const { data: userInfo } = useGetMyInfoQuery(token);

  return (
    <C.ScrapList>
      {userInfo?.contestScraps.map((e, i) => (
        <Li key={`${i}${e.id}`}>
          <HackathonPageCard content={e} />
        </Li>
      ))}
    </C.ScrapList>
  );
};

export const Li = styled.li`
  width: 30%;

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

export default ContestScrap;
