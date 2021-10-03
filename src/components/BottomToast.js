import React, {useContext} from "react";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {UserContext} from "../UserContext";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const BottomToast = () => {
  const {openToast, setOpenToast, statusToast, messageHeaderToast} = useContext(UserContext);

  return (
    <Snackbar open={openToast}
              onClose={statusToast === 'error' || statusToast === 'success' ? handleClose : null}>
      <Alert className='bottom_toast'  severity={statusToast} icon={false}>
        {messageHeaderToast}
      </Alert>
    </Snackbar>
  );

  function handleClose() {
    setOpenToast(false)
  }
}

export default BottomToast;