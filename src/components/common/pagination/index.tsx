import type { EmotionJSX } from "@emotion/react/types/jsx-namespace";
// import { createRenderPageNumberList } from "lib/utils/pagination";
import type { FC } from "react";

import { PaginationWrapper } from "./index.styles";

interface PaginationProps {
  data: EmotionJSX.Element[];
}

const Pagination: FC<PaginationProps> = ({ data }) => {
  // const cardsPerPage = 9;
  // const maxPageNum = Math.ceil(data?.length / cardsPerPage);

  //  const pageNumberList = createRenderPageNumberList(1, maxPageNum);

  return <PaginationWrapper>{data}</PaginationWrapper>;
};

export default Pagination;
