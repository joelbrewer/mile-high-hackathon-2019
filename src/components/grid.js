import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>Medical</Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper className={classes.paper}>Shelter</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Mental</Paper>
        </Grid> */}
        <Grid item xs={12} >
            <Button size="large" variant="contained" color="secondary" className={classes.button}>
                Medical
            </Button>
        </Grid>
        <Grid item xs={12} >
          {/* <Paper className={classes.paper}>Shelter</Paper> */}
            <Button size="large" variant="contained" color="secondary" className={classes.button}>
                Shelter
            </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* <Paper className={classes.paper}>Mental</Paper> */}
            <Button size="large" variant="contained" color="secondary" className={classes.button}>
              Mental
            </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
            <Button size="large" variant="contained" color="secondary" className={classes.button}>
              Health
            </Button>
        </Grid>
      </Grid>
    </div>
  );
}
