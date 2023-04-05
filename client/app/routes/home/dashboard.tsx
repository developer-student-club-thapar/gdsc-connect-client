import React from "react";
import ProfileCard from "../../components/ProfileCard/profilecard";
import Filter from "../../components/Filters/filters";

function dashboard() {
  return (
    <>
      <div className="flex flex-col w-[22%] flex-wrap">
        <div>
          <ProfileCard />
        </div>
        <div className="pt-4">
          <Filter />
        </div>
      </div>
    </>
  );
}

export default dashboard;
