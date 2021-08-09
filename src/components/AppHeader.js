import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import useStyles from '../hooks/useStyles';
import logo from "../assets/lighthouse.png";

const AppHeader = () => {
  const classes = useStyles();

  return (

    <div className='appbar-container'>

      <img src={logo} className='logo'/>

      <div className='appbar-buttons-container'>
        <button className='appbar-button'>
          כניסה
        </button>

        <button className='appbar-button'>
          הרשמה
        </button>

        <button className='appbar-button'>
          מי אנחנו
        </button>
      </div>
    </div>
  );
}

export default AppHeader;