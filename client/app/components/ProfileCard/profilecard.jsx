import React from "react";
import { BiEdit } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";

function profilecard() {
  return (
    <>
      <div className="border-solid rounded-lg border-[2px] border-bordergray transition duration-500 ease-in-out transform hover:shadow-2xl">
        <div className="flex flex-wrap px-2 pt-2">
          <div className="ml-auto">
            <BiEdit size={20} />
          </div>
        </div>

        <div className="flex flex-col pb-2 px-5">
          <div className="flex justify-center">
            <img
              src="https://avatars.githubusercontent.com/u/68650149?v=4"
              alt="profile"
              className="w-24 h-24 rounded-full border-2 border-solid"
            />
          </div>
          <div className="text-center font-semibold pt-2">
            <p>Darshan Patel</p>
          </div>
          <div className="text-center pt-2 text-gray-500 text-sm pb-2">
            <p>Fullstack Web Developer,</p>
            <p>Upcoming Software Developer</p>
          </div>
        </div>
        <div className="border-t-bordergray hover:bg-gray-100 rounded-b-lg border-t-2 py-2">
          <div className="flex items-center justify-center">
            <IoBagOutline />
            <p className="text-sm text-gray-500 pl-2 ">Applied Jobs</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default profilecard;
