import React from "react";
import styles from "./Skills.module.scss";
import navigationpin from "../../navigationpin1_svg.svg";
import newBirds from "../../whitehighflyingbirdairplane copy.svg";
import plane from "../../flyingplanereact.png";
import jungle from "../../finaljunglewhole gradient.svg";
// import jungle from "../../junglewith plane.png";
import flyingplane from "../../jungleplanecropped@3x.png";

const Skills = () => {
  return (
    <>
      <div className={styles.skillspage}>
        <a name="skills"></a>
        <div className={styles.skillssectionboxflex}>
          <div className={styles.skillssectionbox}>
            <div className={styles.skillstitlenotecardflex}>
              <div className={styles.skillstitle}>Skills</div>

           
                <div className={styles.skillsboxflex}>
                  <div className={styles.skillsbox}>
                    <div className={styles.cardpinflex}>
                      <div className={styles.pinflex}>
                        <img
                          className={styles.navigationpin}
                          src={navigationpin}
                          alt="locationpin"
                        />
                      </div>
                    </div>
                    <div className={styles.skillslistbox}>
                      <div className={styles.skillslistinnerbox}>
                        <div className={styles.skillslistflex}>
                          <div className={styles.skillslist}>
                            <br />
                            <div className={styles.JavaScript}>
                              JavaScript (ES6)
                            </div>
                            <div className={styles.React}>React</div>
                            <div className={styles.Firebase}>Firebase</div>
                            <div className={styles.HTML}>HTML</div>
                            <div className={styles.Sass}>Sass</div>
                            <div className={styles.Node}>Node</div>
                            <div className={styles.CSS}>CSS</div>
                            <br />
                          </div>
                          <div className={styles.skillslisttwoflex}>
                            <div className={styles.skillslisttwo}>
                              <br />
                              <div className={styles.Adobe}>
                                Adobe Design Packages
                              </div>
                              <div className={styles.agile}>Agile</div>
                              <div className={styles.testing}>Testing</div>
                              <div className={styles.git}>Git</div>
                              <div className={styles.bash}>Bash</div>
                              <div className={styles.OOP}>OOP</div>
                              <div className={styles.APIs}>APIs</div>
                            </div>
                          </div>
                        </div>
                      </div>
              
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.imageflex}>
              <img
                className={styles.flyingplane}
                src={flyingplane}
                alt="flyingplane"
              />
            </div>
            </div>
         
          </div>
        </div>
      
    </>
  );
};

export default Skills;
