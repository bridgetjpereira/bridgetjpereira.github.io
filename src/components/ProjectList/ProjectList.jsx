import React from "react";
import Projectbox from "../Projectbox/Projectbox.jsx";
import styles from "./ProjectList.module.scss";
import projects from "../../data/projects";

const ProjectList = () => {
  const getProjectJSX = (project) => (
    <div className={styles.ProjectList} key={project.name}>
      <Projectbox project={project} />
    </div>
  );

  return (
    <section className={styles.content}>{projects.map(getProjectJSX)}</section>
  );
};

export default ProjectList;
