import React from "react";
import { GoLocation } from "react-icons/go";
import { FaSuitcase } from "react-icons/fa";
import { BsFolderFill, BsDot } from "react-icons/bs";

function DetailedCard() {
  // glowing dot
  const glowingDotStyle = "text-blue-500";
  const iconSource =
    "https://www.vhv.rs/dpng/d/598-5982089_icon-blue-company-icon-png-transparent-png.png";
  return (
    <>
      <div>
        <div className="w-screen pb-4">
          <img
            src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?cs=srgb&dl=pexels-tobi-620337.jpg&fm=jpg"
            alt="scenery"
            className="w-full h-56 object-cover"
          />
          <div className="flex">
            <div className="pl-10 pr-5 pt-6 w-[65%]">
              <div className="flex items-center">
                {/* google logo */}
                <div className="border-solid rounded-full">
                  <img src={iconSource} alt="google" className="w-6 h-6" />
                </div>
                <div className="flex flex-col ml-2">
                  <div className=" font-semibold">Google</div>
                </div>
              </div>
              <div className="font-semibold text-gray-500 pt-10">
                We're looking for a ...
              </div>
              <div className="pt-2">
                <p className="font-bold text-3xl">UI/UX Designer (m/f/d)</p>
              </div>
              <div className="flex items-center pt-6">
                <div className="flex items-center">
                  <GoLocation className="text-gray-500" />
                  <div className="text-gray-500 text-sm font-semibold pl-2">
                    Berlin, Germany
                  </div>
                </div>
                <div className="flex items-center pl-10">
                  <FaSuitcase className="text-gray-500" />
                  <div className="text-gray-500 text-sm font-semibold pl-2">
                    Employee
                  </div>
                </div>
                <div className="flex items-center pl-10">
                  <BsFolderFill className="text-gray-500" />
                  <div className="text-gray-500 text-sm font-semibold pl-2">
                    IT & Development
                  </div>
                </div>
              </div>
              <div className="pt-10">
                {/* loreum ipsum */}
                <p className=" text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl
                </p>
                <p className=" text-gray-500 pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae.
                </p>
                {/* straight line */}
                <div className="border-b-2 border-gray-300 pt-10"></div>

                <h1 className="pt-10 font-bold">Job Description</h1>
                <p className=" text-gray-500 pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae nisl luctus aliquam.
                  Sed vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam. Sed vitae nisl vitae. nisl luctus
                  aliquam. Sed vitae nisl vitae nisl luctus aliquam. Sed vitae
                  nisl vitae nisl luctus aliquam. Sed vitae nisl vitae.
                </p>
                <p className=" text-gray-500 pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  vitae nisl vitae nisl luctus aliquam. Sed vitae nisl vitae
                  nisl luctus aliquam.
                </p>
                <div className="border-b-2 border-gray-300 pt-10"></div>

                <h1 className="pt-10 font-bold">Responsibilities</h1>
                <p className=" text-gray-500 pt-5 flex items-center">
                  <BsDot size={20} className={glowingDotStyle} />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
                <p className=" text-gray-500 pt-5 flex items-center">
                  <BsDot size={20} className={glowingDotStyle} />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
                <p className=" text-gray-500 pt-5 flex items-center">
                  <BsDot size={20} className={glowingDotStyle} />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
                <p className=" text-gray-500 pt-5 flex items-center">
                  <BsDot size={20} className={glowingDotStyle} />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
                <p className=" text-gray-500 pt-5 flex items-center">
                  <BsDot size={20} className={glowingDotStyle} />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
              </div>
            </div>
            <div className="w-[45%] pl-5 pr-10 pt-6">test</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailedCard;
