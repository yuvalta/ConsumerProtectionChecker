import React, {useContext} from 'react';
import ProgressBar from "react-customizable-progressbar";
import {isMobile} from 'react-device-detect';
import {UserContext} from "../UserContext";
import {COLORS} from "../colors";
import BottomToast from "./BottomToast";
import {useHistory} from "react-router-dom";
import GetUserData from "./GetUserData";
import {sio} from "../hooks/useSendToServer";

const TestResult = () => {
  const {
    openToast, statusToast, progress, messageToast, setSubmitDate, userEmail, userPhone, userFullName, submitDate
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

      </div>
    );
  };

  const infinity_loadingbar = <div className="loadingio-spinner-dual-ring-4pm97gr5npk">
    <div className="ldio-9o242xdhv0o">
      <div></div>
      <div>
        <div></div>
      </div>
    </div>
  </div>;

  return (
    <div>
      <div className='test_result_progressbar_container'>
        {!openToast || statusToast === 'error' || statusToast === 'success'
          ?
          <div> {showResults()} </div>
          :
          <div className='progressbar'>

            {(messageToast === 'סריקה התחילה' || messageToast === 'מחשב...') ?
              infinity_loadingbar
              :
              <div>
                <ProgressBar
                  // radius={isMobile ? 150 : 250}
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
        }
      </div>
      <BottomToast/>
    </div>
  );
}

export default TestResult;
