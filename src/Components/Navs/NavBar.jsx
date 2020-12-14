import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const handleClearAll = () => {
    localStorage.removeItem('todolist')
    window.location.reload()
  }

  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar variant="dense">
          <Typography className={classes.title} align="left" variant="h6" color="inherit">
           Ofline Todo App
          </Typography>
          <Button onClick={handleClearAll} color="inherit" align="right">Clear All</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

