import { useState } from "react";

import { SearchForm } from "./index.styles";
import { H2, SkillFilterAndSearchInputWrapper } from "./index.styles";
import PurposeFilter from "./PurposeFilter";
import SearchInput from "./SearchInput";
import SkillFilter from "./SkillFilter";

const SearchFilter = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

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
        <SearchInput />
      </SkillFilterAndSearchInputWrapper>
    </SearchForm>
  );
};

export default SearchFilter;
