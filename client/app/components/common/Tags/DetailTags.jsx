import React from "react";

function DetailTags({ text }) {
  return (
    <>
      <div className="px-2 py-1 text-sm rounded-full border-solid border-[2px] border-black text-black ml-4 mb-2">
        <p>{text}</p>
      </div>
    </>
  );
}

export default DetailTags;
