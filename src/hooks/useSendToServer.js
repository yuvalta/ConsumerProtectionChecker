import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {UserContext} from "../UserContext";

const useSendToServer = (url) => {
  // const [response, setResponse] = useState(false);
  // const [status, setStatus] = useState('info');

  const {openToast, setOpenToast, setStatusToast, setMessageToast} = useContext(UserContext);


  // useEffect(() => {
  //   if (url != undefined) {
  //     sendToServer(url)
  //   }
  // }, [url]);


  const sendToServer = (url) => {
    setOpenToast(true)

    axios.post('http://127.0.0.1:5000/validate_web', {
      website_url: url
    }).then((response) => {
      console.log(response)
      if (response.status === 200) {
        setMessageToast("סריקה התחילה");
        setStatusToast("success");
      }
    }, (error) => {
      console.log(error);
      setMessageToast("error");
      setStatusToast('error');
    });
  };

  return [sendToServer];

}

export default useSendToServer;
