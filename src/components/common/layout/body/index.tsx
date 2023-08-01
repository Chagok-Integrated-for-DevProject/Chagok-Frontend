import type { FC } from "react";

import { Main } from "./Body.styles";

interface BodyProps {
  children: React.ReactNode;
}

const Body: FC<BodyProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Body;
