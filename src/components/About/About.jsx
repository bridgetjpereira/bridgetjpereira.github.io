import React from "react";
import styles from "./About.module.scss";
import pin from "../../pin1_svg.svg";
import Animation from "../Animation/Animation";
import Navbar from "../Navbar/Navbar";
import Birds from "../../blueflyingbirdsplane.svg";
// import Birds from "../../whitehighflyingbirdairplane copy.svg";
import navigationpin from "../../navigationpin1_svg.svg";
// import flyingplanebirds from "src/highflyingbirdairplane.jpg"
import flyingplane from "../../paper-aeroplane-landing-page-2.svg";
// import skyline from  "../../skylinepeach.png";
import { faAssistiveListeningSystems } from "@fortawesome/free-solid-svg-icons";
import newBirds from "../../planebirdscroppednoline.png";
// import newBirds from "../../planebirdscroppedtinyline.png";
// import newBirds from "../../aboutplanetinyline.png";
import skyline from "../../skylineopacity50.svg";

const About = () => {
  return (
    <>
      <div className={styles.aboutpage}>
        <a name="about"></a>
        {/* <div className={styles.aboutpagetop}></div> */}
        <div className= {styles.aboutsectionflex}>
 
        <section className={styles.aboutsection}>
          <div className={styles.aboutbox}>
           
              <div className={styles.abouttitleflex}>
                <div className={styles.abouttitle}>About</div>
              </div>
              <div className={styles.imageflex}>
                <img className={styles.newBirds} src={newBirds} alt="birds" />
           
            <div className={styles.pinnoteboxflex}>
              <div className={styles.pinflex}>
                <img
                  className={styles.navigationpin}
                  src={navigationpin}
                  alt="locationpin"
                />
              </div>

              <div className={styles.aboutparagraph}>
                <div className={styles.aboutparagraphinnerbox}>
                  Hi, I'm Bridget. I have recently completed a course in
                  software development at _nology. I have a background in
                  architecture and design. Currently based in London, I'm open
                  to relocating and I'm interested in exploring exciting tech
                  roles with development opportunities.
                </div>
              </div>
              </div>
            </div>
              {/* <div className={styles.Animation}>
          <Animation />
        </div> */}
            </div>
        
        </section>
        </div>
      </div>
    </>
  );
};

export default About;
