import React, { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
let data = require("./users.json");

export default function App() {
  useEffect(() => {
    // localStorage.clear();
    for (const it of data) {
      localStorage.setItem(
        `${it.id}`,
        JSON.stringify({ name: it.name, age: it.age, id: it.id })
      );
    }
  }, []);

  let items = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== null) {
      items.push(JSON.parse(`${localStorage.getItem(key)}`));
    }
  }

  let [dataBase, setDataBase] = useState(items);

  let list = dataBase.map((item) => {
    return <div key={nanoid()}>{item.name}</div>;
  });

  const Home = () => <h2>Главная</h2>;
  const About = () => <h2>Контакты</h2>;
  const Users = () => <h2>Пользователи</h2>;

  function handleAdd() {
    localStorage.setItem(
      `${nanoid()}`,
      JSON.stringify({ name: "name", age: 23, id: 45 })
    );
    handleShow()
  }

  function handleShow() {
    let items = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key !== null) {
        items.push(JSON.parse(`${localStorage.getItem(key)}`));
      }
    }
    setDataBase(items);
  }

  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <Link to="/">Главная</Link>
            {" | "}
            <Link to="/about">Контакты</Link>
            {" | "}
            <Link to="/users">Пользователи</Link>
          </nav>
        </header>
        {list}
        <button onClick={handleAdd}>add item</button>
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
