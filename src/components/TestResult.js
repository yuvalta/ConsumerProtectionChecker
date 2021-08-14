import React, {useContext} from 'react';
import ProgressBar from "react-customizable-progressbar";
import {isMobile} from 'react-device-detect';
import {UserContext} from "../UserContext";
import {COLORS} from "../colors";
import BottomToast from "./BottomToast";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";
import GetUserData from "./GetUserData";

const TestResult = () => {
  const {website, openToast, statusToast, progress, messageToast} = useContext(UserContext);

  const showResults = () => {
    return (
      <div>
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
