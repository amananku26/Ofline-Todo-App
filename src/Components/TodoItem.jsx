import React from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      value: {
        ...props.item
      }
    };
  }
  toggleEdit = () => {
    this.setState({
      isEdit: !this.state.isEdit
    });
  };
  handleEdit = (e) => {
    let { name, value: val, type, checked } = e.target;
    val = type === "checkbox" ? checked : val;
    const { value } = this.state;
    this.setState({
      value: { ...value, [name]: val }
    });
  };
  handleUpdate = () => {
    const { value } = this.state;
    this.props.update(value.id, value);
    this.toggleEdit();
  };
  render() {
    const { item, onToggle, onRemove } = this.props;
    // manage the state locally
    const { title, status, id } = item;
    const { isEdit, value } = this.state;
    // ifEdit
    // return ( <input  )
    if (isEdit) {
      return (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            style={{ flex: 1 }}
            onChange={this.handleEdit}
            name="title"
            value={value.title}
          ></input>
          <input
            onChange={this.handleEdit}
            type="checkbox"
            name="status"
            style={{ flex: 1 }}
            checked={value.status}
          ></input>
          <button onClick={this.handleUpdate}>UPDATE</button>
          <button onClick={this.toggleEdit}>CANCEL</button>
        </div>
      );
    }
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>{title}</div>
        <div style={{ flex: 1 }}>{status ? "done" : "not done"}</div>
        <button style={{ flex: 1 }} onClick={() => onToggle(id)}>
          TOGGLE
        </button>
        <button style={{ flex: 1 }} onClick={() => onRemove(id)}>
          REMOVE
        </button>
        <button onClick={this.toggleEdit}>EDIT</button>
      </div>
    );
  }
}

export default TodoItem;
