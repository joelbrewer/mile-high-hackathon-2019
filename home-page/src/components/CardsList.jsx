import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from './InfoCard.jsx';

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

export default function CardsList() {
  const classes = useStyles();

  return (
    <>
      <InfoCard />
    </>
  );
}
