import { useState } from "react";
import { Input } from "../../../shared/UI/Input";
import { Button } from "../../../shared/UI/Button";
import "../styles.scss";
import { SessionAPI } from "./api";
import { useNavigate } from "react-router-dom";

export function SessionForm() {
  const [psw, setPsw] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const n = useNavigate();

  const handleClickBtn = () => {
    setIsLoading(true);

    SessionAPI({ password: psw, navigate: n }).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="sessionForm">
      <h3>введите пароль</h3>
      <Input
        type="password"
        value={psw}
        onChange={setPsw}
        placeholder="пароль"
      />
      <Button
        isLoading={isLoading}
        disabled={!psw}
        onClick={handleClickBtn}
        className="btn"
        label="отправить"
      />
    </div>
  );
}
