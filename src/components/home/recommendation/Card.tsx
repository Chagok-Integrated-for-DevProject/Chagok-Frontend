import Link from "next/link";
import type { FC } from "react";

import { CardStyles } from "./Card.styles";

interface IRecommendationCardProps {
  title: string;
  id: string;
}

const RecommendationCard: FC<IRecommendationCardProps> = ({ title, id }) => {
  return (
    <Link href={`/projects/${id}?purpose=project`} css={CardStyles}>
      <div className="classificationWrapper">
        {/**보류: <span className="classificationTag">Hola</span>*/}
        <span className="classificationTag">사이드 프로젝트</span>
      </div>
      <h2 className="title">{title}</h2>
      <button type="button" className="detailBtn">
        자세히 보기
      </button>
    </Link>
  );
};

export default RecommendationCard;
