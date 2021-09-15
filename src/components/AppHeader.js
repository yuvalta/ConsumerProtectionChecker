import React from 'react';
import logo from "../assets/pelican_logo.png";
import {Link, useHistory} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import {isMobile} from "react-device-detect";

const AppHeader = () => {
  const history = useHistory()

  const topBarPadding = isMobile ? "10%" : "20%"
  const topBarTopPadding = isMobile ? "4%" : "1%"

  return (
    <div className='appbar-container' style={{paddingTop: `${topBarTopPadding}`
    }}>

      <img src={logo} className='logo' onClick={() => {
        history.replace('/')
      }}/>

      <div className='appbar-buttons-container' style={{
        paddingLeft: `${topBarPadding}`,
        paddingRight: `${topBarPadding}`
      }}>

        <HashLink smooth className='appbar-link' to={'/#contact-us'}>
          <button className='appbar-button'>
            דברו איתנו
          </button>
        </HashLink>

        <HashLink smooth className='appbar-link' to={'/#about-us-section'}>
          <button className='appbar-button'>
            מי אנחנו
          </button>
        </HashLink>

        <Link className='appbar-link' to="/barcode-scanner">
          <button className='appbar-button'>
            סריקת מוצר
          </button>
        </Link>

        <Link className='appbar-link' to="/web-scanner">
          <button className='appbar-button'>
            סורק האתרים
          </button>
        </Link>

        <Link className='appbar-link' to="/">
          <button className='appbar-button'>
            דף הבית
          </button>
        </Link>

      </div>
    </div>
  );
}

export default AppHeader;