import React, {  useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

//importing styles and expense tracker context from styles.js and context
const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
//Layour for the main form visible after logging in
  return (
    <Card className={classes.root} style={{background:'linear-gradient(89deg, yellow 0%, #04C8DE 100%)'}}>
      <CardHeader title="Expense Tracker" subheader="Powered by Us" />
      <CardContent>
        {/* //Adding layout for the main card */}
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
