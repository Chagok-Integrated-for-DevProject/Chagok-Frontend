import { useState } from "react";

export const useInputChangeEvent = (
  defaultKeyword: string = "",
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
  const [keyword, setKeyword] = useState(defaultKeyword);
  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const resetKeyword = () => setKeyword("");
  return [keyword, handleKeyword, resetKeyword];
};

export const useInputFocusEvent = (): [boolean, () => void, () => void] => {
  const [inputFocus, setInputFocus] = useState(false);

  const handleFocusEvent = () => {
    setInputFocus(true);
  };

  const handleBlurEvent = () => {
    setInputFocus(false);
  };

  return [inputFocus, handleFocusEvent, handleBlurEvent];
};
