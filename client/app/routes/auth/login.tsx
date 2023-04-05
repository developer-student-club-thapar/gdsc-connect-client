import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputField from "../../components/common/InputType1/InputField";

function login() {
  return (
    <>
      <div className="h-screen p-10 ">
        <div className=" flex items-center">
          <div className="pr-2">
            <FaConnectdevelop size={30} />
          </div>
          <p className="font-bold text-xl">GDSC Connect</p>
        </div>
        <div className="pt-[10em] pl-5">
          <p className="font-semibold text-[3em]">Login</p>
          <p className="pt-2 text-lg text-black flex">
            Not a member ?
            <div className="pl-2 text-[#4169E1] ">
              <Link to="/auth/register">
                <p>Register</p>
              </Link>
            </div>
          </p>
          <div>
            <form className="pt-5">
              <div>
                <div className="flex">
                  <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                    <p className="text-black pl-2 text-sm">Email</p>
                    <input className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[30em] font-semibold text-sm" />
                  </div>
                </div>
                <div className="pt-5 flex">
                  <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                    <p className="text-black pl-2 text-sm">Password</p>
                    <input
                      type="password"
                      className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[30em] font-semibold text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <Button
                  className="bg-[#4169E1] text-white rounded-3xl px-4 py-3 w-[32em] mt-5 hover:opacity-95 text-sm"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
