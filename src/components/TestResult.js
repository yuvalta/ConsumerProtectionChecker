import React, {useContext} from 'react';
import ProgressBar from "react-customizable-progressbar";
import {isMobile} from 'react-device-detect';
import {UserContext} from "../UserContext";
import {COLORS} from "../colors";
import BottomToast from "./BottomToast";
import {useHistory} from "react-router-dom";
import GetUserData from "./GetUserData";

const TestResult = () => {
  const {openToast, statusToast, progress, messageToast, setSubmitDate, userEmail, userPhone, userFullName, submitDate
  } = useContext(UserContext);

  const history = useHistory()

  const showResults = () => {
    return (
      <div className='user-form-container'>
        <h1>
          הבדיקה הסתיימה!
        </h1>

        <p>
          {messageToast}
        </p>

        <GetUserData/>

        <button className='button' onClick={() => {
          setSubmitDate((new Date()).getDate());
          alert('נשלח!\n' + userFullName + " " + userPhone + " " + userEmail + " " + submitDate);
          history.replace('/');
        }}>
          שלח\י
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className='test_result_progressbar_container'>
        {!openToast || statusToast === 'error' || statusToast === 'success'
          ?
          <div> {showResults()} </div>
          :
          <div>
            <ProgressBar
              className='progressbar'
              radius={isMobile ? 150 : 250}
              progress={progress}
              cut={120}
              rotate={-210}
              initialAnimation
              initialAnimationDelay={500}
              strokeWidth={28}
              strokeColor={COLORS.green}
              trackStrokeWidth={14}
              trackStrokeLinecap="butt"
            />
          </div>
        }
      </div>
      <BottomToast/>
    </div>
  );
}

export default TestResult;
