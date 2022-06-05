import React, { Context } from "react";
import styles from "./Projectlabel.module.scss";
import projects from "../../data/projects";

const Projectlabel = (props) => {
  const { name, image_url, tagline } = props.project;
  let images = require.context("../../../public/images", true);
  let imagepath = images(`./${image_url}`);

  return (
    <div className={styles.Projectlabel}>
      <img className={styles.imagepath} src={imagepath} alt="Best Project" />
      {/* <div className={styles.projectTitle}>
        <h2>{name}</h2>
      </div>  */}

      {/* <div className={styles.tagLine}>
        <h3>{tagline}</h3>
      </div> */}
    </div>
  );
};

export default Projectlabel;
