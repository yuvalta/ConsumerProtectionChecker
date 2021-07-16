import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import useStyles from '../hooks/useStyles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>


        <Button variant='outlined' className={classes.simple_button}>
          <Typography className={classes.button_dark_text}>
            כניסה
          </Typography>
        </Button>

        <Button className={classes.button_red_gradient}>
          <Typography className={classes.button_light_text}>
            הרשמה
          </Typography>
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default Header;