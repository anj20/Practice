import React from "react";
import { useState } from "react";
const Apifetch = () => {
  const [data, setData] = useState([]);
  //   fetch("https://randomuser.me/api/?result=10")
  //     .then((response) => response.json())
  //     .then((data) => data.results.map((user) => user.name.first))
  //     .then((data) => setData(data));
  return (
    <div>
      <h1>API Fetch</h1>
      {data}
    </div>
  );
};

export default Apifetch;
