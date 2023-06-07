import React from "react";
import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState([100, 100, 0]);
  const styles = {
    backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
  };
  const handleclickr = (e) => {
    e.preventDefault();
    setColor([Math.floor(Math.random() * 250) + 5, 0, 0]);
  };
  const handleclickb = (e) => {
    e.preventDefault();
    setColor([0, Math.floor(Math.random() * 250) + 5, 0]);
  };
  const handleclickg = (e) => {
    e.preventDefault();
    setColor([0, 0, Math.floor(Math.random() * 250) + 5]);
  };
  return (
    <div>
      <div className="flex flex-row justify-center">
        <div className="w-20 h-20 bg-red-500" onClick={handleclickr}>
          Red
        </div>
        <div className="w-20 h-20 bg-green-500" onClick={handleclickb}>
          Blue
        </div>
        <div className="w-20 h-20 bg-blue-500" onClick={handleclickg}>
          Green
        </div>
        <div style={styles}>The Effect</div>
      </div>
    </div>
  );
};

export default ColorPicker;
