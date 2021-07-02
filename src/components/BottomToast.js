import React, {useContext} from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {UserContext} from "../UserContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const BottomToast = ({color, message}) => {

  const {openToast, setOpenToast, statusToast, messageToast, setStatusToast, setMessageToast} = useContext(UserContext);

  return (
    <Snackbar open={openToast} onClose={handleClose}>
      <Alert severity={statusToast}>
        {messageToast}
      </Alert>
    </Snackbar>
  );

  function handleClose() {
    setOpenToast(false)
    // setStatusToast('info')
    // setMessageToast('')
  }
}

export default BottomToast;