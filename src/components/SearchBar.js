import React, {useState, useContext, useEffect} from "react";
import {UserContext} from '../UserContext';
import useSendToServer, {sio} from "../hooks/useSendToServer";
import '../stylesheet.css'
import {useHistory} from "react-router-dom";

const MAX_LENGTH_WEBSITE_URL = 200;

const SearchBar = () => {
  const website = useContext(UserContext);
  const [sendToServer] = useSendToServer()
  const history = useHistory()

  const [error, setError] = useState("");

  useEffect(() => {
      console.log('abort')
      sio.emit('abort')
    }, []
  )

  return (
    <form className='searchbar' noValidate autoComplete="on" onSubmit={onSubmit}>
      <input className='input' onChange={(event) => validateWebsiteValue(event)}
             type='text' id="outlined-basic" name="Enter website address"/>

      <h1 className='error-text'>{error}</h1>
    </form>
  );

  function onSubmit(event) {
    event.preventDefault()
    history.push('/testResult')
    sendToServer(website.website)
  };


  function validateWebsiteValue(event) {
    const website_address = event.target.value;
    if (website_address.length > MAX_LENGTH_WEBSITE_URL) {
      setError('קישור ארוך מידי')
      event.target.value = website_address.substr(0, MAX_LENGTH_WEBSITE_URL)
      return
    } else if (website_address.length === 0) {
      setError('')
      return
    } else if (!/[A-Za-z0-9-_]/.test(website_address)) {
      setError('אותיות באנגלית בלבד')
      event.target.value = ''
      return
    } else {
      setError("")
    }

    website.setWebsite(website_address)
  }
};

export default SearchBar;