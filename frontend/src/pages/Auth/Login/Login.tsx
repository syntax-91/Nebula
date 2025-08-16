import "../../../shared/UI/Styles.scss";
import { modalStore } from "../../../app/store/modalStore";
import { Modal } from "../../../components/modal/modal";
import { observer } from "mobx-react-lite";
import LoginForm from "../../../feature/Auth/Login/LoginForm";

function LoginPage() {
  return (
    <div className="mc">
      {modalStore.isOpenModal && <Modal />}
      <LoginForm />
    </div>
  );
}

export default observer(LoginPage);
