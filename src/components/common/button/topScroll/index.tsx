import ArrowSVG from "components/common/arrow";
import { palette } from "styles/palette";

import { CircleBtn } from "./index.styles";

const TopScrollBtn = () => {
  const goToScrllTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <CircleBtn type="button" onClick={goToScrllTop}>
      <ArrowSVG width={50} color={`${palette.white}`} />
    </CircleBtn>
  );
};

export default TopScrollBtn;
