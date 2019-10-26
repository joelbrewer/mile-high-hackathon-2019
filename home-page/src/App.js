import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import './App.css';
import HomePage from './components/HomePage.jsx'
import TemporaryDrawer from './components/drawer.js'

function App() {
  return (
    <div className="">
      <HomePage />
       <TemporaryDrawer></TemporaryDrawer>
    </div>
  );
}

export default App;
