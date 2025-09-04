import { RightBar } from "../../Widgets/rightBar/rightBar";
import SideBar from "../../Widgets/sideBar/sideBar";
import "./style.scss";
import { Outlet } from "react-router-dom";
import { Modal } from "../../components/modal/modal";
import { modalStore } from "../../app/store/modalStore";
import { useMediaQuery } from "react-responsive";
import MenuPhone from "../../components/menuPhone/menuPhone";
import { useEffect } from "react";
import { userStore } from "../../app/store/user/userStore";

export default function HomePage() {
  const isM = useMediaQuery({ maxWidth: 750 });

  useEffect(() => {
    if (userStore.isAuth && userStore.isSession !== true) {
      userStore.FetchSession();
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
