import { Outlet } from "@remix-run/react";
import React from "react";
import NavbarMain from "../components/Navbar/navbar_main";

function home() {
  return (
    <>
      <div className="h-screen bg-[#f9f9f9]">
        <NavbarMain />
        <div className="p-4 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default home;
