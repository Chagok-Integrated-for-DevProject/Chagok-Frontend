import type { FC } from "react";

import { Main } from "./Body.styles";

interface IBodyProps {
  children: React.ReactNode;
}

const Body: FC<IBodyProps> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Body;
