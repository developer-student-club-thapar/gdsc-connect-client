import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import Search from "../common/Search";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import SearchButton from "../common/Button/SearchButton";
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

function navbar_main() {
  const liStyles = "pr-2 py-2";
  return (
    <>
      <div className="bg-white px-2">
        <ul className="flex flex-wrap items-center justify-between">
          <li className={liStyles}>
            <div className="flex items-center">
              <div className="pr-2">
                <FaConnectdevelop size={30} />
              </div>
              <p className="font-bold text-xl">GDSC Connect</p>
            </div>
          </li>
          <div className="flex flex-wrap items-center">
            <li className={liStyles}>
              <Search placeholder="Search">
                <AiOutlineSearch size={20} />
              </Search>
            </li>
            <li className={liStyles}>
              <Search placeholder="Add Country or City">
                <GoLocation size={20} />
              </Search>
            </li>
            <li>
              <SearchButton text="Search" />
            </li>
          </div>
          <li className=" bg-white">
            <Menu className="bg-transparent">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                colorScheme={"white"}
                // text color black
                iconColor="black"
                icon={
                  <div className="flex items-center">
                    <img
                      src="https://avatars.githubusercontent.com/u/68650149?v=4"
                      alt="profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="px-2 font-normal text-black text-sm">
                      Me
                    </span>
                    <RiArrowDropDownLine size={20} color="black" />
                  </div>
                }
                className="flex items-center justify-center outline-none "
              />
              <MenuList>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ul>
      </div>
    </>
  );
}

export default navbar_main;
