import React from "react";

function SearchButton({ text, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-8 py-2 rounded-lg hover:bg-blue-600"
      >
        {text}
      </button>
    </>
  );
}

export default SearchButton;
