import React from 'react';
import GetUserData from "./GetUserData";
import bottom_wave from "../assets/bottom_wave.png";

const ContactUs = () => {

  return (
    <div id='contact-us'
         style={{
           // backgroundImage: `url(${bottom_wave})`,
           paddingTop: '5%',
           paddingBottom: '5%',
           paddingRight: '30%',
           paddingLeft: '30%'
         }}>
      <h1>
        דברו איתנו
      </h1>

      <GetUserData/>
    </div>
  );

};
export default ContactUs;
