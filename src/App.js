import React from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import './App.css';
import HomePage from './components/HomePage.jsx'
import MentalHealthPage from './components/MentalHealthPage.jsx'
import HealthcarePage from './components/HealthcarePage.jsx'
import HousingPage from './components/HousingPage.jsx'
import FoodPage from './components/FoodPage.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <div>
          <Switch>
            <Route path="/mental health">
              <MentalHealth />
            </Route>
            <Route path="/healthcare">
              <Healthcare />
            </Route>
            <Route path="/housing">
              <Housing />
            </Route>
            <Route path="/food">
              <Food />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <HomePage></HomePage>;
}

function MentalHealth() {
  return <MentalHealthPage></MentalHealthPage>;
}

function Healthcare() {
  return <HealthcarePage></HealthcarePage>;
}

function Housing() {
  return <HousingPage></HousingPage>;
}

function Food() {
  return <FoodPage></FoodPage>;
}

export default App;
