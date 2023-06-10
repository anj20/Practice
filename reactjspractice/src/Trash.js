import React from "react";

const Trash = (props) => {
  return (
    <div
      draggable
      className=" w-32 h-32 border-2"
      style={{ backgroundColor: `${props.item.bgcolor}` }}
    >
      <div>{props.item.name}</div>
      <div>{props.item.category}</div>
    </div>
  );
};

export default Trash;
