import React from "react";
import styles from "./App.module.scss";
import paperaeroplanepile from "./aeroplane-pile-cropped.svg";
import flyingplane from "./paper-aeroplane-landing-page-2.svg";
import worldmap from "./final world map wiki_white.svg";
import About from "./components/About/About.jsx";
import Landingpage from "./components/Landingpage/Landingpage";
import Navmap from "./components/Navmap/Navmap";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Sayhello from "./components/Sayhello/Sayhello";
import Routes from "./containers/Routes/Routes";

function App() {
  return (
    <>
      <Landingpage />
      <Navmap />
      <About />
      <Skills />
      <Projects />
      <Sayhello />
    </>
  );
}

export default App;
