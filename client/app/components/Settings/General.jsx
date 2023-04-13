import { Divider, Input, Textarea } from "@chakra-ui/react";
import React from "react";

function General() {
  const bordercl = "black"; // border color
  return (
    <>
      <div>
        <p className="font-semibold text-3xl">My Details</p>
        <p className="font py-2">Update your profile information</p>
        <Divider />
        <div className="flex justify-between py-5 items-center">
          <p>First Name</p>
          <Input
            width="30em"
            type="text"
            colorScheme="black"
            borderColor={bordercl}
          />
        </div>
        <Divider />
        <div className="flex justify-between py-5 items-center">
          <p>Last Name</p>
          <Input width="30em" type="text" borderColor={bordercl} />
        </div>
      </div>
      <Divider />
      <div className="flex justify-between py-5 items-center">
        <p>Bio</p>
        <Textarea width="30em" borderColor={bordercl} />
      </div>
      <Divider />
      <div className="flex justify-between py-5 items-center">
        <p>Resume</p>
        <Input width="30em" type="text" borderColor={bordercl} />
      </div>
      <Divider />
      <div className="flex justify-between py-5 items-center">
        <p>Gender</p>
        {/* radio buttons with male and female */}
        <div className="flex justify-evenly ">
          <div className="flex items-center">
            <label className="text-black pl-2 text-sm capitalize pr-2">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              className="bg-[#f2f6fc] outline-none active:outline-none text-black  font-semibold text-sm"
            />
          </div>
          <div className="flex items-center">
            <label className="text-black pl-2 text-sm capitalize pr-2">
              Female
            </label>
            <input
              type="radio"
              name="gender"
              className="bg-[#f2f6fc] outline-none active:outline-none text-black  font-semibold text-sm"
            />
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between py-5 items-center">
        <p>Graduation Year</p>
        {/* select */}
        <Input width="30em" type="number" borderColor={bordercl} />
      </div>

      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </>
  );
}

export default General;
