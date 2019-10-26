import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import FullWidthGrid from './components/grid.js'

function App() {
  return (
    <div className="">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className="" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Help Denver
          </Typography>
        </Toolbar>
      </AppBar>
      <FullWidthGrid></FullWidthGrid>
    </div>
  );
}

export default App;
