import React from 'react';
import background_gradient from "../assets/background_gradient.png";
import TeamPage from "./TeamPage";

const About = () => {

  return (
    <div id='about-us-section' style={{
      backgroundImage: `url(${background_gradient})`,
      paddingTop: '5%',
      paddingBottom: '5%',
      // paddingRight: '10%',
      // paddingLeft: '10%'
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
  );

}
export default About;
