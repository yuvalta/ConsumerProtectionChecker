import React from 'react';
import GetUserData from "./GetUserData";

const ContactUs = () => {

  return (
    <div id='contact-us'
         style={{
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
