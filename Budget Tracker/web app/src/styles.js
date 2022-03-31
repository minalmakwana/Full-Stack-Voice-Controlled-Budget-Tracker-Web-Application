import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  //adding styles specifically for Desktops so that website becomes responsive according to the device used
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
   //adding styles specifically for Mobile so that website becomes responsive according to the device used
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));
