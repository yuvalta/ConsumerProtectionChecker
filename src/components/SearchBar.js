import React, {useState, useContext} from "react";
import TextField from '@material-ui/core/TextField';
import {UserContext} from '../UserContext';
import useSendToServer from "../hooks/useSendToServer";
import useStyles from "../hooks/useStyles";
import {COLORS} from "../colors";

const MAX_LENGTH_WEBSITE_URL = 500;

const SearchBar = () => {
  const classes = useStyles();
  const website = useContext(UserContext);
  const [sendToServer] = useSendToServer()

  const [error, setError] = useState("");

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit} >
      <TextField onChange={(event) => validateWebsiteValue(event)}
                 error={error !== ""}
                 helperText={error !== "" ? error : ' '}
                 id="outlined-basic" label="Enter website address"
                 fullWidth
                 variant="outlined"/>
    </form>
  );

  function onSubmit(event) {
    event.preventDefault()

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