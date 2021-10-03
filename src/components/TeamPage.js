import React from 'react';
import first_avatar from '../assets/daniel.jpg'
import second_avatar from '../assets/elliot.jpg'
import third_avatar from '../assets/helen.jpg'

const TeamPage = () => {
  return (
    <div>
      <h1>
        פגשו את הצוות
      </h1>

      <div className="ui three column grid" style={{direction:'rtl'}}>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src={first_avatar} alt="first avatar"/>
            </div>
            <div className="content">
              <a href="/#" className="header">מוטי לוכים</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src={second_avatar} alt="second avatar"/>
            </div>
            <div className="content">
              <a href="/#" className="header">אבי רון</a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="ui fluid card">
            <div className="image">
              <img src={third_avatar} alt="third avatar"/>
            </div>
            <div className="content">
              <a href="/#" className="header">תיקי פור</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
