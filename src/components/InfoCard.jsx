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
    maxWidth: 400,
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

export default function InfoCard() {
  const classes = useStyles();

  return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg"
        />
        <CardContent className={classes.cardContent}>
          <ExpansionPanel className={classes.expansion}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              className={classes.summary}
            >
              <Typography  class={classes.text}>
                  I want to help a homeless person I pass on the streets every day, or who is sleeping in front of my home
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.details}>
              <Typography>
                  Unless you feel that the situation is unsafe, ask the person if he or she needs assistance and has visited an organization that helps homeless people. You can let them know that <a href="https://www.coloradocoalition.org/">Colorado Coalition</a> will help them find more permanent housing, healthcare, and guidance.
                  <br/>
                  <br/>
                  If you are not comfortable engaging the person, then call 311 to let the city know that there is a homeless person who appears to need services, and they will send an outreach team. You should be able to let them know where the person is, what he or she is wearing, what condition he or she seems to be in, and whether it is an emergency.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </CardContent>
      </Card>
  );
}
