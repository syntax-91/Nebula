import { observer } from "mobx-react-lite";
import { modalStore } from "../../app/store/modalStore";
import { Modal } from "../modal/modal";
import { AddPost } from "../../feature/post/addPost";
import Posts from "../../feature/post/posts";
import "./styles.scss";
import { userStore } from "../../app/store/user/userStore";

function Main() {
  return (
    <main className="main up">
      <AddPost />
      <Posts />
      {modalStore.isOpenModal && <Modal />}
    </main>
  );
}

export default observer(Main);
