import React, { useState } from "react";
import Projectlabel from "../Projectlabel/Projectlabel";
import styles from "./Projectbox.module.scss";
import projects from "../../data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../Modal/Modal";

const Projectbox = (props) => {
  const { project, closeModal } = props;
  const { name, tagline, color, image_window_url, url } = props.project;

  let images = require.context("../../../public/images", true);
  let imagepath = images(`./${image_window_url}`);

  const [openModal, setOpenModal] = useState(false);

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  // const overlayOn = () => {
  //   document.getElementById("modalBackground").style.display = "block";

  // };

  return (
    <>
      <div onMouseEnter={onHover} onMouseLeave={onLeave}>
        {hover ? (
          <>
            <div className={styles.openModal}>
              {openModal && (
                <Modal closeModal={setOpenModal} project={project} />
              )}
            </div>
            <div
              className={styles.projectTitle}
              style={{ backgroundColor: color }}
            >
              <div className={styles.h2flex}>
                <button
                  className={styles.openModalBtn}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <h2 style={{ backgroundColor: color }}>{name}</h2>
                </button>
              </div>

              <div>
                <h3>{tagline}</h3>
                <div>
                  <div className={styles.linkFlexProjectCode}>
                    <div className={styles.linkFlexProject}>
                      <a className={styles.projectLinks}>
                        <FontAwesomeIcon icon="angles-right" />
                        <div
                          className={styles.projectLinkProject}
                          style={{ color: color }}
                        >
                          View project
                        </div>
                      </a>
                    </div>

                    <div className={styles.linkFlexCode}>
                      <a href={url} className={styles.projectLinks}>
                        <FontAwesomeIcon icon="angles-right" />

                        <div
                          className={styles.projectLinkCode}
                          style={{ color: color }}
                        >
                          View code
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Projectlabel project={project} />
        )}
      </div>
    </>
  );
};

export default Projectbox;
