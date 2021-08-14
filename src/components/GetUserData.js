import React from 'react';

const GetUserData = () => {

  return (
    <form>
      <p>
        שם מלא:
        <input className='input'
          name="numberOfGuests"
          type="text"/>
      </p>

      <br/>

      <p>
        email:
        <input className='input'
          name="numberOfGuests"
          type="text"/>
      </p>

      <br/>

      <p>
        טלפון:
        <input className='input'
          name="numberOfGuests"
          type="text"/>
      </p>
    </form>
  );
}

export default GetUserData;