import type { ErrorInfo, ReactNode } from "react";
import React, { Component } from "react";

import { BackgroundDiv, H1, ReloadBtn, TextBox } from "./ErrorBoundary.styles";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <BackgroundDiv role="alert">
          <TextBox>
            <H1>
              서버와의 연결이
              <br /> 불안정해 데이터를 <br />
              가져오는데 실패했습니다.
            </H1>
            <ReloadBtn type="button" onClick={() => window.location.reload()}>
              새로고침
            </ReloadBtn>
          </TextBox>
        </BackgroundDiv>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
