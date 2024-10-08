// Code to provide the react-query client to the app, this will help us with fetching api states/cache etc

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError && error?.response?.status === 401) {
        // window.location.href = "/login";
      }
    },
  }),
});

const ReactQueryClientProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryClientProvider;
