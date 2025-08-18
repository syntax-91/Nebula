import type { ReactNode, SetStateAction } from "react";

interface IB {
  setIsOpenSettingsBlock: (e: SetStateAction<boolean>) => void;
  setSettingsBlockChildren: (e: SetStateAction<ReactNode>) => void;
  settingsBlockChildren: ReactNode;
}

export function handleChangePsw({ ...props }: IB) {
  props.setIsOpenSettingsBlock(true);
  props.setSettingsBlockChildren(props.settingsBlockChildren);
}

export function handleAbout({ ...props }: IB) {
  props.setIsOpenSettingsBlock(true);
  props.setSettingsBlockChildren(props.settingsBlockChildren);
}
