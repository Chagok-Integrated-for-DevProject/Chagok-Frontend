import type { FC } from "react";

type BodyProps = {
  children: React.ReactNode;
};

const Body: FC<BodyProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Body;
