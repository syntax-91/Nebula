import { useLocation, useNavigate } from "react-router-dom";
import "./styles.scss";
import { GoHome, GoHomeFill } from "react-icons/go";
import { CiLogout, CiSearch, CiSettings } from "react-icons/ci";
import { IoIosNotifications, IoIosNotificationsOutline } from "react-icons/io";
import { logOutU } from "../../shared/utils/logout";
import { IoSearchCircle } from "react-icons/io5";

export default function MenuPhone() {
  const n = useNavigate();
  const l = useLocation();

  const handleNavigate = (path: string) => {
    n(path);
  };

  return (
    <div className="menuPhone">
      {/* Home */}
      <div onClick={() => handleNavigate("/")} className="el cp">
        {l.pathname == "/" ? <GoHomeFill size={30} /> : <GoHome size={30} />}
      </div>

      {/* Search */}
      <div onClick={() => handleNavigate("search")} className="el cp">
        {l.pathname == "/search" ? (
          <IoSearchCircle size={30} />
        ) : (
          <CiSearch size={30} />
        )}
      </div>

      {/* Noti */}
      <div onClick={() => handleNavigate("noti")} className="el cp">
        {l.pathname == "/noti" ? (
          <IoIosNotifications size={30} />
        ) : (
          <IoIosNotificationsOutline size={30} />
        )}
      </div>

      {/* Settings */}
      <div onClick={() => handleNavigate("settings")} className="el cp">
        <CiSettings size={30} />
      </div>

      {/* Logout */}
      <div onClick={() => logOutU(n)} className="el cp">
        <CiLogout size={30} />
      </div>
    </div>
  );
}
