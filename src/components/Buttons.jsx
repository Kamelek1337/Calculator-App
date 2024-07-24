import Button from "./Button";

export default function Buttons() {
  return (
    <article className="keypad-container">
      <div className="buttons-container ">
        <Button buttonValue={7} />
        <Button buttonValue={8} />
        <Button buttonValue={9} />
        <Button buttonValue={"DEL"} />
        <Button buttonValue={4} />
        <Button buttonValue={5} />
        <Button buttonValue={6} />
        <Button buttonValue={"+"} />
        <Button buttonValue={1} />
        <Button buttonValue={2} />
        <Button buttonValue={3} />
        <Button buttonValue={"-"} />
        <Button buttonValue={"."} />
        <Button buttonValue={0} />
        <Button buttonValue={"/"} />
        <Button buttonValue={"x"} />
      </div>
      <div className="functional-buttons-container">
        <Button buttonValue={"RESET"} />
        <Button buttonValue={"="} />
      </div>
    </article>
  );
}
