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
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { resetStyles } from "styles/resetStyles";

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
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>차곡 - 프로젝트, 해커톤 모집글 통합 플랫폼</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="사이드 프로젝트, 해커톤 모집글을 한 곳에서 확인하세요"
        />
        <meta httpEquiv="content-language" content="ko" />
        <meta
          property="og:title"
          content="차곡 - 프로젝트, 해커톤 모집글 통합 플랫폼"
        />
        <meta
          property="og:description"
          content="사이드 프로젝트, 해커톤 모집글을 한 곳에서 확인하세요"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
      </Head>
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
      <ToastContainer position="bottom-center" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
