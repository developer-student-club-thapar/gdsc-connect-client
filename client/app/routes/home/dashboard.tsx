import React from "react";
import ProfileCard from "../../components/ProfileCard/profilecard";
import Filter from "../../components/Filters/filters";
import JobCard from "../../components/JobCard/jobcard";

function dashboard() {
  return (
    <>
      <div className="flex p-4">
        <div className="flex flex-col w-[20%] flex-wrap">
          <div>
            <ProfileCard />
          </div>
          <div className="pt-4">
            <Filter />
          </div>
        </div>
        <div className="w-[80%]">
          <div className="grid grid-cols-3 pl-2 ">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
