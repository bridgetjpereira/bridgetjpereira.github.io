import { useState } from "react";
import styles from "./Overlay.module.scss";
import projects from "../../data/projects";

function Overlay(props) {
  const { project } = props;
  const { image_window_url } = props.project;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div>
      <div className="main-container">
        <div className="main-container__grid">
          <button
            onClick={() => setShowOverlay(true)}
            style={{ overlayImage: image_window_url }}
          >
            View project here
          </button>
          {showOverlay && <div className="targeting-box" />}
        </div>
      </div>
    </div>
  );
}

export default Overlay;
