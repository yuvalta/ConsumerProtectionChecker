import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from "@material-ui/core/Button";
import useStyles from '../hooks/useStyles';
import logo from "../assets/lighthouse.png";
import {Link, useHistory} from "react-router-dom";
import About from "./About";

const AppHeader = () => {
  const history = useHistory()


  return (
    <div className='appbar-container'>

      <img src={logo} className='logo' onClick={() => {history.replace('/')}}/>

      <div className='appbar-buttons-container'>

          <Link className='appbar-link' to="/">
            <button className='appbar-button'>
              דף הבית
            </button>
          </Link>
          <Link className='appbar-link' to="/About">
            <button className='appbar-button'>
              מי אנחנו
            </button>
          </Link>
      </div>
    </div>
  );
}

export default AppHeader;