import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from './InfoCard.jsx';

import { faq_data } from '../constants'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
  }
}));

export default function CardsList() {
  const classes = useStyles();

  const infoCards = faq_data.map(data => (
    <InfoCard
      key={data.id}
      question={data.question}
      answer_html={data.answer_html}
      image={data.image}
    />
    )
  )

  return (
    <div className={classes.container}>
        {infoCards}
    </div>
  );
}
