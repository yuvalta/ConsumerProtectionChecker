import React, {useContext} from 'react';
import ProgressBar from "react-customizable-progressbar";
import {UserContext} from "../UserContext";
import {COLORS} from "../colors";
import BottomToast from "./BottomToast";
import GetUserData from "./GetUserData";

const TestResult = () => {
  const {openToast, statusToast, progress, messageHeaderToast, messageBodyToast} = useContext(UserContext);

  function getErrorFromString(error_string) {
    switch (error_string) {
      case 'WEBSITE_NOT_FOUND':
        return 'נראה שהאתר לא נמצא, וודאו שהכתובת קיימת 👻'
      case 'WEBSITE_NAME_ERROR':
        return 'נראה שיש תווים לא תקינים בכתובת האתר 😵'
      default:
        return 'שגיאה כללית';
    }
  }

  const showResults = () => {
    if (statusToast === 'error') {
      return (<div className='user-form-container'>
        <h1>
          שגיאה בסריקת האתר...
        </h1>
        <br/>

        <iframe src="https://giphy.com/embed/dJYoOVAWf2QkU" frameBorder="0" title="gif error"/>

        <br/>
        <p>
          {getErrorFromString(messageHeaderToast)}
        </p>
      </div>)
    } else {
      return (
        <div className='user-form-container'>
          <h1>
            הבדיקה הסתיימה!
          </h1>

          <p>
            {messageHeaderToast}
          </p>

          <p>
            {messageBodyToast}
          </p>

          <GetUserData/>

        </div>
      );
    }
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

            {(messageHeaderToast === 'סריקה התחילה' || messageHeaderToast === 'מחשב...') ?
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
