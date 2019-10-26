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
    lineHeight: 1.7,
    flexDirection: 'column',
    fontWeight: 300,

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
    backgroundColor: '#000033ab',
    backgroundOpacity: 0.1,
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 350,
    textAlign: 'center',
  },
  strong: {
    fontWeight: 400,
    fontStyle: 'italic',
  }
}));

export default function About(props) {
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <Typography className={classes.logoText} variant="h2">
          {props.header}
      </Typography>
    </div>
    {props.showQuestion &&
      (<div className={classes.headerContainer}>
      <Typography className={classes.header} variant="h4" >
        Denver Helps exists to answer the question<br/> <span className={classes.strong}>"How can I help my homeless neighbor?"</span>
      </Typography>
      </div> )
    }
    </>
  );
}
