import React, {useState, useContext, useEffect} from "react";
import AppHeader from "./AppHeader";
import SearchBar from "./SearchBar";
import BottomToast from './BottomToast';
import useSendToServer from '../hooks/useSendToServer';
import Button from '@material-ui/core/Button';
import ProgressBar from 'react-customizable-progressbar'
import {UserContext} from '../UserContext';
import useStyles from '../hooks/useStyles';
import {COLORS} from "../colors";
import Typography from "@material-ui/core/Typography";
import {isMobile} from 'react-device-detect';
import mainImage from '../assets/website_man_image.png'
import background from "../assets/background.png";
import '../stylesheet.css'

const App = () => {
  const {website, openToast, statusToast, progress, setProgress} = useContext(UserContext);
  const [sendToServer] = useSendToServer()

  const classes = useStyles();

  const searchBarDiv = () => {
    return (
      // <div className={classes.side_by_side}>
      <div className='container'>

        <button className='button' onClick={() => sendToServer(website)}>
          תבדקו לי
        </button>

        <SearchBar/>

      </div>
    );
  };

  const getMainBody = () => {
    return (
      <div>
        <div className='main_content_side_by_side_container'>
          <div className='content'>
            <div>
              <h1>האתר היחידי שדואג לאתר שלך</h1>
              <p>מה עושים?
                <br/>
                <br/>
                מכניסים את הכתובת של האתר מסחר שלכם ממש פה מתחת,
                ומגלים ליקויים אפשריים באתר
                <br/>
              </p>
            </div>

            {isMobile ? null : searchBarDiv()}
          </div>

          <img className='main_image' src={mainImage} width='50%' height='50%'/>

        </div>
        {
          isMobile ? searchBarDiv() : null
        }
      </div>
    )
      ;
  };


  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      marginTop: '-9px'
    }}>
      <div>
        <AppHeader/>
        <div>
          {!openToast || statusToast === 'error' || statusToast === 'success'
            ?
            getMainBody()
            :
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
          }
        </div>

        <BottomToast/>

      </div>
    </div>
  );
};

export default App;
