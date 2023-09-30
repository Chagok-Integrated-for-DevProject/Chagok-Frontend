/* eslint-disable @typescript-eslint/no-explicit-any */
import "react-toastify/dist/ReactToastify.css";

import { Global } from "@emotion/react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "components/common/error/ErrorBoundary";
import Layout from "components/common/layout";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { resetStyles } from "styles/resetStyles";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../lib/mocks");
}

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const kakaoInit = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID as string);
    window.Kakao.isInitialized();
  };

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Script
            src="https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js"
            integrity="sha384-70k0rrouSYPWJt7q9rSTKpiTfX6USlMYjZUtr1Du+9o4cGvhPAWxngdtVZDdErlh"
            crossOrigin="anonymous"
            onLoad={kakaoInit}
          />
        </ErrorBoundary>
      </Hydrate>
      <ToastContainer position="top-center" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
