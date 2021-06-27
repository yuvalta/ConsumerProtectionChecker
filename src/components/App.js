import React, {useState, useContext} from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { UserContext } from '../UserContext';
import {makeStyles} from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  function submitWebsite() {
    console.log("here")
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

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {website}
          </Alert>
        </Snackbar>

      </div>

    </div>
  );
}

export default App;
