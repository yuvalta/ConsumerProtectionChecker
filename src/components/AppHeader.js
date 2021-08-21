import React from 'react';
import logo from "../assets/lighthouse.png";
import {Link, useHistory} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const AppHeader = () => {
  const history = useHistory()

  return (
    <div className='appbar-container'>

      <img src={logo} className='logo' onClick={() => {
        history.replace('/home')
      }}/>

      <div className='appbar-buttons-container'>

        <HashLink className='appbar-link' scroll={(el) => el.scrollIntoView({behavior: 'smooth'})}
                  to={'/home#contact-us'}>
          <button className='appbar-button'>
            📱 דברו איתנו
          </button>
        </HashLink>

        <HashLink className='appbar-link' scroll={(el) => el.scrollIntoView({behavior: 'smooth'})}
                  to={'/home#about-us-section'}>
          <button className='appbar-button'>
            מי אנחנו
          </button>
        </HashLink>

        <Link className='appbar-link' to="/home">
          <button className='appbar-button'>
            דף הבית
          </button>
        </Link>

      </div>
    </div>
  );
}

export default AppHeader;