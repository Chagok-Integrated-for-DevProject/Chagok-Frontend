import { useState } from "react";

export const useInputChangeEvent = (): [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [keyword, setKeyword] = useState("");
  const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return [keyword, handleKeyword];
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
