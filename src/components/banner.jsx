import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { TextareaAutosize } from '@material-ui/core';
import Selector from "react-border-wrapper";

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
    <box width="Auto">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Banner
          </Typography>
        </Toolbar>
      </AppBar>
    </box>
    </div>
  );
}