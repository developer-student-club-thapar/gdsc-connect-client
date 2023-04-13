import { Divider, Input } from "@chakra-ui/react";
import React from "react";

function Socials() {
  const bordercl = "black"; // border color
  return (
    <>
      <div>
        <p className="font-semibold text-3xl">Socials</p>
        <p className="font py-2">Update your socials from here</p>
        <Divider />
        <div className="flex justify-between py-5 items-center">
          <p>LinkedIn</p>
          <Input width="30em" borderColor={bordercl} />
        </div>
        <Divider />
        <div className="flex justify-between py-5 items-center">
          <p>Twitter</p>
          <Input width="30em" borderColor={bordercl} />
        </div>
        <Divider />
        <div className="flex justify-between py-5 items-center">
          <p>Github</p>
          <Input width="30em" borderColor={bordercl} />
        </div>
        <Divider />
        <div className="flex justify-between py-5 items-center">
          <p>Facebook</p>
          <Input width="30em" borderColor={bordercl} />
        </div>
        <Divider />
        <div className="flex justify-between py-5 items-center">
          <p>Instagram</p>
          <Input width="30em" borderColor={bordercl} />
        </div>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
      </div>
    </>
  );
}

export default Socials;
