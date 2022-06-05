import React from "react";
import styles from "./Navmap.module.scss";
import worldmap from "../../final world map wiki_white.svg";
// import navigationpin from "../../navigationpin1_svg.svg";
import navigationpin from "../../shadowmappin.svg";
// import mapfooter from "../../final world map wiki_amendededge.svg";
import Navbar from "../Navbar/Navbar";

const Navmap = () => {
  return (
    <>
      <Navbar />
      <div className={styles.navmappage}>
        <a name="top"></a>
        <a name="map"></a>
        <div className={styles.navmapsectionflex}>
          <div className={styles.navmapsection}>
            <div className={styles.navigationgridcontainer}>
              <div className={styles.worldmapflex}>
                <div className={styles.worldmapcontainer}>
                  <div className={styles.worldmap}>
                    <div className={styles.navigationflexcontainer1}>
                      <div className={styles.navigationgriditem1}>
                        <img
                          className={styles.navigationpin}
                          src={navigationpin}
                          alt="locationpin"
                        />
                      </div>
                      <div className={styles.navigationgriditem5}>
                        <a
                          className={styles.navigationbuttongriditem5}
                          href="#about"
                        >
                          About
                        </a>
                      </div>
                    </div>

                    <div className={styles.navigationflexcontainer2}>
                      <div className={styles.navigationgriditem2}>
                        <img
                          className={styles.navigationpin}
                          src={navigationpin}
                          alt="locationpin"
                        />
                      </div>
                      <div className={styles.navigationgriditem6}>
                        <a
                          class={styles.navigationbuttongriditem6}
                          href="#skills"
                        >
                          Skills
                        </a>
                      </div>
                    </div>

                    <div className={styles.navigationflexcontainer3}>
                      <div className={styles.navigationgriditem3}>
                        <img
                          className={styles.navigationpin}
                          src={navigationpin}
                          alt="locationpin"
                        />
                      </div>
                      <div className={styles.navigationgriditem7}>
                        <a
                          className={styles.navigationbuttongriditem7}
                          href="#projects"
                        >
                          Projects
                        </a>
                      </div>
                    </div>

                    <div className={styles.navigationflexcontainer4}>
                      <div className={styles.navigationgriditem4}>
                        <img
                          className={styles.navigationpin}
                          src={navigationpin}
                          alt="locationpin"
                        />
                      </div>
                      <div className={styles.navigationgriditem8}>
                        <a
                          className={styles.navigationbuttongriditem8}
                          href="#sayhello"
                        >
                          Say hello!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navmap;
