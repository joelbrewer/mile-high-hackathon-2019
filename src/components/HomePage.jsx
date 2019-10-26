import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FullWidthGrid from './grid.js'
import CardsList from './CardsList.jsx'
import TemporaryDrawer from './drawer.js'
import About from './About.jsx'
import Nav from './Nav.jsx'

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
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <About header="Denver Helps" showQuestion />
      <CardsList />
    </>
  );
}
