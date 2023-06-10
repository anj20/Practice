import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState(["hi", "hello"]);
  const handleClick = (e) => {
    e.preventDefault();
    setList([...list, "new item"]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input className="border-2 border-slate-800" type="text" />
      <button className=" bg-slate-400 text-center w-14" onClick={handleClick}>
        Add
      </button>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default TodoList;
