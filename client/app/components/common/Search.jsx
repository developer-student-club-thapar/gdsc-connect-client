import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ placeholder, children }) {
  return (
    <div className="border-solid border-[1px] border-gray-500 rounded-lg">
      <div className="flex items-center p-2 ">
        <div className="pr-2">{children}</div>
        <input
          type="text"
          placeholder={placeholder}
          className="outline-none text-sm font-semibold w-[15em]"
        />
      </div>
    </div>
  );
}

export default Search;
