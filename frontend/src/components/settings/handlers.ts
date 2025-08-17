import type { ReactNode, SetStateAction } from "react";

interface IChangePsw {
  setIsOpenSettingsBlock: (e: SetStateAction<boolean>) => void;
  setSettingsBlockChildren: (e: SetStateAction<ReactNode>) => void;
  settingsBlockChildren: ReactNode;
}

export function handleChangePsw({
  setIsOpenSettingsBlock,
  settingsBlockChildren,
  setSettingsBlockChildren,
}: IChangePsw) {
  setIsOpenSettingsBlock(true);
  setSettingsBlockChildren(settingsBlockChildren);
}
