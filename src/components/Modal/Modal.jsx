import React from "react";
import ReactDOM from "react-dom";
import projects from "../../data/projects";
import styles from "./Modal.module.scss";

const modalRoot = document.getElementById("modalBackground");

const Modal = (props) => {
  const { project, closeModal } = props;
  const { image_window_url } = props.project;
  let images = require.context("../../../public/images", true);
  let imagepath = images(`./${image_window_url}`);

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            
              
              <div className={styles.modalImage}>
              <button
                className={styles.closeButton}
                onClick={() => closeModal(false)}
              >
                X
              </button>
              <img className={styles.modalImage} src={imagepath} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
