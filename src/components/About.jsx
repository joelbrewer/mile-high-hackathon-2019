import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  image: {
    width: '5em',
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: "url('https://images.unsplash.com/photo-1519424187720-db6d0fc5a5d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '30vh',
    color: 'white',

  },
  header: {
    maxWidth: 800,
    textAlign: 'center',
    display: 'flex',
    margin: '1em',

  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
  },
  logoText: {
    color: 'white',
    backgroundColor: '#000000a1',
    backgroundOpacity: 0.1,
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 350,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <Typography className={classes.logoText} variant="h2">
        Denver Helps
      </Typography>
    </div>
    <div className={classes.headerContainer}>
      <Typography className={classes.header} variant="h4" >
        Our founders weren't sure how to help the homeless they see every day. This resource exists to provide actionable advice. For an interactive guide, text "Denver helps" to 425-374-0096.
      </Typography>
    </div>
    </>
  );
}
