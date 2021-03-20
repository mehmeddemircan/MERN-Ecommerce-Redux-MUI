import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    top:180,
    left: 350,
    transform : 'translate(-50%, -50%)',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
     
    </div>
  );
}