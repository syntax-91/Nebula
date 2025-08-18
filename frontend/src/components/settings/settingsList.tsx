import { GoChevronRight } from "react-icons/go";
import "./styles.scss";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePassword } from "react-icons/md";
import { handleAbout, handleChangePsw } from "./handlers";
import type { ReactNode, SetStateAction } from "react";
import { ChangePsw } from "./elements/changePsw";
import { SettingsListEl } from "./settingsListEl";
import { About } from "./elements/about";
import { FcAbout } from "react-icons/fc";

interface props {
  setIsOpenSettingsBlock: (e: SetStateAction<boolean>) => void;
  setSettingsBlockChildren: (e: SetStateAction<ReactNode>) => void;
}

export default function SettingsList({ ...props }: props) {
  return (
    <div className="settingsList">
      <SettingsListEl
        onClick={() => {}}
        icon={<CgProfile size={30} />}
        label="мои профиль"
      />

      <SettingsListEl
        onClick={() =>
          handleAbout({
            setIsOpenSettingsBlock: props.setIsOpenSettingsBlock,
            setSettingsBlockChildren: props.setSettingsBlockChildren,
            settingsBlockChildren: <About />,
          })
        }
        icon={<FcAbout size={30} />}
        label="о проекте"
      />

      <SettingsListEl
        onClick={() =>
          handleChangePsw({
            setIsOpenSettingsBlock: props.setIsOpenSettingsBlock,
            setSettingsBlockChildren: props.setSettingsBlockChildren,
            settingsBlockChildren: <ChangePsw />,
          })
        }
        label="сменить пароль"
        icon={<MdOutlinePassword size={30} />}
      />
    </div>
  );
}
