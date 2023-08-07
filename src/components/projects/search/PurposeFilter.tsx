import { useRouter } from "next/router";

import { FilterBtn } from "./PurposeFilter.styles";

const PurposeFilter = () => {
  const router = useRouter();

  const handlePurpose = (purpose: string) => {
    router.push({
      pathname: "/projects",
      query: { purpose: `${purpose}` },
    });
  };

  return (
    <div>
      <FilterBtn
        type="submit"
        isCurrentQuery={router.query.purpose === "study"}
        onClick={() => handlePurpose("study")}
      >
        스터디
      </FilterBtn>
      <FilterBtn
        isCurrentQuery={router.query.purpose === "project"}
        type="submit"
        onClick={() => handlePurpose("project")}
      >
        프로젝트
      </FilterBtn>
    </div>
  );
};

export default PurposeFilter;
