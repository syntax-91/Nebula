import "./styles.scss";
import { SessionForm } from "../../feature/Auth/Session/SessionForm";
import { modalStore } from "../../app/store/modalStore";
import { Modal } from "../../components/modal/modal";
import { observer } from "mobx-react-lite";

function SessionPage() {
  return (
    <div className="session">
      {modalStore.isOpenModal && <Modal />}
      <SessionForm />
    </div>
  );
}

export default observer(SessionPage);
