import { sanitize } from "isomorphic-dompurify";
import type { TSkill } from "lib/constants/skills";
import { SKILLS } from "lib/constants/skills";
import Image from "next/image";
import type { FC } from "react";

import FloatingBox from "./FloatingBox";
import {
  BodyWrapper,
  Content,
  ContentWrapper,
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

  const replacedContent = sanitize(content.replace(/\\n|\"/g, "\n"));

  return (
    <BodyWrapper>
      <MainContentWrapper>
        <SkillListWrapper>
          <H2>사용 스택</H2>
          <VerticalDivider />
          <SkillList>
            {skillList?.map((e) => (
              <SkillItem key={e.id}>
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
      <FloatingBox />
    </BodyWrapper>
  );
};

export default Body;
