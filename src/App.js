import React from "react";
import "./styles.css";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import NavBar from "./Components/Navs/NavBar"
import HashtagView from "./Components/Hashtag"

export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <TodoInput />
      <HashtagView/>
      <TodoList />
    </div>
  );
}
