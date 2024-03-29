import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import TemporaryDrawer from './drawer.js'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    backgroundColor: "#000033",
  },
  image: {
    width: '5em',
    margin: '0 auto',
  },
  phoneNumber: {
    textDecoration: 'none',
    color: 'white',
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar variant="dense">
          <IconButton edge="start" className="" color="inherit" aria-label="menu">
            <TemporaryDrawer></TemporaryDrawer>
          </IconButton>
          <img src={require("../DenverHelpsLogo.png")} className={classes.image} alt="logo"/>
          <Typography variant="h7" >
            Text "Denver Helps" <br/>to <a className={classes.phoneNumber} href="sms:+14253740096&body=Denver%2520helps">425-374-0096</a>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
