import React, {useContext} from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {UserContext} from "../UserContext";
import useStyles from "../hooks/useStyles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const BottomToast = () => {
  const classes = useStyles();
  const {openToast, setOpenToast, statusToast, messageToast} = useContext(UserContext);

  return (
    <Snackbar open={openToast}
              onClose={statusToast === 'error' || statusToast === 'success' ? handleClose : null}>
      <Alert className='bottom_toast'  severity={statusToast} icon={false}>
        {messageToast}
      </Alert>
    </Snackbar>
  );

  function handleClose() {
    setOpenToast(false)
  }
}

export default BottomToast;