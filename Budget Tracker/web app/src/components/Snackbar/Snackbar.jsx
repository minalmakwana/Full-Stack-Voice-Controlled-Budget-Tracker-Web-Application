//Snackbar is for the pop up which gets displayed after the trasaction is successfully done

import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import useStyles from './styles';

const CustomizedSnackbar = ({ open, setOpen }) => {
  const classes = useStyles();

//To intialize automatic closure of the pop up
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
   <Snackbar 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      //Setting display time for 6 milli sec
      open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">Transaction successfully created.</MuiAlert>
      </Snackbar>

    </div>
  );
};

export default CustomizedSnackbar;
