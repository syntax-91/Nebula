import { observer } from "mobx-react-lite";
import { userStore } from "../../../app/store/user/userStore";
import { Switcher } from "../../../shared/UI/Switcher";

function CustomUI() {
  // isBlockBackground
  const handleIsBB = () => {
    userStore.toggleIsBlockBackground();
  };

  return (
    <div className="custom">
      <h2>кастомизация</h2>

      {/* block background */}
      <div className="customEl" onClick={handleIsBB}>
        <p>фон для блоков</p>
        <Switcher value={userStore.isBlockBackground} />
      </div>
    </div>
  );
}

export default observer(CustomUI);
