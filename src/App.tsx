import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
let data = require("./users.json");

interface User {
  name: string;
  age?: number;
  email: string;
  id: number;
  job?: string;
}

let billy: User = {
  name: "Billy",
  email: "billy@gmail.com",
  age: 23,
  id: 1,
  job: "cleaner",
};

export default function App() {
  const [dataBase, setDataBase] = useState(data);

  let list = dataBase.map((item: any) => {
    return <div key={nanoid()}>{item.name}</div>;
  });

  return (
    <div className="App">
      {list}
      <button
        onClick={() => {
          let res = [...dataBase, billy];
          setDataBase(res);
        }}
      >
        action
      </button>
    </div>
  );
}
