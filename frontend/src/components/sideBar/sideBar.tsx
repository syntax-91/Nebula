import { GoHome, GoHomeFill } from "react-icons/go";
import { CiLogout, CiSearch, CiSettings } from "react-icons/ci";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { logOutU } from "../../shared/utils/logout";
import { IoSearchCircle } from "react-icons/io5";
import { userStore } from "../../app/store/user/userStore";
import { SiAuthelia } from "react-icons/si";
import { observer } from "mobx-react-lite";

function SideBar() {
  const n = useNavigate();
  const l = useLocation();

  const handleNavigate = (path: string) => {
    n(path);
  };

  return (
    <div className="sideBar ttb">
      <div className="menu">
        {/* Home */}
        <div onClick={() => handleNavigate("/")} className="el sideBarEl cp">
          {l.pathname == "/" ? <GoHomeFill size={30} /> : <GoHome size={30} />}
          <p>главная</p>
        </div>

        {/* Search */}
        <div
          onClick={() => handleNavigate("search")}
          className="el sideBarEl cp"
        >
          {l.pathname == "/search" ? (
            <IoSearchCircle size={30} />
          ) : (
            <CiSearch size={30} />
          )}
          <p>поиск</p>
        </div>

        {/* Noti */}
        <div onClick={() => handleNavigate("noti")} className="el sideBarEl cp">
          {l.pathname == "/noti" ? (
            <IoIosNotifications size={30} />
          ) : (
            <IoIosNotificationsOutline size={30} />
          )}
          <p>уведомления</p>
        </div>

        {/* Settings */}
        <div
          onClick={() => handleNavigate("settings")}
          className="el sideBarEl cp"
        >
          <CiSettings size={30} />
          <p>настройки</p>
        </div>

        {/* Logout */}
        {userStore.isAuth ? (
          <div onClick={() => logOutU()} className="el sideBarEl cp">
            <CiLogout size={30} />
            <p>выйти</p>
          </div>
        ) : (
          ""
        )}

        {/* Auth */}
        {!userStore.isAuth ? (
          <div
            onClick={() => handleNavigate("/login")}
            className="el sideBarEl cp"
          >
            <SiAuthelia size={30} />
            <p>вход</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default observer(SideBar);
