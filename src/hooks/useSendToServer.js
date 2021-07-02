import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {UserContext} from "../UserContext";

const useSendToServer = (url) => {

  const {openToast, setOpenToast, setStatusToast, setMessageToast} = useContext(UserContext);

  const sendToServer = (url) => {
    setOpenToast(true)
    setMessageToast("סריקה התחילה");
    setStatusToast('info')

    axios.post('http://127.0.0.1:5000/validate_web', {
      website_url: url
    }).then((response) => {
      console.log(response)
      if (response.status === 200) {
        setMessageToast(response.data);
        setStatusToast("success");
      }
    }, (error) => {
      console.log(error);
      setMessageToast("error");
      setStatusToast('error');
    })
  };

  return [sendToServer];

}

export default useSendToServer;
