import "./styles.scss";
import { CgProfile } from "react-icons/cg";
import {
  MdDashboard,
  MdOutlineBugReport,
  MdOutlinePassword,
} from "react-icons/md";
import type { ReactNode, SetStateAction } from "react";
import { ChangePsw } from "./elements/changePsw";
import { SettingsListEl } from "./settingsListEl";
import { About } from "./elements/about";
import { FcAbout } from "react-icons/fc";
import { ReportABug } from "./elements/reportAbug";
import PostSettings from "./elements/postSettings";
import { BsFillPostcardFill } from "react-icons/bs";
import MyProfile from "./elements/myProfile";
import { FaUser, FaUserCircle } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import CustomUI from "./elements/customUI";
import { userStore } from "../../app/store/user/userStore";

interface props {
  setIsOpenSettingsBlock: (e: SetStateAction<boolean>) => void;
  setSettingsBlockChildren: (e: SetStateAction<ReactNode>) => void;
}

interface IB {
  settingsBlockChildren: ReactNode;
}

export default function SettingsList({ ...props }: props) {
  ///////
  const handleClickSettingsListEl = ({ settingsBlockChildren }: IB) => {
    props.setIsOpenSettingsBlock(true);
    props.setSettingsBlockChildren(settingsBlockChildren);
  };

  return (
    <div className="settingsList">
      {userStore.isAuth && (
        <SettingsListEl
          onClick={() =>
            handleClickSettingsListEl({
              settingsBlockChildren: <MyProfile />,
            })
          }
          icon={<ImProfile size={20} />}
          label="мои профиль"
        />
      )}

      <SettingsListEl
        onClick={() =>
          handleClickSettingsListEl({
            settingsBlockChildren: <CustomUI />,
          })
        }
        icon={<MdDashboard size={20} />}
        label="кастомизация"
      />

      <SettingsListEl
        onClick={() =>
          handleClickSettingsListEl({
            settingsBlockChildren: <About />,
          })
        }
        icon={<FcAbout size={20} />}
        label="о проекте"
      />

      {userStore.isAuth && (
        <SettingsListEl
          onClick={() =>
            handleClickSettingsListEl({
              settingsBlockChildren: <ChangePsw />,
            })
          }
          label="сменить пароль"
          icon={<MdOutlinePassword size={20} />}
        />
      )}

      {userStore.isAuth && (
        <SettingsListEl
          onClick={() =>
            handleClickSettingsListEl({
              settingsBlockChildren: <ReportABug />,
            })
          }
          label="сообщить о баге"
          icon={<MdOutlineBugReport size={20} />}
        />
      )}

      <SettingsListEl
        onClick={() =>
          handleClickSettingsListEl({
            settingsBlockChildren: <PostSettings />,
          })
        }
        label="посты"
        icon={<BsFillPostcardFill size={20} />}
      />
    </div>
  );
}
