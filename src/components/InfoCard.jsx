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
  }
}));

export default function InfoCard(props) {
  const classes = useStyles();

  return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={props.image}
        />
        <CardContent className={classes.cardContent}>
          <ExpansionPanel className={classes.expansion}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.summary}
            >
              <Typography  className={classes.text}>
                  {props.question}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <Typography dangerouslySetInnerHTML={{ __html: `${props.answer_html}` }}>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardContent>
      </Card>
  );
}
