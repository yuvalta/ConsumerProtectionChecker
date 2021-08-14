import React from 'react';
import logo from "../assets/lighthouse.png";
import {Link, useHistory} from "react-router-dom";

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