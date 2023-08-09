import { sanitize } from "isomorphic-dompurify";
import { useState } from "react";

import bottomArrowSVG from "/public/bottom_arrow.svg";

import * as S from "./index.styles";

const Original = () => {
  const sanitizer = sanitize;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Details>
      <S.Summary onClick={() => setIsOpen((prev) => !prev)}>
        <span>{isOpen ? "원문 접기" : "자세히 보기"}</span>
        <S.Arrow
          isOpen={isOpen}
          src={bottomArrowSVG}
          alt={isOpen ? "접기 화살표" : "펼치기 화살표"}
        />
      </S.Summary>
      <S.CrawlingDataBox
        dangerouslySetInnerHTML={{ __html: sanitizer("<h1>해커톤 원문</h1>") }}
      />
    </S.Details>
  );
};

export default Original;
