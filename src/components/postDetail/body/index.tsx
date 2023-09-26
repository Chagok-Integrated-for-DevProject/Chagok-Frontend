import Loading from "components/common/loading";
import FloatingBox from "components/postDetail/floatingBox";
import { sanitize } from "isomorphic-dompurify";
import type { TSkill } from "lib/constants/skills";
import { SKILLS } from "lib/constants/skills";
import { useJwtToken } from "lib/hooks/useJwtToken";
import { removeCRLF } from "lib/utils/removeCRLF";
import Image from "next/image";
import { type FC, Suspense } from "react";

import {
  BodyWrapper,
  Content,
  ContentWrapper,
  DesktopWrapper,
  H2,
  MainContentWrapper,
  SkillItem,
  SkillList,
  SkillListWrapper,
  VerticalDivider,
} from "./index.styles";

interface IBodyProps {
  skills: string[];
  content: string;
}

const Body: FC<IBodyProps> = ({ skills, content }) => {
  const skillList: TSkill[] = [];
  skills.forEach((e) => {
    const skill = SKILLS.find((t) => t.id === e);

    if (skill) {
      skillList.push(skill);
    }
  });

  const { token: accessToken } = useJwtToken();
  const replacedContent = sanitize(removeCRLF(content));

  return (
    <BodyWrapper>
      <MainContentWrapper>
        <SkillListWrapper>
          <H2>사용 스택</H2>
          <VerticalDivider />
          <SkillList>
            {skillList.map((e) => (
              <SkillItem key={e.id} data-testid="skill tag">
                <Image src={e.img} alt={e.id} />
              </SkillItem>
            ))}
          </SkillList>
        </SkillListWrapper>
        <ContentWrapper>
          <H2>프로젝트 내용</H2>
          <VerticalDivider />
          <Content dangerouslySetInnerHTML={{ __html: replacedContent }} />
        </ContentWrapper>
      </MainContentWrapper>
      <DesktopWrapper>
        {accessToken?.length > 0 && (
          <Suspense fallback={<Loading />}>
            <FloatingBox jwt={accessToken} />
          </Suspense>
        )}
      </DesktopWrapper>
    </BodyWrapper>
  );
};

export default Body;
