import React, {useContext} from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {UserContext} from "../UserContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const BottomToast = ({color, message}) => {

  const {openToast, setOpenToast, statusToast, messageToast} = useContext(UserContext);

  return (
    <Snackbar open={openToast} autoHideDuration={6000} onClose={() => setOpenToast(false)}>
      <Alert severity={statusToast}>
        {messageToast}
      </Alert>
    </Snackbar>
  );
}

export default BottomToast;