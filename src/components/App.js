import React, {useState, useContext} from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Button from '@material-ui/core/Button';
import BottomToast from './BottomToast';
import {UserContext} from '../UserContext';
import {makeStyles} from '@material-ui/core/styles';
import axios from "axios";


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
  const {website, setWebsite, time, setTime} = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const getTime = async () => {
    const res = await axios.get(`http://127.0.0.1:5000/time`);
    setTime(res.data.time)
  }

  function submitWebsite() {
    // start spinner

    // send to server
    getTime();
    // wait for response
    // show response
    handleClick();
  }

  console.log({time})

  return (
    <div>
      <Header/>

      <div className={classes.root}>
        <SearchBar/>

        <Button onClick={() => submitWebsite()} variant="contained" color="primary" className={classes.content}>
          תבדקו לי
        </Button>

        <BottomToast open={open} onClose={handleClose} color="success" message={time}/>

      </div>

    </div>
  );
}

export default App;
