import "./Styles.scss";

interface p {
  value: boolean;
}

export function Switcher({ value }: p) {
  return (
    <div className="Switcher">
      <div className="el1"></div>
      {value ? <div className="el2_active"></div> : <div className="el2"></div>}
    </div>
  );
}
