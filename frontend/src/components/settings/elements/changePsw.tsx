import { useEffect, useState } from "react";
import "./styles.scss";
import { userHashPswAPI } from "./api";
import { userStore } from "../../../app/store/user/userStore";

export function ChangePsw() {
  const [oldPswHash, setOldPswHash] = useState("");

  useEffect(() => {
    userHashPswAPI(userStore.dataMap.username || "").then((e) => setOldPsw(e));
  }, []);

  return (
    <div>
      <div>ChangePsw</div>
      <p>oldPswHash: ${old}</p>
    </div>
  );
}
