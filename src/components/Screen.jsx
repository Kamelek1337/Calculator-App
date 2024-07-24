import { useContext } from "react";
import { ValueContext } from "../context/ValueContext";

export default function Screen() {
  const { displayValue } = useContext(ValueContext);

  return <input className="screen" value={displayValue} disabled />;
}
