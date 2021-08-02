import React, {useState, useContext, useEffect} from "react";
import Header from "./Header";
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

const App = () => {
  const {website, openToast, statusToast, progress, setProgress} = useContext(UserContext);
  const [sendToServer] = useSendToServer()

  const classes = useStyles();

  const searchBarDiv = () => {
    return (
      <div>
        <SearchBar/>
        <Button onClick={() => sendToServer(website)} className={classes.button_red_gradient}>
          <Typography className={classes.button_light_text}>
            תבדקו לי
          </Typography>
        </Button>
      </div>
    );
  };

  const getMainBody = () => {
    return (
      <div className={classes.main_content_margin_left_right}>
        <div className={classes.side_by_side}>

          <div>
            <Typography variant="h3" className={classes.text}>
              האתר היחידי שדואג לאתר שלך
            </Typography>

            <Typography variant="h6" className={classes.text}>
              מה עושים?
              <br/>
              <br/>
              מכניסים את הכתובת של האתר מסחר שלכם ממש פה מתחת,
              ומגלים ליקויים אפשריים באתר
              <br/>
            </Typography>

            {isMobile ? null : searchBarDiv()}
          </div>

          <img src={mainImage} width='50%' height='50%'/>

        </div>
        {isMobile ? searchBarDiv() : null}
      </div>
    );
  };


  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      marginTop: '-6px'
    }}>
      <div>
        <Header/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          {!openToast || statusToast === 'error' || statusToast === 'success'
            ?
            getMainBody()
            :
            <ProgressBar
              className={classes.center}
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
