import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from './InfoCard.jsx';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
}));

export default function CardsList() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <InfoCard />
    </div>
  );
}
