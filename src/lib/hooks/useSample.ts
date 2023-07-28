import { useState } from "react";

export const useSample = () => {
  const [sample, setSample] = useState("sample!");

  return [sample, setSample];
};
