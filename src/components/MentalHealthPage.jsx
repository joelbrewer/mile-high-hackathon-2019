import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { mental_health_data } from '../constants';

import About from './About.jsx'
import Nav from './Nav.jsx'
import ContactCard from './ContactCard.jsx'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    margin: "1em",
  },
  text: {
    fontSize: '1.5em',
    margin: 0,
  },
  expansion: {
    boxShadow: 'none',
    padding: 0,
  },
  summary: {
    padding: 0,
    margin: 0,
  },
  details: {
    padding: 0,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  },
}));

export default function MentalHealthPage() {
  const classes = useStyles();
  const mentalHealthCards = mental_health_data.map(info => (
    <ContactCard
      name={info.name}
      description={info.description}
      phone={info.phone}
      link={info.link}
    />
  )
  )

  return (
    <>
      <Nav />
      <About header="Mental Health" />
      <div className={classes.container}>
        {mentalHealthCards}
      </div>
    </>
  );
}
