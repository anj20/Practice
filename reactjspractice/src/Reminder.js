import React from "react";
import { useState } from "react";
const Reminder = () => {
  const remider = [
    { task: "Task 1", time: "10:00", date: "10/10/2021", cookie: "cookie1" },
    { task: "Task 2", time: "10:00", date: "10/10/2021", cookie: "cookie2" },
    { task: "Task 3", time: "10:00", date: "10/10/2021", cookie: "cookie3" },
    { task: "Task 4", time: "10:00", date: "10/10/2021", cookie: "cookie4" },
    { task: "Task 5", time: "10:00", date: "10/10/2021", cookie: "cookie5" },
    { task: "Task 6", time: "10:00", date: "10/10/2021", cookie: "cookie6" },
  ];
  const [reminder2, setReminder2] = useState([]);
  function handleClick(idx) {
    return () => {
      setReminder2(reminder2.filter((item, index) => index !== idx));
    };
  }
  const handClick2 = () => {
    setReminder2(remider);
  };

  return (
    <div>
      <div className="grid grid-flow-col h-full w-full ">
        {reminder2.length === 0 ? (
          <h1 onClick={handClick2}>yes</h1>
        ) : (
          reminder2.map((item, idx) => (
            <div
              className="w-20 bg-red-500 border-b-2 border-cyan-800"
              key={item.cookie}
            >
              {item.task} {item.time} {item.date}
              <button
                className=" bg-yellow-600 text-black"
                onClick={handleClick(idx)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reminder;
