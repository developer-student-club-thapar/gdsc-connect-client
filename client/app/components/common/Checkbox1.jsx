import React from "react";
import { Checkbox } from "@chakra-ui/react";

function Checkbox1({ text, defaultChecked }) {
  return (
    <>
      <div className="py-1">
        <Checkbox defaultChecked={defaultChecked || false}>
          <p className="text-sm font-semibold text-gray-400">{text}</p>
        </Checkbox>
      </div>
    </>
  );
}

export default Checkbox1;
