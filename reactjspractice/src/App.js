import React from "react";
import { useState } from "react";
import Draggable from "./Draggable";

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
      <Draggable />
    </div>
  );
};

export default App;
