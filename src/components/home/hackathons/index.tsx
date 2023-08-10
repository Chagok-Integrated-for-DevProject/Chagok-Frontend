import ArrowSVG from "components/common/arrow";
import { H2, P, Section, ShowMore } from "components/home/index.styles";
import { palette } from "styles/palette";

const Hackathons = () => {
  return (
    <Section>
      <div className="section-title">
        <H2>해커톤</H2>
        <P>따끈따끈한 해커톤에 대한 정보를 확인해보세요!</P>
        <ShowMore href="projects">
          <span>더 보기</span>
          <ArrowSVG width={35} color={`${palette.fontGray300}`} />
        </ShowMore>
      </div>
    </Section>
  );
};

export default Hackathons;
