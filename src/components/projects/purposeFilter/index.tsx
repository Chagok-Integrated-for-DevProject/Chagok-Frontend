import { useSearchParams } from "next/navigation";
import type { FC } from "react";

import { FilterBtn } from "./index.styles";

interface IPurposeFilterProps {
  handlePurpose: (purpose: string) => void;
}

const PurposeFilter: FC<IPurposeFilterProps> = ({ handlePurpose }) => {
  const searchParams = useSearchParams();
  const purpose = searchParams.get("purpose");

  return (
    <div>
      <FilterBtn
        type="button"
        isCurrentQuery={purpose === "study"}
        onClick={() => handlePurpose("study")}
      >
        스터디
      </FilterBtn>
      <FilterBtn
        isCurrentQuery={purpose === "project"}
        type="button"
        onClick={() => handlePurpose("project")}
      >
        프로젝트
      </FilterBtn>
    </div>
  );
};

export default PurposeFilter;
