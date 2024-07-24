import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Screen from "./components/Screen";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext.jsx";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="body" data-theme={theme}>
      <div className="container">
        <div className="main">
          <Header />
          <Screen />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default App;
