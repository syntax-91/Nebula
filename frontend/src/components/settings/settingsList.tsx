import "./styles.scss";
import { CgProfile } from "react-icons/cg";
import { MdOutlineBugReport, MdOutlinePassword } from "react-icons/md";
import type { ReactNode, SetStateAction } from "react";
import { ChangePsw } from "./elements/changePsw";
import { SettingsListEl } from "./settingsListEl";
import { About } from "./elements/about";
import { FcAbout } from "react-icons/fc";
import { ReportABug } from "./elements/reportAbug";
import { PostSettings } from "./elements/post";
import { BsFillPostcardFill } from "react-icons/bs";

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
      <SettingsListEl
        onClick={() => {}}
        icon={<CgProfile size={30} />}
        label="мои профиль"
      />

      <SettingsListEl
        onClick={() =>
          handleClickSettingsListEl({
            settingsBlockChildren: <About />,
          })
        }
        icon={<FcAbout size={30} />}
        label="о проекте"
      />

      <SettingsListEl
        onClick={() =>
          handleClickSettingsListEl({
            settingsBlockChildren: <ChangePsw />,
          })
        }
        label="сменить пароль"
        icon={<MdOutlinePassword size={30} />}
      />

      <SettingsListEl
        onClick={() =>
          handleClickSettingsListEl({
            settingsBlockChildren: <ReportABug />,
          })
        }
        label="сообщить о баге"
        icon={<MdOutlineBugReport size={30} />}
      />

      <SettingsListEl
        onClick={() =>
          handleClickSettingsListEl({
            settingsBlockChildren: <PostSettings />,
          })
        }
        label="посты"
        icon={<BsFillPostcardFill size={30} />}
      />
    </div>
  );
}
