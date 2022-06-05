import React from "react";
import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  console.log(window.pageYOffset);
  return (
    <>
      <div className={styles.navsection}>
        <section className={styles.navflex}>
          <ul className={styles.bridget}>
            <a href="#landing">Bridget Pereira</a>
          </ul>

          <button
            className={styles.menuWidget}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FontAwesomeIcon icon="bars" />
          </button>
          <div
            className={
              isNavExpanded ? styles.navItemsFlexExpanded : styles.navItemsFlex
            }
          >
            <ul className={styles.aboutme}>
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                href="#about"
              >
                About
              </a>
            </ul>
            <br />
            <ul className={styles.skills}>
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                href="#skills"
              >
                Skills
              </a>
            </ul>
            <br />
            <ul className={styles.projects}>
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                href="#projects"
              >
                Projects
              </a>
            </ul>
            <br />
            <ul className={styles.sayhello}>
              <a
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
                href="#sayhello"
              >
                Say hello!
              </a>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
