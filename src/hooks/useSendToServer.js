import React, {useEffect, useContext} from "react";
import {UserContext} from "../UserContext";
import io from "socket.io-client";

// export const sio = io('http://127.0.0.1:8000');
export const sio = io('https://consumer-checker.herokuapp.com');

const useSendToServer = () => {

  const {
    setOpenToast,
    setStatusToast,
    setMessageHeaderToast,
    setMessageBodyToast,
    setProgress
  } = useContext(UserContext);

  useEffect(() => {
      sio.on('connect', () => {
        console.log('connected')
      });

      sio.on('disconnect', () => {
        console.log('disconnected')
      });

      sio.on('error', (error_data) => {
        console.log('error!')
        setMessageHeaderToast(error_data);
        setStatusToast('error');
      });

      sio.on('final_score', (score) => {
        console.log(score)

        setProgress(0)
        setOpenToast(false)
        setMessageHeaderToast(`קיימים ליקויים אפשריים בשווי של ${(score)} ש"ח 😨`);
        setMessageBodyToast(' רוצים עזרה והכוונה בטיפול בליקויים? דברו איתנו, אנחנו יודעים מה לעשות 🤝');
      });

      sio.on('status_update', (data) => {
        const currentPercentages = parseInt(data.percentages);
        console.log(data)

        setProgress(currentPercentages)
        setMessageHeaderToast(data.phase);
      });
    }, []
  )

  const sendToServer = (url) => {
    setOpenToast(true)
    setMessageHeaderToast("סריקה התחילה");
    setStatusToast('info')

    sio.emit('start_checking', url)
  };

  // function numberWithCommas(number) {
  //   return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  // }

  return [sendToServer];
}

export default useSendToServer;
