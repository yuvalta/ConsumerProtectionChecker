import React, {createRef, useContext, useEffect} from "react";
import AppHeader from "./AppHeader";
import SearchBar from "./SearchBar";
import useSendToServer, {sio} from '../hooks/useSendToServer';
import {UserContext} from '../UserContext';
import mainImage from '../assets/website_man_image.png'
import background from "../assets/background.png";
import bottom_wave from "../assets/bottom_wave.png";
import background_gradient from "../assets/background_gradient.png";
import '../stylesheet.css'
import {Route, Switch, BrowserRouter, Link} from "react-router-dom";
import About from "./About";
import TestResult from "./TestResult";
import TeamPage from "./TeamPage";
import GetUserData from "./GetUserData";

const App = () => {
  const {website} = useContext(UserContext);
  const [sendToServer] = useSendToServer()

  useEffect(() => {
      console.log('abort')
      sio.emit('abort')
    }, []
  )

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
      <div>
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
              </p>
            </div>
            {searchBarDiv()}
            {/*{isMobile ? null : searchBarDiv()}*/}
          </div>

          <img className='main_image' src={mainImage} width='45%' height='45%'/>

        </div>
        {
          // isMobile ? searchBarDiv() : null
        }
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
          <div className='all-page-container'>
            <div className='one-page-part'>
              <Switch>
                <Route path="/testResult">
                  <TestResult/>
                </Route>

                <Route path="/about">
                  <About/>
                </Route>

                <Route path="/home">
                  {getMainBody()}
                </Route>
              </Switch>
            </div>

            <div id='about-us-section' className='one-page-part' style={{
              backgroundImage: `url(${background_gradient})`,
              padding: '5%'
            }}>
              <h1>
                מי אנחנו?
              </h1>
              <p>
                לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים.
                קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז
                דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
                נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.
              </p>

              <p>
                ולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום,
                לפריקך תצטריק לרטי.
              </p>

              <TeamPage/>
            </div>

            <div id='contact-us' className='one-page-part'
                 // style={{backgroundImage: `url(${bottom_wave})`, padding: '5%'}}
            >
              <h1>
                דברו איתנו
              </h1>
              <GetUserData/>
            </div>
          </div>
        </BrowserRouter>

      </div>

    </div>
  );
};

export default App;
