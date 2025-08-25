import { IoChevronBack } from "react-icons/io5";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

interface props {
  isBack?: boolean;
  ch: ReactNode;
  isChWFull?: boolean;
}

export function HeaderPage({ ch, isBack = false, isChWFull }: props) {
  const n = useNavigate();

  const handleBack = () => {
    n(-1);
  };

  return (
    <header className="headerSearch ttb">
      {isBack && (
        <div onClick={handleBack} className="cp block back">
          <IoChevronBack />
          <span>Назад</span>
        </div>
      )}

      <div style={{ width: isChWFull ? "100%" : "" }} className="children">
        {ch}
      </div>
    </header>
  );
}
