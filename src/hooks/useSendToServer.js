import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {UserContext} from "../UserContext";
import io from "socket.io-client";

// export const sio = io('http://127.0.0.1:8000');
export const sio = io('https://consumer-checker.herokuapp.com');



const useSendToServer = (url) => {

  const {setOpenToast, setStatusToast, setMessageToast, setProgress} = useContext(UserContext);

  useEffect(() => {
      sio.on('connect', () => {
        console.log('connected')
      });

      sio.on('disconnect', () => {
        console.log('disconnected')
      });

      sio.on('status_update', (data) => {
        console.log(data)

        setProgress(parseInt(data))

        if (data === 100) {
          setMessageToast('סריקה הסתיימה בהצלחה');
          setStatusToast('success');
        }

      });
    }, []
  )

  const sendToServer = (url) => {
    setOpenToast(true)
    setMessageToast("סריקה התחילה");
    setStatusToast('info')

    sio.emit('start_checking', url)

    // axios.post('http://127.0.0.1:5000/validate_web', {
    //   website_url: url
    // }).then((response) => {
    //   console.log(response)
    //
    //   if (response.status === 200) {
    //     setMessageToast(response.data);
    //     setStatusToast("success");
    //   }
    // }, (error) => {
    //   console.log(error);
    //   setMessageToast("error");
    //   setStatusToast('error');
    // })
  };

  return [sendToServer];

}

export default useSendToServer;
