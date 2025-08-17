import { GoChevronRight } from "react-icons/go";
import "./styles.scss";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePassword } from "react-icons/md";
import { handleChangePsw } from "./handlers";
import type { ReactNode, SetStateAction } from "react";
import { ChangePsw } from "./elements/changePsw";

interface props {
  setIsOpenSettingsBlock: (e: SetStateAction<boolean>) => void;
  setSettingsBlockChildren: (e: SetStateAction<ReactNode>) => void;
}

export default function SettingsList({ ...props }: props) {
  return (
    <div className="settingsList">
      {/* myProfile */}
      <div className="settingsListEl el cp">
        <div className="elIcon">
          <CgProfile size={30} />
        </div>
        <p className="label">мои профиль</p>
        <GoChevronRight className="_" />
      </div>

      {/* psw */}
      <div
        onClick={() =>
          handleChangePsw({
            setIsOpenSettingsBlock: props.setIsOpenSettingsBlock,
            setSettingsBlockChildren: props.setSettingsBlockChildren,
            settingsBlockChildren: <ChangePsw />,
          })
        }
        className="settingsListEl el cp"
      >
        <div className="elIcon">
          <MdOutlinePassword size={30} />
        </div>
        <p className="label">сменить пароль</p>
        <GoChevronRight className="_" />
      </div>
    </div>
  );
}
