import React from "react";
import { useState } from "react";
import ToUppercase from "./ToUppercase";
import ColorPicker from "./ColorPicker";
import Reminder from "./Reminder";

const App = () => {
  const questions = ["Who is the world's tallest peson?", "Dwaipayan"];
  const [count, setCount] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setCount((count + 1) % 2);
  };
  return (
    <div className=" border-b-4 border-cyan-950 h-[80vh] flex flex-col justify-center text-center">
      <div className="text-cyan-800 font-bold">ReactJS Practice</div>
      <div className="text-cyan-800 font-bold" onClick={handleClick}>
        Click me!{questions[count]}
      </div>
      <ToUppercase />
      <ColorPicker />
      <Reminder />
    </div>
  );
};

export default App;
