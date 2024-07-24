import SwitchTheme from "./SwtichTheme";

export default function Header() {
  return (
    <header className="calc-header">
      <h3>calc</h3>
      <div className="theme">
        <p>THEME</p>
        <div className="theme-box-input">
          <div className="theme-labels">
            <label>1</label>
            <label>2</label>
            <label>3</label>
          </div>
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
}
