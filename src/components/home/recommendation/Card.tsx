import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { CardStyles } from "./Card.styles";

const RecommendationCard = () => {
  const searchParams = useSearchParams();
  const purpose = searchParams.get("purpose") || "study";

  return (
    <Link href={`/projects/1?purpose=${purpose}`} css={CardStyles}>
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
