import { modalStore } from "../../../app/store/modalStore";
import { Modal } from "../../../components/modal/modal";
import { observer } from "mobx-react-lite";
import RegisterForm from "../../../feature/Auth/Register/RegForm";

function RegisterPage() {
  return (
    <div className="mc">
      {modalStore.isOpenModal && <Modal />}
      <RegisterForm />
    </div>
  );
}

export default observer(RegisterPage);
