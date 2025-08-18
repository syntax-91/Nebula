import { observer } from "mobx-react-lite";
import { userStore } from "../../../app/store/user/userStore";
import { Switcher } from "../../../shared/UI/Switcher";

function PostSettings() {
  return (
    <div className="postSettings">
      <h3>посты</h3>

      <div className="viewedAnonPostsEl">
        <p>показать анонимные посты</p>
        <Switcher
          onClick={userStore.toggleIsViewedAnonPosts}
          value={userStore.isViewedAnonPosts}
        />
      </div>
    </div>
  );
}

export default observer(PostSettings);
