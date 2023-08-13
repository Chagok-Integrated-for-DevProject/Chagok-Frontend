import { useInputFocusEvent } from "lib/hooks/useInputHooks";
import Image from "next/image";
import { type FC } from "react";

import searchImg from "/public/utils/search_icon.svg";

import { Input, Label, Placeholder, SearchInputWrapper } from "./index.styles";

interface SearchInputProps {
  handleKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
}

const SearchInput: FC<SearchInputProps> = ({ handleKeyword, keyword }) => {
  const [inputFocus, handleFocusEvent, handleBlurEvent] = useInputFocusEvent();

  return (
    <SearchInputWrapper>
      <Input
        type="text"
        id="search-keyword"
        data-testid="searchInput"
        onChange={handleKeyword}
        value={keyword}
        onFocus={handleFocusEvent}
        onBlur={handleBlurEvent}
      />
      {!inputFocus && !keyword.length && (
        <Label>
          <Image src={searchImg} alt="돋보기" />
          <Placeholder>원하는 검색어를 입력해주세요.</Placeholder>
        </Label>
      )}
    </SearchInputWrapper>
  );
};

export default SearchInput;
