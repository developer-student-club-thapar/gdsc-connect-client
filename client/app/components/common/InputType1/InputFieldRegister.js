import React from "react";

function InputFieldRegister({ text }) {
  return (
    <div className="bg-[#f2f6fc] rounded-3xl px-4 py-3 ">
      <p className="text-black pl-2 text-sm capitalize">{text}</p>
      <input className="bg-[#f2f6fc] outline-none active:outline-none text-black pl-2 w-[30em] font-semibold text-sm" />
    </div>
  );
}

export default InputFieldRegister;
