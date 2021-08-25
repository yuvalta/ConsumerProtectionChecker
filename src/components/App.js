import React, {createRef, useContext, useEffect} from "react";
import AppHeader from "./AppHeader";
import SearchBar from "./SearchBar";
import useSendToServer, {sio} from '../hooks/useSendToServer';
import {UserContext} from '../UserContext';
import mainImage from '../assets/website_man_image.png'
import background from "../assets/background.png";

import background_gradient from "../assets/background_gradient.png";
import '../stylesheet.css'
import {Route, Switch, BrowserRouter, Link} from "react-router-dom";
import About from "./About";
import TestResult from "./TestResult";
import ContactUs from "./ContactUs";

const App = () => {
  const {website} = useContext(UserContext);
  const [sendToServer] = useSendToServer()

  const searchBarDiv = () => {
    return (
      <div className='container'>

        <Link className='button-link' to="/testResult">
          <button className='button' onClick={() => sendToServer(website)}>
            תבדקו לי
          </button>
        </Link>

        <SearchBar/>
      </div>
    );
  };

  const getMainBody = () => {
    return (
      <div className='one-page-part'>
        <div className='main_content_side_by_side_container'>
          <div className='content'>
            <div>
              <h1>האתר היחידי שדואג לאתר שלך</h1>
              <p>מה עושים?
                <br/>
                <br/>
                מכניסים את הכתובת של האתר מסחר שלכם ממש פה מתחת,
                ומגלים ליקויים אפשריים באתר
                <br/>
                <br/>
              </p>
            </div>
            {searchBarDiv()}
          </div>

          <img className='main_image' src={mainImage} width='45%' height='45%'/>

        </div>
      </div>
    );
  };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh',
      marginTop: '-9px'
    }}>
      <div>

        <BrowserRouter>
          <AppHeader/>

          <Switch>
            <Route path="/testResult">
              <TestResult/>
            </Route>

            <Route path="/">
              <div className='all-page-container'>
                {getMainBody()}

                <About className='one-page-part'/>

                <ContactUs className='one-page-part'/>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>

      </div>

    </div>
  );
};

export default App;
