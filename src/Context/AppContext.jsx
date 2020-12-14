import React from "react";
import { v4 as uuid } from "uuid";

export const AppContext = React.createContext();
class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    var data1 =  localStorage.getItem("todolist")
    this.state = {
      todo: JSON.parse(data1) || [],
      hashtag:[],
      set:[]
    };
  }

  updateTodo = todo => {
    this.setState({ todo });
  };

  updateLocalStorage = todoList => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  };


  addTodo = (title,hashtag) => {
    let item = {
      title,
      id: uuid(),
      status: false,
      hashtag:hashtag
    };
    this.setState({
      todo: [...this.state.todo, item]
    });

    for (var i = 0; i < localStorage.length; i++) {
      var x = localStorage.key(i);
      var hash
      console.log(x,hashtag)
      if( x == hashtag){
        var p = JSON.parse(localStorage.getItem("x"))
        hash = [...p , item]
        return localStorage.setItem((`${hashtag}`),JSON.stringify(hash))

      } else {
        hash = [...this.state.todo, item ]
        return localStorage.setItem((`${hashtag}`),JSON.stringify(hash))
       
      }
     
      
    }
    


    var data =  [...this.state.todo, item]
    localStorage.setItem("todolist",JSON.stringify(data))
   
  };
  removeTodo = (id) => {
    let newData = this.state.todo.filter((item) => item.id !== id);
    this.updateLocalStorage(newData);
    this.updateTodo(newData);

  };
  toggleTask = (id) => {
    let newData = this.state.todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    this.updateLocalStorage(newData);
    this.updateTodo(newData);
  };
  updateTask = (id, payload) => {
    let newData = this.state.todo.map((item) =>
      item.id === id ? { ...payload } : item
    );
    this.updateLocalStorage(newData);
    this.updateTodo(newData);
  };
  render() {
    const { todo } = this.state;
    const { addTodo, removeTodo, toggleTask, updateTask ,updateTodo } = this;
    const value = { todo, addTodo, removeTodo, toggleTask, updateTask };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
