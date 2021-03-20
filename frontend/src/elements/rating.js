// it is not using this page

import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
    
  },
}));

export default function HalfRating({value}) {
  const classes = useStyles();

  return (
  
      <Rating name="half-rating"  precision={0.5} size="small" style={{marginRight: 3}}/>
   

  );
}