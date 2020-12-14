import React from "react";
import { v4 as uuid } from "uuid";

export const AppContext = React.createContext();
class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    var data1 = localStorage.getItem("todolist")
    this.state = {
      todo: JSON.parse(data1) || [],
      hashtag: [],
      set: []
    };
  }

  updateTodo = todo => {
    this.setState({ todo });
  };

  updateLocalStorage = todoList => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  };

  // add todo list
  addTodo = (title, hashtag) => {
    let item = {
      title,
      id: uuid(),
      status: false,
      hashtag: hashtag
    };
    this.setState({
      todo: [...this.state.todo, item]
    });
    var data = [...this.state.todo, item]
    localStorage.setItem("todolist", JSON.stringify(data))

  };

  // delete the selective todo list
  removeTodo = (id) => {
    let newData = this.state.todo.filter((item) => item.id !== id);
    this.updateLocalStorage(newData);
    this.updateTodo(newData);

  };

  // this function will toggle the todo ? completed : not completed
  toggleTask = (id) => {
    let newData = this.state.todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    this.updateLocalStorage(newData);
    this.updateTodo(newData);
  };

  // this function will update the task
  updateTask = (id, payload) => {
    let newData = this.state.todo.map((item) =>
      item.id === id ? { ...payload } : item
    );
    this.updateLocalStorage(newData);
    this.updateTodo(newData);
  };
  render() {
    const { todo } = this.state;
    const { addTodo, removeTodo, toggleTask, updateTask, updateTodo } = this;
    const value = { todo, addTodo, removeTodo, toggleTask, updateTask };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
