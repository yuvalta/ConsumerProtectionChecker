import React, {useContext} from 'react';
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import {isMobile} from "react-device-detect";

const BarcodeScanner = () => {
  const [data, setData] = React.useState('Not Found');

  return (

    <div style={{
      paddingTop: '3%',
      paddingBottom: '5%',
      paddingRight: '10%',
      paddingLeft: '10%'
    }}>
      <br/>
      <h1>אנא סרקו את הברקוד של המוצר שברצונכם לקבל מידע עליו</h1>

      <p>המצלמה לא עובדת? שימו לב שאישרתם לנו להשתמש במצלמה.</p>
      <p>מבטיחים שברגע שתסיימו לסרוק, לא נפתח אותה ללא אישורכם 🙂</p>

      <BarcodeScannerComponent
        width={isMobile ? '100%' : '50%'}
        height={'50%'}
        onUpdate={(err, result) => {
          if (result) {
            setData(result.text)
          } else {
            //setData('Not Found')
          }
        }}/>

      <p>הברקוד שנסרק: {data}</p>

      <div className='enter-barcode-container'>

        <div className='enter-barcode-item-input'>
          <input className='input' name="product-barcode" type='p' onChange={(event) => {
            setData(event.target.value)
          }}/>
        </div>

        <p className='enter-barcode-item'>לא מעוניינים בלפתוח מצלמה? ניתן להקליד את הברקוד פה ⬅️️</p>
      </div>

    </div>
  );
}

export default BarcodeScanner;
