import React from "react";
import styles from "./Landingpage.module.scss";
import paperaeroplanepile from "../../aeroplane-pile-cropped.svg";
import flyingplane from "../../paper-aeroplane-landing-page-2.svg";
import Typical from "react-typical";

const Landingpage = () => {
  return (
    <>
      <div className={styles.mainpage}>
        <a name="landing"></a>

        <div className={styles.titlepagetop}>
          <img className={styles.flyingplane} src={flyingplane} />
        </div>
        <main className={styles.mainflex}>
          <div className={styles.gridlandingpage}>
            <div className={styles.titleflex}>
              <div className={styles.landingtitle}>Bridget Pereira</div>
              <div className={styles.abouttext}>Junior Web Developer</div>
            </div>
            <h1 className={styles.comeonin}>
              <a href="#map">
                <div className={styles.comeinscroll}>Come on in</div>
                <div className={styles.typical}>
                  <Typical
                    steps={["Come on in", 2000]}
                    loop={1}
                    wrapper="a"
                    speed="humanity"
                  />
                </div>
              </a>
            </h1>

            <div className={styles.container}>
              <div className={styles.field}>
                <a href="#map">
                  {/* <div className={styles.mouse}></div> */}
                  <div className={styles.scroll}></div>
                </a>
                {/* <div className={styles.arrow}></div> */}
              </div>
            </div>
          </div>

          <div className={styles.landingfooterflex}>
            <img className={styles.planepile} src={paperaeroplanepile} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Landingpage;
