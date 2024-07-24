import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
export default function SwitchTheme() {
  const { setTheme, setRangeValue, rangeValue } = useContext(ThemeContext);

  function handleToggleChange(e) {
    let value = e.target.value;

    if (value == 1) {
      value = "dark theme";
      setRangeValue("1");
    } else if (value == 2) {
      value = "light theme";
      setRangeValue("2");
    } else {
      value = "custom theme";
      setRangeValue("3");
    }

    setTheme(value);
  }

  return (
    <div className="wrapper">
      <input
        type="range"
        name="points"
        min="1"
        step="1"
        id="custom-toggle"
        className="tgl-def"
        max="3"
        defaultValue={rangeValue}
        onChange={handleToggleChange}
      />
    </div>
  );
}
