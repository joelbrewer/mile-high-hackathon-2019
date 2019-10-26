import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from './Nav.jsx'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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
// 
  margin: {
    margin: theme.spacing(1),
    // backgroundColor: "red",
    clear: "both",
    display: "block"
  },
}));

export default function HousingPage() {
  const classes = useStyles();

  return (
    <>
    <Nav></Nav>
    <div className={classes.container}>
      <Typography className={classes.logoText} variant="h2">
        Find Shelter.
      </Typography>
    </div>
    <div className={classes.headerContainer}>
      <Typography className={classes.header} variant="h4" >
        Enter Zip-code to Find Shelter.
      </Typography>
          <form className={classes.text} noValidate autoComplete="off">
      <TextField
        id="zip"
        label="Enter 5-digit zip-code."
        // defaultValue=""
        // onInput={}
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
        <Button variant="contained" color="primary" size="large" className={classes.margin}>
          Search
        </Button>

    </form>
    </div>
    </>
  );
}
