import Hr from "components/common/hr";
import { useDebounce } from "lib/hooks/useDebounce";
import { useInputChangeEvent } from "lib/hooks/useInputHooks";
import { useRouter } from "next/router";
import { Suspense, useState } from "react";

import { SearchForm } from "./index.styles";
import { H2, SkillFilterAndSearchInputWrapper } from "./index.styles";
import Loading from "./Loading";
import ProjectList from "./projectList";
import PurposeFilter from "./purposeFilter";
import SearchInput from "./searchInput";
import SkillFilter from "./skillFilter";

const SearchProjects = () => {
  // TODO: useProjectsQuery, useStudiesQuery에 SelectedSkills 적용

  const router = useRouter();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [keyword, handleKeyword] = useInputChangeEvent();
  const [debounceKeyword] = useDebounce(keyword, 500);

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
      <SkillFilterAndSearchInputWrapper>
        <H2>나의 기술 스택</H2>
        <SkillFilter
          handleSelectedSkills={handleSelectedSkills}
          selectedSkills={selectedSkills}
        />
        <SearchInput handleKeyword={handleKeyword} keyword={keyword} />
      </SkillFilterAndSearchInputWrapper>
      <Hr />
      <Suspense fallback={<Loading />}>
        <ProjectList
          searchKeyword={debounceKeyword}
          selectedSkills={selectedSkills}
        />
      </Suspense>
    </SearchForm>
  );
};

export default SearchProjects;
