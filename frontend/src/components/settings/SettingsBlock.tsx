import type { ReactNode, SetStateAction } from "react";
import "./styles.scss";

interface props {
  labelTitle?: string;
  ch?: ReactNode;
  setIsOpen: (e: SetStateAction<boolean>) => void;
}

export default function SettingsBlock({ ...props }: props) {
  return (
    <div className="settingsBlockMC">
      <div className="settingsBlock anim_o0_to_o1">
        <div className="header">
          <p className="cp back" onClick={() => props.setIsOpen(false)}>
            Назад
          </p>
          <p>{props.labelTitle}</p>
        </div>

        {props.ch}
      </div>
    </div>
  );
}
