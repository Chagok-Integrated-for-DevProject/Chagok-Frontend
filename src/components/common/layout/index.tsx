import { GoogleOAuthProvider } from "@react-oauth/google";
import type { FC } from "react";

import Body from "./body";
import Footer from "./footer";
import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      <Header />
      <Body>{children}</Body>
      <Footer />
    </GoogleOAuthProvider>
  );
};

export default Layout;
