import TopScrollBtn from "components/common/button/topScroll";
import Loading from "components/common/loading";
import { H2, H3, Section } from "components/hackathons/index.styles";
import type { ChangeEvent } from "react";
import { Suspense, useState } from "react";

import HackathonListSection from "./HackathonList";
import * as S from "./index.styles";

export type TFilter = {
  sort:
    | "hotCount"
    | "id"
    | "endDate"
    | "startDate"
    | "scrapCount"
    | "viewCount"
    | "commentCount";
  direction: "desc" | "asc";
};

const List = () => {
  const [filter, setFilter] = useState<TFilter>({
    sort: "id",
    direction: "desc",
  });
  const onChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "deadline": // 마감순
        setFilter({ sort: "endDate", direction: "asc" });
        break;
      case "hot": // 인기순
        setFilter({ sort: "hotCount", direction: "desc" });
        break;
      case "comment": // 댓글많은순
        setFilter({ sort: "commentCount", direction: "desc" });
        break;
      default: // 기본값 최신순
        setFilter({ sort: "id", direction: "desc" });
        break;
    }
  };
  return (
    <>
      <Section>
        <H2>해커톤을 위한 팀원을 모집해보세요</H2>
        <H3>해커톤의 소식을 빠르게 알아보세요!</H3>
        <S.SelectBox>
          <S.Select onChange={onChangeOption}>
            <option value="latest">최신순</option>
            <option value="deadline">마감순</option>
            <option value="hot">인기순</option>
            <option value="comment">댓글많은순</option>
          </S.Select>
        </S.SelectBox>
        <Suspense fallback={<Loading />}>
          <HackathonListSection filter={filter} />
        </Suspense>
      </Section>
      <TopScrollBtn />
    </>
  );
};

export default List;
