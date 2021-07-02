import React, {createContext, useState} from "react";

const UserContext = createContext("default website");

const UserProvider = ({children}) => {
  const [website, setWebsite] = useState("None");
  const [openToast, setOpenToast] = useState(false);
  const [statusToast, setStatusToast] = useState("info");
  const [messageToast, setMessageToast] = useState(false);

  return (
    <UserContext.Provider
      value={{website, setWebsite, openToast, setOpenToast, statusToast, setStatusToast, messageToast, setMessageToast}}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};