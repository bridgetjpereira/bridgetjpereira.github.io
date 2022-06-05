import React from "react";
import styles from "./Projects.module.scss";
import ProjectList from "../ProjectList/ProjectList";
import Projectbox from "../Projectbox/Projectbox.jsx";
import Navbar from "../Navbar/Navbar";
import navigationpin from "../../navigationpin1_svg.svg";

const Projects = (props) => {
  const { projects } = props;
  return (
    <>
      <div className={styles.projectspage}>
        <a name="projects"></a>
        <div className={styles.projectsFlex}>
          <div className={styles.projecttitleflex}>
            <div className={styles.projectstitle}>Projects</div>

            {/* <img
            className={styles.navigationpin}
            src={navigationpin}
            alt="locationpin"
          />
          <div className={styles.projecttitle}>Projects</div> */}
            <div className={styles.projectsgridflex}>
              <div className={styles.projectsgrid}>
                <ProjectList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
