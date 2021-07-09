import React, {useState, useEffect, useContext} from "react";
import {UserContext} from "../UserContext";
import io from "socket.io-client";

// export const sio = io('http://127.0.0.1:8000');
export const sio = io('https://consumer-checker.herokuapp.com');

const useSendToServer = () => {

  const {setOpenToast, setStatusToast, setMessageToast, setProgress} = useContext(UserContext);

  useEffect(() => {


      sio.on('connect', () => {
        // debugger
        console.log('connected')
      });

      sio.on('disconnect', () => {
        console.log('disconnected')
      });

      sio.on('error', () => {
        console.log('error!')
        setMessageToast("error");
        setStatusToast('error');
      });

      sio.on('status_update', (data) => {
        const currentPercentages = parseInt(data.percentages);
        console.log(data)

        setProgress(currentPercentages)
        setMessageToast(data.phase);

        if (currentPercentages === 100) {
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
  };

  return [sendToServer];

}

export default useSendToServer;
