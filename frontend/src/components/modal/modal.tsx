import { modalStore } from "../../app/store/modalStore";
import { Button } from "../../shared/UI/Button";
import "./styles.scss";

export function Modal() {
  const handleClose = () => {
    modalStore.close();
  };

  return (
    <div className="modalC">
      <div className="modal up">
        <div>{modalStore.msg}</div>

        <Button className="closeEl" onClick={handleClose} label="закрыть" />
      </div>
    </div>
  );
}
