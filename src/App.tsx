import React, { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

  const Home = () => <h2>Главная</h2>;
  const About = () => <h2>Контакты</h2>;
  const Users = () => <h2>Пользователи</h2>;

  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/about">Контакты</Link>
              </li>
              <li>
                <Link to="/users">Пользователи</Link>
              </li>
            </ul>
          </nav>
        </header>
        {list}
        <button
          onClick={() => {
            let res = [...dataBase, billy];
            setDataBase(res);
          }}
        >
          action
        </button>
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
