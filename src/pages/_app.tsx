import { Global } from "@emotion/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "components/common/error/ErrorBoundary";
import Layout from "components/common/layout";
import type { AppProps } from "next/app";
import { useState } from "react";
import { resetStyles } from "styles/resetStyles";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../lib/mocks");
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            suspense: true,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global styles={resetStyles} />
        <ErrorBoundary>
          <GoogleOAuthProvider clientId="217895273558-dab38q8mu6cod8fv0t6p7hotlgg67fj3.apps.googleusercontent.com">
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </GoogleOAuthProvider>
        </ErrorBoundary>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
