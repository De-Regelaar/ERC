import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Paper} from '@material-ui/core';

import Calculator from './Calculator.js';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function CalculatorContainer() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <Calculator/>
      </Paper>
    </Container>
  );
}

