import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputField from "../../components/common/InputType1/InputField";
import InputFieldRegister from "../../components/common/InputType1/InputFieldRegister";

function register() {
  return (
    <>
      <div className="h-screen p-10 overflow-scroll">
        <div className=" flex items-center">
          <div className="pr-2">
            <FaConnectdevelop size={30} />
          </div>
          <p className="font-bold text-xl">GDSC Connect</p>
        </div>
        <div className="pt-[10em] pl-5">
          <p className="font-semibold text-[3em]">Register</p>
          <p className="pt-2 text-lg text-black flex">
            Already a Member?
            <div className="pl-2 text-[#4169E1] ">
              <Link to="/auth/login">
                <p>Login</p>
              </Link>
            </div>
          </p>
          <div>
            <form className="pt-5">
              <div>
                <div className="flex flex-wrap">
                  <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                    <p className="text-black pl-2 text-sm capitalize">
                      Invite Code *
                    </p>
                    <input className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[30em] font-semibold text-sm" />
                  </div>
                </div>
                {/* first name last name */}
                <div className="pt-5 flex flex-wrap">
                  <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                    <p className="text-black pl-2 text-sm capitalize">
                      First Name
                    </p>
                    <input className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[30em] font-semibold text-sm" />
                  </div>
                  <div className="pl-2">
                    <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                      <p className="text-black pl-2 text-sm capitalize">
                        Last Name
                      </p>
                      <input className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[30em] font-semibold text-sm" />
                    </div>
                  </div>
                </div>
                <div className="pt-5 flex flex-wrap">
                  <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                    <p className="text-black pl-2 text-sm capitalize">
                      Graduation Batch
                    </p>
                    <select className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[30em] font-semibold text-sm">
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                    </select>
                  </div>
                  <div className="pl-2">
                    <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                      <p className="text-black pl-2 text-sm capitalize w-[30em] ">
                        Gender
                      </p>
                      <div className="flex justify-evenly">
                        <div>
                          <label className="text-black pl-2 text-sm capitalize pr-2">
                            M
                          </label>
                          <input
                            type="radio"
                            name="gender"
                            className="bg-[#f2f6fc] outline-none active:outline-none text-black  font-semibold text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-black pl-2 text-sm capitalize pr-2">
                            F
                          </label>
                          <input
                            type="radio"
                            name="gender"
                            className="bg-[#f2f6fc] outline-none active:outline-none text-black  font-semibold text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* resume */}
                {/* <div className="pt-5 flex flex-wrap">
                  <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                    <p className="text-black pl-2 text-sm capitalize">Resume</p>
                    <input className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[63em] font-semibold text-sm" />
                  </div>
                </div> */}
                {/* bio */}
                {/* <div className="pt-5 flex flex-wrap ">
                  <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                    <p className="text-black pl-2 capitalize font-semibold pb-2">
                      Bio
                    </p>
                    <textarea className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[63em] text-sm h-[8em]" />
                  </div>
                </div> */}

                {/* email password*/}
                <div className="pt-5 flex flex-wrap">
                  <InputFieldRegister text="email" />
                  <div className="pl-2 flex">
                    <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
                      <p className="text-black pl-2 text-sm">Password</p>
                      <input
                        type="password"
                        className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[30em] font-semibold text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <Button
                  className="bg-[#4169E1] text-white rounded-3xl px-4 py-3 w-[32em] mt-5 hover:opacity-95 text-sm"
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default register;
