import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {UserProvider} from "./UserContext"

ReactDOM.render(
  <UserProvider>
    <App dir="rtl"/>
  </UserProvider>,
  document.querySelector("#root"));

// <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
