import { useState, type ReactNode } from "react";
import SettingsList from "../../components/settings/settingsList";
import { HeaderPage } from "../../Widgets/HeaderPage/HeaderPage";
import SettingsBlock from "../../components/settings/SettingsBlock";

export default function SettingsPage() {
  const [isOpenSettingsBlock, setIsOpenSettingsBlock] = useState(false);
  const [settingsBlockChildren, setSettingsBlockChildren] =
    useState<ReactNode>();

  return (
    <div>
      <HeaderPage isBack={true} ch={<h2>Settings</h2>} />
      <SettingsList
        setIsOpenSettingsBlock={setIsOpenSettingsBlock}
        setSettingsBlockChildren={setSettingsBlockChildren}
      />
      {isOpenSettingsBlock == true && (
        <SettingsBlock
          ch={settingsBlockChildren}
          setIsOpen={setIsOpenSettingsBlock}
        />
      )}
    </div>
  );
}
