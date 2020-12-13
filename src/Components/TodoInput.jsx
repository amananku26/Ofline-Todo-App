import React from "react";
import { AppContext } from "../Context/AppContext";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    const { addTodo } = this.context;
    const { text } = this.state;
    return (
      <div>
        <div>
          <label>
            TASK
            <br />
            <input
              placeholder="add something"
              value={text}
              onChange={this.onChange}
            />
          </label>
        </div>
        <div>
          <button onClick={() => addTodo(text)}> ADD TODO </button>
        </div>
      </div>
    );
  }
}

TodoInput.contextType = AppContext;
