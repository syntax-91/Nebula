import { useState } from "react";
import { TextArea } from "../../../shared/UI/TextArea";
import { Button } from "../../../shared/UI/Button";
import { reportABugAPI } from "./api";
import { userStore } from "../../../app/store/user/userStore";

// report A bug
export function ReportABug() {
  const [text, setText] = useState("");
  const [resMsg, setResMsg] = useState("");

  const handleSubmit = () => {
    setText("");

    reportABugAPI({
      username: userStore.dataMap.username || "",
      text: text,
    }).then((e) => {
      setResMsg(e?.msg);
    });
  };

  return (
    <div className="reportABug">
      <h3>сообщить о баге</h3>

      <TextArea
        placeholder="напишите о проблеме"
        value={text}
        onChange={setText}
      />
      <Button
        label="отправить"
        disabled={!text.trim().length}
        onClick={handleSubmit}
      />

      <p className="text">{resMsg ? resMsg : ""}</p>
    </div>
  );
}
