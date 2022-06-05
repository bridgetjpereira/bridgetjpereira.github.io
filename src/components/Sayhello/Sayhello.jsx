import React from "react";
import styles from "./Sayhello.module.scss";
import birds from "../../Tinybirds.png";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sayhello = () => {
  return (
    <>
      <a name="sayhello"></a>
      <div className={styles.sayhellopage}>
        {/* <Navbar /> */}
        <div className={styles.sayhellosectionflex}>
          <div className={styles.sayhellosection}>
            <div className={styles.sayhellotitle}>Say hello!</div>
            <div className={styles.sayhelloparagraph}>
              I'd love to hear from you.
            </div>

            <div className={styles.sayhellofooterflex}>
              <div className={styles.sayhellofooter}> </div>
            </div>
            <div className={styles.contactslinktopflex}>
              <div className={styles.email}>
                For freelance work, job enquiries or a chat, please email me:
                <div className={styles.buttoncontactme}>
                  <a href="mailto:bridgetjpereira@gmail.com">
                    bridgetjpereira@gmail.com
                  </a>
                </div>
                <div className={styles.iconsFlex}>
                  <div className={styles.github}>
                    <a href="https://github.com/bridgetjpereira">
                      <FontAwesomeIcon icon="fab fa-github" />
                    </a>
                  </div>
                  <div className={styles.linkedin}>
                    <a href="https://www.linkedin.com">
                      <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className={styles.backtotopflex}>
                  <a href="#top" className={styles.contactslinktop}>
                    Back to top
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sayhello;
