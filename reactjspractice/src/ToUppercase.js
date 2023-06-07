import React from "react";
import { useState } from "react";

const ToUppercase = () => {
  const [value1, setValue1] = useState("");
  const handleChange = (e) => {
    let text = e.target.value;
    setValue1(text.toUpperCase());
  };

  return (
    <div>
      <input
        type="text"
        className=" border-cyan-600 border-2"
        id="inputId"
        onChange={handleChange}
      />
      <div className=" h-2">{value1}</div>
    </div>
  );
};

export default ToUppercase;
