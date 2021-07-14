import React, {useState, useContext, useEffect} from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import BottomToast from './BottomToast';
import useSendToServer from '../hooks/useSendToServer';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ProgressBar from 'react-customizable-progressbar'
import {UserContext} from '../UserContext';
import {makeStyles} from '@material-ui/core/styles';
import {COLORS} from "../colors";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
    flexGrow: 1
  },

  content: {
    margin: theme.spacing(5),
    textAlign: 'right',
    flexGrow: 1,
    color: COLORS.black
  },

  center: {
    position: 'fixed',
    left: '50%',
    top: '50%',
  },

  root_disabled: {
    margin: theme.spacing(5),
    flexGrow: 1,
    pointerEvents: "none",
    opacity: "0.7"
  },

  button: {
    backgroundColor: COLORS.dark_gray,
    color: COLORS.dirty_white,
    borderRadius: '50px'
  }
}));

const App = () => {
  const {website, openToast, statusToast, progress, setProgress} = useContext(UserContext);
  const [sendToServer] = useSendToServer()

  const classes = useStyles();

  const getMainBody = () => {
    return (
      // <div className={!openToast || statusToast === 'error' || statusToast === 'success' ? classes.root : classes.root_disabled}>
      <div className={classes.root}>
        <Typography variant="h6" className={classes.content}>
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.
          קלאצי הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
          זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
        </Typography>

        <SearchBar style={{
          width: '75%',
          height: '75%',
        }}/>
        <Button onClick={() => sendToServer(website)} variant="contained"
                style={{borderRadius: '50px'}}
                className={classes.button}>
          תבדקו לי
        </Button>
      </div>
    );
  };


  return (
    <div>
      <div>
        <Header/>
        <div>
          {!openToast || statusToast === 'error' || statusToast === 'success'
            ?
            getMainBody()
            :
            <ProgressBar
              className={classes.center}
              radius={100}
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
