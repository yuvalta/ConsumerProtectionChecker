import React, {createContext, useState} from "react";

const UserContext = createContext("default website");

const UserProvider = ({children}) => {
  const [website, setWebsite] = useState("None");
  const [time, setTime] = useState("00:00");

  return (
    <UserContext.Provider
      value={{website, setWebsite, time, setTime}}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };