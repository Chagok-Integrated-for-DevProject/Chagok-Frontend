import PaginationButtons from "components/common/button/pagination";
import Hr from "components/common/hr";
import { useHandlePageNumber } from "lib/hooks/useHandlePageNumber";
import { useInputChangeEvent } from "lib/hooks/useInputHooks";
import { useState } from "react";

import { SearchForm } from "./index.styles";
import { H2, SkillFilterAndSearchInputWrapper } from "./index.styles";
import ProjectList from "./projectList";
import PurposeFilter from "./purposeFilter";
import SearchInput from "./searchInput";
import SkillFilter from "./skillFilter";

const SearchProjects = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [keyword, handleKeyword] = useInputChangeEvent();

  const {
    pageNumber,
    handleClickPageNumber,
    handleClickPrevArrow,
    handleClickNextArrow,
    handleClickPrevDblArrow,
    handleClickNextDblArrow,
  } = useHandlePageNumber(1, 15);

  const handleSelectedSkills = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((e) => e !== skill));
      return;
    }

    setSelectedSkills([...selectedSkills, skill]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <PurposeFilter />
      <SkillFilterAndSearchInputWrapper>
        <H2>나의 기술 스택</H2>
        <SkillFilter
          handleSelectedSkills={handleSelectedSkills}
          selectedSkills={selectedSkills}
        />
        <SearchInput handleKeyword={handleKeyword} keyword={keyword} />
      </SkillFilterAndSearchInputWrapper>
      <Hr />
      <ProjectList />
      <PaginationButtons
        totalPages={15}
        currentPage={pageNumber}
        handleClickPageNumber={handleClickPageNumber}
        handleClickPrevArrow={handleClickPrevArrow}
        handleClickNextArrow={handleClickNextArrow}
        handleClickPrevDblArrow={handleClickPrevDblArrow}
        handleClickNextDblArrow={handleClickNextDblArrow}
      />
    </SearchForm>
  );
};

export default SearchProjects;
