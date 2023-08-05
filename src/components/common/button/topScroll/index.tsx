import Image from "next/image";

import topArrow from "/public/top_arrow.svg";

import { CircleBtn } from "./index.styles";

const TopScrollBtn = () => {
  const goToScrllTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <CircleBtn type="button" onClick={goToScrllTop}>
      <Image src={topArrow} alt="top arrow" />
    </CircleBtn>
  );
};

export default TopScrollBtn;
