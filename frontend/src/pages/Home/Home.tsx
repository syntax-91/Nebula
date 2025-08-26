import { RightBar } from "../../components/rightBar/rightBar";
import SideBar from "../../components/sideBar/sideBar";
import "./style.scss";
import { userStore } from "../../app/store/user/userStore";
import { Outlet, useNavigate } from "react-router-dom";
import { Modal } from "../../components/modal/modal";
import { modalStore } from "../../app/store/modalStore";
import { useMediaQuery } from "react-responsive";
import MenuPhone from "../../components/menuPhone/menuPhone";
import { useEffect } from "react";

export default function HomePage() {
  const isM = useMediaQuery({ maxWidth: 750 });
  const n = useNavigate();

  useEffect(() => {
    if (userStore.isSession !== true && userStore.isAuth == true) {
      n("/session");
    }
  }, []);

  return (
    <div className="layOut">
      <div className="Home">
        {!isM && <SideBar />}
        <div className="outlet">
          <Outlet />
        </div>
        {isM && <MenuPhone />}
        {!isM && <RightBar />}
      </div>

      {modalStore.isOpenModal && <Modal />}
    </div>
  );
}
