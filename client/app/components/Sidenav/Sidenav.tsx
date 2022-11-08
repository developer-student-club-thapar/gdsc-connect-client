import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import SidenavItem from "./SidenavItem";

const sidenavItems: any[] = [
  {
    name: "Home",
    icon: <AiOutlineHome />,
    selectedIcon: <AiFillHome />,
    path: "/home",
  },
  {
    name: "Explore",
    icon: <RiSearchLine />,
    selectedIcon: <RiSearchFill />,
    path: "/explore",
  },
];

const Sidenav: React.FC = () => {
  return (
    <div className="flex flex-col pl-16 pr-8 border-r-2 border-gray-50 py-8 items-start justify-start h-full">
      {sidenavItems.map((item, index) => (
        <SidenavItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Sidenav;
