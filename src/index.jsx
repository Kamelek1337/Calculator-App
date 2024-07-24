import ReactDOM from "react-dom/client";
import ValueContextProvider from "./context/ValueContext.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <ValueContextProvider>
      <App />
    </ValueContextProvider>
  </ThemeContextProvider>
);
