import React, {useContext} from 'react';
import {isMobile} from 'react-device-detect';
import {UserContext} from "../UserContext";
import {useHistory} from "react-router-dom";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import Camera, {FACING_MODES, IMAGE_TYPES} from 'react-html5-camera-photo';

const BarcodeScanner = () => {
  const {openToast, statusToast, progress, messageHeaderToast, messageBodyToast} = useContext(UserContext);
  const [data, setData] = React.useState('Not Found');
  const history = useHistory()

  return (

    <div className='one-page-part'>
      <br/>
      <h1>אנא סרקו את הברקוד של המוצר שברצונכם לקבל מידע עליו</h1>

      <p>המצלמה לא עובדת? שימו לב שאישרתם לנו להשתמש במצלמה.</p>
      <p>מבטיחים שברגע שתסיימו לסרוק, לא נפתח אותה ללא אישורכם 🙂</p>
      <BarcodeScannerComponent
        width={'50%'}
        height={'50%'}
        onUpdate={(err, result) => {
          if (result) {
            setData(result.text)
          } else {
            //setData('Not Found')
          }
        }}/>

      <p>הברקוד שנסרק: {data}</p>

    </div>
  );
}

export default BarcodeScanner;
