import { observer } from "mobx-react-lite";
import { modalStore } from "../../app/store/modalStore";
import { Modal } from "../modal/modal";
import { AddPost } from "../post/addPost";
import Posts from "../post/posts";
import "./styles.scss";
import { userStore } from "../../app/store/user/userStore";

function Main() {
  return (
    <main className="main up">
      <h3>{userStore.isAuth}</h3>
      <AddPost />
      <Posts />
      {modalStore.isOpenModal && <Modal />}
    </main>
  );
}

export default observer(Main);
