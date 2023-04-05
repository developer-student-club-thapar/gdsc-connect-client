import React from "react";
import { Input } from "@chakra-ui/react";

function InputField({ placeholder, type }) {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        size="lg"
        variant="filled"
        bg="white"
      />
    </div>
  );
}

export default InputField;
