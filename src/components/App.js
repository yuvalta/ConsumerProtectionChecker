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
  const {website, setWebsite} = useContext(UserContext);

  const [open, setOpen] = useState(false);
  const [response, setResponse] = useState(false);
  const [status, setStatus] = useState('info');

  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const getTime = () => {

    axios.post('http://127.0.0.1:5000/validate_web', {
      website_url: website
    }).then((response) => {
      console.log(response)
      if (response.status === 200) {
        setResponse("סריקה התחילה");
        setStatus("success");
      }
    }, (error) => {
      console.log(error);
      setResponse("שגיאה בסריקה");
      setStatus('error');
    });
  }

  function submitWebsite() {
    // start spinner
    // encrypt website
    // send to server
    getTime();
    // wait for response
    // show response
    handleClick();
  }

  return (
    <div>
      <Header/>

      <div className={classes.root}>
        <SearchBar/>

        <Button onClick={() => submitWebsite()} variant="contained" color="primary" className={classes.content}>
          תבדקו לי
        </Button>

        <BottomToast open={open} onClose={handleClose} color={status} message={response}/>

      </div>

    </div>
  );
}

export default App;
