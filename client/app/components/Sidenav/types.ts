import type { ReactElement } from "react";

export default interface SidenavItemType {
  name: string;
  icon: ReactElement;
  selectedIcon: ReactElement;
  path: string;
}
