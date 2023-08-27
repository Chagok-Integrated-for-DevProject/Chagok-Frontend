import { useEffect, useState } from "react";

export const useDebounce = (keyword: string, time: number) => {
  const [debounceKeyword, setDebounceKeyword] = useState(keyword);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebounceKeyword(keyword);
    }, time);

    return () => {
      clearTimeout(debounce);
    };
  }, [keyword, time]);

  return [debounceKeyword];
};
