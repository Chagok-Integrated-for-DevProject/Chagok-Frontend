import { useEffect, useState } from "react";

export const useComponentMount: () => [boolean] = () => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return [mount];
};
