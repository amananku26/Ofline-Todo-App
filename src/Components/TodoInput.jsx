import React from "react";
import { Typography, TextField } from '@material-ui/core';
import { AppContext } from "../Context/AppContext";
import "../styles.css"

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      hashtag: ""
    };
  }

  onHashChange = (e) => {
    this.setState({
      hashtag: e.target.value
    });
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    const { addTodo } = this.context;
    const { text, hashtag } = this.state;
    return (
      <div className="TodoList">
        <div>
          <label>
            <Typography style={{ marginTop: "25px", color: "white" }} variant="h4">Todo Web App</Typography>
            <br />
            <form onKeyPress={(e) => {
              if (e.key === 'Enter') {
                return addTodo(text, hashtag)
              }
            }}>
              <TextField
                id="outlined-basic" label="Add Hashtag.." variant="outlined"
                value={hashtag}
                onChange={this.onHashChange}
                required={true}
              />


              <TextField
                id="outlined-basic" label="Add Todo.." variant="outlined"
                value={text}
                onChange={this.onChange}
                required={true}
              />
            </form>
          </label>
        </div>
      </div>
    );
  }
}

TodoInput.contextType = AppContext;
export default TodoInput


// hashtah : [ #work:[{},{},{},{}] , #gym:[{},{},{},{}]  ]