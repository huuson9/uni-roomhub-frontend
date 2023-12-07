// File: App.js
import ThemeProvider from "./themes";
import { HelmetProvider } from "react-helmet-async";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ThemeProvider>
        </HelmetProvider>
      </QueryClientProvider>
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        pauseOnHover
        closeOnClick
      />
    </>
  );
}
export default App;
