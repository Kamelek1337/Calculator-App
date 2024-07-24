import { useContext } from "react";
import { ValueContext } from "../context/ValueContext";
export default function Button({ buttonValue }) {
  const { value, setValue, setDisplayValue } = useContext(ValueContext);

  let cssStyle;
  if (buttonValue === "DEL") {
    cssStyle = "delete";
  } else if (buttonValue === "=") {
    cssStyle = "equal";
  } else {
    cssStyle = "";
  }

  function handleCalculate(val) {
    if (val === "x") {
      val = "*";
    }

    if (val === "+" || val === "-" || val === "*" || val === "/") {
      setValue(eval(value));
      setDisplayValue(eval(value));
      setValue((value) => value + val);
    } else if (val === "=") {
      setValue(eval(value));
      setDisplayValue(eval(value));
    } else if (val === "RESET") {
      setValue("");
      setDisplayValue("");
    } else if (val === "DEL") {
      setValue("0");
      setDisplayValue("0");
    } else {
      if (value === "0") {
        setDisplayValue("");
        setValue("");
      }

      if (
        value.slice(-1) === "+" ||
        value.slice(-1) === "-" ||
        value.slice(-1) === "*" ||
        value.slice(-1) === "/"
      ) {
        setDisplayValue("");
      }

      setDisplayValue((displayValue) => displayValue + val);
      setValue((value) => value + val);
    }
  }

  return (
    <button onClick={() => handleCalculate(buttonValue)} id={cssStyle}>
      {buttonValue}
    </button>
  );
}
