import { Divider, Input } from "@chakra-ui/react";
import React from "react";

function PasswordChange() {
  return (
    <>
      <div>
        <p className="font-semibold text-3xl">Password</p>
        <p className="font py-2">
          Please enter your current password to change your password
        </p>
        <Divider />
        <div className="flex justify-between py-5">
          <p>Current Password</p>
          <Input width="30em" type="password" />
        </div>
        <Divider />
        <div className="flex justify-between py-5">
          <p>New Password</p>
          <Input width="30em" type="password" />
        </div>
        <Divider />
        <div className="flex justify-between py-5">
          <p>Confirm New Password</p>
          <Input width="30em" type="password" />
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

export default PasswordChange;
