import React, {useState, useContext, useEffect} from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import BottomToast from './BottomToast';
import useSendToServer from '../hooks/useSendToServer';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import {UserContext} from '../UserContext';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
    flexGrow: 1
  },

  content: {
    marginTop: theme.spacing(3),
    float: 'left'
  },

  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
  },

  root_disabled: {
    margin: theme.spacing(5),
    flexGrow: 1,
    pointerEvents: "none",
    opacity: "0.7"
  }
}));

const App = () => {
  const {website, openToast, statusToast, progress, setProgress} = useContext(UserContext);
  const [sendToServer] = useSendToServer()

  const classes = useStyles();

  return (
    <div>
      <div>
        <Header/>

        <div
          className={!openToast || statusToast === 'error' || statusToast === 'success' ? classes.root : classes.root_disabled}>
          <SearchBar/>

          <Button onClick={() => sendToServer(website)} variant="contained" color="primary" className={classes.content}>
            תבדקו לי
          </Button>

        </div>

        <BottomToast/>

      </div>

      <div>
        {!openToast || statusToast === 'error' || statusToast === 'success' ? <div></div> :
          <CircularProgress className={classes.center} variant="determinate" value={progress}/>
        }
      </div>
    </div>
  );
};

export default App;
