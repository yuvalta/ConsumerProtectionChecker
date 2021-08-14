import React, {useState, useContext} from "react";
import TextField from '@material-ui/core/TextField';
import {UserContext} from '../UserContext';
import useSendToServer from "../hooks/useSendToServer";
import useStyles from "../hooks/useStyles";
import '../stylesheet.css'
import { useHistory } from "react-router-dom";

const MAX_LENGTH_WEBSITE_URL = 500;

const SearchBar = () => {
  const website = useContext(UserContext);
  const [sendToServer] = useSendToServer()
  const history = useHistory()

  const [error, setError] = useState("");

  return (
    <form className='searchbar' noValidate autoComplete="off" onSubmit={onSubmit}>
      <input className='input' onChange={(event) => validateWebsiteValue(event)}
             type='text' id="outlined-basic" name="Enter website address"/>
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
      setError("קישור ארוך מידי")
      return
    } else {
      setError("")
    }

    website.setWebsite(website_address)
  }
};

export default SearchBar;