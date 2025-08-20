import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Button } from "../../../shared/UI/Button";
import { Input } from "../../../shared/UI/Input";
import { TextArea } from "../../../shared/UI/TextArea";
import { userStore } from "../../../app/store/user/userStore";
import { useDebounce } from "../../../shared/utils/hooks/useDebounce";
import {
  changeAvaAPI,
  changeBioAPI,
  changeDisplayNameAPI,
  changeUsernameAPI,
} from "./api";

export default function MyProfile() {
  const [ava, setAva] = useState<File>();

  const [displayName, setDisplayName] = useState(
    userStore.dataMap.displayName || ""
  );
  const [username, setUsername] = useState(userStore.dataMap.username);
  const [bio, setBio] = useState(userStore.dataMap.bio);

  // debounced
  const displayNameDebounced = useDebounce(displayName, 400);
  const usernameDebounced = useDebounce(username || "", 400);
  const bioDebounced = useDebounce(bio || "", 800);

  // resMsg
  const [resMsgDisplayName, setResMsgDisplayName] = useState("");
  const [resMsgUsername, setResMsgUsername] = useState("");
  const [resMsgBio, setResMsgBio] = useState("");

  ////
  const clearTimeoutResMsg = 2000;

  // displayName
  useEffect(() => {
    if (
      displayName?.trim().length &&
      displayName !== userStore.dataMap.displayName
    ) {
      changeDisplayNameAPI({
        text: displayNameDebounced,
        username: userStore.dataMap.username || "",
      }).then((e) => {
        setResMsgDisplayName(e?.msg);

        setTimeout(() => {
          setResMsgDisplayName("");
        }, clearTimeoutResMsg);
      });
    }
  }, [displayNameDebounced]);

  // username
  useEffect(() => {
    if (username?.trim().length && username !== userStore.dataMap.username) {
      changeUsernameAPI({
        text: usernameDebounced,
        username: userStore.dataMap.username || "",
      }).then((e) => {
        setResMsgUsername(e?.msg);

        setTimeout(() => {
          setResMsgUsername("");
        }, clearTimeoutResMsg);
      });
    }
  }, [usernameDebounced]);

  // bio
  useEffect(() => {
    if (bio?.trim().length && bio !== userStore.dataMap.bio) {
      changeBioAPI({
        text: bioDebounced,
        username: userStore.dataMap.username || "",
      }).then((e) => {
        setResMsgBio(e?.msg);

        setTimeout(() => {
          setResMsgBio("");
        }, clearTimeoutResMsg);
      });
    }
  }, [bioDebounced]);

  // ava
  const addAvaInp = useRef<HTMLInputElement>(null);

  const handleAddAva = () => {
    addAvaInp.current.click();
  };

  const handleChangeAva = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      changeAvaAPI({
        username: userStore.dataMap.username || "",
        file: selectedFile,
      }).then((e) => {
        setAva(e?.url);
      });
    } else {
      return;
    }
  };

  return (
    <div className="myProfile">
      <div className="avaC">
        <div className="ava">
          <img src={ava} alt="" />
        </div>
        <input
          onChange={(e) => handleChangeAva(e)}
          ref={addAvaInp}
          type="file"
          className="none"
        />
        <Button disabled={true} onClick={handleAddAva} label="загрузить" />
      </div>

      <div className="data">
        <div className="displayName">
          <span>displayName</span>
          <Input
            value={displayName}
            onChange={(e) => setDisplayName(e)}
            placeholder="displayName"
          />
          {resMsgDisplayName ? <span>{resMsgDisplayName}</span> : ""}
        </div>

        <div className="username">
          <span>username</span>
          <Input
            value={username}
            onChange={(e) => setUsername(e)}
            placeholder="username"
          />
          {resMsgUsername ? <span>{resMsgUsername}</span> : ""}
        </div>

        <div className="bio">
          <span>bio</span>
          <TextArea value={bio} onChange={(e) => setBio(e)} placeholder="bio" />
          {resMsgBio ? <span>{resMsgBio}</span> : ""}
        </div>
      </div>
    </div>
  );
}
