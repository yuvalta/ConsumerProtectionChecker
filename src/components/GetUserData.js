import React, {useContext} from 'react';
import {UserContext} from "../UserContext";

const GetUserData = () => {

  const {setUserEmail, setUserFullName, setUserPhone} = useContext(UserContext);

  return (
    <form>
      <p>
        שם מלא:
        <input className='input' name="full_name" type="text" onChange={(event) => {setUserFullName(event.target.value)}}/>
      </p>

      <p>
        אימייל:
        <input className='input' name="email" type="text" onChange={(event) => {setUserEmail(event.target.value)}}/>
      </p>

      <p>
        טלפון:
        <input className='input' name="phone" type="text" onChange={(event) => {setUserPhone(event.target.value)}}/>
      </p>

      <br/>
    </form>
  );
}

export default GetUserData;