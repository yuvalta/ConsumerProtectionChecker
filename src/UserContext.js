import React, {createContext, useState} from "react";

const UserContext = createContext("default website");

const UserProvider = ({children}) => {
  const [website, setWebsite] = useState("None");
  const [openToast, setOpenToast] = useState(false);
  const [statusToast, setStatusToast] = useState("info");
  const [messageHeaderToast, setMessageHeaderToast] = useState(false);
  const [messageBodyToast, setMessageBodyToast] = useState('');
  const [progress, setProgress] = useState(0);
  const [userEmail, setUserEmail] = useState('empty');
  const [userFullName, setUserFullName] = useState('empty');
  const [userPhone, setUserPhone] = useState('empty');
  const [submitDate, setSubmitDate] = useState('empty');

  return (
    <UserContext.Provider
      value={{
        website,
        setWebsite,
        openToast,
        setOpenToast,
        statusToast,
        setStatusToast,
        messageHeaderToast,
        setMessageHeaderToast,
        progress,
        setProgress,
        userEmail,
        setUserEmail,
        userFullName,
        setUserFullName,
        userPhone,
        setUserPhone,
        submitDate,
        setSubmitDate,
        messageBodyToast,
        setMessageBodyToast
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};