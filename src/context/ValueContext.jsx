import { createContext, useState } from "react";

export const ValueContext = createContext();

export default function ValueContextProvider({ children }) {
  const [value, setValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  return (
    <ValueContext.Provider
      value={{ value, setValue, setDisplayValue, displayValue }}
    >
      {children}
    </ValueContext.Provider>
  );
}
