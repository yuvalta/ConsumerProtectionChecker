import React, {useContext} from 'react';
import {isMobile} from 'react-device-detect';
import {UserContext} from "../UserContext";
import {useHistory} from "react-router-dom";

const BarcodeScanner = () => {
  const {openToast, statusToast, progress, messageHeaderToast, messageBodyToast} = useContext(UserContext);

  const history = useHistory()

  return (
    <div className='all-page-container'>
      {isMobile ? <h1>picture + number scanner</h1> : <h1>number scanner</h1>}
    </div>
  );
}

export default BarcodeScanner;
