import React from "react";

function ContactCard() {
  return (
    <>
      <div className="bg-bordergray rounded-lg p-4 m-4">
        <p className="text-sm font-semibold pb-4">Interested in this job? </p>
        <div className="flex  rounded-lg border-2 border-gray-500 border-solid p-2">
          <img
            src="https://avatars.githubusercontent.com/u/68650149?v=4"
            alt="profile"
            className="w-14 h-14 rounded-full border-2 border-solid"
          />
          <div className="flex flex-col pl-2">
            <p className="font-semibold text-sm uppercase text-gray-500">
              contact person
            </p>
            <p className="font-semibold text-sm">Darshan Patel</p>
            <p className="text-sm text-gray-500">CTO</p>
          </div>
        </div>
        <p className="font-semibold text-sm text-gray-500 pt-4">
          Phone: +9134567890
        </p>
        <p className="font-semibold text-sm text-gray-500 pt-4">
          Email: test@gmail.com
        </p>
        <div>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mt-4 hover:bg-blue-600">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactCard;
