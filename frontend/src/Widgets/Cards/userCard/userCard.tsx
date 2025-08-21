import "./styles.scss";
import { Button } from "../../../shared/UI/Button";
import { modalStore } from "../../../app/store/modalStore";
import { observer } from "mobx-react-lite";

interface props {
  displayName: string;
  username: string;
  bio: string;
}

function UserCard({ username, bio, displayName }: props) {
  const handle = () => {
    modalStore.run("пока недоступно");
  };

  return (
    <div>
      <div className="c ttb">
        <div className="b1">
          <div className="ava"></div>

          <div>
            <div className="displayName">{displayName}</div>
            <div className="username">@{username}</div>
          </div>
        </div>

        <div className="actions"></div>

        <div className="description">
          <p>описания:</p>

          <div className="text">{bio}</div>
        </div>

        <Button onClick={handle} label="подписаться" />
      </div>
    </div>
  );
}

export default observer(UserCard);
