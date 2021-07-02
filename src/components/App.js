import React, {useState, useContext} from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import BottomToast from './BottomToast';
import useSendToServer from '../hooks/useSendToServer';
import Button from '@material-ui/core/Button';
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
  }
}));

const App = () => {
  const {website} = useContext(UserContext);
  const [sendToServer] = useSendToServer()

  const classes = useStyles();


  return (
    <div>
      <Header/>

      <div className={classes.root}>
        <SearchBar/>

        <Button onClick={() => sendToServer(website)} variant="contained" color="primary" className={classes.content}>
          תבדקו לי
        </Button>

        <BottomToast/>

      </div>

    </div>
  );
}

export default App;
