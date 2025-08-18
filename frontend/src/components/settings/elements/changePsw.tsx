import { useState } from "react";
import "./styles.scss";
import { Input } from "../../../shared/UI/Input";
import { Button } from "../../../shared/UI/Button";
import { changePswAPI } from "./api";
import { userStore } from "../../../app/store/user/userStore";

export function ChangePsw() {
  const [oldPsw, setOldPsw] = useState("");
  const [newPsw, setNewPsw] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [resMsg, setResMsg] = useState("");

  const handleChangePsw = () => {
    setIsLoading(true);

    changePswAPI({
      username: userStore.dataMap.username || "",
      oldPsw: oldPsw,
      newPsw: newPsw,
    }).then((e) => {
      setIsLoading(false);
      setResMsg(e?.msg);
    });
  };

  return (
    <div className="changePsw">
      <p>ChangePsw</p>
      <Input
        type="password"
        value={oldPsw}
        onChange={(e) => setOldPsw(e)}
        placeholder="старый пароль"
      />

      <Input
        type="password"
        value={newPsw}
        onChange={(e) => setNewPsw(e)}
        placeholder="новый пароль (минимум 6)"
      />

      {oldPsw.trim().length && newPsw.trim().length ? (
        <Button
          onClick={handleChangePsw}
          isLoading={isLoading}
          className="btn"
          label="сменить пароль"
        />
      ) : (
        <div></div>
      )}

      <p>{resMsg}</p>
    </div>
  );
}
