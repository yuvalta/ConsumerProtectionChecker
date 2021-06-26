import React, {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [website, setWebsite] = useState("None");

  return (
    <UserContext.Provider
      value={{website, setWebsite}}
    >
      {children}
    </UserContext.Provider>
  );
};