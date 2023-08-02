import Hr from "components/common/Hr";
import { H2, P, Section, ShowMore } from "components/home/index.styles";
import Image from "next/image";

import arrow from "/public/showMore.svg";

const Hackathons = () => {
  return (
    <>
      <Section>
        <div className="section-title">
          <H2>해커톤</H2>
          <P>따끈따끈한 해커톤에 대한 정보를 확인해보세요!</P>
          <ShowMore href="projects">
            <span>더 보기</span>
            <Image src={arrow} alt="show more" />
          </ShowMore>
        </div>
      </Section>
      <Hr />
    </>
  );
};

export default Hackathons;
