import { IoClose } from "react-icons/io5";
import { modalStore } from "../../app/store/modalStore";
import "./styles.scss";

export function Modal() {
  const handleClose = () => {
    modalStore.close();
  };

  return (
    <div className="modalC">
      <div className="modal up">
        <div>{modalStore.msg}</div>

        <IoClose
          className="closeEl rtl_r40 cp"
          onClick={handleClose}
          size={25}
        />
      </div>
    </div>
  );
}
