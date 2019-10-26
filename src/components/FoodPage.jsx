import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import TemporaryDrawer from './drawer.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FoodPage() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className="" color="inherit" aria-label="menu">
            <TemporaryDrawer></TemporaryDrawer>
          </IconButton>
          <Typography variant="h6" color="inherit">
            Help Denver
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography>
          Food Page
      </Typography>
    </>
  );
}