import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import "../styles.css"
import "./Todo.css"
import { TextField } from '@material-ui/core';

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
          <TextField
            style={{ flex: 1 }}
            onChange={this.handleEdit}
            name="title"
            value={value.title}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                return (this.handleUpdate())
              }
            }}
          />
          <IconButton onClick={this.toggleEdit} aria-label="delete" size="medium">
            <CancelIcon size="medium" color="primary" />
          </IconButton>
        </div>
      );
    }
    return (
      <div style={{ display: "flex", flexDirection: "row" }} className="completedListItem">
        <div onClick={() => onToggle(id)} className={status ? "done" : "notdone"} style={{ flex: 1, textDecoration: "line-trough" }}>{title}</div>
        <IconButton onClick={() => onRemove(id)} aria-label="delete" size="medium">
          <DeleteIcon size="medium" color="primary" />
        </IconButton>
        {
          !status && <IconButton onClick={this.toggleEdit} aria-label="delete" size="medium">
            <EditIcon size="medium" color="primary" />
          </IconButton>
        }
      </div>
    );
  }
}

export default TodoItem;
