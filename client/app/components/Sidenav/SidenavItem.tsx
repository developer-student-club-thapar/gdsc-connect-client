import type SidenavItemType from "./types";

interface SidenavItemProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  item: SidenavItemType;
}

const SidenavItem: React.FC<SidenavItemProps> = ({ item }) => {
  return (
    <div className="flex flex-row items-center justify-center p-4 rounded-full hover:bg-slate-400 hover:bg-opacity-20">
      <div className="mr-4">{item.icon}</div>
      <div>{item.name}</div>
    </div>
  );
};

export default SidenavItem;
