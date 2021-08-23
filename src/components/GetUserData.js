import React, {useContext} from 'react';
import {UserContext} from "../UserContext";
import {sio} from "../hooks/useSendToServer";
import {useHistory} from "react-router-dom";

const GetUserData = () => {

  const {
    setSubmitDate,
    userEmail,
    userPhone,
    userFullName,
    submitDate,
    setUserEmail,
    setUserFullName,
    setUserPhone
  } = useContext(UserContext);
  const history = useHistory()

  return (
    <form>
      <p>
        שם מלא:
        <input className='input' name="full_name" type="text" onChange={(event) => {
          setUserFullName(event.target.value)
        }}/>
      </p>

      <p>
        אימייל:
        <input className='input' name="email" type="text" onChange={(event) => {
          setUserEmail(event.target.value)
        }}/>
      </p>

      <p>
        טלפון:
        <input className='input' name="phone" type="text" onChange={(event) => {
          setUserPhone(event.target.value)
        }}/>
      </p>

      <br/>

      <div className='send-form-button'>
        <button className='button' onClick={() => {
          setSubmitDate((new Date()).getDate());
          alert('נשלח!\n' + userFullName + " " + userPhone + " " + userEmail + " " + submitDate);
          sio.emit('user_form_data', {
            'user_full_name': userFullName,
            'user_phone': userPhone,
            'user_email': userEmail
          })
          history.replace('/');
        }}>
          שלח\י
        </button>
      </div>
    </form>


  );
}

export default GetUserData;