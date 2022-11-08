import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import {
  BsBookmark,
  BsBookmarkFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";
import { SiGoogleads } from "react-icons/si";
import SidenavItem from "./SidenavItem";
import SidenavItemType from "./types";

const sidenavItems: SidenavItemType[] = [
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
  {
    name: "Saved",
    icon: <BsBookmark />,
    selectedIcon: <BsBookmarkFill />,
    path: "/saved",
  },
  {
    name: "Profile",
    icon: <BsPerson />,
    selectedIcon: <BsPersonFill />,
    path: "/profile",
  },
];

const Sidenav: React.FC = () => {
  return (
    <div className="flex flex-col w-1/4 pl-24 pr-8 border-r border-gray-600 py-8 items-start justify-start h-full">
      <div className="p-4 pt-0 flex flex-row mb-3">
        <SiGoogleads className="text-3xl -rotate-90 mr-2" />
        <SiGoogleads className="text-3xl rotate-90" />
      </div>
      {sidenavItems.map((item, index) => (
        <SidenavItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Sidenav;
