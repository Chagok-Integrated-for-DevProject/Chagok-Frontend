import Link from "next/link";

import { CardStyles } from "./Card.styles";

const RecommendationCard = () => {
  return (
    <Link href="/projects/1" css={CardStyles}>
      <div className="classificationWrapper">
        <span className="classificationTag">Hola</span>
        <span className="classificationTag">사이드 프로젝트</span>
      </div>
      <h2 className="title">사이드 프로젝트 돛단배에서 팀원을 구합니다.</h2>
      <button type="button" className="detailBtn">
        자세히 보기
      </button>
    </Link>
  );
};

export default RecommendationCard;
