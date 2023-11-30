// File: App.js
import ThemeProvider from "./themes";
import { HelmetProvider } from "react-helmet-async";
import Router from "./routers";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  );
}
export default App;
