import { userStore } from "../../app/store/user/userStore";
import { Button } from "../../shared/UI/Button";
import { handleCopyLinkPost, handleDeletePost } from "./handlers";

interface props {
  isClosingMenu: boolean;
  postId: number;
  ownerUsername: string;
}

export function MenuPost({ ...props }: props) {
  return (
    <div className={`menu tr3 ${props.isClosingMenu ? "fo btt" : "fn"}`}>
      <Button label="пожаловаться" className="el menuEl tr" />

      <Button
        onClick={() => handleCopyLinkPost(props.postId)}
        label="скопировать ссылку"
        className="el tr menuEl"
      />

      {props.ownerUsername == userStore.dataMap.username && (
        <Button
          onClick={() => handleDeletePost(props.postId)}
          label="удалить"
          className="el tr menuEl"
        />
      )}
    </div>
  );
}
