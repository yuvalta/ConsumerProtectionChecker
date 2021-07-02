import React, {createContext, useState} from "react";

const UserContext = createContext("default website");

const UserProvider = ({children}) => {
  const [website, setWebsite] = useState("None");

  return (
    <UserContext.Provider
      value={{website, setWebsite}}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };