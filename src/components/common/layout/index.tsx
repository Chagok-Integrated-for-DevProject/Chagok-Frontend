import type { FC, PropsWithChildren } from "react";

import Body from "./body";
import Footer from "./footer";
import Header from "./header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default Layout;
