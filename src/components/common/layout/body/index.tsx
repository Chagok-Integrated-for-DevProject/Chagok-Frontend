import { type FC, type PropsWithChildren } from "react";

const Body: FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default Body;
