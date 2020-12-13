import React from "react";
import TodoItem from "./TodoItem";
import { AppContext } from "../Context/AppContext";

function TodoList(props) {
  return (
    <AppContext.Consumer>
      {({ todo, removeTodo, toggleTask, updateTask, activeTheme }) => {
        return (
          <div>
            <div> Todo list </div>
            <div>
              {todo
                ?.filter((item) => !item.status)
                .map((item) => (
                  <TodoItem
                    key={item.id}
                    onToggle={toggleTask}
                    onRemove={removeTodo}
                    item={item}
                    style={activeTheme}
                    update={updateTask}
                  />
                ))}
            </div>
            <br />
            <div> Completed </div>
            <div>
              {todo
                ?.filter((item) => item.status)
                .map((item) => (
                  <TodoItem
                    key={item.id}
                    onToggle={toggleTask}
                    onRemove={removeTodo}
                    item={item}
                  />
                ))}
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default TodoList;
