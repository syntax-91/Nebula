import { GoChevronRight } from "react-icons/go";
import "./styles.scss";
import { CgProfile } from "react-icons/cg";
import { MdOutlineBugReport, MdOutlinePassword } from "react-icons/md";
import {
  handleAbout,
  handleChangePsw,
  handleClickSettingsListEl,
} from "./handlers";
import type { ReactNode, SetStateAction } from "react";
import { ChangePsw } from "./elements/changePsw";
import { SettingsListEl } from "./settingsListEl";
import { About } from "./elements/about";
import { FcAbout } from "react-icons/fc";
import { ReportABug } from "./elements/reportAbug";

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
          handleClickSettingsListEl({
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
          handleClickSettingsListEl({
            setIsOpenSettingsBlock: props.setIsOpenSettingsBlock,
            setSettingsBlockChildren: props.setSettingsBlockChildren,
            settingsBlockChildren: <ChangePsw />,
          })
        }
        label="сменить пароль"
        icon={<MdOutlinePassword size={30} />}
      />

      <SettingsListEl
        onClick={() =>
          handleClickSettingsListEl({
            setIsOpenSettingsBlock: props.setIsOpenSettingsBlock,
            setSettingsBlockChildren: props.setSettingsBlockChildren,
            settingsBlockChildren: <ReportABug />,
          })
        }
        label="сообщить о баге"
        icon={<MdOutlineBugReport size={30} />}
      />
    </div>
  );
}
