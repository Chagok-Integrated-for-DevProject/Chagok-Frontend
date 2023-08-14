/* eslint-disable no-console */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { RenderOptions } from "@testing-library/react";
import { render } from "@testing-library/react";

const queryTestClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === "test" ? () => {} : console.error,
  },
});

interface IReactQueryProviderProps {
  children: React.ReactNode;
}

function ReactQueryProvider({ children }: IReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryTestClient}>
      {children}
    </QueryClientProvider>
  );
}

const renderWithQueryClient = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  return render(ui, { wrapper: ReactQueryProvider, ...options });
};

export * from "@testing-library/react";
export { renderWithQueryClient as render };
