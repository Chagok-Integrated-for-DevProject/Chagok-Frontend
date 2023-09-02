import ArrowSVG from "components/common/arrow";
import { sanitize } from "isomorphic-dompurify";
import type { FC } from "react";
import { useState } from "react";

import * as S from "./index.styles";

interface IOriginalProps {
  data: string;
}

const Original: FC<IOriginalProps> = ({ data }) => {
  const sanitizer = sanitize;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.Details data-testid="hackathon-details">
      <S.Summary
        data-testid="hackathon-summary"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span data-testid="summary-label">
          {isOpen ? "원문 접기" : "자세히 보기"}
        </span>
        <S.Arrow isOpen={isOpen}>
          <ArrowSVG width={20} color="#525252" />
        </S.Arrow>
      </S.Summary>
      <S.CrawlingDataBox
        className="browser-rendering"
        dangerouslySetInnerHTML={{ __html: sanitizer(data) }}
      />
    </S.Details>
  );
};

export default Original;
