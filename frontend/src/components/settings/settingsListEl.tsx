import "./styles.scss";
import type { ReactNode } from "react";
import { GoChevronRight } from "react-icons/go";

interface props {
  onClick: () => void;
  icon: ReactNode;
  label: string;
}

export function SettingsListEl({ ...props }: props) {
  return (
    <div onClick={props.onClick} className="settingsListEl el cp">
      <div className="elIcon">{props.icon}</div>
      <p className="label">{props.label}</p>
      <GoChevronRight className="_" />
    </div>
  );
}
