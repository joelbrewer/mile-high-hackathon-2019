import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    textDecoration: 'none',
    color: '#000033',
    paddingBottom: '3px',
  }
}));

export default function ContactCard(props) {
  const classes = useStyles();

  return (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <ExpansionPanel className={classes.expansion}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.summary}
            >
              <Typography  className={classes.text}>
                  {props.name}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <a href={props.link} className={classes.link}>Visit the website</a>
              <Typography><strong>{props.phone}</strong></Typography>
              <Typography>{props.description}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardContent>
      </Card>
  );
}
