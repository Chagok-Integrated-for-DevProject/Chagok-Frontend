import type { FC } from "react";

import Body from "./body";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </>
  );
};

export default Layout;
