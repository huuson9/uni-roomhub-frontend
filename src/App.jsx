// File: App.js
import ThemeProvider from "./themes";
import { HelmetProvider } from "react-helmet-async";
import Router from "./routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
export default App;
