import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';

const SearchBar = () => {

  return (
    <form Validate autoComplete="off">
      <TextField id="outlined-basic" label="Enter website address" fullWidth variant="outlined"/>
    </form>
  );
}

export default SearchBar;