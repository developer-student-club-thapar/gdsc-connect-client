import { Outlet } from "@remix-run/react";
import React from "react";
import NavbarMain from "../components/Navbar/navbar_main";

function home() {
  return (
    <>
      <div className="h-screen w-screen bg-[#f9f9f9] overflow-scroll">
        <NavbarMain />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default home;
