import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import useStyles from '../hooks/useStyles';
import logo from "../assets/lighthouse.png";

const Header = () => {
  const classes = useStyles();

  return (

    <AppBar position="static" className={classes.buttons_header}>
      <Toolbar>
        {/*<img src={logo} width='10%' height='10%'/>*/}

        <Button variant='outlined' className={classes.simple_button}>
          <Typography className={classes.button_dark_text}>
            כניסה
          </Typography>
        </Button>

        <Button variant='outlined' className={classes.simple_button}>
          <Typography className={classes.button_dark_text}>
            הרשמה
          </Typography>
        </Button>

        <Button variant='outlined' className={classes.simple_button}>
          <Typography className={classes.button_dark_text}>
            מי אנחנו
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;