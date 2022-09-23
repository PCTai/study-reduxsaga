import * as React from 'react';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    border: `1px solid ${theme.palette.divider}`,
  },
}));



export default function Widget({ title, children }) {
  const classes = useStyles();
  console.log(title);
  return (
    <Paper className={classes.root}>
      <h3>{title}</h3>

      <Box mt={2}>{children}</Box>
    </Paper>
  );
}