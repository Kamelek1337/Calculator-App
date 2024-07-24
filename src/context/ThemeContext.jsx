import { createContext, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("dark theme");
  const [rangeValue, setRangeValue] = useLocalStorage("1");

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, rangeValue, setRangeValue }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
