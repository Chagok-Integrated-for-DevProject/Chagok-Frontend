import Hr from "components/common/hr";
import { useComponentMount } from "lib/hooks/useComponentMount";
import { useDebounce } from "lib/hooks/useDebounce";
import { useInputChangeEvent } from "lib/hooks/useInputHooks";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";

import { FilterAndInputInnerWrapper, SearchForm } from "./index.styles";
import { FilterAndInputWrapper, H2 } from "./index.styles";
import Loading from "./Loading";
import ProjectList from "./projectList";
import PurposeFilter from "./purposeFilter";
import SearchInput from "./searchInput";
import SkillFilter from "./skillFilter";

const SearchProjects = () => {
  const router = useRouter();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [keyword, handleKeyword] = useInputChangeEvent();
  const [debounceKeyword] = useDebounce(keyword, 500);
  const [mount] = useComponentMount();

  const handlePurpose = (purpose: string) => {
    router.push({
      pathname: router.pathname,
      query: { purpose: `${purpose}` },
    });
  };

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
      <PurposeFilter handlePurpose={handlePurpose} />
      <FilterAndInputWrapper>
        <H2>나의 기술 스택</H2>
        <FilterAndInputInnerWrapper>
          <SkillFilter
            handleSelectedSkills={handleSelectedSkills}
            selectedSkills={selectedSkills}
          />
          <SearchInput handleKeyword={handleKeyword} keyword={keyword} />
        </FilterAndInputInnerWrapper>
      </FilterAndInputWrapper>
      <Hr />
      <Suspense fallback={<Loading />}>
        {mount && (
          <ProjectList
            searchKeyword={debounceKeyword}
            selectedSkills={selectedSkills}
          />
        )}
      </Suspense>
    </SearchForm>
  );
};

export default SearchProjects;
