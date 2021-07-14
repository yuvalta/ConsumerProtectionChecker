import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {COLORS} from "../colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    direction: 'rtl',
    background: COLORS.gray
  },
  title: {
    flexGrow: 1,
    color: COLORS.dirty_white
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          בדיקת אתרים
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;