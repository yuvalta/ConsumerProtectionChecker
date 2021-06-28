import React, {useState, useContext} from "react";
import TextField from '@material-ui/core/TextField';
import { UserContext } from '../UserContext';

const SearchBar = () => {
  const website = useContext(UserContext);

  function setTextFieldValue(event) {
    website.setWebsite(event.target.value);
  }

  return (
    <form noValidate autoComplete="off">
      <TextField onChange={(event) => setTextFieldValue(event)}
                 onSubmit={(event) => setTextFieldValue(event)}
                 id="outlined-basic" label="Enter website address"
                 fullWidth
                 variant="outlined"/>
    </form>
  );
}

export default SearchBar;