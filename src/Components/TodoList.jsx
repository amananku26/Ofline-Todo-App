import React from "react";
import TodoItem from "./TodoItem";
import { AppContext } from "../Context/AppContext";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./Todo.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function TodoList() {
  const classes = useStyles();

  return (
    <AppContext.Consumer>
      {({ todo, removeTodo, toggleTask, updateTask, activeTheme }) => {
        return (
          <div>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  {
                    todo.length >= 0 && <Typography style={{ backgroundColor: "#f8bbd0", marginTop: "8px", borderRadius: "45px", color: "white" }} variant="h5">Upcoming List </Typography>
                  }
                  <div>
                    {todo
                      ?.filter((item) => !item.status).sort()
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
                </Grid>
                {/* completed grid */}
                <Grid item xs={12} sm={6}>
                  <Typography style={{ backgroundColor: "#f50057", borderRadius: "45px", color: "white" }} variant="h5"> Completed List </Typography>
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
                </Grid>
              </Grid>
            </div>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
}

export default TodoList;
