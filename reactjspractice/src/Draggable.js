import React from "react";
import { useState } from "react";
import Trash from "./Trash";
import trashcanimg from "./trashcan.png";
const Draggable = () => {
  const tasks = {
    state: false,
    info: [
      {
        id: 1,
        name: "Task 1",
        category: "wip",
        bgcolor: "yellow",
      },
      {
        id: 2,
        name: "Task 2",
        category: "wip",
        bgcolor: "pink",
      },
      {
        id: 3,
        name: "Task 3",
        category: "yes",
        bgcolor: "red",
      },
      {
        id: 4,
        name: "Task 4",
        category: "complete",
        bgcolor: "skyblue",
      },
    ],
  };
  const [items, setItems] = useState(tasks.info);
  return (
    <div>
      <h1>Draggable</h1>
      <div className="grid grid-flow-col w-[100%] gap-16 p-9 ">
        {items.map((item) => (
          <Trash key={item.id} item={item} />
        ))}
      </div>
      <div>
        <img
          src={trashcanimg}
          alt="trashcan"
          className=" w-32 h-32"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            console.log(e.dataTransfer);
            setItems(
              items.filter((item) => {
                return item.id !== parseInt(e.dataTransfer.getData("id"));
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default Draggable;
