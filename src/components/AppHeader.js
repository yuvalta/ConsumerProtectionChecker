import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import useStyles from '../hooks/useStyles';
import logo from "../assets/lighthouse.png";

const AppHeader = () => {
  const classes = useStyles();

  return (

    <AppBar position="static" className={classes.buttons_header}>
      <Toolbar>
        {/*<img src={logo} width='10%' height='10%'/>*/}

        <Button variant='text' className={classes.simple_button}>
          <h3 className={classes.button_dark_text}>
            כניסה
          </h3>
        </Button>

        <Button variant='text' className={classes.simple_button}>
          <h3 className={classes.button_dark_text}>
            הרשמה
          </h3>
        </Button>

        <Button variant='text' className={classes.simple_button}>
          <h3 className={classes.button_dark_text}>
            מי אנחנו
          </h3>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;