import React from "react";
import { v4 as uuid } from "uuid";

export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }
  addTodo = (title) => {
    let item = {
      title,
      id: uuid(),
      status: false
    };
    this.setState({
      todo: [...this.state.todo, item]
    });
  };
  removeTodo = (id) => {
    let newData = this.state.todo.filter((item) => item.id !== id);
    this.setState({
      todo: newData
    });
  };
  toggleTask = (id) => {
    let newData = this.state.todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    this.setState({
      todo: newData
    });
  };
  updateTask = (id, payload) => {
    console.log(id);
    let newData = this.state.todo.map((item) =>
      item.id === id ? { ...payload } : item
    );
    this.setState({
      todo: newData
    });
  };
  render() {
    const { todo } = this.state;
    const { addTodo, removeTodo, toggleTask, updateTask } = this;
    const value = { todo, addTodo, removeTodo, toggleTask, updateTask };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
